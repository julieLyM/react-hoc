import axios from "axios";

async function characterPromise() {
  const results = await axios.get(`https://swapi.co/api/people`);
  return results;
}

export default characterPromise;
