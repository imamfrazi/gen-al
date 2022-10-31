<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-3 col-6">
            <!-- <h2><b>Output Log Hadoop</b></h2> -->
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3 col-6">
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>{{dataPenumpang.length}}</h3>
                    <p>Jumlah Data</p>
                </div>
                <div class="icon">
                    <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
    <div class="row">
        <dataTableComponent :dataPenumpang="dataPenumpang" @loadPenumpang="loadData"></dataTableComponent>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import dataTableComponent from './DataTableComponent'
    export default {
        components:{
            dataTableComponent,
        },
        data() {
            return {
                
            }
        },
        mounted() {
            console.log('Component mounted.')
            this.$store.dispatch('penumpangKeretaStore/getDataPenumpangAction');
        },
        computed:{
            ...mapGetters({
                dataPenumpang:'penumpangKeretaStore/gettersDataPenumpang'
            })
        },
        methods: {
            loadData(){
                this.$store.dispatch('penumpangKeretaStore/getDataPenumpangAction');
            }
        },

    }
</script>
