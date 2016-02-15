$(function() {
    $('.sub-heading').on('click', function(){
    	$(this).closest('.stuff').find('.content').toggle(":hide");
    });

    $('.slick').slick({
    	arrows: false,
    	dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		centerMode: true
	});

});

 
