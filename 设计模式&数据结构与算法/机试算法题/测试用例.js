/*

假设公司有个测试团队,日常工作是负责用例测试。测试用例的结构被记录为
test1 = passed
name2a = failed
name2b = passed
haha3a = passed
haha3b = passed
haha3c=passed
jack4a = timeout
jack4b = failed
从上述案例中,可以看出,我们约定了一个每个测试被标记为<名称><数字序号>
<a/b/c的分组序号>,比如test1,名称为test,序号为1,由于该多组测试只有一个用例,
因此没有分组序号。又比如,name2a,名称为name,序号为2,分组序号为a。
假设测试结果有以下几种:
passed, failed, timeout, error
只有当一组测试中的每个用例都通过,我们才认为这个测试通过了。
比如上述示例中test1通过了,name2是不通过的,因为只有2b通过了,2a没有通
过,haha3是通过了,jack4没有通过。
因此,4组中,只有2组通过了。
假设我们设计了2个数组
n = ['test1','name2a','name2b','haha3a','haha3b','haha3c','jack4a’,'jack4b']
r = ['passed','failed','passed','passed','passed','passed','timeout','failed']
n代表所有的测试用例名称,r代表所有的用例测试结果。
score(n,r)可以计算出测试的综合分,测试的综合分为测试组通过数量/总测试组,并
换算成百分制,上述示例为: 2/4*100=50
请编写你的score方法

*/

function score(n, r) {
    let tests = {}; // 创建一个对象来存储每个测试组的结果
    for (let i = 0; i < n.length; i++) {
        const [name, group] = n[i].match(/(\D+)(\d+\w*)/).slice(1); // 解析测试用例名称、序号和分组信息
        if (!tests.hasOwnProperty(name)) {
            tests[name] = {};
        }
        tests[name][group] = r[i]; // 将测试结果存储到 tests 对象中
    }
    let passedCount = 0;
    let totalCount = 0;
    for (let name in tests) {
        let isPassed = true;
        for (let group in tests[name]) {
            if (tests[name][group] !== 'passed') { // 只要有一个测试用例未通过，该测试组就不通过
                isPassed = false;
                break;
            }
        }
        if (isPassed) {
            passedCount++;
        }
        totalCount++;
    }
    return Math.round(passedCount / totalCount * 100); // 计算测试的综合分并返回
}

// 示例数据
let n = ['test11', 'name2a', 'name2b', 'haha3a', 'haha3b', 'haha3c', 'jack4a', 'jack4b'];
let r = ['passed', 'failed', 'passed', 'passed', 'passed', 'passed', 'timeout', 'failed'];
console.log(score(n, r)); // 输出 50，表示测试通过率为50%