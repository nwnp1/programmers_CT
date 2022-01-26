function solution(answers) {
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var answer=[];
    
    var a11 = answers.filter((a, i) => a === a1[i%a1.length]).length;
    var a22 = answers.filter((a, i) => a === a2[i%a2.length]).length;
    var a33 = answers.filter((a, i) => a === a3[i%a3.length]).length;
    var max = Math.max(a11, a22, a33);
    
    if(a11 === max) {answer.push(1)};
    if(a22 === max) {answer.push(2)};
    if(a33 === max) {answer.push(3)};
    
    return answer;
};