const fibonacci = n => {
    if (n===0) {
        return 0;
    } 
    if (n===1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log(fibonacci(4));

    
const prime = n => {
    if (n%2===0) {
        return false;
    } 
    else {
        return true;
    }
}
  
 console.log(prime(9));


 const squareArray = (array) => {
    const newArr = array.map(element => Math.pow(element,2));
    return newArr;
    }
     
  console.log(squareArray([4,6,7]));

