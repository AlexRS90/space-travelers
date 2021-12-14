// import _ from 'lodash';
import axios from 'axios';

const initialState = [];

const FETCH_MISSION_SUCCESS = 'space-travelers/mission/FETCH_MISSION_SUCCESS';
const FETCH_MISSION_FAILURE = 'space-travelers/mission/FETCH_MISSION_FAILURE';
const URL = 'https://api.spacexdata.com/v3/mission';

export const fetchMissionSuccess = (payload) => ({
  type: FETCH_MISSION_SUCCESS,
  payload,
});

export const fetchMissionFailure = (error) => ({
  type: FETCH_MISSION_FAILURE,
  payload: error,
});

export const fetchMission = () => (dispatch) => {
  axios.get(URL).then((res) => {
    const mission = res.data;
    dispatch(fetchMissionSuccess(mission));
  }).catch((err) => {
    dispatch(fetchMissionFailure(err.message));
  });
};

const missionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MISSION_SUCCESS:
      return payload;
    case FETCH_MISSION_FAILURE:
      return state;
    default:
      return state;
  }
};

export default missionReducer;
