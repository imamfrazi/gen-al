<template>
  <div id="modal_edit">

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title"><b>Update Data  </b></h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <ValidationObserver v-slot="{ handleSubmit }">
            <form role="form" @submit.prevent="handleSubmit(onSubmit)">
                <div class="card-body">
                  <div class="form-group">
                    <label for="nof">Number Of Files </label>
                    <ValidationProvider name="nof" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="items.nof" class="form-control" id="nof" placeholder="Enter Number Of Files">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="tmp">Total MB Processed</label>
                    <ValidationProvider name="tmp" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="items.tmp" class="form-control" id="tmp" placeholder="Enter Total MB Processed">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="tp">Throughput mb/sec</label>
                    <ValidationProvider name="tp" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="items.tp" class="form-control" id="tp" placeholder="Enter Throughput mb/sec">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="aio">Avg IO rate mb/sec</label>
                    <ValidationProvider name="aio" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="items.aio" class="form-control" id="aio" placeholder="Enter Avg IO rate mb/sec">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="iostd">IO rate std deviation</label>
                    <ValidationProvider name="iostd" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="items.iostd" class="form-control" id="iostd" placeholder="Enter IO rate std deviation">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="exec">Test exec time sec</label>
                    <ValidationProvider name="exec" rules="integer|required" v-slot="{ errors }">
                      <input type="text" v-model="items.exec" class="form-control" id="exec" placeholder="Enter Test exec time sec">
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
  props:['items'],
  data() {
    return {
      nof:null,
      tmp:null,
      tp:null,
      aio:null,
      iostd:null,
      exec:null,
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  
  },
  methods: {
    onSubmit(){
      let objectReq ={
        nof:parseFloat(this.items.nof),
        tmp:parseFloat(this.items.tmp),
        tp:parseFloat(this.items.tp),
        aio:parseFloat(this.items.aio),
        iostd:parseFloat(this.items.iostd),
        exec:parseFloat(this.items.exec),
        id:this.items.id,
      }
      console.log(objectReq);
      this.$store.dispatch("penumpangKeretaStore/updateData",objectReq);
      this.$emit('loadPenumpang');
      swal("Good job!", "You clicked the button!", "success");  
    }
  },
}
</script>
