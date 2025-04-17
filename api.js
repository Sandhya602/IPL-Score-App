import axios from "axios";
const API_URL="https://cricket-live-line1.p.rapidapi.com/playerRanking/1";
const HEADERS=[
  'x-rapidapi-host: cricket-live-line1.p.rapidapi.com' 
  'x-rapidapi-key: 1571d35644mshfb78c14613eb826p14fbbejsn85553404c40e'
];
export default getPointsTable=async() => {
  const options = {
    method:"GET",
    url:'${APL_URL}/series/336/pointsTable',
    headers:HEADERS,
  }
  try{
    const response=await axios.request(options);
    console.log("response data",response.data);
    return response.data.data.A.map(team =>({
      team:team.teams,
      played:team.P,
      won:team.W,
      lost:team.L,
      points:team.pts,
      nrr:team.NRR,
      flag:team.flag
  }))
  }catch(error){
    console.error("There was error fetching the data");
    throw error;
  }
}
