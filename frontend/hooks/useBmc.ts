// src/features/bmc-builder/hooks/useBmcBuilder.ts

import { useState, useEffect, useRef, useCallback, RefObject } from "react";
import {
  BmcData,
  BmcSection,
  BmcItem,
  DEFAULT_BMC,
} from "@/features/bmc-builder/types/bmc.types"; 

// Helper untuk membuat ID unik
function uid(prefix: string = "id"): string {
  return prefix + Math.random().toString(36).slice(2, 9);
}

// Key LocalStorage
const STORAGE_KEY = "bmc_builder_data";

const WORKER_URL = `https://${process.env.NEXT_PUBLIC_WORKER_URL}/api/parse`; // Dari .env.local

// Response dari Cloudflare Worker
interface ApiResponse {
  bmcJson: Omit<BmcData, "keyResources">;
  rawText: string;
}

interface UseBmcBuilder {
    input: string;
    setInput: (input: string) => void;
    bmc: BmcData;
    loading: boolean;
    raw: string;
    lastAddedId: string | null;
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    inputRef: RefObject<HTMLInputElement | null>;
    isGenerated: boolean;
    handleFocusScroll: () => void;
    handleGenerate: () => Promise<void>;
    addItem: (section: BmcSection) => void;
    updateItem: (section: BmcSection, id: string, text: string) => void;
    removeItem: (section: BmcSection, id: string) => void;
    exportJSON: () => void;
    handleSoftReset: () => void;
    handleHardReset: () => void;
}


export function useBmcBuilder(): UseBmcBuilder {
  const [input, setInput] = useState<string>("");
  const [bmc, setBmc] = useState<BmcData>(DEFAULT_BMC);
  const [loading, setLoading] = useState<boolean>(false);
  const [raw, setRaw] = useState<string>("");
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false); 

  const inputRef = useRef<HTMLInputElement>(null);

  // --- PERSISTENCE (LocalStorage) ---
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        const loadedBmc: BmcData = { ...DEFAULT_BMC, ...parsedData.bmc };
        setBmc(loadedBmc);
        setInput(parsedData.input || "");
        setRaw(parsedData.raw || "");
      } catch (error) {
        console.error("Gagal memuat data dari LocalStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    const dataToStore = {
      bmc,
      input,
      raw,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
  }, [bmc, input, raw]);

  // --- HANDLERS ---
  const handleFocusScroll = useCallback(() => {
    if (inputRef.current) {
      const offset = 20;
      const rect = inputRef.current.getBoundingClientRect();
      const targetPosition = window.scrollY + rect.top - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  async function handleGenerate(): Promise<void> {
    if (!input.trim()) return;
    if (!WORKER_URL) {
      alert("Error: NEXT_PUBLIC_WORKER_URL belum dikonfigurasi di .env.local");
      return;
    }

    setLoading(true);
    setIsGenerated(false); 
    setRaw("Mengirim permintaan ke Cloudflare Worker..."); 

    try {
        const res = await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: input }), 
        });
        
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Worker Error: ${res.status} - ${errorText}`);
        }
        
        const data: ApiResponse = await res.json();
        
        const newBmc: BmcData = {
            ...DEFAULT_BMC,
            ...data.bmcJson, 
        };

        setBmc(newBmc);
        setRaw(data.rawText || "Parsed successfully via Worker.");
        setIsGenerated(true); 
    } catch (e) {
        const errorMessage = (e as Error).message;
        alert("Gagal generate: " + errorMessage);
        setRaw("Error: " + errorMessage);
    } finally {
        setLoading(false);
    }
  }

  function addItem(section: BmcSection): void {
    const newId = uid(section);
    const copy = { ...bmc };
    const arr: BmcItem[] = [...(copy[section] || [])];
    arr.push({ id: newId, text: "" });
    (copy[section] as BmcItem[]) = arr; 
    setBmc(copy);
    setLastAddedId(newId);
  }

  function updateItem(section: BmcSection, id: string, text: string): void {
    const copy = { ...bmc };
    (copy[section] as BmcItem[]) = (copy[section] as BmcItem[]).map((it) =>
      it.id === id ? { ...it, text } : it
    );
    setBmc(copy);
  }

  function removeItem(section: BmcSection, id: string): void {
    const copy = { ...bmc };
    (copy[section] as BmcItem[]) = (copy[section] as BmcItem[]).filter(
      (it) => it.id !== id
    );
    setBmc(copy);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setLastAddedId(null);
  }

  function exportJSON(): void {
    const blob = new Blob([JSON.stringify(bmc, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "bmc.json";
    a.click();
  }

  const handleSoftReset = () => {
    setInput("");
    setBmc(DEFAULT_BMC);
    setRaw("");
    setIsModalOpen(false);
    setIsGenerated(false);
  };

  const handleHardReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    handleSoftReset();
  };

  return {
    input,
    setInput,
    bmc,
    loading,
    raw,
    lastAddedId,
    isModalOpen,
    setIsModalOpen,
    inputRef,
    isGenerated,
    handleFocusScroll,
    handleGenerate,
    addItem,
    updateItem,
    removeItem,
    exportJSON,
    handleSoftReset,
    handleHardReset,
  };
}