class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var newnum = new Set(nums)
        if(newnum.size===nums.length){
            return false
        }else{
            return true
        }
    }
}
