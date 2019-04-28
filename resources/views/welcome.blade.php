<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link rel="stylesheet" href="/css/app.css">

    </head>
    <body>
        <div class="page_wrapper" id="app">
            @include('partials.topbar')
            @include('partials.sidebar')

            <div class="page_container">
                @yield('content')
                <h3>Page Data</h3>
            </div>
        </div>
    </body>

    <script src="/js/app.js"></script>
    <script src="/js/simple.js"></script>
</html>
