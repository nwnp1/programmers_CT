function solution(phone_number) {
    var answer = '';
    /*for(var i=0; i<phone_number.length; i++) {
        if(i < phone_number.length - 4) {
            answer = answer+'*';
        } else {
            answer = answer + phone_number[i];
        }
    }*/
    var answer = '*'.repeat(phone_number.length-4)+phone_number.slice(-4);
    
    
    return answer;
}