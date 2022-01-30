/*function solution(n)
{
    var answer = 0;

    do {
        answer = answer + n%10;
        n = Math.floor(n/10);
    } while(n>0);

    return answer;
}*/

function solution(n){
    return (n+"").split("").reduce((acc, cur) => acc + parseInt(cur), 0)
}