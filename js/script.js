function greetings(fname) {
    var dayTime = new Date();
    var hours = dayTime.getHours();
    var greeting;
    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    return greeting + " " + fname + "!";
}