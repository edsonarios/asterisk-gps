<?php

//$hostname ="localhost";  //nuestro servidor
//$database ="gpsbd";//Nombre de nuestra base de datos
//$username ="root";//Nombre de usuario de nuestra base de datos (yo utilizo el valor por defecto)
//$password ="12345";//Contraseña de nuestra base de datos (yo utilizo por defecto)
//$dbconn = pg_connect("host=173.212.235.89 dbname=gpsbd user=gpsbd password=gpsbd")
//	or die('No se pudo conectar: ' . pg_last_error());
try{
$db = new PDO("pgsql:host=localhost dbname=gpsdb user=gpsdb password=gpsdb");
echo"conecto";
}
catch(PDOException $e){
print $e->getMessage();
}

  //variables que almacenan los valores que enviamos por nuestra app, (observar que se llaman igual en nuestra app y aqui)
  $direccion=$_POST['direccion'];
  $coordenadas=$_POST['coordenadas'];
  
  //$direccion="dir";
  //$coordenadas="coor";
  
 // if (empty($_POST["coordenadas"]) AND $_POST["direccion"]!==''){
 //echo "Faltan DATOS los campos estan vacios"; 
  //}else{

try{

$insert = $db->prepare("INSERT INTO gps(direccion, coordenadas) VALUES (?, ?)");
$insert->execute(array($direccion, $coordenadas));


}catch (PDOException $e){
  echo $e->getMessage();
  
}

// select all users
//$stmtt = $db->query("SELECT * FROM gps");





////////////////////////////////////////////////////////////////////
//CONSULTA
/*$query = "SELECT * FROM gps";
$gsent = $db->prepare("SELECT * FROM gps");
$gsent->execute();
$resultado = $gsent->fetchAll();
print_r($resultado);*/
////////////////////////////////////////////////////////////////////

/*/////////////////////////////////////////////////////
CREAR TABLA
try {
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql ='CREATE TABLE IF NOT EXISTS test (id serial PRIMARY KEY, prename VARCHAR(50) NOT NULL);';
  $db->exec($sql);
} catch(PDOException $e) {
  echo $e->getMessage();
}
*/

?>
