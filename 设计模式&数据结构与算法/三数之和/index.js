function threeSum(nums) {
    let result = [];
    const len = nums.length;
    if (nums === null || len < 3) return result;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // 去重
                while (left < right && nums[right] === nums[right - 1]) right--; // 去重
                left++;
                right--;
            }
            else if (sum < 0) left++;
            else if (sum > 0) right--;
        }
    }
    return result;
}

console.log(' result: ', threeSum([5, 1, 0, 10, -1, -4], 3, 6));