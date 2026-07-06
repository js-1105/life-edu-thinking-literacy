/* ===== Firebase 設定（思考素養工作坊·小組討論四題投稿）=====
 * 沿用生命教育概論課程共用的 life-edu-intro 專案（同網域 js-1105.github.io，免重新授權）。
 * 用獨立房號＋獨立資料節點，與其他單元的資料完全隔離：
 *   rooms/<房號>/discuss/q1…q4
 * 未設定時（仍是 PASTE_...），頁面自動以「單機 localStorage 代打模式」運作。
 */
window.FB_CONFIG = {
  apiKey: "AIzaSyCFuzUM6Xs7zcP71nT2O3E4XVexofGoz0w",
  authDomain: "life-edu-intro.firebaseapp.com",
  databaseURL: "https://life-edu-intro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "life-edu-intro",
  storageBucket: "life-edu-intro.firebasestorage.app",
  messagingSenderId: "861046300947",
  appId: "1:861046300947:web:7b3466af9a3bc06cfb7ae6"
};

/* 每次工作坊換一個房號即可「清空重來」（不同房號＝不同資料）。 */
window.FB_ROOM = "tl-2026-0710";
