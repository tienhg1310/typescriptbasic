// let arrayName: type[] = [];
let array: string[] = ['tien']
array.push('phuong')

// mix type array 
let array1: (string | number)[] = ['tien', 25]
array1.push(26)

//nếu khi dữ liệu quá nhiều type thì ta có thể không khai báo type
let array2 = [25, 'tien', true]


console.log("check array 1: ", array);

console.log("check array 2: ", array1)

console.log('check array 3: ', array2)