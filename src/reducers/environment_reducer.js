/**
 * Created by hieuvo on 4/17/16.
 */
import { ActionTypes as types} from '../actions/environment_actions';

const initialState = {
    isMobile: false,
    height: null,
    width: null,
};

export default function environment(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_IS_MOBILE:
            return Object.assign({}, state, {
                isMobile: action.isMobile,
            });

        case types.CHANGE_WIDTH_AND_HEIGHT:
            return Object.assign({}, state, {
                height: action.height,
                width: action.width,
            });

        default:
            return state;
    }
}
