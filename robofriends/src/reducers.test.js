import {
  CHANGE_SEARCH_FILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

const initialStateSearch = {
  searchField: '',
};

describe('searchRobots', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: '',
    });
  });

  it('should handle CHANGE_SEARCH_FILED', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FILED,
        payload: 'abc',
      }),
    ).toEqual({
      searchField: 'abc',
    });
  });
});

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

describe('requestRobots', () => {
  it('should return the initial state', () => {
    expect(reducers.requestRobots()).toEqual({
      isPending: false,
      robots: [],
      error: '',
    });
  });

  it('should change pending to true', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      }),
    ).toEqual({ isPending: true, robots: [], error: '' });
  });

  it('should update on success', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'Demark',
          },
        ],
      }),
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: '123',
          name: 'Demark',
        },
      ],
      error: '',
    });
  });

  it('should handle REQUST_ROBOTS_FAILED action ', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'error occured',
      }),
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'error occured',
    });
  });
});
