function mergeArr(nums1, nums2, m = nums1.length, n = nums2.length) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = m - 1, j = n - 1, k = i + j + 1, curr;
    while(i >= 0 || j >= 0) {
        if (i === -1) {
            curr = nums2[j--];
        } else if (j === -1) {
            curr = nums1[i --];
        } else if (nums1[i] > nums2[j]) {
            curr = nums1[i --];
        } else {
            curr = nums2[j --];
        }
        nums1[k --] = curr;
    }
    return nums1;
}

const a1 = [0];
const a2 = [1, 2];

console.log(mergeArr(a1, a2));