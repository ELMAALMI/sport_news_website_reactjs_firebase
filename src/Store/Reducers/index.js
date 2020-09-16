import {combineReducers} from 'redux';
import BlogsReducer from './BlogsReducer';
import LivesReducer from  './LivesReducer';

const Index = combineReducers({
   blogs : BlogsReducer,
   lives : LivesReducer
})

export default Index;