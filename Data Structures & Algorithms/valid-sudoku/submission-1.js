class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let row of board){
            for(let i = 0 ; i < row.length; i++){
                if(row[i] === '.') continue
                for(let j = i+1 ; j < row.length ; j++){
                    if(row[i] === row[j]){
                        return false
                    }
                }
            }
        }

        for(let c = 0; c < board.length ; c++){
            for(let i = 0 ; i < board.length ; i++){
                if(board[i][c] === '.' ) continue
                for( let j = i+1 ; j < board.length ; j++){
                    if(board[i][c] === board[j][c]) return false
                }
            }
        }


        // 3x3
        for(let boxRow = 0; boxRow < board.length ; boxRow+= 3){
            for(let boxCol = 0; boxCol < board.length ; boxCol += 3){
                let box = []
                for(let r = boxRow ; r < boxRow + 3 ; r ++){
                    for (let c = boxCol ; c < boxCol + 3 ; c++){
                        box.push(board[r][c])
                    }
                }

                //3x3 duplicate
                for(let i = 0 ; i < box.length ; i++){
                    if (box[i] === '.') continue;
                    for(let j = i+1 ; j < box.length ; j++){
                        if(box[i] === box[j]){
                            return false
                        }
                    }
                }

                // console.log(box)
            }
            
        }


        
        return true        
    }
}
