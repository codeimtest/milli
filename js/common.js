$('.toggle_btn').click(function(){
	$('aside').toggleClass('active')
	$('body').toggleClass('lock')
})

Fancybox.bind('[data-fancybox="gallery"]', {
	// Your custom options
});