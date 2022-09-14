enum Role{ADMIN, SUBADMIN, USER}

const person = {
    name: "John",
    age: 30,
    hobbies: ['playing', 'reading'],
    role: Role.USER
}

let activities: string[] | number[]
activities = ["football", "ball", "2"]
console.log(activities);


console.log(person.name);

console.log(person.role);


for(const a of person.hobbies){
    console.log(a);
    
}
