// let getMember = new Promise((resolve,reject)=>{ //langsung asign
//     if (true){
//         resolve('berhasil')
//     }
//     reject('gagal')
// })
// console.log(getMember.then((msg)=>{
//     console.log("ini dalam then2 "+msg) //jika resolve
// },(msg)=>{//catch chain
//     console.log("ini dalam catch2 "+msg) //jika reject
// }));

//di dalam function
let getMember=()=>{
    return new Promise((resolve,reject)=>{

    })
}
console.log(getMember());