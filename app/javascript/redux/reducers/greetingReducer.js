const GET_GREETINGS = 'greetings/GET';
const API_URL = '/api/greetings';

const initialState = [];

const getGreetings = (data) => ({
  type: GET_GREETINGS,
  payload: data,
});

export const fetchGreetings = () => async (dispatch) => {
  fetch(API_URL)
    .then(async (response) => response.json())
    .then((data) => {
      dispatch(getGreetings(data));
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
