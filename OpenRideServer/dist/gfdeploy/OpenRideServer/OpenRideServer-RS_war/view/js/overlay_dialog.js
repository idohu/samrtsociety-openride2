/*
    OpenRide -- Car Sharing 2.0
    Copyright (C) 2010  Fraunhofer Institute for Open Communication Systems (FOKUS)

    Fraunhofer FOKUS
    Kaiserin-Augusta-Allee 31
    10589 Berlin
    Tel: +49 30 3463-7000
    info@fokus.fraunhofer.de

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License Version 3 as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

document.write('<div id="overlay">&nbsp;</div><div id="overlay_dialog"><div id="dialog_text"></div></div>');	

function showOverlayDialog(title, content, btn1_label, btn1_action, btn2_label, btn2_action) {

    if (document.getElementById) {
	
        var dialog_text = '<p><strong>'+title+'</strong></p><p>'+content+'</p><div id="buttons"><input type="button" value="'+btn1_label+'" class="rounded" id="dialog_btn_ok" onclick="'+btn1_action+'; hideOverlayDialog();" />';
	
        if (btn2_label!='')
            dialog_text = dialog_text + '<input type="button" value="'+btn2_label+'" class="rounded" onclick="'+btn2_action+'; hideOverlayDialog();"/>';
			
        dialog_text = dialog_text + '</div>';
	
        document.getElementById("dialog_text").innerHTML = dialog_text;
	
	
        hideSelects()

        var overlayHeight = document.getElementById("content").offsetHeight + 88;
        if (overlayHeight == 88) {
            // we don't have a visible content div, so use a default value
            overlayHeight = window.innerHeight;
        }

        document.getElementById("overlay").style.height = overlayHeight + "px";
        document.getElementById("overlay_dialog").style.top = getScrollHeight() + "px";

        document.getElementById("overlay").style.display = 'block';
        document.getElementById("overlay_dialog").style.display = 'block';

    }

}

function showLoadingDialog() {
    alert('showloding');
    if (document.getElementById) {

        var dialog_text = '<p><strong>Loading...</strong></p>';

        //		if (btn2_label!='')
        //			dialog_text = dialog_text + '<input type="button" value="'+btn2_label+'" class="rounded" onclick="'+btn2_action+'; hideOverlayDialog();"/>';

        dialog_text = dialog_text;

        document.getElementById("dialog_text").innerHTML = dialog_text;


        hideSelects()

        var overlayHeight = document.getElementById("content").offsetHeight + 88;
        if (overlayHeight == 88) {
            // we don't have a visible content div, so use a default value
            overlayHeight = window.innerHeight;
        }

        document.getElementById("overlay").style.height = overlayHeight + "px";
        document.getElementById("overlay_dialog").style.top = getScrollHeight() + "px";

        document.getElementById("overlay").style.display = 'block';
        document.getElementById("overlay_dialog").style.display = 'block';

    }
}

function showRatingDialog(counterpart,overall,numofraters,rel,friend,phone,car) {
    //alert('ratingdialog');
    var carRow='';
    if (car!="undefined undefined")
        carRow='<tr><td>Car:</td><td>'+car+'</td></tr><tr></tr><tr></tr>';
    if (document.getElementById) {
        var overallStars='';
        var relStars='';
        var friendStars='';
        for (var p=0;p<5;p++){
            if (p<overall)
                overallStars+='<img src="../../OpenRideWeb/img/rating_on.gif" />';
            else
                overallStars+='<img src="../../OpenRideWeb/img/rating_off.gif" />';
            if (p<rel)
                relStars+='<img src="../../OpenRideWeb/img/rating_on.gif" />';
            else
                relStars+='<img src="../../OpenRideWeb/img/rating_off.gif" />';
            if (p<friend)
                friendStars+='<img src="../../OpenRideWeb/img/rating_on.gif" />';
            else
                friendStars+='<img src="../../OpenRideWeb/img/rating_off.gif" />';
        }
        var dialog_text = '<p style="text-align: center"><strong>'+counterpart+'</strong></p><p>'
        +'<table><tr><td>Phone Number:</td><td>'+phone+'</td></tr>'+
        carRow+// '<tr><td>Car:</td><td>'+car+'</td></tr><tr></tr><tr></tr>'+
        '<tr><td ><b>Overall Rating:</b></td><td>'+overallStars+'</td></tr>'+
        '<tr><td colspan="2"><small>Rating calculated from '+numofraters+' people.</small></td></tr>'+
        '<tr><td colsapn="2">Detailed Rating:</td></tr>'+
        '<tr><td><span class="txttabsmall">Reliability: </span></td><td><span class="statshl">'+relStars+'</span></td></tr>'+
        '<tr><td><span class="txttabsmall">Friendliness: </span></td><td><span class="statshl">'+friendStars+'</span></td></tr></table>'+
        '</p><div id="buttons"><input type="button" value="OK" class="rounded" id="dialog_btn_ok" onclick=" hideOverlayDialog();" />';

        //		if (btn2_label!='')
        //			dialog_text = dialog_text + '<input type="button" value="'+btn2_label+'" class="rounded" onclick="'+btn2_action+'; hideOverlayDialog();"/>';

        dialog_text = dialog_text + '</div>';

        document.getElementById("dialog_text").innerHTML = dialog_text;


        hideSelects()

        var overlayHeight = document.getElementById("content").offsetHeight + 88;
        if (overlayHeight == 88) {
            // we don't have a visible content div, so use a default value
            overlayHeight = window.innerHeight;
        }

        document.getElementById("overlay").style.height = overlayHeight + "px";
        document.getElementById("overlay_dialog").style.top = getScrollHeight() + "px";

        document.getElementById("overlay").style.display = 'block';
        document.getElementById("overlay_dialog").style.display = 'block';

    }
}

function hideOverlayDialog() {
	
    document.getElementById("overlay").style.display = 'none';
    document.getElementById("overlay_dialog").style.display = 'none';
	
    showSelects();
		
}

function hideSelects() {
    IE6 = false /*@cc_on || @_jscript_version < 5.7 @*/;
    if (IE6) {
        // looping through all forms on the page
        for (f = 0; f < document.forms.length; f++) {
            var elements = document.forms[f].elements;
            // looping through all elements on certain form
            for (e = 0; e < elements.length; e++) {
                if (elements[e].type == "select-one") {
                    elements[e].style.visibility = 'hidden';
                }
            }
        }
    }
}

function showSelects() {
    IE6 = false /*@cc_on || @_jscript_version < 5.7 @*/;
    if (IE6) {
        // looping through all forms on the page
        for (f = 0; f < document.forms.length; f++) {
            var elements = document.forms[f].elements;
            // looping through all elements on certain form
            for (e = 0; e < elements.length; e++) {
                if (elements[e].type == "select-one") {
                    elements[e].style.visibility = 'visible';
                }
            }
        }
    }
}

function TrimString(sInString) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
}

function nl2br(text){
    text = escape(text);
    if(text.indexOf('%0D%0A') > -1){
        re_nlchar = /%0D%0A/g ;
    }
    else if(text.indexOf('%0A') > -1){
        re_nlchar = /%0A/g ;
    }
    else if(text.indexOf('%0D') > -1){
        re_nlchar = /%0D/g ;
    }
    return unescape( text.replace(re_nlchar,'<br />') );
}


function getScrollWidth()
{
    var w = window.pageXOffset ||
    document.body.scrollLeft ||
    document.documentElement.scrollLeft;

    return w ? w : 0;
}

function getScrollHeight()
{
    var h = window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop;

    return h ? h : 0;
}