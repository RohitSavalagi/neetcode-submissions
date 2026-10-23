class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // s -> racecar -> array
        // t -> ccrrea -> array

        if (s.length !== t.length) return false;

        let map = {};
    
        for (let i=0; i<s.length; i++) {
            if (map[s[i]] !== undefined) {
                map[s[i]] = map[s[i]] + 1; //increament entry of character
            } else
            map[s[i]] = 1;
        }

        for (let i = 0; i < t.length; i++) {
            if (map[t[i]] !== undefined) {
                map[t[i]] = map[t[i]] - 1; //decrement entry of character
            }
        }

        let values = Object.values(map);

        for (let i=0; i<values.length; i++) {
            if (values[i] !== 0) {
                return false;
            }
        }

        return true;
    }
}
