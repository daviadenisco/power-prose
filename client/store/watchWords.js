import axios from 'axios';

const SET_CURRENT_WATCHWORDS = 'SET_CURRENT_WATCHWORDS';

const defaultWatchWords = [];

const setCurrentWatchWords = watchWords => ({type: SET_CURRENT_WATCHWORDS, watchWords})

export const fetchCurrentWatchWords = () => dispatch =>
  axios.get('/api/watchWords') // fetch the watch words for the given user
    .then(res => dispatch(setCurrentWatchWords(res.data)))
    .catch(error => console.log(error));

export default function (state = defaultWatchWords, action) {
  switch (action.type) {
    case SET_CURRENT_WATCHWORDS:
      return action.watchWords
    default:
      return state
  }
}
