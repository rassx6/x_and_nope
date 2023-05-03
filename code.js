var game = document.getElementById('game');
let message = document.getElementById('message');
let restart = document.getElementById('restart');
let win_x = document.getElementById('win_p1');
let win_0 = document.getElementById('win_p2');
let win_draw = document.getElementById('win_draw');
let cells = document.getElementsByClassName('cell');
let player = 'x';
let paused = false;
let data = []; //Здесь будут хратися отмеченые ячейки
win = {x: 0, '0': 0, draw: 0};
var stepCount = 0;
var winIndex = [
	[0, 1, 2], 
	[3, 4, 5], 
	[6, 7, 8], 
	[0, 3, 6], 
	[1, 4, 7], 
	[2, 5, 8], 
	[0, 4, 8], 
	[2, 4, 6]
	];
    function changePlayer() {
		if (player === 'x') {
			player = '0';
		} else {
			player = 'x';
			}
			message.innerHTML = 'Ходит: ' + player;
	}
	function clear() {
		for (var i = 0; i < cells.length; i++) {
			cells[i].innerHTML = '';
		}
	}
	for (var i = 0; i < cells.length; i++) {
		addEvent(cells[i]);
	}
	restart.addEventListener('click', gameRestart);
	function addEvent(cell) {
		cell.addEventListener('click', step);
		function step() {
			if (!cell.innerHTML && !paused) {
				cell.innerHTML = player;
				var id = cell.getAttribute('data-id');
				data[id] = player;
				stepCount++;
				if (checkWin()) {
					message.innerHTML = 'Выиграл: ' + player;
					win[player]++;
					stepCount = 0;
					paused = true;
				} else {
					changePlayer();
				}
				if (stepCount >= 9) {
					win.draw++;
					stepCount = 0;
					message.innerHTML = 'Ничья';
				}
				updateStatistics();
			}	
		}
	}
	function checkWin() {
		for (var i = 0; i < winIndex.length; i++) {
			var id = winIndex[i];
			var check = data[id[0]] &&
				data[id[0]] == data[id[1]] && 
				data[id[1]] == data[id[2]];
			if (check) {
				return true;
			}
		}
		return false;
	}
	function gameRestart() {
		clear();
		changePlayer();
		data = [];
		paused = false;
	}
	function updateStatistics() {
		win_x.innerHTML = win.x; 
		win_0.innerHTML = win['0']; 
		win_draw.innerHTML = win.draw; 
	}