
module.exports = {
    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        const init = 0;
        return arr.reduce((previous, current) => previous + current, init);
    },

    remove: function (arr, item) {
        return arr.filter(elm => elm !== item);
    },

    removeWithoutCopy: function (arr, item) {
        arr.forEach((elm) => {
            let i = arr.indexOf(elm);
            let j = arr.lastIndexOf(elm);
            if (i !== j) {
                arr.splice(i, 1);
                arr.splice(j - 1, 1);
            }
        })

        return arr;

    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.splice(0, 0, item);
        return arr
    },

    curtail: function (arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat: function (arr1, arr2) {
        let arr3 = arr1.concat(arr2);
        return arr3;
    },

    insert: function (arr, item, index) {
        let imax = arr.length - 1;
        if (index > imax || imax < 0) {
            return undefined;
        } else {
            arr.splice(index, 0, item);
        }

        return arr;
    },

    count: function (arr, item) {
        let count = 0;
        arr.forEach((elm) => {
            if (elm === item) {
                count++
            }
        })
        return count;

    },

    duplicates: function (arr) {
        let arr1 = [];
        let dup = 0;
        arr.sort();

        arr.forEach((item) => {
            if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
                if (item !== dup) {
                    arr1.push(item);
                    dup = item;
                }
            }
        });
        return arr1;

    },

    square: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr.splice(i, 1, arr[i] * arr[i])
        }
        return arr;
    },

    findAllOccurrences: function (arr, target) {
        let arr1 = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                arr1.push(i);
            }
        }
        return arr1;
    },
};

