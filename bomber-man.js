function getNextGrid(fullGrid, baseGrid, rows, columns){
    const bomb = 'O';
    let nextGrid = fullGrid.map( line => line.split('') );
    
    // go througth all cells of the grid
    for(let row=0; row<rows; row++){
        for(let column=0; column<columns; column++){
            let value = baseGrid[row][column];
            if (value === bomb){
                nextGrid[row][column] = '.';
                if ((row + 1) < rows){
                    nextGrid[row+1][column] = '.'
                }
                if (row > 0){
                    nextGrid[row-1][column] = '.'
                }
                if ((column + 1) < columns){
                    nextGrid[row][column+1] = '.'
                }
                if (column > 0){
                    nextGrid[row][column-1] = '.'
                }
            }
        }
    }
    return nextGrid.map( line => line.join('') );;
}

// Complete the bomberMan function below.
function bomberMan(n, grid) {
    const bomb = 'O';
    const fullBombGrid = grid.map( line => {
            return line.replace(/./g, bomb);
        });

    if ( n === 1){
        return grid;
    }
    
    if ( n % 2 === 0){
        return fullBombGrid;
    }
    
    const rows = grid.length;
    const columns = grid[0].length;

    let nextGrid = getNextGrid(fullBombGrid, grid, rows, columns);

    if ((n+1) % 4 === 0){
        return nextGrid;
    }

    nextGrid = getNextGrid(fullBombGrid, nextGrid, rows, columns);
    return nextGrid;
}