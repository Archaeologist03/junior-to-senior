const fetch = require('node-fetch');
const swapi = require('./script2');

// ******************
// Either use done at the end of the expect or
// Always return async tests.
// ALWAYS USE expect.assertions on async tests
// ******************

it('calls swapi to get people', done => {
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    done();
  });
});

it('calls swapi to get people', () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

// MOCK-ing / Spies
it('getPeople returns count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 89,
          results: [0, 1, 2, 3, 4, 5],
        }),
    }),
  );

  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    expect(data.count).toEqual(89);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
