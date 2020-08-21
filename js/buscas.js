/*javascript para paginação da tabela*/
$('#oculto').hide();
/*codigo para estabelecer numero de paginas*/
$(document).ready(function(){
    $('#tabela').after('<div id="nav" ></div>');
    var rowsShown = 20;
    var rowsTotal = $('#tabela tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        /*criação da numeração das paginas*/
        $('#nav').append('<a href="#" rel="'+i+'" style="color: #72EFDB;">'+pageNum+'</a> ');
    }
    /*seleção das rows visiveis*/
    $('#tabela tbody tr').hide();
    $('#tabela tbody tr').slice(0, rowsShown).show();
    /*link ativo da numeração*/
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#tabela tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 500);
    });
});