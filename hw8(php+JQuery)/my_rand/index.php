<?php
$chars = "qazxswedcvfrtgbnhyujmkiolp1234567890QAZXSWEDCVFRTGBNHYUJMKIOLP";
$max = 10;
$size = StrLen($chars) - 1;

$password = null;

while ($max--)
    $password .= $chars[(time()+20*$max-$max**3) % $size];
echo $password;