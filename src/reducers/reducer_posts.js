import _ from 'lodash';
import { ACTION_TYPE } from '../constants/constant'

export default function(state ={}, action) {

    switch(action.type) {
        case ACTION_TYPE.FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case ACTION_TYPE.FETCH_POST:
            return { ...state,[action.payload.data.id]:action.payload.data}        
        case ACTION_TYPE.DELETE_POST:
            return _.omit(state,action.payload);
        default:
        return state;
    }
}