function solution(arr1, arr2) {
    var answer = [];
    
    for(var i=0; i<arr1.length; i++){
            let temp = [];
        for(var j=0; j<arr1[i].length; j++){// arr1 안 배열의 길이
            temp.push(arr1[i][j]+arr2[i][j]);
        }        
        answer.push(temp);
    }    
    return answer;
}