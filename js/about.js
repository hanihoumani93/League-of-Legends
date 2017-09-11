$(document).ready(function() {
	$("#aboutBtn").click(function(event) {
		if ($('.aboutdv').is(":hidden")) {
			$('.contactdv').slideUp('slow');
			$('#chm').slideUp('fast');
			$('.aboutdv').slideDown('slow');
			

		}else{
			$('.contactdv').slideUp('slow');
			$('.aboutdv').slideUp('slow');
		}
	});

	$("#contactBtn").click(function(event) {
		if ($('.contactdv').is(":hidden")) {
			$('.aboutdv').slideUp('slow');
			$('#chm').slideUp('fast');
			$('#results').slideUp('fast');
			$('.contactdv').slideDown('slow');
			

		}else{
			$('.aboutdv').slideUp('slow');
			$('.contactdv').slideUp('slow');
		}
});
	

	$('#close').click(function(event) {
		$(this).fadeOut('slow');
		$('.championsinfo').slideUp('slow');
	});

	$('#ch').toggle(function() {
		$('.aboutdv').slideUp('fast');
		$('.contactdv').slideUp('fast');
		$('#results').slideUp('fast');
		
		$('#chm').slideDown('slow');
	
	}, function() {
		$('#chm').stop(true,true).slideUp('slow');
	});
   
   $('#show').click(function(event) {
   	 $('#showmore').slideDown('slow');
   	 $('#less').show();
   	 $('#show').hide();
   });

   $('#less').click(function(event) {
   	 $('#showmore').slideUp('slow');
   	 $('#less').hide();
   	 $('#show').show();
   });
   
   $('input#search').live('keyup', function(event) {

   	if ($('#results').is(':hidden')) {
   		$('#aboutdv').slideUp('slow');
   		$('#contactdv').slideUp('slow');
   		$('#chm').slideUp('fast');
   		$('#results').slideDown('slow');
   		
   	}

   	 var search_string = $(this).val();
   	 if (search_string !== '') {
   	 	$.ajax({
   	 		url: 'inc/search.php',
   	 		type: "POST",
   	 		cache: false,
   	 		data: {search: search_string},
   	 		success: function(data){
   	 			$('div#results').html(data);
   	 		}
   	 	});
   	 	
   	 }else{
   	 	$('#results').slideUp('slow');
   	 }
   	 return false;
   });

   $('#submit').click(function(event) {

   	$('#ok').css('color', '#A6A616');
     var name = $('#name').val();
     var mobile = $('#mobile').val();
     var email = $('#email').val();
     var text = $('#textarea').val();
     if (name !== '' && mobile !== '' && email !== '' && text !== '') {
     	$.ajax({
   	 		url: 'inc/contact.php',
   	 		type: "POST",
   	 		cache: false,
   	 		data: {name: name, mobile: mobile, email: email, text: text},
   	 		success: function(data){
   	 			$('#ok').fadeIn(4000).html(data);
   	 	        $('#ok').fadeOut(4000);
   	 		}
   	 	});
   	   

   	  $('#name').attr('value', '');
      $('#mobile').attr('value', '');
      $('#email').attr('value', '');
      $('#textarea').attr('value', '');

   	 }else{
   	 	$('#ok').css('color', 'red').fadeIn().html('Error! Check missing fields');
   	 	$('#ok').fadeOut(10000);
   	 }
   	 

   });
	
});

function championinfo (name){

		$.post('php/championinfo.php', {name:name}, function(data) {
			if ($('#infohere').is(':hidden')) {
				$('#infohere').slideDown('slow');
				$('#infohere').html(data);
                $('#close').fadeIn('slow');
		  

			}else{
				$('#infohere').html(data);
			}
			
		});
	}
