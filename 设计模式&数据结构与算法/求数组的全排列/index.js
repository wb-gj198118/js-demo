function* permutationGenerator(arr) {
    function* permute(curArr, restArr) {
        if (restArr.length === 0) {
            yield curArr;
        } else {
            for (let i = 0; i < restArr.length; i++) {
                const newCurArr = [...curArr, restArr[i]];
                const newRestArr = restArr.slice();
                newRestArr.splice(i, 1);
                yield* permute(newCurArr, newRestArr);
            }
        }
    }

    yield* permute([], arr);
}

for (const perm of permutationGenerator([1, 2, 3])) {
    console.log(perm);
}