console.log("************** DELIVERABLE 03 *********************");
const object = {
    name: 'irene',
    age: 36,
    childs: 2
}

const clone = (obj) => {return { ...obj };}
console.log(clone(object))

/////////////////////////////////////////////

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (a, b) => {return {...b, ...a}}
console.log(merge(a,b))