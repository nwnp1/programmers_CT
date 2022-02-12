function solution(number, k) {
    var stack = [];
    
    for(var i=0; i<number.length; i++){
        var a = number[i];
        while(k>0 && stack[stack.length-1]<a){
            stack.pop();
            k--;
        }
        stack.push(a);
    }
    
    return stack.slice(0, stack.length - k).join('');
}