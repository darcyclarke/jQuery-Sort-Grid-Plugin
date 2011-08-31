/*!
 *
 * jQuery Sort Grid Plugin v.1.0
 * http://darcyclarke.me/dev/sortgrid/
 *
 * Copyright 2011, Darcy Clarke
 * Do what you want license
 * 
 */
jQuery.fn.sortGrid=function(a,b,c){var d=jQuery;b=typeof b!="number"?1e3:b;c=typeof c!="function"?function(){}:c;return this.each(function(){var e=d(this),f=e.children(),g={height:e.height(),width:e.width(),top:parseFloat(e.css("borderTopWidth"))+parseFloat(e.css("padding-top"))+"px",left:0},h;for(var i=f.length-1;i>=0;i--){h=f.eq(i);h.css({position:"absolute",top:h.position().top+"px",left:h.position().left+"px"})}d(this).queue(function(a){f.animate({top:g.top,left:g.left},b,function(){d(this).dequeue();a()})}).queue(function(){var d=g.top,h=g.left;for(var i=0;i<=f.length;i++){var j=f.eq(i);if(j.hasClass(a)){e.stop(true,false).animate({height:parseFloat(d)-parseFloat(g.top)+j.outerHeight(true)+"px"},b);if(h+j.outerWidth(true)>=g.width+g.left){d=parseFloat(d)+parseFloat(j.outerHeight(true));j.stop(true,false).show().animate({top:+d+"px",left:g.left+"px"},b);h=g.left+j.outerWidth(true)}else{j.stop(true,false).show().animate({top:+d+"px",left:h+"px"},b);h=h+j.outerWidth(true)}}else{j.stop(true,false).hide()}if(i==length){setTimeout(function(){c()},b)}}})})}