/*!
 * BeefUp v1.1.6 - A jQuery Accordion Plugin
 * Copyright 2016 Sascha KÃ¼nstler http://www.schaschaweb.de/


 */

    $(function() {
        $('.beefup').beefup({
        	openSingle: true, 
        	animation: 'slide',
        	closeSpeed: 400,
        	openSpeed: 400,
        });
        
    });


!function(a){"use strict";var b={};b.defaults={trigger:".beefup__head",content:".beefup__body",openClass:"is-open",animation:"slide",openSpeed:200,closeSpeed:200,scroll:!1,scrollSpeed:400,scrollOffset:0,openSingle:!1,stayOpen:null,selfClose:!1,hash:!0,breakpoints:null,onInit:function(){},onOpen:function(){},onClose:function(){},onScroll:function(){}},b.methods={getVars:function(c){var d=a.extend(!0,{},c.data("beefup"),c.data("beefup-options"));return d.breakpoints&&(d=b.methods.getResponsiveVars(d)),d},getResponsiveVars:function(b){var c=window.innerWidth||a(window).width();return b.breakpoints.sort(function(a,b){return a.breakpoint<b.breakpoint?-1:a.breakpoint>b.breakpoint?1:0}),a.each(b.breakpoints,function(d,e){c>e.breakpoint&&(b=a.extend({},b,e.settings))}),b},animation:function(a,b,c,d){switch(a){case"slideDown":b.slideDown(c,d);break;case"slideUp":b.slideUp(c,d);break;case"fadeIn":b.fadeIn(c,d);break;case"fadeOut":b.fadeOut(c,d);break;case"show":b.show(c,d);break;case"hide":b.hide(c,d)}},getStayOpen:function(a,b){var c;return"number"==typeof b?c=a.eq(b):"string"==typeof b&&(c=a.filter(b)),c},selfClose:function(c,d){a(document).on("click",function(e){var f;a(e.target).closest(c).length||(f=c.filter("."+d.openClass),null!==d.stayOpen&&(f=f.not(b.methods.getStayOpen(c,d.stayOpen))),f.length&&c.close(f))})},hash:function(b,c){var d=function(){var a=b.filter(window.location.hash);a.length&&!a.hasClass(c.openClass)&&b.click(a)};d(),a(window).on("hashchange",d)}},a.fn.beefup=function(c){var d=this;return this.open=function(c,e){return c&&c.length||(c=d),c.each(function(){var c=a(this),d=b.methods.getVars(c),f=c.find(d.content+":first"),g="slide"===d.animation?"slideDown":"fade"===d.animation?"fadeIn":"show";b.methods.animation(g,f,d.openSpeed,function(){c.addClass(d.openClass),f.css("overflow",""),e&&"function"==typeof e&&e(),d.onOpen&&"function"==typeof d.onOpen&&d.onOpen(c)})}),d},this.close=function(c,e){return c&&c.length||(c=d),c.each(function(){var c=a(this),d=b.methods.getVars(c),f=c.find(d.content+":first"),g="slide"===d.animation?"slideUp":"fade"===d.animation?"fadeOut":"hide";b.methods.animation(g,f,d.closeSpeed,function(){c.removeClass(d.openClass),f.css("overflow",""),e&&"function"==typeof e&&e(),d.onClose&&"function"==typeof d.onClose&&d.onClose(c)})}),d},this.scroll=function(c){var e=b.methods.getVars(c);return a("html, body").animate({scrollTop:c.offset().top+e.scrollOffset},e.scrollSpeed).promise().done(function(){e.onScroll&&"function"==typeof e.onScroll&&e.onScroll(c)}),d},this.click=function(a){var c=b.methods.getVars(a);return c.openSingle&&(null!==c.stayOpen?d.close(d.not(a).not(b.methods.getStayOpen(d,c.stayOpen))):d.close(d.not(a))),a.hasClass(c.openClass)?d.close(a):d.open(a,function(){c.scroll&&d.scroll(a)}),d},this.each(function(e,f){var g=a(f),h=a.extend({},b.defaults,c,g.data("beefup-options"));g.data("beefup")||(g.data("beefup",h),h.breakpoints&&(h=b.methods.getResponsiveVars(h)),null!==h.stayOpen&&g.is(b.methods.getStayOpen(d,h.stayOpen))&&g.addClass(h.openClass),g.not("."+h.openClass).find(h.content+":first").hide(),h.onInit&&"function"==typeof h.onInit&&h.onInit(g),g.on("click",h.trigger+":first",function(a){a.preventDefault(),d.click(g)}),0===e&&(h.hash&&b.methods.hash(d,h),h.selfClose&&b.methods.selfClose(d,h)))})}}(jQuery);

