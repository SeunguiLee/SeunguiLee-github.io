$(document).ready(function(){
	
	// mouseenter mouseleave
	// mouserover mouseout
	$('.menu .drop a').on('mouseenter',function(){
		
		$(this).siblings('.sub').addClass('active');
		$(this).addClass('on');
		
//		$('.sub').show();
//		$('.sub').stop().slideDown();
		// 기능구현
		/*$(this).siblings('.sub').show();
		$(this).siblings('.sub').animate({ top : '100%' , opacity : 1 });*/
	});
	
	$('.menu .drop').on('mouseleave',function(){
		
		$(this).children('.sub').removeClass('active');
		$(this).children('a').removeClass('on');
		
//		$('.sub').hide();
//		$('.sub').stop().slideUp();
		// 기능구현
		/*$(this).children('.sub').animate({ top : '120%' , opacity : 0 },function(){
			$('.sub').hide();
		});*/
	});
});


/*
slideDown, slidUp => 마우스를 왔다갔다 거리면 누적이되서 마우스를 가만히 놔둬도 계속 움직임.누적된만큼.
                    이것을 방지하기 위해서는 .stop (stop도 위험하긴 함)
                    
메뉴를 만들때 this개념 중요!☆
                    
animate와 hide는 연관성이 없음. animation에 콜백을 해줘야함! '이기능이 다 끝나면 실행하세요!'

제이쿼리 -> 익스클로러 낮은 버전도 호환댐 ㅋㅋ
*/
