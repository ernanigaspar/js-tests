module.exports = {
    argsAsArray: function (fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak: function (fn, obj) {
        return fn.call(obj);

    },

    functionFunction: function (str) {
        let s = str + ', ';
        return function foo(s1) {
            return s + s1;
        };

    },

    makeClosures: function (arr, fn) {
        let fa = [];
        let f = (x) => {
            let arr2 = arr.splice();
            for (let i = 0; i < arr2.length; i++) {
                fa[i] = f(arr2[i]);
            }
            return fa;
        }
    },

    partial: function (fn, str1, str2) {

    },

    useArguments: function () {

    },

    callIt: function (fn) {

    },

    partialUsingArguments: function (fn) {

    },

    curryIt: function (fn) {

    }
};

