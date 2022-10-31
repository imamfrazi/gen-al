<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button v-show="execute" @click="fillData()">Tampil Grafik</button>
    <button v-show="!execute" @click="resetData()">Reset Grafik</button>
    
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      LineChart
    },
    props:['periodePred'],
    data () {
      return {
        datacollection: null,
        labelData:["January","February","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
        labelOld:[],
        labelName:[],
        isiDataActual:[],
        execute:true,
        isiDataPrediksi:[],
      }
    },
    computed:{
      ...mapGetters({
        dataPrediksi:'penumpangKeretaStore/gettersHasilDataPrediksi',
        dataActual:'penumpangKeretaStore/gettersHasilDataActual',
        dataParameter:'penumpangKeretaStore/gettersHasilDataParameter'
      })
    },
    mounted () {
      
      
    },
    methods: {
      resetData(){
        this.labelName=[];
        this.labelOld=[];
        this.isiDataPrediksi=[];
        this.isiDataActual=[];
        this.execute=true;
      },
      fillData () {
      this.isiDataPrediksi=this.dataPrediksi;
      this.isiDataActual=this.dataActual;
      let oldLabelNane=this.labelData;
      console.log("ini this data actual",this.dataActual.length);
      let hitungBulan=Math.floor(this.dataPrediksi.length/12);
      let sisaHitungBulan=this.dataPrediksi.length % 12;
      if(sisaHitungBulan != 0){
        for (let index = 0; index < hitungBulan; index++) {
          for (let index2 = 0; index2 < 12; index2++) {
            this.labelName.push(oldLabelNane[index2])
            this.labelOld.push(oldLabelNane[index2])
          }
        }
        for (let indexs = 0; indexs < sisaHitungBulan; indexs++) {
          this.labelName.push(oldLabelNane[indexs])
          this.labelOld.push(oldLabelNane[indexs])
        }
      }else{
        for (let index3 = 0; index3 < hitungBulan; index3++) {
          for (let index4 = 0; index4 < 12; index4++) {
            this.labelName.push(oldLabelNane[index4])
            this.labelOld.push(oldLabelNane[index4])
          }
        }
      }
      let tahun=2011;
      for (let index5=0;index5<this.labelName.length;index5++){
        if(index5 !=0 && index5 %12 ==0){
          tahun=tahun+1
        }
        this.labelName[index5]=this.labelName[index5]+" "+tahun;
      }

      this.datacollection = {
          labels: this.labelName,
          datasets: [
            {
              label: 'Data Actual',
              
              color:"#ffffD1",
              data:this.isiDataActual
            }, {
              label: 'Data Prediksi',
              backgroundColor: '#BFFCC6',
              data: this.isiDataPrediksi,
              
            }
          ]
        }
        this.labelName=[];
        this.labelOld=[];
        this.execute=false;
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 1500px;
    margin:  20px auto;
  }
</style>