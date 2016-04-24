/**
 * Created by hieuvo on 4/22/16.
 */
import {ActionTypes} from 'actions/library_actions';

const initialState = {
    library: [],
    selectedMediaItem: null
};
export function library (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_MEDIA_SETS_SUCCESS:
            return {
                ...state,
                library: action.payload
            };
            break;
        case ActionTypes.FETCH_MEDIA_SETS_FAIL:
            return {
                ...state,
                library: []
            };
        case ActionTypes.SELECT_MEDIA_ITEM:
            return {
                ...state,
                selectedMediaItem: action.payload
            }
        default :
            return state;

    }
}