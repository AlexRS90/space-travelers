import axios from 'axios';

const FETCH_ROCKET_SUCCES = 'FETCH_ROCKET_SUCCES';
const FETCH_ROCKET_FAILURE = 'FETCH_ROCKET_FAILURE';
const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const fetchRocketSucces = (rocket) => ({
  type: FETCH_ROCKET_SUCCES,
  payload: rocket,
});

export const fetchRocketFailure = (error) => ({
  type: FETCH_ROCKET_FAILURE,
  payload: error,
});

export const fetchRocket = () => (dispatch) => {
  axios.get(url).then((response) => {
    const { data } = response;
    const array = [];
    data.forEach((key) => {
      array.push({
        id: key.rocket_id,
        name: key.rocket_name,
        type: key.rocket_type,
        image: key.flickr_images[0],
        description: key.description,
        reserved: false,
      });
    });
    dispatch(fetchRocketSucces(array));
  });
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET_SUCCES:
      return {
        ...state,
        rockets: [action.payload, ...state.rockets],
      };
    case FETCH_ROCKET_FAILURE:
      return state;
    default:
      return state;
  }
};

export default rocketReducer;
