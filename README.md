# Nuxt3 學習直播班專案

本專案為 Nuxt3 學習直播班的課程內容，旨在透過實作專案的方式，引導參與者了解 Nuxt3 的核心概念與開發技巧。透過本專案，將學習如何建立 Nuxt3 應用程式、管理路由、組織資料、與後端 API 串接等，能夠快速上手並應用於實際的開發中。

## 專案介紹

這份專案包含多個練習，涵蓋了 Nuxt3 的各種功能模組，並透過案例展示如何使用 Nuxt3 開發 SPA 和 SSR 應用程式。本專案的結構清晰，並對關鍵步驟進行詳細說明，適合初學者以及有 Vue 基礎的開發者深入學習。

## 如何使用

- Clone 專案
  - ``git clone https://github.com/hakuei0115/Nuxt_project.git``
  - ``cd Nuxt_project``
- 安裝依賴套件
  - ``npm install``
- 啟動本地開發伺服器
  - ``num run dev``

## 專案結構

```plaintext
├── assets/         # 靜態資源，例如圖片、CSS 等
├── components/     # Vue 元件
├── composables/    # 可重複使用的邏輯功能
├── layouts/        # 頁面共用的佈局
├── pages/          # 頁面組件，對應自動生成的路由
├── plugins/        # 外部插件的初始化
├── public/         # 靜態檔案
├── nuxt.config.ts  # Nuxt 設定檔
└── README.md       # 專案說明文件
```

## 主要學習內容

### Day 19 - Nuxt3 狀態管理 - Pinia - ( 1 ) (5/3 完成)
- 學習在 Nuxt3 中安裝並整合 Pinia 狀態管理工具
- 學習在 Nuxt3 中建立與操作基礎的 Pinia 結構

### Day 18 - Nuxt3 插件 ( Plugins ) - 整合 Vue3 插件 (5/3 完成)
- 學習在 Nuxt3 中整合 Vue3 插件
- 學習使用 defineNuxtPlugin 掛載第三方插件和全域註冊元件
前言

### Day 17 - Nuxt3 插件 ( Plugins ) - directive (4/30 完成)
- 學習在 Nuxt3 使用插件註冊自定義的 Vue 指令

### Day 16 - Nuxt3 插件 ( Plugins )  - provide (4/30 完成)
- 學習建立插件的基本結構
- 學習使用插件的 provide 方法建立全域的輔助函式 ( helper )
- 理解插件的執行環境設置 ( client / server )

### Day 15 - middleware 與登入狀態驗證 (4/29 完成)
- 學習 Nuxt3 匿名、具名、全域 middleware ( 路由中間件 ) 的使用方法
- 學習使用 middleware 驗證登入狀態

### Day 14 - 登入功能與存入 Cookie (4/26 完成)
- 學習如何在 Nuxt3 中實作登入功能，並透過 Cookie 存取與維護使用者的登入狀態
- 學習使用 Nuxt3 useCookie Composable 存入 Token

### Day 13 - SEO Meta Components (4/25 完成)
- 學習如何使用 Nuxt3 的 SEO 元件來設定靜態與動態的頁面 Meta 資訊
- 理解如何傳入具響應性的資料來動態更新 SEO Meta 資訊

### Day 12 - useSeoMeta 與 useServerSeoMeta (4/23 完成)
- 使用 useSeoMeta 與 useServerSeoMeta Composable 設定 Meta 資訊
- 理解 useSeoMeta 與 useServerSeoMeta 的差異

### Day11 - Global head Settings 與 useHead (4/23 完成)
- 在 nuxt.config.ts 設定全域的 SEO 設定
- 使用 useHead 組合函式設定單一頁面的SEO 設定

### Day 10 - useFetch 與 useAsyncData (4/22 完成)
- 學習如何使用 useFetch 與 useAsyncData，包括帶入參數和使用回傳參數的方法。
- 理解這兩個方法都是基於 $fetch 進行封裝。

### Day 9 - $fetch 與 ofetch (4/22 完成)
- 理解 Nuxt3 基於 ofetch 套件提供了 $fetch 方法
- 學習在 Nuxt3 中使用 $fetch 進行 API 請求
- 了解 $fetch 使用的注意事項

### Day 8 - 動態路由與 404 錯誤頁面處理 (4/21 完成)
- 學習建立並使用動態路由
- 學習如何配置 404 錯誤頁面

### Day 7 嵌套式路由、 useRouter & useRoute (4/20 完成)
- 學習建立並使用嵌套式路由
- 學習在 Nuxt3 使用 useRouter 和 useRoute

### Day 6 NuxtLink 與 路由基礎配置 (4/20 完成)

- 學習使用 NuxtLink 實作頁面導航
- 學習 Nuxt3 路由系統的基礎配置

### Day 5 使用指令建立 Composables (4/18 完成)

- 學習使用指令建立 Composables
- 學習透過 Auto Imports 使用 Composables

### Day 4 使用指令建立元件 (4/17 完成)

- 學習使用指令建立元件
- 學習透過 Auto Imports 使用元件

### Day 3 使用指令建立 Layouts (4/17 完成)

- 了解 Nuxt3 中的 Layouts 概念
- 使用 Nuxt3 指令建立 Layout
- 在頁面中使用指定的 Layout

### Day 2 Nuxt3 專案引入 CSS 樣式 (4/17 完成)

- 在 Nuxt3 中加入並使用 CSS 預處理器（SCSS）
- 在 Nuxt3 中設定全域共用樣式
- 在 Nuxt3 中設定全域共用變數

### Day 1 起手式 : 建立 Nuxt3 專案 (4/17 完成)

- 建立 Nuxt3 專案
- Nuxt 基礎指令
- 新增頁面