// サイト全体の文言。ここを直せば各ページに反映される

export const shop = {
  name: '月ノ灯',
  nameKana: 'つきのひ',
  nameEn: 'TSUKINOHI',
  category: '夜喫茶',
  catch: '本と珈琲と、静かな夜。',
  hours: '18:00〜26:00',
  lastOrder: 'L.O. 25:30',
  closed: '日曜日',
  seats: '14席（カウンター6・窓ぎわ4・テーブル4）',
  address: '東京都〇〇区〇〇 7-8-9 2階',
  station: '〇〇線「〇〇駅」南口',
  walk: '徒歩5分',
  tel: '00-0000-0000',
};

export const nav = [
  { href: '/menu/', label: 'お品書き', en: 'MENU' },
  { href: '/books/', label: '本と過ごし方', en: 'BOOKS' },
  { href: '/access/', label: 'ご案内', en: 'ACCESS' },
];

export type MenuItem = { name: string; price: string; note?: string };
export type MenuGroup = {
  title: string;
  en: string;
  lead: string;
  /** お品書きページの写真（public/images/ 以下）。position は写真の見せる位置 */
  photo?: { src: string; alt: string; position?: string };
  items: MenuItem[];
};

export const menu: MenuGroup[] = [
  {
    title: '珈琲',
    en: 'COFFEE',
    photo: { src: '/images/menu-coffee.webp', alt: 'ドリッパーと淹れたての珈琲', position: '50% 62%' },
    lead: '夜でも飲みやすいよう、苦みの角をとった焙煎にしています。',
    items: [
      { name: '月ノ灯ブレンド', price: '¥650', note: 'まろやかな中深煎り。いちばん人気。' },
      { name: '深夜の深煎り', price: '¥700', note: 'ビターでコクのある一杯。' },
      { name: 'カフェインレス', price: '¥650', note: '眠れなくなるのが心配な夜に。' },
      { name: 'カフェオレ', price: '¥700' },
    ],
  },
  {
    title: '夜の甘いもの',
    en: 'SWEETS',
    photo: { src: '/images/menu-sweets.webp', alt: '夜の窓ぎわで、パウンドケーキと珈琲' },
    lead: '甘さは控えめに。珈琲と一緒にどうぞ。',
    items: [
      { name: '固めのプリン', price: '¥550', note: 'ほろ苦いカラメルで。' },
      { name: 'ガトーショコラ', price: '¥600' },
      { name: 'あんバタートースト', price: '¥580' },
      { name: '季節のパウンドケーキ', price: '¥550' },
    ],
  },
  {
    title: '少しだけお酒',
    en: 'NIGHTCAP',
    photo: { src: '/images/menu-nightcap.webp', alt: 'キャンドルの横に置かれたワインとチョコレートの焼き菓子' },
    lead: 'お酒はおひとり様二杯までとさせていただいています。',
    items: [
      { name: 'コーヒーリキュールのミルク割り', price: '¥800' },
      { name: 'ホットワイン', price: '¥850' },
      { name: '梅酒ソーダ', price: '¥700' },
    ],
  },
];

export const seats = [
  { name: 'カウンター', text: 'ランプの灯りの下で。グラスや珈琲を用意する音が聞こえる席。', src: '/images/seat-counter.webp' },
  { name: '窓ぎわの一人席', text: '窓に向かって座る、ひとり用の席。本を一冊持って、どうぞ。', src: '/images/seat-window.webp' },
  { name: 'テーブル席', text: '石の壁とランプに囲まれた、奥まった席。長い夜をのんびりと。', src: '/images/seat-table.webp' },
];

export const rules = [
  { title: '会話は小声で', text: '本を読んでいる方もいます。おしゃべりはささやく程度にお願いします。' },
  { title: '通話はご遠慮ください', text: 'お電話は階段の踊り場でどうぞ。' },
  { title: '2名様まで', text: '静かに過ごしていただくため、3名様以上のご来店はお断りしています。' },
  { title: '本はやさしく', text: '店内の本はどれでも自由に。読み終わったら元の棚へ戻してください。' },
];

export const shelves = [
  { name: '夜に読みたい短編', text: '一晩で読み切れる、短い物語を集めた棚。' },
  { name: '旅と街の本', text: '行ったことのない街を、ページの上で歩く。' },
  { name: '詩と写真集', text: '少しだけ開いて、ぼんやり眺めるための本。' },
  { name: '店主のおすすめ', text: '月替わりで入れかえる、店主が最近読んだ本。' },
];
