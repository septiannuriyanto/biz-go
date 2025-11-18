// src/components/ResetModal.tsx
import React from "react";

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSoftReset: () => void;
  onConfirmHardReset: () => void;
}

export const ResetModal: React.FC<ResetModalProps> = ({
  isOpen,
  onClose,
  onConfirmSoftReset,
  onConfirmHardReset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm w-full">
        <h3 className="text-xl font-bold text-red-600 mb-4 border-b pb-2">
          Konfirmasi Reset Kanvas
        </h3>

        <p className="mb-4 text-gray-700">
          Pilih jenis reset yang Anda inginkan:
        </p>

        <div className="space-y-3">
          <button
            onClick={onConfirmSoftReset}
            className="w-full py-2 px-4 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition"
          >
            Reset Kanvas Saja (Data LocalStorage Aman)
          </button>

          <button
            onClick={onConfirmHardReset}
            className="w-full py-2 px-4 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
          >
            <span className="font-extrabold">
              Hapus SEMUA Record (Hapus LocalStorage)
            </span>
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500 bg-red-50 p-2 rounded">
          ⚠️ Peringatan: Menekan tombol **Hapus SEMUA Record** akan{" "}
          <span className="font-bold">menghapus permanen</span> semua data yang
          tersimpan di browser Anda untuk BMC ini.
        </p>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="py-1 px-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};