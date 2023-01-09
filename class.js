// class tvs{
//     name="apache"
//     price=89000
//     cc=99
// }
// let data = new tvs()
// console.log(data.name)
// console.log(data.price)
// console.log(data.cc)

class bajaj{
    name="platinum"
    price=75000
    cc=99

    itm(){
        console.log("hello itm", this.name)
    }
    mits(){
        console.log("hello mits", this.price + " and " + this.cc)
    }

    constructor(){
        console.log("hello constructor",this.name)
    }

    static rjit(){
        console.log("hello rjit")
    }

}
// let data1 = new bajaj()
// console.log(data1.name)
// console.log(data1.price)
// console.log(data1.cc)
// data1.itm()
// data1.mits()
bajaj.rjit()
