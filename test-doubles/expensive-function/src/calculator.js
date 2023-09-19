const add = async function (x, y) {
  await sleepInterval(10_000)
  return x + y;
}

const sleepInterval = async function(r) {
  await new Promise(i => setTimeout(i, r));
}

module.exports = { add, sleepInterval };
