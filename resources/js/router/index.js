import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);



import Dashboard from '../components/DashBoard.vue'
import Dataset from '../components/Dataset/DatasetComponent.vue'
import Model from '../components/Model/Model.vue'
import HasilModel from '../components/Model/HasilModel.vue'
import Prediksi from '../components/Prediksi/mainPrediksi.vue'
import Login from '../components/Login/loginPage.vue'

let routes=[
    {
        path:'/',
        name:"Dashboard",
        component:Dashboard,
    },
    {
        path:'/dashboard',
        name:"Dashboard",
        component:Dashboard,
    },
    {
        path:'/dataset',
        name:"Dataset",
        component:Dataset,
    },
    {
        path:'/model',
        name:"Model",
        component:Model,
    },
    {
        path:'/hasilModel',
        name:"hasilModel",
        component:HasilModel,
    },
    {
        path:'/prediksi',
        name:"Prediksi",
        component:Prediksi,
    },
    {
        path:'/login',
        name:"Login",
        component:Login,
    },
];


const router = new VueRouter({
    mode: 'history',
    routes    
})

export default router;


