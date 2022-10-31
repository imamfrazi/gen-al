<template>
  <div class="col-12 pt-4">
    <!-- jquery validation -->
    

    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Form Input Atribut</h3>
      </div>
      <form id="quickForm">
        <div class="card-body">
          <!-- <div class="form-group">
            <label for="iterationTESGS">Iteration Model TES-GSSMV </label>
            <input type="number" name="iterationTESGS" required class="form-control" id="iterationTESGS" placeholder="Enter iteration" v-model="iterationTesGS">
          </div> -->
          <div class="form-group">
            <label for="iterationTESGen">Iteration Genetic Algorithm </label>
            <input type="number" name="iterationTESGen" required class="form-control" id="iterationTESGen" placeholder="Enter iteration" v-model="iterationTesGen">
          </div>
        </div>
        <!-- /.card-body -->
      </form>
        <div class="card-footer">
          <button @click="submitData()"  class="btn btn-primary">Hitung</button>
        </div>
    </div>          
    <!-- <div class="card">
      <div class="card-header row">
        <div class="col-10">
          <h3 >Hasil Model TES-Golden Section Search Multi Variable</h3>
        </div>
      </div>
    
      <div class="card-body">
        <table id="example2" class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Alpha</th>
              <th>Beta</th>
              <th>Gamma</th>
              <th>Nilai MAPE</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in hasilMapeTesGs" :key="index">
              <td>{{++index}}</td>
              <td>{{item.alpha}}</td>
              <td>{{item.beta}}</td>
              <td>{{item.gamma}}</td>
              <td>{{item.hasil}}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <b><h4 style="color:green">Hasil Terbaik:</h4></b> 
            <ul v-for="(items,index) in hasilMapeTesGsTerbaik" :key="index">
              <li>Alpha : {{ items.alpha}}</li>
              <li>Beta :{{ items.beta}}</li>
              <li>Gamma :{{ items.gamma}}</li>
              <li>Nilai MAPE : {{ items.hasil}}</li>
              <li ><button class="btn btn-success" @click="openModalSave(items,'TES_GSSMV')">Simpan Ke hasil Model</button></li>  
            </ul>
          </div>
        </div>    
    </div> -->
    <div class="card">
      <div class="card-header row">
        <div class="col-10">
          <h3 >Hasil Proses Genetic Algorithm</h3>
        </div>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table id="example2" class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Generasi</th>
              <th>Tahap</th>
              <th>Alpha</th>
              <th>Beta</th>
              <th>Gamma</th>
              <th>Nilai MAPE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in hasilMapeTesGen" :key="index">
              <td>{{++index}}</td>
              <td>{{item.generasi}}</td>
              <td>{{item.tahap}}</td>
              <td>{{item.x}}</td>
              <td>{{item.y}}</td>
              <td>{{item.z}}</td>
              <td>{{item.fitnes}}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <b><h4 style="color:green">Hasil Terbaik:</h4></b> 
            <ul v-for="(items,index) in hasilMapeTesGenTerbaik" :key="index">
              <li>Alpha : {{ items.x}}</li>
              <li>Beta : {{ items.y}}</li>
              <li>Gamma : {{ items.z}}</li>
              <li>Generasi : {{items.generasi}}</li>
              <li>Tahap : {{items.tahap}}</li>
              <li>Nilai MAPE : {{ items.fitnes}}</li>
              <li ><button class="btn btn-success" @click="openModalSave(items,'TES_GEN')">Simpan Hasil</button></li>
            </ul>
          </div>
        </div>    
    </div>
  
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import swal from 'sweetalert';
export default {
  data() {
    return {
      iterationTesGS:null,
      iterationTesGen:null,
      //bukan Admin
      statusAkun:false,
    }
  },
  computed:{
    ...mapGetters({
      jumlahPenumpang:"penumpangKeretaStore/gettersJumlahPenumpang",
      hasilMapeTesGs:"penumpangKeretaStore/gettersHasilMapeTesGs",
      hasilMapeTesGen:"penumpangKeretaStore/gettersHasilMapeTesGen",
      hasilMapeTesGenTerbaik:"penumpangKeretaStore/gettersHasilMapeTesGenTerbaik",
      hasilMapeTesGsTerbaik:"penumpangKeretaStore/gettersHasilMapeTesGsTerbaik",
    })
  },
  
  mounted() {
  
    if ((localStorage.getItem('email')) && (localStorage.getItem('pass')) ) {
      console.log("Anda Adalah Admin");
      //admin
      this.statusAkun=true;
    }else{
      console.log("Anda Bukan Admin")
    }
  },  
  methods: {  
    openModalSave(items,namaModel){
       swal({
        title: "Apakah Anda Yakin Menyimpan Hasil Model?",
        icon: "success",
        buttons: true,
        successMode: true,
      })
      .then((event) => {
        if (event) {
          this.save(items,namaModel)
          swal("Berhasil Menyimpan Hasil Model", {
            icon: "success",
          });
        } else {
          swal("Tidak Menyimpan Hasil Model");
        }
      });
    }
    ,save(items,namaModel){
      if(namaModel=='TES_GSSMV'){
        var ob={
          iterasi:parseInt(this.iterationTesGS),
          alpha:items.alpha,
          beta:items.beta,
          gamma:items.gamma,
          nilaiMape:items.hasil,
          model:namaModel,
          user_id:1
        }
        
        this.$store.dispatch('penumpangKeretaStore/simpanResult',ob);
      }else{
        var ob={
          iterasi:parseInt(this.iterationTesGen),
          alpha:items.x,
          beta:items.y,
          gamma:items.z,
          nilaiMape:items.fitnes,
          model:namaModel,
          user_id:1
        }
        
        this.$store.dispatch('penumpangKeretaStore/simpanResult',ob);
      }
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
