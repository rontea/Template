// JavaScript Document

/* Sidenav on/off */

$(document).ready(function () {

// sidenavOverlay();
//var backgroundColor = "rgba(0,0,0,0.4)";
//pushContent(true,backgroundColor);
pushContent(false);
//pushFullContent()

/* Slide Overlay wuth animation param transition*/
	function sidenavOverlay(transition){

		if(transition == null){
			$('.sidenav').css("transition","0.5s");
		}else{
			$('.sidenav').css("transition",""+transition+"s");
		}

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
			$(this).removeClass('active');
		});

	};

/* Push off-canvas bool = true with opacity */

	function pushContent(bool,backgroundColor,position){

		$('.sidenav-click-open').click(function() {

				if($(this).hasClass('active')){
					$('.sidenav').css("width","0");
					$('#main').css("margin-left","0");
					$(this).removeClass('active');
						if (bool == true){
								$('body').css("backgroundColor","white");
						}

				}else{
					$('.sidenav').css("width","250px");
					$('#main').css("margin-left","250px");
					$(this).addClass('active');
						if (bool == true){
								$('body').css("backgroundColor",""+backgroundColor+"");
						}
				}
		});

		$('.sidenav-click-close').click(function() {

			$('.sidenav').css("width","0");
			$(this).removeClass('active');

			if (bool == true){
				$('body').css("backgroundColor","white");
			}

		});
	};

	function pushFullContent(){
		$('.sidenav-click-open').click(function() {

				if($(this).hasClass('active')){
					$('.sidenav').css("width","0");
					$(this).removeClass('active');


				}else{
					$('.sidenav').css("width","100%");
					$(this).addClass('active');

				}
		});

		$('.sidenav-click-close').click(function() {

			$('.sidenav').css("width","0");
			$(this).removeClass('active');

		});
	};



});
