<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>RHT Center</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- Styles -->
        {{-- <style type="text/css">
            @media screen and (max-width: 900px) and (min-width: 600px) and (min-width: 1100px) {
                .container, .dynamic-m-top { margin-top:150px; }
            }
        </style> --}}
    </head>
    <body>
        <div id="reactApp"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
