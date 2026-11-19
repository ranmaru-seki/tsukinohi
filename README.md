# 月ノ灯（ポートフォリオ用・架空サイト）

Astro製の夜喫茶サイト（4ページ）。デザインは Claude Design「架空カフェ デザイン案」の C. 夜喫茶「月ノ灯」。

## 動かし方

```bash
npm install
npm run dev      # http://localhost:4321 でプレビュー
npm run build    # dist/ に静的ファイルを書き出し
```

Node.js 18.20.8 以上（推奨は 22 系）。

## ページ構成

| URL | 内容 |
| --- | --- |
| `/` | トップ（FV・コンセプト・お品書き抜粋・お席・ご案内） |
| `/menu/` | お品書き（珈琲・夜の甘いもの・少しだけお酒） |
| `/books/` | 本と過ごし方（本棚・お約束） |
| `/access/` | ご案内（店舗情報・地図） |

## フォルダ構成

```
src/
├── data/site.ts            … 文言・メニュー・ナビ（ここを直せば全ページに反映）
├── styles/global.css       … 色・余白・レスポンシブ（PC / ≤1023px / ≤599px）
├── layouts/BaseLayout.astro… head・ヘッダー・フッター
├── pages/                  … 各ページ
└── components/             … セクションごとのコンポーネント
```

## 色を変える

`global.css` の `--accent`（灯りの金）と `--bg`（夜の紺）で全体の印象が変わります。

## 写真の差し替え

`Photo.astro` がプレースホルダーです。写真を `public/images/` に置いて、
`<Photo label="..." />` を `<Photo label="..." src="/images/xxx.jpg" />` にすると画像が表示されます。

## 公開（Vercel の場合）

1. GitHub にリポジトリを作って push
2. Vercel で「Add New → Project」からリポジトリを選ぶ
3. Framework は Astro が自動選択されるので、そのまま Deploy
4. 決まったURLを `astro.config.mjs` の `site` に入れる
