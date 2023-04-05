

let arr = [1,2,3,4,5,6,7,8]

function test (initial){
    return function (arg){
       return  arg.map(value => value+=initial)
    }

}
let res  = test(1)(arr)
console.log(res)