/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let psum = new Array(nums.length).fill(0)
    let sum = 0
    for(let i = 0; i<nums.length;i++){    
        sum = sum + nums[i]
        psum[i] = sum
    }
    return psum
};