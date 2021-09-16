function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

let favNum = 42;
const instructor = {
    firstName = "Colt",
    [favNum]: "That is my favorite!"
}

const instructor = {
    firstName: "colt",
    sayHi() { return "Hi!" },
    sayBye() { return `${this.firstName} says bye` },
}

function createAnimal(species, verb, noise) {
    return {
        species, [verb]() { return noise; }
    }
}
