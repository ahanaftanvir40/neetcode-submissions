class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map1 = new Map()
        const map2 = new Map()

        for(let char of s){
            map1.set(char, (map1.get(char) || 0) + 1)
        }
        for(let char of t){
            map2.set(char, (map2.get(char) || 0) + 1)
        }

        if(map1.size !== map2.size){
            return false
        }
        for (let [key , val] of map1){
            if(!map2.has(key) || map2.get(key) !== val ){
                return false
            }
        }
        return true

        console.log(map1)
        console.log(map2)
    }
}
