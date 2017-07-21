function result() {

    let summary = [];

    for (let i = 0; i < arguments.length; i++) {
        let argumentValue = arguments[i];
        let argumentType = typeof(argumentValue);

        console.log(`${argumentType}: ${argumentValue}`);

        if (!summary[argumentType]) {
            summary[argumentType] = 1;
        } else {
            summary[argumentType]++;
        }
    }

    //prep for sorting
    let typesToSort = [];
    for (let currentType in summary) {
        typesToSort.push([currentType, summary[currentType]]);
    }

    //sort summary
    let sortedTypes = [];
    sortedTypes = typesToSort.sort((a, b)=>b[1] - a[1]);

    //print summary
    for (let item of sortedTypes) {
        console.log(`${item[0]} = ${item[1]}`)
    }
}

result('cat', 42, 430, 'cat', function () {
    console.log('Hello world!');
});