function cloneArrayShallow(arr) {
  return arr.slice();
}

function rateLimited(tasks, rateLimit = 3) {
  return new Promise(function(resolve, reject) {
    let currentCount = 0;
    const pendings = cloneArrayShallow(tasks);
    const fulfilled = [];

    function onPromiseFulfilled(result) {
      currentCount--;
      console.log(result);
      doNextPending();
    }

    function doNextPending() {
      if (0 === currentCount && 0 === pendings.length) {
        Promise.all(fulfilled).then(results => resolve(results));
      }

      while(currentCount < rateLimit && pendings.length) {
        const task = pendings.shift();
        const id = fulfilled.length;
        const promise = task();
        currentCount++;
        promise.then(onPromiseFulfilled, onPromiseFulfilled);
        fulfilled.push(promise);
      }
    }

    doNextPending();
  });
}
