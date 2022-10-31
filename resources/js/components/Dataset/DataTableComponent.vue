<template>
  
<div class="col-12">
  <div class="card">
    <div class="card-header row">
      <div class="col-10">
        <h3 >Output Log Hadoop</h3>
      </div>
      <div  class="col-2">
        <modal-tambah-data @loadPenumpang="onLoadPenumpang"></modal-tambah-data>
      </div>
    </div>
   
    <!-- /.card-header -->
    <div class="card-body">
      <table id="example2" class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Bulan</th>
            <th>Index Bulan</th>
            <th>Tahun</th>
            <th>Jumlah Penumpang</th>
            <th v-if="statusAkun" >Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataPenumpang" :key="index">
            <td>{{++index}}</td>
            <td>{{item.Bulan}}</td>
            <td>{{item.Index_bulan}}</td>
            <td>{{item.Tahun}}</td>
            <td>{{item.Jumlah_penumpang}}</td>
            <td  >
              <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" @click="updateItem(item)" data-target="#modal-edit">
                  Update Data
                </button>
                <div v-if="status" class="modal fade" id="modal-edit">
                  <modal-update-data @loadPenumpang="onLoadPenumpang" :items="dataUpdate"></modal-update-data>
                </div>
                <button class="btn btn-danger" v-show="index == dataPenumpang.length" @click="openDeleted(item.Id)">
                  Delete
                </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>    
  </div>
</div>
</template>
<script>
import ModalTambahData from './ModalTambahData.vue'
import ModalUpdateData from './ModalUpdateData.vue'
import swal from 'sweetalert';
import {mapGetters} from 'vuex'
export default {
  props:['dataPenumpang'],
  components:{
    ModalTambahData,ModalUpdateData
  },
  
  data() {
    return {
      dataUpdate:null,
      status:false,
      statusAkun:false
    }
  },
  computed:{
    ...mapGetters({
      dataPenumpangs:'penumpangKeretaStore/gettersDataPenumpang'
    })
  },
  mounted(){
     if ((localStorage.getItem('email')) && (localStorage.getItem('pass')) ) {
      console.log("Anda Adalah Admin");
      //admin
      this.statusAkun=true;
    }else{
      console.log("Anda Bukan Admin")
    }
  },
  methods: {
    onLoadPenumpang(){
      this.$emit("loadPenumpang")
    },
    updateItem(item){
      this.dataUpdate=item;
      this.status=true;
    }
    ,
    openDeleted(id){
      let Id=id;
        
      swal({
        title: "Apakah Anda Yakin Menghapus Data Ini?",
        text: "Data yang telah dihapus tidak dapat kembali",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          console.log("ini idi",id)
          this.$store.dispatch('penumpangKeretaStore/deleteAction',Id);
          this.$emit("loadPenumpang")
          swal("Berhasil Menghapus Data", {
            icon: "success",
          });
        } else {
          swal("Tidak Menghapus Data");
        }
      });
    }
  },
}
</script>