import axios from 'axios';

export const getToken = (username) =>
  axios.get(`http://localhost:5001/sc-58cd0/us-central1/app/v1/twilio/token/${username}`).then((twilioUser) => twilioUser.data.jwt);

