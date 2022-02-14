function solution(a, b) {
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
   
    var date = new Date('2016', Number(a)-1, Number(b));
    
    return week[date.getDay()];
}