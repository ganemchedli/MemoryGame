<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title></title>
<meta name="viewport" content="width=device-width,initial-scale=1">






<?php
interface fruit_interface {
  public function fruit_name();
}

class banana implements fruit_interface {
  static $name = "banana" ;
  public function fruit_name(){
    echo "I am banana <br />" ;
  }
}

class ananas implements fruit_interface {
  static $name = "ananas" ;
  public function fruit_name()
  {
    echo "I am ananas <br />" ;
  }
}


$banana= new banana();
$ananas= new ananas();

echo $banana :: $name ;
echo "<br />" ;
echo $ananas :: $name ;
?>





<!-- 2:47:23 youtube -->




</body>
</html>
