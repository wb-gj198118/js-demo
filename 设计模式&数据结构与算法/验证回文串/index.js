function isPalindrome(s) {
    s = s.toLowerCase();
    const len = s.length;
    console.log(s);
    let left = 0, right = len - 1;
    while(left <= right) {
        let reg = /^[a-zA-Z\d]$/, tpl, tpr;
        if (reg.test(s[left])) tpl = s[left]
        else {
            left ++;
            continue;
        }
        if (reg.test(s[right])) tpr = s[right]
        else {
            right --;
            continue;
        }
        if (tpl !== tpr) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

console.log(isPalindrome('aa_b'));

console.log(isPalindrome('a_b_a'));

console.log(isPalindrome('1_1_1_1'));