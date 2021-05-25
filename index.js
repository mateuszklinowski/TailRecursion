

function main() {

  function getRemainingStackSize() {
    var i = 0;
    function stackSizeExplorer() {
      i++;
      stackSizeExplorer();
    }

    try {
      stackSizeExplorer();
    } catch (e) {
      return i;
    }
  }

  var baselineRemStackSize = getRemainingStackSize();
  var largestSeenStackSize = 0;

  function getStackSize() {
    var sz = baselineRemStackSize - getRemainingStackSize();
    if (largestSeenStackSize < sz)
      largestSeenStackSize = sz;
    return sz;
  }

  const factorial = (n, rest = 0) => {
    if (n === 1) {
      //console.log("Stack Size: " + getStackSize());
      return rest + 1
    }
    return factorial(n - 1, n + rest)
  }

  

  const pre = Date.now();
  console.log("Factorial: ", factorial(100000))
  console.log('Took: ', Date.now() - pre, 'ms')
}

main();