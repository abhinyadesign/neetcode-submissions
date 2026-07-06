class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        var ans = [...nums];
        for(var i=0;i<nums.length;i++){
            ans.push(nums[i]);
        }
        return ans
    }
}
