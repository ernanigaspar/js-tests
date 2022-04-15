module.exports = {
    containsNumber: function (str) {
        const re = /\d/;
        return re.test(str);
    },

    containsRepeatingLetter: function (str) {
        const re = /([a-z])\1/i;
        return re.test(str);
    },

    endsWithVowel: function (str) {
        const re = /[aeiou]$/i;
        return re.test(str);
    },

    captureThreeNumbers: function (str) {
        const re = /\d{3}/;
        const e = re.exec(str)
        if (i !== null) {
            return e[0];
        } else {
            return false;
        }
    },

    matchesPattern: function (str) {
        const re = /^\d{3}-\d{3}-\d{4}$/;
        res = re.test(str);
        return res;
    },
    isUSD: function (str) {
        const re = /\$?\d{1,3},?\d{1,3},?\d{1,3}\.\d{2}/;
        res = re.test(str);
        return res;
    }
};
