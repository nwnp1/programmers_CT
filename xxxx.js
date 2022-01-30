/*function solution(x, n) {
    var answer = [];
    
    for (var i=1; i<=n ; i++) {
        answer.push(x*i);
    }
        
    
    
    return answer;
}*/

/*function solution(x, n) {
    var answer = [];
    var a = 0;
    
    while(a<n) {
        a++;
        answer.push(x*a)
    }
    
    return answer;
}*/

function solution(x, n) {
    return Array(n).fill(x).map((x, i) => (i+1)*x);
}