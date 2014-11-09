<%--
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
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<img src="/OpenRideServer-RS/img/logo.png" alt="OpenRide" style="float: right; margin: 13px 10px 14px 0;" />
<h1>Welcome!</h1>
<h2>Ridesharing Application</h2>
<p class="hint" style="color: #999; font-size: 12px;">Powered by OpenRide </p>
<%--form action="JavaScript:window.location = '/OpenRideServer-RS/statistics.jsp' ">
    <input align="center" type="button" style="width:100%;height:50%;background-color:rgb(152,190,23);color:rgb(255,255,255)" name="button" id="statsbutton" value="Statistics" onclick="JavaScript:window.location = '/OpenRideServer-RS/statistics.jsp' " />
</form--%>

<form id="loginForm" action="/OpenRideServer-RS/j_security_check" method="post" class="login">
    <h3>Login now and start:</h3>
    
    <c:if test="${param.login_error=='true'}"><p><span class="error">Invalid credentials.</span></p></c:if>

    <div>
        <label for="j_username" class="requiredField">Username:</label>
        <input id="j_username" type="text" name="j_username" /><br />
    </div>
    <div>
        <label for="j_password" class="requiredField">Password:</label>
        <input id="j_password" type="password" name="j_password" value="" /><br />
    </div>

    <div id="usermodelink">
        <img id="ridermodeimg" src="/OpenRideServer-RS/img/ridermodebtn_inactive.png" alt="" />
        <div id="usermodeslider_bg">
            <img src="/OpenRideServer-RS/img/switch_btn.png" alt="" id="usermodeslider" />
        </div><img id="drivermodeimg" src="/OpenRideServer-RS/img/drivermodebtn_active.png" alt="" />
        <div id="ridermodelabel" style="position: absolute; text-align: center; font-weight: normal; font-size: 12px; width: 67px; left: 0; top: 5px;">Start<br />as<br />Rider</div>
        <div id="drivermodelabel" style="position: absolute; text-align: center; font-weight: normal; font-size: 12px; width: 57px; right: 0; top: 5px;">Start<br />as<br />Driver</div>
    </div>
    <input type="button" name="submit" id="shown" align="center" value="Login" onclick="login()" />
    <input type="submit" name="submit" id="loginbutton" align="center" value="Login" onclick="createCookie('usermode', usermode, 365); createCookie('username',j_username.value,365); createCookie('password',j_password.value,365);" style="display:none"/>
</form>
   
     
<script type="text/javascript">
    document.getElementById('loginForm').style.display = 'block';
</script>

<script type="text/javascript">
    function openPage(pageURL)
    {
        window.location.href = pageURL;
    }
</script>

<script type="text/javascript"
        src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js'>
</script>

    <script>
    function login()
    {
        console.log('login function started');
        var DimitrisLocal = "localhost:3000";
        var DimitrisRemote = "168.144.202.152:3002";
        var user =
            document.forms[0].elements[0].value;
        var pass =
            document.forms[0].elements[1].value;
        //alert('creds ' + user + ' ' + pass);
        $(document).ready(function() {
        //alert(agent);
        $.ajax
                                        ({
                                        type: "GET",
                                        url: 'https://'+ DimitrisRemote +'/authentications',//'/api/authenticate/' + user ,
                                       // data: "{username="+user+"&password="+pass+"}",
                                        crossDomain: true,
                                        contentType: "application/json; charset=UTF-8",// "application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                                        beforeSend: function (xhr)
                                        {
                                        xhr.withCredentials = true,
                                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                                        xhr.setRequestHeader("UHOPPER_PASSWORD", pass);
                                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                        },
                                        //dataType : "jsonp" ,
                                        async: false,
                                        success: function(data, textStatus, jqXHR){
                                        alert(data);
                                        var parsed = data;//JSON.parse(data);
                                        //alert('data-' + data);
                                        if (parsed.status == 'NOK') alert('NOK ' + parsed.message);
                                        else
                                            {
                                                //alert(document.cookie);
                                                 var cookies = document.cookie.split(";");
                                                for (var i = 0; i < cookies.length; i++){
                                                    var spcook =  cookies[i].split("=");
                                                    document.cookie = spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC; path=/";
                                                }
                                  //          document.cookie = "username=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
                                  //          document.cookie = "password=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
                                            document.cookie = "username=" + user+";path=/";
                                            document.cookie = "password=" + pass+";path=/";
                                            document.getElementById("loginbutton").click();
                                            }
                                        },
                                        error: function(jq , textStatus , errorThrown){
                                        alert('state: ' + jq.readyState);
                                        alert('status: ' + jq.status);
                                        alert('response ' + jq.responseText)
                                        alert('this error is: ' +errorThrown);
                                        }
                                        });
    });

    }
    </script>

<script>
    function stats()
    {
        <%--new Ajax.Request( 'http://localhost:3000/serverStatus', {
        method:  'GET',
        onSuccess:  function(response){
        alert('what is it?');
    },
        onFailure:  function(){
        alert('ERROR');
    }

    });--%>

          <%--jQuery.getJSON(
    "http://localhost:3000/serverStatus/",
    function(data,response) {
       alert('page content: ');
    }
)
    .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });--%>

        alert('hey there!');
   $.getJSON( "http://localhost:3000/serverStatus2", function(data)
   {    var obj = JSON.parse(JSON.stringify(data));
       alert('total connections: ' + obj.data["totalConnections"] + '\n' +
             'agents online: ' + obj.data["agentsOnline"] + '\n' +
             'agents known: ' + obj.data["agentsKnown"] + '\n' +
             'open requests: ' + obj.data["numRequestsOpen"] + '\n' +
             'awaiting requests: ' + obj.data["numRequestsAwaiting"] + '\n' +
             'ongoing requests: ' + obj.data["numRequestsOngoing"] + '\n' +
             'completed requests: ' + obj.data["numRequestsCompleted"] + '\n' +
             'historical requests: ' + obj.data["numRequestsHistorical"] + '\n'
             );
   })
.done(function(data){ alert(JSON.stringify(data)); })
.fail(function(jqXHR, textStatus, errorThrown)
     {
     alert('status ' + textStatus + ' errorThrown ' + errorThrown)
     })

     };

    </script>


<noscript>
    <h3>Please activate Javascript in your Browser, before you can login to OpenRide.</h3>
    <meta http-equiv="refresh" content="3" />
   
</noscript>
