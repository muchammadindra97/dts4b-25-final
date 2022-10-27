# React News [DTS4B-25-FINAL]

Final project DTS REA4 berupa aplikasi React JS dengan tema yang dipilih adalah 'news'.

![Rect News Demo](./public/react-news-demo.gif)

> Live app: [https://reactjs-news-eosin.vercel.app/](https://reactjs-news-eosin.vercel.app/)

## Overview

### Fitur
- Tampilan utama yang dapat melakukan ***pencarian****
- Tampilan detail berita perlu login terlebih dahulu untuk akses
- Tampilan registrasi dan login
- Tampilan "Content Locked" yang ditampilkan ketika membuka detail berita tanpa login
- Tampilan 404 untuk mengatasi akses halaman yang tidak diketahui
- Fungsi ***persistent login**** (status user tetap login walau browser ditutup kemudian dibuka kembali)
- Fungsi ***debounce**** untuk membatasi fetch API saat melakukan pencarian berita

> Note: * fitur unik

### Spesifikasi Teknis

- MUI untuk tema antarmuka
- API https://www.thenewsapi.com/
- Redux Tool Kit sebagai global state management
- RTK Query untuk pengelolaan fetch API
- Firebase untuk backend autentikasi
- Custom hook useDebounce (debounce input)
- Penggunaan localStorage untuk persistent login state

## Development

1. Lakukan `npm install`
2. Salin `.env.example` menjadi `.env`
3. Isi alamat API beserta token nya pada `.env`
    ```
    REACT_APP_API_BASE_URL=
    REACT_APP_API_TOKEN=
    ```
4. Isi firebase config pada `.env`
    ```
    REACT_APP_FC_API_KEY=
    REACT_APP_FC_AUTH_DOMAIN=
    REACT_APP_FC_PROJECT_ID=
    REACT_APP_FC_STORAGE_BUCKET=
    REACT_APP_FC_MESSAGING_SENDER=
    REACT_APP_FC_ID_APP_ID=
    ```
