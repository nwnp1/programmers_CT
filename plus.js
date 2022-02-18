function solution(numbers) {
    var answer = [];
    var answer1 = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j= i + 1; j<numbers.length; j++){
            answer.push(numbers[i] + numbers[j]);            
        }
        
    }    

    answer1 = [...new Set(answer)];
    
    return answer1.sort((a, b) => a - b);
}