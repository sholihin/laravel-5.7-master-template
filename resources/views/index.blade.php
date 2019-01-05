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
        <style type="text/css">
            .footer {
                bottom: 0;
                width: 100%;
                position: absolute;
                height: 60px;
                background-color: #f5f5f5;
            }
            html {
                font-size: 14px;
            }
            @media (min-width: 768px) {
                html {
                    font-size: 16px;
                }
            }

            .container {
                max-width: 960px;
            }

            .pricing-header {
                max-width: 700px;
            }

            .card-deck .card {
                min-width: 220px;
            }

            .border-top { border-top: 1px solid #e5e5e5; }
            .border-bottom { border-bottom: 1px solid #e5e5e5; }

            .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
        </style>
    </head>
    <body>
        <div id="reactApp"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
