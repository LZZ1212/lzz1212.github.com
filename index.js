$(window).on('load',function(){

    $('.loader').fadeOut('fast',function(){});
    $('.container').fadeIn('fast',function(){});

})
$('document').ready(function(){
  
    var vw;
    $(window).resize(function(){

        vw = $(window).width()/2;

    })
    $('#turn_on').click(function(){
        var duration = 0.3,
        delay = 0.08;
        TweenMax.to(this, duration, {scaleY: 1.6, ease: Expo.easeOut});
        TweenMax.to(this, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
        TweenMax.to(this, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
             $(".liwu1").fadeIn('slow').delay(1000).promise().done(function(){
                    $('.liwu1').fadeOut('slow').delay(100).promise().done(function(){
                        $(".liwu2").fadeIn("slow");
                        $('#play').fadeIn('slow');   
                       
                    });
                  
             });   
		});
	});

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        var duration = 0.3,
        delay = 0.08;
        TweenMax.to(this, duration, {scaleY: 1.6, ease: Expo.easeOut});
        TweenMax.to(this, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
        TweenMax.to(this, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
        $(this).fadeOut('slow');
        $(".liwu2").css('visibility','hidden').delay(100).promise().done(function(){
            $('.paishou').fadeIn(400,function(){}).delay(5000).promise().done(function(){
                $('.balloon-border').animate({top:-500},8000);
                $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
                $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two')
                loopOne();
                loopTwo();
                loopThree();
                loopFour();
                loopFive();
                loopSix();
                loopSeven();
                $('body').addClass('bac');
                  
                setTimeout(function(){
                    $('#wish_message').fadeIn("slow");
                },10000)
             
            })
        });
        
        

    })

	function loopOne() {
		var randleft = 100*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}




    $('#wish_message').click(function(){
        var duration = 0.3,
        delay = 0.08;
        TweenMax.to(this, duration, {scaleY: 1.6, ease: Expo.easeOut});
        TweenMax.to(this, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
        TweenMax.to(this, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
        vw1 = $(window).height();
        vw= $(window).width();
       $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
       $('#b1').attr('id','b11');
       $('#b2').attr('id','b22')
       $('#b3').attr('id','b33')
       $('#b4').attr('id','b44')
       $('#b5').attr('id','b55')
       $('#b6').attr('id','b66')
       $('#b7').attr('id','b77')
       $('#b11').animate({top: 0,left:vw/2-75},500);
       $('#b22').animate({top: vw1*0.14, left:vw/2-75},500);
       $('#b33').animate({top: vw1*0.28,left:vw/2-75},500);
       $('#b44').animate({top: vw1*0.42, left:vw/2-75},500);
       $('#b55').animate({top: vw1*0.54, left:vw/2-75},500);
       $('#b66').animate({top: vw1*0.66,left:vw/2-75},500);
       $('#b77').animate({top: vw1*0.78, left:vw/2-75},500);
       $('.balloons').css('opacity','0.9');
       $('.balloons h2').fadeIn(3000);
       $(this).fadeOut('slow').delay(2000).promise().done(function(){
            $('.balloons').fadeOut('2000',function(){});
            $('body').addClass("body")
            $('.container').fadeOut('3000',function(){
                $('.container1').fadeIn('slow',function(){
       });
    });   
 })
 $('.box').click(function(){
  
    $('.container1 .box').css("transform","scaleY(1)")
    $('.container1 .box').css("transition","transform 0.5s")
    $('.container1 .box h2').addClass("clickBoxH2")
    $('.container1 .box h3').css('visibility','hidden')
    $(this).css('pointer-events','none');
    $(this).addClass("clickbox")
    $('.chuo').fadeOut('fast',function(){})
    $('.disnone').fadeIn('slow',function(){
        $('.container1 .box p').css('color','#fff')
       
        var typed = new Typed('.element', {
            strings: [
            '12.12^1000\n李珍珍^1000\n生日快乐😀 ^1000\n'+
            "送给你^1000\nhttps://lizhenzhen.fun ^3000\n"+
        
            '\n我希望啊\n^1000李珍珍这个小傻子每天都f\n',
            '12.12\n李珍珍\n生日快乐😀 \n'+
            "送给你\nhttps://lizhenzhen.fun \n"+
            '\n我希望啊\n李珍珍每天都fun😊^3000\n'+
            '我还希望^2000\n'+
            '你啊^1000能过上自己想要的生活^3000\n'+
            '这个域名会保存10年那^3000\n10年后的祝福留着我10年后祝吧😜^3000\n\n\n'+
            '一^1000直^500都^1000在^500\n'
        ],   
            // ^1000 控制等待的时间    
            typeSpeed: 100,
            backSpeed: 100,
            smartBackspace:true
            // loop: true   // 循环
        });
    })
    });
 })
})
