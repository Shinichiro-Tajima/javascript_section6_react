// コンポーネントを使用している場合はファイルの拡張子をjsxとする。
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// JSX技法とは関数のreturnでHTMLを返す技法。

// <> は <React.Fragment> を省略した表記。
// returnの内容は単一のタグで囲われていないといけないという
// ルールがあるのでReact.Fragmentを使う。
// これは画面には反映されないダミータグのようなもの。

// コンポーネントの名前は先頭を大文字にする必要がある。
// 先頭が大文字で、単語の先頭文字を大文字とする命名規則を。
// 「パスカルケース」と呼ぶ。
// コンポーネントの名前はこれに従ったほうが良い。
// 例：SomeComponent 非推奨：Some_Component

// {}で括ると中身はJavaScriptであると認識される。
const App = () => {
  console.log("さいしょ");
  // useStateを使うと動的に値を変更することができる
  // numが変数名。setNumが変数に値を代入する関数になる
  const [num, setNum] = useState(0); // 0は初期値を指定している
  const [faceShowFlag, setFaceShowFlag] = useState(false); // trueは初期値を指定している

  const onClickCountUp = () => {
    setNum(num + 1);
    aaa = aaa + 1; // useStateを使わないと画面に反映されない
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  let aaa = 0;

  // 第2引数の配列に変数をセットすると、その変数が変更された場合のみ処理が動く
  // 変数を指定しないと最初の1回のみ処理が動く
  useEffect(() => {
    console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // ↓ eslintのエラー検知機能の一部を無効化することができる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num} useStateを使うと画面表示を変更できる</p>
      <p>{aaa} useStateを使わないと画面に反映されない</p>
      {faceShowFlag && <p>( ﾟдﾟ) 3の倍数またはon/off</p>}
    </>
  );
};

// Appを外でも使用できるように宣言する
export default App;
