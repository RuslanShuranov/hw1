<?php

$string = $_POST['email'];
$str = strpos($string, "@");
$row = substr($string, 0, $str);
echo $row;