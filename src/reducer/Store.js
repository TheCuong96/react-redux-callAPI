import { applyMiddleware, combineReducers } from "redux"
import {createStore} from 'redux';
import ReducerProducts from "./ReducerProduct";
import thunk from 'redux-thunk';
// const numInitialState = ["ban phim","man hinh","chuot"]
// const numReducer = (state = numInitialState, action) => {
//     switch (action.type) {
//       case "ADD_NEW":
//           return [...state,action.phantumoi]
//         case "DELETE":
//           return [state.num.filter((value,i) => i !== action.index)]
//         default:
//             return state
//     }
// }

// const editStatusInitialState = true
// const editStatus = (state = editStatusInitialState, action) => {
//     switch (action.type) {
//       case "CHANGE_STATUS":
//           return !state;
//         default:
//             return state
//     }
// }
// đoạn dưới này dùng khi không có import {createStore} from 'redux' & import { combineReducers } from "redux";
//   var redux = require('redux')
//   const allReducers = redux.combineReducers({
//       num:numReducer,
//       editStatus:editStatus
//   })
//   var store1 = require('redux').createStore(allReducers);

  const allReducers = combineReducers({
    // num:numReducer,
    // editStatus:editStatus,
    ReducerProducts
})

    var store = createStore(
      allReducers,
      applyMiddleware(thunk)
      );

 

export default store;