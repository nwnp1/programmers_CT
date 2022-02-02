function solution(x) {
    
    var arr = 0;
       
    arr = (x+"").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
    
    return (x % arr === 0) ? true : false;
}