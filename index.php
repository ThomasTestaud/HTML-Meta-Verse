<?php

session_start();

spl_autoload_register(function($class) {
    require_once lcfirst(str_replace('\\','/', $class)) .'.php';
});

//var_dump( $_SESSION['user']);die();

if(array_key_exists('route', $_GET)) {
    switch($_GET['route']) {
            
            
            case 'login':
                require 'views/login.phtml';
            break;
            
            case 'create':
                if(isset($_POST['username'])){
                    $model = new \Models\Objects();
                    $model->createUser($_POST['username']);
                    $_SESSION['user'] = $_POST['username'];
                }
                header('Location: index.php');
                exit;
            break;
            
            case 'refresh':
                $json = file_get_contents('php://input');
                $data = json_decode($json, true);
                $controller = new Models\Objects();
                $controller->updatePosition($data['positionX'], $data['positionY'], $data['direction'], $data['chatMessage'], $_SESSION['user'], $data['playerType']);
            
                $model = new Models\Objects();
                $objects = $model->getAllObjects();
                
                include_once 'views/_RTelements.phtml';
            break;
            
            case 'deco':
                session_destroy();
                header('Location: index.php');
                exit;
            break;
    }
}else{
    if(isset($_SESSION['user'])){
        require 'views/layout.phtml';
    }else{
        header('Location: index.php?route=login');
        exit;
    }
}


