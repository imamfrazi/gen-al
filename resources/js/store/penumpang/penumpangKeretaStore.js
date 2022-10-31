import * as penumpangService from '../../services/penumpang/penumpangKeretaServices'
import * as PerhitunganTesGs from '../../Perhitungan/TesGS.js'
import * as PerhitunganTesGen from '../../Perhitungan/TesGen.js'
import * as PerhitunganTES from '../../Perhitungan/TES.js'
export default ({
  namespaced:true,
  state:{
    dataPenumpang:[],
    dataPenumpangBPS:[16446,14519,16584,16031,17018,16806,17632,14492,16353,16062,15765,16333,15801,15126,16701,16376,17401,17687,
17956,16675,16063,16828,15436,15745,14573,14315,15521,15724,15795,16932,19917,19031,19439,20198,19578,20992,
20698,19628,22427,21502,22547,23415,22125,22763,23219,24503,23986,25791,24254,22394,26841,26150,27450,27118,
27077,27351,27125,28280,27253,29328,27886,26058,28156,28000,30176,28730,28216,29125,29019,29765,29178,31530,
30359,26837,31612,30934,33157,30181,33669,33255,31921,34498,33798,36140,34107,30721,35272,35135,34877,32270,
36089,34560,33878,35602,34637,37197,34435,31282,35068,35106,34514,34261,38303,34542,34615,35814,35228,36710,
33472,31679,22949,5813,5476,9272,12205,12679,11295,11768,13523,13262,11631,11223,13995,14590,],
    jumlahPenumpangTesGs:[],
    jumlahPenumpangTesGen:[],
    jumlahPenumpangTes:[],
    hasilMapeTesGs:[],
    hasilMapeTesGen:[],
    hasilMapeTesGenTerbaik:[],
    hasilMapeTesGsTerbaik:[],
    hasilDataPrediksi:[],
    hasilDataActual:[],
    hasilDataParameter:[],
    hasilModel:[],
  },
  mutations:{
    importDataPenumpang(state,payload){
      state.dataPenumpang=payload
    },
    importDataHasilModel(state,payload){
      state.hasilModel=payload
    },
    updateDatapenumpang(state,payload){
      let update=state.dataPenumpang.filter(item => item.id !=payload);
      state.dataPenumpang=update;
    },
    async TesGs(state,payload){
      if(state.hasilMapeTesGs.length !=0){
        state.hasilMapeTesGs=[];
        state.hasilMapeTesGsTerbaik=[];
        state.jumlahPenumpangTesGs=[];
      }
        state.dataPenumpang=payload.result;
      
        let dataResult=payload.result;
          for (let index = 0; index < dataResult.length; index++) {
            state.jumlahPenumpangTesGs.push(dataResult[index].Jumlah_penumpang);
            
          }
          let hasil=await PerhitunganTesGs.hitung(state.jumlahPenumpangTesGs, payload.request.iterationTesGS);
          for (let index = 0; index < hasil.length; index++) {
            if(index<hasil.length-1){
              state.hasilMapeTesGs.push(hasil[index]);
            }else{
              state.hasilMapeTesGsTerbaik.push(hasil[index]);
              console.log(state.hasilMapeTesGsTerbaik,"index",index);
            }
          }  
          console.log(state.jumlahPenumpangTesGs,"ini tes gessss")
    },
    async TesGen(state,payload){
      if(state.hasilMapeTesGen.length  !=0){
        state.hasilMapeTesGen=[];
        state.hasilMapeTesGenTerbaik=[];
        state.jumlahPenumpangTesGen=[];
      }
      state.dataPenumpang=payload.result;
      
      let dataResult=payload.result;
      for (let index = 0; index < dataResult.length; index++) {
        state.jumlahPenumpangTesGen.push(dataResult[index].Jumlah_penumpang);
        
      }
      let hasil=await PerhitunganTesGen.hitung(state.jumlahPenumpangTesGen, payload.request.iterationTesGen);
      let panjang=0;
      for (let index = 0; index < hasil.length; index++) {
        if(index<hasil.length-1){
          state.hasilMapeTesGen.push(hasil[index]);
        }else{
          state.hasilMapeTesGenTerbaik.push(hasil[index]);
          console.log(state.hasilMapeTesGenTerbaik,"index",index);
        }
        panjang++;
      } 
    },
    async Tes(state,payload){
      state.jumlahPenumpangTes=[];
      state.dataPenumpang=payload.result;
      state.hasilDataParameter=[];
      var data=state.dataPenumpang;
      for (let index = 0; index < data.length; index++) {
        state.jumlahPenumpangTes.push(data[index].Jumlah_penumpang);
      }
    
      let hasil =await PerhitunganTES.hitung(state.jumlahPenumpangTes,payload.request);
  
      state.hasilDataPrediksi=hasil[0].Yprediksi
      state.hasilDataActual=hasil[0].YdataActual
      var obj={
        alpha:hasil[0].alpha,
      }
      state.hasilDataParameter.push(obj)
      var obj={
        beta:hasil[0].beta,
      }
      state.hasilDataParameter.push(obj)
      var obj={
        gamma:hasil[0].gamma,
      }
      state.hasilDataParameter.push(obj)
      var obj={
        MAPE:hasil[0].mape,
      }
      state.hasilDataParameter.push(obj)
      console.log(state.hasilDataParameter,"ini hasil")
    }

  },
  getters:{
    gettersDataPenumpang(state){
      return state.dataPenumpang;
    },
    gettersHasilModel(state){
      return state.hasilModel;
    },
    gettersDataPenumpangBPS(state){
      return state.dataPenumpangBPS;
    },
    gettersJumlahPenumpang(state){
    
      return state.jumlahPenumpangTesGs;
    },
    gettersHasilMapeTesGs(state){
    
      return state.hasilMapeTesGs;
    },
    gettersHasilMapeTesGsTerbaik(state){
    
      return state.hasilMapeTesGsTerbaik;
    },
    gettersHasilMapeTesGen(state){
    
      return state.hasilMapeTesGen;
    },
    gettersHasilMapeTesGenTerbaik(state){
    
      return state.hasilMapeTesGenTerbaik;
    },
    gettersHasilDataPrediksi(state){
    
      return state.hasilDataPrediksi;
    },
    gettersHasilDataActual(state){
    
      return state.hasilDataActual;
    },
    gettersHasilDataParameter(state){
    
      return state.hasilDataParameter;
    },
  },
  actions:{
    async prediksiAction(context,request){
      let result=await penumpangService.getPenumpangKereta();
      var ob={
        result,
        request
      }
      context.commit("Tes",ob);
    },
    async modelAction(context,request){
      let result=await penumpangService.getPenumpangKereta();
      var ok={
        result:result,
        request:request
      }
      context.commit("TesGs",ok);
      context.commit("TesGen",ok);
    },
    async getDataPenumpangAction(context){
      let result=await penumpangService.getPenumpangKereta();
      console.log(result,context);
      console.log("sampai sini")
      context.commit('importDataPenumpang',result);
    },
    async addData(context,payload){
      let result = await penumpangService.addPenumpangKereta(payload);
      console.log(result,context);
    },
    async deleteAction(context,payload){
      let result = await penumpangService.deletePenumpangKereta(payload);
      context.commit("updateDatapenumpang",payload)
      console.log(result,context);
    },
    async updateData(context,payload){
      let result = await penumpangService.updatePenumpangKereta(payload);
      console.log(result,context);
    },
    async getDataHasilModel(context){
      let result = await penumpangService.getHasilModel();
      context.commit("importDataHasilModel",result);
    },
    async simpanResult(context,payload){
      let result = await penumpangService.addHasilModel(payload);
      console.log(context,result);
    },
    async deleteHasilModel(context,payload){
      let result = await penumpangService.delkuHasilModel(payload);
      console.log(context,result);
      
    }
  }
})