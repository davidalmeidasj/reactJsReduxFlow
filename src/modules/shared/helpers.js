//@flow
import type {ErroMensagem} from "./flowTypes/flowTypes";

export const firsts: any = (array: Array<any>, n: number) => {
  if (array == null)
    return void 0;
  if (n == null)
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

export const getStringsInArrayError = (erroMensagem: ErroMensagem) => {
  const arrayMensagens = [];

  erroMensagem.forEach(erro => {
    erro.errors.forEach(mensagem => {
      arrayMensagens.push(mensagem)
    })
  });

  return arrayMensagens;
};
