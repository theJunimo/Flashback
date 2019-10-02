import { handleActions } from 'redux-actions';

const INITIALIZE = 'album/INITIALIZE';
const GET_ALBUMLIST = 'album/GET_ALBUMLIST';
const GET_ALBUMLIST_SUCCESS = 'album/GET_ALBUMLIST_SUCCESS';
const GET_ALBUMLIST_ERROR = 'album/GET_ALBUMLIST_ERROR';

const initialState = {
    albumList: [{
        id: '',
        name : '',
        member: [ {
            id: '',
            nick: '',
            profile: ''
        }]
    }]
}

export const getAlbumList = (userId) => ({
    type: GET_ALBUMLIST,
})
 
const album = handleActions({
    [INITIALIZE]: (state, action) => ({
        ...initialState
    }),
    [GET_ALBUMLIST_SUCCESS]: (state, action) => {
        return {
            albumList: action.payload.data.albumList
        }
    },
    [GET_ALBUMLIST_ERROR]: (state, action) => ({
        ...initialState
    }),
}, initialState);

export default album;