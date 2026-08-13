class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for (let str of strs) {
            const prefix = str.length + '#';
            encode += prefix + str;
        }

        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decode = [];
        for (let i = 0; i < str.length;) {
            let strLength = '';

            while(str[i] !== '#') {
                strLength += str[i];
                i++;
            }

            i++;
            let word = '';
            for(let k = 0; k < parseInt(strLength); k++, i++) {
                word += str[i];
            }

            decode.push(word);
        }

        return decode;
    }
}