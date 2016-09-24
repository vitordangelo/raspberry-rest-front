// $(document).ready(function(){
//     $.getJSON("http://localhost:8000/api/v1/dht11",
//     function(result){
//         var ultimoValorLido = result.data.length;
//         var temperatura = result.data[ultimoValorLido - 1].temperatura;
//         console.log(result.data[ultimoValorLido - 1].temperatura);
//         $('.count').text(temperatura);
//         $(".on").css("height", 2*temperatura + '%');
//     });
// });

$(document).ready(function(){
    var refreshId = setInterval( function()
        {
            $.getJSON("http://138.68.54.156:1510/api/v1/dht11",
            function(result){
                var ultimoValorLido = result.data.length;
                var temperatura = result.data[ultimoValorLido - 1].temperatura;
                var dataultimaLeitura = result.data[ultimoValorLido - 1].created_at;


                console.log(result.data[ultimoValorLido - 1].temperatura);
                $('.count').text(temperatura + 'ºC');
                $('.data').text(dataultimaLeitura);
                $(".on").css("height", 2*temperatura + '%');
            });
        }, 5000);
});
