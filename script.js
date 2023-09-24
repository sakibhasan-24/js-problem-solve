// function cubeNumber(number) {
//   if (typeof number !== "number") {
//     return "invalid number ! give valid number..valid numbers are (1,2,3,4....)";
//   }
//   return Math.pow(Math.abs(number), 3);
// }

// function matchFinder(string1, string2) {
//   if (
//     string1.length <= 0 ||
//     string2.length <= 0 ||
//     typeof string1 !== "string" ||
//     typeof string2 !== "string"
//   ) {
//     return "invalid input!!!";
//   }
//   if (string1.includes(string2)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function sortMaker(arr) {
//   if (!Array.isArray(arr)) {
//     return "input is not an array";
//   }
//   if (arr.length > 2 || arr.length < 2) {
//     return "invalid array..must be two elements only";
//   }
//   if (arr[0] === arr[1] && arr[0] > 0 && arr[1] > 0) {
//     return "equal";
//   }
//   if (
//     arr[0] < 0 ||
//     arr[1] < 0 ||
//     typeof arr[0] !== "number" ||
//     typeof arr[1] !== "number"
//   ) {
//     return "invalid input";
//   }
//   if (arr[0] < arr[1]) {
//     if (arr[0] < 0 || arr[1] < 0) {
//       return "invalid input";
//     } else {
//       let temp;
//       temp = arr[0];
//       arr[0] = arr[1];
//       arr[1] = temp;
//       return arr;
//     }
//   }
//   return arr;
// }

// function findAddress(obj) {
//   if (Array.isArray(obj)) {
//     return "invalid !!!";
//   }
//   return `${obj.street === undefined ? "__" : obj.street},${
//     obj.house === undefined ? "__" : obj.house
//   },${obj.society === undefined ? "__" : obj.society}`;
// }

// function canPay(changeArray, totalDue) {
//   if (changeArray.length === 0 || totalDue <= 0) {
//     return "invalid value!!!";
//   }
//   let total = 0;
//   for (let i = 0; i < changeArray.length; i++) {
//     total += changeArray[i];
//   }
//   if (total <= 0) {
//     return "invalid amount";
//   }
//   if (total >= totalDue) {
//     return true;
//   } else {
//     return false;
//   }
// }

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "invalid number ! give valid number..valid numbers are (1,2,3,4....)";
  }
  return Math.pow(Math.abs(number), 3);
}

function matchFinder(string1, string2) {
  if (
    string1.length <= 0 ||
    string2.length <= 0 ||
    typeof string1 !== "string" ||
    typeof string2 !== "string"
  ) {
    return "invalid input!!!";
  }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "input is not an array";
  }
  if (arr.length > 2 || arr.length < 2) {
    return "invalid array..must be two elements only";
  }
  if (arr[0] === arr[1] && arr[0] > 0 && arr[1] > 0) {
    return "equal";
  }
  if (
    arr[0] < 0 ||
    arr[1] < 0 ||
    typeof arr[0] !== "number" ||
    typeof arr[1] !== "number"
  ) {
    return "invalid input";
  }
  if (arr[0] < arr[1]) {
    if (arr[0] < 0 || arr[1] < 0) {
      return "invalid input";
    } else {
      let temp;
      temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
      return arr;
    }
  }
  return arr;
}

function findAddress(obj) {
  if (Array.isArray(obj)) {
    return "invalid !!!";
  }
  return `${obj.street === undefined ? "__" : obj.street},${
    obj.house === undefined ? "__" : obj.house
  },${obj.society === undefined ? "__" : obj.society}`;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0 || totalDue <= 0) {
    return "invalid value!!!";
  }
  let total = 0;
  for (let i = 0; i < changeArray.length; i++) {
    total += changeArray[i];
  }
  if (total <= 0) {
    return "invalid amount";
  }
  if (total >= totalDue) {
    return true;
  } else {
    return false;
  }
}
