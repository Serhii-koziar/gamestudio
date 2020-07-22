$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 14,
		slidesToScroll: 1,
		arrows:true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 10

			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 6
				
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 6,
				arrows:false

			}
		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow: 4,
				arrows:false

			}
		},
		{
			breakpoint: 350,
			settings: {
				slidesToShow: 3,
				arrows:false

			}
		}

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});
});
$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.menu__wrap,.menu_top_content__wrap,.menu_bot_content__wrap').toggleClass('active');
	});
});
