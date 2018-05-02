
$( document ).ready(function() {
    
    $('#miboton').on('click', function () {
        var aux = $("#numpersonas").val();
        
        $.ajax({
            url: 'https://randomuser.me/api/?results=' + aux,
            dataType: 'json',
            success: function(datos) {
                $('#personas').empty();
                $.each(datos.results, function(k, v) {
                    $('#personas').append(v.name.first+' '+v.name.last);
                    $('#personas').append(' '+v.email);
                    $('#personas').append(' '+v.location.city);
                    $('#personas').append(' '+v.phone);
                    $('#personas').append(' '+v.phone);
                    $('#personas').append('<img class="rounded-circle" src="'+ v.picture.large +'"alt="">');
                    $('#personas').append('<br>');
                })
                /*$("#personas").text(v.email);
                console.log(datos);*/
                }
        });
    });
});




       /* $('#personas' ).text("Hola, soy yo");
    });*/
    

/*$( "#miboton1" ).mouseover(function() {
    $( '#micapa' ).append('<p>Este es el nuevo texto</p>'); */
