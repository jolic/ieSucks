/* <notice> ********************************************************************

	© 2010 M. Jolić, m.jolic __at__ gmail.com

	Licensed under the MIT-License:
	http://www.opensource.org/licenses/mit-license.php

	Use it for free in non-commercial and/or commercial projects
	as long as you keep everything inside <notice></notice> as is.

	Every css style is defined as inline style so no css definitions will
	be overriden.
	
	Usage examples:

			$(jQuerySelector).ieSucks();

	Individual css properties for note:

			$(jQuerySelector).ieSucks({
				css:{
					note:{
						 zIndex	:20
						,right	:'-8px'
						,bottom	:'30px'
					}
				}
			};

	Every option can be overriden with the first parameter as object.
	See options inside the plugin.

 ****************************************************************** </notice> */
;'use strict';
(function($){
	$.fn.ieSucks=function(options){
		if (0===this.length) return this;
		if (typeof options!=='undefined' && typeof options!=='object') options={};
		options=$.extend(true,{},{
			 showAlsoIfBrowserIsNotIE	:false
			,showAtOnce					:false
			,reasons:[
				 {
				 	 title:'»The number of<br/>exploits taking<br/>advantage of<br/>unknown and unpatched<br/>vulnerabilities<br/>has been<br/>breathtaking.«'
				 	,source:'<a href="http://www.symantec.com/connect/blogs/new-ie-0-day-used-targeted-attacks">Vikram Thakur, Symantec</a>'
					,css:{end:{fontSize:'6.8em'}}
				 }
				 ,{
				 	 title:'»France joins<br/>Germany in<br/>warning against<br/>using<br/>Microsoft browser<br/>Internet Explorer«'
				 	,source:'<a href="http://www.dailymail.co.uk/sciencetech/article-1244138/Internet-Explorer-Germany-warns-using-IE-Microsoft-admits-browser-weak-link-China-Google-hacks.html">Graham Smith, Mail Online</a>'
					,css:{end:{fontSize:'8em'}}
				 }
				 ,{
				 	 title:'»Comparison of<br/>unpatched publicly<br/>known vulnerabilities<br/>in latest stable<br/>version browsers.«'
				 	,source:'<a href="http://en.wikipedia.org/wiki/Comparison_of_web_browsers#Vulnerabilities">Wikipedia, Known vulnerabilities in browsers</a>'
					,css:{end:{fontSize:'8em'}}
				 }
				 ,{
				 	 title:'»A growing<br/>list of<br/>IE8 Bugs.«'
				 	,source:'<a href="http://jhop.me/ie8-bugs">James Hopkins</a>'
					,css:{end:{fontSize:'13em'}}
				 }
				 ,{
				 	 title:'»The rendering<br/>engine of<br/>Internet Explorer<br/>doesn’t pass<br/>Acid3 test.«'
				 	,source:'<a href="http://en.wikipedia.org/wiki/Acid3#Browsers_that_do_not_pass">Wikipedia, Acid3 test</a>'
					,css:{end:{fontSize:'9em'}}
				 }
				 ,{
				 	 title:'„Kritische<br/>Sicherheitslücke<br/>im Internet<br/>Explorer.<span style="margin-left:-0.15em">“</span>'
				 	,source:'<a href="https://www.bsi.bund.de/cln_165/ContentBSI/Presse/Pressemitteilungen/Sicherheitsluecke_IE_190110.html">Bundesamt für Sicherheit in der Informationstechnik</a>'
					,css:{end:{fontSize:'9em'}}
				 }
				 ,{
				 	 title:'„Microsoft<br/>warnt vor<br/>Sicherheits-<br/>lücke.<span style="margin-left:-0.15em">“</span>'
				 	,source:'<a href="http://www.spiegel.de/netzwelt/web/0,1518,727454,00.html">Spiegel.de</a>'
					,css:{end:{fontSize:'11em'}}
				 }
				 ,{
				 	 title:'»Top<br/>Browser<br/>Share Trend.«'
				 	,source:'<a href="http://www.netmarketshare.com/browser-market-share.aspx?qprid=1">NetMarketShare</a>'
					,css:{end:{fontSize:'11em'}}
				 }
				 ,{
				 	 title:'»Performance<br/>Comparison<br/>of Major<br/>Web Browsers.«'
				 	,source:'<a href="http://sixrevisions.com/infographs/browser-performance/">sixrevisions.com</a>'
					,css:{end:{fontSize:'9.5em'}}
				 }
				 ,{
				 	 title:'»Windows<br/>Exploits<br/>aggregator.«'
				 	,source:'<a href="http://www.windowsexploits.com/">windowsexploits.com</a>'
					,css:{end:{fontSize:'11em'}}
				 }
			]
			,imgPath:'/ieSucks/gfx'
			,browser:{
				appleSafari:{
					 src			:'AppleSafari.png'
					,href			:'http://www.apple.com/safari/'
					,css:{
						 position	:'absolute'
						,bottom		:'70px'
						,left		:'115px'
					}
				}
				,googleChrome:{
					 src			:'GoogleChrome.png'
					,href			:'http://www.google.com/chrome/'
					,css:{
						 position	:'absolute'
						,bottom		:'53px'
						,left		:'225px'
					}
				}
			}
			,css:{
				why:{
					borderBottom	:'2px solid transparent'
				}
				,whyHover:{
					borderBottom	:'2px solid #000'
				}
				,reason:{
					start:{
						 color			:'#af0'
						,font			:'normal normal normal 0em "Times New Roman",Times,serif'
						,opacity		:0
						,lineHeight		:'85%'
						,cursor			:'default'
					}
					,end:{
						 fontSize		:'6em'
						,opacity		:.6
					}
					,source:{
						 position		:'absolute'
						,right			:0
						,bottom			:30
						,color			:'#fff'
						,textDecoration	:'none'
						,font			:'2em Times,Tahoma,Helvetica,sans-serif'
						,fontVariant	:'small-caps'
						,textTransform	:'capitalize'
						,fontWeight		:100
						,letterSpacing	:'0.07em'
					}
				}
				,modalBackground:{
					 background		:'#000'
					,position		:'fixed'
					,zIndex			:7111966
					,top			:0
					,left			:0
					,bottom			:0
					,margin			:0
					,padding		:0
					,width			:'100%'
					,height			:'100%'
					,opacity		:.85
				}
				,reasonContainer:{
					 position		:'relative'
					,zIndex			:7111968
					,width			:'900px'
					,height			:'600px'
					,margin			:'50px auto 0'
					,textAlign		:'center'
					,overflow		:'hidden'
				}
				,modalContent:{
					 position		:'fixed'
					,zIndex			:7111967
					,top			:0
					,left			:0
					,bottom			:0
					,width			:'100%'
					,height			:'100%'
				}
				,note:{
					 position		:'absolute'
					,right			:'0px'
					,bottom			:'0px'
					,zIndex			:10
			 	}
				,navigationContainer:{
					 position		:'absolute'
					,bottom			:'0px'
					,width			:'100%'
					,margin			:'5px auto 0'
					,textAlign		:'center'
					,borderTop		:'1px dashed #333'
					,padding		:'5px 0'
				}
				,navigationButtonAnchor:{
				}
				,navigationButtonSpan:{
					 width			:'14px'
					,height			:'14px'
					,display		:'block'
					,margin			:'0 4px 0 0'
					,float			:'left'
				}
				,navigationButtonSpanNormal:{
					 backgroundPosition:'-28px 0'
					,opacity		:0.2
				}
				,navigationButtonSpanHover:{
					 backgroundPosition:'-14px 0'
					,opacity		:1
				}
				,navigationButtonSpanActive:{
					 backgroundPosition:'0 0'
					,opacity		:1
				}
				 ,externalLink:{
					padding				:'0 14px 0 0'
				 }
			 }
			 ,reasonAnimation:{
				 duration			:500  // ms
				,showTitleAtEnd		:5000 // ms
				,blinkFrequency		:11
			 }
		},options);
		if (!options.showAlsoIfBrowserIsNotIE){
			if (!$.browser.msie) return this;
		}
		options.css.navigationButtonSpan.background='transparent url("'+options.imgPath+'/buttons.png") no-repeat -28px 0';
		options.css.externalLink.background='transparent url("'+options.imgPath+'/external_link_fff.gif") no-repeat 100% 3px';
		var  $note=$('<span><span style="position:relative;"><img src="'+options.imgPath+'/IE-warning_note.png" style="border:0px;"/></span></span>').css(options.css.note)
			,$body=$('body')
			,$window=$(window)
			,$document=$(document)
			,$modalBackground=$('<div></div>').css(options.css.modalBackground)
			,$modalContent=$('<div></div>').css(options.css.modalContent)
			,$reasonContainer=$('<div></div>').css(options.css.reasonContainer)
			,$reason=$('<span></span>')
			,$navigationContainer=$('<div></div>').css(options.css.navigationContainer)
			,$why=$('<a href="#" style="position:absolute;right:40px;bottom:35px;border-bottom:2px solid transparent;"><img src="'+options.imgPath+'/why.png"/></a>')
			,$close=$('<a href="#" style="position:absolute;right:20px;top:20px;"><img src="'+options.imgPath+'/icon_close.png"/></a>')
			,$info=$('<div style="position:fixed;left:30px;bottom:30px;"><a href="" style="font-size:1em;color:#bbc;text-decoration:none;">Like it? Get it and use it for free here!</a></div>')
			,$button=$('<a href="#"></a>').css(options.css.navigationButtonAnchor).append($('<span></span>').css(options.css.navigationButtonSpan).css(options.css.navigationButtonSpanNormal))
			,$source=$('<div></div>')
			,$noteContent=$note.children().eq(0)
			,setContainerHeight=function(e){$modalBackground.css({height:$body.height()+60});}
			,$allNavigationElms=$('<div/>')
			,selected=0
			,intervalId=null
			,blinkIntervalId=null
			,addNavigationEvents=function(){
				$allNavigationElms.children()
					.bind('mouseenter',function(e){
						$(this).children().css(options.css.navigationButtonSpanHover);
					})
					.bind('mouseleave',function(e){
						$(this).children().css(options.css.navigationButtonSpanNormal);
					})
					.bind('click',function(e){
						selected=parseInt($(this).attr('elm'),10);
						run();
						return false;
					});
			}
			,removeNavigationEvents=function(){
				$allNavigationElms.children().unbind('mouseenter mouseleave click');
			}
			,getNext=function(){
				if (selected+1>options.reasons.length-1) return 0;
				return selected+1;
			}
			,normal=function(){
				$allNavigationElms.children().eq(getNext()).css(options.css.navigationButtonSpanNormal);
			}
			,hover=function(){
				$allNavigationElms.children().eq(getNext()).css(options.css.navigationButtonSpanHover);
			}
			,run=function(){
				if (intervalId) {
					window.clearInterval(intervalId);
					intervalId=null;
				}
				if (blinkIntervalId) {
					window.clearInterval(blinkIntervalId);
					blinkIntervalId=null;
				}
				if (selected>options.reasons.length-1) selected=0;
				$source.hide().html(options.reasons[selected].source)
					.children().attr({target:'_blank'})
					.css(options.reasons[selected].css.source)
					.css(options.css.externalLink);
				$reason.css(options.reasons[selected].css.start).show().html(options.reasons[selected].title);
				$allNavigationElms.children()
					.css(options.css.navigationButtonSpan)
					.css(options.css.navigationButtonSpanNormal)
					.eq(selected).css(options.css.navigationButtonSpanActive);
				var current=normal;
				$reason.animate(options.reasons[selected].css.end,{
					 duration:options.reasons[selected].reasonAnimation.duration
					,complete:function(){
						$source.fadeIn();
						blinkIntervalId=window.setInterval(function(){
							if (current==normal) current=hover;
							else current=normal;
							current();
						},options.reasons[selected].reasonAnimation.showTitleAtEnd/options.reasons[selected].reasonAnimation.blinkFrequency);
						intervalId=window.setTimeout(function(){
							$source.fadeOut();
							$reason.fadeOut(function(){
								selected++;
								run();
							});
						},options.reasons[selected].reasonAnimation.showTitleAtEnd);
					}
				});
			}
		;
		$reasonContainer.append($reason).append($source);
		$.each(options.browser,function(i,elm){
			$noteContent.append($('<a href="'+elm.href+'" target="_blank"><img src="'+options.imgPath+'/'+elm.src+'"/></a>').css(elm.css));
		});
		$.each(options.reasons,function(i,elm){
			$allNavigationElms.append($button.clone().attr({elm:i}));
			options.reasons[i].css=$.extend(true,{},options.css.reason,options.reasons[i].css);
			options.reasons[i].reasonAnimation=$.extend(true,{},options.reasonAnimation,options.reasons[i].reasonAnimation);
		});
		$modalContent.append($reasonContainer.append($navigationContainer.append($allNavigationElms))).append($close).append($info);
		$noteContent.append($why);
		$why.bind('mouseover',function(e){ $(this).css(options.css.whyHover); })
			.bind('mouseout',function(e){ $(this).css(options.css.why); })
			.bind('click',function(e){
				var $this=$(this);
				addNavigationEvents();
				$window.bind('resize.ieSucks',setContainerHeight);
				$document.bind('keyup.ieSucks',function(e){
					if ((e.keyCode||e.which)===27) $close.trigger('click');
				});
				setContainerHeight(null);
				$reason.hide();
				$source.hide();
				$close.bind('click',function(e){
					$window.unbind('resize.ieSucks');
					$document.unbind('keyup.ieSucks');
					window.clearInterval(intervalId);
					window.clearInterval(blinkIntervalId);
					$modalContent.fadeOut(function(){
						removeNavigationEvents();
						$(this).remove();
					});
					$modalBackground.fadeOut(function(){
						$(this).remove();
					});
					return false;
				});
				$body.append($modalBackground.fadeIn()).append($modalContent.fadeIn(function(){
					run();
				}));
				return false;
			})
		;
		this.append($note);
		if (options.showAtOnce) {
			$(function(){
				window.setTimeout(function(){
					$why.trigger('click');
				},10);
			});
		}
		return this;
	};
})(jQuery);