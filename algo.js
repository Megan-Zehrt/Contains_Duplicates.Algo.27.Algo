// 217. Contains Duplicate



// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.









/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let obj = new Map()


    for(let i = 0; i < nums.length; i++){

        if(obj.has(nums[i])){
            return true
        }else{
            obj.set(nums[i], 1)
        }
    }

    return false
    
};