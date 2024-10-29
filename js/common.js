$('.toggle_btn').click(function(){
	$('aside').toggleClass('active')
	$('body').toggleClass('lock')
	$(this).toggleClass('active')
})
$(document).ready(function () {
	// Сначала скрываем блок
	$('.fade-in-after').css('opacity', 0);
	$('.fade-in-block').css('opacity', 0);
	$('.fade-in').css('opacity' , 0);
	$(window).on('scroll', function () {
			$('.fade-in-block').each(function () {
					let blockTop = $(this).offset().top; // Верх блока
					let triggerPoint = blockTop + 400; // Отмечаем точку активации на 300 пикселей выше блока
					let scrollBottom = $(window).scrollTop() + $(window).height(); // Нижняя граница видимой области

					// Проверяем, достиг ли скролл триггерной точки
					if (scrollBottom > triggerPoint) {
							$(this).animate({ opacity: 1 }, 800); // Плавное появление в течение 800 мс
					}
			});
			$
	});
	$('.fade-in').each(function () {
		let blockTop = $(this).offset().top; // Верх блока
		let triggerPoint = blockTop; // Точка активации
		let scrollBottom = $(window).scrollTop() + $(window).height(); // Нижняя граница видимой области

		// Проверяем, достигли ли триггерной точки
		if (scrollBottom > triggerPoint) {
				let $this = $(this);
				setTimeout(function () {
						$this.animate({ opacity: 1 }, 800); // Плавное появление в течение 800 мс после задержки
				}, 1000); // Задержка в 1 секунду (1000 мс)
		}
});
$('.fade-in-after').each(function () {
	let blockTop = $(this).offset().top; // Верх блока
	let triggerPoint = blockTop; // Точка активации
	let scrollBottom = $(window).scrollTop() + $(window).height(); // Нижняя граница видимой области

	// Проверяем, достигли ли триггерной точки
	if (scrollBottom > triggerPoint) {
			let $this = $(this);
			setTimeout(function () {
					$this.animate({ opacity: 1 }, 800); // Плавное появление в течение 800 мс после задержки
			}, 2000); // Задержка в 1 секунду (1000 мс)
	}
});
});
     // Находим элемент с картинкой
		 let $image = $('.scroll-image'); // Замените #myImage на id вашей картинки

		 // Добавляем событие на прокрутку страницы
		 $(window).scroll(function () {
				 // Получаем текущую позицию прокрутки
				 let scrollPos = $(this).scrollTop();
				 setTimeout(function () {
				 // Применяем translateY для вертикального перемещения
				 $image.css('transform', 'translateY(' + scrollPos * -0.02 + 'px)');
				}, 100); // Задержка в 1 секунду (1000 мс)
		 });
Fancybox.bind('[data-fancybox="gallery"]', {
	// Your custom options
});