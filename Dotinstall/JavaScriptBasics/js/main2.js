'use strict';
{
	// 配列
	// const score1 = 80;
	// const score2 = 90;
	// const score3 = 40;
//
// 	const scores = [ 80, 90, 40];
// 	console.log(scores);
// 	console.log(scores[1]); // 90
//
// 	scores[2] = 100;
// 	console.log(scores);


	// オブジェクト
	// const player = ['taguti' , 32];
	// const player = {
	// 	name: 'taguti',
	// 	score: 32,
	// }
	//
	// console.log(player.name);
	// console.log(player['name']);
	//
	// player.score = 100;
	// console.log(player);
	//
	// player.email = 'taguti@gmail.com';
	// console.log(player);
	//
	// delete player.score;
	// console.log(player);


// クラス
	// class Player{
	// 	constructor(name, score){ // メソッド
	// 		this.name = name;
	// 		this.score = score;
	// 	}
	//
	// 	showInfo(){
	// 		console.log(`name: ${this.name} score: ${this.score}`);
	// 	}
	//
	// 	static showVersion(){
	// 		console.log('Player class ver 1.0');
	// 	}
	// }
	//
	// const taguti = new Player('taguti', 32);
	// const fkoji = new Player('fkoji', 44);
	//
	// console.log(taguti.name);
	// taguti.showInfo();
	// fkoji.showInfo();
	//
	// Player.showVersion();


// 継承
	// class Player{
	// 	constructor(name, score){ // 親クラス
	// 		this.name = name;
	// 		this.score = score;
	// 	}
	//
	// 	showInfo(){
	// 		console.log(`name: ${this.name} score: ${this.score}`);
	// 	}
	//
	// 	static showVersion(){
	// 		console.log('Player class ver 1.0');
	// 		}
	// }
	//
	// class SoccerPlayer extends Player{ // 子クラス
	// 	constructor(name, scoer, number) {
	// 		super(name, scoer);
	// 		this.number = number;
	// 	}
	//
	// 	kick(){
	// 		console.log('Goooaaaal!');
	// 	}
	// }
	//
	// const tubasa = new SoccerPlayer('tubasa', 99, 10);
	//
	// tubasa.kick();
	// console.log(tubasa.number);
	// tubasa.showInfo();


// Objectのテータコピー
	// let x = 1;
	// let y = x;
	// x = 5;
	// console.log(x); //5
	// console.log(y); //1
	//
	// let x = [1, 2];
	// let y = x;
	// x[0] = 5;
	// console.log(x); //[5, 2]
	// console.log(y); //[1, 2]


	// 配列
	// const a = [1, 5, 10];

	// add
	// a.unshift(100);
	// a.push(200, 300);
	// console.log(a);
	//
	// remove
	// a.shift();
	// a.pop();
	// console.log(a);
	//
	// a.splice(2, 0, 6, 7);
	// console.log(a);
	//
	// const remove = a.splice(1, 2)
	// console.log(a);
	// console.log(remove);

	// const a = [1, 5, 10, 100];
	// for(let i = 0; i <= 2; i++){
	// for(let i = 0; i < a.length; i++){
	// 	console.log(a[i]);
	// }

	// a.forEach(item => {
	// 	console.log(item);
	// });
	// a.forEach((item, index) => {
	// 	console.log(`${index}:${item}`);
	// });

// Map, Filter
	//const a = [1, 2, 5, 10];
	//
	// const b =[];
	// a.forEach(item => {
	// 	b.push(item * 2);
	// });
	// console.log(b);
	//
	// const b = a.map(item  => {
	// 	return item * 2;
	// });
	// const b = a.map(item  => item * 2);
	// console.log(b);
	//
	// const b = a.filter(item => item % 2 === 0 );
	// console.log(b);


// Object
	// const o = {
	// 	a: 1,
	// 	b:2,
	// };
	//
	// console.log(Object.keys(o)); // ['a' , 'b']
	// console.log(Object.values(o)); // [1 ,2]
	// console.log(Object.entries(o)); // ['a' , 1], ['b' , 2]
	//
	// Object.keys(o).forEach( key => {
	// 	console.log(`${key}: ${o[key]}`);
	// });


// スプレッド演算子
	// const a = [10, 20];
	// const b = [1, 2, ...a];
	// console.log(b);
	// a[0] = 100;
	// console.log(b);
	//
	// const a = [10, 20];
	// const sum = (a , b) => a+ b;
	// console.log(sum(...a));
	//
	// const o1 = { a : 1};
	// const o2 = { ...o1, b : 2};
	// console.log(o2);


// 分割代入
	// const numbers = [1, 2];
	// const b = numbers [1]
	// const a = numbers [0]
	// const [a, b] = numbers;
	// console.log(a);
	// console.log(b);
	//
	// const numbers = [1, 2, 3, 8];
	// const [a, b, ...rest] = numbers;
	// console.log(a);
	// console.log(b);
	// console.log(rest);
	//
	// const player = {
	// 	name: 'taguti',
	// 	score: 55,
	// 	hp: 33,
	// 	mp: 22,
	// };
	// const {name, score, ...points} = player;
	// console.log(name);
	// console.log(score);
	// console.log(points);


// 文字列操作
	// const str = 'hello';
	//
	// console.log(str.length); // 5
	// console.log(str.substring(2, 4)); // ll
	// console.log(str[1]); // e


// Mathオブジェクト
	// console.log(Math.PI);
	// console.log(Math.random());// 0_0.99999
	//
	// Math.random() -> 0 ... 0.99999
	// Math.random() * 6 -> 0 ... 5.99999
	// Math.random() * 6 + 1 -> 0 ... 6.99999
	// Math.floor(Math.random() * 6 + 1)  -> 1 ... 6
	//
	// console.log(Math.floor(Math.random() * 6 + 1));


// Dateオブジェクト
	// const d = new Date();
	//
	// console.log(d);
	// console.log(d.getFullYear());
	// console.log(d.getMonth()); // 0 - 11
	// console.log(d.getDate());
	// console.log(d.getDay()); // 0 - 6
	// console.log(d.getHours());
	// console.log(d.getMinutes());
	// console.log(d.getSeconds());
	// console.log(d.getMilliseconds());
	//
	// console.log(d.getTime()); // UTC 1970/01/01 00:00:00
	//
	// const d = new Date(2018, 11); // 2018/12/01 00:00:00
	// d.setHours(10, 20 ,30); // 2018/12/01 10:20:30
	// d.setDate(32); // 2019/01/01 10:20:30
	// d.setDate(d.getDate() + 3); // 2019/01/04 10:20:30
	// console.log(d);
	//
	// const d1 = new Date(2018, 11, 1);
	// const d2 = new Date(2018, 11, 10);
	// console.log((d2 - d1) / (24 * 60 *  60 * 1000));


// alret
	// windows.alert('hello');
	// alert('hello');
	//
	// const answer = confirm('Are you sure?');
	// console.log(answer);


// setInterval
	// setInterval(関数, ミリ秒);
	//
	// let i = 0;
	// const showTime = () => {
	// 		console.log(new Date());
	// 		i++;
	// 		if(i  > 2){
	// 			clearInterval(timerId);
	// 		}
	// };
	//
	// let timerId = setInterval(showTime, 1000);


// setTimeout
// let i = 0;
// 	const showTime = () => {
// 		console.log(new Date());
// 		let timerId = setTimeout(showTime, 1000);
// 		i++;
// 		if( i> 2){
// 			clearTimeout(timerId);
// 		}
// 	};
//
// 	showTime();


// const a = 'hello';
	// const a = 5;
	//
	// try{
	// 	console.log(a.toUpperCase());
	// }catch(e){
	// 	console.log(e.message);
	// }
	//
	// console.log('Finish!');



 }
