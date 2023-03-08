function getPasswordChecker(password) {
    return function(user) {
        if( password === user) {
            return true;
        }
        return false;

    }
}

const check = getPasswordChecker('qwerty');

console.log( check('qwe') );
console.log( check('qwert') );
console.log( check('qwerty') );