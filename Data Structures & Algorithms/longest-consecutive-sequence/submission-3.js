class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();

        // store every number in the map
        for (const n of nums) {
            map.set(n, true);
        }

        let longest = 0;

        for (const n of nums) {
            // only start counting if n is the beginning of a sequence
            if (!map.has(n - 1)) {
                let current = n;
                let length = 1;

                while (map.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
