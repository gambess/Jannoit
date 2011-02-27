<?php

class Anotar {

    /**
     * @var string
     */
    public $URLs;

    /**
     * @var string
     */
    public $Opciones;

}

class AnotarResponse {

    /**
     * @var string
     */
    public $return;

}

//Recepcion de los Parametros Enviados

$url = 'http://en.wikipedia.org/wiki/Madrid';
//$url = ($_GET['url']);
$ent = 'Person, Date, Location';
//$ent = ($_GET['ent_concomas']);


//direccion del WEB Service ANOTAR
//$wsdl = 'http://acubens.dia.fi.upm.es:9090/GateWebAppl/AnotadorService?WSDL';
//$wsdl='http://regulo.dia.fi.upm.es:9090/GateWebAppl/AnotadorService?WSDL';
$wsdl = 'http://regulo.dia.fi.upm.es:9090/GateWebAppl/AnotadorService?WSDL';
//Array con class_map
$class_map = array(
    "Anotar" => "Anotar",
    "AnotarResponse" => "AnotarResponse");

//Array con los parametros de consulta
$param = array('URLs'=>$url, 'Opciones'=>$ent);
//Llamada al web service
$cliente = new SoapClient($wsdl, array('classmap' => $class_map));
//Recupero la respuesta de la llamada
$respuesta = $cliente->__call('Anotar',array('parameters'=>$param));

header('Content-type: text/html; charset=utf-8');
print ($respuesta->return);


?>
