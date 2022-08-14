import axios from 'axios';

export const getToken = (username) => {
  console.log("LOG: Fetching Token")
  axios.get(`http://10.0.2.2:5001/sc-58cd0/us-central1/app/v1/twilio/token/${username}`).then((twilioUser) => twilioUser.data.jwt);
  console.log("LOG: Fetched Token")
}

