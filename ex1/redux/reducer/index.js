import {combineReducers} from 'redux';
import counter from './counter'
import sum from './sum'
import images from './images'

export default combineReducers({
    count: counter,
    sum: sum,
    images: images
});
