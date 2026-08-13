class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        strs = strs.map((str) => {
            const res = str.split('').sort().join('');
            if (map[res] === undefined) {
                map[res] = [str];
            } else {
                map[res] = [...map[res], str];
            }

        });


        let result = [];
        Object.values(map).map(value => {
            result = [...result, value];
        })

        return result;
    }
}