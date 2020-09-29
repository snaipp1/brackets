const check = (str, bracketsConfig) => { 
    let bracket = str;
    let brackets = [];
    bracketsConfig.forEach(item => brackets.push(item[0].concat(item[1])));

    for(let i = 0; i < brackets.length; i++){
        bracket = bracket.replace(brackets[i], '');
    }
    if(bracket === str){
        return false;
    }else if(bracket === ''){
        return true;
    }else{
        return check(bracket, bracketsConfig);
    }
}

  

module.exports = check; 
