class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (let num of nums) {
            map[num] = (map[num]||0)+1;
        }
        const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);

        const res = sorted.slice(0, k).map(([key, v]) => Number(key));
         return res;
    }
}