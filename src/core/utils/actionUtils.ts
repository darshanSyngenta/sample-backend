import { Action } from 'redux';

export interface PayloadAction<T> extends Action<string> {
  payload: T;
}

export interface RequestAction {
  REQUEST: string;
  SUCCESS: string;
  ERROR: string;
}

export const createRequestAction = (actionName: string): RequestAction => {
  const successName = actionName + '_SUCCESS';
  const errorName = actionName + '_ERROR';
  return {
    REQUEST: actionName,
    SUCCESS: successName,
    ERROR: errorName,
  };
};
