// ==== HOMEPAGE SLIDER ==== //
    
	// slider javascript
    
    $(function() {
    $('.hero').unslider();
    });
    
    // next / previous function slider
    
    var unslider = $('.hero').unslider();
    
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });
    
    // unslider options
    
    $('.hero').unslider({
	speed: 800,               //  The speed to animate each slide (in milliseconds)
	delay: 3000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: false,               //  Display dot navigation
	fluid: false              //  Support responsive design. May break non-responsive designs
    });
    