class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map()
        
        for( let num of nums){
            map.set(num , (map.get(num) || 0) + 1)
        }
        console.log(map)


        let pairs = [...map.entries()].sort((a,b) => b[1] - a[1])

        console.log(pairs)

        let out = []
        for(let i = 0 ; i < k ; i++){
           out.push(pairs[i][0]) 
        }
        return(out)

        
    }
}
