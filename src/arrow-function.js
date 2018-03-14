{
  // es5,es3写法
  var evens = [1, 2, 3, 4, 5];
  var odds = evens.map(function(v) {
    return v + 1;
  });
  console.log(evens, odds);
}

// es6
{
  let evens = [1, 2, 3, 4, 5];
  let odds = evens.map(v => v + 1);
  console.log(evens, odds);
}
{
  // es3, es5
  var factory = function() {
    this.a = "a";
    this.b = "b";
    this.c = {
      a: "a+",
      b: function() {
        return this.a;
      }
    };
  };
  console.log(new factory().c.b());
}

{
  var factory = function() {
    this.a = "a";
    this.b = "b";
    this.c = {
      a: "a+",
      b: () => {
        return this.a; // this指向是定义时this指向
      }
    };
  };
  console.log(new factory().c.b());
}
