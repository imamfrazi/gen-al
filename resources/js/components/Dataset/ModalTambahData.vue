<template>
  <div id="modal_tambah">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalTambah">
      Tambah Data
    </button>
    <div class="modal fade" id="modalTambah">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title"><b>Tambah Data</b></h4>
              <button type="button" class="close" data-dismiss="modal" data-toggle="" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body" id="modalTambah">
            <ValidationObserver v-slot="{ handleSubmit }">
            <form role="form" @submit.prevent="handleSubmit(onSubmit)">
                <div class="card-body">
                  <div class="form-group">
                    <label for="Bulan">Bulan</label>
                    <ValidationProvider name="Bulan" rules="alpha|required" v-slot="{ errors }">
                      <input type="text" v-model="bulan" class="form-control" id="Bulan" placeholder="Enter Bulan">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="IndexBulan">Index Bulan</label>
                    <ValidationProvider name="IndexBulan" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="indexBulan" class="form-control" id="IndexBulan" placeholder="Enter Index Bulan">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="Tahun">Tahun</label>
                    <ValidationProvider name="Tahun" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="tahun" class="form-control" id="Tahun" placeholder="Enter Tahun">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="JumlahPenumpang">Jumlah Penumpang</label>
                    <ValidationProvider name="JumlahPenumpang" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="jumlahPenumpang" class="form-control" id="JumlahPenumpang" placeholder="Enter Jumlah Penumpang">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer justify-content-between">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver ,extend} from 'vee-validate';
import { required, integer,alpha } from 'vee-validate/dist/rules';
import swal from 'sweetalert';
extend('integer', {
  ...integer,
  message:"This field must be integer "
});
extend('alpha', {
  ...alpha,
  message:"This field must be character"
  });
extend('required', {
  ...required,
  message: 'This field is required'
});
export default {
  data() {
    return {
      jumlahPenumpang:null,
      indexBulan:null,
      tahun:null,
      bulan:null,
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  
  },
  methods: {
    onSubmit(){
      let objectReq ={
        Bulan:this.bulan,
        Index_bulan:this.indexBulan,
        Tahun:this.tahun,
        Jumlah_penumpang:this.jumlahPenumpang,
      }

      this.$store.dispatch("penumpangKeretaStore/addData",objectReq);
      var load= this.$store.dispatch("penumpangKeretaStore/getDataPenumpangAction");
      this.$emit('loadPenumpang');
      swal("Good job!", "You clicked the button!", "success");
    }
  },
}
</script>
