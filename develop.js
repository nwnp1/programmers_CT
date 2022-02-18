function solution(progresses, speeds) {
    var answer = [];
    var day = answer[0];
    var real = [0];
    
    for(var i=0; i<progresses.length; i++){
        for(var i=0; i<speeds.length; i++){
            var a = (100-progresses[i])%speeds[i];
            var b = (100-progresses[i])/speeds[i];
            if(a === 0){
                answer.push(b);
            }else{
                answer.push(Math.floor(b+1));
            }
        }
    }
   for (let i = 0, j = 0; i < answer.length; i++) {
        if (answer[i] <= day) {
            real[j] += 1;
        } else {
            day = answer[i];
            real[++j] = 1;
        }
    }  
    var a = real.slice(1, real[i]);

    return a;
}