class Solution(object):
    def runningSum(self, nums):
        sum = 0
        psum = [0 for i in range (len(nums))]
        for i in range(len(nums)):
            sum=sum + nums[i]
            psum[i] = sum
        return psum
        