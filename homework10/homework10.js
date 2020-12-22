//  task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


//  task2
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names:[ ,name2, ,name4], ages: [ ,age2, ,age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
 

//  task3
function mul(a, ...rest) {
   if (isNaN(a)) {
      if(rest.length == 0) {
         return 0;
      } else {
         let numbers = 0;
         for (let num of rest) {
            if (isNaN(num)) {
               numbers += num;
            } 
         }
         if (numbers == 0) {
            return 0;
         }
      }
   } else if (rest.length == 0) {
      return a;
   } else {
      let result = a;
      for (let num of rest) {
         if (!isNaN(num)) {
            result *= num         
         }
      }
      return result;
   }
}

console.log(mul(25)); //25
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

 
//  task4
let server = {
   data: 0,
   convertToString: function (callback) {
      callback( () => this.data + "" );
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return ( (callback) => {
         this.result = callback();
      });
   }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


//  task5
function mapBuilder (keysArray, valuesArrays) {
   if (keysArray.length == valuesArrays.length) {
      let map = new Map();
      for (let i = 0; i < keysArray.length; i++) {
         map.set(keysArray[i], valuesArrays[i]);
      }
      return map;
   } else {
      console.log("Arrays' lengths must match");
   }
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
