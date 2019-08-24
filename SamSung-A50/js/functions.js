(function($){
	$(document).ready(function (){

		$('.of-iconmntop').click(function(){
			$('.of-menutop').toggleClass('of-mnshow');
		});

		$('.of-search').click(function(){
			$('.of-searchbox').show(200);
		});

		$('.of-closesearch').click(function(){
			$('.of-searchbox').hide(200);
		});
		$(window).scroll(function(){
			var height=$('.A50-section1').outerHeight();
			if($(window).scrollTop()>=height){
				$('.A50-navbar').addClass('A50-fixed');
			}
			else{
				$('.A50-navbar').removeClass('A50-fixed');
			}
		});
		$('.color-choose input').on('click', function() {
			var color = $(this).attr('data-image');
			$('.active').removeClass('active');
			$('.configuration-image img[data-image = ' + color + ']').addClass('active');
			$(this).addClass('active');
		});
		$(document).ready(function() {
    // ẩn tất cả các thẻ div với class="tab_content".
    $(".tab_content").hide();
    // Mặc định nội dung thẻ tab đầu tiên sẽ được hiển thị
    $(".tab_content:first").show();

    $("ul.mySlides li").click(function() {
        // gỡ bỏ class="active" cho tất cả các thẻ
        $("ul.mySlides li").removeClass("active");
        // chèn class="active" vào phần tử </li> vừa được click
        $(this).addClass("active");
        // ẩn tất cả thẻ với class="tab_content"
        $(".tab_content").hide();
        //Hiển thị nội dung thẻ tab được click với hiệu ứng Fade In
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();
    });
});
	});
	$(document).on('click','[toscroll]',function(e){
		e.preventDefault();
		var link = $(this).attr('toscroll');
		if($(link).length > 0){
			var posi = $(link).offset().top - 50;
			$('body,html').animate({scrollTop:posi},1000);
		}
	});


})(window.jQuery);