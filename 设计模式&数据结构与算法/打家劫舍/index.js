function rob(nums) {
    if (!nums || !nums.length) return 0;
    const len = nums.length;
    let dp0 = 0;
    let dp1 = nums[0];
    for (let i = 1; i < len; i++) {
        let temp = Math.max(dp0, dp1);
        dp1 = dp0 + nums[i];
        dp0 = temp;
    }
    return dp0;
}

console.log(rob([1,2,3,1]));