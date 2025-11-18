# 📝 Panduan Kontribusi Proyek

Terima kasih atas minat Anda untuk berkontribusi pada proyek ini! 🙏 Kami sangat menghargai waktu dan upaya yang Anda luangkan.

Panduan ini akan membantu Anda memulai, mulai dari penyiapan *development environment* hingga pengiriman *Pull Request* (PR).

---

## 1. Panduan Alur Kontribusi Umum

Ikuti langkah-langkah dasar berikut untuk menyumbangkan kode:

1.  **Fork** *repository* ini.
2.  Buat *branch* baru untuk fitur atau perbaikan Anda. Gunakan konvensi penamaan yang sesuai (lihat bagian *Branching & Workflow*):
    ```bash
    git checkout -b feature/deskripsi-singkat-fitur
    ```
3.  **Commit** perubahan Anda dengan pesan yang jelas dan deskriptif (lihat bagian *Commit Convention*):
    ```bash
    git commit -m "feat: Tambah fitur X"
    # atau
    git commit -m "fix: Perbaiki bug Y pada modul Z"
    ```
4.  **Push** *branch* Anda ke *fork* Anda:
    ```bash
    git push origin feature/deskripsi-singkat-fitur
    ```
5.  Buat **Pull Request (PR)** ke *branch* `main` atau `develop` dari *repository* utama.

---

## 2. Penyiapan Environment

### Prasyarat

Pastikan Anda telah menginstal *tools* berikut:

* **Node.js** (versi >= 20.x)
* **Package Manager** (`pnpm`, `npm`, atau `yarn`)
* **Wrangler** (jika bekerja dengan Cloudflare Workers)
* **Git**

### Langkah Setup

1.  **Clone** *repository*:
    ```bash
    git clone [https://github.com/username/repo.git](https://github.com/username/repo.git)
    cd repo
    ```
2.  **Install *dependencies***:
    ```bash
    pnpm install
    # atau
    # npm install
    ```
3.  **Buat *file environment***:
    ```bash
    cp .env.example .env.local
    ```
    > **Catatan:** Tambahkan **API key** atau *secret* yang diperlukan ke *file* `.env.local`.
4.  **Jalankan *development server***:
    ```bash
    pnpm dev
    # atau
    # npm run dev
    ```
5.  **Cek *worker* lokal** (jika ada Cloudflare Worker):
    ```bash
    wrangler dev
    ```

---

## 3. Code Quality & Style

### Code Style

* Gunakan **TypeScript** dengan tipe data yang jelas.
* Ikuti **linting** dan **prettier rules** yang sudah ditetapkan:
    ```bash
    pnpm lint
    pnpm format
    ```
* Tambahkan **komentar kode** yang penting agar mudah dipahami.

### Style Guide

Gunakan konvensi penamaan berikut:

| Elemen | Konvensi Penamaan | Contoh |
| :--- | :--- | :--- |
| **Component React** | `PascalCase` | `UserProfileCard.tsx` |
| **Hooks** | `use<Deskripsi>` | `useFetchData` |
| **Function / Variable** | `camelCase` | `calculateTotalPrice`, `userCount` |
| **Penamaan File** | `camelCase` / Kebiasaan Proyek | `utilFunctions.ts`, `data.json` |

---

## 4. Branching & Workflow

* **Branch Utama:** `main` (Stabil)
* **Branch Development:** `develop` (Opsional, untuk *staging*)
* **Branch Fitur/Perbaikan:**
    * Fitur baru: `feature/<nama-fitur>` (Contoh: `feature/user-authentication`)
    * Perbaikan *bug*: `bugfix/<deskripsi-bug-singkat>` (Contoh: `bugfix/fix-login-error`)

### Persyaratan Pull Request (PR)

Sebuah PR harus memenuhi kriteria berikut agar dapat di-*merge*:

* Tujuan dan perubahan **dijelaskan** dengan baik.
* **Linting** sudah dilewati.
* Semua **test lulus** (lihat bagian *Testing*).
* Tidak merusak proses *build* atau *tests* yang ada.

---

## 5. Testing

Pastikan semua *tests* dan *type check* berhasil sebelum mengirimkan PR:

1.  **Jalankan *unit test***:
    ```bash
    pnpm test
    ```
2.  **Jalankan *type check***:
    ```bash
    pnpm typecheck
    ```

---

## 6. Commit Convention (Opsional)

Kami mendorong penggunaan *Conventional Commits* untuk pesan *commit* yang bersih:

| Tipe | Deskripsi |
| :--- | :--- |
| **feat** | Fitur baru. |
| **fix** | Perbaikan *bug*. |
| **docs** | Pembaruan dokumentasi. |
| **style** | Perubahan *styling* / format (bukan perubahan kode). |
| **refactor** | Refaktor kode tanpa mengubah fungsionalitas. |
| **test** | Penambahan / perbaikan *test*. |
| **chore** | Perubahan minor, *config*, atau *build process*. |

---

## 7. Komunikasi

Komunikasi yang baik sangat penting.

* Jika Anda memiliki ide besar atau menemukan *bug*:
    * Buat **Issue baru** dengan detail yang jelas dan deskriptif.
    * Sertakan *screenshot* atau contoh kode bila perlu.
* **Diskusikan** perubahan besar atau fitur baru sebelum mulai mengerjakannya untuk memastikan sejalan dengan arah proyek.

---

Terima kasih banyak atas waktu dan kontribusi Anda! 🎉