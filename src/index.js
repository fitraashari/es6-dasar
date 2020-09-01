// class
class members{
     constructor(name,umur){
         //jika ingin mengakses variable didalam class gumakan this
         this.name = name
         this.umur = umur
     }
    getData(name,umur){
        return `nama ${this.name} umur ${this.umur}`
    }

    static getPoint(){//static function bsia di panggil tanpa di instgansiasi
        return `Pointnnya 100`
    }
}
let member = new members('fitra',20)
console.log(members.getPoint());