                                var traduction = new Array();
				traduction = {
				  'Address':'Direcciones Web',
				  'Date':'Fechas',
				  'FirstPerson':'Nombres',
				  'Identifier':'Identificadores',
				  'Location':'Localizaciones',
				  'Organization':'Organizaciones',
				  'Person':'Personas',
				  'Lookup':'Look Ups',
				  'Sentence':'Sentencias',
				  'SpaceToken':'Espacios',
				  'Split':'Split',
				  'Token':'Tokens',
				  'Unknown':'Desconocidos',
				  'UrlPre':'Previos URL'
				  };
                        var tOpcion = new Array();
				tOpcion = {
				  'Address':'t15',
				  'Date':'t8',
				  'FirstPerson':'t12',
				  'Identifier':'t14',
				  'Location':'t2',
				  'Organization':'t11',
				  'Person':'t10',
				  'Lookup':'t5',
				  'Sentence':'t9',
				  'SpaceToken':'t7',
				  'Split':'t6',
				  'Token':'t1',
				  'Unknown':'t13',
				  'UrlPre':'t14'
				  };
                        var legend = new Array();
				legend = {
				  'Address':'t15l',
				  'Date':'t8l',
				  'FirstPerson':'t12l',
				  'Identifier':'t14l',
				  'Location':'t2l',
				  'Organization':'t11l',
				  'Person':'t10l',
				  'Lookup':'t5l',
				  'Sentence':'t9l',
				  'SpaceToken':'t7l',
				  'Split':'t6l',
				  'Token':'t1l',
				  'Unknown':'t13l',
				  'UrlPre':'t14l'
				  };
			function imprimeEnDiv(texto){
				$("#resultado").append("<p><span>" + texto + "</span></p>");
			}

			function toggleLeyenda(title){
				if (title in legend) {
					$("#opciones a[title='" + title + "']").prev("div").toggleClass(legend[title]);
					$("a[title='" + title + "']").click(function(){
						$(this).prev("div").toggleClass(legend[title])
					});
				}
			}
			function toggleOpcionW(title) {

				if (title in tOpcion)
				{
					$("a[title='" + title + "']").click(function(){$(this).toggleClass(tOpcion[title]);});
				}
			}
$(function(){

	//Acordion modificado
	// Widgets de la derecha, con propiedades de acordion jquery ui  extendida cerrar y abrir todos
		$("#notaccordion").sortable({axis:'y'}).addClass("ui-accordion ui-widget ui-helper-reset")
                .find("h3")
                .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
                .prepend('<span class="ui-icon ui-icon-triangle-1-e"/>')
                .click(function() {
                $(this).toggleClass("ui-accordion-header-active").toggleClass("ui-state-active")
                        .toggleClass("ui-state-default").toggleClass("ui-corner-bottom")
                        .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e").toggleClass("ui-icon-triangle-1-s")
                        .end().next().toggleClass("ui-accordion-content-active").toggle();
                        return false;
                })
                .next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();


            // Tabs para mostrar el Iframe y mas resultados
                $('#tabs').tabs().find(".ui-tabs-nav").sortable({axis:'x'});

                //Dialog para las anotaciones "mi cajita"
                $('#resultado').dialog({
                        autoOpen: false,
                        width: 600,
                        position:[350,250],
                        resizable: true,
                        buttons: {
                                "Guardar": function() {
                                        $(this).dialog("close");
                                }
                        }
                });
		//Dialog que muestra las Entitys Names y su leyenda en colores
                $('#opciones').dialog({
					autoOpen: false,
					position: [850,300],
					width: 200,
					resizable: false,
                                        autoResize: true
		});
                // Boton resultado que abre la ventana de resultado
                
               $('#boton_resultado').click(function(){
					$('#resultado').dialog('open');
					return false;
				});
                $('#boton_opciones').click(function(){
					$('#opciones').dialog('open');
					return false;
				});

        });
                        



