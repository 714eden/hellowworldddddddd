function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "DIO", lastName: "Brando" };
document.body.innerHTML = greeter(user);
