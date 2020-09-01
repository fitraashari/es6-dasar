// //syntax arrow => function shorthand

// let members = ['fitra','ashari','arashi'];
// // hanya 1 parameter 
// // members.forEach(member=>console.log(member));

// //jika menggunakan  parameter harus menggunakan kurung

// //tidak perlu kurung kurawal jika tanpa return
// let membersindex = members.map((member,index)=>
//     member+' == '+index);
// console.log(membersindex);

let data={
    members: ["fitra","ashari"],
    getMembers(){
        //ketika menggunakan syntax arrow this jadi objek itu sendiri, jika menggunakan function this = window
        this.members.map((name)=>{
            console.log(this);
        })
    }
}
data.getMembers();