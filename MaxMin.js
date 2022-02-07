function solution(s) {
    var strr = s.split(" ");
    var Max = Math.max(...strr);
    var Min = Math.min(...strr);
    
    return String(Min) +" "+ String(Max);
}