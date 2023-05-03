	let game = document.getElementById('game');
        let message = document.getElementById('message');
        let restart = document.getElementById('restart');
        let win_x = document.getElementById('win_x');
        let win_nope = document.getElementById('win_nope');
        let win_draw = document.getElementById('win_draw');
        let cells = document.getElementsByClassName('cell');
        let data = []; //хранилище ячеек
        win = {x: 0, '0': 0, draw: 0};
        let stepCount = 0;
        let winIndex = [
			[0, 1, 2], 
			[3, 4, 5], 
			[6, 7, 8], 
			[0, 3, 6], 
			[1, 4, 7], 
			[2, 5, 8], 
			[0, 4, 8], 
			[2, 4, 6]
		];
        let player = 'x';
        let paused = false;
        function chekWin() {
            for (let i = 0; i < winIndex.length; i++)
            let id = winIndex[i];
            let check == data[id[0]] &&
            data[id[1]] == data[id[2]];
        }
        restart.addEventListener('click', gameRestart);
        function addEvent(cell) {
            cell.addEventListener('click', step);
            function step() {
                if (!cell.innerHTML && !paused) {
                    cell.innerHTML = player;
                    let id = cell.getAttribute('data-id');
                    data[id] = player;
                    stepCount++;
                    if (chekWin()) {
                        message.innerHTML = 'Выиграл: ' + player;
                        win [player]++;
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

        for (let i = 0; i < cells.length; i++) {
            addEvent(cell[i]);
        } 