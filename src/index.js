//var function scope
//var let dan const block scope
// let nama = "Fitra";
// {
// let nama = "Ashari";
// console.log(nama);
// }
// function getName(){
//     let nama="Fitra";
//     if (false) {
//         console.log(nama);
//     }else{
//         console.log(nama);
//     }
// }
// getName();

//const tidak bisa reasign
const person = {
    id : 1,
    nama : "fitra"
};
person={
    id:2,
    nama:"ashari"
}
console.log(person);