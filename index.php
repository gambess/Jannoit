<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
		<title>Bienvenido al Anotador Hibrido de Espa&ntilde;a Virtual</title>
		<!--Scripts jquery -->
                <script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
                <script type="text/javascript" src="js/jquery-ui-1.7.2.custom.min.js"></script>
                <!--Scripts jquery -->
                <!--Scripts Plugins jquery -->
                <script type="text/javascript" src="js/jquery.blockUI.js"></script>
                <script type="text/javascript" src="js/jquery.contextmenu.r2.js"></script>
                <script type="text/javascript" src="js/dynacloud.js"></script>
                <!--Scripts Plugins jquery -->
               <!--Scripts widgets paginas -->
                <script type="text/javascript" src="js/windowIndex.js"></script>
                <script type="text/javascript" src="js/windowParent.js"></script>
                <script type="text/javascript" src="js/windowIframe.js"></script>
                <!--Fin Scripts widgets paginas -->
   	<link type="text/css" href="css/redmond/jquery-ui-1.7.2.custom.css" rel="stylesheet" />	
	<link type="text/css" href="css/pages.css" rel="stylesheet" />
	<link type="text/css" href="css/decoration.css" rel="stylesheet" />
</head>
<?php ?>
	<body>
            <div class="wrapper">
		<div id="Header" class="ui-state-default ui-corner-all">
			<div id="Logo"></div>
			<div id="Nombre"></div>	
			<div id="Titulo"></div>
			<div id="Beta"></div>
		</div>
		
		<div id="Contenedor">
			<? if(empty($_POST) and empty($_GET)): ?>
			<div id="ContPrincipal">
				<div id="bienvenida">
					<ul>
						<li><a href="#tabs-1">Ingrese una URI</a></li>
						<!--<li><a href="#tabs-2">Subir</a></li>-->
					</ul>
						<div id="tabs-1">
							<div style="width:100%;">
							<h3 align="justify"><p>El Anotador H&iacute;brido de Espa&ntilde;a Virtual tiene como objetivo permitir que cualquier usuario, sin necesidad de un grado de conocimiento alto en
							tecnolog&iacute;as de la Web Sem&aacute;ntica ni de procesamiento de lenguaje natural, pueda realizar un gran n&uacute;mero de anotaciones sobre diversos recursos disponibles en la Web (textos, im&aacute;genes, v&iacute;deos, etc.). Por anotaciones entendemos conjuntos de
							metadatos en forma de etiquetas (tags), informaci&oacute;n RDF e informaci&oacute;n ling&uuml;&iacute;stica sobre la informaci&oacute;n disponible.
							<br /><br/>Durante el proceso de enriquecimiento de la informaci&oacute;n esta herramienta permite hacer b&uacute;squedas sem&aacute;nticas en la Web, con la finalidad de conseguir
							informaci&oacute;n adicional de los recursos anotados, procedente de fuentes de informaci&oacute;n sem&aacute;nticas como DBpedia, Sig.ma, etc.
							</p></h3>
							<br /><br/>
							</div>
							<div style="width:99%;" class ="ui-tabs ui-widget ui-widget-content ui-corner-all">
								<form>
							    <center><label>Ingrese una URI: </label>
							    		<input onfocus="if (this.value=='Escriba una URI : Ej. http://www.ejemplo.com') {this.value=''} else {this.select()}; return true;" type="text" name="url[]" size="60"  value="Escriba una URI : Ej. http://www.ejemplo.com" class="ui-tabs ui-widget ui-widget-content ui-corner-all" />
								<a  href="#" id="dialog_link" class="ui-state-default ui-corner-all"><span class="ui-icon ui-icon-search"></span>Anotar</a></center>
								</form>			                	
							</div>
						</div>
					</div>
				<? endif; ?>
				</div>
		
			
<?php if($_POST):?>
				<div id="ContPrincipal">
				<div id="tabs">
					<ul>
						<?php 
						//Recepcion de la URL
						$u = ($_POST['url']);
						$url= $u[0];
						?>
						<li><a href="#tabs-1"><? print $url; ?></a></li>
					</ul>
						<?
						//Recepcion de los Entity Names y formatear el arreglo
						$ent = array();
						foreach ($_POST['cajitas'] as $val) {
    						$ent[] = $val;
						}
						$ent_concomas=implode(", ", $ent);
						?>	
						<div id="tabs-1">
							<div style="height:95%; margin: 3px 0px 10px 0px;" class ="ui-widget-button ui-corner-all" >
								<form>
							    <center><label>Ingrese una URI: </label>
							    		<input onfocus="if (this.value=='<? print $url; ?>') {this.value=''} else {this.select()}; return true;" type="text" name="url[]" size="60"  value="<? print $url; ?>" class="ui-tabs ui-widget ui-widget-content ui-corner-all"/>
								<a  href="#" id="dialog_link" class="ui-state-default ui-corner-all"><span class="ui-icon ui-icon-search"></span>Anotar</a></center>
								</form>
							</div>
                                                        <div id="dialog_iframe">
                                                            <div id="Menu" style="height:95%; background-color: #8AB7DA; padding: 7px 4px 7px 4px;"  class ="ui-widget ui-widget-content ui-corner-all">
                                                               <center><a href="#" id="boton_resultado" class="ui-state-default ui-corner-all"><span class="ui-icon ui-icon-folder-open"></span>Mi Cajita</a>
                                                               <a href="#" id="boton_opciones" class="ui-state-default ui-corner-all"><span class="ui-icon ui-icon-search"></span>Leyenda</a></center>
                                                            </div>
                                                            <div id="iframe_content">
                                                            <div id="dialog_url">
                                                                <iframe id="iframecontent" frameborder="no" style="position: relative; border:none; -moz-border-radius:8px 8px 8px 8px;" scrolling="auto" width="100%" height="100%" src="resultadocall.php?url=<? echo $url; ?>&ent_concomas=<? echo $ent_concomas; ?>" class="ui-corner-all"></iframe>
                                                            </div>

                                                            </div>

                                                        </div>
							
						</div>
							
				</div>
                        </div>
			<div id="opciones" title="Entidades Seleccionadas"></div>	
			<div id="ContDerecho">
				<div id="notaccordion">
					<div>
						<h3><a href="#">Folksonomias</a></h3>
						<div id="dynacloud" style="text-align: justify;"></div>
					</div>
					<div>
						<h3><a href="#">Resultados en Sigma</a></h3>
						<div id="drop">Arrastre o Escriba un termino:
		      			<input onfocus="if (this.value=='Arrastre o escriba el Termino') {this.value=''} else {this.select()}; return true;" type="text" size="20"  value="Arrastre o escriba el Termino" />
						</div>
					</div>
					<div>
						<h3><a href="#">Anotaciones Sem&aacute;nticas</a></h3>
						<div>Arrastre o Escriba un termino:
		      			<input onfocus="if (this.value=='Arrastre o escriba el Termino') {this.value=''} else {this.select()}; return true;" type="text" size="20"  value="Arrastre o escriba el Termino" />
						</div>
					</div>
					<div>
						<h3><a href="#">Anotaciones Ling&uuml;isticas</a></h3>
						<div>Arrastre o Escriba un termino:
		      			<input onfocus="if (this.value=='Arrastre o escriba el Termino') {this.value=''} else {this.select()}; return true;" type="text" size="20"  value="Arrastre o escriba el Termino" />
						</div>
					</div>
					<div>
						<h3><a href="#">Anotaciones de Fuentes RDF's</a></h3>
						<div>Arrastre o Escriba un termino:
		      			<input onfocus="if (this.value=='Arrastre o escriba el Termino') {this.value=''} else {this.select()}; return true;" type="text" size="20"  value="Arrastre o escriba el Termino" />
						</div>
					</div>
				</div>
				<div id="ContDerechoBajo">
				</div>
			</div>
	
	<br class="clearfloat" />
<?php endif; ?>
	</div>
	<!-- ui-dialog -->
			<div id="dialog" title="Seleccione las Entidades que desea Anotar">
				<form action="index.php" method="post">
			    <input type="hidden" name="url[]" />
				<input type="checkbox" name="cajitas[]" checked value="Person">Persona<br />
				<input type="checkbox" name="cajitas[]" checked value="Date">Fecha<br />
				<input type="checkbox" name="cajitas[]" checked value="Address">Direcci&oacute;n<br />
				<input type="checkbox" name="cajitas[]" checked value="FirstPerson">Primera Persona<br />
				<input type="checkbox" name="cajitas[]" checked value="Identifier">Identificador<br />
				<input type="checkbox" name="cajitas[]" checked value="Location">Localizacion<br />
				<input type="checkbox" name="cajitas[]" checked value="Organization">Organizaci&oacute;n<br />
				<input type="checkbox" name="cajitas[]" checked value="Lookup">Lookup<br />
				<input type="checkbox" name="cajitas[]" checked value="Sentence">Sentencia<br />
				<input type="checkbox" name="cajitas[]" checked value="SpaceToken">Token Especial<br />
				<input type="checkbox" name="cajitas[]" checked value="Split">Split<br />
				<input type="checkbox" name="cajitas[]" checked value="Token">Token<br />
				<input type="checkbox" name="cajitas[]" checked value="Unknown">Desconocido<br />
				<input type="checkbox" name="cajitas[]" checked value="Urlpre">UrlPre<br />
   			</form>
		</div>
                <div class="contextMenu" id="miMenu" style="display: none;">
		    <ul>
			      <li id="save"><IMG src="images/disk.png"> Al Disco</li>
			      <li id="copy"><IMG src="images/disk.png"> en texto</li>
			      <li id="copy2"><IMG src="images/disk.png"> en html</li>
				  <li id="copy3"><IMG src="images/disk.png"> en rdf</li>
			      <li id="delete"><IMG src="images/cross.png"> Borrar</li>
    		</ul>
		</div>
                <div id="resultado" title="Mi Cajita de Anotaciones"></div>
         <div class="push"></div>
        </div>
	<div id="PieIndex" class="ui-state-default ui-corner-all"><h2 style="text-align: center;">Copyright &copy; 2010, Espa&ntilde;a Virtual</h2></div>
	</body>
</html>
