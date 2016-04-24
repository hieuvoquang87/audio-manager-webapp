/**
 * Created by hieuvo on 4/16/16.
 */

export const ActionTypes = {
    AUDIO_PLAYER_START: 'AUDIO_PLAYER_START',
    AUDIO_PLAYER_PLAY: 'AUDIO_PLAYER_PLAY',
    AUDIO_PLAYER_PAUSE: 'AUDIO_PLAYER_PAUSE',
    AUDIO_PLAYER_CHANGE_PLAY_POS: 'AUDIO_PLAYER_CHANGE_PLAY_POS',
    AUDIO_PLAYER_NEXT: 'AUDIO_PLAYER_NEXT',
    AUDIO_PLAYER_PREV: 'AUDIO_PLAYER_PREV',
    AUDIO_PLAYER_ENDED: 'AUDIO_PLAYER_ENDED'
};

export function startAudio(audioInfo) {
    return {
        type: ActionTypes.AUDIO_PLAYER_START,
        payload: { audioInfo }
    }
}
export function playAudio(audioInfo, currentPos) {
    return {
        type: ActionTypes.AUDIO_PLAYER_PLAY,
        payload: { audioInfo, currentPos }
    }
}
export function pauseAudio(audioInfo, currentPos) {
    return {
        type: ActionTypes.AUDIO_PLAYER_PAUSE,
        payload: { audioInfo, currentPos }
    }
}
export function changePlayPos (audioInfo, currentPos, newPos) {
    return {
        type: ActionTypes.AUDIO_PLAYER_CHANGE_PLAY_POS,
        payload: { audioInfo, currentPos, newPos }
    }
}
export function playNext (audioInfo, currentPos, newPos) {
    return {
        type: ActionTypes.AUDIO_PLAYER_NEXT,
        payload: { audioInfo, currentPos, newPos }
    }
}
export function playPrev (audioInfo, currentPos, newPos) {
    return {
        type: ActionTypes.AUDIO_PLAYER_PREV,
        payload: { audioInfo, currentPos, newPos }
    }
}
export function endAudio (audioInfo) {
    return {
        type: ActionTypes.AUDIO_PLAYER_ENDED,
        payload: { audioInfo }
    }
}