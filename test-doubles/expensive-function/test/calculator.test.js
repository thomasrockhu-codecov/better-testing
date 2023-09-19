const { add, sleepInterval } = require('../src/calculator');
const td = require('testdouble')

it('tests the add function', async () => {
  const mockSleep = td.func(sleepInterval);
  const sleepInterval = td.replace('../src/calculator', 'sleepInterval');
  td.when(
    mockSleep(10_000)
  ).thenReturn();

  expect(await add(1, 2)).toBe(3);
}, 20_000);
