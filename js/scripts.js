$(document).ready(function(){
	
	$('aside li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('aside li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

})
