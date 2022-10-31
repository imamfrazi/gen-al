<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            #app{
              width: 200px;
              height:250px;
              border: 1px solid black;
              border-radius: 4px;
              padding: 10px 20px;
            }
            #app h3{
              text-align: center;
            }
            .form-group input{
              border: 1px solid grey;
              border-radius: 2px;
              width: 100%;
              height: 25px;
            }
            .form-group label{
              font-size: 12px;
            }
            .btn{
              padding:10px 10px;
              border-radius: 3px;
              width: 100%;
            }
            .btn-primary{
              margin-top: 10px;
              background-color:white;

              color: black;
            }
            .btn-primary:hover{
              margin-top: 10px;
              background-color:#4169E1;
              border: 1px solid #4169E1;
              color: white;
            }
            .antialiased{
              position: relative;
              left: 40vw;
              top: 20vh;
            }
        </style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    <link href="{{ asset('css/app.css') }}"> </link>
    </head>
    <body class="antialiased">
        <div id="app">
          <h3>Login</h3>
          <form method="POST" action="/auth">
            @csrf
            <div class="form-group">
              <label>Username</label>
              <input type="email" name="email" >
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input type="password" name="password" >
            </div>
            <button style="margin-left:2px;" class="btn btn-primary">Submit</button>
          </form>
        </div>
    </body>
    <script src="{{ asset('js/app.js') }}"> </script>
</html>
