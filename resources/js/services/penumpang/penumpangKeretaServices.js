import axios from 'axios'

export const getPenumpangKereta= async() => {
  try {
    let response = await axios.get('/api/penumpang');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export const addPenumpangKereta = async(payload) =>{
  try {
    let response= await axios.post('/api/tambahData',payload)
    console.log(response);
  } catch (error) {
    console.log(response);
  }
}
export const deletePenumpangKereta = async (payload) =>{
  try {
    let response = await axios.delete('/api/deleteData/'+payload);
    console.log(response,payload);
  } catch (error) {
    console.log(response);
  }
}

export const updatePenumpangKereta = async (payload) =>{
  try{
    let response =await axios.put('/api/updateData/'+payload.Id,payload);
    console.log(response,payload);
  }catch(error){
    console.log(response);
  }
}

export const getHasilModel= async() => {
  try {
    let response = await axios.get('/api/hasilModel');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export const addHasilModel = async (payload) =>{
  try {
    let response= await axios.post('/api/addHasilModel',payload)
    console.log(response);
  } catch (error) {
    console.log(response);
  }
}

export const delkuHasilModel = async (payload) =>{
  try {
    let response = await axios.delete('/api/deleteHasilModel/'+payload);
    console.log(response,payload);
  } catch (error) {
    console.log(response);
  }
}