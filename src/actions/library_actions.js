/**
 * Created by hieuvo on 4/22/16.
 */
import fetch from 'axios';

export const ActionTypes = {
    FETCH_MEDIA_SETS_SUCCESS: 'FETCH_MEDIA_SETS_SUCCESS',
    FETCH_MEDIA_SETS_FAIL: 'FETCH_MEDIA_SETS_FAIL',
    SELECT_MEDIA_ITEM: 'SELECT_MEDIA_ITEM'
}

export function fetchMediaSets() {
    return (dispatch, store) => {
        fetch('/data')
            .then(response => {
                return response.data;
            })
            .then(data => {
                dispatch({
                    type: ActionTypes.FETCH_MEDIA_SETS_SUCCESS,
                    payload: data.result
                });
            })
            .catch(e => {
                dispatch({
                    type: ActionTypes.FETCH_MEDIA_SETS_SUCCESS,
                    payload: e
                });
        });
    }
}

export function selectMediaItem(selectedMediaItem) {
    return {
        type: ActionTypes.SELECT_MEDIA_ITEM,
        payload: selectedMediaItem
    }
}