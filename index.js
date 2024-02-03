// api call, user id
// api call , product by user id
// api call of product discount by product id

function makeSandwich(callback) {
  console.log("Step 1: Get some bread");
  setTimeout(() => {
    callback();
    setTimeout(() => {
      console.log("Step 3: Add some cheese");
      setTimeout(() => {
        console.log("Step 4: Add some jelly");
      }, 1000);
    }, 1000);
  }, 1000);
}

makeSandwich(function () {
  console.log("Step 2: Toast the bread");
});
