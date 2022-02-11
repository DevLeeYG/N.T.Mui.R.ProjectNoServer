import { HYDRATE } from 'next-redux-wrapper';
import { type } from 'os';
export const TABCHANGE = '/index/TABCHANGE';

export const changeTabs = (data: number) => ({
  type: TABCHANGE,
  payload: {
    data,
  },
});

const initialState = {
  TabValue: 0,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case TABCHANGE: {
      return { ...state, TabValue: action.payload.data };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
