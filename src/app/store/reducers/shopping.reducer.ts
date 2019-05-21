import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean
}


const initialState: ShoppingState = {
  list: [],
  loading: false
};

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true
      }
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    
    case ShoppingActionTypes.ADD_ITEM:
      return { ...state, list: action.payload };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
}