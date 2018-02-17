export  default  Validator = {
    validateEmail(email) {
        var str = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return str.test(email);
    },
    specialChars(str){
        return /^[0-9a-zA-Z]+$/.test(str);
    },
    onlyLetters(str){
        return /^[a-z0-9A-Z ]+$/.test(str);
    },
    numbersAndPlus(str) {
        return /^[0-9+]+$/.test(str);
    }
}