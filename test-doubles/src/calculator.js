const { request } = require('undici');

const add = async function (x, y) {
    const answer = await callApi('add', x, y);
    return parseInt(answer);
};
const callApi = async function (operation, x, y) {
  const url = `http://127.0.0.1:8080/api/${operation}`;
  const response = await request(url, {
    body: '{"x": 1, "y": 2}',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  const answer = await response.body.text();
  return answer;
};

module.exports = { add, callApi };
