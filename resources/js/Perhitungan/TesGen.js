export const hitung = async (payload,iterationGen)=>{

//deklarasi parameter alpha(mempengaruhi level),beta(mempengaruhi trend),gamma(mempengaruhi seansonality)
   /* let alpha=0.5,beta=0.5,gamma=0.5;  */  /* f(c,b,a),f(a,c,b),f(b,a,c) */
   /* let alpha=0.8,beta=0.8,gamma=0.8;   /* f(c,b,a),f(a,c,b),f(b,a,c) */
  
  var t=0;
  var m=12;//periode bulanan maka 12
  //deklarasi L,T,S,
  let L=[];
  let T=[];
  let S=[];
  let Y=payload
 /*  let Y=[
  
16446,14519,16584,16031,17018,16806,17632,14492,16353,16062,15765,16333,15801,15126,16701,16376,17401,17687,
17956,16675,16063,16828,15436,15745,14573,14315,15521,15724,15795,16932,19917,19031,19439,20198,19578,20992,
20698,19628,22427,21502,22547,23415,22125,22763,23219,24503,23986,25791,24254,22394,26841,26150,27450,27118,
27077,27351,27125,28280,27253,29328,27886,26058,28156,28000,30176,28730,28216,29125,29019,29765,29178,31530,
30359,26837,31612,30934,33157,30181,33669,33255,31921,34498,33798,36140,34107,30721,35272,35135,34877,32270,
36089,34560,33878,35602,34637,37197,34435,31282,35068,35106,34514,34261,38303,34542,34615,35814,35228,36710,
33472,31679,22949,5813,5476,9272,12205,12679,11295,11768,13523,13262,11631,11223,13995,14590,
  ]; *///data actual
  let Ypred=[];//data prediksi
  let Ypredke=[];//data hasil dari prediksi pada bulan ke-
  let errorHW=[];// absolute dataActual-dataPrediksi dan dibagi dengan dataActual
  let averageDataActual=0;
  let resultMAPE=0;
  let h=3;//data yang diinput user untuk memprediksi bulan ke- selanjutnya
function initSeasonal(m){
  //hitung total data actual berdasarkan period m
    for(let j=0;j<m;j++){
      averageDataActual+=Y[j];
    }
    averageDataActual=averageDataActual/m;
    
  //////////////////////////////////////////////////
    
  //mencari nilai seasonalnya dari bulan 1-12 pertama index(0-11) (data training seasonal)
    for(let k =0;k<m;k++){
      S[k]=Y[k]/averageDataActual
      
    }
  /////////////////////////////////////////////////
    return S;
  }

function initLevel(m,S) { 
  //rumus inisiasi(L) awal data ke-13 index(12)
  L[m]=Y[m]/S[m-m];
  console.log("inininini",L[m])
  return L;
  ////////////////////////////////////////////////
}
function initTrend(m,S){
  //rumus inisiasi(T) awal data ke-13 index(12)
  T[m]=Y[m]-(Y[m-1]/S[m-1])
  /* console.log(Y[m],Y[m-1],S[m-1],Y[m-1]/S[m-1],Y[m]-(Y[m-1]/S[m-1])) */
  return T;
  ////////////////////////////////////////////////
}

/* fungsi rumusTripleExponential ini akan menghitung Seasonal data ke-13/index 12
  sedangkan untuk level dan trend data ke-13 masih menggunakan rumus inisiasi 
    L[m]=Y[m]/S[m-m];
    T[m]=Y[m]-(Y[m-1]/S[m-1])
  ,setelah mendapatkan level dan trend data ke-13 lalu menggunakan rumus :
    L[i]=alpha*Y[i]/S[i-m]+(1-alpha)(L[i-1]+T[i-1]);
    T[i]=beta*(L[i]-L[i-1])+(1-beta)*T[i-1];
*/

//rumusTripleExponential(period seasonal,data actual,alpha,beta,gamma)
  function rumusTripleExponential(m,Y,L,T,S,alpha,beta,gamma,h){
    /* console.log(m,Y,L[m],T,S,L.length) */
    try {
      var hitungTotalMape=0;
      var panjang=Y.length;
      S[m]=(gamma*(Y[m]/L[m]))+((1-gamma)*S[0]); 
      /* console.log("ini Seasonal ke-",m,":", S[m]) */
      for (var q=m+1;q<panjang;q++){
        //init q = 13
        L[q]=alpha*Y[q]/S[q-m]+(1-alpha)*(L[q-1]+T[q-1]);
        //console.log("ini Level ke-",q,":", L[q])
        T[q]=beta*(L[q]-L[q-1])+(1-beta)*T[q-1];
        //console.log("ini Trend ke-",q,":", T[q])
        S[q]=gamma*(Y[q]/L[q])+(1-gamma)*S[q-m]; 
        //console.log("ini Seasonal ke-",q,":", S[q])
        //console.log("ini s[12] : ",S[12])
        Ypred[q]=Math.floor((L[q-1]+T[q-1])*S[q-m]);
        //console.log("ini Ypred ke-",q,":",Ypred[q])
        //hitung errorHW
        var resultErrorHW=errorHWfunc(Y[q],Ypred[q])
        errorHW[q]=resultErrorHW;
        //console.log("ini errorHW ke-",q,":",errorHW[q])
        hitungTotalMape +=errorHW[q]
      }
      // console.log(hitungTotalMape,"hitTotMAPE",errorHW.length-m-1)
      var MAPE=meanMape(hitungTotalMape,errorHW.length-m-1)
      // console.log("ini nilai MAPE nya",MAPE)
      //prediksi bulan ke
      prediksiBulanke(L,T,S,h,m,Ypred);
      return MAPE;
    } catch (error) {
      console.log("error bagian fungsi rumusTripleExponential")
      /* alert("error bagian fungsi rumusTripleExponential") */
    }
  }

//rumus error Holt Winters/Triple Exponential Smoothing
  /*rumus nya : |dataactual-dataprediksi|/dataactual  */
  function errorHWfunc(dataActual,dataPrediksi){
    var result= (Math.abs(dataActual-dataPrediksi))/dataActual;
    return result
  }
//rumus menghitung rata2 mape
  function meanMape(TotalMape,n) {
    
    return (TotalMape/n)*100
  }
//prediksi jumlah penumpang prediksi menggunakan h
  // function prediksiBulanke(L,T,S,h,m,Ypred){
  //   var w=1;
  //   var k=Ypred.length;
  //   for (var index = k; index < k+h; index++) {
  //     Ypred[index]=Math.floor((L[k-1]+w*T[k-1])*S[index-m])
  //     w+=1; 
  //   }
  //   for (var index = 0; index < Ypred.length; index++) {
  //     //pemberian angka nol pada index 0 - 12
  //     if ( index <= m) {
  //       Ypred[index]=0
  //     } 
  //     /* console.log(Ypred[index]) */
  //   }
  //   return Ypred
  // }
  function prediksiBulanke(L,T,S,h,m,Ypred){
    var w=1;
    var k=Ypred.length;
    //wBayangan ini menggantikan seasonal saat seasonal sudah melebihi dari w =12
    let wBayangan=1;
    for (var index = k; index < k+h; index++) {
      if (w>12) {
        
        Ypred[index]=Math.floor((L[k-1]+w*T[k-1])*wBayangan)
        console.log("uy",w)
        wBayangan++;
      }else{

        Ypred[index]=Math.floor((L[k-1]+w*T[k-1])*S[index-m])
      }
      w+=1; 
      console.log("ini index : ",index,"ini L[k-1] : ",L[k-1],"ini w : ",w,"ini T[k-1] : ",T[k-1],"ini S[index-m] : ",S[index-m],"ini m : ",m)
    }
    for (var index = 0; index < Ypred.length; index++) {
      //pemberian angka nol pada index 0 - 12
      if ( index <= m) {
        Ypred[index]=0
      } 
      console.log(Ypred[index],"ini Ypred[index]")
    }
    return Ypred
  }
//pemanggilan fungsi
  S=initSeasonal(m);//seasonal index 0-11/data ke-12
    for(let t =0;t<m;t++){
      console.log("ini seasonal data awal",t,":",S[t])
    }
  
  L=initLevel(m,S)
    console.log("ini inisiasi awal level ke-13",L[m])
  T=initTrend(m,S)
    console.log("ini inisiasi awal Trend ke-13",T[m])
  
 

/* =============================================GENETIC ALGORITMA============================== */
let x=[];//kromosom1
let y=[];//kromosom2
let z=[];//kromosom2
let nKromosom=2;//kromosom x dan y

let fitness=[];
let loopJumPop=5;
let jumPop=5;//batasan bahwa terdapat 5 kromosom pilihan yang akan disilangkan
let N=1//banyaknya genereasi
let Pc=1//selalu terjadi  dan crossover, apabila nilainya didefinisikan 1/2 maka akan kadang2 terjadi crossover 
let Pm=1//selalu terjadi  dan mutasi,apabila nilainya didefinisikan 1/2 maka akan kadang2 terjadi mutasi
/* Seleksi atau penjodoan kromosom itu dilakukan secara random */
let seleksiColFirst=[0,1,2,3,4];
let seleksiColSecond=[2,3,4,0,1];
let seleksiColThird=[];
/* Mutasi setiap gen ditambahkan dengan bilangan acak antara -1 dan 1 */

let Pop=[];
let HasilMape=[];
let hasilKeseluruhan=[];

/* Tahap dilakukan perhitungan algoritma genetika */
//1. menentukan populasi awal secara random, dan ditentukan 5 kromosom saja
function populasiAwal(generasiKe){  
 if(HasilMape.length == 0){
   for(var i=0;i<jumPop;i++){
    x[i]=Math.random();
    y[i]=Math.random();
    z[i]=Math.random();
      var result= rumusTripleExponential(m,Y,L,T,S,x[i],y[i],z[i],h) ;
      var object={
        x:x[i],
        y:y[i],
        z:z[i],
        fitnes:result,
        generasi:generasiKe,
        tahap:"populasiAwal"
      }
      fitness.push(object);
      hasilKeseluruhan.push(object);
    }
    //cek hasil Populasi
    for(var i=0;i<jumPop;i++){
      console.log("Nilai Populasi awal :")
      console.log(i+1,"nilai x : ",fitness[i].x,"nilai y : ",fitness[i].y,"nilai z : ",fitness[i].z,"dengan fitnes : ",fitness[i].fitnes)
    }
  }else{
    for(var i=0;i<loopJumPop;i++){
    x[i]=HasilMape[i].x; 
    y[i]=HasilMape[i].y;
    z[i]=HasilMape[i].z; 
      var result=HasilMape[i].fitnes;  
      var object={
        x:x[i],
        y:y[i],
        z:z[i],
        fitnes:result,
        generasi:generasiKe,
        tahap:"populasiAwal"
      }
      fitness.push(object);
      hasilKeseluruhan.push(object)
    }
    //cek hasil Populasi
    for(var i=0;i<loopJumPop;i++){
      console.log("Nilai Populasi :")
      console.log(i+1,"nilai x : ",fitness[i].x,"nilai y : ",fitness[i].y,"nilai z : ",fitness[i].z,"dengan fitnes : ",fitness[i].fitnes)
    }
  }
  
}

//2. menentukan seleksi nilai
function seleksi(){
   for(var j=0;j<jumPop;j++){
     // membuat nilai seleksi secara random
      seleksiColFirst[j]=Math.floor(Math.random()*jumPop);
      seleksiColSecond[j]=Math.floor(Math.random()*jumPop);
      if(seleksiColFirst[j]==seleksiColSecond[j]){
        while (seleksiColFirst[j]!= seleksiColSecond[j]) {
          seleksiColSecond[j]=Math.floor(Math.random()*jumPop);
        }
      } 
     /*  seleksiColThird[j]=Math.floor(Math.random()*jumPop);  */
  } 
  //cek hasil Seleksi
  for(var j=0;j<jumPop;j++){
    console.log("Seleksi :",j+1,"kromosom pertama: ",seleksiColFirst[j],"kromosom kedua : ",seleksiColSecond[j])
  }
}

//3.Menentukan crossover
function crossOver(generasiKe){
  var loop=0;
  console.log("cross over");
  for(var j=loopJumPop;j<loopJumPop+loopJumPop;j++){
    var jumlahX=(fitness[seleksiColFirst[loop]].x+fitness[seleksiColSecond[loop]].x)/nKromosom;
    console.log("jumlahX",(fitness[seleksiColFirst[loop]].x+fitness[seleksiColSecond[loop]].x)/nKromosom); 
    var jumlahY=(fitness[seleksiColFirst[loop]].y+fitness[seleksiColSecond[loop]].y)/nKromosom;
    console.log("jumlahY",(fitness[seleksiColFirst[loop]].y+fitness[seleksiColSecond[loop]].y)/nKromosom); 
    var jumlahZ=(fitness[seleksiColFirst[loop]].z+fitness[seleksiColSecond[loop]].z)/nKromosom;
    console.log("jumlahZ",(fitness[seleksiColFirst[loop]].z+fitness[seleksiColSecond[loop]].z)/nKromosom); 
    //Apabila nilai CrossOver bernilai NaN  maka akan didefinisikan dengan nilai random, sehingga tidak menghasilkan nilai NaN
    if(isNaN(jumlahX)){
      jumlahX=Math.random();
    }
    if(isNaN(jumlahY)){
      jumlahY=Math.random();
    }
    if(isNaN(jumlahZ)){
      jumlahZ=Math.random();
    }
    //menambahkan jumlah Populasi dengan tetap memasukan ke variabel x,y dan fitness
    
    
    var result=rumusTripleExponential(m,Y,L,T,S,jumlahX,jumlahY,jumlahZ,h);
    var object={
      x:jumlahX,
      y:jumlahY,
      z:jumlahZ,
      fitnes:result,
      generasi:generasiKe,
      tahap:"Cross Over"
    }
    fitness.push(object);
    hasilKeseluruhan.push(object)
    loop=loop+1;
  }
  jumPop=jumPop+loopJumPop;
  for (var k =0; k<fitness.length;k++) {
    console.log("Hasil Crossover")
    console.log(k+1," nilai x : ",fitness[k].x," nilai y : ",fitness[k].y," nilai z : ",fitness[k].z, " fitness : ",fitness[k].fitnes); 
  }
}

function mutasi(generasiKe) {
  
  console.log("mutasi");
  for(var h=jumPop;h<jumPop+loopJumPop;h++){
    
    var fitnesx=fitness[loopJumPop].x+Math.random();
    console.log("fitnesx  mutasi : ",fitnesx)
    var fitnesy=fitness[loopJumPop].y+Math.random();
    console.log("fitnesy  mutasi : ",fitnesy)
    var fitnesz=fitness[loopJumPop].z+Math.random();
    console.log("fitnesz  mutasi : ",fitnesz)
    //mengantisipasi agar parameter tiddak melebihi angka 1
    if(fitnesx>=1){
      fitnesx=1;
    }
    if(fitnesy>=1){
      fitnesy=1;
    }
    if(fitnesz>=1){
      fitnesz=1;
    }
    var result=rumusTripleExponential(m,Y,L,T,S,fitnesx,fitnesy,fitnesz,h)
    var object={
      x:fitnesx,
      y:fitnesy,
      z:fitnesz,
      fitnes:result,
      generasi:generasiKe,
      tahap:"Mutasi"
    }
    fitness.push(object)
    hasilKeseluruhan.push(object)
    console.log("perhitungan mutasi")
    console.log("indek -",1+h," Ini nilai x : ",fitness[h].x," Ini nilai y : ",fitness[h].y, " Ini nilai z : ",fitness[h].z, "nilai fitnes : ",fitness[h].fitnes);
  }
  jumPop=jumPop+loopJumPop;

}

function MAPE(){
var hasil=fitness.sort(function(a, b){
    return a.fitnes-b.fitnes
  })
for (var t = 0; t < loopJumPop; t++) {

    var object={
      x:hasil[t].x,
      y:hasil[t].y,
      z:hasil[t].z,
      fitnes:hasil[t].fitnes,
      generasi:hasil[t].generasi,
      tahap:hasil[t].tahap,
    }
    HasilMape[t]=object
  }
}



for (let index = 0; index < iterationGen; index++) {
  
  populasiAwal(index+1);
  seleksi();
  crossOver(index+1);
  mutasi(index+1);
   MAPE();  
 
}

hasilKeseluruhan.push(HasilMape[0]);
return hasilKeseluruhan;


}
