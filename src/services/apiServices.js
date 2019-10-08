import baseURL from './baseURL';

export const getDataAPI = async() =>{
  try{
    const response = await baseURL.get('/data');
    return response
  } catch(err) {
    console.log(err);
    alert(err)
  }
}
