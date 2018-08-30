$(function(){

    $('.design-editor .design-editor-body a.design-editor-btn').click(function(){
        $('.design-editor').toggleClass('open');
        return false;
    });

    $('a.design-editor-reset').click(function(){
        $('.design-editor .design-editor-body .radio input[type="radio"]').prop('checked', false);
        $('body').removeClass('right-sidebar left-sidebar');
        $('.design-editor').removeClass('open');
        return false;
    });

    $('.design-editor .design-editor-body .radio input[type="radio"]').click(function(){
        var vl = $(this).val(),
            body = $('body');
        if(vl == 'left'){
            body.removeClass('right-sidebar')
                .addClass('left-sidebar');
        }else if(vl == 'right'){
            body.removeClass('left-sidebar')
                .addClass('right-sidebar');
        }
    });

});