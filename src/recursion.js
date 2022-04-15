module.exports = {
    listFiles: function (data, dirName) {
        let files = [];
        let s1 = JSON.stringify(data)
        let s2 = s1.split('"')
        for (let i = 0; i < s2.length; i++) {
            if (s2[i].includes('.')) {
                files.push(s2[i]);
            }
        }
        return files;
    },

    permute: function (arr) {

    },

    fibonacci: function (n) {

    },

    validParentheses: function (n) {

    }
};
