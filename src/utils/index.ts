import { showMessage } from "react-native-flash-message";

import * as Constants from './constants';

/**
 * Retorna o array embaralhado
 * @param array array a ser alterado
 */
const randomize = (array: string[]) => {
  var lista = array;
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    const elemento = lista[indice - 1];

    lista[indice - 1] = lista[indiceAleatorio];

    lista[indiceAleatorio] = elemento;
  }
  return lista;
};

/**
 * Exibe uma mensagem de erro
 * @param description Descrição da mensagem de erro
 * @param msg Titulo da mensagem
 */
const showError = (description = 'Ocorreu um erro no app', msg = 'Erro') =>
  showMessage({
    message: msg,
    description: description,
    type: 'danger',
  });

/**
* Exibe uma mensagem de sucesso
* @param description Descrição da mensagem de sucesso
* @param msg Titulo da mensagem
*/
const showSuccess = (description = '', msg = 'Operação concluida com sucesso!') =>
  showMessage({
    message: msg,
    description: description,
    type: 'success',
  });

export { randomize, showSuccess, showError, Constants }
