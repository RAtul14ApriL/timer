const number = process.argv.slice(2);

const timer = function(number) {
  let numArr = [];
  let sortedArr = [];
  let delay = 0;
  for (let n = 0; n < number.length; n++){
    if(number[n] > 0 && !isNaN(number[n])){
      numArr.push(number[n])
      sortedArr = numArr.sort((a, b) => (a - b));
    };
  };
  for (let i = 0; i < sortedArr.length; i++){
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(sortedArr[i] + " seconds");
    }, delay += 1500);
  };
};

timer(number);