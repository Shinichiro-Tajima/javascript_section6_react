import React from "react";

// Propsとはコンポーネントに渡す引数のようなもの
export const ColorfulMessage = (props) => {
  // console.log("カラフル");
  const { color, children } = props;
  // console.log(props);
  const contetStyle = {
    color, // color: color のように左右が同じ場合は省略できる
    fontSize: "18px" // javascriptで表記する場合はfont-sizeはfontSizeになる
  };
  return <p style={contetStyle}>{children}</p>;
};

// 関数にexportが指定されていない場合は下記のようにAppを外でも使用できるように宣言する必要がある。
// export default ColorfulMessage;
// importする側は下記のように書く
// import ColorfulMessage from "./components/ColorfulMessage";

// 関数名にexportを指定した場合は下記のように分割代入が必要
// import { ColorfulMessage } from "./components/ColorfulMessage";
