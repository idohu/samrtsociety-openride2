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
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>

    <fieldset style="min-height: 150px;">
        <legend>Do you know your way around?</legend>

        <p>Login to access your personal profile.</p>

        <form id="loginForm" action="j_security_check" method="post">
            <table border="0" width="100%">
                <tbody>
                    <tr>
                        <td class="column33"><label for="j_username" class="requiredField">username:</label> <span class="requiredField">(*)</span></td>
                        <td class="column66"><input id="j_username" type="text" name="j_username" class="wide" value="<h:outputText value="#{Welcome_Backing.registeredUsername}" />" /></td>
                    </tr>
                    <tr>
                        <td class="column33"><label for="j_password" class="requiredField">Password:</label> <span class="requiredField">(*)</span></td>
                        <td class="column66"><input id="j_password" type="password" name="j_password" value="" class="wide" />
                        <c:if test="${param.login_error=='true'}"><span class="error">Incorrect Credentials.</span></c:if></td>
                    </tr>
                    <tr>
                        <td class="column33">&nbsp;</td>
                        <td class="column66"><input id="shown" type="button" name="submit" value="Login" onclick="login()" />
                                             <input id="hidden" type="submit" name="submit" value="Login" style="display:none" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

        <%--h:form id="loginForm">
            <h:panelGrid width="100%" columns="2" columnClasses="column33,column66" border="0">

                <h:panelGroup>
                    <h:outputLabel value="Benutzername:" for="username" styleClass="requiredField" />
                    <span class="requiredField">(*)</span>
                </h:panelGroup>
                <h:panelGroup>
                    <h:inputText required="true" id="username" binding="#{Welcome_Backing.username}" styleClass="wide" />
                    <h:message for="username" styleClass="error" />
                </h:panelGroup>

                <h:panelGroup>
                    <h:outputLabel value="Passwort:" for="password" styleClass="requiredField" />
                    <span class="requiredField">(*)</span>
                </h:panelGroup>
                <h:panelGroup>
                    <h:inputSecret required="true" id="password" binding="#{Welcome_Backing.password}" styleClass="wide" />
                    <h:message for="password" styleClass="error" />
                    <h:messages globalOnly="true" infoClass="error" />
                </h:panelGroup>

                <f:verbatim>&nbsp;</f:verbatim>
                <h:commandButton value="Einloggen" action="#{Welcome_Backing.login}" />

            </h:panelGrid>
        </h:form--%>

    </fieldset>

        <script type="text/javascript"
        src='https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js'>
</script>

<script>

    function login()
    {
        var DimitrisLocal = "localhost:3000";
        var DimitrisRemote = "168.144.202.152:3000";
        var user =
            document.forms[1].elements[0].value;
        var pass =
            document.forms[1].elements[1].value;
        $(document).ready(function() {
        //alert(agent);
        $.ajax
                                        ({
                                        type: "POST",
                                        url: 'http://' + DimitrisRemote + '/api/authenticate/' + user ,
                                        data: "{username="+user+"&password="+pass+"}",
                                        crossDomain: true,
                                        contentType:  "application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                                            //"application/json; charset=utf-8",
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
                                        async: "false",
                                        success: function(data, textStatus, jqXHR){
                                        var parsed = JSON.parse(data);
                                        if (parsed.status == 'NOK') alert(parsed.message);
                                        else
                                            {
                                                  var cookies = document.cookie.split(";");
                                                for (var i = 0; i < cookies.length; i++){
                                                    var spcook =  cookies[i].split("=");
                                                    document.cookie = spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC; path=/";
                                                }
                                  //          document.cookie = "username=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
                                  //          document.cookie = "password=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
                                            document.cookie = "username=" + user +";path=/";
                                            document.cookie = "password=" + pass +";path=/";
                                            document.getElementById("hidden").click();
                                            }
                                        },
                                        error: function(jq , textStatus , errorThrown){
                                        alert('error from server: ' +errorThrown);
                                        }
                                        });
    });
    }
    </script>