class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mydict = new Map();

        for (let i = 0; i < strs.length; i++) {
            const x = strs[i].split("").sort().join("");

            if (mydict.has(x)) {
                mydict.get(x).push(strs[i]);
            } else {
                mydict.set(x, [strs[i]]);
            }
        }

        return Array.from(mydict.values());
    }
}