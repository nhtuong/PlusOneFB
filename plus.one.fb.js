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



function addOneFB(id){

var div = document.getElementsByClassName(id);

for (var i = 0; i < div.length; ++i) {


}

}



function main(){

	
	var  count=0;
	$('.share_action_link').each(function(){
	count++;
	
      if ($(this).next().attr('class')!="onefb" & $(this).next().attr('class')!="sep"){
			$(this).after("<a class='onefb' href='#' onclick='popUp=window.open(\"https://plus.google.com/share?url=http://example.com\">Share <span id='plusone_container'><span id='g-plusone"+count+"'></span></span></a>");			
		$(this).after("<span class='sep'> · </span>");
			
			var link=$(this).parent().parent().parent().parent().parent().parent().parent().parent().find("._52c6").attr('onmouseover');
			link
			if (typeof link==="undefined"){
				link=$(this).parent().parent().parent().parent().parent().parent().parent().parent().find("._5pcq").attr('href');
				if (link.indexOf("facebook.com")==-1)
					link="https://www.facebook.com"+link;
			}
			else{
				link=link.substring(29,link.length-3);
				link=link.replace(/[/\*]/g, "");
				link=link.replace("\"", "");				
			}
			
			gapi.plusone.render("g-plusone"+count, { "href": link, "size":"small","annotation":"bubble" });
			
			
		
		}		
    });	
	
}


window.onload=main;
window.onscroll=main;
	





