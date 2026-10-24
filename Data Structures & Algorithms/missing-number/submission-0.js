class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // sum of given numbers
        let sum = 0;
        for(let i=0;i<nums.length;i++) {
            sum += nums[i];
        }

        // sum bu maths
        let expectedSum = (nums.length * (nums.length + 1)) / 2;

        return expectedSum - sum;
    }
}
