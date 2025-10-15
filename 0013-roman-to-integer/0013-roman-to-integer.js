/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNum={
        "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000
    }
    let total=0;

    for(let i=0;i<s.length;i++){
        let currentval=romanNum[s[i]]
        let nextval=romanNum[s[i+1]]

        if(nextval&&currentval<nextval){
            total -=currentval;
        }else{
            total +=currentval;
        }
    }
    return total
};