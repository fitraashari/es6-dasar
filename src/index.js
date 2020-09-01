//rest dan spread menguraikan semua isi array berapapun isinya

signIn = (...member)=>{
    console.log(member)
}
// let data = ['fitra','123','24']
username = 'fitra'
password = '123'
umur = 30
signIn(username,password,umur);