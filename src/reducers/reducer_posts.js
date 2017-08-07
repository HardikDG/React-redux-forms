import _ from 'lodash';
import { ACTION_TYPE } from '../constants/constant'

export default function(state ={}, action) {

    switch(action.type) {
        case ACTION_TYPE.FETCH_POST:
            return _.mapKeys(action.payload.data, 'id');
        default:
        return state;
    }
}