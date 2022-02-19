function solution(sizes) {
    var answer = 0;
    let big = 0;
    let small = 0;
    
    for(let len of sizes){
        if(len[0] > len[1]){
            if(big<len[0]){
                big = len[0];
            }
            if(small<len[1]){
                small = len[1];
            }
        }else{
            if(big<len[1]){
                big = len[1];
            }
            if(small<len[0]){
                small = len[0];
            }
        }
    }
    
    answer = big * small;
    
    return answer;
}