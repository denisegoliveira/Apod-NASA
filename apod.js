const key = 'V5geNqQAIA1lVuA79kajO5Xu32I86xPbmjDyjdEq';

$('#botao').click(
    function() {
        var data = $('#data').val()
            $.ajax({
            url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
            type:'GET',
            success: function(result){

            $('#titulo').text(result.title)
            $('#imagem').attr('src', result.url)
            $('#texto').text(result.explanation)

            }
        })
    }
)



