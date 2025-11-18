// BmcBuilder.tsx
"use client";
import React, { ReactNode } from "react";
import Header from "@/components/Header";

import { ResetModal } from "@/components/ResetModal";
import { useBmcBuilder } from "@/hooks/useBmc";
import { BmcCard } from "@/features/bmc-builder/component/BmcCard";

// --- UTILITY COMPONENTS (Dipindah ke sini untuk kemudahan) ---

interface TooltipProps {
  children: ReactNode;
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => (
  <div className="group relative flex items-center">
    {children}
    <span
      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 
                 transition-all rounded-md bg-gray-800 p-2 text-xs text-white 
                 group-hover:scale-100 z-50 whitespace-nowrap"
    >
      {content}
    </span>
  </div>
);

interface IconButtonProps {
  icon: string;
  onClick: () => void;
  tooltip: string;
  disabled?: boolean;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  tooltip,
  disabled,
  className = "",
}) => (
  <Tooltip content={tooltip}>
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-full text-xl text-gray-600 hover:bg-gray-200 disabled:opacity-50 transition ${className}`}
    >
      {icon}
    </button>
  </Tooltip>
);

// --- MAIN BUILDER COMPONENT ---
export default function BmcBuilder() {
  const {
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
  } = useBmcBuilder();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center w-full">
      {/* Modal Konfirmasi */}
      <ResetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirmSoftReset={handleSoftReset}
        onConfirmHardReset={handleHardReset}
      />

      <div className="mx-auto w-full">
        {/* Asumsi komponen Header sudah ada di "@/components/Header" */}
        <Header /> 

        <div className="hero_description my-10 px-4">
          <p className="text-md text-gray-500 text-center">Welcome to</p>
          <p className="text-3xl font-bold text-gray-500 text-center">
            Business Canvas Model Builder
          </p>

          <p className="text-md text-gray-500 text-center">
            Bangun Business Model Canvas dalam hitungan detik. Tulis ide
            bisnismu, biarkan AI merangkumnya menjadi kanvas yang rapi dan siap
            diekspor.
          </p>
        </div>

        {/* INPUT SECTION */}
        <div className="max-w-7xl w-full mx-auto px-4">
          <div className="mt-8 mb-8 flex flex-col items-center">
            <div className="w-full max-w-2xl bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center p-1 border border-gray-100">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={handleFocusScroll}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loading) handleGenerate();
                }}
                className="flex-grow p-3 px-6 text-base rounded-l-full focus:outline-none placeholder-gray-500"
                placeholder="Jelaskan bisnismu (tekan Enter untuk Generate)"
              />

              <IconButton
                icon="🔄"
                onClick={() => setIsModalOpen(true)}
                tooltip="Reset Kanvas & Input"
                className="flex-shrink-0"
              />

              <button
                className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition shrink-0 ml-1 flex items-center justify-center mr-1"
                onClick={handleGenerate}
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "✨ Generate"
                )}
              </button>
            </div>
            {/* Indikator Selesai Loading */}
            {isGenerated && !loading && (
              <p className="mt-2 text-sm text-green-600 font-medium flex items-center">
                <span className="text-xl mr-2">✅</span> Kanvas berhasil
                di-generate!
              </p>
            )}
          </div>

          {/* BMC CANVAS LAYOUT (9 Blocks) */}
          {/* Ubah h-[70vh] menjadi min-h-[70vh] agar konten tidak terpotong saat overflow */}
          <div className="grid grid-cols-5 gap-3 min-h-[70vh]">
            {/* Baris Tengah */}
            <div className="col-span-1 flex flex-col">
              <BmcCard
                title="1. Key Partners"
                section="keyPartners"
                items={bmc.keyPartners}
                onAdd={() => addItem("keyPartners")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isTall={true}
                lastAddedId={lastAddedId}
              />
            </div>

            <div className="col-span-1 flex flex-col space-y-3">
              <BmcCard
                title="2. Key Activities"
                section="keyActivities"
                items={bmc.keyActivities}
                onAdd={() => addItem("keyActivities")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isHalf={true}
                lastAddedId={lastAddedId}
              />
              <BmcCard
                title="3. Key Resources"
                section="keyResources"
                items={bmc.keyResources}
                onAdd={() => addItem("keyResources")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isHalf={true}
                lastAddedId={lastAddedId}
              />
            </div>

            <div className="col-span-1 flex flex-col">
              <BmcCard
                title="4. Value Propositions"
                section="valuePropositions"
                items={bmc.valuePropositions}
                onAdd={() => addItem("valuePropositions")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isTall={true}
                lastAddedId={lastAddedId}
              />
            </div>

            <div className="col-span-1 flex flex-col space-y-3">
              <BmcCard
                title="5. Customer Relationships"
                section="customerRelationships"
                items={bmc.customerRelationships}
                onAdd={() => addItem("customerRelationships")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isHalf={true}
                lastAddedId={lastAddedId}
              />
              <BmcCard
                title="6. Channels"
                section="channels"
                items={bmc.channels}
                onAdd={() => addItem("channels")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isHalf={true}
                lastAddedId={lastAddedId}
              />
            </div>

            <div className="col-span-1 flex flex-col">
              <BmcCard
                title="7. Customer Segments"
                section="customerSegments"
                items={bmc.customerSegments}
                onAdd={() => addItem("customerSegments")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isTall={true}
                lastAddedId={lastAddedId}
              />
            </div>

            {/* Baris Bawah */}
            <div className="col-span-3">
              <BmcCard
                title="8. Cost Structure"
                section="costStructure"
                items={bmc.costStructure}
                onAdd={() => addItem("costStructure")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isBottom={true}
                lastAddedId={lastAddedId}
              />
            </div>

            <div className="col-span-2">
              <BmcCard
                title="9. Revenue Streams"
                section="revenueStreams"
                items={bmc.revenueStreams}
                onAdd={() => addItem("revenueStreams")}
                onUpdate={updateItem}
                onRemove={removeItem}
                isBottom={true}
                lastAddedId={lastAddedId}
              />
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-8 mb-10 flex justify-between items-end">
            <button
              className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition flex-shrink-0"
              onClick={exportJSON}
            >
              📥 Export BMC ke JSON
            </button>

            <div className="w-1/2">
              <h2 className="text-xl font-light text-gray-700">
                Raw LLM Output (Debugging)
              </h2>
              <pre className="p-3 bg-gray-100 border rounded-lg h-24 overflow-auto text-sm mt-2">
                {raw}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}