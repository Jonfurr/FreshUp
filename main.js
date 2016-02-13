$(function() {
    $('.sub-heading').on('click', function(){
    	$(this).closest('.stuff').find('.content').toggleClass('hide');
    });
    $('td').on('mouseenter', function(){
    	if ($(this).hasClass('bingo')) {
    		$(this).css({'background-color':'#fff'})
    	}
    	else {
    	$(this).css({'background-color':'#green'})
    	}
    });
    $('td').on('mouseleave', function(){
    	if ($(this).hasClass('bingo')) {
    		$(this).css({'background-color':'#fff'})
    	}
    	else {
    		$(this).css({'background-color':'green'})
    		$(this).animate({'width': '5px', 'height': '5px'}, 1000);
    	}
    });
});

 
