$(function() {
    $('#grid-home').hover(
		function () {
			$('#home-link').addClass('show')
			$('#home-link').removeClass('hide')
		},
		function () {
			$('#home-link').addClass('hide')
			$('#home-link').removeClass('show')
		});
    $('#grid-clients').hover(
		function () {
			$('#clients-link').addClass('show')
			$('#clients-link').removeClass('hide')
		},
		function () {
			$('#clients-link').addClass('hide')
			$('#clients-link').removeClass('show')
		});
});

 
