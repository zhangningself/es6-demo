/* eslint-disable */
{
  // es5\es3 默认参数的写法
  function f(x, y, z) {
    if (y === undefined) {
      y = 7
    }
    if (z === undefined) {
      z = 42
    }
    return x+y+z
  }
  console.log(f(1))
}