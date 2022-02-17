function solution(citations) {
    var answer = 0;
    var c = citations.sort((a, b) => b - a);
    
    
    for(var i=0; i<c.length; i++){
        if(i+1 <= c[i]){
            answer++;
        }
        /*answer = c.reduce((prev, curr) => {
        return (Math.abs(curr - (i-1)) < Math.abs(prev - (i-1)) ? curr : prev);
        });*/
        
    }

    return answer;
}