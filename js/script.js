/* ボタンの要素を取得する */
const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

/* タイマーの時間を管理する変数 */
let startTime;
let timeoutId;
let elapsedTime = 0;

/* タイマーを開始する関数 */
function countUp() {
  console.log("countUp");
  const d = new Date(Date.now() - startTime + elapsedTime);
  const h = String(d.getHours() - 9).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");

  time.textContent = `${h}:${m}:${s}.${ms}`;

  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
}

/* startボタンを押した時の処理 */
start.addEventListener("click", () => {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
  startTime = Date.now();
  countUp();
});

/* stopボタンを押した時の処理 */
stop.addEventListener("click", () => {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  clearTimeout(timeoutId);
  elapsedTime += Date.now() - startTime;
});

/* resetボタンを押した時の処理 */
reset.addEventListener("click", () => {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  time.textContent = "00:00:00.000";
  elapsedTime = 0;
});
