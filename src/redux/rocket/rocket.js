import axios from 'axios';

const FETCH_ROCKET_SUCCES = 'FETCH_ROCKET_SUCCES';
const FETCH_ROCKET_FAILURE = 'FETCH_ROCKET_FAILURE';
const BOOK_ROCKET = 'BOOK_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';
const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const fetchRocketSucces = (rocket) => {
  const payload = rocket.map((e) => (
    {
      id: e.rocket_id,
      name: e.rocket_name,
      type: e.rocket_type,
      image: e.flickr_images[0],
      description: e.description,
      reserved: false,
      wiki: e.wikipedia,
    }
  ));
  return ({
    type: FETCH_ROCKET_SUCCES,
    payload,
  });
};

export const fetchRocketFailure = (error) => ({
  type: FETCH_ROCKET_FAILURE,
  payload: error,
});

export const fetchRocket = () => (dispatch) => {
  axios.get(url).then((response) => {
    dispatch(fetchRocketSucces(response.data));
  });
};

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  payload: id,
});

export const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  payload: id,
});

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET_SUCCES:
      return action.payload;
    case FETCH_ROCKET_FAILURE:
      return state;
    case BOOK_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketReducer;
