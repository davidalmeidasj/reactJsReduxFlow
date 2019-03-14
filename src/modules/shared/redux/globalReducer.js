//@flow
import type {Action} from "../flowTypes/flowTypes";
import {BUTTON_LOADING, PAGE_LOADING} from "../flowTypes/flowTypes";

export type InitialStateGlobal = {
  Form: {
    button_loading: boolean,
  },
  Page: {
    loading: boolean,
  }
}

export const initialStateGlobal = {
  Form: {
    button_loading: false,
  },
  Page: {
    loading: true,
  }
};

type GlobalReducer = (state: InitialStateGlobal, action: Action) => Object

export const globalReducer: GlobalReducer = (state = initialStateGlobal, action) => {

  const { payload } = action;
  switch (action.type) {
    case BUTTON_LOADING:
      return {
        ...state,
        Form: {
          ...state.Form,
          button_loading: payload.button_loading
        }
      };
    case PAGE_LOADING:
      return {
        ...state,
        Page: {
          ...state.Page,
          loading: payload.page_loading
        }
      };
    default: return state
  }
};
