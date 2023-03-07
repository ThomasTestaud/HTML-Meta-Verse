<?php

namespace Models;

class Objects extends Database {
    
    public function getAllObjects()
    {
        $req = "SELECT * FROM `objects` ORDER BY id DESC LIMIT 6;";
        return $this->findAll($req);
    }
    
    public function updatePosition($positionX, $positionY, $message, $user)
    {
        $req = 'UPDATE `objects` SET `positionX`= :posX,`positionY`= :posY,`message`= :msg WHERE `username` = :user';
        
        $params = [
            'posX' => $positionX,
            'posY' => $positionY,
            'msg' => $message,
            'user' => $user
        ];
        
        $this->update($req, $params);
    }
    
    public function createUser($user)
    {
        $req = 'INSERT INTO `objects`(`username`, `positionX`, `positionY`) VALUES (:username, 100, 100)';
        
        $params = [
            'username' => $user
        ];
        
        $this->update($req, $params);
    }
    
    public function message($msg, $user)
    {
        $req = 'UPDATE `objects` SET `message`= :msg WHERE `username` = :user';
        
        $params = [
            'msg' => $msg,
            'time' => $time,
            'username' => $user
        ];
        
        $this->update($req, $params);
    }
    
}