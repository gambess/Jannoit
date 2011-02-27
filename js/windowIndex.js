$(function(){
				// Tabs
            $('#bienvenida').tabs();

            $('#dialog').dialog({
                    autoOpen: false,
                    resizable: false,
                    position: 'center',
                    modal: true,
                    width: 200,
                    buttons: {
                            "Enviar": function(){
                                    $("form",$(this)).submit();
                                    return true;

                            },
                            "Ninguno": function(){

                                            if ($('button:last').text() == "Todos") {
                                                    $(":checkbox").attr('checked', true);
                                                    $('button:last').text("Ninguno");
                                            }
                                            else
                                                    if ($('button:last').text() == "Ninguno") {
                                                        $(":checkbox").attr('checked', false);
                                                        $('button:last').text("Todos");
                                                    }

                            }
                    }
            });
            // Dialog Link
            $('#dialog_link').click(function(){

                    var value=$('#dialog_link').prev(":input[name='url[]']").val();
                    $("#dialog :input[name='url[]']").val(value);
                    $('#dialog').dialog('open');
                    return false;
            });
    });


