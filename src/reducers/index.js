import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Doin this", duration: "4:06" },
    { title: "Heaven", duration: "3:06" },
    { title: "Sad", duration: "2:06" },
    { title: "Best of us", duration: "1:06" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
