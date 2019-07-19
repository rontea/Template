// JavaScript Document

/* Sidenav on/off */

$(document).ready(function () {

	$('.sidenav-click-open').click(function() {

	
			if($(this).hasClass('active')){
				$('.sidenav').css("width","0");
				$(this).removeClass('active');
			
				
			}else{
				$('.sidenav').css("width","250px");
				$(this).addClass('active');
			}	

	});

	$('.sidenav-click-close').click(function() {

		$('.sidenav').css("width","0");

	});

});