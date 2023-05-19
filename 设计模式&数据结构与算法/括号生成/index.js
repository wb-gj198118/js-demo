const generateParenthesis = function(n) {
    const results = [];
    function pand(str, left, right) {
        if (left === 0 && right === 0) {
            return results.push(str);;
        }
        if (left > right) return false;
        if (left > 0) {
            pand(str + '(', left - 1, right);
        }
        if (right > 0) {
            pand(str + ')', left, right - 1);
        }
    }
    pand("", n, n);
    return results;
};

console.log(generateParenthesis(7));