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

<f:view>

    <jsp:include page="/WEB-INF/jspf/header.jsp"><jsp:param name="section" value="faq" /></jsp:include>

    <h1>FAQ - Frequently asked questions</h1>

    <!--    <p>
        At this point, we provide answers to frequently asked questions about Open ride piloting at Zeppelin University.
        </p>-->
    <!--    <p>
        <a href="#1">How does OpenRide work?</a><br /><br />
        <a href="#5">On which mobile phones can Openride work? </a><br /><br />
        <a href="#7">Where can I find a detailed guide?</a><br /><br />
        <a href="#10">What is the relationship between public transportation and OpenRide?</a><br /><br />
        <a href="#11">Who is liable in case of an accident?</a><br /><br />
        </p>-->
    <p>
        <a href="#1">מדוע מופיעה לי אותה הצעת נסיעה מספר פעמים (כאשר אני מחובר כנוסע)?</a><br /><br />
        <a href="#5">מדוע מופיע לי אותה בקשה להצטרפות לנסיעה מספר פעמים (כאשר אני מחובר כנהג)? </a><br /><br />
        <a href="#7">איך עוברים ממצב נהג למבצ נוסע ולהפך?</a><br /><br />
        <a href="#10">אילו פרטים אני אמור להכניס כדי שאוכל להתחבר כנהג?</a><br /><br />
        <a href="#11">מתי נקבעת ההתאמה בין הצעה של נהג להצעה של נוסע?</a><br /><br />
    </p>

    <h2><a name="1">מדוע מופיעה לי אותה הצעת נסיעה מספר פעמים (כאשר אני מחובר כנוסע)?</a></h2>
    <p>
        כאשר ישנן מספר נוסעים אופציונליים, מוצעות לנוסע אפשרויות שונות של נסיעה עם מספר שונה של נוסעים.

        לדוגמא: אם הנסיעה מתאימה לשלושה נוסעים (כולל אתה), אז תוצע לך אפשרות לנסיעה יחד עם הנהג בלבד (נהג + 1), נסיעה שלך , של הנהג ועד נוסע אחד (נהג + 2) ונסיעה של הנהג ושל כל שלושת הנוסעים (נהג + 3).

        הנהג יבחר את הנסיעה שמתאימה לך, ואז הנסיעה תסומן במגרת מקווקות והנסיעות האחרות יעלמו מהרשימה. לאחר מכן הנוסעים בנסיעה המתאימה יצטרכו לאשר אותה גם-כן. לאחר שכולם יאשר את הנסיעה, הנסיעה תהיה 'סגורה' ותמוסגר בירוק.
    </p>

    <h2><a name="5">מדוע מופיע לי אותה בקשה להצטרפות לנסיעה מספר פעמים (כאשר אני מחובר כנהג)?</a></h2>
    <p>
        לנהג מופיעות כל אפשרויות הנסיעה עם הנוסעים השונים אשר ביקשו את הנסיעה.

        לדוגמא: אם הנסיעה מתאימה לשני נוסעים, אז יופיעו האפשרויות הבאות: נסיעה עם נוסע1 בלבד, נסיעה עם נוסע2 בלבד, נסיעה עם נוסע1 + נוסע2.

        עליך לבחור את הנסיעה שמתאימה לך, ואז הנסיעה תסומן במגרת מקווקות והנסיעות האחרות יעלמו מהרשימה. לאחר מכן הנוסעים בנסיעה המתאימה יצטרכו לאשר אותה גם-כן. לאחר שכולם יאשר את הנסיעה, הנסיעה תהיה 'סגורה' ותמוסגר בירוק.
    </p>

    <h2><a name="7">איך עוברים ממצב נהג למבצ נוסע ולהפך?</a></h2>
    <p>
        בכפתור הבא:
        <img alt="img1" src=""/>
    </p>

    <h2><a name="10">אילו פרטים אני אמור להכניס כדי שאוכל להתחבר כנהג?</a></h2>
    <p>
        סוג רכב, צבע אוטו.
    </p>

    <h2><a name="11">מתי נקבעת ההתאמה בין הצעה של נהג להצעה של נוסע?</a></h2>
    <p>
        כאשר ישנה חפיפה בין טווח שעות ההצעה לטווח שעות הבקשה וגם ישנה התאמה בין המחיר המבוקש על-ידי הנהג והמחיר המקסימלי שהנוסע מוכן לשלם עבור הנסיעה.
    </p>
    <!--    <h2><a name="1">How does OpenRide work?</a></h2>

        <p>
      In contrast to established solutions for carpool rides ride open instantly tells of traveling and even for short distances, such as for the morning ride to the university or between university buildings.

    Car drivers and passengers submit their offer or ride their Mitfahrwunsch directly via the mobile phone. In a split second the open ride engine finds matching drivers and passengers. This compares Open Ride distances, times, and personal preferences. This also works spontaneously and on the go for rides already begun.

    Drivers and passengers will immediately receive information about their opponent. If both of the driver to the route according to the location of the rider. You decide who your mitnehmt or with whom will you ride: Carpooling has never been faster, easier and more dynamic!
        </p>

        <h2><a name="5">On which mobile phones can Openride work? </a></h2>

        <p>
      On the mobile phone application on the mobile web browser directly www.open-ride.mobi is achievable.

    For the full functional use of open ride we recommend mobile phones with a newer browser. These include the IPhone 3G, Android phones with Android 2.1. and Windows Mobile Version 6.5. On Nokia smartphones, you can use open ride, if you installed the Opera Mobile browser.
    Who has no modern smartphone, Open Ride can use a normal computer in the open ride Smartphone Simulator. You go to the Firefox web browser www.open-ride.mobi/OpenRideWeb, you log in and use the Link smartphone simulator.
        </p>

        <h2><a name="7">Where can I find a detailed guide?</a></h2>

        <p>
       For detailed instructions, you will find after login in your personal area.
        </p>

        <h2><a name="10">What is the relationship between public transportation and OpenRide??</a></h2>
        <p>
        We see the public transport (PT) and Open Ride as complementary. Journeys in urban transport are more of a supplement to the mobility options that will arise especially where the gaps in the public transport supply has. Especially in rural areas where it is difficult to get a comprehensive supply upright, open ride can help to alleviate mobility problems. A common example would be driving by commuters to the Park & ​​Ride stations, so in combination with the train.
        </p>

        <h2><a name="11">Who is liable in case of an accident?</a></h2>

        <p>
       The concerns of many motorists when driving stranger in his own vehicle with respect to the legal liability in case of accident consequences are largely unfounded. Through no fault accidents grab the motor vehicle liability insurance as well as the statutory accident insurance. Property damage and pain and suffering are handled by the automotive liability insurance, for personal injury, particularly if they are made on a direct route to or from work, reaches the statutory accident insurance.

    If the fault in the accident opponents, its automobile liability insurance should pay compensation for damage to the passenger. This applies even if the driver has caused an accident through no fault (eg after a puncture or heart attack). Against claims for damages of riders who do not or only covers the driver's own liability insurance part, the driver can secure a declaration of limitation. Such limitation of liability as to offer the automobile clubs such as ADAC for download.
        </p>-->

    <jsp:include page="/WEB-INF/jspf/footer.jsp"></jsp:include>
</f:view>