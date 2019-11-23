$(function(){

	let N = 1;	
	

	function picChange_auto(){
		if(N < 3){
			N++;
		}else{
			N = 1;
		}
		// $('#banner').css('background-image','linear-gradient(to bottom, rgba(196, 214, 0, 0.5), rgba(236, 0, 140, 0.5)), url('+'img/JPG/img_hero_section'+ N + '.jpg');

		$('#banner'+ N).animate({opacity:'1'},1000);
	    $('#banner'+ N).siblings().removeAttr('style');
	    $('#banner'+ N).siblings().removeClass();
	    $('#banner'+ N).addClass('show');
	} 

	setInterval(picChange_auto,5000);

	$('#banner ol li').click(function(){
		var P = $(this).attr('class').substr(6,1);
		// $('#banner').css('background-image','linear-gradient(to bottom, rgba(196, 214, 0, 0.5), rgba(236, 0, 140, 0.5)), url('+'img/JPG/img_hero_section'+ P + '.jpg');
		$('#banner'+ P).siblings().removeAttr('style');
		$('#banner'+ P).siblings().removeClass();
		$('#banner'+ P).addClass('show');
		$(this).siblungs().removeAttr('style');
		$(this).css('opacity','1');
		return false;

	})

	$('.fa-angle-left').click(function(){
		if(N > 1){
			N--;
			// $('#banner').css('background-image','linear-gradient(to bottom, rgba(196, 214, 0, 0.5), rgba(236, 0, 140, 0.5)), url('+'img/JPG/img_hero_section'+ N + '.jpg');
			$('#banner'+ N).siblings().removeAttr('style');
	        $('#banner'+ N).siblings().removeClass();
	        $('#banner'+ N).addClass('show');


		}else{
			N = 3;
			// $('#banner').css('background-image','linear-gradient(to bottom, rgba(196, 214, 0, 0.5), rgba(236, 0, 140, 0.5)), url('+'img/JPG/img_hero_section'+ N + '.jpg');
			$('#banner'+ N).siblings().removeAttr('style');
	        $('#banner'+ N).siblings().removeClass();
	        $('#banner'+ N).addClass('show');
		}
		return false;
	})

		$('.fa-angle-right').click(function(){
		if(N < 3){
			N++;
			// $('#banner').css('background-image','linear-gradient(to bottom, rgba(196, 214, 0, 0.5), rgba(236, 0, 140, 0.5)), url('+'img/JPG/img_hero_section'+ N + '.jpg');
			$('#banner'+ N).siblings().removeAttr('style');
	        $('#banner'+ N).siblings().removeClass();
	        $('#banner'+ N).addClass('show');

		}else{
			N = 1;
			// $('#banner').css('background-image','linear-gradient(to bottom, rgba(196, 214, 0, 0.5), rgba(236, 0, 140, 0.5)), url('+'img/JPG/img_hero_section'+ N + '.jpg');
			$('#banner'+ N).siblings().removeAttr('style');
	        $('#banner'+ N).siblings().removeClass();
	        $('#banner'+ N).addClass('show');
		}
		return false;
	})

	$('body a').click(function(){
		return false;
	})

	$('.fa-bars').click(function(){
		$('.mobile_nav').toggle();
	})


	$('.a1').click(function(){
		$('.1').slideToggle();
	})

	$('.a2').click(function(){
		$('.2').slideToggle();
	})

	$('.a3').click(function(){
		$('.3').slideToggle();
	})

	$('.a4').click(function(){
		$('.4').slideToggle();
	})

	$('.a5').click(function(){
		$('.5').slideToggle();
	})

	$('.a6').click(function(){
		$('.6').slideToggle();
	})

	var width = $(window).width();

   $(window).on('resize', function() {
   if ($(this).width() != width) {
    width = $(this).width();
   console.log(width);}
   if(width > 1024){
   	$('.mobile_nav').removeAttr('style');
   }
});

  


})