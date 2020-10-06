$(document).ready(function(){
    

    $('.category_list .category_item[category="all"]').addClass('ct_item_active');

    //Filtrar
    $('.category_item').click(function (){
        //Agregando variables y agregando al html
        var catAsesor = $(this).attr('category');
        $('.category_item').removeClass('ct_item_active');
        $(this).addClass('ct_item_active');

        //Ocultando
        $('.product-item').css('transform','scale(0)')
        function hideAsesor(){
            $('.product-item').hide();
        }setTimeout(hideAsesor,400);
        
        //Mostrando
        function showAsesor(){
            $('.product-item[category="'+catAsesor+'"]').show();
            $('.product-item[category="'+catAsesor+'"]').css('transform','scale(1)')
        }setTimeout(showAsesor,400);

    });

    //Mostrar todos
    $('.category_item[category="all"]').click(function (){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform','scale(1)')
        }setTimeout(showAll,400);
        
    });



});