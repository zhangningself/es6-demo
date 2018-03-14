// es5
var callBacks = [];
// 闭包 i是全局
for(var i = 0;i<=2;i++) {
  callBacks[i] = function() {
    return i * 2
  }
}
console.table([
  callBacks[0](),
  callBacks[1](),
  callBacks[2](),
])

// es6
const callBacks2 = []
// let 块作用域
for(let i=0;i<=2;i++) {
  callBacks2[i] = function() {
    return i*2
  }
}

console.table([
  callBacks2[0](),
  callBacks2[1](),
  callBacks2[2](),
]);
(() => {
  const foo = function() {
    return 1
  }
  console.log("foo()===1", foo()===1)
  ;(() => {
    const foo = function() {
      return 2
    }
    console.log("foo()===2", foo()===2)
  })()
})()


{
  function foo() {
    return 1
  }
  console.log("foo()===1", foo()===1)

  {
    function foo() {
      return 2
    }
    console.log("foo()===2", foo()===2)
  
  }
  console.log("foo()===1", foo()===1)

}