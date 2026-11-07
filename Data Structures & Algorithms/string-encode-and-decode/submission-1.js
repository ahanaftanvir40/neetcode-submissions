class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        for(let i = 0 ; i < strs.length ; i++){
            strs[i] = (strs[i].length + '#' + strs[i])
        }
        return(strs.join(''))
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let mainArr = []
        let num = 0
        for (let i = 0 ; i < str.length ; i++){
            if(str[i] === '#'){
                let totalStr=''
                for(let j = i+1 ; j < i + num + 1 ; j ++){
                    totalStr += str[j]
                }
                mainArr.push(totalStr)
                i = i + num
                num = 0
             
            }else num = num * 10 + Number(str[i])
        }
        return mainArr

    }
}
