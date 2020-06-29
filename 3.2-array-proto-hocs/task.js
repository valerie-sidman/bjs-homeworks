function sleep(milliseconds)
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.every((element, index) => element === arr2[index]);
}

function memorize(fn, limit) {
  const memory = [];
  return function func(){
    const foundItem = memory.find((element) => compareArrays(element.args, Array.from(arguments)));
    if (foundItem != undefined) {
      return foundItem.result;
    } else {
      const resultFn = fn.apply(null, arguments);
      memory.push({
        args: Array.from(arguments),
        result: resultFn
      });
      if (memory.length > limit) {
        memory.shift();
      }
      return resultFn;
    }
  }
}
