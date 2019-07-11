<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Healer</title>
    <meta name="description" content="Healer Game:
<?php
    echo $raid_name.", ".$boss_name;
?>
    ">
    <!-- general stuff -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/healer/css/main.css">
    <script src="../js/engine.js"></script>
    
    <!-- raid specific stuff -->
<?php
    echo '<link rel="stylesheet" href="./css/'.$raid_name.'.css">';
    echo '<link rel="stylesheet" href="./js/'.$raid_name.'.js">';
?>
</head>