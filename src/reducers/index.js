import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import { items } from './items';
import { library } from './library_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  library,
  routing: routerReducer
});

export default rootReducer;
