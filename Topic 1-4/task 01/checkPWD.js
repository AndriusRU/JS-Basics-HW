function getPasswordChecker(password) {
    return function(user_password) {
        return user_password === password;
    }
}

const c = getPasswordChecker("1234");
console.log(c);
console.log(c("1233"));
console.log(c("1234"));
console.log(c("1235"));