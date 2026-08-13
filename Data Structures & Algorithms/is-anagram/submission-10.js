class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = {};

        for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }
        
        for (let j of t) {
            if (map[j] === undefined) {
                return false;
            }

            map[j] = map[j] - 1;

            if (map[j] < 0) {
                return false;
            }
        }

        let res = true;
        for (let value of Object.values(map)) {
            if (value !== 0) {
              return false;
            }
        };

        return true;
    }
}
