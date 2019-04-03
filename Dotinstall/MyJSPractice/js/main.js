
	'use strict'
	// document.getElementById('target').addEventListener('click' , function(){
	// 	// document.getElementById('target').style.background = 'pink';
	// 	// document.getElementById('target').style.borderRadius = '50%';
	//
	// 	document.getElementById('target').classList.toggle('circle');
	// });

	// const target1 = document.getElementById('target1');
	// const target2 = document.getElementById('target2');
	// const target3 = document.getElementById('target3');
	//
	// target1.addEventListener('click' , function(){
	// 	target1.classList.toggle('circle');
	// });
	//
	// target2.addEventListener('click' , function(){
	// 	target2.classList.toggle('circle');
	// });
	//
	// target3.addEventListener('click' , function(){
	// 	target3.classList.toggle('circle');
	// });

const num = 5;
const winner = Math.floor(Math.random() * num); //0-4

for( let i = 0; i<  num; i++){
	const div =document.createElement('div');
	div.classList.add('box');

	if( i === winner ){
		div.dataset.result = 'win';
	}else{
		div.dataset.result = 'lose';
	}

	div.addEventListener('click' , function(){
		if(div.dataset.result === 'win'){
			div.textContent = 'Win!';
			div.classList.add('win');
		}else{
			div.textContent = 'Lose!';
			div.classList.add('lose');
		}
	});

	document.body.appendChild(div);
}
