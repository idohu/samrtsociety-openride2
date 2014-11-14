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

<%@taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@taglib prefix="h" uri="http://java.sun.com/jsf/html"%>
<%@taglib prefix="t" uri="http://myfaces.apache.org/tomahawk" %>
<f:view>

    <jsp:include page="/WEB-INF/jspf/header.jsp"><jsp:param name="section" value="home" /></jsp:include>

    <h1>Sign up</h1>

    <!--p>Sie wollen an der OpenRide-Pilotierung für die Studenten und Mitarbeiter der Zeppelin Universität teilnehmen? Das freut uns! Nehmen Sie sich bitte kurz Zeit und registrieren Sie sich. </p>
    <p>Bitte tragen Sie Ihre tatsächlichen und keine fiktiven Daten ein. Fahrer und Mitfahrer wissen so, mit wem sie es zu tun haben und können sich bei Problemen (z.B. Verspätung) schneller verständigen. Sie können jederzeit die Löschung/Änderung Ihrer Nutzerdaten veranlassen. Ach übrigens: Die Nutzung von OpenRide ist natürlich kostenlos.</p-->

<!--    <p><strong>In the context of software testing, no real communication of trips take place. All data are fictitious. Authentic personal data for registration is not required for software testing.</strong></p>

    <p>The password for your first login will be displayed immediately after the registration.</p>-->

<p><strong>Notice that all fields are required!</strong></p>

    <fieldset>
        <legend>Create your account with OpenRide:</legend>

        <div style="width: 80%;">

            <h:form id="registrationForm">

                <h:messages globalOnly="true" styleClass="error" />

                <h:panelGrid id="panel" width="100%" columns="2" columnClasses="column33,column66" border="0">

                    <h:panelGroup>
                        <h:outputLabel for="username" value="Username:" styleClass="requiredField" />
                        <span class="requiredField">(*)</span>
                    </h:panelGroup>
                    <h:panelGroup>
                        <t:inputText id="username" binding="#{Register_Backing.username}" validator="#{Register_Backing.validateUsername}" required="true" styleClass="wide">
                            <t:validateRegExpr pattern="\w{3,18}" message="Usernames can only consist of letters A-Z, numbers, and underscores (Lengthe: 3-18 letters)." />
                        </t:inputText>
                        <h:message for="username" styleClass="error"/>
                    </h:panelGroup>

                    <h:panelGroup>
                        <h:outputLabel for="password" value="Password:" styleClass="requiredField" />
                        <span class="requiredField">(*)</span>
                    </h:panelGroup>
                    <h:panelGroup>
                        <h:inputSecret id="password" binding="#{Register_Backing.password}" required="true" styleClass="wide" />
                        <h:message for="password" styleClass="error"/>
                    </h:panelGroup>

                    <h:panelGroup>
                        <h:outputLabel for="passwordCheck" value="Password (validate):" styleClass="requiredField" />
                        <span class="requiredField">(*)</span>
                    </h:panelGroup>
                    <h:panelGroup>
                        <h:inputSecret id="passwordCheck" binding="#{Register_Backing.passwordCheck}" required="true" validator="#{Register_Backing.validatePassword}" styleClass="wide" />
                        <h:message for="passwordCheck" styleClass="error"/>
                    </h:panelGroup>

                    <h:panelGroup>
                        <h:outputLabel for="firstName" value="First name:" styleClass="requiredField" />
<!--                        <span class="requiredField">(*)</span>-->
                    </h:panelGroup>
                    <h:panelGroup>
                        <h:inputText id="firstName" binding="#{Register_Backing.firstName}" required="false" styleClass="wide" />
                        <h:message for="firstName" styleClass="error"/>
                    </h:panelGroup>

                    <h:panelGroup>
                        <h:outputLabel for="lastName" value="Last name:" styleClass="requiredField" />
<!--                        <span class="requiredField">(*)</span>-->
                    </h:panelGroup>
                    <h:panelGroup>
                        <h:inputText id="lastName" binding="#{Register_Backing.lastName}" required="false" styleClass="wide" />
                        <h:message for="lastName" styleClass="error"/>
                    </h:panelGroup>

                    <h:panelGroup>
                        <h:outputLabel for="gender" value="Gender:" styleClass="requiredField" />
                        <span class="requiredField">(*)</span>
                    </h:panelGroup>
                    <h:panelGroup>
                        <h:selectOneRadio id="gender" binding="#{Register_Backing.gender}" required="true">
                            <f:selectItem itemLabel="Male" itemValue="m" />
                            <f:selectItem itemLabel="Female" itemValue="f" />
                        </h:selectOneRadio>
                        <h:message for="gender" styleClass="error"/>
                    </h:panelGroup>

                    <h:panelGroup>
                        <h:outputLabel for="email" value="E-Mail Address:" styleClass="requiredField" />
                        <span class="requiredField">(*)</span>
                    </h:panelGroup>
                    <h:panelGroup>
                        <h:inputText id="email" binding="#{Register_Backing.email}" required="true" validator="#{Register_Backing.validateEmail}" styleClass="wide">
                            <t:validateEmail summaryMessage="Invalid E-Mail Address."/>                            
                        </h:inputText>
                        <h:message for="email" styleClass="error" />
                    </h:panelGroup>

                    <h:panelGroup>
                        <h:outputLabel for="mobilePhoneNumber" value="Mobile phone number:" styleClass="requiredField" />
                        <span class="requiredField">(*)</span>
                    </h:panelGroup>
                    <h:panelGroup>
                        <h:inputText id="mobilePhoneNumber" binding="#{Register_Backing.mobilePhoneNumber}" required="true" styleClass="wide">
                        </h:inputText>
                        <h:message for="mobilePhoneNumber" styleClass="error"/>
                    </h:panelGroup>

                    <f:verbatim>&nbsp;</f:verbatim>
                    <h:panelGroup>
                        <h:selectBooleanCheckbox id="acceptedTerms" binding="#{Register_Backing.acceptedTerms}" required="true" validator="#{Register_Backing.validateAcceptedTerms}" style="float: left;" />
                        <div style="padding-top: 1px;">I have read and accepted the<a href="policy.html" target="_blank"> Disclaimer and privacy policy</a> <span class="requiredField">(*)</span></div>
                        <h:message for="acceptedTerms" styleClass="error" />
                    </h:panelGroup>

                    <f:verbatim>&nbsp;</f:verbatim>
                    <h:panelGroup>
                        <div style="float: right; margin-top: 2px; color: #999;"><span class="requiredField">(*)</span> = Specification required</div>
                        <h:commandButton id="hidden" type="submit" value="Register" action="#{Register_Backing.register}" style="display:none" />
<!--                        <input id="hidden" type="submit" value="Register" onclick="" style="display:none" />-->
                        <h:commandButton id="shown" type="button" value="Register" onclick="register(); " />
                    </h:panelGroup>
                </h:panelGrid>
            </h:form>
        </div>

    </fieldset>

    <jsp:include page="/WEB-INF/jspf/footer.jsp"></jsp:include>
</f:view>
<script type="text/javascript"
        src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js'>
</script>
<script type="text/javascript">
    function openPage(pageURL)
    {
        window.location.href = pageURL;
    }
</script>
<script>
    function endAjax(){
        if($.active==0){
        openPage('/OpenRideServer-RS/view');//move to mobile app login screen.
        };
        }
    function register()
    {
        var DimitrisLocal = "localhost:3000";
        var DimitrisRemote = "168.144.202.152:3002";
        var user = 
            document.forms[0].elements[1].value;
        var pass = 
            document.forms[0].elements[2].value;
        if ( ($("#registrationForm\\:firstName").val() != ""))
            $("#registrationForm\\:firstName").val = " ";
        if ($("#registrationForm\\:lastName").val() != "")
            $("#registrationForm\\:lastName").val = " ";
        if (document.getElementById('registrationForm:gender:0').checked == true ||
            document.getElementById('registrationForm:gender:1').checked == true)
            if (($("#registrationForm\\:username").val() != "") &&
            ($("#registrationForm\\:password").val() != "") &&
            ($("#registrationForm\\:passwordCheck").val() != "") &&
           // ($("#registrationForm\\:firstName").val() != "") &&
           // ($("#registrationForm\\:lastName").val() != "") &&
            ($("#registrationForm\\:email").val() != "") &&
            ($("#registrationForm\\:mobilePhoneNumber").val() != "") &&
            ($("#registrationForm\\:acceptedTerms:checked").val() == "on"))
        {
            $(document).ready(function() {
                var mem = {};
                mem.register                   = {};
                mem.register.username          = user;
                mem.register.password          = pass;
                mem.register.email             = $("#registrationForm\\:email").val();
                mem.register.emailConfirmation = false;

                //alert(JSON.stringify(mem.register));
                $.ajax
                ({
                    type: "POST",
                    url: 'https://' + DimitrisRemote + '/users',//'/api/register/' + user,
                    data: JSON.stringify(mem.register),//"{username="+user+"&password="+pass+"}",
                    crossDomain: true,
                    contentType:  "application/json; charset=UTF-8",
                    username: mem.register.username,
                    password: mem.register.password,
                    beforeSend: function (xhr)
                    {
                        xhr.withCredentials = true,
                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                        xhr.setRequestHeader("UHOPPER_PASSWORD", pass);
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    async: false,
                    //accepts: "application/json",
                    success: function(data, textStatus, jqXHR){
                        //alert(data);
                        var parsed = data;//JSON.parse(data);
                        if (parsed.status == 'NOK') alert(parsed.message);
                        else
                            $.ajax({
                                type: "GET",
                                url: 'https://' + DimitrisRemote + '/users/'+mem.register.username+'/profile',//'/api/register/' + user,
                                data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                                crossDomain: true,
                                contentType:  "application/json; charset=UTF-8",
                                accepts: "application/json",
                                dataType: "json",
                                username: mem.register.username,
                                password: mem.register.password,
                                beforeSend: function (xhr)
                                {
                                    xhr.withCredentials = true,
                                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                },
                            async: false,
                            accepts: "application/json",
                            success: function(data, textStatus, jqXHR){
                                // alert(data);
                                var parsed = data;//JSON.parse(data);

                                parsed["firstName"] = $("#registrationForm\\:firstName").val();
                                parsed["lastName"] = $("#registrationForm\\:lastName").val();
                                parsed["mobilePhoneNumber"] = $("#registrationForm\\:mobilePhoneNumber").val();
                                if (document.getElementById('registrationForm:gender:0').checked == true)
                                    parsed["gender"] = "m";
                                else
                                    parsed["gender"] = "f";
                                parsed["_revision"]=parsed["_revision"]+1;
                                $.ajax({
                                    type: "PUT",
                                    url: 'https://' + DimitrisRemote + '/users/'+mem.register.username+'/profile',//'/api/register/' + user,
                                    data: JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                                    crossDomain: true,
                                    contentType:  "application/json; charset=UTF-8",
                                    accepts: "application/json",
                                    dataType: "json",
                                    username: mem.register.username,
                                    password: mem.register.password,
                                    beforeSend: function (xhr)
                                    {
                                        xhr.withCredentials = true,
                                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                    },
                                    async: false,
                                    //accepts: "application/json",
                                    success: function(data, textStatus, jqXHR){
                                        
                                        $("#registrationForm\\:hidden").click();
                                        setTimeout(function () {
                                            openPage('/OpenRideServer-RS/view');//move to mobile app login screen.
                                        }, 3000);
                                    },
                                    error: function(jq , textStatus , errorThrown){
                                        alert('state: ' + jq.readyState);
                                        alert('status: ' + jq.status);
                                        alert('response ' + jq.responseText)
                                        alert('this error is: ' + errorThrown);
                                    }
                                });
                            },
                            error: function(jq , textStatus , errorThrown){
                                alert('state: ' + jq.readyState);
                                alert('status: ' + jq.status);
                                alert('response ' + jq.responseText)
                                alert('this error is: ' + errorThrown);
                            }
                        });
                    document.cookie = "username=" + user +";path=/";
                    document.cookie = "password=" + pass +";path=/";
                        
                    },
                    error: function(jq , textStatus , errorThrown){
                        if (jq.status == 403)
                            alert(JSON.parse(jq.responseText).message);
                        else{
                            alert('state: ' + jq.readyState);
                            alert('status: ' + jq.status);
                            alert('response ' + jq.responseText)
                            alert('this error is: ' + errorThrown);
                        }
                    }
                });
            });
        setInterval(endAjax, 500);
        }
        else alert('Not all field are filled!');
        else alert('Not all field are filled!');       
    }

</script>