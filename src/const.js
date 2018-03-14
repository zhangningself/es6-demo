// es5 常量写法
// 定义属性的写法
Object.defineProperty(window, "PI2", {
  value: 3.1415926,
  writable: false // 不能写
})
console.log(window.PI2)

// es6写法

// 常量
const PI = 3.1415926
console.log(PI)