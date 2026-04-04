// var number1, number2, number3;
// function calc(number2, callback){
//     number3 = 3 + number2;
//     //console.log("Addition: " + number3);
//     callback();
// }

// function add(){
    
//     console.log('Addition: ' + number3);
// }

// calc(2,add);

function fetchData(callback) {
    console.log("Checking the order status...");
  
    setTimeout(() => {
      const data = { id: 1, name: "iphone 16" };
      console.log("Order is processing");
      callback(data);
    }, 2000);
  }
  
  function processData(data) {
    console.log("Order is placed:", data);
  }
  
  fetchData(processData);
  