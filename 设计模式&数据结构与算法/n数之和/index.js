
function nSum(nums, n, target) {
  let res = [];
  nums.sort((a, b) => a - b); // 先将数组进行排序
  helper(nums, n, target, [], res, 0);
  return res;
}

function helper(nums, n, target, path, res, start) {
  // 如果 n = 2，就是求两数之和，此时可以使用双指针法，节约时间复杂度
  if (n === 2) {
    let left = start,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([...path, nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  } else {
    // 递归调用 nSum 函数
    for (let i = start; i < nums.length; i++) {
      // 避免出现重复结果
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      helper(nums, n - 1, target - nums[i], [...path, nums[i]], res, i + 1);
    }
  }
}

console.log('nSum', nSum([-10, 7, 19, 15], 2, 9));