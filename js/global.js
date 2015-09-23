$( document ).ready(function() {
	var clicked = 0;
	
	
	resize();
	
	$(window).on('resize', function() {
		resize();
	});
	

	$(function() {
	    $('.banner').unslider({dots: true,});
	});
	
	var unslider = $('.banner').unslider();
	    
	    $('.unslider-arrow').click(function() {
	        var fn = this.className.split(' ')[1];
	        
	        //  Either do unslider.data('unslider').next() or .prev() depending on the className
	        unslider.data('unslider')[fn]();
	    });
	    
	$('body').css('margin', '0px');
	
	$( "li.portfolio-nav" ).click(function() {
		if($(window).width()<=480){
		$(".left-menu").animate({
				"margin-left": "0px"
			}, 500);
		$("div.section").animate({
					"margin-left": "0px",
							"margin-right": "0px"
				}, 500);
		clicked=0;
		}
			
		$("li.about-nav").css("text-decoration", "none");
		$("li.about-nav").css("font-weight", "normal");
		$("li.home-nav").css("text-decoration", "none");
		$("li.home-nav").css("font-weight", "normal");
  		$(this).css("text-decoration", "underline");
  		$(this).css("font-weight", "bold");
	});
	
	$( "li.home-nav" ).click(function() {
		if($(window).width()<=480){
		$(".left-menu").animate({
			"margin-left": "0px"
		}, 500);
		$("div.section").animate({
					"margin-left": "0px",
							"margin-right": "0px"
				}, 500);
		clicked=0;
		}
		$("li.about-nav").css("text-decoration", "none");
		$("li.about-nav").css("font-weight", "normal");
		$("li.portfolio-nav").css("text-decoration", "none");
		$("li.portfolio-nav").css("font-weight", "normal");
			$(this).css("text-decoration", "underline");
			$(this).css("font-weight", "bold");
	});

	$( "li.about-nav" ).click(function() {
		if($(window).width()<=480){
		$(".left-menu").animate({
				"margin-left": "0px"
			}, 500);
		$("div.section").animate({
					"margin-left": "0px",
							"margin-right": "0px"
				}, 500);
		clicked=0;
		}
		$("li.home-nav").css("text-decoration", "none");
		$("li.home-nav").css("font-weight", "normal");
		$("li.portfolio-nav").css("text-decoration", "none");
		$("li.portfolio-nav").css("font-weight", "normal");
  		$(this).css("text-decoration", "underline");
  		$(this).css("font-weight", "bold");	
  		
  	});

  		
  		  	
  	$("div#home>div.info").hover(
  	  function() {
  	    $("div#home>div.info>img").animate({"right":"+=200px"},500,function(){});
  	     $("div#home>div.info>div").animate({"right":"+=200px"},500,function(){});
  	  }, function() {
  	    $("div#home>div.info>img").animate({"right":"-=200px"}, 500, function(){}); 
  	     $("div#home>div.info>div").animate({"right":"-=200px"},500,function(){}); 	  }
  	);
  	
  	
  		$(".icon").click(function(){
  			
  			if(clicked){
  				$(".left-menu").animate({
  					"margin-left": "0px"
 				}, 500);
 				$("div.section").animate({
 						"margin-left": "0px",
 							"margin-right": "0px"
 					}, 500);
  				clicked=0;
  				}
 			else{
 				$(".left-menu").animate({
  					"margin-left": "150px"
  				}, 500);
  				$("div.section").animate({
  							"margin-left": "150px",
  							"margin-right": "-150px"
  						}, 500);
  				clicked=1;
  			}
  		});
  		
  		  $('.slider1').bxSlider({
  		    slideWidth: 200,
  		    minSlides: 2,
  		    maxSlides: 3,
  		    slideMargin: 10
  		  });
  		  
  		 $('.slider2').bxSlider({
  		     slideWidth: 200,
  		     minSlides: 2,
  		     maxSlides: 3,
  		     slideMargin: 10
  		   });
  		$('.slider3').bxSlider({
  		    slideWidth: 200,
  		    minSlides: 2,
  		    maxSlides: 3,
  		    slideMargin: 10
  		  });

});

function resize() {
	
    $ww		= $(window).width() - 180;
    $wh		= $(window).height()*1.46789;
    
    if($(window).height()> 600){
    	 $('#ham-menu').css({'height': $(window).height()});
    }
     
    if($(window).width()<480){
    	$ww+=300;
    }
    
    if($(window).width()>768){
    	$('div.section').css({'margin-left':'180px'});
    } 
    else{
    	$('div.section').css({'margin-left':'0px'});
    }
     
    if($ww > 588){
    	if($ww > $wh){
    		$('img.main').css({'width':$ww,'height':'auto','max-width':$ww});				
    	} else {
    		$('img.main').css({'width':'auto','height':$(window).height(),'max-width':'none'});
    	}
    }
    
    else{
    	$ww+=180;
    	if($ww > $wh){
    		$('img.main').css({'width':$ww,'height':'auto','max-width':$ww});				
    	} else {
    		$('img.main').css({'width':'auto','height':$(window).height(),'max-width':'none'});
    	}
    }
}

/**
 *   Unslider by @idiot
 */
 
(function($, f) {
	//  If there's no jQuery, Unslider can't work, so kill the operation.
	if(!$) return f;
	
	var Unslider = function() {
		//  Set up our elements
		this.el = f;
		this.items = f;
		
		//  Dimensions
		this.sizes = [];
		this.max = [0,0];
		
		//  Current inded
		this.current = 0;
		
		//  Start/stop timer
		this.interval = f;
				
		//  Set some options
		this.opts = {
			speed: 500,
			delay: 3000, // f for no autoplay
			complete: f, // when a slide's finished
			keys: !f, // keyboard shortcuts - disable if it breaks things
			dots: f, // display ••••o• pagination
			fluid: f // is it a percentage width?,
		};
		
		//  Create a deep clone for methods where context changes
		var _ = this;

		this.init = function(el, opts) {
			this.el = el;
			this.ul = el.children('ul');
			this.max = [el.outerWidth(), el.outerHeight()];			
			this.items = this.ul.children('li').each(this.calculate);
			
			//  Check whether we're passing any options in to Unslider
			this.opts = $.extend(this.opts, opts);
			
			//  Set up the Unslider
			this.setup();
			
			return this;
		};
		
		//  Get the width for an element
		//  Pass a jQuery element as the context with .call(), and the index as a parameter: Unslider.calculate.call($('li:first'), 0)
		this.calculate = function(index) {
			var me = $(this),
				width = me.outerWidth(), height = me.outerHeight();
			
			//  Add it to the sizes list
			_.sizes[index] = [width, height];
			
			//  Set the max values
			if(width > _.max[0]) _.max[0] = width;
			if(height > _.max[1]) _.max[1] = height;
		};
		
		//  Work out what methods need calling
		this.setup = function() {
			//  Set the main element
			this.el.css({
				overflow: 'hidden',
				width: _.max[0],
				height: this.items.first().outerHeight()
			});
			
			//  Set the relative widths
			this.ul.css({width: (this.items.length * 100) + '%', position: 'relative'});
			this.items.css('width', (100 / this.items.length) + '%');
			
			if(this.opts.delay !== f) {
				this.start();
				this.el.hover(this.stop, this.start);
			}
			
			//  Custom keyboard support
			this.opts.keys && $(document).keydown(this.keys);
			
			//  Dot pagination
			this.opts.dots && this.dots();
			
			//  Little patch for fluid-width sliders. Screw those guys.
			if(this.opts.fluid) {
				var resize = function() {
					_.el.css('width', Math.min(Math.round((_.el.outerWidth() / _.el.parent().outerWidth()) * 100), 100) + '%');
				};
				
				resize();
				$(window).resize(resize);
			}
			
			if(this.opts.arrows) {
				this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>')
					.find('.arrows span').click(function() {
						$.isFunction(_[this.className]) && _[this.className]();
					});
			};
			
			//  Swipe support
			if($.event.swipe) {
				this.el.on('swipeleft', _.prev).on('swiperight', _.next);
			}
		};
		
		//  Move Unslider to a slide index
		this.move = function(index, cb) {
			//  If it's out of bounds, go to the first slide
			if(!this.items.eq(index).length) index = 0;
			if(index < 0) index = (this.items.length - 1);
			
			var target = this.items.eq(index);
			var obj = {height: target.outerHeight()};
			var speed = cb ? 5 : this.opts.speed;
			
			if(!this.ul.is(':animated')) {			
				//  Handle those pesky dots
				_.el.find('.dot:eq(' + index + ')').addClass('active').siblings().removeClass('active');

				this.el.animate(obj, speed) && this.ul.animate($.extend({left: '-' + index + '00%'}, obj), speed, function(data) {
					_.current = index;
					$.isFunction(_.opts.complete) && !cb && _.opts.complete(_.el);
				});
			}
		};
		
		//  Autoplay functionality
		this.start = function() {
			_.interval = setInterval(function() {
				_.move(_.current + 1);
			}, _.opts.delay);
		};
		
		//  Stop autoplay
		this.stop = function() {
			_.interval = clearInterval(_.interval);
			return _;
		};
		
		//  Keypresses
		this.keys = function(e) {
			var key = e.which;
			var map = {
				//  Prev/next
				37: _.prev,
				39: _.next,
				
				//  Esc
				27: _.stop
			};
			
			if($.isFunction(map[key])) {
				map[key]();
			}
		};
		
		//  Arrow navigation
		this.next = function() { return _.stop().move(_.current + 1) };
		this.prev = function() { return _.stop().move(_.current - 1) };
		
		this.dots = function() {
			//  Create the HTML
			var html = '<ol class="dots">';
				$.each(this.items, function(index) { html += '<li class="dot' + (index < 1 ? ' active' : '') + '">' + (index + 1) + '</li>'; });
				html += '</ol>';
			
			//  Add it to the Unslider
			this.el.addClass('has-dots').append(html).find('.dot').click(function() {
				_.move($(this).index());
			});
		};
	};
	
	//  Create a jQuery plugin
	$.fn.unslider = function(o) {
		var len = this.length;
		
		//  Enable multiple-slider support
		return this.each(function(index) {
			//  Cache a copy of $(this), so it 
			var me = $(this);
			var instance = (new Unslider).init(me, o);
			
			//  Invoke an Unslider instance
			me.data('unslider' + (len > 1 ? '-' + (index + 1) : ''), instance);
		});
	};
})(window.jQuery, false);