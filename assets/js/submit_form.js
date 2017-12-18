function submitCommentForm(){
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var comment = $('#inputComment').val();
    if(comment.trim() == '' ){
        alert('Por favor introduzca su comentario.');
        $('#inputComment').focus();
        return false;
    }else{
        $.ajax({
            type:'POST',
            url:'submit_form.php',
            data:'commentFrmSubmit=1&comment='+comment,
            beforeSend: function () {
                $('.submitBtn').attr("disabled","disabled");
                $('.modal-body').css('opacity', '.5');
            },
            success:function(msg){
                if(msg == 'ok'){
                    $('#inputComment').val('');
                    $('.statusMsg').html('<span style="color:green;">Comentario ENVIADO :D.</p>');
                }else{
                    $('.statusMsg').html('<span style="color:red;">Ha ocurrido un problema, por favor, inténtelo más tarde</span>');
                }
                $('.submitBtn').removeAttr("disabled");
                $('.modal-body').css('opacity', '');
            }
        });
    }
}