let data = document.getElementById('data');
let botao = document.getElementById('botao');

var dados = new FormData();

dados.append('data');

botao.addEventListener("click", function(resultado){
    resultado.preventDefault();

    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod',
        type:'GET',
        data: dados,
        processData: false;
        contentType: false,
        success: function(response) {
        },

    });
    console.log(response);
})
