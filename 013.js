function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);

// promiseを使うと
const promise = doSomething();
promise.then(successCallback, failureCallback);
// または
doSomething().then(successCallback, failureCallback);

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
// または
const promise2 = doSomething().then(successCallback, failureCallback);

doSomething().then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log('Got the final result: ' + finalResult);
  })
  .catch(failureCallback);

new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
  })
  .then(() => {
    throw new Error('Something failed');

    console.log('Do this');
  })
  .catch(() => {
    console.log('Do that');
  })
  .then(() => {
    console.log('Do this whatever happened before');
  });
// Initial
// Do that
// Do this whatever happened before
// Promise { < resolved >: undefined
// }

try {
  let result = syncDoSomething();
  let newResult = syncDoSomethingElse(result);
  let finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}

async function foo() {
  try {
    let result = await doSomething();
    let newResult = await doSomethingElse(result);
    let finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
