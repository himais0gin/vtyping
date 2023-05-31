// 使用するキーボードのキーのリスト
const keyboardKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

// ゲームの設定
const total_time = 60;  // ゲームの制限時間（秒）
let score = 0;  // スコアの初期値

// ターゲット文字を表示する関数
function showTargetLetter() {
  const targetIndex = Math.floor(Math.random() * keyboardKeys.length);
  const targetLetter = keyboardKeys[targetIndex];
  document.getElementById("target-letter").textContent = targetLetter;
}

// キー入力を処理する関数
function handleKeyPress(event) {
  const typedLetter = event.target.value.toUpperCase();
  const targetLetter = document.getElementById("target-letter").textContent;
  
  if (typedLetter === targetLetter) {
    score++;
    document.getElementById("score").textContent = "スコア: " + score;
  }
  
  event.target.value = "";
  showTargetLetter();
}

// ゲームのメイン処理
function startGame() {
  showTargetLetter();
  document.getElementById("typed-letter").addEventListener("input", handleKeyPress);
  setTimeout(endGame, total_time * 1000);
}

// ゲーム終了処理
function endGame() {
  document.getElementById("typed-letter").removeEventListener("input", handleKeyPress);
  alert("ゲーム終了！\nスコア: " + score);
}

// ゲーム開始
startGame();
