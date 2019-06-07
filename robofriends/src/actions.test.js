import * as actions from './actions';
import {
  CHANGE_SEARCH_FILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

// creating fake store
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
// should be in setup or exported to be available to all test
const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('set search field to typed search field', () => {
    const text = 'woo';
    const expectedAction = {
      type: CHANGE_SEARCH_FILED,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});


// async testing
describe('requestRobots', () => {
  it('hanlding requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
