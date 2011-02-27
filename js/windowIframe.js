
		//Tabla con estilos por entityname
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
                //Tabla con traducciones por entityname
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

                var titles=new Array();
		var iframeDoc;
                
		function loadTitles(){
		//$("span[id^='gate_']", $(iframeDoc)).each(function(){ //versio nueva anotacion para rdf
		$("span[gateid]", $(iframeDoc)).each(function(){
			var title = $(this).attr("title");
			//var gateID = $(this).attr("id");
			titles[title]=true;
		});
		}
                function toggleOpcionI(title) {
		if (title in tOpcion)
                    {
                    $("span[title='" + title + "']", $(iframeDoc)).toggleClass(tOpcion[title]);
                    return false;
                    }
		}

//               function toggleOpcionW(title) {
//               if(title in tOpcion)
//                    {
//                    $("a[title='" + title + "']").click(function(){$(this).toggleClass(tOpcion[title]);});
//                    }
//               }
                function toggleDynaCloud(txt) {
                    $("span:contains('"+ txt +"')", $(iframeDoc)).each(function(){
                    if($(this).find("span").length==0)
                        $(this).toggleClass('t7');
                     });

                 }

               function removeToggle(title){
		$("span[title='" + title + "']",$(iframeDoc)).hover(function(){
		if (title in tOpcion) {
		if ($(this).hasClass(tOpcion[title])) {
                	//$(this).find("span:last").prepend("<span class='ui-icon ui-icon-close "+tOpcion[title]+"' style = 'position:absolute; top: -13px; left:85%;' title='Haga click aqu&iacute;: Si considera que esta palabra no es una "+title+"'></span>");
                        $(this).prepend("<span class='ui-icon ui-icon-close "+tOpcion[title]+"' style = 'position:absolute; top: -13px; left:85%;' title='Haga click aqu&iacute;: Si considera que esta palabra no es una "+title+"'></span>");
			//$(this).prepend("<span class='ui-icon ui-icon-close' style = 'position:absolute; top: -12px; left:-10px;'></span>");
		}
		$('.ui-icon.ui-icon-close', $(iframeDoc)).click(function(){
		var x=$(this);
  		var span=x.parents("span[gateid]:first");
                var val = span.text();
                $("span[title='" + title + "']:contains('"+ val +"')",$(iframeDoc)).replaceWith('<span class="dynacloud">'+ val +'</span>'); 
//  		var span=x.parents("span[id^='gate_']:first");
//		var span_list=span.find("span[property^='http://www.gate.com/rdfs#matches']");
//		var content=span_list.attr("content");
//		var strlist=content.substr("http://www.gate.com/rdf#[".length);
//  		strlist=strlist.substr(0,strlist.length-1);
//  		var list=strlist.split(',');
//  		var i;
//  		for (i = 0; i < list.length; i++) {
//                    var item = $("#gate_" + list[i].replace(' ',''), $(iframeDoc));
//                    item.replaceWith(item.text());
//		}
		return false;
		});
		}
		},
		function (){$(this).find("span[class*=ui-icon-close]").remove();
		});
		}

		$("#iframecontent").ready(function() {
		$("#dialog_url").block({
                        message: '<img src="css/redmond/images/ajax-loader.gif" />',
                        css: {
                            border: 'none',
                            padding: '5px',
                            top: '139px',
                            backgroundColor: 'transparent',
                            opacity: .5,
                            color: '#fff'
                        },
                        overlayCSS:  {
                            backgroundColor: '#000',
                            opacity: .6,
                            '-webkit-border-radius': '5px',
                            '-moz-border-radius': '5px'
                        }

            });
		$("#iframecontent").resizable().load(function() {
			$("#dialog_url").unblock()
                        $("#opciones").dialog('open');
                        var iframe=$("#iframecontent").get(0);
			iframeDoc=iframe.contentDocument;
			$("head", $(iframeDoc)).append("<style type='text/css'>.highlight {border: 1px solid #9ca694; background: #efebde; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t1 {border: 1px solid #9ca694; background: #efebde; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t2 {border: 1px solid #ef9608; background: #ffbe5a; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t3 {border: 1px solid #8c5521; background: #ded3ae; position: relative; color: #8c5521;outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t4 {border: 1px solid #e7aeff; background: #b596ce; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t5 {border: 1px solid #525110; background: #c6c794; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t6 {border: 1px solid #ffff10; background: #fffb94; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t7 {border: 1px solid #b5b694; background: #efefef; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t8 {border: 1px solid #ef5d8c; background: #ffd7e7; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t9 {border: 1px solid #c671f7; background: #efd7ff; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t10 {border: 1px solid #006633; background: #18ff84; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t11 {border: 1px solid #7F1EDA; background: #BE6FDA; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t12 {border: 1px solid #86B5D9; background: #dfeffc; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t13 {border: 1px solid #efe3bd; background: #fff3c6; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t14 {border: 1px solid #317def; background: #3186ff; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.t15 {border: 1px solid #52cb08; background: #9cff5a; position: relative; color: #8c5521; outline: none; -moz-border-radius: 3px; -webkit-border-radius: 3px;}.but {position: absolute; background: #dfeffc; border: 1px solid #86B5D9; color: #2e6e9e; -moz-border-radius: 3px; -webkit-border-radius: 3px; width: 99%; height: 99%; top:0%; left:0%; z-index:-1;}.ui-icon { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat; } .ui-icon { width: 16px; height: 16px; background-image: url(http://tetuan.dia.fi.upm.es/images/ui-icons_cd0a0a_256x240.png);} .ui-state-default .ui-icon { background-image: url(http://tetuan.dia.fi.upm.es/images/ui-icons_cd0a0a_256x240.png); } .ui-icon-close{background-position: -80px -128px;} .ui-state-default, .ui-widget-content .ui-state-default { border: 1px solid #c5dbec; background: #dfeffc url(http://tetuan.dia.fi.upm.es/images/ui-bg_glass_85_dfeffc_1x400.png) 50% 50% repeat-x; font-weight: bold; color: #2e6e9e; outline: none; } .ui-corner-all { -moz-border-radius: 5px; -webkit-border-radius: 5px; }</style>");
			//$("span[id^='gate_']", $(iframeDoc)).attr('class', 'dynacloud');
                        $("span[gateid]", $(iframeDoc)).attr('class', 'dynacloud');
			$(iframeDoc).dynaCloud();
			$("a.dyna > span","#dynacloud").hover(function (){
				$(this).toggleClass("t12");
				},function (){$(this).toggleClass("t12");}).draggable({
					appendTo: 'body',
					iframeFix: true,
					cancel: 'a.ui-icon',// clicking an icon won't initiate dragging
					revert: 'invalid', // when not dropped, the item will revert back to its initial position
					helper: 'clone',
					cursor: 'move',
					start: function(e, ui)
 					{
  						$(ui.helper).addClass("t12");
 					},
					opacity: 	0.4
				});
			$("#drop").droppable({

		      		drop: function() {var atr=$("span.ui-draggable.t12").text();
						$(this).append("<span>"+atr+"</span>");}
		    		});

		$(iframeDoc).contextMenu('miMenu', {
			onContextMenu: function(e){
			txto = getSelText(iframe);
			if (txto) {
				return true;
				}
				else {
				return false;
				}},
				bindings: {
					'save': function(t){
						alert('Trigger was ' + t.id + '\nAction was Guardar al Disco');
					},
					'copy': function(t){
						//alert('Trigger was ' + t.id + '\nAction was Guardar Texto');
						imprimeEnDiv(txto);
					},
					'copy2': function(t){
						alert('Trigger was ' + t.id + '\nAction was Guardar en Html');
					},
					'copy3': function(t){
						alert('Trigger was ' + t.id + '\nAction was Guardar en Rdf');
						},
					'delete': function(t){
						alert('Trigger was ' + t.id + '\nAction was Delete');
						}
		}
	});

		function getSelText(iframe){
			if (iframe.contentWindow.getSelection)//Para Mozilla
			{
				return iframe.contentWindow.getSelection().toString();
			}
			else if (iframe.contentDocument.getSelection)//para IExplorer
			{
				return iframe.contentDocument.getSelection();
			}
			else if (iframe.contentDocument.selection)//para IExplorer
			{
				return iframe.contentDocument.selection.createRange().text;
			}
			else return;
			}

			loadTitles(); //funcion que carga los titles en jquery
			var idx;

			for (idx in titles) {
				$("span[title='" + idx + "']", $(iframeDoc)).removeAttr("style");
				$("#opciones").append("<p><div></div><a href='javascript: void(toggleOpcionI(\"" + idx + "\"))' title =" + idx + ">" + idx + "</a></p>");
				toggleOpcionW(idx);
				toggleLeyenda(idx);
				removeToggle(idx);
			}
		});

	});
		
				


