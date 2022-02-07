function solution(d, budget) {
    var answer = 0;
    var sm = 0;
    
    d.sort((a, b) => a - b);
    
    for(var i=0; i<d.length; i++){
        sm += d[i]; 
        if(sm <= budget){
            answer++;
        }else{
            break;
        }
    }
    
    return answer;
}