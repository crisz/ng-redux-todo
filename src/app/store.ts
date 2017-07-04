import {tassign} from 'tassign';
import { ADD_TODO } from "app/actions";

export interface IAppState{
  messages?: Message[];
  lastUpdate?: Date;
}

export interface Message{
  message: string;
  isDone: boolean;
  id: number;
}

export const INITIAL_STATE: IAppState = {
  messages: [],
  lastUpdate: null
}

export function rootReducer(state: IAppState, action):IAppState{
  console.log("the state is ",state);
  switch(action.type){
    case ADD_TODO:

      return state;
      /*
      var message: Message = {
        message: action.todo,
        isDone: false,
        id: state.messages.length+1
      };
      
      
      return tassign(state, {
        messages: state.messages.concat(message),
        lastUpdate: new Date()
      });
  */

  }
}