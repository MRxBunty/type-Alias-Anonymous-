// ANONYMOUS TYPE,
let teacher : {name: string, experienced: boolean} = {
    name: "HINA NASEER & HUNAIN HYDER",
    experienced: true
}

console.log("teachers name: " +teacher.name);
console.log("Experts: "+teacher.experienced);

//TYPE ALIASED Object,
type Student = {
    name: string,
    age?: number  // (age) this age type is compulsory & this  (age ?) is optional . so we use this one age? .
}

let student: Student = {
    name: "RAHEEL",
    age: 19
}

console.log("student name: " + student["name"]);
console.log(`The student's age is: ${student.age}`);

