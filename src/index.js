/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// //let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// //val3 = "const変数を上書き";

// // const変数は再宣言不可能
// //const val3 = "const変数を再宣言";

// //constはオブジェクトの場合は値を変えられる 要素を追加することもできる
// const val4 = {
//   name: "aaa",
//   age: "28"
// };

// console.log(val4);

// val4.name = "bbbb";
// console.log(val4);

// val4.address = "cccc";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// // Reactはconstをよく使う
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//-------------------------------------

/**
 * テンプレート文字列
 */

// const name = "aaaa";
// const age = 28;
// //「私の名前はaaaaです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//-------------------------------------

/**
 * アロー関数
 */

// // 同じ意味 const func1 = function(str){}
// function func1(str) {
//   return str;
// }
// console.log(func1("aaa"));

// //アロー関数
// //同じ意味 const func2 = (str) => str;
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("bbb"));

// //同じ意味 const func3 = (num1, num2) => num1 + num2;
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(2, 3));

//-------------------------------------

/**
 * 分割代入
 */
// const myProfile = {
//   name: "aaaa",
//   age: 29
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// //分割代入
// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//配列で分割代入
// const myProfile = ['aaaa', 29];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

//-------------------------------------
/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは! ${name}さん!`);
// sayHello("aaaa");
// sayHello();

//-------------------------------------
/**
 * スプレッド構文 ...
 */

//配列の展開
// const arr1 = [1,2]
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// //arr2から分割代入する ...で残りのものを受け取れる
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// //配列のコピー
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //参照も引き継がれてしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// //arr4の値も変わってしまう
// console.log(arr4);

//-------------------------------------
/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["tanaka", "yamada", "jake"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// //アロー関数でnameという仮の変数にnameArrの要素がはいってくる
// //returnしたものがnameArr2に入る
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// //for文と同じ処理を行う
// //アロー関数は1行で済む処理はブラケット｛｝を省略できる
// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${nameArr[index]}です`)
// );

// const numArr = [1, 2, 3, 4, 5];
// //fileterで奇数だけを取り出す
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr2 = nameArr.map((name) => {
//   if (name === "jake") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr2);

//-------------------------------------
/**
 * 三項演算子 if elseが一行で書ける
 */
// // ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// //金額のように1,300になる
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "not number";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100 over" : "OK";
// };
// console.log(checkSum(20, 20));
// console.log(checkSum(100, 3));

//-------------------------------------
/**
 * 論理演算子の本当の意味を知ろう && ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1 or 2 is true");
// }

// if (flag1 && flag2) {
//   console.log("1 and 2 is true");
// }

// // ||は左側がfalseなら右側を返す nullのときはfalseを返す
// // 左側がtrueなら左側を返す
// const num = null;
// const fee = num || "kingaku misettei";
// console.log(fee);

// // &&は左側がtreuなら右側を返す
// const num2 = null;
// const fee2 = num2 && "nanikasetteisaremasita";
// console.log(fee2);
