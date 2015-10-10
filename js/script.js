// JavaScript Document

$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
	
	if ($('').exists()) {
		
	}
	/*Scroll Bar*/
	if ($('.ScrollPanel').exists()) {
		$(".ScrollPanel").mCustomScrollbar({
			theme:"minimal-dark",
			scrollInertia: 100,
			advanced:{
			 autoScrollOnFocus: true
		   }
		});
	}
	
});