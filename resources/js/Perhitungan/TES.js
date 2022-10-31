export const hitung=(jumlahPenumpang,request)=>{
/* request.alpha
  request.beta,
  request.gamma
  request.periodePrediksi

*/

//deklarasi parameter alpha(mempengaruhi level),beta(mempengaruhi trend),gamma(mempengaruhi seansonality)
   /* let alpha=0.5,beta=0.5,gamma=0.5;  */  /* f(c,b,a),f(a,c,b),f(b,a,c) */
   let alpha=request.alpha;
   let beta=request.beta;
   let gamma=request.gamma;   /* f(c,b,a),f(a,c,b),f(b,a,c) */
 

  var t=0;
  var m=12;//periode bulanan maka 12
  //deklarasi L,T,S,
  let L=[];
  let T=[];
  let S=[];
  let hasilKeseluruhan=[];
  let Y=jumlahPenumpang;
  console.log("ini Jumlah Penumpang",Y)
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
  let h=parseInt(request.periodePrediksi);//data yang diinput user untuk memprediksi bulan ke- selanjutnya
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
    console.log(m,Y,L[m],T,S,L.length)
    try {
      var hitungTotalMape=0;
      var panjang=Y.length;
      S[m]=(gamma*(Y[m]/L[m]))+((1-gamma)*S[0]); 
      for (var q=m+1;q<panjang;q++){
        //init q = 13
        L[q]=alpha*Y[q]/S[q-m]+(1-alpha)*(L[q-1]+T[q-1]);
        console.log("ini Level ke-",q,":", L[q])
        T[q]=beta*(L[q]-L[q-1])+(1-beta)*T[q-1];
        console.log("ini Trend ke-",q,":", T[q])
        S[q]=gamma*(Y[q]/L[q])+(1-gamma)*S[q-m]; 
        console.log("ini Seasonal ke-",q,":", S[q])
        console.log("ini s[12] : ",S[12])
        Ypred[q]=Math.floor((L[q-1]+T[q-1])*S[q-m]);
        console.log("ini Ypred ke-",q,":",Ypred[q])
        //hitung errorHW
        var resultErrorHW=errorHWfunc(Y[q],Ypred[q])
        errorHW[q]=resultErrorHW;
        console.log("ini errorHW ke-",q,":",errorHW[q])
        hitungTotalMape +=errorHW[q]
      }
      var MAPE=meanMape(hitungTotalMape,Ypred.length-m-1)
      
      //prediksi bulan ke
      prediksiBulanke(L,T,S,h,m,Ypred);
      var objek={
        seasonal:S,
        level:L,
        trend:T,
        Yprediksi:Ypred,
        YdataActual:Y,
        mape:MAPE,
        alpha:alpha,
        beta:beta,
        gamma:gamma
      }
      hasilKeseluruhan.push(objek);
      return hasilKeseluruhan;
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
  
  var reslt=rumusTripleExponential(m,Y,L,T,S,alpha,beta,gamma,h) 
  return reslt;
}