<!DOCTYPE html>
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="app.css">

        <title>DragAndDrop</title>
    </head>

    <body>
        <h1 class="title">Drag and Drop</h1>
        <div class="container">
            <div class="square_container">
                <div data-color="blue" class="blue_square square"></div>
                <div data-color="red"  class="red_square square"></div>
            </div>
            <div class="circle_container">
                <div draggable="true" data-color="blue" class="blue_circle circle"></div>
                <div draggable="true" data-color="red" class="red_circle circle"></div>
            </div>
        </div>
        
        <script src="script.js"></script>
    </body>
</html>
