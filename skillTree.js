function solution(skill, skill_trees) {
    var answer = 0;
    var a = skill.split('');
    var b = 0;
    
    for(var i=0; i<skill_trees.length; i++){
        b = skill_trees[i].split('').filter((el)=> a.includes(el)).join('');
        if(b === skill.slice(0, b.length)){
            answer++;
        }
    }
    
    
    
    return answer;
}