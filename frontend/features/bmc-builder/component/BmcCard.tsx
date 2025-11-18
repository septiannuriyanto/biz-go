// Revised BmcCard + Tooltip with Portal

import React, { useRef, ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BmcSection, BmcItem } from "@/features/bmc-builder/types/bmc.types";

// --------------------------------------------------
//  TOOLTIP WITH PORTAL (CANNOT BE CLIPPED BY OVERFLOW)
// --------------------------------------------------
interface TooltipProps {
  children: ReactNode;
  content: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const updatePosition = () => {
    if (!anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    setPos({
      top: rect.top - 8, // tampil di atas anchor
      left: rect.left + rect.width / 2,
    });
  };

  const show = () => {
    updatePosition();
    setVisible(true);
  };

  const hide = () => setVisible(false);

  useEffect(() => {
    if (!visible) return;
    const handleScroll = () => updatePosition();
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [visible]);

  return (
    <>
      <div
        ref={anchorRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        className="relative flex flex-1"
      >
        {children}
      </div>

      {visible &&
        createPortal(
          <div
            className="fixed z-[9999] -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap pointer-events-none"
            style={{ top: pos.top, left: pos.left }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
};

// --------------------------------------------------
//  BMC CARD
// --------------------------------------------------
interface BmcCardProps {
  title: string;
  section: BmcSection;
  items: BmcItem[];
  onAdd: () => void;
  onUpdate: (section: BmcSection, id: string, text: string) => void;
  onRemove: (section: BmcSection, id: string) => void;
  lastAddedId: string | null;
  isTall?: boolean;
  isHalf?: boolean;
  isBottom?: boolean;
}

export const BmcCard: React.FC<BmcCardProps> = ({
  title,
  section,
  items,
  onAdd,
  onUpdate,
  onRemove,
  lastAddedId,
  isTall = false,
  isHalf = false,
  isBottom = false,
}) => {
  const itemRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleItemKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    item: BmcItem
  ) => {
    const currentIndex = items.findIndex((i) => i.id === item.id);
    const itemTextLength = (e.target as HTMLInputElement).value.length;

    if (e.key === "Enter") {
      e.preventDefault();
      if (currentIndex === items.length - 1 || items.length === 0) {
        onAdd();
      } else {
        const nextItem = items[currentIndex + 1];
        if (nextItem && itemRefs.current[nextItem.id]) {
          itemRefs.current[nextItem.id]?.focus();
        }
      }
      return;
    }

    if (e.key === "Backspace" && itemTextLength === 0) {
      e.preventDefault();
      (e.target as HTMLInputElement).blur();
      onRemove(section, item.id);
    }
  };

  let heightClass = "";
  if (isTall || isHalf || isBottom) heightClass = "h-full";

  return (
    <div
      className={`p-3 border border-gray-300 rounded-lg bg-white ${heightClass} flex flex-col transition duration-150 ease-in-out`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2 border-b border-gray-100 pb-2">
        <h3 className="font-semibold text-base text-gray-800">{title}</h3>
        <button
          className="text-xs px-2 py-1 rounded-md text-blue-600 hover:bg-blue-50 transition border border-transparent hover:border-blue-200"
          onClick={onAdd}
        >
          + Add
        </button>
      </div>

      {/* Content */}
      <div className="space-y-2 text-sm grow overflow-y-auto">
        {items.length === 0 && (
          <div className="text-xs text-gray-400 italic p-1">
            Klik + Add atau gunakan generator.
          </div>
        )}

        {items.map((it) => (
          <div key={it.id} className="flex gap-2 items-start">
            <Tooltip content={it.text}>
              <input
                ref={(el) => {
                  itemRefs.current[it.id] = el;
                }}
                className="w-full p-1 border-b border-gray-200 focus:border-blue-400 outline-none text-sm bg-transparent transition"
                value={it.text}
                onChange={(e) => onUpdate(section, it.id, e.target.value)}
                onKeyDown={(e) => handleItemKeyDown(e, it)}
              />
            </Tooltip>

            <button
              className="mt-1 text-gray-400 hover:text-red-500 transition shrink-0"
              onClick={() => onRemove(section, it.id)}
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};