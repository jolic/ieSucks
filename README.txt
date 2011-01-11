---------------------------------------------------------------------------

https://github.com/jolic/ieSucks

---------------------------------------------------------------------------

ieSucks is a small jQuery plugin which shows a note to IE users for what IE is 
good for: to download a better browser.

If the user clicks on the "Why?" link several reasons are shown as an animation
pointing to the source where the user can read the full article.

As default the note container is shown only if the browser is Internet Explorer.
It is appended to the jQuery selector, positioned absolute to the lower right
corner with a z-index of 10.

---------------------------------------------------------------------------
Usage (append the container to the body element at the lower right corner):
---------------------------------------------------------------------------
...
<head>
...
<script type="text/javascript" src="/path/to/jquery.js" charset="utf-8"></script>
<script type="text/javascript" src="/path/to/ieSucks.js" charset="utf-8"></script>
<script type="text/javascript">
	$(function(){
		$('body').ieSucks();
	});
</script>
...
</head>
...

---------------------------------------------------------------------------
Options:
---------------------------------------------------------------------------

You can pass an optional object to the ieSucks method to:

|> change the position of the note image container:

	$(jQuerySelector).ieSucks({
		css:{
			note:{
				 bottom:'100px'
				,right:'1em'
				// add other css properties
			}
		}
	});

|> display the note image always (also for non-IE browsers) and show it at once:

	$(jQuerySelector).ieSucks({
		 showAlsoIfBrowserIsNotIE	:true
		,showAtOnce					:true
	});

|> to add other reasons:

	$(jQuerySelector).ieSucks({
		reasons:[
			 {
				 title:'»IE is not good for you.«'
				,source:'<a href="linkToArticle">Click me</a>'
				,css:{
					end:{
						fontSize:'9.3em'
					}
				}
			 }
			// ,{..another reason..}
		]
	});

|> to change the image path:

	$(jQuerySelector).ieSucks({
		imgPath:'/path/to/ieSucks/gfx' // default is '/ieSucks/gfx'
	});

Please have a look into the source to see what options can be changed.

All css styles are defined as inline styles, so no css definitions will be overriden.

---------------------------------------------------------------------------
Live example:
---------------------------------------------------------------------------

A live example can be seen at:

http://apartmanblanca.com.hr

You need to visit this site with the Internet Explorer to see the note 
or call in the JS console of Safari/Chrome:

$(function(){
	$('#bottomContainer').ieSucks({
		 css:{note:{zIndex:20,right:'-8px',bottom:'30px'}}
		,showAlsoIfBrowserIsNotIE:true
	})
});


---------------------------------------------------------------------------
Comments/bugs/wishes:
---------------------------------------------------------------------------

Please send any comments/bugs/wishes according _this plugin_ to 
m.jolic __at__ gmail.com.

I don't want a discussion like 'I love IE', 'I hate IE', 'MS is cool'... 
Post this kind of message elsewhere.

