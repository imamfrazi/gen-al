<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sistem Genetic Algorithm</title>
    <style>
      #loginText{
        color: white;
      }
      .main-sidebar{
        width:300px;
      }
    </style>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css">
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper"  id="app">

  <!-- Navbar -->
    @include('template.navbar')
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
    @include('template.leftSideBar')
  <!-- Content Wrapper. Contains page content -->
  
    @include('template.main')
  <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Calon M.Cs
    </div>
    <!-- Default to the left -->
    <strong>Semoga Cepat Wisuda</strong>
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="{{ asset('js/app.js') }}"> </script>
<script>
    function submit() {
      let email=document.getElementsByName('email')[0].value;
      console.log(email,"ini email");
      let pass=document.getElementsByName('password')[0].value;
      console.log(pass);
      var btnGroupLogin=document.getElementById("btnGroupLogin");
      var loginText=document.getElementById("loginText");
      
      if( !localStorage.getItem('textContext') || !localStorage.getItem('textContext') == "Logout" ) {
        localStorage.setItem("email",email);
        localStorage.setItem("pass",pass);
        var text="Logout"
        localStorage.setItem("textContext",text);
        console.log(btnGroupLogin);
        
        btnGroupLogin.setAttribute('data-target',"#modal-default2")
        btnGroupLogin.removeChild(loginText);
        var p=document.createElement('p');
        p.setAttribute('id',"loginText")
        p.textContent=text;
        btnGroupLogin.appendChild(p);
        console.log("ini login",btnGroupLogin)
      }else{
        localStorage.removeItem("email");
        localStorage.removeItem("pass");
        localStorage.removeItem("textContext");
        var text="Login";
        console.log(btnGroupLogin);
        btnGroupLogin.removeChild(loginText);
        btnGroupLogin.setAttribute('data-target',"#modal-default")
        var k=document.createElement('p');
        k.setAttribute('id',"loginText")
        k.textContent=text;
        btnGroupLogin.appendChild(k);
        console.log("ini logout",btnGroupLogin)
      }
    }
  </script>
</body>
</html>
