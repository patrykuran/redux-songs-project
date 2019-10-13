//ACTION CREATOR
export const selectSong = song => {
    //RETURN AN ACTION HERE
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}