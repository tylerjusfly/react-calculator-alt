import { ACTIONS } from './Calculator';

export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_UP:
      return { ...state, operation: `${operation}${payload.value}` };
  }
}
