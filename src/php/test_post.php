<?php
 //$student = $_POST['student'];
 //$age = $_POST['age'];
 // 将 $_POST['id']修改成以下方式
$data = json_decode(file_get_contents('php://input'),true);

 $response = array(
    'name' => $data['name'],
    //'age' =>  $age,
    'test' => 'imyt'
);

$res = json_encode($response);

echo $res;

?>