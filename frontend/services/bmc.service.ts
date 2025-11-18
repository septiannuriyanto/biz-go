// services/bmc.service.ts

import { BmcData } from "@/features/bmc-builder/types/bmc.types";


const STORAGE_KEY = "bmc_builder_data";

export const DEFAULT_BMC: BmcData = {
  keyPartners: [],
  keyActivities: [],
  valuePropositions: [],
  customerRelationships: [],
  channels: [],
  customerSegments: [],
  costStructure: [],
  revenueStreams: [],
  keyResources: [],
};

export function loadBmc(): { input: string; bmc: BmcData; raw: string } {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { input: "", bmc: DEFAULT_BMC, raw: "" };

  try {
    const parsed = JSON.parse(stored);
    return {
      input: parsed.input || "",
      bmc: { ...DEFAULT_BMC, ...parsed.bmc },
      raw: parsed.raw || "",
    };
  } catch (e) {
    console.error("Failed to load storage", e);
    return { input: "", bmc: DEFAULT_BMC, raw: "" };
  }
}

export function saveBmc(input: string, bmc: BmcData, raw: string) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ input, bmc, raw })
  );
}

export async function generateBmc(input: string) {
  const res = await fetch("/api/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input }),
  });

  if (!res.ok) throw new Error(await res.text());
  return await res.json();
}
