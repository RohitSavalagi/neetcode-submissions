class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(let i=0; i<strs.length; i++) {
            const sorted = strs[i].split("").sort().join("");

            if(map[sorted] !== undefined) {
                map[sorted].push(strs[i]);
            } else {
                map[sorted] = [strs[i]];
            }
        }

        const values = Object.values(map);
        return values;
    }
}