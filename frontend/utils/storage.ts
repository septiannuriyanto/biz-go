// src/utils/storage.ts
const KEY = "bmc_builder_data";

export function saveToStorage(data: unknown) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadFromStorage() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearStorage() {
  localStorage.removeItem(KEY);
}
