// INPUT

function I(){return window.Input};

window.Input=[];





$(function(){
	environmentSizing();
	
	$('.draggable').draggable({
		containment:'#playground'
	}).draggable('disable');
	
	$('.resizable').resizable({
		containment:'#playground',
		grid:16
	}).resizable('disable');
	
	$('canvas').on('mousewheel',function(e){
		e.preventDefault();
		
		if(I()['Control']){
			// Zoom in on the canvas
		}
	});
});





// ENVIRONMENT EVENTS

function draggable(){
	$('.draggable').draggable(
		(parseInt(I()['Control']) | 0) === 0
		||
		(parseInt(I()['Shift']) | 0) === 0
		?
			'disable'
		:
			'enable'
	);
}

function environmentKeyEvents(){
	draggable();
	resizable();
}

function environmentSizing(){
	var $p=$('#playground');
	
	$p.height(
		window.innerHeight
		-
		$p.offset().top
		-
		(parseInt($p.css('padding-top')) | 0)
		-
		(parseInt($p.css('padding-bottom')) | 0)
	);
}

function resizable(){
	$('.resizable').resizable(
		(parseInt(I()['Control']) | 0) === 0
		||
		(parseInt(I()['Shift']) | 0) !== 0
		?
			'disable'
		:
			'enable'
	);
}





// WINDOW EVENTS

window.addEventListener('resize',function(e){
	environmentSizing();
});

window.addEventListener('keydown',function(e){
	if(I()[e.keycode] == undefined){
		I()[e.key]=0;
	}
	
	I()[e.key]++;
	
	environmentKeyEvents();
});

window.addEventListener('keyup',function(e){
	I()[e.key]=0;
	
	environmentKeyEvents();
});

window.addEventListener('mousemove',function(e){
	
});

window.addEventListener('mousedown',function(e){
	
});

window.addEventListener('mouseup',function(e){
	
});

window.addEventListener('mousewheel',function(e){
	e.preventDefault();
});

window.addEventListener('blur',function(){
	window.Input=[];
	
	environmentKeyEvents();
});

window.addEventListener('focus',function(){
	environmentKeyEvents();
});