/*	Copyright (C) 2015  Tuong H. Nguyen
	
	Version: 1.0.2
	Created: 2014-07-11
	Modified: 2015-02-03
	Author: Tuong H. Nguyen
	Maintainer: Tuong H. Nguyen <nhtuong@gmail.com>
	Description: +OneFB will add +1 button below each FB post. All articles 
		recommended by +1 button will be appeared on Google Plus profile.
	License: GNU
    
	The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.
	
*/	



  
  


function main(){


	
  
	var txt = ".uiStreamSponsoredLink";
	$('.userContentWrapper').each(function(){
	
		if ($(this).find(".uiStreamSponsoredLink").attr("class")=="uiStreamSponsoredLink")
			$(this).find(".uiStreamSponsoredLink").parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
		
     
    });
	$('.ego_section').each(function(){
	
		if ($(this).find(".adsCategoryTitleLink").attr("class")=="adsCategoryTitleLink")
			$(this).find(".adsCategoryTitleLink").parent().parent().parent().parent().parent().parent().remove();
		
		
	
    });	
	


	var toparticles ={};

	var  count=0;

		$('.userContentWrapper').each(function(){
			var share=$(this).find(".share_action_link");
			if (share.parent().parent().find(".onefb").attr('class')!="onefb" & share.next().attr('class')!="sep"){
			
			var post=$(this).find("._5pcq").attr("href");
			var link=$(this).find("._52c6").attr("onmouseover");
			var title=$(this).find(".mbs").text();
			var sender=$(this).find(".fwb");
			var sharepanel=$(this).find(".share_action_link").parent();
			
			
			//alert(title);//
			
			if (typeof link==="undefined"){
				link=post;
				//if (link.indexOf("facebook.com")==-1)
						link="https://www.facebook.com"+link;			
			} else{
					link=link.substring(29,link.length-3);				
					link=link.replace(/\\/g, "");
					link=link.replace("\"", "");
								
				}
			var id=MD5(link);
			var fbjsonurl="https://api.facebook.com/method/links.getStats?urls="+link+"&format=json";
			var twjsonurl="https://urls.api.twitter.com/1/urls/count.json?url="+link;
			var linkedinjsonurl="https://www.linkedin.com/countserv/count/share?url="+link+"&format=json";
			
			
			
			var gppane="Share on: "+
			"<a class=\'onefb\' onclick=\'popUp=window.open(\"https://plus.google.com/share?url="+link+"\")\'><img src='http://tubizou.net/images/icons/googleplus.png'></a>"+ "<span class='sep'>  </span>" +
			"<a class=\'onefb\' onclick=\'popUp=window.open(\"https://twitter.com/home?status="+title+" "+link+"\")\'><img src='http://tubizou.net/images/icons/twitter.png'></a>"+ "<span class='sep'>  </span>" +
			"<a class=\'onefb\' onclick=\'popUp=window.open(\"https://www.linkedin.com/shareArticle?mini=true&url="+link+"\")\'><img src='http://tubizou.net/images/icons/linkedin.png'></a>"+ "<span class='sep'>  </span>" +
			"<a class=\'onefb\' onclick=\'popUp=window.open(\"https://pinterest.com/pin/create/button/?url="+link+"\")\'><img src='http://tubizou.net/images/icons/pinterest.png'></a>";
						
			//Save data
				$.get( "https://tubizou.net/datasets/saveFBToplinks.php?user=tuong&url="+link+"&sharer=nga", function(data) {
						  //$( ".result" ).html( data );
						  //alert( "Load was performed." );
						});
			/*						
		
			$.getJSON(fbjsonurl, function( data ) {
				$.each( data, function( key, val ) {				
					toparticles["url"]= val.url;
					toparticles["share_count"]= val.share_count;
					
	
					if (val.like_count>500 | val.comment_count>500 ){
					
						$('.rightColumnWrapper').each(function(){		
						var ego_section = $(this).find("#pagelet_reminders");
						//alert(ego_section.attr("class"));
						if (ego_section.attr("id")=="pagelet_reminders"){
							if ($(this).next().attr('class')!="reco"){
								$(this).after("<h8 class='reco' id='reco' aria-hidden='true'>RECOMMENDATIONS<br></h8>");
							} 
							//alert($('.recoi').attr('title')==title);
							if($('div.recoi:contains('+title+')').length==0){

								$('.reco').after("<div class='recoi'><li  aria-hidden='true' title="+title+"><b>"+sender.html()+"</b> : <a href='"+val.url+"' target='_blank'>"+title +"</a> </li>"+sharepanel.html()+"<span class='sep'> · </span> <a href='#' class='tipr-"+id+"'>Share+</a> <span class='sep'> · </span> <i class='UFIBlingBoxLikeIcon UFIBlingBoxSprite'></i>"+val.like_count+"<i class='mls UFIBlingBoxCommentIcon UFIBlingBoxSprite'></i>"+val.comment_count+"<i class='mls UFIBlingBoxReshareIcon UFIBlingBoxSprite'></i>"+val.share_count+"  </div>");


								$(".tipr-"+id).tooltip({
									content: gppane,
									items:"*",
									position: {
										my: "center-7 bottom+1",
										at: "center-7 top-10",
										using: function( position, feedback ) {
									  $( this ).css( position );
									  $( "<div>" )
										.addClass( "arrow" )
										.addClass( feedback.vertical )
										.addClass( feedback.horizontal )
										.appendTo( this );
									}
								  },
								  hide: { effect: "" }, //fadeOut
								  close: function(event, ui){
									ui.tooltip.hover(
										function () {
											$(this).stop(true).fadeTo(200, 1); 
										},
										function () {
											$(this).fadeOut("200", function(){
												$(this).remove(); 
											})
										}
									);
								  }  
								});	 						   

						   }

								
							}
						});	
		
					
				
	
					}
				});  			
				
			 });*/
			 
			 
		
			
			share.parent().after("<span class='onefb'><span class='sep'> · </span> <a href='#' class='tip-"+id+"'>Share+</a></span>");
						
		
		
			/*share.after("<a class='onefb' onclick='popUp=window.open(\"https://plus.google.com/share?url="+link+"\")'>Share on Google+</a>");									
			share.after("<span id='plusone_container'><span id='g-plusone"+id+"'></span></span>");					
			share.after("<span class='sep'> · </span>");	*/		
		
			//gapi.plusone.render("g-plusone"+id, { "href": link, "size":"small","annotation":"bubble" });	
		
			$(".tip-"+id).tooltip({
				content: gppane,
				items:"*",	
				position: {
				my: "center-7 bottom+1",
				at: "center-7 top-10",
				using: function( position, feedback ) {
				  $( this ).css( position );
				  $( "<div>" )
					.addClass( "arrow" )
					.addClass( feedback.vertical )
					.addClass( feedback.horizontal )
					.appendTo( this );
				}
			  },				
			  hide: { effect: "" }, //fadeOut
			  close: function(event, ui){
				ui.tooltip.hover(
					function () {
						$(this).stop(true).fadeTo(200, 1); 
					},
					function () {
						$(this).fadeOut("200", function(){
							$(this).remove(); 
						})
					}
				);
			  }  
			});	 
							
			
			
			}
			//alert($(this).find(".share_action_link").attr("href"));
			
		});	
		
		
	

	
	
	
	
	

	
	
	/*$('.share_action_link').each(function(){
	count++;
	
      if ($(this).next().attr('class')!="onefb" & $(this).next().attr('class')!="sep"){
	  		
			var link=$(this).parent().parent().parent().parent().parent().parent().parent().parent().find("._52c6").attr('onmouseover');
			
		
			if (typeof link==="undefined"){
				link=$(this).parent().parent().parent().parent().parent().parent().parent().parent().find("._5pcq").attr('href');
				//if (link.indexOf("facebook.com")==-1)
					//link="https://www.facebook.com"+link;
			}
			else{
				link=link.substring(29,link.length-3);				
				link=link.replace(/\\/g, "");
				link=link.replace("\"", "");				
			}
		
		var id=MD5(link);
		//alert(id);
		$(this).after("<a class='onefb' onclick='popUp=window.open(\"https://plus.google.com/share?url="+link+"\")'>Share on Google+</a>");									

		$(this).after("<span id='plusone_container'><span id='g-plusone"+id+"'></span></span>");					
		$(this).after("<span class='sep'> · </span>");			
	
		gapi.plusone.render("g-plusone"+id, { "href": link, "size":"small","annotation":"bubble" });
			
			
		
		}		
    });	*/
	
}


window.onload=main;
window.onscroll=main;
	





