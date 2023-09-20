const {
  Dispatcher,
  MockAgent,
  setGlobalDispatcher
} = require('undici');

const calculator = require('./calculator');

jest.setTimeout(20_000);

test('add function with network mock', async () => {
  const mockAgent = new MockAgent();
  setGlobalDispatcher(mockAgent);

  const mockPool = mockAgent.get('http://127.0.0.1:8080')
  mockPool.intercept({
      path: '/api/add',
      method: 'POST',
    }).reply(200, 3);

  expect(await calculator.add(1, 2)).toBe(3);
});
