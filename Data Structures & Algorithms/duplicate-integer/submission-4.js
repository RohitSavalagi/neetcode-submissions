class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = [];
        for (let i=0; i<nums.length; i++) {
            for (let j=0; j<set.length; j++) {
                if (nums[i] === set[j]) {
                    return true;
                }
            }
            set.push(nums[i]);
        }

        return false;
    }
}
