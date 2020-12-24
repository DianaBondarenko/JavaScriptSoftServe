const now = new Date();
const hours = now.getHours();
exports.greeting = function(user) {
    const userName = user.username;
    let greeting;
    if (hours >= 23 || hours < 5) {
        greeting = "Good night";
    } else if (hours >= 17) {
        greeting = "Good evening";
    } else if (hours >= 11) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good morning";
    }    
    return greeting + ", " + userName;
}
exports.getDate = function() {
    return "Date of request: "+now;
}