const solution = (nums) => {
    if (!nums || !nums.length) return true;
    let cnt = 0;
    for (let i = 1; i < nums.length; i++) {
        // 后面的如果比前面的小，就基本已经说明了不是一个递增数列了
        if (nums[i] <= nums[i - 1]) {
            // 当前位置如果小于其前面的第二个数, 就将当前的这个数往前推进一个位置
            if (i > 1 && nums[i] <= nums[i - 2]) {
                nums[i] = nums[i - 1];
            }
            cnt++;
            if (cnt > 1) return false;
        }
        // const cloneNums = [...nums];
        // cloneNums.splice(i, 1);
        // let flag = true;
        // for (let j = 0; j < cloneNums.length - 1; j ++) {
        //     if (cloneNums[j] >= cloneNums[j + 1]) {
        //         flag = false;
        //         break;
        //     }
        // }
        // flag && cnt ++;
    }
    return true;
}

const arr = [
    [1, 2, 10, 5, 7],
    [2, 3, 1, 2],
    [1, 1, 1],
    [1, 3, 2, 1],
]

arr.forEach(item => {
    console.log(solution(item));
});