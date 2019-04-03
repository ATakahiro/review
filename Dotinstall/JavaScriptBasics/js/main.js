'use strict';

// 文字列
// console.log('Hello World from main js!');
// console.log("Hello World from main js!");

// console.log('it's me!');

// console.log('it\'s me!');
// console.log("it's me!");

// console.log('hello\no wor\tld');
// console.log('hello' + 'world');


// 四則演算
// // 足し算
// console.log(10 + 3);
// // 引き算
// console.log(10 - 3);
// // 掛け算
// console.log(10 * 3);
// // 割り算
// console.log(10 / 3);
// // 割ったあまり　　1
// console.log(10 % 3);
// // べき乗
// console.log(10 **  3);
//
// console.log( 2+ 10 * 3 );
// console.log( ( 2+ 10 ) * 3 );


// 定数 const
// // console.log( 150 * 140 );
// // console.log( 160 * 140 );
//
// const price = 150;
//
// console.log( price * 140 );
// console.log( price * 160 );

// 変数 let
// let price = 500;
//
// // price = price + 100;
// price += 100; // 600
//
// price *= 2; // price = price * 2 // 1200
//
// // price = price + 1;
// price++; // 1201
// price--;// price -= 1 // 1200
//
// console.log(price);


// データ型
// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
//
// console.log( '5' * 3 );
// console.log( '5' - '3' );
// console.log( '5' + 3 );
// console.log( parseInt( '5' , 10 ) + 3 );
// console.log( parseInt( 'hello' , 10 ));


// if
// const score = 85;
// const name = 'taguti';
//
// // if (score >= 80) {
// // 	console.log('Great!');
// // }else if (score >= 60) {
// // 	console.log('Good!');
// // }else {
// // 	console.log('OK!');
// // }
//
// // score >= 80 ? console.log('Great!') : console.log('OK....!');
//
// if (score >= 50) {
// 	if (name === 'taguti') {
// 		console.log('Good job!');
// 	}
// }


// 論理演算
// && なおかつ (AND)
// || もしくは (OR)
// ! ～ではない (NOT)
// const score = 85;
// const name = 'taguti';
// if ( score >= 50 && name === 'taguti' ) {
// 	console.log('Good job!');
// }


// switch
// const signal = 'pink';
//
// switch (signal) {
// 	case 'red':
// 		console.log('Stop!');
// 		break;
// 	case 'yellow':
// 		console.log('Caution!');
// 		break;
// 	case 'blue':
// 	case 'green':
// 		console.log('Go!');
// 		break;
// 	default:
// 		console.log('Wrong Signal!');
// 	break;
// }
//
// for
// for(let i = 1; i <= 10; i++){
// 	// console.log('Hello!');
// 	console.log( i + 'Hello!');
// 	console.log( `${i} hello`);
// }


// while
// let hp = 200;
//
// while (hp > 0) {
// 	console.log(`${hp}HP left!`);
// 	hp -= 15;
// }
//
// for (let i = 1; i <= 10;  i++) {
// 	// if (i === 4) {
// 	// if (i %3 === 0) {
// 	// 	continue;
// 	// }
// 	if (i  === 4) {
// 		break;
// 	}
// 	console.log(i);
// }


// 関数
//
// function showAd(){
// 	console.log('---------------');
// 	console.log('----  AD  ----');
// 	console.log('---------------');
// }
//
// showAd();
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// console.log('Rich is great!');
// showAd();


// 引数
// function showAd(message = 'AD'){ // 仮引数
// 	console.log('---------------');
// 	console.log(`----  ${message}  ----`);
// 	console.log('---------------');
// }
//
// showAd('Header AD'); // 実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('AD');
// showAd();
// console.log('Steve is great!');
// console.log('Rich is great!');
// showAd('Footer AD');
//
// function sum( a , b , c ){
// 	// console.log( a + b + c );
// 	return a + b + c;
// }
//
// // sum( 1, 2, 3);
// // sum( 3, 4, 5);
//
// const total = sum( 1, 2, 3) + sum( 3, 4, 5);
// console.log(total);


// 関数宣言と関数式
// const sum = function( a , b , c ){;
// 	return a + b + c;
// }
//
// const total = sum( 1, 2, 3) + sum( 3, 4, 5);
// console.log(total);


// アロー関数
// const sum = ( a , b , c ) => {;
// 	return a + b + c;
// }
//
// const sum = ( a , b , c ) =>  a + b + c;
//
// const total = sum( 1, 2, 3) + sum( 3, 4, 5);
// console.log(total);

// const double = function(a){
// 	return a * 2;
// }
//
// const double = a => a * 2;
// console.log(double(12));


// スコープ (Scope) [有効範囲]
const x = 2; // グローバルスコープ

function f(){
	const x = 1; // ローカルスコープ
	console.log(x);
}

f();
console.log(x);
