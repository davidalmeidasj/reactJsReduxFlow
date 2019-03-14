//@flow
import {type InitialStateGlobal} from "../redux/globalReducer";

const MODULE_NAME = "Global.";

export const BUTTON_LOADING = `${MODULE_NAME}BUTTON_LOADING`;
export const PAGE_LOADING = `${MODULE_NAME}PAGE_LOADING`;

export type ErroMensagem = Array<{
  fieldName: string,
  errors: Array<string>
}>

export type ErroApi = {
  response: {
    data: {
      messages: ErroMensagem
    }
  }
};

export type ErroLogin = {
  message: string,
}

export type Action = {
  type: string,
  payload: any,
};

export type Store = {
  GLOBAL: InitialStateGlobal,
};
