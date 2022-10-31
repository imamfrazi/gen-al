<template>
  <div class="col-12 pt-4">
    <div class="card">
      <div class="card-header row">
        <div class="col-10">
          <h3 >Hasil Genetic Algorithm</h3>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table id="example2" class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Model</th>
              <th>Iterasi/Generasi</th>
              <th>Alpha</th>
              <th>Beta</th>
              <th>Gamma</th>
              <th>Nilai MAPE</th>
              <th >Action</th> 
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in hasilModel" :key="index">
              <td>{{++index}}</td>
              <td>{{item.model}}</td>
              <td>{{item.iterasi}}</td>
              <td>{{item.alpha}}</td>
              <td>{{item.beta}}</td>
              <td>{{item.gamma}}</td>
              <td>{{item.nilai_mape}}</td>
              <td ><button class="btn btn-danger" @click="openDelete(item.id)">Delete Data</button></td>
              </tr>
            </tbody>
          </table>
        </div>    
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      iterationTesGS:null,
      iterationTesGen:null,
      statusAkun:false
    }
  },
  computed:{
    ...mapGetters({
      
      hasilModel:"penumpangKeretaStore/gettersHasilModel",
      
    })
  },
  mounted() {
    this.$store.dispatch('penumpangKeretaStore/getDataHasilModel');
    if ((localStorage.getItem('email')) && (localStorage.getItem('pass')) ) {
      console.log("Anda Adalah Admin");
      //admin
      this.statusAkun=true;
    }else{
      console.log("Anda Bukan Admin")
    }
  },  
  methods: {
     openDelete(item){
      swal({
        title: "Apakah Anda Yakin Ingin Menghapus Hasil Model?",
        text: "Ingat data tidak dapat dikembalikan",
        icon: "danger",
        buttons: true,
        dangerMode: true,
      })
      .then((event) => {
        if (event) {
           this.$store.dispatch('penumpangKeretaStore/deleteHasilModel',item);
           this.$store.dispatch('penumpangKeretaStore/getDataHasilModel');
          swal("Berhasil Menghapus Data Hasil Model", {
            icon: "success",
          });
        } else {
          swal("Tidak Menghapus Hasil Model");
        }
      });
    }, 
    submitData(){
        let object={
          iterationTesGS:this.iterationTesGS,
          iterationTesGen:this.iterationTesGen
        }
        console.log("ini sumbit Data",object)
      this.$store.dispatch('penumpangKeretaStore/modelAction',object);
    }
  },
}
</script>
