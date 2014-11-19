<%-- 
    Document   : statistics
    Created on : Nov 1, 2013, 12:06:36 PM
    Author     : maxam
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%--!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd"--%>
<jsp:include page="/WEB-INF/jspf/welcome_header.jsp"></jsp:include>

<%--h1 style="text-align: right; margin: 15px 10px;"><img src="/OpenRideServer-RS/img/logo.png" alt="OpenRide" /></h1--%>

<body onload="stats()">
       <h1 style="text-align: right; margin: 15px 10px;"><img src="/OpenRideServer-RS/img/logo.png" alt="OpenRide" /></h1>
        <h3>Server Statistics:</h3>

        <table id="results" border="0" align="center">
        <tr>
        <td><b>Query</b></td>
        <td><b>Result</b></td>
        </tr>

        </table>

        <script type="text/javascript"
        src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js'>
        </script>
        <script type="application/javascript"
        src='http://localhost:3000/serverStatus2?jsonp=parseResponse'>
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
        var ans;
        var   queries = [
                        "totalConnections","agentsOnline","agentsKnown","numRequestsOpen","numRequestsOpen",
                        "numRequestsAwaiting","numRequestsOngoing","numRequestsCompleted","numRequestsHistorical"
                        ];
   $.getJSON( "http://localhost:3000/serverStatus2", function(data)
   {
       var obj = JSON.parse(JSON.stringify(data));
     
             
               ans = [
                     obj.data["totalConnections"],obj.data["agentsOnline"],obj.data["agentsKnown"],
                     obj.data["numRequestsOpen"],obj.data["numRequestsOpen"],obj.data["numRequestsAwaiting"],
                     obj.data["numRequestsOngoing"],obj.data["numRequestsCompleted"],obj.data["numRequestsHistorical"]
                     ];

     var table = document.getElementById("results");
     for (var i = 0; i < 8; i++)
         {
             var row = table.insertRow(i+1);
             var cell1 = row.insertCell(0);
             var cell2 = row.insertCell(1);
             cell1.innerHTML = queries[i+1];
             cell2.innerHTML = ans[i+1];
         }
       return ans;
   })
            .done(function(data){ alert(JSON.stringify(data)); })
            .fail(function(jqXHR, textStatus, errorThrown)
     {
     alert('status ' + textStatus + ' errorThrown ' + errorThrown)
     })
     //loop through results returned and dynamically create the table
   
     };
        </script>
</body>
<jsp:include page="/WEB-INF/jspf/welcome_footer.jsp"></jsp:include>


