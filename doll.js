function solution(board, moves) {
    var answer = 0;
    var basket = [];

    for(var i=0; i<moves.length; i++){
        const move = moves[i] -1;
        for(var j=0; j<board.length; j++){
            const doll = board[j][move];
                if(doll) {
                    board[j][move] = 0;

                    if(basket !== 0 && basket[basket.length-1] === doll){
                        basket.pop();
                        answer += 2;
                    }else{
                        basket.push(doll);                   
                    }
                    break;
                }
        }
    }

    return answer;
}