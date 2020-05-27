//  描画領域
let CANVAS_W = 600;
let CANVAS_H = 600;

let SCENE_TITLE = 0;  //  タイトル画面
let SCENE_GAME  = 1;  //  ゲーム画面

//  ブロック領域
let BLOCK_W = 4;
let BLOCK_H = 4;

//  ブロックの色
let BLOCK_RED_COLOR = "rgba(255, 100, 100, 1.0)"; //  赤
let BLOCK_BLU_COLOR = "rgba(100, 100, 255, 1.0)"; //  青
let BLOCK_GRE_COLOR = "rgba(100, 255, 100, 1.0)"; //  緑
let BLOCK_YEL_COLOR = "rgba(255, 255, 100, 1.0)"; //  黄

//  スコア
let BLOCK_RED_SCORE = 3;  //  赤ブロックのスコア
let BLOCK_BLU_SCORE = 5;  //  青ブロックのスコア
let BLOCK_GRE_SCORE = 10; //  緑ブロックのスコア
let BLOCK_YEL_SCORE = 15; //  黄ブロックのスコア

//  フィールドの左上座標
let FIELD_X = 40;
let FIELD_Y = 40;

//  フィールド領域
let FIELD_W = 12;
let FIELD_H = 22;

//  Next表示用のフィールド左上座標
let NEXT_FIELD_X = CANVAS_W - 200;
let NEXT_FIELD_Y = FIELD_Y;

//  スコア表示領域の左上座標
let SCORE_PAIN_X = NEXT_FIELD_X;  
let SCORE_PAIN_Y = CANVAS_H / 2;


let KEY_RIGHT = 0;  //  右キー
let KEY_LEFT  = 1;  //  左キー
let KEY_UP    = 2;  //  上キー
let KEY_DOWN  = 3;  //  下キー
let KEY_SPACE = 4;  //  スペースキー
var key = Array(5); //  キー判定用変数
key[KEY_RIGHT]  = 0;
key[KEY_LEFT]   = 0;
key[KEY_UP]     = 0;
key[KEY_DOWN]   = 0;
key[KEY_SPACE]  = 0;

let block = [ // ブロックの定義
[	//	block type 0
	[
		[0, 0, 0, 0,],
		[0, 1, 1, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 0, 0,],
		[0, 1, 1, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 0, 0,],
		[0, 1, 1, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 0, 0,],
		[0, 1, 1, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
],
 
[	//	block type 1
	[
		[0, 0, 0, 0,],
		[1, 1, 1, 1,],
		[0, 0, 0, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
	],
	[
		[0, 0, 0, 0,],
		[1, 1, 1, 1,],
		[0, 0, 0, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
	],
],
 
[	//	block type 2
	[
		[0, 0, 0, 0,],
		[0, 0, 1, 1,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 1, 0, 0,],
		[0, 1, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 0, 0,],
		[0, 0, 1, 1,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 1, 0, 0,],
		[0, 1, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 0, 0,],
	],
],
 
[	//	block type 3
	[
		[0, 0, 0, 0,],
		[1, 1, 0, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	
	[
		[0, 0, 1, 0,],
		[0, 1, 1, 0,],
		[0, 1, 0, 0,],
		[0, 0, 0, 0,],
	],
	
	[
		[0, 0, 0, 0,],
		[1, 1, 0, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	
	[
		[0, 0, 1, 0,],
		[0, 1, 1, 0,],
		[0, 1, 0, 0,],
		[0, 0, 0, 0,],
	],
 
],
 
[	//	block type 4
	[
		[0, 0, 0, 0,],
		[0, 1, 0, 0,],
		[0, 1, 1, 1,],
		[0, 0, 0, 0,],
	],
	[
		[0, 1, 1, 0,],
		[0, 1, 0, 0,],
		[0, 1, 0, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 0, 0,],
		[1, 1, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
],
 
[	//	block type 5
	[
		[0, 0, 0, 0,],
		[0, 0, 1, 0,],
		[1, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 1, 0, 0,],
		[0, 1, 0, 0,],
		[0, 1, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 0, 0,],
		[0, 1, 1, 1,],
		[0, 1, 0, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 1, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 0, 0,],
	],
],
 
[	//	block type 6
	[
		[0, 0, 0, 0,],
		[0, 1, 1, 1,],
		[0, 0, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 1, 0,],
		[0, 1, 1, 0,],
		[0, 0, 1, 0,],
		[0, 0, 0, 0,],
	],
	[
		[0, 0, 0, 0,],
		[0, 0, 1, 0,],
		[0, 1, 1, 1,],
		[0, 0, 0, 0,],
	],
	[
		[0, 1, 0, 0,],
		[0, 1, 1, 0,],
		[0, 1, 0, 0,],
		[0, 0, 0, 0,],
	],
],
];

//  canvasを使う際のおまじない
var canvas = $("#canvas").get(0);
var context = canvas.getContext("2d");

var field;
var cnt;

var bflag;  //  ブロックの着地フラグ

var btype, brot, bcolor;
var bx, by;

var nbtype, nbrot, nbcolor; //  Next表示用

var spd;  //  ブロックスピード

var score;  //  スコア
var delnum; //  削除した色の個数

var delflag;  //  ブロックの削除フラグ
var dropflag; //  行削除後のフロック落下フラグ

var gameoverflag; //  ゲームオーバーフラグ
var titlelogoflag;  //  タイトルロゴ移動フラグ
var titlelogoposition = -50;  //  タイトルロゴ位置

var scene;  //  画面切り替えよう変数

var bestscore = -1; //  ベストスコア（最初はスコアが出されていない状態）

//  画像用
var titlelogo = new Image();
var titletext = new Image();
var scoretext = new Image();
var gameovertext = new Image();

//  BGM用
var bgm = new Audio();
var gameoversound = new Audio();
var titlesound = new Audio();

function init() {
  cnt = 1;  //  カウンタ変数

  field = [ // Fieldの内容
	[9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
	];

  bflag = false;  //ブロックの着地フラぐ

  bx = 4;     //  ブロックのx座標
  by = 0;     //  ブロックのy座標

  nbtype  = Math.floor(Math.random() * 7); //  次のブロックの種類
  nbrot   = Math.floor(Math.random() * 4); //  次のブロックの回転種類
  nbcolor = Math.floor(Math.random() * 100);  //  次のブロックの色
  if      (nbcolor < 35)  nbcolor = 1;  //  赤 35%
  else if (nbcolor < 65)  nbcolor = 2;  //  青 30%
  else if (nbcolor < 85)  nbcolor = 3;  //  緑 20%
  else                    nbcolor = 4;  //  黄 15%

  initBlock();  //  ブロック初期化

  initTitleSound(); //  タイトル音楽初期化
  initGameSound();  //  ゲーム音楽初期化
  initGameOverSound();  //  ゲームオーバー音楽初期化  

  //btype = 0;  //  ブロックの種類
  //brot = 0;   //  ブロックの回転種類
  //bcolor = 4; //  ブロックの色

  delflag = Array(FIELD_H); //  配列として定義
  dropflag = false; //  行削除後のブロック落下フラグ

  spd = 30; //  スピード

  score = 0;  //  スコア
  delnum = Array(4);  //  削除した色の個数
  for (var i = 0; i < 4; i++) delnum[i] = 0;  //  初期化

  gameoverflag = false; //  ゲームーオーバーフラグ

  titlelogoflag = false; //  タイトルロゴフラグ

  scene = SCENE_TITLE;  //  タイトル画面に設定

  titlelogo.src = "./img/titlelogo.png";  //  タイトルロゴ
  titletext.src = "./img/titletext.png";  //  タイトルテキスト
  scoretext.src = "./img/scoretext.png";  //  最高スコア
  gameovertext.src = "./img/gameover.png";  //  ゲームオーバー
}

//  キー操作 可能・不可能 判定
function ctrlJudge() {
  var num;  //  一番上にあるブロックの位置(行番号)
  var breakflag = false;

  for (var i = 0; i < BLOCK_H; i++) {
    for (var j = 0; j < BLOCK_W; j++) {
      if (block[btype][brot][i][j] == 1) {  //  ブロックなら
        num = i;  //  行番号を取得
        breakflag = true; //  ループを抜ける
      }
    }
    if (breakflag)  break;
  }
  return num; //  行番号をかえす
}

//  キー操作関数
function keyCtrl() {
  if (by < -ctrlJudge()) return;  //  フィールドをはみ出していたら処理しない

  if (key[KEY_RIGHT] <= 1 && key[KEY_LEFT] <= 1) {
    bx += key[KEY_RIGHT] - key[KEY_LEFT]; //  横移動

    var breakflag = false;
    for (var i = 0; i < BLOCK_H; i++) {
      for (var j = 0; j < BLOCK_W; j++) {
        //  配列番号がおかしかったら処理しない
        if (bx + j < 0 || bx + j >= FIELD_W ||
            by + i < 0 || by + i >= FIELD_H)  continue;

        //  当たり判定
        if (field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
          bx -= key[KEY_RIGHT] - key[KEY_LEFT]; //  移動距離分を戻す
          breakflag = true; //  ループを抜ける
          break;
        }
      }
      if (breakflag) break;
    }
    //  キーの状態を更新
    if (key[KEY_RIGHT] == 1)  key[KEY_RIGHT]++;
    else if (key[KEY_LEFT] == 1)  key[KEY_LEFT]++;
  }

  if (key[KEY_DOWN] <= 1 && key[KEY_UP] <= 1) {
    brot += key[KEY_DOWN] - key[KEY_UP];  //  回転
    if (brot < 0) brot = 3;
    else if (brot > 3) brot = 0;

    var breakflag = false;
    for (var i = 0; i < BLOCK_H; i++) {
      for (var j = 0; j < BLOCK_W; j++) {
        //  配列番号がおかしかったら処理しない
        if (bx + j < 0 || bx + j >= FIELD_W ||
            by + i < 0 || by + i >= FIELD_H) continue;

        //  当たり判定
        if ((field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) ||
            (block[btype][brot][i][j] == 1 && by + i < 0)) {
          brot -= key[KEY_DOWN] - key[KEY_UP];  //  回転を戻す
          if (brot < 0) brot = 3;
          else if (brot > 3)  brot = 0;
          breakflag = true; //  ループを抜ける
          break;
        }
      }
      if (breakflag)  break;
    }

    //  キーの状態を更新
    if (key[KEY_DOWN] == 1) key[KEY_DOWN]++;
    else if (key[KEY_UP] == 1)  key[KEY_UP]++;
  }
}

//  何もない行かどうか判定
function rowJudge(num) {
  var flag = true;

  for (var i = 1; i < FIELD_W - 1; i++) {
    if (field[num][i] != 0) { //  一つでもブロックが埋まっていたらフラグをオンにして処理を終了
      flag = false;
      break;
    }
  }

  return flag;
}

//  更新関数
function update() {
  if (cnt % Math.floor(spd) == 0 || (key[KEY_SPACE] > 0 && cnt % 4 == 0)) {
    if (dropflag) { //  落下フラグがオンなら
      var num = 0;  //  削除された行の番号

      for (var i = FIELD_H - 2; i > 0; i--) {
        if (rowJudge(i)) {  //  削除された行かどうか判定
          num = i;  //  削除された行ならnumに代入してループを抜ける
          break;
        }
      }

      for (var i = num; i > 1; i--) { //  num番目の行より上にあるブロックを対象に
        for (var j = 1; j < FIELD_W - 1; j++) {
          field[i][j] = field[i - 1][j];  //  一つ上の行と全く同じ内容にする
        }
      }
      for (var i = 1; i < FIELD_W - 1; i++) { //  1行目は必ず空白になる
        field[1][i] = 0;
      }

      var flag = false;

      for (var i = FIELD_H - 2; i > 1; i--) {
        if (rowJudge(i)) {  //  下から順に見て、一番最初の空白行をnumに代入
          flag = true;  //  フラグをオンにする
          num = i;
          break;
        }
      }

      if (flag) { //  フラグがオンになら(空白行があるなら)
        dropflag = false;
        for (var i = 2; i < num; i++) {
          if (!rowJudge(i)) { //  ２〜numまでの間に空白があるなら落下処理を続行させる
            dropflag = true;
            break;
          }
        }
      }
      else if (!flag) { //  空白行がないなら落下フラグをオフにする
        dropflag = false;
      }
    }
    else if (!dropflag) { //  落下フラグがオフなら

      by++; //  ブロックを1マス落下

      var breakflag = false;
      for (var i = 0; i < BLOCK_H; i++) {
        for (var j = 0; j < BLOCK_W; j++) {
          //  配列番号がおかしい場合は処理しない
          if (bx + j < 0 || bx + j >= FIELD_W ||
              by + i < 0 || by + i >= FIELD_H) continue;

          //  同じマスにブロックや壁が重なったら
          if (field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
            bflag = true; //  ブロックの着地フラグをオンにする
            by--; //  移動距離分を戻す
            breakflag = true; //  ループを抜ける
            break;
          }
        }
        if (breakflag) break;
      }
    }
  }
}

//  落下ブロックの登録
function enterBlock() {
  if (!bflag) return;

  for (var i = 0; i < BLOCK_H; i++) {
    for (var j = 0; j < BLOCK_W; j++) {
      if (bx + j < 0 || bx + j >= FIELD_W ||
          by + i < 0 || by + i >= FIELD_H)  continue;

      //  ブロックが０なら処理しない
      if (block[btype][brot][i][j] == 0) continue;

      //  ブロックをフィールドに登録
      field[by + i][bx + j] = bcolor;
    }
  }

  deleteJudge();  //  削除行を検索 

  bflag = false;  //  ブロック着地フラグを解除
  bx = 4; //  ブロックのX座標
  by = -4;  //  ブロックのY座標

  //btype = 0;  //  ブロックの種類
  //brot = 0; //  ブロックの回転種類
  //bcolor = 4; //  ブロックの色

  initBlock();  //  ブロック初期化

  spd -= 0.2; //  スピードアップ(間隔縮小)
  if (spd < 8) spd = 8;
}

//  ブロック行の削除判定
function deleteJudge() {
  for (var i = 1; i < FIELD_H - 1; i++) { //  壁は含まないので1~FIELD_H - 1まで
    for (var j = 1; j < FIELD_W - 1; j++) {
      if (field[i][j] != 0) {
        delflag[i] = true;
      }
      else if (field[i][j] == 0) {  //  行内に一つでも空白があったら削除フラグは立てずに、break
        delflag[i] = false;
        break;
      }
    }
  }

  for (var i = 1; i < FIELD_H - 1; i++) {
    if (!delflag[i]) continue;  //  削除フラグが立っていなかったら処理しない

    if (!dropflag)  dropflag = true;  //  落下フラグがオフならオンにする

    for (var j = 1; j < FIELD_W - 1; j++) {
      switch (field[i][j]) {
        case 1: score += BLOCK_RED_SCORE; delnum[0]++; break;  //  赤の得点を追加
        case 2: score += BLOCK_BLU_SCORE; delnum[1]++; break;  //  青の得点を追加
        case 3: score += BLOCK_GRE_SCORE; delnum[2]++; break;  //  緑の得点を追加
        case 4: score += BLOCK_YEL_SCORE; delnum[3]++; break;  //  黄の得点を追加
      }
    }

    //  ブロック行を削除
    for (var j = 1; j < FIELD_W - 1; j++) field[i][j] = 0;
  }

  //  delflagの初期化
  for (var i = 0; i < FIELD_H; i++) delflag[i] = false;
}

//  落下ブロックの描画
function drawBlock() {
  var str;

  switch (bcolor) {
    case 1: str = BLOCK_RED_COLOR;  break;
    case 2: str = BLOCK_BLU_COLOR;  break;
    case 3: str = BLOCK_GRE_COLOR;  break;
    case 4: str = BLOCK_YEL_COLOR;  break;
  }

  context.fillStyle = str; //  色の設定

  //  ブロックを描画
  for (var i = 0; i < BLOCK_H; i++) {
    for (var j = 0; j < BLOCK_W; j++) {
      if (block[btype][brot][i][j] == 1) {
        context.fillRect(FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25, 25, 25);
      }
    }
  }
}

//  フィールド描画
function drawField() {
  for (var i = 0; i < FIELD_H; i++) {
    for (var j = 0; j < FIELD_W; j++) {
      if (field[i][j] == 0) continue; //  ０なら描画しない

      var str;
      switch (field[i][j]) {
        case 1: str = BLOCK_RED_COLOR;  break;  //  赤に設定
        case 2: str = BLOCK_BLU_COLOR;  break;  //  青
        case 3: str = BLOCK_GRE_COLOR;  break;  //  緑
        case 4: str = BLOCK_YEL_COLOR;  break;  //  黄色
        case 9: str = "rgba(150, 150, 150, 1.0)"; break;  //  グレーに設定
      }
      context.fillStyle = str; //  フィールドに登録されている数字によって色を設定
      //  25*25のマスを描画
      context.fillRect(FIELD_X + j * 25, FIELD_Y + i * 25, 25, 25);
    }
  }
}

//  フィールド枠描画
function drawFrame() {
  context.fillStyle = "rgba(230, 230, 230, 1.0)"; //  ホワイトに設定

  //  縦線を描画
  for (var i = 0; i < FIELD_W + 1; i++) {
    context.fillRect(FIELD_X + i * 25, FIELD_Y, 1, 25 * FIELD_H);
  }

  //  横線を描画
  for (var i = 0; i < FIELD_H + 1; i++) {
    context.fillRect(FIELD_X, FIELD_Y + i * 25, 25 * FIELD_W, 1);
  }
}

//  Nextブロック領域の描画
function drawNextBlock() {
  //  枠の描画
  context.fillStyle = "rgba(230, 230, 230, 1.0)"; //  白色に設定

  context.fillRect(NEXT_FIELD_X,       NEXT_FIELD_Y,       150, 1);
  context.fillRect(NEXT_FIELD_X,       NEXT_FIELD_Y + 150, 150, 1);
  context.fillRect(NEXT_FIELD_X,       NEXT_FIELD_Y,         1, 150);
  context.fillRect(NEXT_FIELD_X + 150, NEXT_FIELD_Y,         1, 150);

  //  ブロックの描画
  //  １：赤色　２：青色　３：緑色　４：黄色　９：灰色　に設定
  var str;
  switch (nbcolor) {
    case 1: str = BLOCK_RED_COLOR;  break;
    case 2: str = BLOCK_BLU_COLOR;  break;
    case 3: str = BLOCK_GRE_COLOR;  break;
    case 4: str = BLOCK_YEL_COLOR;  break;
    case 9: str = "rgba(150, 150, 150, 1.0)"; break;
  }
  context.fillStyle = str;

  for (var i = 0; i < BLOCK_H; i++) {
    for (var j = 0; j < BLOCK_W; j++) {
      if (block[nbtype][nbrot][i][j] == 1) {
        context.fillRect(NEXT_FIELD_X + 25 + j * 25, 
                         NEXT_FIELD_Y + 15 + 25 + i * 25, 
                         25, 25);
      }
    }
  }

  //  ブロックの枠の描画
  context.fillStyle = "rgba(230, 230, 230, 1.0)";
  for (var i = 0; i < BLOCK_H; i++) {
    for (var j = 0; j < BLOCK_W; j++) {
      if (block[nbtype][nbrot][i][j] == 1) {
        context.fillRect(NEXT_FIELD_X + 25 + j * 25,      NEXT_FIELD_Y + 15 + 25 + i * 25,      25, 1);
        context.fillRect(NEXT_FIELD_X + 25 + j * 25,      NEXT_FIELD_Y + 15 + 25 + i * 25 + 25, 25, 1);
        context.fillRect(NEXT_FIELD_X + 25 + j * 25,      NEXT_FIELD_Y + 15 + 25 + i * 25,       1, 25);
        context.fillRect(NEXT_FIELD_X + 25 + j * 25 + 25, NEXT_FIELD_Y + 15 + 25 + i * 25,       1, 25);
      }
    }
  }

  context.font = "bold 20px sans-serif";
  context.fillText("Next", NEXT_FIELD_X + 50, 60);
  context.fillRect(NEXT_FIELD_X, 70, 150, 1);
}

//  スコア・操作説明などの描画
function drawScorePain() {
  //  スコア表示
  context.fillStyle = "rgba(230, 230, 230, 1.0)"; //  文字色の設定
  context.font = "bold 24px sans-serif";  //  文字フォントの設定

  context.fillText("Score: " + score, SCORE_PAIN_X + 15, SCORE_PAIN_Y); //  文字の描画(スコア表示)

  //  削除した色の個数表示
  for (var i = 0; i < 4; i++) {
    var col, str;
    //  表示する色・文字列の設定
    switch (i) {
      case 0: col = BLOCK_RED_COLOR;  str = "(+3)   x ";  break;  //  削除した赤の個数
      case 1: col = BLOCK_BLU_COLOR;  str = "(+5)   x ";  break;  //  削除した青の個数
      case 2: col = BLOCK_GRE_COLOR;  str = "(+10)  x ";  break;  //  削除した緑の個数
      case 3: col = BLOCK_YEL_COLOR;  str = "(+15)  x ";  break;  //  削除した黄の個数
    }
    context.fillStyle = col;  //  短形の色を設定
    context.fillRect(SCORE_PAIN_X + 15, SCORE_PAIN_Y + 30 * (i + 1), 25, 25); //  短形を描画

    context.fillStyle = "rgba(230, 230, 230, 1.0)"; //  文字色を設定
    context.font = "bold 16px sans-serif";  //  文字フォントを設定
    context.fillText(str + delnum[i], SCORE_PAIN_X + 30 + 15, SCORE_PAIN_Y + 30 * (i + 1) + 18);  //  文字を描画
  }

  context.fillStyle = "rgba(230, 230, 230, 1.0)"; //  文字色を設定
  context.font = "bold 18px sans-serif";  //  文字フォントを設定

  //  操作方法の表示
  context.fillText("←・→：移動", SCORE_PAIN_X + 15, SCORE_PAIN_Y + 30 * 6);
  context.fillText("↑・↓：左・右回転", SCORE_PAIN_X + 15, SCORE_PAIN_Y + 30 * 7);
  context.fillText("SPACE：加速", SCORE_PAIN_X + 15, SCORE_PAIN_Y + 30 * 8);

  //  枠の描画
  context.fillStyle = "rgba(230, 230, 230, 1.0)";
  context.fillRect(SCORE_PAIN_X,       SCORE_PAIN_Y - 20,       1, 290);
  context.fillRect(SCORE_PAIN_X + 180, SCORE_PAIN_Y - 30,       1, 290);
  context.fillRect(SCORE_PAIN_X,       SCORE_PAIN_Y - 30,       180, 1);
  context.fillRect(SCORE_PAIN_X,       SCORE_PAIN_Y - 30 + 290, 180, 1);
}

//  ゲーム音楽初期化関数
function initTitleSound() {
  titlesound.preload = "auto";
  titlesound.src = "./sound/title.mp3";
  titlesound.load();

  $(titlesound).on('ended', function() {
    titlesound.currentTime = 0;
    titlesound.play();
  });
}
function initGameSound() {
  bgm.preload = "auto";
  bgm.src = "./sound/bgm.mp3";
  bgm.load();

  $(bgm).on('ended', function() {
    bgm.currentTime = 0;
    bgm.play();
  });
}
function initGameOverSound() {
  gameoversound.preload = "auto";
  gameoversound.src = "./sound/gameover.mp3";
  gameoversound.load();
  
  $(gameoversound).on('ended', function() {
    gameoversound.currentTime = 0;
    gameoversound.pause();
  });
}
/*
function playBgm() {
  bgm.loop = true;
  bgm.play();
}
*/

//  ブロック初期化関数
function initBlock() {
  btype  = nbtype;  //  落下ブロックの種類
  brot   = nbrot;   //  落下ブロックの回転種類
  bcolor = nbcolor; //  落下ブロックの色
  
  nbtype  = Math.floor(Math.random() * 7);  //  次のブロックの種類
  nbrot   = Math.floor(Math.random() * 4);  //  次のブロックの回転種類
  nbcolor = Math.floor(Math.random() * 100); // 次のブロックの色
  if      (nbcolor < 35) nbcolor = 1; //  赤 35%
  else if (nbcolor < 65) nbcolor = 2; //  青 30%
  else if (nbcolor < 85) nbcolor = 3; //  緑 20%
  else                   nbcolor = 4; //  黄 15%
}


$(window).on("keydown", function(e) {
  //alert(e.key);
  switch (e.key) {
    case "ArrowRight":  key[KEY_RIGHT]++; break;
    case "ArrowLeft":   key[KEY_LEFT]++;  break;
    case "ArrowUp":     key[KEY_UP]++;    break;
    case "ArrowDown":   key[KEY_DOWN]++;  break;
    case " ":           key[KEY_SPACE]++; break;
    case "Enter":       if (scene == SCENE_TITLE) scene = SCENE_GAME; //  タイトルからゲーム画面に切り替え
                        if (gameoverflag) init(); break;  //  ゲームオーバーならエンターでタイトルへ
  }
});

$(window).on("keyup", function(e) {
  switch (e.key) {
    case "ArrowRight":  key[KEY_RIGHT] = 0; break;
    case "ArrowLeft":   key[KEY_LEFT]  = 0; break;
    case "ArrowUp":     key[KEY_UP]    = 0; break;
    case "ArrowDown":   key[KEY_DOWN]  = 0; break;
    case " ":           key[KEY_SPACE] = 0; break;
  }
});

init();
requestAnimationFrame(main);  //  フレーム毎にmain関数呼び出し

function main() {
  context.clearRect(0, 0, CANVAS_W, CANVAS_H);  //  画面クリア

  context.fillStyle = "rgba(0, 0, 0, 1.0)"; //  背景色の設定
  context.fillRect(0, 0, CANVAS_W, CANVAS_H);

  if (scene == SCENE_TITLE) {
    
    if (titlelogoposition >= CANVAS_H / 3) {
      titlelogoflag = true;
    }
    if (!titlelogoflag) {
      titlelogoposition++;
    }

    context.drawImage(titlelogo, CANVAS_W / 3, titlelogoposition);

    if (titlelogoflag) {
    
      context.fillStyle = "rgba(230, 230, 230, 1.0)"; //  文字色の設定

      /*
      context.font = "bold 48px sans-serif"; //  文字フォントの設定
      context.fillText("Tetris", CANVAS_W / 3, CANVAS_H / 3); //  文字の描画
      */

      context.drawImage(titletext, CANVAS_W / 4, CANVAS_H / 3 + 100, CANVAS_W / 2, 30); 

      /*
      context.font = "bold 32px sans-serif";  //  文字フォントの設定
      context.fillText("はじめる(Enter)", CANVAS_W / 3, CANVAS_H / 3 + 100);  //  文字の描画
      */

      titlesound.play();

      //  最高スコアの表示
      context.drawImage(scoretext, CANVAS_W / 4, CANVAS_W / 3 + 200, CANVAS_W / 2, 30);
      context.font = "bold 32px sans-serif";  //  文字フォントの設定
      if (bestscore == -1) {  //  スコアが一回も出されていない場合
        context.fillText("-", CANVAS_W - 130, CANVAS_H / 3 + 230);
      }
      else {  //  スコアが出された場合
        context.fillText(bestscore, CANVAS_W - 130 , CANVAS_H / 3 + 230);
      }
    }

  }
  else if (scene == SCENE_GAME) {

    if (!gameoverflag) {  //  ゲームオーバーなら実行しない
      keyCtrl();        //キー操作
      update();         //  更新
      enterBlock();     //  ブロックの登録
    }

    titlesound.pause();
    bgm.play();       //  ゲーム音楽を再生

    drawBlock();      //  ブロックを描画
    drawField();      //  フィールドを描画
    drawFrame();      //  フィールド枠を描画
    drawNextBlock();  //  Next表示を描画
    drawScorePain();  //  スコア表示領域を描画

    cnt++;  //  カウンタを更新

    //  ゲームオーバー判定(0行目にブロックが登録されたら)
    for (var i = 0; i < FIELD_W; i++) {
      if (field[0][i] != 0 && field[0][i] != 9) {
        gameoverflag = true;
        bestscore = (score > bestscore ? score : bestscore);
        bgm.pause();
        gameoversound.play();

        /*
        context.fillStyle = "rgba(230, 230, 230, 1.0)"; //  文字色の設定

        context.font = "bold 48px sans-serif"; //  文字フォントの設定
        context.fillText("GAME OVER", CANVAS_W / 6, CANVAS_H / 2); //  文字の描画
        */

        context.drawImage(gameovertext, CANVAS_W / 4, CANVAS_W / 2, CANVAS_W / 2, 30);
        break;
      }
    }
  }

  requestAnimationFrame(main);  //  ループ
}
