/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var ridePlan;
var rideRequests = [];
var ridePlans = [];
var rides = [];
var submitted_rides = [];
var parseOffer;
var parseUnmatchedOffer;
var parseUnmatchedSearch;
var parseSearch;
var FixedStars = [];
var user;
var pass;
var regStatus = 0;
var DimitrisLocal = "localhost:3000";
var DimitrisRemote = "168.144.202.152:3000";
var DimitrisRemotePrefix = "http://";
var PeerMenager = "168.144.202.152:3002";
var PeerManagerPrefix = "http://";
var usermode = 0;
var DRIVERMODE = 0;
var RIDERMODE = 1;
var dummyTHIS=this;
/*function stars(category , riderId)
        {
            var tmpID = riderId + category;
            var ans =
                    /*'     <img src="../../OpenRideWeb/img/rating_off.gif" id="1' + tmpID +'" onClick="submit(1,' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="2' + tmpID +'" onClick="submit(2' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="3' + tmpID +'" onClick="submit(3' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="4' + tmpID +'" onClick="submit(4' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="5' + tmpID +'" onClick="submit(5' + riderId + ','+category+')"/><br><br>';*/
/*        '     <img src="../../OpenRideWeb/img/rating_off.gif" id="1' + tmpID +'" onMouseOver="mouseOver(' + 1 + tmpID + ')" onMouseOut="mouseOut(' + 1 + tmpID + ')" onClick="fix(' + 1 + tmpID + ')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="2' + tmpID +'" onMouseOver="mouseOver(' + 2 + tmpID + ')" onMouseOut="mouseOut(' + 2 + tmpID + ')" onClick="fix(' + 2 + tmpID + ')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="3' + tmpID +'" onMouseOver="mouseOver(' + 3 + tmpID + ')" onMouseOut="mouseOut(' + 3 + tmpID + ')" onClick="fix(' + 3 + tmpID + ')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="4' + tmpID +'" onMouseOver="mouseOver(' + 4 + tmpID + ')" onMouseOut="mouseOut(' + 4 + tmpID + ')" onClick="fix(' + 4 + tmpID + ')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="5' + tmpID +'" onMouseOver="mouseOver(' + 5 + tmpID + ')" onMouseOut="mouseOut(' + 5 + tmpID + ')" onClick="fix(' + 5 + tmpID + ')"/><br><br>';
           //alert(ans);
       //    return ans;
       // }*/

fokus.openride.mobclient.controller.modules.modulemanager = function(){

    /* ------ private variabeles and methods ------ */

    const eDiv = '</div>';

    var mapmod = fokus.openride.mobclient.controller.modules.mapmanager;
    var nativemod = fokus.openride.mobclient.controller.modules.nativemodule;
    var srvconn = fokus.openride.mobclient.controller.serverconnector;
    var calendar = fokus.openride.mobclient.controller.modules.calendar;
    var userProfile =fokus.openride.mobclient.controller.modules.profile;

    usermode = DRIVERMODE;

    var offerstartdropdownid = 'offerstartdropd';
    var offerdestdropdownid = 'offerdestdropd';
    var searchstartdropdownid = 'searchstartdropd';
    var searchdestdropdownid = 'searchdestdropd';

    //option elemt id's for setting user position address, when screen gets set to offer/search ui
    var offerstartselectcurrpos = 'offerstartselectcurrpos';
    var offerdestselectcurrpos = 'offerdestselectcurrpos';
    var searchstartselectcurrpos = 'searchstartselectcurrpos';
    var searchdestselectcurrpos = 'searchdestselectcurrpos';

    // Determin wether create a new service or modify an existing
    var modifyService = "modify";
    var newService = "new";
    var serviceType = '';



    var rideId = '';

    var initialviewid = 'newofferUI';

    var activeMatchContentDiv;

    //arrays for the tab-related dom elements
    var tablinkslvl_0 = ['tab01link', 'tab02link', 'tab03link', 'tab04link', 'tab05link'];
    var tabimgslvl_0 = ['tabimg01', 'tabimg02', 'tabimg03', 'tabimg04'];
    var tabcontentdivslvl_0 = ['tab01link', 'tab02link', 'tab03link', 'tab04link'];

    var tablinkslvl_1 = ['tab11link', 'tab12link', 'tab13link', 'tab14link'];
    var tabimgslvl_1 = ['tabimg11', 'tabimg12', 'tabimg13', 'tabimg14'];
    var tabcontentdivslvl_1 = ['tab01link', 'tab02link', 'tab03link', 'tab04link'];

    var tmpRideId = '';
    var tmpRide = '';

    var driverupdatecount = '';
    var riderupdatecount = '';

    /* ------ data structure for tab menu tree - for driver and rider usermode ------ */

    //driver mode tree data

    var drivernode0 = {
        imgsrc : '../img/tab0home_inact_wide.png',
        imgactivesrc : '../img/tab0home_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/home1green_wide.png',
            imgactivesrc : '../img/home1white_wide.png',
            contentdivid : 'homeUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1profilegreen_wide.png',
            imgactivesrc : '../img/tab1profilewhite_wide.png',
            contentdivid : 'profileUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode1 = {
        imgsrc : '../img/tab0driver_inact_wide.png',
        imgactivesrc : '../img/tab0driver_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1NeuesAngebot_wide.png',
            imgactivesrc : '../img/tab1NeuesAngebotActive_wide.png',
            contentdivid : 'newofferUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1MeineAngebote_wide.png',
            imgactivesrc : '../img/tab1MeineAngeboteActive_wide.png',
            contentdivid : 'activeofferUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1AlteAngebote_wide.png',
            imgactivesrc : '../img/tab1AlteAngeboteActive_wide.png',
            contentdivid : 'completedtripsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode2 = {
        imgsrc : '../img/tab0thumb_inact_wide.png',
        imgactivesrc : '../img/tab0ride_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1ratinggreen_wide.png',
            imgactivesrc : '../img/tab1ratingwhite_wide.png',
            contentdivid : 'ratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1openratsgreen_wide.png',
            imgactivesrc : '../img/tab1openratswhite_wide.png',
            contentdivid : 'openratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
//            imgsrc : '../img/tab1receivedratsgreen_wide.png',
//            imgactivesrc : '../img/tab1receivedratswhite_wide.png',
//            contentdivid : 'receivedratingsUI',
//            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode3 = {
        imgsrc : '../img/tab0star_inact_wide.png',
        imgactivesrc : '../img/tab0star_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1favlistgreen_wide.png',
            imgactivesrc : '../img/tab1favlistwhite_wide.png',
            contentdivid : 'favlistUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1newfavgreen_wide.png',
            imgactivesrc : '../img/tab1newfavwhite_wide.png',
            contentdivid : 'newfavoritepickerUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode4 = {
        imgsrc : '../img/tab0euro_inact.png',
        imgactivesrc : '../img/tab0euro_act.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        }
        ]
    };

    //rider mode tree data
    var ridernode0 = {
        imgsrc : '../img/tab0home_inact_wide.png',
        imgactivesrc : '../img/tab0home_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/home1green_wide.png',
            imgactivesrc : '../img/home1white_wide.png',
            contentdivid : 'homeUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1profilegreen_wide.png',
            imgactivesrc : '../img/tab1profilewhite_wide.png',
            contentdivid : 'profileUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode1 = {
        imgsrc : '../img/tab0rider_inact_wide.png',
        imgactivesrc : '../img/tab0rider_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1NeuesGesuch_wide.png',
            imgactivesrc : '../img/tab1NeuesGesuchActive_wide.png',
            contentdivid : 'newsearchUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1MeineGesuche_wide.png',
            imgactivesrc : '../img/tab1MeineGesucheActive_wide.png',
            contentdivid : 'activesearchUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1AlteGesuche_wide.png',
            imgactivesrc : '../img/tab1AlteGesucheActive_wide.png',
            contentdivid : 'completedtripsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode2 = {
        imgsrc : '../img/tab0thumb_inact_wide.png',
        imgactivesrc : '../img/tab0ride_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1ratinggreen_wide.png',
            imgactivesrc : '../img/tab1ratingwhite_wide.png',
            contentdivid : 'ratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1openratsgreen_wide.png',
            imgactivesrc : '../img/tab1openratswhite_wide.png',
            contentdivid : 'openratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1receivedratsgreen_wide.png',
            imgactivesrc : '../img/tab1receivedratswhite_wide.png',
            contentdivid : 'receivedratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode3 = {
        imgsrc : '../img/tab0star_inact_wide.png',
        imgactivesrc : '../img/tab0star_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1favlistgreen_wide.png',
            imgactivesrc : '../img/tab1favlistwhite_wide.png',
            contentdivid : 'favlistUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1newfavgreen_wide.png',
            imgactivesrc : '../img/tab1newfavwhite_wide.png',
            contentdivid : 'newfavoritepickerUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode4 = {
        imgsrc : '../img/tab0euro_inact.png',
        imgactivesrc : '../img/tab0euro_act.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        }
        ]
    };

    var drivernodes = [drivernode0, drivernode1, drivernode2, drivernode3];
    var ridernodes = [ridernode0, ridernode1, ridernode2, ridernode3];

    var DUMMYPOSITION; /*new google.maps.LatLng(52.525798, 13.314266);*/


    var activeofferlist = '';
    var activesearchlist = '';
    var simpleroutexml = '';
    var matchlist = '';
    var inactsearchmatchlist = '';
    var inactoffermatchlist = '';
    var ridelist = '';
    var favoritelist = '';
    var ratingssummary = '';
    var openratingslist = '';
    var receivedratingslist = '';
    var favnames = new Array();
    var personalDetails;

    var modulemanagerTHIS = this;

    /* ------ public variabeles and methods ------ */
    return {
        displayedFullScreenMapId: '',

        username : "nick",

        offerfavsset : false,
        searchfavsset : false,
        modifyfavsset : false,

        activeofferlistdiv : 'activeofferlist',
        activeofferlisthtml : '',

        activesearchlistdiv : 'activesearchlist',
        activesearchlisthtml : '',

        completedtrips : 'completedtrips',
        completedtriplisthtml : '',

        favoritelistdiv : 'favlistUI',
        favoritelisthtml : '',

        ratingssummarydiv : 'ratingsUI',
        ratingssummaryhtml : '',

        openratingslistdiv : 'openratingsUI',
        openratingslisthtml : '',

        receivedratingslistdiv : 'receivedratingsUI',
        receivedratingslisthtml : '',

        currentdisplayedview : initialviewid,

        currentactivenodeindex : 0,
        currentactiveleafindex : 0,

        detailsClicked : false,

        clone : function (o) {
            function OneShotConstructor(){}
            OneShotConstructor.prototype = o;
            return new OneShotConstructor();
        },

        setupTabs: function(){
            //select tab tree depending on usermode
            var nodes;
            if(usermode==DRIVERMODE){
                nodes = drivernodes;
            }else if(usermode==RIDERMODE){
                nodes = ridernodes;
            }

            //traverse tree and set up dom elements
            for(var i=0; i< tabimgslvl_0.length; i++){
                if(i<nodes.length){
                    if(i==this.currentactivenodeindex){
                        document.getElementById(tabimgslvl_0[i]).src = nodes[i].imgactivesrc;
                        for(var j=0;j<tabimgslvl_1.length; j++){
                            if(i < nodes[i].leafs.length){
                                if(j==0){
                                    document.getElementById(tabimgslvl_1[j]).src = nodes[i].leafs[j].imgactivesrc;
                                }else
                                    document.getElementById(tabimgslvl_1[j]).src = nodes[i].leafs[j].imgsrc;
                            }
                        }
                    }else
                        document.getElementById(tabimgslvl_0[i]).src = nodes[i].imgsrc;
                }
            }
            this.setTabContent(0, 0);
        },

        setTabContent: function(acticvenodeindex, activeleafindex){

            //select tab tree depending on usermode
            var nodes;
            if(usermode==DRIVERMODE){
                nodes = drivernodes;
            }else if(usermode==RIDERMODE){
                nodes = ridernodes;
            }

            if(this.currentactivenodeindex==acticvenodeindex){
                if(this.currentactiveleafindex!=activeleafindex){
                    //set current leaf tab inactive
                    nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].isactive = false;
                    //set current leaf tab image inactive
                    document.getElementById(tabimgslvl_1[this.currentactiveleafindex]).src = nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].imgsrc;

                    //set new leaf tab active
                    nodes[acticvenodeindex].leafs[activeleafindex].isactive = true;
                    //set new leaf tab active image
                    document.getElementById(tabimgslvl_1[activeleafindex]).src = nodes[acticvenodeindex].leafs[activeleafindex].imgactivesrc;
                }
            }else {
                //set current node tab inactive
                nodes[this.currentactivenodeindex].isactive = false;
                //set current node tab image inactive
                document.getElementById(tabimgslvl_0[this.currentactivenodeindex]).src = nodes[this.currentactivenodeindex].imgsrc;

                //set new node tab active
                nodes[acticvenodeindex].isactive = true;
                //set new node tab active image
                document.getElementById(tabimgslvl_0[acticvenodeindex]).src = nodes[acticvenodeindex].imgactivesrc;

                //set current leaf tab inactive
                nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].isactive = false;
                //set current leaf tab image inactive
                document.getElementById(tabimgslvl_1[this.currentactiveleafindex]).src = nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].imgsrc;

                //set new leaf tab active
                nodes[acticvenodeindex].leafs[activeleafindex].isactive = true;
                //set new leaf tab active image
                document.getElementById(tabimgslvl_1[activeleafindex]).src = nodes[acticvenodeindex].leafs[activeleafindex].imgactivesrc;

                for(var i=0; i<nodes[acticvenodeindex].leafs.length;i++ ){
                    if(i != activeleafindex){
                        //set inactive leaf tab images
                        document.getElementById(tabimgslvl_1[i]).src = nodes[acticvenodeindex].leafs[i].imgsrc;
                    }
                }
            }

            //            //temporarily switch to fav-list (tab 3,1) instead of new favrotite (tab 3,0) for FOKUS DAY
            //            if(acticvenodeindex==3 && activeleafindex==0 && (this.currentactivenodeindex != 3 || this.currentactiveleafindex != 1) ){
            //                this.setTabContent(3,1);
            //                return false;
            //            }
            this.setView(nodes[acticvenodeindex].leafs[activeleafindex].contentdivid);
            this.currentactivenodeindex = acticvenodeindex;
            this.currentactiveleafindex = activeleafindex;
        },

        setActiveOfferList : function(list){
            activeofferlist = JSON.stringify(list);
        },

        setActiveSearchList : function(list){
            activesearchlist = JSON.stringify(list);
        },

        setMatches : function(list){
            matchlist = JSON.stringify(list);
        },

        setInactiveOfferMatches : function(list){
            inactoffermatchlist = 'undefined';
            inactoffermatchlist = JSON.stringify(list);
        },

        setInactiveSearchMatches : function(list){
            inactsearchmatchlist = 'undefined';
            inactsearchmatchlist = JSON.stringify(list);
        },

        setRide : function(offer){
            ridelist = JSON.stringify(offer);
        },

        setFavoriteList : function(list){
            favoritelist = JSON.stringify(list);
        },

        setRatingsSummary : function(list){
            ratingssummary = JSON.stringify(list);
        },

        setOpenRatingsList : function(list){
            openratingslist = JSON.stringify(list);
        },

        setReceivedRatingsList : function(list){
            receivedratingslist = JSON.stringify(list);
        },

        parsesimpleroute : function(routexml){
            var routearr = new Array();
            var routeExists = $(routexml).find('hasroute').text();
            if(routeExists!= null && routeExists != 'undefined' && typeof routeExists != 'undefined'){
                if(routeExists == 'true'){
                    $(routexml).find('coordinates').each(function(){
                        var latlnstr = $(this).text();
                        var latlnstrarr = latlnstr.split(' ');
                        for(var i=0;i<latlnstrarr.length-1;i++){
                            var coordstr = latlnstrarr[i];

                            var separatorindex = coordstr.indexOf(',');
                            var latstr = coordstr.substr(0, separatorindex);
                            var lnstr = coordstr.substr(separatorindex+1, coordstr.length-separatorindex+1);

                            var lat = parseFloat(latstr);
                            var ln = parseFloat(lnstr);

                            var latlnObj = new google.maps.LatLng(lat, ln);
                            routearr.push(latlnObj);
                        }
                    });

                    mapmod.setRoutePath(routearr);
                    return true;
                }else{//no route
                    showOverlayDialog('No route found!', '', 'OK', '', '', '');
                    return false;
                }
            }
        },

        parseactiveofferlist : function(){
            //var result = JSON.parse(activeofferlist);
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            //var array = JSON.parse(rides);
            var updatecount = 0;
            user=readCookie('username');
            /*if(typeof (result.list) != 'undefined' && typeof (result.list[0].Offer) != 'undefined'){
                if(typeof (result.list[0].Offer.length) == 'undefined'){
                    result.list[0].Offer = [result.list[0].Offer];
                }
                for(var i=0;i< result.list[0].Offer.length; i++){
                    var entry = result.list[0].Offer[i];

                    var startDate = new Date(entry.ridestartTime);
                    var oday = startDate.getDate();
                    if(oday < 10)oday = '0'+oday;
                    var omonth = startDate.getMonth()+1;
                    if(omonth < 10)omonth = '0'+omonth;
                    var oyear = startDate.getFullYear();
                    var ohours = startDate.getHours();
                    if(ohours < 10)ohours = '0'+ohours;
                    var omin = startDate.getMinutes();
                    if(omin < 10)omin = '0'+omin;

                    sb.append('<li><a name="r'+entry.rideId+'"></a>');
                    if (entry.updated == true) {
                        sb.append('<h3 class="linkslide_0 updated" id="r'+entry.rideId+'">');
                        sb.append('<span class="update" style="float: right; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; margin-right: 10px;">Update!</span>');
                        updatecount++;
                    }
                    else {
                        sb.append('<h3 class="linkslide_0" id="r'+entry.rideId+'">');
                    }
                    sb.append(oday +"."+omonth+"."+oyear+", "+ohours+":"+omin+' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startptAddress+'<br /><span style="margin-left: -34px;">Ziel:</span> '+entry.endptAddress+'</small></h3>');
                    sb.append('<div class="slide_0"></div>');
                    sb.append('</li>');
                }
            }else{
                sb.clear();
                sb.append('<p>No active listings available.</p>');
            }*/

            //RIDESHARE
            // alert('parseactiveofferlist');
            //offerAccessCounter++;
            //alert('rides.length='+rides.length);
            for (var i=0; i<rides.length; i++)
            {
                // if (!rides.hasOwnProperty(i)) continue;
                var prp = JSON.parse(rides[i]);
                //alert(rides[i]);
                var color = '';
                if (prp.driver!=user)
                    continue;
                //if (prp.agreedDriver == "" && prp.agreedCommuters.length == 0) color = 'solid orange'; //negotiation not initiated yet
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0 && prp.agreedCommuters.length != 0) color = 'solid green';  //ride booked
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length != 0) color = 'dotted green'; //negotiation started
                if (prp.rejectedDriver != "" || prp.rejectedCommuters != "") color = 'solid red'; //ride rejected
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                var d1 = new Date();
                d1.setTime(parseInt((prp.depDateTimeWindow.depDateTimeHigh) , 10));
                if (d1<=(new Date())){
                    continue;
                }
                //alert('2');
                var months = d.getMonth() + 1;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hoursEnd = d1.getHours();
                if (hoursEnd < 10) hoursEnd = '0' + hoursEnd;
                var minsEnd = d1.getMinutes();
                if (minsEnd < 10) minsEnd = '0' + minsEnd;
                RideShareSB.append('<li><a name="r'+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="r'+i+'" style="border: 2px '+ color + ';">');
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                var commuters = prp.commuters.toString().replace(",",", ");
                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "
                    +'<br />Deaprture: '+hours+":"+mins+' - '+hoursEnd+':'+minsEnd+
                    '<br /><small style="display: block; margin-left: 50px;"><span style="margin-left: -50px;">Start:</span> '+
                    prp.departureCity+'<br /><span style="margin-left: -50px;">End:</span> '+prp.destinationCity+'<br />'+
                    '<span style="margin-left: -50px;">Commuters: <strong style="color:black;">'+prp.commuters+'</strong></span> </small></h3>');
                //                RideShareSB.append(d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                //                    ' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+
                //                    prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            for (var i=0; i<rideRequests.length; i++)
            {
                if (!rideRequests.hasOwnProperty(i))
                    continue;
                var prp = JSON.parse(rideRequests[i]);
                //alert(prp.potentiallyAgreedRidePlans.length+' , '+prp.driverAgreedRidePlans.length+' , '+prp.potentialRidePlans.length+' , \''+prp.agreedRidePlan+'\'');
                if (prp.potentiallyAgreedRidePlans.length!=0 || prp.driverAgreedRidePlans.length!=0 || prp.potentialRidePlans.length!=0 || prp.agreedRidePlan!="" || prp.mode=="commuter"){
                    //alert('nothing is wrong');
                    continue;
                }
                //alert('halala ' + rideRequests.length + ' ' + rideRequests[i] + ' ' + i);
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                var d1 = new Date();
                d1.setTime(parseInt((prp.depDateTimeWindow.depDateTimeHigh) , 10));
                if (d1<=(new Date())) continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var hoursEnd = d1.getHours();
                if (hoursEnd < 10) hoursEnd = '0' + hoursEnd;
                var minsEnd = d1.getMinutes();
                if (minsEnd < 10) minsEnd = '0' + minsEnd;
                var id = rides.length+i;
                RideShareSB.append('<li><a name="u'+id+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u'+id+'" style="border: 2px '+ color + ';">');
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                RideShareSB.append('<small><style="color: black">'+day+', '+d.getDate() +"."+months+"."+d.getFullYear()+", "
                    +'<br />Deaprture: '+hours+":"+mins+' - '+hoursEnd+':'+minsEnd
                    +'</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                //                RideShareSB.append('<small><style="color: black">'+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+' Hour</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //RIDESHARE
            dummyTHIS.setdriverupdatecount(updatecount);        //dummyTHIS replaces this

            document.getElementById(dummyTHIS.activeofferlistdiv).innerHTML = RideShareSB.toString();

            setupUITabList();
        //alert('rides length=' + rides.length+', rideRequests length='+rideRequests.length);
        },


        parseUnmatchedRideRequest: function( flag){
            //var result = JSON.parse(activesearchlist);
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            var updatecount = 0;
            for (var i=0; i<rideRequests.length; i++)
            {
                if (!rideRequests.hasOwnProperty(i)) continue;
                var prp = JSON.parse(rideRequests[i]);
                //alert('halala ' + rideRequests.length + ' ' + rideRequests[i] + ' ' + i);
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                var d1 = new Date();
                d1.setTime(parseInt((prp.depDateTimeWindow.depDateTimeHigh) , 10));
                if (d1<=(new Date())) continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                RideShareSB.append('<li><a name="u'+rides.length+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u'+rides.length+i+'" style="border: 2px '+ color + ';">');
                RideShareSB.append(d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //alert('hey its me');
            //RIDESHARE
            if (flag == 0) //rider
            {
                dummyTHIS.setriderupdatecount(updatecount);
                document.getElementById(dummyTHIS.activesearchlistdiv).innerHTML = RideShareSB.toString();
            }
            else
            {
                dummyTHIS.setdriverupdatecount(updatecount);
                document.getElementById(dummyTHIS.activeofferlistdiv).innerHTML = RideShareSB.toString();
            }
            setupUITabList();
        },

        parseactivesearcheslist : function(){
            var result = JSON.parse(activesearchlist);
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            var updatecount = 0;
            //alert('rides.length='+rides.length);
            //RIDESHARE
            for (var i=0; i<rides.length; i++)
            {
                // if (!rides.hasOwnProperty(i))
                //    continue;
                var prp = JSON.parse(rides[i]);
                //alert('1 ' + rides.length + ' ' + rides[i] + ' ' + i);
                var color = '';
                if(prp.driver==user)
                    continue;
                //if (prp.agreedDriver == "" && prp.agreedCommuters.length == 0) color = 'solid orange'; //negotiation not initiated yet
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0 && prp.agreedCommuters.length != 0) color = 'solid green';  //ride booked
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length != 0) color = 'dotted green'; //negotiation started
                if (prp.rejectedDriver != "" || prp.rejectedCommuters != "") color = 'solid red'; //ride rejected
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                var d1 = new Date();
                d1.setTime(parseInt((prp.depDateTimeWindow.depDateTimeHigh) , 10));
                if (d1<(new Date()))
                    continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var hoursEnd = d1.getHours();
                if (hoursEnd < 10) hoursEnd = '0' + hoursEnd;
                var minsEnd = d1.getMinutes();
                if (minsEnd < 10) minsEnd = '0' + minsEnd;

                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                var driverstr=prp.driver+" ( + you + "+(prp.commuters.length-1)+" commuter)";
                RideShareSB.append('<li><a name="r'+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="r'+i+'" style="border: 2px '+ color + ';">');
                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "
                    +'<br />Deaprture: '+hours+":"+mins+' - '+hoursEnd+':'+minsEnd+
                    '<br /><small style="display: block; margin-left: 50px;"><span style="margin-left: -50px;">Start:</span> '+
                    prp.departureCity+'<br /><span style="margin-left: -50px;">End:</span> '+prp.destinationCity+'<br />'+
                    '<span style="margin-left: -60px;">Driver: </span>&nbsp;&nbsp;&nbsp;&nbsp;'+driverstr+' </small></h3>');
                //                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                //                    ' <br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+
                //                    prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            for (var i=0; i<rideRequests.length; i++)
            {
                if (!rideRequests.hasOwnProperty(i))
                    continue;
                var prp = JSON.parse(rideRequests[i]);
                //alert('1halala ' + rideRequests.length + ' ' + rideRequests[i] + ' ' + i);
                if (prp.potentiallyAgreedRidePlans.length!=0 || prp.driverAgreedRidePlans.length!=0 || prp.potentialRidePlans.length!=0 || prp.agreedRidePlan!="" || prp.mode=="driver"){
                    //alert('nothing is wrong');
                    continue;
                }
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                var d1 = new Date();
                d1.setTime(parseInt((prp.depDateTimeWindow.depDateTimeHigh) , 10));
                if (d1<(new Date()))
                    continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var hoursEnd = d1.getHours();
                if (hoursEnd < 10) hoursEnd = '0' + hoursEnd;
                var minsEnd = d1.getMinutes();
                if (minsEnd < 10) minsEnd = '0' + minsEnd;
                var id = rides.length+i;
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                RideShareSB.append('<li><a name="u'+id+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u'+id+'" style="border: 2px '+ color + ';">');
                RideShareSB.append('<small><style="color: black">'+day+', '+d.getDate() +"."+months+"."+d.getFullYear()+", "
                    +'<br />Deaprture: '+hours+":"+mins+' - '+hoursEnd+':'+minsEnd
                    +'</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //RIDESHARE

            dummyTHIS.setriderupdatecount(updatecount);

            document.getElementById(dummyTHIS.activesearchlistdiv).innerHTML = RideShareSB.toString();
            setupUITabList();
        },

        parsecompletedtriplist : function(){
            //alert('completed');
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            var updatecount = 0;
            /* try {
                alert(activesearchlist);
                if(usermode==RIDERMODE)
                    var completedrides = JSON.parse(activesearchlist);

            } catch (e) {
                alert('rider unable to parse JSON');
            }

            try {
                alert(activeofferlist);
                if(usermode==DRIVERMODE)
                    var completeddrives = JSON.parse(activeofferlist);
            } catch (e) {
                alert('driver unable to parse JSON');
            }

            var completedtriplist = new Array();

            var completedridesarr = new Array();
            var completeddrivesarr = new Array();

            //generating html list from completedtriplist
            var sb = new StringBuilder();

            if(usermode == RIDERMODE){

                sb.append('<h3>Old Searches</h3>');
                alert(completedrides.list.toString() +' - '+ completedrides.list[0].Search);
                //add completed rides to completedtriplist
                if(typeof (completedrides.list) != 'undefined' && typeof (completedrides.list[0].Search) != 'undefined'){
                    if(typeof (completedrides.list[0].Search.length) == 'undefined'){
                        completedrides.list[0].Search = [completedrides.list[0].Search];
                    }
                    for(var i=0;i< completedrides.list[0].Search.length; i++){
                        var entry = completedrides.list[0].Search[i];
                        //completedridesarr.push(entry);

                        var startDate = new Date(entry.ridestartTimeEarliest);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        sb.append('<li>');
                        sb.append('<h3 class="linkslide_0" id="r'+entry.riderRouteId+'">');
                        sb.append(oday +"."+omonth+"."+oyear+", "+ohours+":"+omin+' Hour<br />');

                        sb.append('<small><table>');
                        sb.append('<tr>');
                        sb.append('<td valign="top" align="right" style="color:#666666;">Start point:</td>');
                        sb.append('<td valign="top">'+entry.startptAddress+'</td>');
                        sb.append('</tr>');
                        sb.append('<tr>');
                        sb.append('<td valign="top" align="right" style="color:#666666;">End time:</td>');
                        sb.append('<td valign="top">'+entry.endptAddress+'</td>');
                        sb.append('</tr>');
                        sb.append('</table></small></h3>');

                        //                        sb.append('<small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Abholort:</span> '+entry.startptAddress+'<br /><span style="margin-left: -34px;">Ziel:</span> '+entry.endptAddress+'</small></h3>');
                        sb.append('<div class="slide_0"></div>');
                        sb.append('</li>');
                    }
                }else{
                    sb.clear();
                    sb.append('<h3>No active searches available.</h3>');
                }
            }
            else if(usermode == DRIVERMODE){
                sb.append('<h3>Old Offers</h3>');

                //add completed drives to completedtriplist
                if(typeof (completeddrives.list) != 'undefined' && typeof (completeddrives.list[0].Offer) != 'undefined'){
                    if(typeof (completeddrives.list[0].Offer.length) == 'undefined'){
                        completeddrives.list[0].Offer = [completeddrives.list[0].Offer];
                    }
                    for(var i=0;i< completeddrives.list[0].Offer.length; i++){
                        var entry = completeddrives.list[0].Offer[i];
                        completeddrivesarr.push(entry);

                        var startDate = new Date(entry.ridestartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        sb.append('<li><a name="r'+entry.rideId+'"></a>');
                        sb.append('<h3 class="linkslide_0" id="r'+entry.rideId+'">');
                        sb.append(oday +"."+omonth+"."+oyear+", "+ohours+":"+omin+' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startptAddress+'<br /><span style="margin-left: -34px;">End:</span> '+entry.endptAddress+'</small></h3>');
                        sb.append('<div class="slide_0"></div>');
                        sb.append('</li>');
                    }
                }else{
                    sb.clear();
                    sb.append('<h3>No old offers available.</h3>');
                }

            }
            document.getElementById(this.completedtrips).innerHTML = sb.toString();

            setupCompletedTripUITabList(); */
            //RIDESHARE

            for (var i=0; i<rides.length; i++)
            {
                if (!rides.hasOwnProperty(i)) continue;
                var prp = JSON.parse(rides[i]);
                //alert(rides[i]);
                var color = '';

                //if (prp.agreedDriver == "" && prp.agreedCommuters.length == 0) color = 'solid orange'; //negotiation not initiated yet
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0 && prp.agreedCommuters.length != 0) color = 'solid green';  //ride booked
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length != 0) color = 'dotted green'; //negotiation started
                if (prp.rejectedDriver != "" || prp.rejectedCommuters != "") color = 'solid red'; //ride rejected
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                var d1 = new Date();
                d1.setTime(parseInt((prp.depDateTimeWindow.depDateTimeHigh) , 10));
                if (d1>(new Date())) continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var hoursEnd = d1.getHours();
                if (hoursEnd < 10) hoursEnd = '0' + hoursEnd;
                var minsEnd = d1.getMinutes();
                if (minsEnd < 10) minsEnd = '0' + minsEnd;
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                var driverstr=prp.driver+" ( + "+prp.commuters.length+" commuter)";
                RideShareSB.append('<li><a name="r'+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="r'+i+'" style="border: 2px '+ color + ';">');
                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "
                    +'<br />Deaprture: '+hours+":"+mins+' - '+hoursEnd+':'+minsEnd+
                    '<br /><small style="display: block; margin-left: 50px;"><span style="margin-left: -50px;">Start:</span> '+
                    prp.departureCity+'<br /><span style="margin-left: -50px;">End:</span> '+prp.destinationCity+'<br />'+
                    '<span style="margin-left: -60px;">Driver: </span>&nbsp;&nbsp;&nbsp;&nbsp;'+driverstr+' </small></h3>');
                //                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                //                    ' <br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+
                //                    prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            for (var i=0; i<rideRequests.length; i++)
            {
                if (!rideRequests.hasOwnProperty(i)) continue;
                var prp = JSON.parse(rideRequests[i]);
                if (prp.mode=='driver' && usermode==RIDERMODE)
                    continue;
                if (prp.potentiallyAgreedRidePlans.length!=0 || prp.driverAgreedRidePlans.length!=0 || prp.potentialRidePlans.length!=0 || prp.agreedRidePlan!="" || prp.mode=="driver"){
                    //alert('nothing is wrong');
                    continue;
                }
                //alert('1halala ' + rideRequests.length + ' ' + rideRequests[i] + ' ' + i);
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                var d1 = new Date();
                d1.setTime(parseInt((prp.depDateTimeWindow.depDateTimeHigh) , 10));
                if (d1>(new Date()))
                    continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var hoursEnd = d1.getHours();
                if (hoursEnd < 10) hoursEnd = '0' + hoursEnd;
                var minsEnd = d1.getMinutes();
                if (minsEnd < 10) minsEnd = '0' + minsEnd;
                var id = rides.length+i;
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                RideShareSB.append('<li><a name="u'+id+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u'+id+'" style="border: 2px '+ color + ';">');
                RideShareSB.append('<small><style="color: black">'+day+', '+d.getDate() +"."+months+"."+d.getFullYear()+", "
                    +'<br />Departure: '+hours+":"+mins+' - '+hoursEnd+':'+minsEnd
                    +'</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //RIDESHARE

            dummyTHIS.setriderupdatecount(updatecount);

            document.getElementById(dummyTHIS.completedtrips).innerHTML = RideShareSB.toString();

            setupCompletedTripUITabList();
        },

        setupViaPtRoute : function(rideID){
            //
            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+ rideID +'/route', false, function(routeResult){
                //implement success callback here

                //parse route coords
                var routearr = new Array();
                if(typeof (routeResult.list) != 'undefined' && typeof (routeResult.list[0].list[0].Coordinate) != 'undefined'){
                    /*if(typeof (routeResult.list[0].FavoritePointResponse.length) == 'undefined'){
                    	routeResult.list[0].FavoritePointResponse = [routeResult.list[0].FavoritePointResponse];
                	}*/
                    for(var i=0;i< routeResult.list[0].list[0].Coordinate.length; i++){
                        var entry = routeResult.list[0].list[0].Coordinate[i];

                        var coordLat = entry.latititude;
                        var coordLon = entry.longitude;

                        var latlnObj = new google.maps.LatLng(coordLat, coordLon);
                        routearr.push(latlnObj);
                    }
                    mapmod.setRoutePath(routearr);
                }else{//no route
                    showOverlayDialog('No route was found!', '', 'OK', '', '', '');
                    return false;
                }

                //parse viapoint start coords
                var viastartptarr = new Array();
                if(typeof (routeResult.list[0].list[1].Coordinate) != 'undefined'){
                    if(typeof (routeResult.list[0].list[1].Coordinate.length) == 'undefined'){
                        routeResult.list[0].list[1].Coordinate = [routeResult.list[0].list[1].Coordinate];
                    }
                    for(var i=0;i< routeResult.list[0].list[1].Coordinate.length; i++){
                        var entry = routeResult.list[0].list[1].Coordinate[i];

                        var coordLat1 = entry.latititude;
                        var coordLon1 = entry.longitude;

                        var latlnObj1 = new google.maps.LatLng(coordLat1, coordLon1);
                        viastartptarr.push(latlnObj1);
                    }
                    mapmod.setViaStartPoints(viastartptarr);

                }else{//no route
                //return false;
                }

                //parse viapoint destination coords
                var viadestptarr = new Array();
                if(routeResult.list[0].list[2]){
                    if(typeof (routeResult.list[0].list[2].Coordinate) != 'undefined'){
                        if(typeof (routeResult.list[0].list[2].Coordinate.length) == 'undefined'){
                            routeResult.list[0].list[2].Coordinate = [routeResult.list[0].list[2].Coordinate];
                        }
                        for(var i=0;i< routeResult.list[0].list[2].Coordinate.length; i++){
                            var entry = routeResult.list[0].list[2].Coordinate[i];

                            var coordLat1 = entry.latititude;
                            var coordLon1 = entry.longitude;

                            var latlnObj1 = new google.maps.LatLng(coordLat1, coordLon1);
                            viadestptarr.push(latlnObj1);
                        }
                        mapmod.setViaDestPoints(viadestptarr);

                    }else{//no route
                //return false;
                }
                }

                fokus.openride.mobclient.controller.modules.modulemanager.setFullScreenMapView('viaptroutegmapscreencontainer');
                return true;
            }, function(){
                //implemet error callback here
                showOverlayDialog('The route could not be determined! Check your internet connection.', '', 'OK', '', '', '');
                return false;
            });
        },

        parsematcheslist : function(rideId, contentDiv){
            //  alert('parsematcheslist');
            var myflag = 0;
            if (myflag == 0) this.myparselist(rideId , contentDiv);
            else
            {
                //alert('in here');
                try {
                    var result = JSON.parse(matchlist);
                } catch (e) {
                    result = 'undefined';
                }
                var sb = new StringBuilder();
                this.tmpRide = '';

                if(typeof (result.list) != 'undefined' && typeof (result.list[0].MatchResponse) != 'undefined'){
                    if(typeof (result.list[0].MatchResponse.length) == 'undefined'){
                        result.list[0].MatchResponse = [result.list[0].MatchResponse];
                    }
                    else {
                        // We have more than 1 match --> sort them by state (1st: booked, 2nd: undecided, 3rd: rejected + n/a)
                        result.list[0].MatchResponse = $(result.list[0].MatchResponse).sort(function(a, b) {
                            acc_a = a.driverState == 1 && a.riderState == 1;
                            acc_b = b.driverState == 1 && b.riderState == 1;
                            rej_a = fokus.openride.mobclient.controller.modules.modulemanager.isrejectedmatch(a.driverState, a.riderState);
                            rej_b = fokus.openride.mobclient.controller.modules.modulemanager.isrejectedmatch(b.driverState, b.riderState);
                            if ((acc_a && acc_b) || (rej_a && rej_b)) {
                                return 0;
                            }
                            if (acc_a) return -1;
                            if (acc_b) return 1;
                            if (rej_a) return 1;
                            if (rej_b) return -1;
                            return 0;

                        });
                    }

                    for(var i=0;i< result.list[0].MatchResponse.length; i++){
                        var entry = result.list[0].MatchResponse[i];
                        this.tmpRide = entry;

                        var startDate = new Date(entry.matchExpectedStartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        var priceEuro = entry.matchPriceCents/100;
                        priceEuro = priceEuro.toFixed(2).replace('.',',');

                        //DEBUG
                        //entry.riderState=1
                        //entry.driverState=0

                        var isrejected = this.isrejectedmatch(entry.driverState, entry.riderState);

                        var stateHighlightColor = '#fffacd'; // yellow
                        if (entry.driverState == 1 && entry.riderState == 1)
                            stateHighlightColor = '#f0fff0'; // green
                        else if (isrejected)
                            stateHighlightColor = '#ffe4e1'; // red



                        // Beginning of matching row:
                        sb.append('<div class="matching-row" style="padding: 5px; border-top: 1px solid #e2e2e2;">');

                        // Show details only for unrejected matches:
                        if (!isrejected) {
                            sb.append('  <div class="profile-info-short" style="margin: 0 15px 0 0; float: left; text-align: right;">');
                            if (usermode == DRIVERMODE) {
                                sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.riderNickname + '_thumb.jpg" alt="Profilbild von ' + entry.riderNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.riderRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            else {
                                sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.driverNickname + '_thumb.jpg" alt="Profilbild von ' + entry.driverNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.driverRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            sb.append('  </div>');
                        }

                        sb.append('  <div style="margin: -5px -5px 3px 0; padding: 1px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
                        sb.append('    <form class="ride">');
                        sb.append(this.getMatchStateInfoControls(entry.rideid, entry.riderRouteId, entry.driverState, entry.riderState, contentDiv));
                        sb.append('    </form>');
                        sb.append('  </div>');

                        // Show details only for unrejected matches:
                        if (!isrejected) {

                            if (usermode == DRIVERMODE) {
                                var sharedDistanceKm = entry.matchSharedDistanceMeters/1000;
                                sharedDistanceKm = round(sharedDistanceKm,2);
                                var detourKm = entry.matchDetourMeters/1000;
                                detourKm = round(detourKm,2);

                                var start = entry.startPtAddress;
                                var end = entry.endPtAddress;

                                if (start.match("^.*:.*$")) {
                                    start = start.split(':')[1];
                                }

                                if (end.match("^.*:.*$")) {
                                    end = end.split(':')[1];
                                }

                                sb.append('  <div style="line-height: 150%; padding-left: 75px;">');
                                sb.append('    <strong>' + entry.riderNickname + '</strong> &ndash;<br />');
                                sb.append('    <small>Estimated drving time: ' + ohours + ':' + omin + ' Hour, driving distance: '+sharedDistanceKm+' km, Detour: '+detourKm+' km, Best offer: ' + round(entry.matchPriceCents/100,2) + ' &euro;, Anz. Pers.: ' + entry.noOfPassengers);
                                if (typeof (entry.riderMobilePhoneNo) != 'undefined') {
                                    sb.append(', Mobile: <a href="tel:' + entry.riderMobilePhoneNo + '" class="phone">' + entry.riderMobilePhoneNo + '</a>');
                                }

                                sb.append('</small><small><table>');
                                sb.append('<tr>');
                                sb.append('<td valign="top" align="right" style="color:#666666;">Abholort:</td>');
                                sb.append('<td valign="top">'+start+'</td>');
                                sb.append('</tr>');
                                sb.append('<tr>');
                                sb.append('<td valign="top" align="right" style="color:#666666;">End:</td>');
                                sb.append('<td valign="top">'+end+'</td>');
                                sb.append('</tr>');
                                sb.append('</table></small>');

                                //                            sb.append('</small><br style="clear: right;" /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+start+'<br /><span style="margin-left: -34px;">Ziel:</span> '+end+'</small>');
                                sb.append('  </div>');
                            }
                            else {
                                sb.append(' <div style="line-height: 140%; padding-left: 75px;">');
                                sb.append('   <strong>' + entry.driverNickname + '</strong> &ndash;<br />');
                                sb.append('   <small>Estimated driving time: ' + ohours + ':' + omin + ' Hour, driving distance: ' + round(entry.matchPriceCents/100,2) + ' &euro;');
                                if (typeof (entry.driverMobilePhoneNo) != 'undefined') {
                                    sb.append('<br />Mobile: <a href="tel:' + entry.driverMobilePhoneNo + '" class="phone">' + entry.driverMobilePhoneNo + '</a>');
                                    sb.append('<br />Car: ' + entry.driverCarBrand + ', ' + entry.driverCarColour);
                                    if (typeof (entry.driverCarBuildYear) != 'undefined' && entry.driverCarBuildYear != '') {
                                        sb.append(', Bj. ' + entry.driverCarBuildYear);
                                    }
                                    if (typeof (entry.driverCarPlateNo) != 'undefined' && entry.driverCarPlateNo != '') {
                                        sb.append(', Kennz. ' + entry.driverCarPlateNo);
                                    }
                                }
                                sb.append('</small><br style="clear: both;" />');
                                sb.append(' </div>');
                            }
                        }
                        else {
                            sb.append(' <div style="line-height: 140%;">');
                            if (usermode == DRIVERMODE) {
                                sb.append('   <small><strong>' + entry.riderNickname + '</strong></small>');
                            }
                            else {
                                sb.append('   <small><strong>' + entry.driverNickname + '</strong></small>');
                            }
                            sb.append(' </div>');
                        }
                        sb.append('</div>');
                    }
                }
                else{
                    sb.clear();
                    if (usermode == DRIVERMODE) {
                        sb.append('<p>Unfortunately, no suitable rider was found.</p>');
                    }
                    else {
                        var searchExternalLink = 'javascript:href="http://www.efa-bw.de/nvbw/XSLT_TRIP_REQUEST2?language=de"';
                        sb.append('<p>Unfortunately, no suitable driver was found.</p>');
                    }
                }

                // Buttons to change or delete a ride. Show buttons only if driver and ride not accapted/declined the offer/search.
                var showRouteInvocation;
                var realRideId = rideId.replace('r','');
                var deleteRideInvocation = "javascript:showOverlayDialog('Are you sure you want to delete this trip?', '', '      yes      ', 'fokus.openride.mobclient.controller.modules.modulemanager.deleteRide("+realRideId+");', '     no     ', '');";
                showRouteInvocation = "javascript:fokus.openride.mobclient.controller.modules.modulemanager.setupViaPtRoute(\'"+realRideId+"\');";
                var modRide = "fokus.openride.mobclient.controller.modules.modulemanager.modifyRide("+realRideId+")";
                if ((typeof (this.tmpRide.driverState) == 'undefined') && (typeof (this.tmpRide.riderState) == 'undefined')) {
                    sb.append('<form>');
                    sb.append('  <div style="padding: 5px 0; text-align: center; clear: both;">');

                    if(usermode == DRIVERMODE) {
                        sb.append('    <input type="button" class="rounded compact" value="&Auml;ndern" onclick="'+modRide+'" style="width: 72px;" />');
                        sb.append('    <input type="button" class="rounded compact" value="L&ouml;schen" onclick="'+deleteRideInvocation+'" style="width: 80px;" />');
                        sb.append('    <input type="button" class="rounded compact" value="Route anzeigen" onclick="'+showRouteInvocation+'" style="width: 130px;" />');
                    }
                    else {
                        sb.append('  <a href="http://www.efa-bw.de/nvbw/XSLT_TRIP_REQUEST2?language=de">Alternativ &uuml;ber die &Ouml;PNV-Fahrplanauskunft Ba-W&uuml; search</a><br /><br />');
                        sb.append('    <input type="button" class="rounded compact" value="&Auml;ndern" onclick="'+modRide+'" style="width: 141px;" />');
                        sb.append('    <input type="button" class="rounded compact" value="L&ouml;schen" onclick="'+deleteRideInvocation+'" style="width: 141px;" />');

                        var searchExternalLink = "javascript:window.location.href='http://www.efa-bw.de/nvbw/XSLT_TRIP_REQUEST2?language=de'";
                        sb.append('    <br /><br /><input type="button" class="rounded compact" value="Im &Ouml;PNV suchen" onclick="'+searchExternalLink+'" style="width: 290px;" />');

                        /*Here the rider route (centered on the fetch point) wlil be linked to the button*/
                        var showFetchPtInvocation = "fokus.openride.mobclient.controller.modules.modulemanager.setFullScreenMapView('searchroutegmapscreencontainer');"
                        sb.append('  <div style="padding: 5px 0; text-align: center;">');
                        sb.append('    <input type="button" class="rounded compact" value="Abholpunkt anzeigen" onclick="'+showFetchPtInvocation+'" style="width: 290px;" />');
                        sb.append('  </div>');
                    }
                    sb.append('  </div>');
                    sb.append('</form>');
                } else {
                    realRideId = rideId.replace('r','');
                    showRouteInvocation = "javascript:fokus.openride.mobclient.controller.modules.modulemanager.setupViaPtRoute(\'"+realRideId+"\');";
                    if(usermode == DRIVERMODE) {
                        sb.append('  <div style="padding: 5px 0; text-align: center;">');
                        sb.append('    <input type="button" class="rounded compact" value="Route anzeigen" onclick="'+showRouteInvocation+'" style="width: 290px;" />');
                        sb.append('  </div>');
                    }
                }

                if (contentDiv) {
                    activeMatchContentDiv = contentDiv;
                }

                activeMatchContentDiv[0].innerHTML = sb.toString();

                // Remove update notification
                if (activeMatchContentDiv.prev("h3").is(".updated")) {
                    activeMatchContentDiv.prev("h3").removeClass("updated");
                    activeMatchContentDiv.prev("h3").find("span.update").remove();
                    if(usermode == DRIVERMODE) {
                        this.reducedriverupdatecount();
                    }
                    else {
                        this.reduceriderupdatecount();
                    }
                }
            }
        },


        myparselist : function(rideId , contentDiv)
        {
            var prp;
            var unmatched = false;
            user = readCookie('username');
            pass = readCookie('password');
            var RideShareSB = new StringBuilder();
            //alert(prp.agreedDriver + ' ' + user);
            /*for (var t=0; t<rides.length; t++)
                    {*/
            //alert(rideId);
            var id1 = parseInt(rideId.substring(1));
            var id = id1;
            //alert(id + ' hello from us ' + rides[id]);
            if (rideId.charAt(0) == 'u') unmatched = true;
            else prp = JSON.parse(rides[id]);

            //alert('id '+id+' '+rides[id]);
            var stateHighlightColor = '#fffacd';
            var acc = "myaccept('"+id+"')";
            var rej = "myreject('"+id+"')";
            var currency = '';
            //if (prp.agreedDriver != "") stateHighlightColor = '#7cfc00'; // driver already agreed to this ride

            //var myaccept = "fokus.openride.mobclient.controller.modules.modulemanager.myaccept("+ ridePlan +")";
            //var myreject = "fokus.openride.mobclient.controller.modules.modulemanager.myreject("+ ridePlan +")";
            RideShareSB.append('<div class="matching-row" style="padding: 12px; border-top: 1px solid #e2e2e2;">');
            RideShareSB.append('  <div class="profile-info-short" style="margin: 0 10px 0 0; float: left; text-align: right; ">');
            RideShareSB.append('    <small>' + 100 + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
            RideShareSB.append('  </div>');

            RideShareSB.append('  <div style="margin: -5px -5px 3px 0; padding: 5px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
            RideShareSB.append('    <form class="ride">');
            if (!unmatched)
            {

                var index1 = $.inArray(user, prp.potentiallyAgreedCommuters);
                var index2 = $.inArray(user, prp.agreedCommuters);
                if (usermode == DRIVERMODE && prp.agreedDriver == "")
                    RideShareSB.append('<small>Take this ride?</small><br><input type="button" class="rounded compact" value="Accept" onclick="'+acc+'" /><br><input type="button" class="rounded compact" value="Reject" onclick="'+rej+'" />');
                else if (usermode == RIDERMODE && prp.agreedDriver != "" && index1>-1){
                    RideShareSB.append('<small>Take this ride?</small><br><input type="button" class="rounded compact" value="Accept" onclick="'+acc+'" /><br><input type="button" class="rounded compact" value="Reject" onclick="'+rej+'" />');

                }
                else if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0)
                    RideShareSB.append('<small>Ride booked! </small>');
                else if ((prp.agreedDriver == "" && prp.potentiallyAgreedDriver == "") ||
                    (prp.agreedCommuters.length == 0 && prp.potentiallyAgreedCommuters.length == 0))
                    RideShareSB.append('<small>Ride rejected! </small>');
                else{
                    if (usermode==DRIVERMODE)
                        RideShareSB.append('<small>Waiting for confirmation of commuters! </small>');
                    else
                        RideShareSB.append('<small>Waiting for confirmation of driver! </small>');
                }

            }
            else
            {
                prp = JSON.parse(rideRequests[id - rides.length]);
                //alert(rideRequests[id-rides.length]);
                RideShareSB.append('<small>No matches found for this ride! </small>');
                RideShareSB.append('<input type="button" class="rounded compact" value="Delete Ride" onclick="rideDelete('+id+')" />');
            }
            //alert(JSON.stringify(prp));
            RideShareSB.append('    </form>');
            RideShareSB.append('  </div>');
            var counterparts = '';

            if (usermode == DRIVERMODE) counterparts = prp.commuters;
            else    counterparts = prp.driver;
            if (typeof counterparts === "undefined") counterparts = 'none';
            if (usermode == DRIVERMODE)
                RideShareSB.append('  <div style="line-height: 150%; padding-left: 75px;">Commuters:<br/>');
            else
                RideShareSB.append('  <div style="line-height: 150%; padding-left: 75px;">Driver:<br/>');

            var ratingsPopUp;
            var userID;
            //alert(counterparts);
            counterparts=counterparts.toString();
            //if (counterparts.indexOf(",")!=-1){
            var counterpartlist = counterparts.split(",");
            //alert(counterpartlist.length + ' ' + JSON.stringify(counterpartlist));
            for (var i=0;i<counterpartlist.length;i++){
                var counterpart = counterpartlist[i];
                //alert(counterpart);
                if (counterpart=="none"){
                    RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterpart+"\" />");
                    continue;
                }
                $.ajax({//get subject id
                    type:"GET",
                    url:DimitrisRemotePrefix+DimitrisRemote+"/subject/byURI/"+counterpart,
                    async:false,
                    crossDomain:true,
                    username:user,
                    password:pass,
                    beforeSend : function(xhr) {
                        xhr.withCredentials = true;
                        xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
                    },
                    accepts: "application/json",
                    dataType: "json",
                    success:function(data, textStatus, jqXHR){
                        //alert('success1 '+JSON.stringify(data));
                        if (data["versionInfo"]["previousVersion"]=="none" || typeof(data["currentReputationReport"])=='undefined'){
                            RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Rating For "+counterpart+"', 'No Rating Avialble', 'X', '', '', '');\" value=\""+counterpart+"\" />");

                        }
                        else{
                            //alert(JSON.stringify(data.subject_id));
                            //get profile
                            var personal;
                            $.ajax({
                                type: "GET",
                                url: PeerManagerPrefix + PeerMenager + '/users/'+counterpart+'/profile',//'/api/register/' + user,
                                data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                                crossDomain: true,
                                contentType:  "application/json; charset=UTF-8",
                                accepts: "application/json",
                                dataType: "json",
                                username: this.username,
                                password: this.password,
                                beforeSend: function (xhr)
                                {
                                    xhr.withCredentials = true,
                                    xhr.setRequestHeader('Authorization' , 'Basic ' + this.username+':'+pass);
                                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                },
                                async: false,
                                success: function(data, textStatus, jqXHR){
                                    personal = data;
                                },
                                error: function(jq , textStatus , errorThrown){
                                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                                }
                            });
                            $.ajax({//get subject reputation
                                type:"GET",
                                url:DimitrisRemotePrefix+DimitrisRemote+"/"+data["currentReputationReport"]["uri"],
                                async:false,
                                crossDomain:true,
                                username:user,
                                password:pass,
                                beforeSend : function(xhr) {
                                    xhr.withCredentials = true;
                                    xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
                                },
                                accepts: "application/json",
                                dataType: "json",
                                success:function(data, textStatus, jqXHR){
                                    if (usermode == RIDERMODE)
                                        RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showRatingDialog('"+counterpart+"',"
                                            +data.json.average_StarRating+","
                                            +(data.json.total_StarRating/data.json.average_StarRating)+","
                                            +data.json.average_OnTime+","
                                            +data.json.average_Friendly+",'"
                                            +personal.mobilePhoneNumber+"','"
                                            +personal.carColour+ " " + personal.carBrand
                                            +"');\" value=\""+counterpart+"\" />");
                                    else
                                        RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showRatingDialog('"+counterpart+"',"
                                            +data.json.average_StarRating+","
                                            +(data.json.total_StarRating/data.json.average_StarRating)+","
                                            +data.json.average_OnTime+","
                                            +data.json.average_Friendly+",'"
                                            +personal.mobilePhoneNumber+"','"
                                            +"undefined undefined"
                                            +"');\" value=\""+counterpart+"\" />");
                                //                                    RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Rating For "+counterpart+"', '"
                                //                                        +ratingsPopUp
                                //                                        +"', 'X', '', '', '');\" value=\""+counterpart+"\" />");

                                },
                                error:function(jq,textStatus,errorThrown){
                                    //alert('fail');
                                    RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterpart+"\" />");

                                }
                            });
                        }
                    },
                    error:function(jq,textStatus,errorThrown){
                        //alert('fail1');
                        RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterpart+"\" />");
                    }
                });
            }
            //            }
            //            else{
            //                $.ajax({//get subject id
            //                    type:"GET",
            //                    url:"http://"+DimitrisRemote+"/subject/byURI/"+counterparts,
            //                    async:false,
            //                    crossDomain:true,
            //                    username:user,
            //                    password:pass,
            //                    beforeSend : function(xhr) {
            //                        xhr.withCredentials = true;
            //                        xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
            //                    },
            //                    accepts: "application/json",
            //                    dataType: "json",
            //                    success:function(data, textStatus, jqXHR){
            //                        //alert('success1 '+JSON.stringify(data));
            //
            //                        //alert(JSON.stringify(data.subject_id));
            //                        $.ajax({//get subject reputation
            //                            type:"GET",
            //                            url:"http://"+DimitrisRemote+"/"+data["currentReputationReport"]["uri"],
            //                            async:false,
            //                            crossDomain:true,
            //                            username:user,
            //                            password:pass,
            //                            beforeSend : function(xhr) {
            //                                xhr.withCredentials = true;
            //                                xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
            //                            },
            //                            accepts: "application/json",
            //                            dataType: "json",
            //                            success:function(data, textStatus, jqXHR){
            //                                //alert('success ' + JSON.stringify(data));
            //                                ratingsPopUp='<table><tr><td ><b>Overall Rating:</b></td><td> '+data.json.average_StarRating+'</td></tr><tr><td></td></tr><tr><td></td></tr>'
            //                                +'<tr><td > <b>Detailed Rating:</b></td><tr>'
            //                                +'<tr><td>Price:</td><td>5</td></tr>'
            //                                +'<tr><td>Reliability: </td><td>'+data.json.average_OnTime+'</td></tr>'
            //                                +'<tr><td>Communication:</td><td> 5</td></tr>'
            //                                +'<tr><td>Friendliness:</td><td>'+data.json.average_Friendly+'</td></tr></table>    ';
            //
            //                                RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Rating For "+counterparts+"', '"+ratingsPopUp+"', 'X', '', '', '');\" value=\""+counterparts+"\" />");
            //
            //                            },
            //                            error:function(jq,textStatus,errorThrown){
            //                                //alert('fail');
            //                                RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterparts+"\" />");
            //
            //                            }
            //                        });
            //                    },
            //                    error:function(jq,textStatus,errorThrown){
            //                    //alert('fail1');
            //                    }
            //                });
            //            }
            //RideShareSB.append('<dialog id="myDialog">this is dialog</dialog>');
            //RideShareSB.append('<script> function myFunction() {alert("0");var x = document.getElementById("myDialog");alert("1");x.open = true;}</script>');
            //RideShareSB.append('    <small>Estimated drving time: ' + ohours + ':' + omin + ' Hour, driving distance: '+sharedDistanceKm+' km, Detour: '+detourKm+' km, Best offer: ' + round(entry.matchPriceCents/100,2) + ' &euro;, Anz. Pers.: ' + entry.noOfPassengers);

            RideShareSB.append('</small><small><table>');
            if (usermode==DRIVERMODE){
                RideShareSB.append('<tr>');
                RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Price:</td>');
                //                switch(prp.currency){
                //                    case 'Shekel':
                //                        currency='&#8362;';
                //                        break;
                //                    case 'Euro':
                //                        currency='&#128;';
                //                        break;
                //                    case 'Dollar':
                //                        currency='$';
                //                        break;
                //                    case 'Pound':
                //                        currency='&#163;';
                //                        break;
                //                }
                if (typeof (prp.priceBound) == 'undefined')
                    RideShareSB.append('<td valign="top">'+prp.priceRange[0]+' &#8362;</td>');
                else
                    RideShareSB.append('<td valign="top">'+prp.priceBound+' &#8362;</td>');

                RideShareSB.append('</tr>');
            }
            else if(usermode == RIDERMODE && (!unmatched)){
                RideShareSB.append('<tr>');
                RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Price:</td>');
                //                switch(prp.currency){
                //                    case 'Shekel':
                //                        currency='&#8362;';
                //                        break;
                //                    case 'Euro':
                //                        currency='&#128;';
                //                        break;
                //                    case 'Dollar':
                //                        currency='$';
                //                        break;
                //                    case 'Pound':
                //                        currency='&#163;';
                //                        break;
                //                }
                //alert(prp.index + ' typeof(pricebound) is ' + typeof (prp.priceBound));
                if (typeof (prp.priceBound) == 'undefined')
                    RideShareSB.append('<td valign="top">'+prp.priceRange[0]+' &#8362;</td>');
                else
                    RideShareSB.append('<td valign="top">'+prp.priceBound+' &#8362;</td>');

                RideShareSB.append('</tr>');
            }

            RideShareSB.append('<tr>');
            RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Smoking:</td>');
            RideShareSB.append('<td valign="top">'+prp.smoking+'</td>');
            RideShareSB.append('</tr>');
            RideShareSB.append('<tr>');
            RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Pets:</td>');
            RideShareSB.append('<td valign="top">'+prp.pets+'</td>');
            RideShareSB.append('</tr>');
            RideShareSB.append('</table></small>');
            RideShareSB.append('  </div>');
            //RideShareSB.append('    <input type="button" class="rounded compact" value="Accept" onclick="" style="width: 72px;" />');
            //RideShareSB.append('    <input type="button" class="rounded compact" value="Reject" onclick="" style="width: 80px;" />');
            //RideShareSB.append('    <input type="button" class="rounded compact" value="Show Route " onclick="" style="width: 130px;" />');
            //}
            if (contentDiv) {
                activeMatchContentDiv = contentDiv;
            }
            activeMatchContentDiv[0].innerHTML = RideShareSB.toString();


        },

        parseinactivematcheslist : function(rideId, contentDiv){

            var sb = new StringBuilder();
            this.tmpRide = '';

            if(usermode == DRIVERMODE){
                var inactofferresult = '';
                try {
                    inactofferresult = JSON.parse(inactoffermatchlist);
                }
                catch (e) {
                    inactofferresult = 'undefined';
                }

                if(typeof (inactofferresult.list) != 'undefined' && typeof (inactofferresult.list[0].MatchResponse) != 'undefined'){
                    if(typeof (inactofferresult.list[0].MatchResponse.length) == 'undefined'){
                        inactofferresult.list[0].MatchResponse = [inactofferresult.list[0].MatchResponse];
                    }

                    for(var i=0;i< inactofferresult.list[0].MatchResponse.length; i++){
                        var entry = inactofferresult.list[0].MatchResponse[i];
                        this.tmpRide = entry;

                        var startDate = new Date(entry.matchExpectedStartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        var priceEuro = entry.matchPriceCents/100;
                        priceEuro = priceEuro.toFixed(2).replace('.',',');

                        //DEBUG
                        //entry.riderState=1
                        //entry.driverState=1

                        var isrejected = this.isrejectedmatch(entry.driverState, entry.riderState);

                        var stateHighlightColor = '#fffacd'; // yellow
                        if (entry.driverState == 1 && entry.riderState == 1)
                            stateHighlightColor = '#f0fff0'; // green
                        else if (isrejected)
                            stateHighlightColor = '#ffe4e1'; // red

                        // Beginning of matching row:
                        sb.append('<div class="matching-row" style="padding: 5px; border-top: 1px solid #e2e2e2;">');

                        // Show details only for unrejected matches:
                        if (entry.riderNickname) {
                            sb.append('  <div class="profile-info-short" style="margin: 0 15px 0 0; float: left; text-align: right;">');
                            if (entry.riderNickname) {
                                sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.riderNickname + '_thumb.jpg" alt="Profilbild von ' + entry.riderNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.riderRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            else {
                                sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.driverNickname + '_thumb.jpg" alt="Profilbild von ' + entry.driverNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.driverRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            sb.append('  </div>');
                        }

                        sb.append('  <div style="margin: -5px -5px 3px 0; padding: 1px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
                        sb.append('    <form class="ride">');
                        sb.append(this.getRatingStateInfoControls(entry.riderRouteId));
                        sb.append('    </form>');
                        sb.append('  </div>');

                        if (entry.riderNickname) {
                            var sharedDistanceKm = entry.matchSharedDistanceMeters/1000;
                            sharedDistanceKm = round(sharedDistanceKm,2);
                            var detourKm = entry.matchDetourMeters/1000;
                            detourKm = round(detourKm,2);

                            var start = entry.startPtAddress;
                            var end = entry.endPtAddress;

                            if (start.match("^.*:.*$")) {
                                start = start.split(':')[1];
                            }

                            if (end.match("^.*:.*$")) {
                                end = end.split(':')[1];
                            }

                            sb.append('  <div style="line-height: 150%; padding-left: 75px;">');
                            sb.append('    <strong>' + entry.riderNickname + '</strong> &ndash;<br />');
                            sb.append('    <small>' + ohours + ':' + omin + ' Hour, Driving distance: '+sharedDistanceKm+' km, Umweg: '+detourKm+' km, Preisvorschlag: ' + round(entry.matchPriceCents/100,2) + ' &euro;, Anz. Pers.: ' + entry.noOfPassengers);
                            if (typeof (entry.riderMobilePhoneNo) != 'undefined') {
                                sb.append(', Handy: <a href="tel:' + entry.riderMobilePhoneNo + '" class="phone">' + entry.riderMobilePhoneNo + '</a>');
                            }

                            sb.append('</small><small><table>');
                            sb.append('<tr>');
                            sb.append('<td valign="top" align="right" style="color:#666666;">Abholort:</td>');
                            sb.append('<td valign="top">'+start+'</td>');
                            sb.append('</tr>');
                            sb.append('<tr>');
                            sb.append('<td valign="top" align="right" style="color:#666666;">Ziel:</td>');
                            sb.append('<td valign="top">'+end+'</td>');
                            sb.append('</tr>');
                            sb.append('</table></small>');

                            //                            sb.append('</small><br style="clear: right;" /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startPtAddress+'<br /><span style="margin-left: -34px;">Ziel:</span> '+entry.endPtAddress+'</small>');
                            sb.append('  </div>');
                        }
                        else {
                            sb.append(' <div style="line-height: 140%; padding-left: 75px;">');
                            sb.append('   <strong>' + entry.driverNickname + '</strong> &ndash;<br />');
                            sb.append('   <small>' + ohours + ':' + omin + ' Hour');
                            if (typeof (entry.driverMobilePhoneNo) != 'undefined') {
                                sb.append('<br />Handy: <a href="tel:' + entry.driverMobilePhoneNo + '" class="phone">' + entry.driverMobilePhoneNo + '</a>');
                                sb.append('<br />Auto: ' + entry.driverCarBrand + ', ' + entry.driverCarColour);
                                if (typeof (entry.driverCarBuildYear) != 'undefined' && entry.driverCarBuildYear != '') {
                                    sb.append(', Bj. ' + entry.driverCarBuildYear);
                                }
                                if (typeof (entry.driverCarPlateNo) != 'undefined' && entry.driverCarPlateNo != '') {
                                    sb.append(', Kennz. ' + entry.driverCarPlateNo);
                                }
                            }
                            sb.append('</small><br style="clear: both;" />');
                            sb.append(' </div>');
                        }
                        sb.append('</div>');
                    }
                }
                else{
            //sb.append('<p>Leider wurden f&uuml;r diese Fahrt keine passenden Mitfahrer gefunden.</p>');
            }
            }
            else if(usermode == RIDERMODE){
                var inactsearchresult = '';

                try {
                    inactsearchresult = JSON.parse(inactsearchmatchlist);
                }
                catch (e) {
                    inactsearchresult = 'undefined';
                }

                if(typeof (inactsearchresult.list) != 'undefined' && typeof (inactsearchresult.list[0].MatchResponse) != 'undefined'){
                    if(typeof (inactsearchresult.list[0].MatchResponse.length) == 'undefined'){
                        inactsearchresult.list[0].MatchResponse = [inactsearchresult.list[0].MatchResponse];
                    }

                    for(var i=0;i< inactsearchresult.list[0].MatchResponse.length; i++){
                        var entry = inactsearchresult.list[0].MatchResponse[i];
                        this.tmpRide = entry;

                        var startDate = new Date(entry.matchExpectedStartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        var priceEuro = entry.matchPriceCents/100;
                        priceEuro = priceEuro.toFixed(2).replace('.',',');

                        //DEBUG
                        //entry.riderState=1
                        //entry.driverState=1

                        var isrejected = this.isrejectedmatch(entry.driverState, entry.riderState);

                        var stateHighlightColor = '#fffacd'; // yellow
                        if (entry.driverState == 1 && entry.riderState == 1)
                            stateHighlightColor = '#f0fff0'; // green
                        else if (isrejected)
                            stateHighlightColor = '#ffe4e1'; // red

                        // Beginning of matching row:
                        sb.append('<div class="matching-row" style="padding: 5px; border-top: 1px solid #e2e2e2;">');

                        sb.append('  <div class="profile-info-short" style="margin: 0 15px 0 0; float: left; text-align: right;">');
                        if (entry.riderNickname) {
                            sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.riderNickname + '_thumb.jpg" alt="Profilbild von ' + entry.riderNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.riderRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                        }
                        else {
                            sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.driverNickname + '_thumb.jpg" alt="Profilbild von ' + entry.driverNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.driverRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                        }
                        sb.append('  </div>');

                        sb.append('  <div style="margin: -5px -5px 3px 0; padding: 1px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
                        sb.append('    <form class="ride">');
                        sb.append(this.getRatingStateInfoControls(entry.riderRouteId));
                        sb.append('    </form>');
                        sb.append('  </div>');

                        if (entry.riderNickname) {
                            var sharedDistanceKm = entry.matchSharedDistanceMeters/1000;
                            sharedDistanceKm = round(sharedDistanceKm,2);
                            var detourKm = entry.matchDetourMeters/1000;
                            detourKm = round(detourKm,2);

                            sb.append('  <div style="line-height: 150%; padding-left: 75px;">');
                            sb.append('    <strong>' + entry.riderNickname + '</strong> &ndash;<br />');
                            sb.append('    <small>' + ohours + ':' + omin + ' Hour, Distance: '+sharedDistanceKm+' km, Umweg: '+detourKm+' km, Preisvorschlag: ' + round(entry.matchPriceCents/100,2) + ' &euro;');
                            if (typeof (entry.riderMobilePhoneNo) != 'undefined') {
                                sb.append(', Handy: <a href="tel:' + entry.riderMobilePhoneNo + '" class="phone">' + entry.riderMobilePhoneNo + '</a>');
                            }
                            sb.append('</small><br style="clear: right;" /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startPtAddress+'<br /><span style="margin-left: -34px;">Ziel:</span> '+entry.endPtAddress+'</small>');
                            sb.append('  </div>');
                        }
                        else {
                            sb.append(' <div style="line-height: 140%; padding-left: 75px;">');
                            sb.append('   <strong>' + entry.driverNickname + '</strong> &ndash;<br />');
                            sb.append('   <small>' + ohours + ':' + omin + ' Hour, Best offer: ' + round(entry.matchPriceCents/100,2) + ' &euro;');
                            if (typeof (entry.driverMobilePhoneNo) != 'undefined') {
                                sb.append('<br />Mobile: <a href="tel:' + entry.driverMobilePhoneNo + '" class="phone">' + entry.driverMobilePhoneNo + '</a>');
                                sb.append('<br />Car: ' + entry.driverCarBrand + ', ' + entry.driverCarColour);
                                if (typeof (entry.driverCarBuildYear) != 'undefined' && entry.driverCarBuildYear != '') {
                                    sb.append(', Bj. ' + entry.driverCarBuildYear);
                                }
                                if (typeof (entry.driverCarPlateNo) != 'undefined' && entry.driverCarPlateNo != '') {
                                    sb.append(', Identification. ' + entry.driverCarPlateNo);
                                }
                            }
                            sb.append('</small><br style="clear: both;" />');
                            sb.append(' </div>');
                        }
                        sb.append('</div>');
                    }
                }
                else{
                    sb.clear();
                    sb.append('');
                //sb.append('<p>Leider wurde keine passenden Fahrer gefunden.</p>');
                }
            }

            // Buttons to change or delete a ride. Show buttons only if driver and ride not accapted/declined the offer/search.
            var showRouteInvocation;
            if ((typeof (this.tmpRide.driverState) == 'undefined') && (typeof (this.tmpRide.riderState) == 'undefined') && (usermode != RIDERMODE)) {
                var realRideId = rideId.replace('r','');
                //                var deleteRideInvocation = "javascript:showOverlayDialog('Diese Fahrt wirklich l&ouml;schen?', '', '      Ja      ', 'fokus.openride.mobclient.controller.modules.modulemanager.deleteRide("+realRideId+");', '     Nein     ', '');";
                showRouteInvocation = "javascript:fokus.openride.mobclient.controller.modules.modulemanager.setupViaPtRoute(\'"+realRideId+"\');";
                //                var modRide = "fokus.openride.mobclient.controller.modules.modulemanager.modifyRide("+realRideId+")";
                sb.append('<form>');
                sb.append('  <div style="padding: 5px 0; text-align: center; clear: both;">');
                //sb.append('    <input type="button" class="rounded compact" value="L&ouml;schen" onclick="'+deleteRideInvocation+'" style="width: 80px;" />');
                sb.append('    <input type="button" class="rounded compact" value="Show route" onclick="'+showRouteInvocation+'" style="width: 290px;" />');

                sb.append('  </div>');
                sb.append('</form>');
            }
            if (contentDiv) {
                activeMatchContentDiv = contentDiv;
            }

            activeMatchContentDiv[0].innerHTML = sb.toString();
        },

        isrejectedmatch : function(driverState, riderState) {
            return (driverState==0 || driverState==2 || driverState==3 || riderState==0 ||  riderState==2 || riderState==3);
        },

        getMatchStateInfoControls : function(rideId, riderRouteId, driverState, riderState, contentDiv) {
            // alert('getMatchStateInfoControls');
            var htmlInfoControls = '';

            if (driverState == 1 && riderState == 1) {
                // It is settled => Passenger / Driver view
                htmlInfoControls = '<small>Ride booked!</small>';
            }
            else if (driverState == 2 || riderState == 2) {
                // At least one of the parties canceled => canceled match view
                if (usermode == DRIVERMODE) {
                    if (driverState == 2) {
                        htmlInfoControls = '<small>Cancelled</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Had cancelled</small>';
                    }
                }
                else if (usermode == RIDERMODE) {
                    if (riderState == 2) {
                        htmlInfoControls = '<small>Cancelled</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Had Cancelled</small>';
                    }
                }
            }
            else if (driverState == 3 || riderState == 3) {
                // At least one of the parties became unavailable
                if (usermode == DRIVERMODE) {
                    if (driverState == 3) {
                        htmlInfoControls = '<small>Booked up</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Already booked</small>';
                    }
                }
                else if (usermode == RIDERMODE) {
                    if (riderState == 3) {
                        htmlInfoControls = '<small>Already booked</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Booked up</small>';
                    }
                }
            }
            else if (driverState == 0 || riderState == 0) {
                // At least one of the parties rejected => rejected match view
                if (usermode == DRIVERMODE) {
                    if (driverState == 0) {
                        htmlInfoControls = '<small>Rejected</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Had rejected</small>';
                    }
                }
                else if (usermode == RIDERMODE) {
                    if (riderState == 0) {
                        htmlInfoControls = '<small>Rejected</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Had rejected</small>';
                    }
                }
            }
            else {
                // We're still awaiting a response => candidate match view
                if (usermode == DRIVERMODE) {

                    acceptOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+ rideId +'/matches/'+ riderRouteId +'/accept\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This inquiry is sadly no longer available.\')})';
                    rejectOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+ rideId +'/matches/'+ riderRouteId +'/reject\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This inquiry is sadly no longer available.\')})';

                    if (riderState == 1) {
                        // Offer [Accept] and [Reject] buttons
                        htmlInfoControls = '<small>Ride offers</small><br />'
                        + '<input type="button" class="adjustleft" value="Accept" onclick="'+acceptOnClickAction+'" /><br />'
                        + '<input type="button" value="Refuse" onclick="'+rejectOnClickAction+'" />';
                    }
                    else if (driverState == 1) {
                        // Offer [Reject] button
                        htmlInfoControls = '<small>Requested</small><br />'
                        + '<input type="button" value="Refuse" onclick="'+rejectOnClickAction+'" />';
                    }
                    else {
                        // Offer [Request] and [Reject] buttons
                        htmlInfoControls = '<input type="button" value="Request" onclick="'+acceptOnClickAction+'" /><br />'
                        + '<input type="button" value="Refuse" onclick="'+rejectOnClickAction+'" />';
                    }

                }
                else if (usermode == RIDERMODE) {

                    acceptOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+ riderRouteId +'/matches/'+ rideId +'/accept\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This ride offer is sadly no longer available.\')})';
                    rejectOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+ riderRouteId +'/matches/'+ rideId +'/reject\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This ride offer is sadly no longer available.\')})';

                    if (riderState == 1) {
                        // Offer [Reject] button
                        htmlInfoControls = '<small>Requested</small><br />'
                        + '<input type="button" value="Refuse" onclick="'+rejectOnClickAction+'" />';
                    }
                    else if (driverState == 1) {
                        // Offer [Book] and [Reject] buttons
                        htmlInfoControls = '<small>Drive offers</small><br />'
                        + '<input type="button" value="Reserve" onclick="'+acceptOnClickAction+'" /><br />'
                        + '<input type="button" value="Refuse" onclick="'+rejectOnClickAction+'" />';
                    }
                    else {
                        // Offer [Request] and [Reject] buttons
                        htmlInfoControls = '<input type="button" value="Request" onclick="'+acceptOnClickAction+'" /><br /> '
                        + '<input type="button" value="Refuse" onclick="'+rejectOnClickAction+'" />';
                    }
                }
            }

            return htmlInfoControls;
        },

        getRatingStateInfoControls: function(matchRiderRouteID){

            var openratings = '';
            try{
                openratings = JSON.parse(openratingslist);
            }
            catch(e){
                openratings = '';
            }

            var htmlInfoControls = '';

            rateOnClickAction = 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(2, 1)';

            //check open ratings
            //if match has open ratings, show button linked to open rating UI
            if(typeof (openratings.list[0].OpenRatingResponse) != 'undefined'){
                if(typeof (openratings.list[0].OpenRatingResponse.length) == 'undefined'){
                    openratings.list[0].OpenRatingResponse = [openratings.list[0].OpenRatingResponse];
                }
                for(var i=0;i< openratings.list[0].OpenRatingResponse.length; i++){
                    var entry = openratings.list[0].OpenRatingResponse[i];
                    if(entry.riderRouteId == matchRiderRouteID)
                        htmlInfoControls =  '<input type="button" value="Rate" onclick="'+rateOnClickAction+'" />';
                }
            }

            return htmlInfoControls;
        },

        receiveMatches : function(rideId, contentDiv){
            // Create dynamic list depending on usermode
            if (usermode == DRIVERMODE) {
            // Get all matches for ride.
            /*srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideId.replace('r','')+'/matches',
                    false, this.setMatches, function(x,s,e) {
                        clearInterval(tabListActiveRefreshTimer);
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Dieses Fahrtangebot ist nicht mehr verf&uuml;gbar.')
                    });*/
            } else {
            // Get all matches for search.
            /*   srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideId.replace('r','')+'/matches',
                    false, this.setMatches, function(x,s,e) {
                        clearInterval(tabListActiveRefreshTimer);
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Dieses Gesuch ist nicht mehr verf&uuml;gbar.')
                    });*/
            }
            this.parsematcheslist(rideId, contentDiv);
        },

        receiveInactiveMatches : function(rideId, contentDiv){
            if(usermode == DRIVERMODE){
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideId.replace('r','')+'/matches',
                    false, this.setInactiveOfferMatches, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'This ride offer is no longer available.')
                    });
            }
            else if(usermode == RIDERMODE){
                // Get all matches for search.
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideId.replace('r','')+'/matches',
                    false, this.setInactiveSearchMatches, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'This ad is no longer available.')
                    });
            }

            this.parseinactivematcheslist(rideId, contentDiv);
        },

        receiveUpdates : function(){
            srvconn.GET('/OpenRideServer-RS/resources/configuration/updates',
                false, function(updateData) {
                    fokus.openride.mobclient.controller.modules.modulemanager.setriderupdatecount(updateData.UpdateResponse.updatedsearches);
                    fokus.openride.mobclient.controller.modules.modulemanager.setdriverupdatecount(updateData.UpdateResponse.updatedoffers);
                }, function(x,s,e) {
                    clearInterval(updateCountRefreshTimer);
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Error receiving the update data.')
                });
        },

        getServiceType : function() {
            return serviceType;
        },

        setServiceType : function(type) {
            serviceType = type;
        },

        getRideId : function() {
            return rideId;
        },

        deleteModAdrFromBox : function(ddBoxId) {
            var ddBox = document.getElementById(ddBoxId);
            if (ddBox.length > 0) {
                for (var i = 0; i < ddBox.length; i++) {
                    if (ddBox[i].mod) {
                        ddBox[i] = null;
                    }
                }
            }
        },


        modifyRide : function (rideid) {
            var ride = this.tmpRide;

            rideId = rideid;

            var optionStartAdr;
            var adrStartBox;
            var optionDestAdr;
            var adrDestBox;
            var startDate;
            var oday;
            var omonth;
            var oyear;
            var ohours;
            var omin;

            this.deleteModAdrFromBox(offerstartdropdownid);
            this.deleteModAdrFromBox(offerdestdropdownid);
            this.deleteModAdrFromBox(searchstartdropdownid);
            this.deleteModAdrFromBox(searchdestdropdownid);

            if (usermode == DRIVERMODE) {

                if (ride != '') {
                    rideid = ride.rideid;
                }
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideid,
                    false, this.setRide, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, the offer to edit could not be loaded from the server.')
                    });

                var rideList = JSON.parse(ridelist).Offer;

                optionStartAdr = document.createElement('option');
                adrStartBox = document.getElementById(offerstartdropdownid);
                optionStartAdr.latln = rideList.ridestartPtLat+','+rideList.ridestartPtLon;
                optionStartAdr.innerHTML = rideList.startptAddress;
                optionStartAdr.mod = true;
                adrStartBox.add(optionStartAdr, null);
                adrStartBox.selectedIndex = adrStartBox.length - 1;

                optionDestAdr = document.createElement('option');
                adrDestBox = document.getElementById(offerdestdropdownid);
                optionDestAdr.latln = rideList.rideendPtLat+','+rideList.rideendPtLon;
                optionDestAdr.innerHTML = rideList.endptAddress;
                optionDestAdr.mod = true;
                adrDestBox.add(optionDestAdr, null);
                adrDestBox.selectedIndex = adrDestBox.length - 1;

                //Für FOKUS-DAY
                //                document.getElementById('offercommentta').value = rideList.rideComment;

                //                switch (rideList.acceptableDetourInKm) {
                //                    case 1:
                //                        document.getElementById('offerdetourselect').selectedIndex = 0;
                //                        break;
                //                    case 2:
                //                        document.getElementById('offerdetourselect').selectedIndex = 1;
                //                        break;
                //                    case 5:
                //                        document.getElementById('offerdetourselect').selectedIndex = 2;
                //                        break;
                //                    case 10:
                //                        document.getElementById('offerdetourselect').selectedIndex = 3;
                //                        break;
                //                    case 20:
                //                        document.getElementById('offerdetourselect').selectedIndex = 4;
                //                        break
                //                    case 30:
                //                        document.getElementById('offerdetourselect').selectedIndex = 5;
                //                        break;
                //                }

                document.getElementById('offerseatsselect').selectedIndex = rideList.offeredSeatsNo - 1;
                //document.getElementById('offerCurrency').selectedIndex = rideList.offeredCurrency ;
                switch (rideList.rideprice) {
                    case 1.8:
                        document.getElementById('offerpriceselect').selectedIndex = 0;
                        break;
                    case 1.9:
                        document.getElementById('offerpriceselect').selectedIndex = 1;
                        break;
                    case 2.0:
                        document.getElementById('offerpriceselect').selectedIndex = 2;
                        break;
                    case 2.1:
                        document.getElementById('offerpriceselect').selectedIndex = 3;
                        break;
                    case 2.2:
                        document.getElementById('offerpriceselect').selectedIndex = 4;
                        break;
                    case 2.3:
                        document.getElementById('offerpriceselect').selectedIndex = 5;
                        break;
                }

                startDate = new Date(rideList.ridestartTime);
                oday = startDate.getDate();
                if(oday < 10)oday = '0'+oday;
                omonth = startDate.getMonth()+1;
                if(omonth < 10)omonth = '0'+omonth;
                oyear = startDate.getFullYear();
                ohours = startDate.getHours();
                if(ohours < 10)ohours = '0'+ohours;
                omin = startDate.getMinutes();
                if(omin < 10)omin = '0'+omin;

                document.getElementById('dayLabel').innerHTML = oday;
                document.getElementById('monthLabel').innerHTML = omonth;
                document.getElementById('yearLabel').innerHTML = oyear;
                document.getElementById('hourLabel').innerHTML = ohours;
                document.getElementById('minuteLabel').innerHTML = omin;

                calendar.setDay(startDate.getDate());
                calendar.setMin(startDate.getMinutes());
                calendar.setHour(startDate.getHours());
                calendar.setMonth(startDate.getMonth());
                calendar.setYear(startDate.getFullYear());


            }
            else {
                if (ride != '') {
                    rideid = ride.riderRouteId;
                }
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideid,
                    false, this.setRide, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, the ad you want to edit could not be loaded from the server.')
                    });

                var searchRideList = JSON.parse(ridelist).Search;

                optionStartAdr = document.createElement('option');
                adrStartBox = document.getElementById(searchstartdropdownid);
                optionStartAdr.latln = searchRideList.ridestartPtLat+','+searchRideList.ridestartPtLon;
                optionStartAdr.innerHTML = searchRideList.startptAddress;
                optionStartAdr.mod = true;
                adrStartBox.add(optionStartAdr, null);
                adrStartBox.selectedIndex = adrStartBox.length - 1;

                optionDestAdr = document.createElement('option');
                adrDestBox = document.getElementById(searchdestdropdownid);
                optionDestAdr.latln = searchRideList.rideendPtLat+','+searchRideList.rideendPtLon;
                optionDestAdr.innerHTML = searchRideList.endptAddress;
                optionDestAdr.mod = true;
                adrDestBox.add(optionDestAdr, null);
                adrDestBox.selectedIndex = adrDestBox.length - 1;

                //Für FOKUS-DAY
                //                document.getElementById('searchcommentta').value = searchRideList.rideComment;

                var watingTime = ((searchRideList.ridestartTimeLatest - searchRideList.ridestartTimeEarliest) / 1000) / 60;

                switch (watingTime) {
                    case 10:
                        document.getElementById('searchwaitimeselect').selectedIndex = 0;
                        break;
                    case 15:
                        document.getElementById('searchwaitimeselect').selectedIndex = 1;
                        break;
                    case 20:
                        document.getElementById('searchwaitimeselect').selectedIndex = 2;
                        break;
                    case 30:
                        document.getElementById('searchwaitimeselect').selectedIndex = 3;
                        break;
                    case 45:
                        document.getElementById('searchwaitimeselect').selectedIndex = 4;
                        break
                    case 60:
                        document.getElementById('searchwaitimeselect').selectedIndex = 5;
                        break;
                    case 120:
                        document.getElementById('searchwaitimeselect').selectedIndex = 6;
                        break;
                    case 180:
                        document.getElementById('searchwaitimeselect').selectedIndex = 7;
                        break;
                    case 240:
                        document.getElementById('searchwaitimeselect').selectedIndex = 8;
                        break;
                }

                document.getElementById('searchseatsselect').selectedIndex = searchRideList.searchedSeatsNo - 1;

                startDate = new Date(searchRideList.ridestartTimeEarliest);
                oday = startDate.getDate();
                if(oday < 10)oday = '0'+oday;
                omonth = startDate.getMonth()+1;
                if(omonth < 10)omonth = '0'+omonth;
                oyear = startDate.getFullYear();
                ohours = startDate.getHours();
                if(ohours < 10)ohours = '0'+ohours;
                omin = startDate.getMinutes();
                if(omin < 10)omin = '0'+omin;

                document.getElementById('searchdayLabel').innerHTML = oday;
                document.getElementById('searchmonthLabel').innerHTML = omonth;
                document.getElementById('searchyearLabel').innerHTML = oyear;
                document.getElementById('searchhourLabel').innerHTML = ohours;
                document.getElementById('searchminuteLabel').innerHTML = omin;

                calendar.setDay(startDate.getDate());
                calendar.setMin(startDate.getMinutes());
                calendar.setHour(startDate.getHours());
                calendar.setMonth(startDate.getMonth());
                calendar.setYear(startDate.getFullYear());
            }

            serviceType = modifyService;
            this.setTabContent(1, 0);
        },

        deleteRide : function (rideId) {

            if (usermode == DRIVERMODE) {
                srvconn.DELETE('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideId,
                    false,
                    showOverlayDialog('Your offer has been successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI'), '', ''),
                    function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, the offer could not be deleted.')
                    });
                fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI');

            } else {
                srvconn.DELETE('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideId,
                    false,
                    showOverlayDialog('Your request has been successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI'), '', ''),
                    function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, this request could not be deleted.')
                    });

                fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI');

            }
        },

        setFullScreenMapView: function(viewId){

            var currViewId = document.getElementById(viewId);

            /* hide complete body content */
            document.getElementById('tabmenu').style.display = 'none';
            document.getElementById('content').style.display = 'none';

            /* show selected fullscreen map */
            currViewId.style.display = 'block';

            var position = nativemod.getUserLocation();
            if (position == null){
                position = new google.maps.LatLng(52.525798, 13.314266);
            }/*DUMMYPOSITION;*/
            else {
                var pos = position;
                position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            }

            if (viewId == 'offerstartgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('offerstartgmap', 'offerstartgmapaddressinput', position);
            }

            else if (viewId == 'offerdestgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('offerdestgmap', 'offerdestgmapaddressinput', position);
            }

            else if (viewId == 'searchstartgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('searchstartgmap', 'searchstartgmapaddressinput', position);
            }

            else if (viewId == 'searchdestgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('searchdestgmap', 'searchdestgmapaddressinput', position);
            }

            else if (viewId == 'offerroutegmapscreencontainer') {

                mapmod.setMapMode(1);
                if(!(document.getElementById('dummyaddrinput')) ){
                    var dummydiv = document.createElement('div');
                    dummydiv.id = "dummyaddrinput";
                }

                var routearr = mapmod.getRoutePath();
                var center;

                if (routearr != null && routearr != 'undefined') {
                    if (routearr.length >= 2) {
                        mapmod.initialize('offerroutegmap', 'dummyaddrinput', routearr[0]);
                    }
                    else
                        showOverlayDialog('Show route', '<br />Route cannot be determined at this moment. Check your internet connection!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if (viewId == 'searchroutegmapscreencontainer') {

                mapmod.setMapMode(1);
                if(!(document.getElementById('dummyaddrinput')) ){
                    var dummydiv = document.createElement('div');
                    dummydiv.id = "dummyaddrinput";
                }
                var routearr = mapmod.getRoutePath();
                var center;
                if (routearr != null && routearr != 'undefined') {
                    if (routearr.length >= 2) {
                        mapmod.initialize('searchroutegmap', 'dummyaddrinput', routearr[0]);
                    }
                    else
                        showOverlayDialog('Show route', '<br />Route cannot be determined at this moment. Check your internet connection!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if (viewId == 'viaptroutegmapscreencontainer') {
                mapmod.setMapMode(2);
                if(!(document.getElementById('dummyaddrinput')) ){
                    var dummydiv = document.createElement('div');
                    dummydiv.id = "dummyaddrinput";
                }
                var routearr = mapmod.getRoutePath();
                var center;
                if (routearr != null && routearr != 'undefined') {
                    if (routearr.length >= 2) {
                        mapmod.initialize('viaptroutegmap', 'dummyaddrinput', routearr[0]);
                    }
                    else
                        showOverlayDialog('Route anzeigen', '<br />Start and finish points must be different!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if (viewId == 'favoritesgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('favoritesgmap', 'favoritesgmapaddressinput', position);
            }

            this.displayedFullScreenMapId = viewId;
        },

        returnFromFullscreenMapView: function(){

            /* hide full screen map */
            document.getElementById(this.displayedFullScreenMapId).style.display = 'none';

            /* show previous content */

            /* hide complete body content */
            document.getElementById('tabmenu').style.display = 'block';
            document.getElementById('content').style.display = 'block';

        },

        parsefavoriteslist : function(favoriteslistdiv, resultlist){
            var result = JSON.parse(resultlist);
            var listhtml = '';
            favnames = new Array();

            if(typeof (result.list[0].FavoritePointResponse) != 'undefined'){
                if(typeof (result.list[0].FavoritePointResponse.length) == 'undefined'){
                    result.list[0].FavoritePointResponse = [result.list[0].FavoritePointResponse];
                }
                for(var i=0;i< result.list[0].FavoritePointResponse.length; i++){
                    var entry = result.list[0].FavoritePointResponse[i];

                    var favname = entry.favptDisplayName;
                    favnames.push(favname);
                    var favaddress = entry.favptAddress;
                    var favid = entry.favptId;

                    listhtml += "<div class='fav-row' style='border-bottom: 1px solid #ccc; padding: 5px;'>"+
                    "<div style='float: right; margin: 2px 0px 0 0;'><input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Are you sure you want to delete this favorite?', '', 'Ja', 'fokus.openride.mobclient.controller.modules.modulemanager.deleteFavPt("+i+");', 'Nein', '');\" value=\"X\" /></div>"+
                    "<div style='line-height: 140%'>"+
                    "<strong>"+favname+"</strong><br />"+
                    favaddress+
                    "</div>"+
                    "</div>"
                }
            }else{
                listhtml = "<span style='font-weight:bold;padding:10px;'>No favorites available!</span>";
            }

            document.getElementById(favoriteslistdiv).innerHTML = listhtml;
        },

        deleteFavPt : function(nameindex){
            srvconn.DELETE('/OpenRideServer-RS/resources/users/'+this.username+'/favoritepoints/'+encodeURI($("<div />").html(favnames[nameindex]).text()), true, function() {
                fokus.openride.mobclient.controller.modules.modulemanager.setView('favlistUI')
            }, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, Favorites could not be saved.')
            });
        },
        putprofilepicture : function(){
            var reader = new FileReader();
            var pic = {};

            reader.readAsDataURL(document.querySelector('input[type=file]').files[0]);

            reader.onloadend = function (e) {
                pic.picture = e.target.result;
                pic.type = document.querySelector('input[type=file]').files[0].type;
                $.ajax({
                    type: "GET",
                    accepts: "application/json",
                    url: 'http://168.144.202.152:3002/users/'+username+'/profile/picture',
                    beforeSend : function(xhr) {
                        xhr.withCredentials = true;
                        xhr.setRequestHeader("Authorization", "Basic " + username + ":" + password);

                        xhr.setRequestHeader("APP_KEY", "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    dataType: "json",
                    username: username,
                    password: password,
                    crossDomain: true,
                    async: false,
                    success: function (data, textStatus, jqXHR) {
                        var mem = {};
                        mem.pic  = data;
                        mem.type = mem.pic.type;
                        pic._revision = mem.pic._revision+1;
                        pic._id = userProfile.getProfileRequest()._id;
<<<<<<< HEAD
                    
=======

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
                        $.ajax({
                            type: "PUT",
                            url: 'http://' + PeerMenager + '/users/'+username+'/profile/picture',//'/api/register/' + user,
                            data: JSON.stringify(pic),//"{username="+user+"&password="+pass+"}",
                            crossDomain: true,
                            contentType:  "application/json; charset=UTF-8",
                            accepts: "application/json",
                            dataType: "json",
                            username: username,
                            password: password,
                            processData: false,
                            beforeSend: function (xhr)
                            {
                                xhr.withCredentials = true,
                                xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                                xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                            },
                            async: false,
                            success: function(data, textStatus, jqXHR){
                                showOverlayDialog('Personal data was saved successfully!', '', 'OK', '', '', '')
                            },
                            error: function(jq , textStatus , errorThrown){
                                //alert(JSON.stringify(pic));
                                //alert(' errors : ' + errorThrown + ' ' + textStatus + ' ' + jq.responseText + ' ' + jq.statusText);
                                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your data could not be stored.')
                            }
                        });
                    },
                    error: function (data, textStatus, errorThrown) {
                        alert('Could not retrieve image, setting default picture!');
                    }
                });
<<<<<<< HEAD
        
=======

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
        }
        reader.onerror     = function (e) {
            alert("Error " + e + " occurred! Now what?");
        };
        reader.onabort     = function (e) {
            alert('File read cancelled');
        };
    //while(i == 0) {}
<<<<<<< HEAD
       
=======

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
    },
    parseprofilepersonaldata : function(result){

        //if(typeof (result.ProfileResponse) != 'undefined'){

        //                var personalData = result;//result.ProfileResponse;
        //                personalDetails = result;//result.ProfileResponse;
        var personalData = userProfile.getProfileRequest();
        personalDetails = userProfile;
        document.getElementById('profilepersonaldatafirstname').innerHTML = personalData.firstName;
        document.getElementById('profilepersonaldatalastname').innerHTML = personalData.lastName;
        if (personalData.gender == 'm') {
            genderString = 'Male';
        }
        else {
            genderString = 'Female';
        }
        document.getElementById('profilepersonaldatagender').innerHTML = genderString;
        //alert(personalData.dateOfBirth + " " +personalData.dateOfBirth.indexOf('.'));
        if (typeof (personalData.dateOfBirth) != 'undefined' && personalData.dateOfBirth.indexOf('.')!=-1) {
            dateOfBirth = new Date(personalData.dateOfBirth);
            dateOfBirthString = dateOfBirth.getDate() + '.' + (dateOfBirth.getMonth() + 1) + '.' + dateOfBirth.getFullYear()
        }
        else {
            dateOfBirthString = ''; //<em>nicht angegeben</em>';
        }
        document.getElementById('profilepersonaldatadateofbirth').value = dateOfBirthString;
        document.getElementById('profilepersonaldataemail').value = $("<div />").html(personalData.email).text();
        document.getElementById('profilepersonaldatamobilephonenumber').value = personalData.mobilePhoneNumber || '';
        //document.getElementById('profilepersonaldatafixedphonenumber').value = personalData.fixedPhoneNumber || '';
        if (personalData.streetAddress) {
            document.getElementById('profilepersonaldatastreetaddress').value = $("<div />").html(personalData.streetAddress).text() || '';
        }
        document.getElementById('profilepersonaldatazipcode').value = personalData.zipCode || '';
        if (personalData.city) {
            document.getElementById('profilepersonaldatacity').value = $("<div />").html(personalData.city).text() || '';
        }
        if (personalData.isSmoker == 'n') {
            isSmokerOption = 'profilepersonaldataissmoker-no';
        }
        else if (personalData.isSmoker == 'y') {
            isSmokerOption = 'profilepersonaldataissmoker-yes';
        }
        else {
            isSmokerOption = 'profilepersonaldataissmoker-null';
        }
        document.getElementById(isSmokerOption).checked = 'checked';

        //document.getElementById('profilepersonaldatalicensedate').value = personalData.licenseDate || '';
        if (personalData.carColour) {
            document.getElementById('profilepersonaldatacarcolour').value = $("<div />").html(personalData.carColour).text() || '';
        }
        if (personalData.carBrand) {
            document.getElementById('profilepersonaldatacarbrand').value = $("<div />").html(personalData.carBrand).text() || '';
        }
        //document.getElementById('profilepersonaldatacarbuildyear').value = personalData.carBuildYear || '';
        if (personalData.carPlateNo) {
            document.getElementById('profilepersonaldatacarplateno').value = $("<div />").html(personalData.carPlateNo).text() || '';
        }

    // }
    },

    validateDate : function(inputDateString) {
        validMonth = false;
        if (inputDateString.split(".").length==3 && inputDateString.split(".")[1] > 0 && inputDateString.split(".")[1] <= 12 && inputDateString.split(".")[0] > 0 && inputDateString.split(".")[0] <= 31 && inputDateString.split(".")[2] > 1900) {
            validMonth = true;
        }
        parsedDate = this.parsedate(inputDateString);
        if (!validMonth || !parsedDate) {
            return false;
        }
        else {
            return parsedDate;
        }
    },

    putprofilepersonaldata : function(){

        /* Validation */
        // email address: required
        if (document.getElementById('profilepersonaldataemail').value == '') {
            //TODO: check for valid email address...
            showOverlayDialog('E-mail address field is mandatory.', '', 'OK', '', '', '');
            return;
        }
        // email address: @ZU
        /*if (document.getElementById('profilepersonaldataemail').value.indexOf("zeppelin-university.de") == -1 && document.getElementById('profilepersonaldataemail').value.indexOf("zeppelin-university.net") == -1) {
                showOverlayDialog('E-Mail-Adresse muss auf "zeppelin-university.[net|de]" enden.', '', 'OK', '', '', '');
                return;
            }*/
        // mobile phone no.: required in valid format
        if (document.getElementById('profilepersonaldatamobilephonenumber').value == '') {
            showOverlayDialog('Phone number field is mandatory.', '', 'OK', '', '', '');
            return;
        }
        //else if (document.getElementById('profilepersonaldatamobilephonenumber').value.match(/^[(]?0[ ]?1[5-7][0-9][ ]?[-/)]?[ ]?[1-9][-0-9 ]{6,16}$/) == null) {
        //    showOverlayDialog('Please enter a valid German phone number.', '', 'OK', '', '', '');
        //    return;
        // }
        // date of birth: not required, but if provided needs valid format
        var dateOfBirthValue = new Date("01/01/1800").toLocaleDateString();
        if (document.getElementById('profilepersonaldatadateofbirth').value != '') {
            dateOfBirthValue = this.validateDate(document.getElementById('profilepersonaldatadateofbirth').value);

            if (!dateOfBirthValue | !isValidDate(document.getElementById('profilepersonaldatadateofbirth').value, "DMY")) {
                showOverlayDialog('Please enter a birth date in the format of "dd.mm.yyyy". The date cannot be in the future.', '', 'OK', '', '', '');
                return;
            }
        }
        // license date: not required, but if provided needs valid format
        /*var licenseDateValue = document.getElementById('profilepersonaldatalicensedate').value;
            if (licenseDateValue != '') {
                var today = new Date();
                if (licenseDateValue < 1900 || licenseDateValue > today.getFullYear()) {
                    showOverlayDialog('Bitte ein gültiges Jahr der Führerscheinausstellung im Format "JJJJ" angeben.', '', 'OK', '', '', '');
                    return;
                }
            }*/
        // carBuildYear: not required, but if provided needs valid format
        /*var carBuildYearValue = document.getElementById('profilepersonaldatacarbuildyear').value;
            if (carBuildYearValue != '') {
                today = new Date();
                if (carBuildYearValue < 1900 || carBuildYearValue > today.getFullYear()) {
                    showOverlayDialog('Bitte ein gültiges Baujahr im Format "JJJJ" angeben.', '', 'OK', '', '', '');
                    return;
                }
            }*/

        function isValidDate(dateStr, format) {
            if (format == null) {
                format = "MDY";
            }
            format = format.toUpperCase();
            if (format.length != 3) {
                format = "MDY";
            }
            if ( (format.indexOf("M") == -1) || (format.indexOf("D") == -1) ||
                (format.indexOf("Y") == -1) ) {
                format = "MDY";
            }
            if (format.substring(0, 1) == "Y") { // If the year is first
                var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
                var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
            } else if (format.substring(1, 2) == "Y") { // If the year is second
                var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
                var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
            } else { // The year must be third
                var reg1 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/
                var reg2 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
            }
            // If it doesn't conform to the right format (with either a 2 digit year or 4 digit year), fail
            if ( (reg1.test(dateStr) == false) && (reg2.test(dateStr) == false) ) {
                return false;
            }
            var parts = dateStr.split(RegExp.$1); // Split into 3 parts based on what the divider was
            // Check to see if the 3 parts end up making a valid date
            if (format.substring(0, 1) == "M") {
                var mm = parts[0];
            } else
            if (format.substring(1, 2) == "M") {
                var mm = parts[1];
            } else {
                var mm = parts[2];
            }
            if (format.substring(0, 1) == "D") {
                var dd = parts[0];
            } else
            if (format.substring(1, 2) == "D") {
                var dd = parts[1];
            } else {
                var dd = parts[2];
            }
            if (format.substring(0, 1) == "Y") {
                var yy = parts[0];
            } else
            if (format.substring(1, 2) == "Y") {
                var yy = parts[1];
            } else {
                var yy = parts[2];
            }
            if (parseFloat(yy) <= 50) {
                yy = (parseFloat(yy) + 2000).toString();
            }
            if (parseFloat(yy) <= 99) {
                yy = (parseFloat(yy) + 1900).toString();
            }
            var dt = new Date(parseFloat(yy), parseFloat(mm)-1, parseFloat(dd), 0, 0, 0, 0);
            if (parseFloat(dd) != dt.getDate()) {
                return false;
            }
            if (parseFloat(mm)-1 != dt.getMonth()) {
                return false;
            }

            var now = new Date();
            if (dt.getTime() >= now.getTime()) {
                return false;
            }
            //..showOverlayDialog('The profile was saved successfully.', '', 'OK', '', '', '');
            return true;
        }



        /* Build the request */

        var emptyvar = "";
        var profilemod = fokus.openride.mobclient.controller.modules.profile;
        //alert(JSON.stringify(profilemod.getProfileRequest()));
        //            profilemod.setDateOfBirth(dateOfBirthValue);
        //            profilemod.setEmail(document.getElementById('profilepersonaldataemail').value);
        //            profilemod.setMobilePhoneNumber(document.getElementById('profilepersonaldatamobilephonenumber').value);
        //            //profilemod.setFixedPhoneNumber(document.getElementById('profilepersonaldatafixedphonenumber').value);
        //            profilemod.setStreetAddress(document.getElementById('profilepersonaldatastreetaddress').value);
        //            profilemod.setZipCode(document.getElementById('profilepersonaldatazipcode').value || 0);
        //            profilemod.setCity(document.getElementById('profilepersonaldatacity').value);
        //            if (document.getElementById('profilepersonaldataissmoker-yes').checked) {
        //                isSmokerValue = 'y';
        //            }
        //            else if (document.getElementById('profilepersonaldataissmoker-no').checked) {
        //                isSmokerValue = 'n';
        //            }
        //            else {
        //                isSmokerValue = '-';
        //            }
        //            profilemod.setIsSmoker(isSmokerValue);
        //            //if (licenseDateValue == "") {
        //            profilemod.setLicenseDate(emptyvar);
        //            /*} else {
        //                profilemod.setLicenseDate(licenseDateValue);
        //            }*/
        //            profilemod.setCarColour(document.getElementById('profilepersonaldatacarcolour').value || emptyvar);
        //            profilemod.setCarBrand(document.getElementById('profilepersonaldatacarbrand').value || emptyvar);
        //            //profilemod.setCarBuildYear(document.getElementById('profilepersonaldatacarbuildyear').value || emptyvar);
        //            profilemod.setCarBuildYear(emptyvar);
        //            profilemod.setCarPlateNo(document.getElementById('profilepersonaldatacarplateno').value || emptyvar);
        //            if (dateOfBirthValue!='undefined')
        //            userProfile.setDateOfBirth(dateOfBirthValue);
        userProfile.setEmail(document.getElementById('profilepersonaldataemail').value);
        userProfile.setMobilePhoneNumber(document.getElementById('profilepersonaldatamobilephonenumber').value);
        //profilemod.setFixedPhoneNumber(document.getElementById('profilepersonaldatafixedphonenumber').value);
        userProfile.setStreetAddress(document.getElementById('profilepersonaldatastreetaddress').value);
        userProfile.setZipCode(document.getElementById('profilepersonaldatazipcode').value || 0);
        userProfile.setCity(document.getElementById('profilepersonaldatacity').value);
        if (document.getElementById('profilepersonaldataissmoker-yes').checked) {
            isSmokerValue = 'y';
        }
        else if (document.getElementById('profilepersonaldataissmoker-no').checked) {
            isSmokerValue = 'n';
        }
        else {
            isSmokerValue = '-';
        }
        userProfile.setIsSmoker(isSmokerValue);
        //if (licenseDateValue == "") {
        userProfile.setLicenseDate(emptyvar);
        /*} else {
                profilemod.setLicenseDate(licenseDateValue);
            }*/
        userProfile.setCarColour(document.getElementById('profilepersonaldatacarcolour').value || emptyvar);
        userProfile.setCarBrand(document.getElementById('profilepersonaldatacarbrand').value || emptyvar);
        //profilemod.setCarBuildYear(document.getElementById('profilepersonaldatacarbuildyear').value || emptyvar);
        userProfile.setCarBuildYear(emptyvar);
        // profilemod.setCarPlateNo(document.getElementById('profilepersonaldatacarplateno').value || emptyvar);

        // Submit PUT request
        //            srvconn.PUT('/OpenRideServer-RS/resources/users/'+this.username+'/profile', true, profilemod.getProfileRequest(), function() {
        //                showOverlayDialog('Personal data was saved successfully!', '', 'OK', '', '', '')
        //            }, function(x,s,e) {
        //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your data could not be stored.')
        //            } );
        //alert(JSON.stringify(userProfile.getProfileRequest()));
        //XOR operattion on car details - if only one then alert
        if ((document.getElementById('profilepersonaldatacarcolour').value == '' ||
            document.getElementById('profilepersonaldatacarbrand').value == '')&&!(document.getElementById('profilepersonaldatacarcolour').value == '' &&
            document.getElementById('profilepersonaldatacarbrand').value == '')){
            showOverlayDialog('Fill both Car Color and Car Brand!', '', 'OK', '', '', '')
            return;
        }
        userProfile.getProfileRequest()._revision = userProfile.getProfileRequest()._revision+1;

        $.ajax({
            type: "PUT",
            url: PeerManagerPrefix + PeerMenager + '/users/'+username+'/profile',//'/api/register/' + user,
            data: JSON.stringify(userProfile.getProfileRequest()),//"{username="+user+"&password="+pass+"}",
            crossDomain: true,
            contentType:  "application/json; charset=UTF-8",
            accepts: "application/json",
            dataType: "json",
            username: username,
            password: password,
            beforeSend: function (xhr)
            {
                xhr.withCredentials = true,
                xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
            },
            async: false,
            //accepts: "application/json",
            success: function(data, textStatus, jqXHR){
                showOverlayDialog('Personal data was saved successfully!', '', 'OK', '', '', '')
            },
            error: function(jq , textStatus , errorThrown){
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your data could not be stored.')
            }
        });


    // Submit PUT request
    //            srvconn.PUT('/OpenRideServer-RS/resources/users/'+this.username+'/profile', true, profilemod.getProfileRequest(), function() {
    //                showOverlayDialog('Personal data was saved successfully!', '', 'OK', '', '', '')
    //            }, function(x,s,e) {
    //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your data could not be stored.')
    //            } );

    },

    parsedate : function(inputvalue){
        var components = inputvalue.split('.'); // assuming date is entered in format dd.mm.yyyy
        if (components.length != 3) return false; // must include day, month, year
        var thedate = new Date(components[2], components[1]-1, components[0]);
        return thedate.getTime();
    },

    parseprofilepreferences : function(result){

        if(typeof (result.PreferencesResponse) != 'undefined'){

            var preferencesData = result.PreferencesResponse;
<<<<<<< HEAD

            if (preferencesData.prefIsSmoker == 'y') {
                isSmokerOption = 'profileprefissmoker-yes';
            }
            else if (preferencesData.prefIsSmoker == 'n') {
                isSmokerOption = 'profileprefissmoker-no';
            }
            else {
                isSmokerOption = 'profileprefissmoker-null';
            }
            document.getElementById(isSmokerOption).checked = 'checked';

=======

            if (preferencesData.prefIsSmoker == 'y') {
                isSmokerOption = 'profileprefissmoker-yes';
            }
            else if (preferencesData.prefIsSmoker == 'n') {
                isSmokerOption = 'profileprefissmoker-no';
            }
            else {
                isSmokerOption = 'profileprefissmoker-null';
            }
            document.getElementById(isSmokerOption).checked = 'checked';

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
        /*if (preferencesData.prefGender == 'f') {
                    genderOption = 'profileprefgender-f';
                }
                else {
                    genderOption = 'profileprefgender-null';
                }
                document.getElementById(genderOption).checked = 'checked';*/

        }
    },

    putprofilepreferences : function(){

        /* Build the request */
        $.ajax({
            type: "GET",
            url: PeerManagerPrefix + PeerMenager + '/users/'+username+'/profile/preferences',//'/api/register/' + user,
            data: "",
            crossDomain: true,
            contentType:  "application/json; charset=UTF-8",
            accepts: "application/json",
            dataType: "json",
            username: username,
            password: password,
            beforeSend: function (xhr)
            {
                xhr.withCredentials = true,
                xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
            },
            async: false,
            //accepts: "application/json",
            success: function(data, textStatus, jqXHR){
                data._revision = data._revision+1;
                var isSmokerValue ='';
                if (document.getElementById('profileprefissmoker-yes').checked) {
                    isSmokerValue = 'y';
                }
                else if (document.getElementById('profileprefissmoker-no').checked) {
                    isSmokerValue = 'n';
                }
                else {
                    isSmokerValue = '-';
                }
                data.isSmoker = isSmokerValue;
                //alert(JSON.stringify(data));
                $.ajax({
                    type: "PUT",
                    url: PeerManagerPrefix + PeerMenager + '/users/'+username+'/profile/preferences',//'/api/register/' + user,
                    data: JSON.stringify(data),
                    crossDomain: true,
                    contentType:  "application/json; charset=UTF-8",
                    accepts: "application/json",
                    dataType: "json",
                    username: username,
                    password: password,
                    beforeSend: function (xhr)
                    {
                        xhr.withCredentials = true,
                        xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    async: false,
                    //accepts: "application/json",
                    success: function(data, textStatus, jqXHR){
                        showOverlayDialog('Preferences were saved successfully!', '', 'OK', '', '', '');

                    },
                    error: function(jq , textStatus , errorThrown){
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your preferences could not be saved.');
                    }
                });
            },
            error: function(jq , textStatus , errorThrown){
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your preferences could not be saved.');
            }
        });

    /*if (document.getElementById('profileprefgender-f').checked) {
                genderValue = 'f';
            }
            else {
                genderValue = '-';
            }
            profilemod.setPrefGender(genderValue);*/

    // Submit PUT request
    //            srvconn.PUT('/OpenRideServer-RS/resources/users/'+this.username+'/profile/preferences', true, profilemod.getPreferencesRequest(), function() {
    //                showOverlayDialog('Preferences were saved successfully!', '', 'OK', '', '', '')
    //            }, function(x,s,e) {
    //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your preferences could not be saved.')
    //            });
<<<<<<< HEAD

    },

=======

    },

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
    putprofilepassword : function(){

        /* Validation */

        if (document.getElementById('profilepasswordold').value == '' || document.getElementById('profilepassword').value == '' || document.getElementById('profilepasswordcheck').value == '') {
            showOverlayDialog('The specification of the old and new password is mandatory.', '', 'OK', '', '', '');
            return;
        }

        if (document.getElementById('profilepassword').value != document.getElementById('profilepasswordcheck').value) {
            showOverlayDialog('The passwords do not match.', '', 'OK', '', '', '');
            return;
        }

        /* Build the request */

        var profilemod = fokus.openride.mobclient.controller.modules.profile;

        profilemod.setPasswordOld(document.getElementById('profilepasswordold').value);
        profilemod.setPassword(document.getElementById('profilepassword').value);
        userProfile.setPassword(document.getElementById('profilepassword').value);
        // Submit PUT request
        srvconn.PUT('/OpenRideServer-RS/resources/users/'+this.username+'/profile/password', true, profilemod.getPasswordRequest(), function() {
            showOverlayDialog('Password successfully changed!', '', 'OK', '', '', '')
        }, function(x,s,e) {
            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, your password could not be changed.')
        });
        $.ajax({
            type: "GET",
            url: PeerManagerPrefix + PeerMenager + '/users/'+username,//'/api/register/' + user,
            data: "",
            crossDomain: true,
            contentType:  "application/json; charset=UTF-8",
            accepts: "application/json",
            dataType: "json",
            username: username,
            password: password,
            beforeSend: function (xhr)
            {
                xhr.withCredentials = true,
                xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
            },
            async: false,
            //accepts: "application/json",
            success: function(data, textStatus, jqXHR){
                // alert(JSON.stringify(data));
                data.password = document.getElementById('profilepassword').value;
                data._revision = data._revision+1;
                //alert(JSON.stringify(data));
                $.ajax({
                    type: "PUT",
                    url: PeerManagerPrefix + PeerMenager + '/users/'+username,//'/api/register/' + user,
                    data: JSON.stringify(data),//"{username="+user+"&password="+pass+"}",
                    crossDomain: true,
                    contentType:  "application/json; charset=UTF-8",
                    accepts: "application/json",
                    dataType: "json",
                    username: username,
                    password: password,
                    beforeSend: function (xhr)
                    {
                        xhr.withCredentials = true,
                        xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    async: false,
                    //accepts: "application/json",
                    success: function(data, textStatus, jqXHR){
                        showOverlayDialog('Password successfully changed!', '', 'OK', '', '', '');
                        password=document.getElementById('profilepassword').value;
                        eraseCookie('password');
                        createCookie('password',password,365);

                    },
                    error: function(jq , textStatus , errorThrown){
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Sorry, your password could not be changed.');
                    }
                });
            },
            error: function(jq , textStatus , errorThrown){
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Sorry, your password could not be changed.');
            }
        });

    },

    parseratingssummary : function(ratingssummarydiv, obj){
        //var result = JSON.parse(resultlist);
        var price = 0;
        var rel = 0;
        var comm = 0;
        var friend = 0;
        var avg = 0;
        var numofraters = 0;
        var genderString="male";
        var addressString="";
        if (obj != null)
        {
            //price = obj["average_ride_Price"] ;
            rel = obj["average_OnTime"] ;
            //comm = obj["average_individual_Communication"] ;
            friend = obj["average_Friendly"] ;
            avg = obj["average_StarRating"];
            numofraters = obj["total_StarRating"]/obj["average_StarRating"];
        }
        else{
            price="N/A";
            rel = "N/A" ;
            comm = "N/A";
            friend = "N/A" ;
            avg = "N/A";
        }
        if (personalDetails.gender=='f')
            genderString="Female";
        document.getElementById("ratingsUserName").innerHTML = user;
        document.getElementById("ratingsUserGender").innerHTML =genderString;
        if (personalDetails.streetAddress!='undefined' && personalDetails.streetAddress!="")
            addressString += personalDetails.streetAddress;
        if (personalDetails.city!='undefined' && personalDetails.city!="")
            addressString+=", "+personalDetails.city;
        document.getElementById("ratingsUserLocation").innerHTML =addressString;

        document.getElementById("ratingssummarytotal").innerHTML = avg+" (From "+numofraters+" people)";//entry.ratingsTotal;
        //document.getElementById("ratingssummaryratio").innerHTML = entry.ratingsRatioPercent + "%";
        document.getElementById("ratingssummarypositive").innerHTML = price;//entry.ratingsLatestPositive;
        document.getElementById("ratingssummarydecent").innerHTML = rel//entry.ratingsLatestDecent;
        document.getElementById("ratingssummaryneutral").innerHTML = comm;//entry.ratingsLatestNeutral;
        document.getElementById("ratingssummarymediocre").innerHTML = friend;//entry.ratingsLatestMediocre;
    //document.getElementById("numofratings").innerHTML = numofraters;
    },

    parseopenratingslist : function(openratingslistdiv, resultlist){
        //var result = JSON.parse(resultlist);
        var listhtml = '<h3>Write reviews</h3>';
        favnames = new Array();
        pass = readCookie('password');
        user = readCookie('username');
        var listhtml = 'Loading...'
        if (rides.length > 0) {
            listhtml = '';
        }
        else listhtml = 'You have rated all previous rides.'
        $.ajax
        ({
            type: "GET",
            url: DimitrisRemotePrefix+DimitrisRemote+"/subject/byURI/" + user ,
            data: "",
            crossDomain: true,
            username : user,
            password : pass,
            beforeSend: function (xhr)
            {
                xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                xhr.withCredentials = true;
            },
            headers:
            {
                "X-Requested-With": "XMLHttpRequest"
            //"Origin" : "http://localhost:8080"
            },
            //dataType : "json" ,
            async: false,
            accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
            "application/json;",
            success: function(data , textStatus) {
                //alert(data);
                var obj = JSON.parse(data);
                var subjectId=obj.subject_id;
                var events = obj["authored_reports"];
                var ratedRides = [];
                for (var report in events)
                {
                    var object = events[report];
                    var event = object["event"];
                    //alert(event);
                    var index = event.indexOf("/");
                    var id = event.substring(index+1);
                    if (ratedRides.indexOf(parseInt(id))==-1){
                        ratedRides.push(parseInt(id));
                        ratedRides.push(object["subjects"]["subject_uri_1"]);
                    }else{
                        ratedRides[ratedRides.indexOf(parseInt(id))+1] = ratedRides[ratedRides.indexOf(parseInt(id))+1]+","+object["subjects"]["subject_uri_1"];
                    }
                }
                for (var i=0; i<rides.length; i++)
                {
                    //alert(rides.length);
                    if (!rides.hasOwnProperty(i) ) continue;
                    obj = JSON.parse(rides[i]);

                    //alert(JSON.stringify(obj) + ' ' + obj["potentiallyAgreedCommuters"].length == 1 + ' ' + obj["potentiallyAgreedCommuters"].length == 0);
                    if (obj["potentiallyAgreedCommuters"].length != 0 && obj["potentiallyAgreedCommuters"] != [""]&& obj["potentiallyAgreedCommuters"] != [])
                    {
                        continue;
                    }
                    var ride_rate = [-1,0,-1,0,-1];
                    submitted_rides[i] = ride_rate;
                    //alert(JSON.stringify(submitted_rides));
                    var date = new Date(+obj.depDateTimeWindow.depDateTimeLow);
                    var hours = date.getHours();
                    if (hours < 10) hours = '0' + hours;
                    var mins = date.getMinutes();
                    if (mins < 10) mins = '0' + mins;
                    var date_realized = ""+hours + ':' + mins + ' ' + date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
                    //alert(date_realized + ' '+ date.getDay());
                    //alert('creation' +i+''+obj["index"]+''+5);
                    var users = obj.commuters;
                    if (obj.driver==user){
                            for (var ind=0; ind<users.length; ind++){
                                //alert('looking for ride ' +obj["index"] +' where subject are '+users);
                                if (ratedRides.indexOf(obj["index"])!=-1){
                                    var sub = ratedRides[ratedRides.indexOf(obj["index"])+1].split(",");
                                    //alert('ride appear! now check for subject ' +sub);
                                    if (sub.indexOf(users[ind])!=-1)
                                        continue;
                                }
                                listhtml += '<div class="open-rating-row" style="border-bottom: 1px solid #ccc; padding: 5px; min-height: 60px; clear: both;" id="openrating' + subjectId + '">'
                                + '    <div class="profile-info-short" style="float: left; margin: 0 15px 0 0; text-align: right;"><img src="../../OpenRideWeb/img/icon.png" style="width: 60px; height: 60px; display: block; background: #ddd;" /><br> </div>'
                                + '    <div style="line-height: 140%; padding-left: 75px;">'
                                + '        Ride with: ' + users[ind] + ' taken on: <div style="color:#96bd0d;"><strong>' + date_realized + '</strong><br>'
                                + ' ' +obj.departureCity + ' -> ' + obj.destinationCity + '<br><br></div>'
                                // + '        ' + rateeRoleName + ' on ' + dateRealized.getDate() + '.' + (dateRealized.getMonth() + 1) + '.' + dateRealized.getFullYear() + ':'
                                + '    </div>'
                                + '    <div class="open-rating-buttons" style="line-height: 100%;"><br><br>'
                                + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Overall: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(0,i,ind) + '</div>'
                                //+ '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Price: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(1,i) + '</div>'
                                + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Reliability: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(2,i,ind) + '</div>'
                                //+ '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Communication: </strong>' + stars(3,i) + '</div>'
                                + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Friendliness: </strong>&nbsp;&nbsp;&nbsp;&nbsp;' + stars(4,i,ind) + '</div>'
                                + '<div align="center" style="color=#96bd0d; font-family: Arial, sans-serif;"><strong><input vertical-align:middle; horizontal-align:middle;  type="button" class="rounded compact" value="Submit" onClick="comment(\'' +obj["index"]+'-'+i+'#'+5 + users[ind] + '\');">'+ '</strong></div>'
                                + '    </div>'
                                + '</div>';
                            }
                        }
                        else{

                            listhtml += '<div class="open-rating-row" style="border-bottom: 1px solid #ccc; padding: 5px; min-height: 60px; clear: both;" id="openrating' + subjectId + '">'
                            + '    <div class="profile-info-short" style="float: left; margin: 0 15px 0 0; text-align: right;"><img src="../../OpenRideWeb/img/icon.png" style="width: 60px; height: 60px; display: block; background: #ddd;" /><br> </div>'
                            + '    <div style="line-height: 140%; padding-left: 75px;">'
                            + '        Ride with: ' + obj.driver + ' taken on: <div style="color:#96bd0d;"><strong>' + date_realized + '</strong><br>'
                            + ' ' +obj.departureCity + ' -> ' + obj.destinationCity + '<br><br></div>'
                            // + '        ' + rateeRoleName + ' on ' + dateRealized.getDate() + '.' + (dateRealized.getMonth() + 1) + '.' + dateRealized.getFullYear() + ':'
                            + '    </div>'
                            + '    <div class="open-rating-buttons" style="line-height: 100%;"><br><br>'
                            + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Overall: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(0,i,0) + '</div>'
                            //+ '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Price: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(1,i) + '</div>'
                            + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Reliability: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(2,i,0) + '</div>'
                            //+ '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Communication: </strong>' + stars(3,i) + '</div>'
                            + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Friendliness: </strong>&nbsp;&nbsp;&nbsp;&nbsp;' + stars(4,i,0) + '</div>'
                            + '<div align="center" style="color=#96bd0d; font-family: Arial, sans-serif;"><strong><input vertical-align:middle; horizontal-align:middle;  type="button" class="rounded compact" value="Submit" onClick="comment(\'' +obj["index"]+'-'+i+'#'+5 + obj.driver + '\');">'+ '</strong></div>'
                            + '    </div>'
                            + '</div>';
                        }
                    }
                //alert(listhtml);
                if (listhtml)
                    document.getElementById(openratingslistdiv).innerHTML = listhtml;
            },
            error: function(jq , textStatus , errorThrown){
                //                    alert('state: ' + jq.readyState);
                //                    alert('status: ' + jq.status);
                //                    alert('response ' + jq.responseText)
                //                    alert('this error is: ' + errorThrown );
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');

            }

        });
    },
    postrating : function(riderRouteId, rating, ratingComment){
        var ratingsmod = fokus.openride.mobclient.controller.modules.ratings;
        ratingsmod.setRiderRouteId(riderRouteId);
        ratingsmod.setGivenRating(rating);
        ratingsmod.setGivenRatingComment(ratingComment);

        // submit POST request
        srvconn.POST('/OpenRideServer-RS/resources/users/'+this.username+'/ratings', true, ratingsmod.getGivenRatingRequest(), function() {
            //document.getElementById('openrating'+riderRouteId).style.display='none';
            showOverlayDialog('Your review was submitted successfully .', '', 'OK', '', '', '');
            fokus.openride.mobclient.controller.modules.modulemanager.setView("openratingsUI");
        }, function(x,s,e) {
            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfotunately, your vote could not be submitted.')
        });

    },


    parsereceivedratingslist : function(receivedratingslistdiv, resultlist){
        var result = JSON.parse(resultlist);
        var listhtml = '<h3>Ratings received</h3>';
        favnames = new Array();

        if(typeof (result.list[0].ReceivedRatingResponse) != 'undefined'){
            if(typeof (result.list[0].ReceivedRatingResponse.length) == 'undefined'){
                result.list[0].ReceivedRatingResponse = [result.list[0].ReceivedRatingResponse];

            }
            for(var i=0;i< result.list[0].ReceivedRatingResponse.length; i++){
                var entry = result.list[0].ReceivedRatingResponse[i];

                var raterRoleName = '';
                if (entry.custRole == 'd') {
                    if (entry.custGender == 'm') {
                        raterRoleName = "Your drivers";
                    }
                    else if (entry.custGender == 'f') {
                        raterRoleName = "Your drivers";
                    }
                }
                else if (entry.custRole == 'r') {
                    if (entry.custGender == 'm') {
                        raterRoleName = "Your riders";
                    }
                    else if (entry.custGender == 'f') {
                        raterRoleName = "Your riders";
                    }
                }
<<<<<<< HEAD

                var dateRealized = new Date(entry.timestamprealized);

=======

                var dateRealized = new Date(entry.timestamprealized);

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
                var comment = '';
                if (typeof (entry.receivedRatingComment) != 'undefined' && entry.receivedRatingComment != '') {
                    comment = '&bdquo;' + entry.receivedRatingComment + '&ldquo;';
                }
                else {
                    switch(entry.receivedRating) {
                        case 2:
                            comment = '<span style="color: #aaa; font-style: italic;">Positive reviews</span>';
                            break;
                        case 1:
                            comment = '<span style="color: #aaa; font-style: italic;">Decent reviews</span>';
                            break;
                        case 0:
                            comment = '<span style="color: #aaa; font-style: italic;">Neutral reviews</span>';
                            break;
                        case -1:
                            comment = '<span style="color: #aaa; font-style: italic;">Mediocre reviews</span>';
                            break;
                        case -2:
                            comment = '<span style="color: #aaa; font-style: italic;">Negative reviews</span>';
                            break;
                    }
                }

                listhtml += '<div class="rating-row" style="border-bottom: 1px solid #ccc; padding: 5px; min-height: 60px; clear: both;">'
                + '<div class="profile-info-short" style="float: left; margin: 0 15px 0 0; text-align: right;"><img src="../../OpenRideWeb/img/profile/' + entry.custNickname + '_thumb.jpg" alt="Profilbild von ' + entry.custNickname + '" style="width: 60px; height: 60px; display: block; background: #ddd;" /></div>'
                + '<div style="line-height: 140%; padding-left: 75px;">'
                + '<strong>' + entry.custNickname + '</strong> &ndash; <br />'
                + raterRoleName + ' on ' + dateRealized.getDate() + '.' + (dateRealized.getMonth() + 1) + '.' + dateRealized.getFullYear() + ':<br />'
                + '<img src="../img/rated_' + entry.receivedRating + '.png" style="vertical-align: -3px; padding: 0 5px 0 5px;" /> '
                + comment
                + '</div>'
                + '</div>';
            }
        }
        else {
            listhtml += "<p>No one has written a review for you.</p>";
        }

        document.getElementById(receivedratingslistdiv).innerHTML = listhtml;
    },

    setView : function (viewId){

        document.getElementById(this.currentdisplayedview).style.display = 'none';
        document.getElementById(viewId).style.display = 'block';

        var position = nativemod.getUserLocation();
        if(position == null){
            position = new google.maps.LatLng(52.525798, 13.314266);
        } /*DUMMYPOSITION;*/
        else{
            var pos = position;
            position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        }

        // clear tabListActiveRefreshTimer when switching tabs - those that need it will set it again
        clearInterval(tabListActiveRefreshTimer);
        // clear updateCountRefreshTimer when switching to active offers / searches list:
        if (viewId == 'activeofferUI' || viewId == 'activesearchUI') {
            clearInterval(updateCountRefreshTimer);
            updateCountRefreshTimer = 0;
        }
        // set updateCountRefreshTimer when switching to other tabs if not yet running:
        else if (!updateCountRefreshTimer) {
            if (updateCountRefreshTimer == 0)
                this.receiveUpdates();
            updateCountRefreshTimer = setInterval("fokus.openride.mobclient.controller.modules.modulemanager.receiveUpdates()", 15000);
        }


        if(viewId == 'offerstartpickerUI'){
            /*if(!mapInitialized){*/
            mapmod.setMapMode(0);
            mapmod.initialize('offerstartmap', 'offerstartaddrinput', position);
        /*mapInitialized = true;
                  }*/
        }

        //fill start/dest selects with current position and favorite points newofferdetailsUI
        else if(viewId == 'newofferUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));
            var pass = readCookie('password');
            $.ajax({
                type: "GET",
                url: PeerManagerPrefix + PeerMenager + '/users/'+this.username+'/profile',//'/api/register/' + user,
                data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: this.username,
                password: this.password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + this.username+':'+pass);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                success: function(data, textStatus, jqXHR){
                    userProfile.setAllData(data);
                    if (!userProfile.getCarColour() || !userProfile.getCarBrand() ) {//|| !userProfile.carPlateNo
                        showOverlayDialog('Please complete your car description in your profile before you can set ride offers.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(0, 1);', '', '');
                    }
                },
                error: function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                }
            });
<<<<<<< HEAD

            // Car details
            //                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile', false, function(result) {
            //                    if(typeof (result.ProfileResponse) != 'undefined'){
            //                        var personalData = result.ProfileResponse;
            //                        if (!personalData.carColour || !personalData.carBrand || !personalData.carPlateNo) {
            //                            showOverlayDialog('Please complete your car description in your profile before you can set ride offers.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(0, 1);', '', '');
            //                        }
            //                    }
            //                }, function(x,s,e) {
            //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Error loading profile data (Car model, -modell).')
            //                });

            if(serviceType == 'modify'){
                document.getElementById('tabimg11').src = "../img/tab1AngebotAendernActive_wide.png";
            } else {
                document.getElementById('tabimg11').src = "../img/tab1NeuesAngebotActive_wide.png";
            }

            document.getElementById(offerstartselectcurrpos).value = 'Location: not determined!';
            document.getElementById(offerstartselectcurrpos).latln = 'none';
            document.getElementById(offerdestselectcurrpos).value = 'Location: not determined!';
            document.getElementById(offerdestselectcurrpos).latln = 'none';

            try{
                mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), offerstartselectcurrpos);
                mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), offerdestselectcurrpos);
            }catch(e){

            }

=======

            // Car details
            //                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile', false, function(result) {
            //                    if(typeof (result.ProfileResponse) != 'undefined'){
            //                        var personalData = result.ProfileResponse;
            //                        if (!personalData.carColour || !personalData.carBrand || !personalData.carPlateNo) {
            //                            showOverlayDialog('Please complete your car description in your profile before you can set ride offers.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(0, 1);', '', '');
            //                        }
            //                    }
            //                }, function(x,s,e) {
            //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Error loading profile data (Car model, -modell).')
            //                });

            if(serviceType == 'modify'){
                document.getElementById('tabimg11').src = "../img/tab1AngebotAendernActive_wide.png";
            } else {
                document.getElementById('tabimg11').src = "../img/tab1NeuesAngebotActive_wide.png";
            }

            document.getElementById(offerstartselectcurrpos).value = 'Location: not determined!';
            document.getElementById(offerstartselectcurrpos).latln = 'none';
            document.getElementById(offerdestselectcurrpos).value = 'Location: not determined!';
            document.getElementById(offerdestselectcurrpos).latln = 'none';

            try{
                mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), offerstartselectcurrpos);
                mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), offerdestselectcurrpos);
            }catch(e){

            }

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
            //                calendar.reset();
            //                calendar.refreshSimpleCalendarPickerLabels(calendar.dateLabels, calendar.timeLabels);

            /*var offerlatln = nativemod.getUserLocation();
                if(offerlatln == null || offerlatln == 'undefined'){
                    document.getElementById(offerstartselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(offerstartselectcurrpos).latln = 'none';
                    document.getElementById(offerdestselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(offerdestselectcurrpos).latln = 'none';
                }else{
                    mapmod.insertRevGeocodedAddr(offerlatln, offerstartselectcurrpos);
                    mapmod.insertRevGeocodedAddr(offerlatln, offerdestselectcurrpos);
                }*/


            /*document.getElementById(offerdestselectcurrpos).innerHTML = document.getElementById(offerstartselectcurrpos).innerHTML;*/

            if (!this.detailsClicked) {
                var ddBox = document.getElementById(offerstartdropdownid);
                var count = ddBox.length;
                for (var i = count - 1; i > 1; i--) {
                    if (!ddBox[i].mod) {
                        ddBox[i] = null;
                    }
                }

                ddBox = document.getElementById(offerdestdropdownid);
                count = ddBox.length;
                for (var j = count - 1; j > 1; j--) {
                    if (!ddBox[j].mod) {
                        ddBox[j] = null;
                    }
                }

                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/favoritepoints', false, function(data){
                    var offerstartsel = document.getElementById(offerstartdropdownid);
                    var offerdestsel = document.getElementById(offerdestdropdownid);

                    var result = data;

                    if(typeof (result.list[0].FavoritePointResponse) != 'undefined'){
                        if(typeof (result.list[0].FavoritePointResponse.length) == 'undefined'){
                            var favorite = result.list[0].FavoritePointResponse;

                            var name = favorite.favptDisplayName;
                            var address = favorite.favptAddress;
                            var favptGeoCoords = favorite.favptGeoCoords;
                            var id = favorite.favptId;

                            var favoption0 = document.createElement('option');
                            var favoption01 = document.createElement('option');
                            favoption0.innerHTML = name + ': ' +  address;
                            favoption0.latln = favptGeoCoords;
                            /*favoption0.latln = */

                            favoption01.innerHTML = name + ': ' +  address;
                            favoption01.latln = favptGeoCoords;

                            offerstartsel.add(favoption0,null);
                            offerdestsel.add(favoption01,null);

                        }else{
                            for(var j=0;j< result.list[0].FavoritePointResponse.length; j++){
                                var entry = result.list[0].FavoritePointResponse[j];

                                var favname0 = entry.favptDisplayName;
                                var favaddress0 = entry.favptAddress;
                                var favptGeoCoords0 = entry.favptGeoCoords;
                                var favid0 = entry.favptId;

                                var favoption1 = document.createElement('option');
                                var favoption11 = document.createElement('option');
                                favoption1.innerHTML = favname0 + ': ' +  favaddress0;
                                favoption1.latln = favptGeoCoords0;
                                /*favoption0.latln = */

                                favoption11.innerHTML = favname0 + ': ' +  favaddress0;
                                favoption11.latln = favptGeoCoords0;

                                offerstartsel.add(favoption1,null);
                                offerdestsel.add(favoption11,null);
                            }
                        }
                    }else{
                }
                }, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately your favorites could not be loaded.')
                } );
                this.offerfavsset = true;
            }
        }

        else if(viewId == 'newsearchUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

            if(serviceType == 'modify'){
                document.getElementById('tabimg11').src = "../img/tab1GesuchAendernActive_wide.png";
            } else {
                document.getElementById('tabimg11').src = "../img/tab1NeuesGesuchActive_wide.png";
            }

            document.getElementById(searchstartselectcurrpos).value = 'Location: not determined!';
            document.getElementById(searchstartselectcurrpos).latln = 'none';
            document.getElementById(searchdestselectcurrpos).value = 'Location: not determined!';
            document.getElementById(searchdestselectcurrpos).latln = 'none';

            try {
                mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), searchstartselectcurrpos);
                mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), searchdestselectcurrpos);
            } catch (e) {

            }

            /*var searchlatln = nativemod.getUserLocation();

                if(offerlatln == 'undefined'){
                    document.getElementById(searchstartselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(searchstartselectcurrpos).latln = 'none';
                    document.getElementById(searchdestselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(searchdestselectcurrpos).latln = 'none';
                }else{
                    mapmod.insertRevGeocodedAddr(searchlatln, searchstartselectcurrpos);
                    mapmod.insertRevGeocodedAddr(searchlatln, searchdestselectcurrpos);
                }*/


            /*document.getElementById(searchdestselectcurrpos).innerHTML = document.getElementById(searchstartselectcurrpos).innerHTML;*/

            if (!this.detailsClicked) {
                ddBox = document.getElementById(searchstartdropdownid);
                count = ddBox.length;
                for (i = count - 1; i > 1; i--) {
                    if (!ddBox[i].mod) {
                        ddBox[i] = null;
                    }
                }

                ddBox = document.getElementById(searchdestdropdownid);
                count = ddBox.length;
                for (j = count - 1; j > 1; j--) {
                    if (!ddBox[j].mod) {
                        ddBox[j] = null;
                    }
                }

                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/favoritepoints', false, function(data){
                    var searchstartsel = document.getElementById(searchstartdropdownid);
                    var searchdestsel = document.getElementById(searchdestdropdownid);
<<<<<<< HEAD

                    var result = data;

                    if(typeof (result.list[0].FavoritePointResponse) != 'undefined'){
                        if(typeof (result.list[0].FavoritePointResponse.length) == 'undefined'){
                            var favorite = result.list[0].FavoritePointResponse;

                            var name1 = favorite.favptDisplayName;
                            var address1 = favorite.favptAddress;
                            var geocoords = favorite.favptGeoCoords;
                            var id1 = favorite.favptId;

                            var favoption2 = document.createElement('option');
                            var favoption21 = document.createElement('option');
                            favoption2.innerHTML = name1 + ': ' +  address1;
                            favoption2.latln = geocoords;
                            /*favoption0.latln = */

                            favoption21.innerHTML = name1 + ': ' +  address1;
                            favoption21.latln = geocoords;

                            searchstartsel.add(favoption2,null);
                            searchdestsel.add(favoption21,null);

=======

                    var result = data;

                    if(typeof (result.list[0].FavoritePointResponse) != 'undefined'){
                        if(typeof (result.list[0].FavoritePointResponse.length) == 'undefined'){
                            var favorite = result.list[0].FavoritePointResponse;

                            var name1 = favorite.favptDisplayName;
                            var address1 = favorite.favptAddress;
                            var geocoords = favorite.favptGeoCoords;
                            var id1 = favorite.favptId;

                            var favoption2 = document.createElement('option');
                            var favoption21 = document.createElement('option');
                            favoption2.innerHTML = name1 + ': ' +  address1;
                            favoption2.latln = geocoords;
                            /*favoption0.latln = */

                            favoption21.innerHTML = name1 + ': ' +  address1;
                            favoption21.latln = geocoords;

                            searchstartsel.add(favoption2,null);
                            searchdestsel.add(favoption21,null);

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
                        }else{
                            for(var j=0;j< result.list[0].FavoritePointResponse.length; j++){
                                var entry = result.list[0].FavoritePointResponse[j];

                                var favname1 = entry.favptDisplayName;
                                var favaddress1 = entry.favptAddress;
                                var geocoords1 = entry.favptGeoCoords;
                                var favid1 = entry.favptId;

                                var favoption3 = document.createElement('option');
                                var favoption31 = document.createElement('option');
                                favoption3.innerHTML = favname1 + ': ' +  favaddress1;
                                favoption3.latln = geocoords1;
                                /*favoption0.latln = */

                                favoption31.innerHTML = favname1 + ': ' +  favaddress1;
                                favoption31.latln = geocoords1;

                                searchstartsel.add(favoption3,null);
                                searchdestsel.add(favoption31,null);
                            }
                        }
                    }
                    else{
                }
                }, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately your favorites could not be loaded.')
                });
                this.searchfavsset = true;
            }
        }

        else if(viewId == 'offerdestpickerUI'){
            mapmod.setMapMode(0);
            mapmod.initialize('offerdestmap', 'offerdestaddrinput', position);
        }

        else if(viewId == 'searchstartpickerUI'){
            mapmod.setMapMode(0);
            mapmod.initialize('searchstartmap', 'searchstartaddrinput', position);
        }

        else if(viewId == 'searchdestpickerUI'){
            mapmod.setMapMode(0);
            mapmod.initialize('searchdestmap', 'searchdestaddrinput', position);
        }

        else if(viewId == 'newfavoritepickerUI'){
        /*mapmod.setMapMode(0);
                mapmod.initialize('newfavoritepickermap', 'newfavoriteaddrinput', position);*/

        //set view to fullscreen favorite picker map as temporary approach
        //TODO: connect fullscreen map view to tab tree
        //this.setFullScreenMapView('favoritesgmapscreencontainer');
        }

        else if(viewId == 'showofferrouteUI'){
            mapmod.setMapMode(1);
            var dummydiv = document.createElement('div');
            dummydiv.id = "dummyaddrinput";
            var routearr = mapmod.getRoutePath();
            var center;
            if(routearr != null && routearr != 'undefined'){
                if(routearr.length >=2){
                    mapmod.initialize('offersimpleroutemap', 'dummyaddrinput', routearr[0]);
                }else
                    showOverlayDialog('Route anzeigen', '<br />Start and finish points must be different!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
            }
        }

        else if(viewId == 'showsearchrouteUI'){
            mapmod.setMapMode(1);
            var dummydiv = document.createElement('div');
            dummydiv.id = "dummyaddrinput";
            var routearr = mapmod.getRoutePath();
            var center;
            if(routearr != null && routearr != 'undefined'){
                if(routearr.length >=2){
                    mapmod.initialize('searchsimpleroutemap', 'dummyaddrinput', routearr[0]);
                }else
                    showOverlayDialog('Show route', '<br />Start and finish points must be different!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
            }
        }

        else if(viewId == 'activeofferUI'){
            //provenance changeView
            var datetime = new Date();
            var timeZone = datetime.getTimezoneOffset()/60;
            if (timeZone>0)
                timeZone="-"+timeZone;
            else
                timeZone="+"+(-timeZone);
            var datetimestr = datetime.getFullYear()+'-'+datetime.getMonth()+'-'+datetime.getDate()+'T'+datetime.getHours()+':'+datetime.getMinutes()+':'+datetime.getSeconds()+timeZone;
            $.ajax({
                type: "POST",
                url: "https://provenance.ecs.soton.ac.uk/smartsociety/provbindings/binding/",
                data: '{"prov":"@prefix prov: <http://www.w3.org/ns/prov#> .@prefix xsd: <http://www.w3.org/2001/XMLSchema#/> .@prefix tmpl: <http://openprovenance.org/tmpl#> .@prefix var: <http://openprovenance.org/var#> '+
                '.@prefix view: <168.144.152.202/OpenRideServer-RS/view/> .@prefix rideservice: <168.144.152.202/OpenRideServer-RS/> .@prefix rideserver: <168.144.152.202/> .@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> '+
                '.@prefix  usr: <http://168.144.202.152:3000/subject/byURI/> '+
                '.var:view a prov:Entity; tmpl:value_0 rideservice:view . '+
                'var:client a prov:Entity; tmpl:value_0 rideserver:OpenRideServer-RS . '+
                'var:change_view a prov:Entity; tmpl:value_0 view:activeOffersView . '+
                'var:username a prov:Entity; tmpl:2dvalue_0_0 usr:'+user+' . '+
                'var:change_view_start_time a prov:Entity; tmpl:2dvalue_0_0 \\"'+datetimestr+'\\"^^xsd:dateTime . '+
                'var:change_view_start_end_time a prov:Entity; tmpl:2dvalue_0_0 \\"'+datetimestr+'\\"^^xsd:dateTime .",'+
                ' "binding_name":"ss_change_view_binding_223", "template_name":"ss_change_view"}',
                crossDomain: true,
                headers: {
                    "Content-Type" : "text/turtle"
                },
                contentType: "text/turtle",
                async: "true",

                success: function(data , textStatus) {
                //alert('success '+data);
                },
                error: function(jq , textStatus , errorThrown){
                //alert('failed');
                }
            });
            var start = new Date().getTime();
            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));
            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers', false, this.setActiveOfferList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your listings could not be loaded.')
            });

            rides.length = 0;
            parseOffer  = this.parseactiveofferlist;
            var parseUnmatchedOffer = this.parseUnmatchedRideRequest;
            dummyTHIS = this;

            var t = fokus.openride.mobclient.controller.modules.modulemanager.username;
            /********* IDENTITY ********/
            if (usermode == DRIVERMODE)
                if (username == 'AviB') {
                    user = 'agent1';
                    pass = 'agent1';
                }
                else {
                    user = 'agent6';
                    pass = 'agent6';
                }
            else
            if (username == 'MaxS') {
                user = 'agent2';
                pass = 'agent2';
            }
            else {
                user = 'agent3';
                pass = 'agent3';
            }
            var agent = user.substring(5, user.length);
            var agentID = parseInt(agent) - 1;
            user = readCookie('username');
            pass = readCookie('password');
            var sum = 0;
            var counttime=0;
            /********* IDENTITY ********/
            $.ajax
            ({
                type: "GET",
                url: DimitrisRemotePrefix+DimitrisRemote+'/rideRequests',
                data: "user="+user,
                crossDomain: true,
                username : user,
                password : pass,
                beforeSend: function (xhr)
                {
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                    xhr.withCredentials = true;
                },
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Origin" : "http://localhost:8080"
                },
                dataType : "json" ,
                async: false,
                accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                "application/json;",                                  //for a nested json object, not strings
                success: function(data , textStatus) {
                    //alert('success in ajax call!! ' + data.data);
                    //alert(data.data[0])
                    //alert("start ajax call");

                    var allRequests={};

                    allRequests.data=[];
                    for (var i in data.data[0]){
                        allRequests.data.push({
                            "url":data.data[0][i],
                            "ETag":"",
                            "doc":{}
                        });
                    }
                    //alert(JSON.stringify(allRequests));
                    $.ajax({
                        type: "POST",
                        url: DimitrisRemotePrefix+DimitrisRemote+"/rideRequests/?action=getSet",
                        data:JSON.stringify(allRequests),
                        crossDomain: true,
                        username: user,
                        password: pass,
                        beforeSend: function (xhr)
                        {
                            xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                            xhr.withCredentials = true;
                            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                        },
                        //                            headers: {
                        //                                    "X-Requested-With": "XMLHttpRequest",
                        //                                    "Origin" : "http://localhost:8080"
                        //                                },
                        contentType : "application/json" ,
                        async: false,                                                     //for a nested json object, not strings
                        success: function(data , textStatus,jqXHR) {
                            rideRequests=[];
                            var documentToFill = {};
                            documentToFill.data = [];
                            var flag;
                            var i;
                            var rideSet = JSON.parse(data);
                            for (var g=0; g<rideSet.data.length;g++){
                                flag=false;
                                rideRequests.push(JSON.stringify(rideSet.data[g].doc));

                                //alert(g+' - '+JSON.stringify(rideSet.data[g].doc));
                                if (rideSet.data[g].doc.potentialRidePlans.length!=0){
                                    flag=true;
                                    //alert('prp '+JSON.stringify(rideSet.data[g].doc.potentialRidePlans));
                                    for (i=0;i<rideSet.data[g].doc.potentialRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.potentialRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.potentiallyAgreedRidePlans.length!=0){
                                    flag=true;
                                    //alert('parp '+JSON.stringify(rideSet.data[g].doc.potentiallyAgreedRidePlans));
                                    for (i=0;i<rideSet.data[g].doc.potentiallyAgreedRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.potentiallyAgreedRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.driverAgreedRidePlans.length!=0){
                                    flag=true;
                                    //alert('darp '+JSON.stringify(rideSet.data[g].doc.driverAgreedRidePlans));
                                    for (i=0;i<rideSet.data[g].doc.driverAgreedRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.driverAgreedRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.agreedRidePlan.length!=0){
                                    flag=true;
                                    //alert('arp '+JSON.stringify(rideSet.data[g].doc.agreedRidePlan));
                                    documentToFill.data.push({
                                        "url"  : rideSet.data[g].doc.agreedRidePlan,
                                        "ETag" : "",
                                        "doc"  : {}
                                    })
                                }
                                if (flag){
                            //    alert('flag=true ' +JSON.stringify(rideSet.data[g].doc));
                            }
                            // rideRequests.pop();                                    }
                            }//end plans for
                            // alert(JSON.stringify(documentToFill));

                            $.ajax({
                                type: "POST",
                                url: DimitrisRemotePrefix+DimitrisRemote+"/ridePlans/?action=getSet",
                                data:JSON.stringify(documentToFill),
                                crossDomain: true,
                                username: user,
                                password: pass,
                                beforeSend: function (xhr)
                                {
                                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                    xhr.withCredentials = true;
                                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                },
                                contentType : "application/json" ,
                                async: false,
                                success: function(data, textStatus, jqXHR) {
                                    rides=[];
                                    var rideSet = JSON.parse(data);
                                    //alert("result is "+data);
                                    for (var g=0; g<rideSet.data.length;g++){
                                        //alert(JSON.stringify(rideSet.data[g].doc));
                                        rides.push(JSON.stringify(rideSet.data[g].doc));
                                    }
                                },
                                error: function (jq, textStatus, errorThrown) {
                                    //                                        alert('state: ' + jq.readyState);
                                    //                                        alert('status: ' + jq.status);
                                    //                                        alert('response ' + jq.responseText);
                                    //                                        alert('this error is: ' + errorThrown );
                                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                                }
                            })
                        //alert(rideRequests.length);

                        },
                        error: function(jq , textStatus , errorThrown){
                            //                                alert('state: ' + jq.readyState);
                            //                                alert('status: ' + jq.status);
                            //                                alert('response ' + jq.responseText);
                            //                                alert('this error is: ' + errorThrown );
                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                        }
                    })
                    parseOffer();
                },
                error: function(jq , textStatus , errorThrown){
                    //                        alert('state: ' + jq.readyState);
                    //                        alert('status: ' + jq.status);
                    //                        alert('response ' + jq.responseText);
                    //                        alert('this error is: ' + errorThrown );
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                }

            })
            //alert('this is url after function '+ parsedUrl + 'stringified ' + JSON.stringify(parsedUrl))
            this.parseactiveofferlist();
        }
        else if(viewId == 'completedtripsUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/inactive', false, this.setActiveOfferList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, we could not load your offers.')
            });
            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/inactive', false, this.setActiveSearchList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, we could not load your offers.')
            });
            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings/open', false, this.setOpenRatingsList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, we could not load your reviews.')
            });
            this.parsecompletedtriplist();
        }
        else if(viewId == 'activesearchUI'){
<<<<<<< HEAD

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches', false, this.setActiveSearchList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your application could not be loaded.')
            });
            rides.length = 0;
            parseSearch = this.parseactivesearcheslist;
            parseUnmatchedSearch = this.parseUnmatchedRideRequest;
            dummyTHIS = this;

=======

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches', false, this.setActiveSearchList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your application could not be loaded.')
            });
            rides.length = 0;
            parseSearch = this.parseactivesearcheslist;
            parseUnmatchedSearch = this.parseUnmatchedRideRequest;
            dummyTHIS = this;

>>>>>>> f23b0d7d80e488d39bca3c4bb8263505738c4a1d
            var t = fokus.openride.mobclient.controller.modules.modulemanager.username;
            /********* IDENTITY ********/
            if (usermode == DRIVERMODE)
                if (username == 'AviB') {
                    user = 'agent1';
                    pass = 'agent1';
                }
                else {
                    user = 'agent6';
                    pass = 'agent6';
                }
            else
            if (username == 'MaxS') {
                user = 'agent2';
                pass = 'agent2';
            }
            else {
                user = 'agent3';
                pass = 'agent3';
            }
            agent = user.substring(5, user.length);
            agentID = parseInt(agent) - 1;
            user = readCookie('username');
            pass = readCookie('password');
            /********* IDENTITY ********/
            $.ajax
            ({
                type: "GET",
                url: DimitrisRemotePrefix+DimitrisRemote+'/rideRequests',
                data: "user="+ user,
                crossDomain: true,
                username : user,
                password : pass,
                beforeSend: function (xhr)
                {
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                    xhr.withCredentials = true;
                },
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Origin" : "http://localhost:8080"
                },
                dataType : "json" ,
                async: false,
                accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                "application/json;",                                  //for a nested json object, not strings
                success: function(data , textStatus) {
                    //                        //alert('success in ajax call!! ' + data.data);
                    //                        var allRequests={};
                    var allRequests={};

                    allRequests.data=[];
                    for (var i in data.data[0]){
                        allRequests.data.push({
                            "url":data.data[0][i],
                            "ETag":"",
                            "doc":{}
                        });
                    }
                    //alert(JSON.stringify(allRequests));
                    $.ajax({
                        type: "POST",
                        url: DimitrisRemotePrefix+DimitrisRemote+"/rideRequests/?action=getSet",
                        data:JSON.stringify(allRequests),
                        crossDomain: true,
                        username: user,
                        password: pass,
                        beforeSend: function (xhr)
                        {
                            xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                            xhr.withCredentials = true;
                            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                        },
                        //                            headers: {
                        //                                    "X-Requested-With": "XMLHttpRequest",
                        //                                    "Origin" : "http://localhost:8080"
                        //                                },
                        contentType : "application/json" ,
                        async: false,                                                     //for a nested json object, not strings
                        success: function(data , textStatus,jqXHR) {
                            rideRequests=[];
                            var documentToFill = {};
                            documentToFill.data = [];
                            var flag=false;
                            var i;
                            var rideSet = JSON.parse(data);
                            for (var g=0; g<rideSet.data.length;g++){
                                flag=false;
                                rideRequests.push(JSON.stringify(rideSet.data[g].doc));

                                //alert(g+' - '+JSON.stringify(rideSet.data[g].doc));
                                if (rideSet.data[g].doc.potentialRidePlans.length!=0){
                                    flag=true;
                                    //alert('prp');
                                    for (i=0;i<rideSet.data[g].doc.potentialRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.potentialRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.potentiallyAgreedRidePlans.length!=0){
                                    flag=true;
                                    //alert('parp');
                                    for (i=0;i<rideSet.data[g].doc.potentiallyAgreedRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.potentiallyAgreedRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.driverAgreedRidePlans.length!=0){
                                    flag=true;
                                    //alert('darp');
                                    for (i=0;i<rideSet.data[g].doc.driverAgreedRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.driverAgreedRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (JSON.stringify(rideSet.data[g].doc.agreedRidePlan)!=""){
                                    flag=true;
                                    //alert('arp');
                                    documentToFill.data.push({
                                        "url"  : rideSet.data[g].doc.agreedRidePlan,
                                        "ETag" : "",
                                        "doc"  : {}
                                    })
                                }
                                if (flag){
                            //alert('flag=true ' +g);
                            }
                            }//end plans for
                            //alert(JSON.stringify(documentToFill));

                            $.ajax({
                                type: "POST",
                                url: DimitrisRemotePrefix+DimitrisRemote+"/ridePlans/?action=getSet",
                                data:JSON.stringify(documentToFill),
                                crossDomain: true,
                                username: user,
                                password: pass,
                                beforeSend: function (xhr)
                                {
                                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                    xhr.withCredentials = true;
                                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                },
                                contentType : "application/json" ,
                                async: false,
                                success: function(data, textStatus, jqXHR) {
                                    rides=[];
                                    var rideSet = JSON.parse(data);
                                    for (var g=0; g<rideSet.data.length;g++){
                                        //alert(JSON.stringify(rideSet.data[g].doc));
                                        rides.push(JSON.stringify(rideSet.data[g].doc));
                                    }

                                },
                                error: function (data, textStatus, errorThrown) {
                                    //                                        alert('state: ' + jq.readyState);
                                    //                                        alert('status: ' + jq.status);
                                    //                                        alert('response ' + jq.responseText)
                                    //                                        alert('this error is: ' + errorThrown );
                                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                                }
                            })
                            //alert(rideRequests.length);
                            parseSearch();
                        },
                        error: function(jq , textStatus , errorThrown){
                            //                                alert('state: ' + jq.readyState);
                            //                                alert('status: ' + jq.status);
                            //                                alert('response ' + jq.responseText)
                            //                                alert('this error is: ' + errorThrown );
                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                        }
                    })

                },
                error: function(jq , textStatus , errorThrown){
                    //                        alert('state: ' + jq.readyState);
                    //                        alert('status: ' + jq.status);
                    //                        alert('response ' + jq.responseText)
                    //                        alert('this error is: ' + errorThrown );
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                }

            })
            //parseUnmatchedSearch(0);
            this.parseactivesearcheslist();
        }
        else if(viewId == 'favlistUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg13","tabimg14"));

        //                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/favoritepoints', false, this.setFavoriteList, function(x,s,e) {
        //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, we could not load your favorites.')
        //                });
        //                this.parsefavoriteslist(this.favoritelistdiv, favoritelist);
        }
        else if(viewId == 'ratingsUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));
            //                    srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile', false, this.parseprofilepersonaldata, function(x,s,e) {
            //                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
            //                    });
            //                    srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile/preferences', false, this.parseprofilepreferences, function(x,s,e) {
            //                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Oops, your settings could not be loaded.')
            //                    });
            var pass = readCookie('password');
            $.ajax({
                type: "GET",
                url: PeerManagerPrefix + PeerMenager + '/users/'+this.username+'/profile',//'/api/register/' + user,
                data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: this.username,
                password: this.password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + this.username+':'+pass);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                accepts: "application/json",
                success: function(data, textStatus, jqXHR){
                    userProfile.setAllData(data);
                    fokus.openride.mobclient.controller.modules.modulemanager.parseprofilepersonaldata('fff');
                },
                error: function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                }
            });
            //                    srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings/summary', false, this.setRatingsSummary, function(x,s,e) {
            //                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, we could not load your given reviews.')
            //                    });

            /************** START CHANGE *************/

            var ans;
            /********* IDENTITY ********/
            if (usermode == DRIVERMODE)
                if (this.username == 'AviB') {
                    user = 'agent1';
                    pass = 'agent1';
                }
                else {
                    user = 'agent6';
                    pass = 'agent6';
                }
            else
            if (this.username == 'MaxS') {
                user = 'agent2';
                pass = 'agent2';
            }
            else {
                user = 'agent3';
                pass = 'agent3';
            }
            var agentID = user.substring(5, user.length);
            user = readCookie('username');
            pass = readCookie('password');

            /********* IDENTITY ********/
            var dummyparseratingssummary = this.parseratingssummary;
            var dummydiv = this.parseratingssummarydiv;

            $.ajax
            ({
                type: "GET",
                url: DimitrisRemotePrefix+DimitrisRemote+"/subject/byURI/" + user ,
                data: "",
                crossDomain: true,
                username : user,
                password : pass,
                beforeSend: function (xhr)
                {
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    xhr.withCredentials = true;
                },
                headers:
                {
                    "X-Requested-With": "XMLHttpRequest"
                //"Origin" : "http://localhost:8080"
                },
                //dataType : "json" ,
                async: false,
                accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                "application/json;",
                success: function(data , textStatus) {
                    //alert(data);
                    var obj = JSON.parse(data);
                    if (obj["versionInfo"]["previousVersion"]=="none" || typeof(obj["currentReputationReport"])=='undefined'){//no rating
                        dummyparseratingssummary(dummydiv, /*ratingssummary*/ null);
                    }
                    else{
                        //alert('1'+data);
                        var url = obj["currentReputationReport"]["uri"];
                        //alert(url);
                        $.ajax
                        ({
                            type: "GET",
                            url: DimitrisRemotePrefix+DimitrisRemote+"/" + url,
                            data: "",
                            crossDomain: true,
                            username : user,
                            password : pass,
                            beforeSend: function (xhr)
                            {
                                xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                                xhr.withCredentials = true;
                            },
                            headers:
                            {
                                "X-Requested-With": "XMLHttpRequest"
                            //"Origin" : "http://localhost:8080"
                            },
                            //dataType : "json" ,
                            async: false,
                            accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                            "application/json;",
                            success: function(data , textStatus) {
                                if (data != null && data != 'undefined' && data != "")
                                {
                                    var rep = JSON.parse(data);
                                    //alert('2'+data);

                                    dummyparseratingssummary(dummydiv, /*ratingssummary*/ rep["json"]);
                                }
                                else dummyparseratingssummary(dummydiv, /*ratingssummary*/ null);
                            },
                            error: function(jq , textStatus , errorThrown){
                                //                                    alert('state: ' + jq.readyState);
                                //                                    alert('status: ' + jq.status);
                                //                                    alert('response ' + jq.responseText)
                                //                                    alert('this error is: ' + errorThrown );
                                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                            }

                        });
                    }
                },
                error: function(jq , textStatus , errorThrown){
                    //                        alert('state: ' + jq.readyState);
                    //                        alert('status: ' + jq.status);
                    //                        alert('response ' + jq.responseText)
                    //                        alert('this error is: ' + errorThrown );
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                }

            });


        //alert(JSON.stringify(obj));
        /************** END CHANGE ***************/

        }
        else if(viewId == 'openratingsUI'){
            //alert('viewID == \'openratingsUI\'');
            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings/open', "false", this.setOpenRatingsList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your open reviews could not be loaded.')
            });
            rides.length = 0;
            dummyTHIS = this;
            parseOpenRatings = this.parseopenratingslist;
            var t = fokus.openride.mobclient.controller.modules.modulemanager.username;
            /********* IDENTITY ********/
            if (usermode == DRIVERMODE)
                if (username == 'AviB') {
                    user = 'agent1';
                    pass = 'agent1';
                }
                else {
                    user = 'agent6';
                    pass = 'agent6';
                }
            else
            if (username == 'MaxS') {
                user = 'agent2';
                pass = 'agent2';
            }
            else {
                user = 'agent3';
                pass = 'agent3';
            }
            var agent = user.substring(5, user.length);
            var agentID = parseInt(agent) - 1;
            user = readCookie('username');
            pass = readCookie('password');
            /********* IDENTITY ********/
            $.ajax
            ({
                type: "GET",
                url: DimitrisRemotePrefix+DimitrisRemote+'/rideRequests',
                data: "user="+user,
                crossDomain: true,
                username : user,
                password : pass,
                beforeSend: function (xhr)
                {
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    xhr.withCredentials = true;
                },
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Origin" : "http://localhost:8080"
                },
                dataType : "json" ,
                async: false,
                accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                "application/json;",                                  //for a nested json object, not strings
                success: function(data , textStatus) {
                    //alert('success in ajax call!! ' + data.data);
                    var allRequests={};

                    allRequests.data=[];
                    for (var i in data.data[0]){
                        allRequests.data.push({
                            "url":data.data[0][i],
                            "ETag":"",
                            "doc":{}
                        });
                    }
                    $.ajax({
                        type: "POST",
                        url: DimitrisRemotePrefix+DimitrisRemote+"/rideRequests/?action=getSet",
                        data:JSON.stringify(allRequests),
                        crossDomain: true,
                        username: user,
                        password: pass,
                        beforeSend: function (xhr)
                        {
                            xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                            xhr.withCredentials = true;
                            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                        },
                        //                            headers: {
                        //                                    "X-Requested-With": "XMLHttpRequest",
                        //                                    "Origin" : "http://localhost:8080"
                        //                                },
                        contentType : "application/json" ,
                        async: false,                                                     //for a nested json object, not strings
                        success: function(data , textStatus,jqXHR) {
                            rideRequests=[];
                            var documentToFill = {};
                            documentToFill.data = [];
                            var flag;
                            var i;
                            var rideSet = JSON.parse(data);
                            for (var g=0; g<rideSet.data.length;g++){
                                flag=false;
                                rideRequests.push(JSON.stringify(rideSet.data[g].doc));

                                //alert(g+' - '+JSON.stringify(rideSet.data[g].doc));
                                if (rideSet.data[g].doc.potentialRidePlans.length!=0){
                                    flag=true;
                                    //alert('prp '+JSON.stringify(rideSet.data[g].doc.potentialRidePlans));
                                    for (i=0;i<rideSet.data[g].doc.potentialRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.potentialRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.potentiallyAgreedRidePlans.length!=0){
                                    flag=true;
                                    //alert('parp '+JSON.stringify(rideSet.data[g].doc.potentiallyAgreedRidePlans));
                                    for (i=0;i<rideSet.data[g].doc.potentiallyAgreedRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.potentiallyAgreedRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.driverAgreedRidePlans.length!=0){
                                    flag=true;
                                    //alert('darp '+JSON.stringify(rideSet.data[g].doc.driverAgreedRidePlans));
                                    for (i=0;i<rideSet.data[g].doc.driverAgreedRidePlans.length;i++){
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.driverAgreedRidePlans[i],
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                }
                                if (rideSet.data[g].doc.agreedRidePlan.length!=0){
                                    flag=true;
                                    //alert('arp '+JSON.stringify(rideSet.data[g].doc.agreedRidePlan));
                                    documentToFill.data.push({
                                        "url"  : rideSet.data[g].doc.agreedRidePlan,
                                        "ETag" : "",
                                        "doc"  : {}
                                    })
                                }
                                if (flag){
                            //    alert('flag=true ' +JSON.stringify(rideSet.data[g].doc));
                            }
                            // rideRequests.pop();                                    }
                            }//end plans for
                            // alert(JSON.stringify(documentToFill));

                            $.ajax({
                                type: "POST",
                                url: DimitrisRemotePrefix+DimitrisRemote+"/ridePlans/?action=getSet",
                                data:JSON.stringify(documentToFill),
                                crossDomain: true,
                                username: user,
                                password: pass,
                                beforeSend: function (xhr)
                                {
                                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                    xhr.withCredentials = true;
                                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                },
                                contentType : "application/json" ,
                                async: false,
                                success: function(data, textStatus, jqXHR) {
                                    rides=[];
                                    var rideSet = JSON.parse(data);
                                    //alert("result is "+data);
                                    for (var g=0; g<rideSet.data.length;g++){
                                        //alert(JSON.stringify(rideSet.data[g].doc));
                                        rides.push(JSON.stringify(rideSet.data[g].doc));
                                    }
                                },
                                error: function (jq, textStatus, errorThrown) {
                                    //                                        alert('state: ' + jq.readyState);
                                    //                                        alert('status: ' + jq.status);
                                    //                                        alert('response ' + jq.responseText);
                                    //                                        alert('this error is: ' + errorThrown );
                                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                                }
                            })
                            //alert(rideRequests.length);
                            parseOpenRatings(dummyTHIS.openratingslistdiv , null);
                        },
                        error: function(jq , textStatus , errorThrown){
                            //                                alert('state: ' + jq.readyState);
                            //                                alert('status: ' + jq.status);
                            //                                alert('response ' + jq.responseText);
                            //                                alert('this error is: ' + errorThrown );
                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                        }
                    })


                },
                error: function(jq , textStatus , errorThrown){
                    //                        alert('state: ' + jq.readyState);
                    //                        alert('status: ' + jq.status);
                    //                        alert('response ' + jq.responseText)
                    //                        alert('this error is: ' + errorThrown );
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                }

            })

            this.parseopenratingslist(this.openratingslistdiv, openratingslist);
        }
        else if(viewId == 'receivedratingsUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings', false, this.setReceivedRatingsList, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately we could not load your feedback.')
            });
            this.parsereceivedratingslist(this.receivedratingslistdiv, receivedratingslist);
        }
        else if(viewId == 'profileUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg13","tabimg14"));

            //            srvconn.GET('OpenRideServer-RS/resources/users/'+ this.username +'/profile', false, this.parseprofilepersonaldata, function(x,s,e) {
            //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
            //            });
            var pass = readCookie('password');
            $.ajax({
                type: "GET",
                url: PeerManagerPrefix + PeerMenager + '/users/'+this.username+'/profile',//'/api/register/' + user,
                data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: this.username,
                password: this.password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + this.username+':'+pass);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                accepts: "application/json",
                success: function(data, textStatus, jqXHR){
                    userProfile.setAllData(data);
                    fokus.openride.mobclient.controller.modules.modulemanager.parseprofilepersonaldata('fff');
                },
                error: function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                }
            });
            //                srvconn.GET(PeerMenager+'/users/'+ this.username +'/profile', false, this.parseprofilepersonaldata, function(x,s,e) {
            //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
            //                });
            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile/preferences', false, this.parseprofilepreferences, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your settings could not be loaded.')
            });
        }
        else if(viewId == 'homeUI'){

            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg13","tabimg14"));
            var pass = readCookie('password');
            var user = readCookie('username');
            $.ajax({
                type: "GET",
                url: PeerManagerPrefix + PeerMenager + '/users/'+user+'/profile',//'/api/register/' + user,
                data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: user,
                password: pass,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                success: function(data, textStatus, jqXHR){
                    //alert(JSON.stringify(data));
                    userProfile.setAllData(data);
                },
                error: function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                }
            });
            // Get initialization data
            fokus.openride.mobclient.controller.modules.uievents.parseInitData(null);
        //                srvconn.GET('/OpenRideServer-RS/resources/configuration/init', false, fokus.openride.mobclient.controller.modules.uievents.parseInitData, function(x,s,e){
        //
        //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, the initial data could not be loaded.')
        //                } );
        }

        this.currentdisplayedview = viewId;
        this.detailsClicked = false;
    },

    dummy : function() {
        return
    },

    changeViewAndUserMode : function(view) {
        fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
        fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));
        switch(view){
            case 'offers':
                if(usermode != DRIVERMODE) {
                    fokus.openride.mobclient.controller.modules.modulemanager.changemode();
                }
                fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
                break;
            case 'searches':
                if(usermode != RIDERMODE) {
                    fokus.openride.mobclient.controller.modules.modulemanager.changemode();
                }
                fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
                break;
            case 'ratings':
                fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(2, 1);
                break;
        }
    },

    changemode: function(){
        var drivermodeimg = document.getElementById('drivermodeimg');
        var ridermodeimg = document.getElementById('ridermodeimg');

        var retval = -1;
        if(usermode == DRIVERMODE){
            usermode = RIDERMODE;
            drivermodeimg.src = "../img/drivermodebtn_inactive.png";
            ridermodeimg.src = "../img/ridermodebtn_active.png";
            document.getElementById('usermodeslider').style.marginLeft = '0px';
            document.getElementById('usermodelabel').innerHTML = 'Rider';

            document.getElementById('riderupdatecount2').style.display = (document.getElementById('riderupdatecount2').innerHTML!='')?'block':'none';
            document.getElementById('driverupdatecount2').style.display = 'none';

            retval = 1;
        }else if(usermode == RIDERMODE){
            usermode = DRIVERMODE;
            drivermodeimg.src = "../img/drivermodebtn_active.png";
            ridermodeimg.src = "../img/ridermodebtn_inactive.png";
            document.getElementById('usermodeslider').style.marginLeft = '41px';
            document.getElementById('usermodelabel').innerHTML = 'Driver';

            document.getElementById('driverupdatecount2').style.display = (document.getElementById('driverupdatecount2').innerHTML!='')?'block':'none';
            document.getElementById('riderupdatecount2').style.display = 'none';

            retval = 0;
        }

        createCookie('usermode', retval, 365);
        this.setupTabs();
        return retval;
    },

    setriderupdatecount: function(count) {
        if (!count>0)
            count='';

        document.getElementById('riderupdatecount').innerHTML = count;
        document.getElementById('riderupdatecount2').innerHTML = count;
        document.getElementById('riderupdatecount3').innerHTML = count;

        document.getElementById('riderupdatecount').style.display = (count!='')?'block':'none';

        if (usermode == RIDERMODE) {
            document.getElementById('riderupdatecount2').style.display = (document.getElementById('riderupdatecount2').innerHTML!='')?'block':'none';
        }

        riderupdatecount = count;
    },
    reduceriderupdatecount: function() {
        this.setriderupdatecount(riderupdatecount - 1);
    },
    setdriverupdatecount: function(count) {
        if (!count>0)
            count='';

        document.getElementById('driverupdatecount').innerHTML = count;
        document.getElementById('driverupdatecount2').innerHTML = count;
        document.getElementById('driverupdatecount3').innerHTML = count;

        document.getElementById('driverupdatecount').style.display = (count!='')?'block':'none';

        if (usermode == DRIVERMODE) {
            document.getElementById('driverupdatecount2').style.display = (document.getElementById('driverupdatecount2').innerHTML!='')?'block':'none';
        }

        driverupdatecount = count;
    },
    reducedriverupdatecount: function() {
        this.setdriverupdatecount(driverupdatecount - 1);
    },

    alertajaxerror: function(xhr, textStatus, errorThrown, customMessage){
        //alert('1'+customMessage);
        var textMessage = '';
        var reload = false;
        //alert(customMessage);
        switch (textStatus) {
            case 'error':
                switch (xhr.status) {
                    case 500: // Server error
                        textMessage = 'The request could not be processed by the server. <br /> If this problem persists, please contact our support team.';
                        reload = false;
                        break;
                    case 502: // Bad gateway
                        textMessage = 'The request could not be forwarded to the server. <br /> Please try again.';
                        reload = false;
                        break;
                    case 400: // Bad request - display custom message, if supplied:
                        textMessage = customMessage || 'The request was rejected by the server as invalid. Please check your information.';
                        break;
                    case 404: // Not found - display custom message, if supplied:
                        textMessage = customMessage || 'The request was rejected by the server as invalid.';
                        break;
                    case 422:
                        textMessage = customMessage || 'The request could not be processed by the server.<br />If this problem presists, please contact our support team.';
                        break;
                    case 401:
                        textMessage = customMessage || 'The request could not be processed by the server.<br />Please contact our support team.';
                        break;
                    case 403:
                        textMessage = customMessage || 'The request could not be processed by the server.<br />Please contact our support team.';
                        break;
                    case 0: // Connection problems - reload
                        location.href="./";
                        break;
                }
                //DEBUG:
                textMessage = textMessage + ' <br /><br /><small style="color:#999;margin-bottom:-1em;">HTTP status: ' + xhr.status + '</small>';
                break;
            case 'parseerror':
                textMessage = 'The server response could not be processed. Please try again later.';//Die Antwort des Servers konnte nicht verarbeitet werden. Bitte versuchen Sie es später noch einmal.';
                break;
            case 'timeout':
                textMessage = 'The request could not be sent to the server. Please check your Internet connection.';//'Die Anfrage konnte nicht an den Server gesendet werden. Bitte prüfen Sie Ihre Internetverbindung.';
                break;
            case 'notmodified':
                // ok.
                break;
            case 'validateError':
                textMessage = customMessage;
                break;
        }

        if (textMessage != '') {
            if (reload) {
                showOverlayDialog('Error:', textMessage, 'OK', 'location.reload()', '', '');
            }
            else {
                showOverlayDialog('Error:', textMessage, 'OK', '', '', '');
            }
        }

    }
};
}();

jQuery.fn.sort = function() {
    return this.pushStack( [].sort.apply( this, arguments ), []);
};


function round(zahl,n_stelle){
    n_stelle = (n_stelle == "" || n_stelle == 0 ? 1 : Math.pow(10,n_stelle));

    zahl = Math.round(zahl * n_stelle) / n_stelle;

    return zahl;
}
function stars(category , riderId,id)
{
    //alert(category+" -"+riderId);
    var tmpID = "" + riderId +"#"+ category+"-"+id;
    var ans =
    /*'     <img src="../../OpenRideWeb/img/rating_off.gif" id="1' + tmpID +'" onClick="submit(1,' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="2' + tmpID +'" onClick="submit(2' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="3' + tmpID +'" onClick="submit(3' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="4' + tmpID +'" onClick="submit(4' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="5' + tmpID +'" onClick="submit(5' + riderId + ','+category+')"/><br><br>';*/
    '      <img src="../../OpenRideWeb/img/rating_off.gif" id="1' + tmpID +'" onMouseOver="mouseOver(\'' + 1 + tmpID + '\')" onMouseOut="mouseOut(\'' + 1 + tmpID + '\')" onClick="fix(\'' + 1 + tmpID + '\')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="2' + tmpID +'" onMouseOver="mouseOver(\'' + 2 + tmpID + '\')" onMouseOut="mouseOut(\'' + 2 + tmpID + '\')" onClick="fix(\'' + 2 + tmpID + '\')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="3' + tmpID +'" onMouseOver="mouseOver(\'' + 3 + tmpID + '\')" onMouseOut="mouseOut(\'' + 3 + tmpID + '\')" onClick="fix(\'' + 3 + tmpID + '\')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="4' + tmpID +'" onMouseOver="mouseOver(\'' + 4 + tmpID + '\')" onMouseOut="mouseOut(\'' + 4 + tmpID + '\')" onClick="fix(\'' + 4 + tmpID + '\')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="5' + tmpID +'" onMouseOver="mouseOver(\'' + 5 + tmpID + '\')" onMouseOut="mouseOut(\'' + 5 + tmpID + '\')" onClick="fix(\'' + 5 + tmpID + '\')"/><br><br>';
    //alert(ans);
    return ans;
}
function mouseOver(id1)
{
    //alert(id1);
    var id = id1.toString();
    var personal = parseInt(id.charAt(0));
    var riderId = id.substring(1, id.indexOf("#")); //charAt(1);
    var riderIdInt = parseInt(riderId);
    var category = id.charAt(id.indexOf("#")+1);
    var rider = id.substring(id.indexOf("-")+1);
    if (submitted_rides[riderIdInt][category] == -1)
    {
        for (var i=1; i<personal+1; i++)
        {
            //alert(i + riderId + category);
            if (document.getElementById(i + riderId +"#"+ category+"-"+rider) != null)
                document.getElementById(i + riderId +"#"+ category+"-"+rider).src = "../../OpenRideWeb/img/rating_on.gif";
        }
    }
}
function mouseOut(id1)
{
    //alert(id1);
    var id = id1.toString();
    var personal = parseInt(id.charAt(0));
    var riderId = id.substring(1, id.indexOf("#")); //charAt(1);
    var riderIdInt = parseInt(riderId);
    var category = id.charAt(id.indexOf("#")+1);
    var rider = id.substring(id.indexOf("-")+1);
    if (submitted_rides[riderIdInt][category] == -1)
    {
        for (var i=1; i<personal+1; i++)
        {
            //alert(i + riderId + category);
            if (document.getElementById(i + riderId +"#"+ category+"-"+rider) != null)
                document.getElementById(i + riderId +"#"+ category+"-"+rider).src = "../../OpenRideWeb/img/rating_off.gif";
        }
    }
}
function fix(id1)
{
    //alert(id1);
    var id = id1.toString();
    var personal = parseInt(id.charAt(0));
    var riderId = id.substring(1, id.indexOf("#"));//charAt(1);
    var category = id.charAt(id.indexOf("#")+1);
    var rider = id.substring(id.indexOf("-")+1);
    for (var i=1; i<6; i++){
        //alert(i + riderId + category);
        document.getElementById(i + riderId +"#"+category+"-"+rider).src = "../../OpenRideWeb/img/rating_off.gif";
    }
    for (var i=1; i<personal+1; i++)
        document.getElementById(i + riderId +"#"+category+"-"+rider).src = "../../OpenRideWeb/img/rating_on.gif";

    riderId = parseInt(riderId);
    //alert("glob " + riderId +" ["+ submitted_rides[riderId] + "] " + category);
    submitted_rides[riderId][category] = personal;
//    if ($.inArray(-1, submitted_rides[riderId]) == -1)
//    {
//        submit(submitted_rides[riderId] , riderId);
//        submitted_rides[riderId]= [-1,-1,-1,-1,-1];
//    }
}
function submit (rate_array , riderId , ratedUser)
{
    var rideIdInt = parseInt(riderId);
    var agent1 = 1 + rideIdInt;
    var agent = 'agent' + agent1;
    user = readCookie('username');
    pass = readCookie('password');
    usermode=readCookie('usermode');

    //alert('submit - '+JSON.stringify(rate_array)+' - '+rideIdInt)
    $.ajax
    ({
        type: "GET",
        url: DimitrisRemotePrefix+DimitrisRemote+ "/ridePlans/"+rideIdInt,
        data: "",
        crossDomain: true,
        username : user,
        password : pass,

        beforeSend: function (xhr)
        {
            xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
            xhr.withCredentials = true;
        },
        headers:
        {
            "X-Requested-With": "XMLHttpRequest",
            "Origin" : "http://localhost:8080"
        },
        //dataType : "json" ,
        async: false,

        success: function(data , textStatus) {
            //alert('success rideplan call');
            var obj = JSON.parse(data);
            var participants = "driver:" + obj["driver"] + "commuters:" + obj["commuters"];
            //if (usermode == DRIVERMODE) participants = obj.commuters;
            //else participants = obj.driver + " " + obj.commuters;
            var mode = 'driver';
            if (usermode == RIDERMODE) mode = 'commuter';
            //alert(participants);
            var subjects='{';
            var index = participants.indexOf("commuters");
            var ind=0;
            var subparticipants = participants.substring(index+10);
            if (mode == 'commuter')
                subjects = subjects +
                '"subject_'+(ind++)+'":{"subject_uri" : "' + participants.substring(7,index) + '",'//"smartshare/' + participants.substring(7,index) + '",'
                +'"quantifier_uri" : "driver"}';
            var array = subparticipants.split(",");
            for (var i=0; i<array.length;i++)
            {
                if (subjects != '{' && user != array[i]) subjects = subjects + ',';
                if (user != array[i]){
                    subjects = subjects +
                    '"subject_'+ind+'":{"subject_uri" : "' + array[i] + '",'//"smartshare/' + array[i] + '",'
                    +'"quantifier_uri" : "commuter"}';
                    ind++;
                }
            }
            var quantifier = 'driver';
            if (user==obj["driver"]){
                quantifier='commuter';
            }
            var subject='{"subject_0":{"subject_uri":"'+ratedUser+'", "quantifier_uri" : "'+quantifier+'"}},';

            //alert(JSON.stringify(rate_array));
            subjects = subjects + '},';
            var json2 = '{'
            +'"application_uri" : "smartshare",'
            +'"event_uri" : "ride/' + rideIdInt + '",'
            +'"subjects": '
            + subject//s
            +'"authors": {"author_0":{'
            +'"author_uri" : "' + user + '",'
            +'"quantifier_uri" : "'+ mode + '"'
            //+'"author_uri" : "' + user + '",'
            //+'"quantifier_uri" : "' + mode +'"'
            +'}},'
            +'"feedback": {'
            +'"StarRating": ' + rate_array[0] + ','//overall
            //+'"ride_Price": '+ rate_array[1] + ','//price
            //+'"ride_Route": 4,'
            //+'"ride_Car/Environment": 2,'
            +'"OnTime": ' + rate_array[2] + ','//reliability
            // +'"Communication": '+rate_array[3] + ',' //Communication
            +'"Friendly": ' + rate_array[4] //friendliness
            //+'"individual_Reliability": '+ rate_array[2] + ','
            //+'"individual_Communication": '+ rate_array[3] + ','
            //+'"individual_DrivingSkill": 3,'
            //+'"individual_Friendliness": '+ rate_array[4] + ','
            //+'"outsideFactors_Traffic": 2,'
            //+'"outsideFactors_Weather": 2'
            //+'"free_text": "'+ rate_array[5] + '",'
            //+'"serviceURI": "http://ridesharepplication"'
            +'}'
            +'}';
            //alert(json2);
            $.ajax
            ({
                type: "POST",
                url:DimitrisRemotePrefix+DimitrisRemote+"/application/1/feedback", //"http://"+DimitrisRemote+"/application/1/feedback" ,
                data: json2,
                crossDomain: true,
                username : user,
                password : pass,
                contentType:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                "application/json; charset=utf-8",
                beforeSend: function (xhr)
                {
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    xhr.withCredentials = true;
                },
                headers:
                {
                    "X-Requested-With": 'XMLHttpRequest'
                //"Origin" : "http://localhost:8080"
                },
                async: false,
                success: function(data , textStatus) {
                    //alert('submit success');
                    fokus.openride.mobclient.controller.modules.modulemanager.setView('openratingsUI');
                },
                error: function(jq , textStatus , errorThrown){
                    //                    alert('state: ' + jq.readyState);
                    //                    alert('status: ' + jq.status);
                    //                    alert('response ' + jq.responseText)
                    //                    alert('this error is: ' + errorThrown );
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                }
            });
        },
        error: function(jq , textStatus , errorThrown){
            //            alert('state: ' + jq.readyState);
            //            alert('status: ' + jq.status);
            //            alert('response ' + jq.responseText)
            //            alert('this error is: ' + errorThrown );
            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
        }

    })


}

function comment(id1)
{
    //alert(id1);
    var id = id1.toString();
    var rideId = parseInt(id.substring(0,id.indexOf("-")));
    var riderId = id.substring(id.indexOf("-")+1,id.indexOf("#"));//charAt(1);
    var category = id.charAt(id.indexOf("#")+1);
    var ratedUser = id.substring(id.indexOf("#")+2);
    //alert("comment - riderId "+riderId);
    //alert(ratedUser);
    var x;
    var comment;
    //comment=prompt("Please enter your name","Ride Comment");
    //while (comment==null){comment=prompt("Please enter your name","Ride Comment");}
    //alert('personal '+personal + ' riderId '+riderId);
    //alert(JSON.stringify(submitted_rides[riderId]));
    //submitted_rides[riderId][category] = comment;
    if ($.inArray(-1, submitted_rides[riderId]) == -1)
    {
        //alert('ff');
        submit(submitted_rides[riderId] , rideId, ratedUser);
        submitted_rides[riderId]= [-1,0,-1,0,-1];
    }
//alert('finish comment');
}
function rideDelete(num)
{
    user = readCookie('username');
    pass = readCookie('password');
    var revision = 0;
    var prp = JSON.parse(rideRequests[num-rides.length]);
    //alert( prp);
    $.ajax({//get subject reputation
        type:"DELETE",
        url:DimitrisRemotePrefix+DimitrisRemote+"/rideRequests/"+prp.index,
        async:false,
        crossDomain:true,
        username:user,
        password:pass,
        beforeSend : function(xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
        },
        accepts: "application/json",
        //dataType: "json",
        success:function(data, textStatus, jqXHR){
            //                                    alert(data);
            if (usermode==DRIVERMODE)
                showOverlayDialog('Your ride has been successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI'), '', '');
            else
                showOverlayDialog('Your ride has been successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI'), '', '');
        },
        error:function(jq,textStatus,errorThrown){
        //                                    alert('fail');
        }
    });
}
function myaccept(num)
{
    user = readCookie('username');
    pass = readCookie('password');
    //alert(user + ' ' + pass);
    var prp = JSON.parse(rides[num]);
    //alert('ra '+rides[num]);
    var revision = 0;
    if (usermode == DRIVERMODE && prp.agreedDriver == "")
    {
        var me = prp.potentiallyAgreedDriver;
        prp.agreedDriver = me;
        prp.potentiallyAgreedDriver = "";
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , DimitrisRemotePrefix+DimitrisRemote+"/ridePlans/" + prp.index, prp ,"false", user , pass );
        fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI');
    }
    else if (usermode == RIDERMODE && prp.agreedDriver != "")
    {
        var index = $.inArray(user, prp.potentiallyAgreedCommuters);
        if (index>=0) prp.potentiallyAgreedCommuters.splice(index, 1);
        (prp.agreedCommuters).push(user);
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , DimitrisRemotePrefix+DimitrisRemote+"/ridePlans/" + prp.index, prp ,"false" ,user, pass );
        fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI');
    }
//alert( prp);


}
function myreject(num)
{
    user = readCookie('username');
    pass = readCookie('password');
    var prp = JSON.parse(rides[num]);
    var revision = 0;
    if (usermode == DRIVERMODE)
    {
        var me = prp.potentiallyAgreedDriver;
        prp.potentiallyAgreedDriver = "";
        prp.rejectedDriver = me;
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , DimitrisRemotePrefix+DimitrisRemote+"/ridePlans/" + prp.index, prp , "false", user , pass);
        fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI');

    }
    else if (usermode == RIDERMODE)
    {
        var index = $.inArray(user, prp.potentiallyAgreedCommuters);
        if (index>=0) prp.potentiallyAgreedCommuters.splice(index, 1);
        (prp.rejectedCommuters).push(user);
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , DimitrisRemotePrefix+DimitrisRemote+"/ridePlans/" + prp.index, prp , "false" , user , pass );
        //i = i + 1;
        //}
        fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI');
    }
}

function fail(jq , status ,errorThrown)
{
    //    alert('state: ' + jq.readyState);
    //    alert('status: ' + jq.status);
    //    alert('response ' + jq.responseText)
    //    alert('this error is: ' + errorThrown );
    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
}

function ajaxcall(op , addr , info ,asynch , usr , pass )
{
    $.ajax
    ({
        type: op,
        url: addr,
        data: info,
        crossDomain: true,
        username : usr,
        password : pass,
        beforeSend: function (xhr)
        {
            xhr.setRequestHeader('Authorization' , 'Basic ' + usr+':'+pass);
            xhr.withCredentials = true;
        },
        headers:
        {
            "X-Requested-With": "XMLHttpRequest",
            "Origin" : "http://localhost:8080"
        },
        dataType : "json" ,
        async: asynch,
        contentType:  "application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
        //"application/json; charset=UTF-8",
        success: function(data , textStatus , jgXHR) {
            //alert('success ' + jgXHR.status);
            return jgXHR.status;
        },
        error: function(jq , textStatus , errorThrown){
            fail(jq , textStatus , errorThrown);
        //return jq.status;
        }
    })
}

function dumpProps(obj, parent) {
    // Go through all the properties of the passed-in object
    for (var i in obj) {
        // if a parent (2nd parameter) was passed in, then use that to
        // build the message. Message includes i (the object's property name)
        // then the object's property value on a new line
        if (parent) {
            var msg = parent + "." + i + "\n" + obj[i];
        } else {
            var msg = i + "\n" + obj[i];
        }
        // Display the message. If the user clicks "OK", then continue. If they
        // click "CANCEL" then quit this level of recursion
        if (!confirm(msg)) {
            return;
        }
        // If this property (i) is an object, then recursively process the object
        if (typeof obj[i] == "object") {
            if (parent) {
                dumpProps(obj[i], parent + "." + i);
            } else {
                dumpProps(obj[i], i);
            }
        }
    }
}
