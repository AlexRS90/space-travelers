/* eslint-disable no-case-declarations */
// import _ from 'lodash';
import axios from 'axios';

const initialState = [];

const FETCH_MISSION_SUCCESS = 'space-travelers/mission/FETCH_MISSION_SUCCESS';
const FETCH_MISSION_FAILURE = 'space-travelers/mission/FETCH_MISSION_FAILURE';
const RESERVE_MISSION = 'space-travelers/mission/RESERVE_MISSION';
const URL = 'https://api.spacexdata.com/v3/missions';

export const reserveMission = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

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
    case RESERVE_MISSION:
      const newState = state.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return newState;
    default:
      return state;
  }
};

export default missionReducer;
