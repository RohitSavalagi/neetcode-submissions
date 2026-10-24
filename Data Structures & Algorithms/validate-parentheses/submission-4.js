class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];

    let map = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (let i = 0; i < s.length; i++) {
        const lastItemOnStack = stack[stack.length - 1];
        const currentMatchingBrance = map[s[i]];
        if (lastItemOnStack && currentMatchingBrance && lastItemOnStack === currentMatchingBrance) {
            stack.pop();
        } else
            stack.push(s[i])
    }

    return !stack.length
}
}
