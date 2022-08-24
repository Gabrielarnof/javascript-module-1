function checkValid(userName, userType) {
    if ((userName.length > 5 && userName.length < 10 && userName.charAt(0) === userName.charAt(0).toUpperCase()) && (userType === "admin" || userType === "manager")) {
        return "Username valid";
    } else {
        return "Username Invalid";
    }
}
console.log(checkValid("gabriel", "manager"));
console.log(checkValid("Gabriel", "manager"));