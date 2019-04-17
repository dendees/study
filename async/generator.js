// function* gen(x){
//     var y = yield x + 2
//     return y
// }
// var g = gen(1)
// console.log(g.next())
// console.log(g.next(3))

function* gen(x){
    try{
        let y = yield x + 4
    }catch(e){
        console.log(e)
    }
    return x
}

var g = gen(3)
g.next()
g.throw("错了")