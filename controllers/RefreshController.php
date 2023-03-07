<?php

namespace Controllers;

class RefreshController {
    
    public function getObjects()
    {
        $model = new \Models\Objects();
        return $model->getAllObjects();
    }
    
    public function updatePosition($positionX, $positionY, $user)
    {
        $model = new \Models\Objects();
        $model->updatePosition($positionX, $positionY, $user);
    }
    
    public function createUser()
    {
        $model = new \Models\Objects();
        $model->createUser($_POST['username']);
        $_SESSION['user'] = $_POST['username'];
        header('Location: index.php');
        exit;
    }
    
    public function login()
    {
        require 'views/login.phtml';
    }

}