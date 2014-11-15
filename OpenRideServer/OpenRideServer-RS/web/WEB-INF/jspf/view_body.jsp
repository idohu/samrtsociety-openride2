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

<div id="tabmenu">
    <div id="tablevel0">
        <a id="tab01link" href="#"><img id="tabimg01" name="tab01" src="../img/tab0home_inact_wide.png" alt="neu" /></a><a id="tab02link" href="#"><img id="tabimg02" name="tab02" src="../img/tab0driver_inact_wide.png" alt="fahrten" /></a><a id="tab03link" href="#"><img id="tabimg03" name="tab03" src="../img/tab0thumb_inact_wide.png" alt="favs" /></a><a id="tab04link" href="#"><img id="tabimg04" name="tab04" src="../img/tab0star_inact_wide.png" alt="profile" /></a>
    </div>
    <div id="tablevel1">
        <a id="tab11link" href="#"><img id="tabimg11" name="tab11" src="../img/home1green_wide.png" alt="neue fahrt" /></a><a id="tab12link" href="#"><img id="tabimg12" name="tab12" src="../img/tab1profilegreen_wide.png" alt="aktive fahrten" /></a><a id="tab13link" href="#"><img id="tabimg13" name="tab13" src="../img/tab1greentempl.png" alt="abc" /></a><a id="tab14link" href="#"><img id="tabimg14" name="tab14" src="../img/tab1greentempl.png" alt="xyz" /></a>
    </div>

    <div id="riderupdatecount2" style="display: none; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; position: absolute; top: 2px; right: 164px;"></div>
    <div id="driverupdatecount2" style="display: none; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; position: absolute; top: 2px; right: 164px;"></div>

    <div id="riderupdatecount3" style="display: none; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; position: absolute; top: 43px; right: 159px;"></div>
    <div id="driverupdatecount3" style="display: none; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; position: absolute; top: 43px; right: 159px;"></div>

</div>
<div id="content">
    <div id="offerstartpickerUI">
        <div class="mapTestDiv">
            <div id="offerstartmap">
            </div>
        </div>
        <div id="offerstartAddrInputUI">
            <input id="offerstartaddrinput" name="offerstartAdrr" type="text" size="9" maxlength="30" /><a id="offerstartconfirm" class="offerlocationconfirm" href="#"><img id="offerstartconfirmimg" src="../img/confirmAddr.png" width="131" height="30" alt="address_search" /></a>
        </div>
    </div>
    <div id="offerdestpickerUI">
        <div class="mapTestDiv">
            <div id="offerdestmap">
            </div>
        </div>
        <div id="offerdestAddrInputUI">
            <a id="offerdestconfirm" class="offerlocationconfirm" href="#"><img id="offerdestconfirmimg" src="../img/confirmAddr.png" width="131" height="30" alt="addresse_suchen" /></a><input id="offerdestaddrinput" name="offerdestAdrr" type="text" size="9" maxlength="30" />
        </div>
    </div>
    <div id="searchstartpickerUI">
        <div class="mapTestDiv">
            <div id="searchstartmap">
            </div>
        </div>
        <div id="searchstartAddrInputUI">
            <input id="searchstartaddrinput" name="searchstartAdrr" type="text" size="9" maxlength="30" /><a id="searchstartconfirm" class="searchlocationconfirm" href="#"><img id="searchstartconfirmimg" src="../img/confirmAddr.png" width="131" height="30" alt="addresse_suchen" /></a>
        </div>
    </div>
    <div id="searchdestpickerUI">
        <div class="mapTestDiv">
            <div id="searchdestmap">
            </div>
        </div>
        <div id="searchdestAddrInputUI">
            <input id="searchdestaddrinput" name="searchdestAdrr" type="text" size="9" maxlength="30" /><a id="searchdestconfirm" class="searchlocationconfirm" href="#"><img id="searchdestconfirmimg" src="../img/confirmAddr.png" width="131" height="30" alt="addresse_suchen" /></a>
        </div>
    </div>
    <div id="newfavoritepickerUI">
        <div class="mapTestDiv" style ="display:none">
            <div id="newfavoritepickermap" style="display:none;">
            </div>
        </div>
        <div id="newfavoriteAddrInputUI" style="display:none;">
            <a id="newfavoriteconfirm" class="favoriteconfirm" href="#"><img id="newfavoriteconfirmimg" src="../img/confirmAddr.png" width="131" height="30" alt="addresse_suchen" /></a><input id="newfavoriteaddrinput" name="newfavoriteAdrr" type="text" size="9" maxlength="30" />
        </div>
        Add FAQ Page Here!!
    </div>
    <div id="showofferrouteUI">
        <div class="mapRouteDiv">
            <div id="offersimpleroutemap">
            </div>
        </div>
        <a id="offerroutebackbtnlink"><img id="offerroutebackbtnimg" src="../img/backtoofferbtn.png" alt="Cancel the offer" /></a>
    </div>
    <div id="showsearchrouteUI">
        <div class="mapRouteDiv">
            <div id="searchsimpleroutemap">
            </div>
        </div>
        <a id="searchroutebackbtnlink"><img id="searchroutebackbtnimg" src="../img/backtosearchbtn.png" alt="Cancel the search" /></a>
    </div>
    <div id="showactiveofferrouteUI">
        <div class="mapRouteDiv">
            <div id="offeractiveroutemap">
            </div>
        </div>
    </div>
    <div id="showactivesearchrouteUI">
        <div class="mapRouteDiv">
            <div id="searchactiveroutemap">
            </div>
        </div>
    </div>
    <div id="newUI">
        <div class="category-txt">
            New
        </div>
    </div>
    <div id="newofferUI">
        <div class="category-txt">
            From:
        </div>
        <form name="offerSelectStartForm" action="#">
            <div class="pickloc" style="display:none">
                <div class="formstyle">
                    <select id="offerstartdropd" name="dropd01" onChange="">
                        <option id="offerstartselectcurrpos">Location: to be determined...</option>
                        <option id="offerstartselectmaplink">Select start point from map</option>
                    </select>
                </div>
                <div style="margin-top:1px;" class="picker">
                    <a id="offerstartpickerlink" href="#"><img src="../img/pickMapIcon.png" alt="xyz" /></a>
                </div>
            </div>
            <div class="pickloc">
                <select id="offerstartcombo" name="dropd03" onChange="">
                    <option>Tel Aviv</option>
                    <option>Beer Sheva</option>
                    <option>Jerusalem</option>
                    <option>Haifa</option>
                    <option>Shoham</option>
                    <option>Rishon Lezion</option>
                </select>
            </div>
            <div class="category-txt">
                To:
            </div>
            <div class="pickloc" style="display:none">
                <div class="formstyle">
                    <select id="offerdestdropd" name="dropd02" onChange="">
                        <option id="offerdestselectcurrpos">Location: to be determined...</option>
                        <option id="offerdestselectmaplink">Select destination on map</option>
                    </select>
                </div>
                <div class="picker">
                    <a id="offerdestpickerlink" href="#"><img src="../img/pickMapIcon.png" alt="xyz" /></a>
                </div>
            </div>
            <div class="pickloc">
                <select id="offerendcombo" name="dropd03" onChange="combocitychange(this)">
                    <option>Tel Aviv</option>
                    <option>Beer Sheva</option>
                    <option>Jerusalem</option>
                    <option>Haifa</option>
                    <option>Shoham</option>
                    <option>Rishon Lezion</option>
                </select>
            </div>
            <div class="detaillinkdiv" style="display:none">
                <a id="newofferdetaillink" href="#"><img id="newofferdetailbtn" src="../img/detailedInfo_new.png" alt="options" /></a>
                <div class="picker" id="showroutediv" style="display:none">
                    <a id="offershowroutepickerlink" href="#"><img id="offershowroutepickerimg" src="../img/showrouteicon.png" alt="xyz" /></a>
                </div>
            </div>
            <div id="seatsnprice" class="pickloc">
                <div id="offernrseatstxt" class="category-txt">Seats:</div>
                <div id="offerpricetxt" class="category-txt">Price:</div><br />
                <div class="formstyle" id="seatsnpriceform">
                    <select id="nrseatsselect" name="dropd03" onChange="">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option selected="true">5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                    <select id="priceselect" name="dropd04" onChange="">
                        <option>0 &#8362;</option>
                        <option>1 &#8362;</option>
                        <option>2 &#8362;</option>
                        <option>3 &#8362;</option>
                        <option>4 &#8362;</option>
                        <option>5 &#8362;</option>
                        <option>6 &#8362;</option>
                        <option>7 &#8362;</option>
                        <option>8 &#8362;</option>
                        <option>9 &#8362;</option>
                        <option>10 &#8362;</option>
                        <option>11 &#8362;</option>
                        <option>12 &#8362;</option>
                        <option>13 &#8362;</option>
                        <option>14 &#8362;</option>
                        <option>15 &#8362;</option>
                        <option>16 &#8362;</option>
                        <option>17 &#8362;</option>
                        <option>18 &#8362;</option>
                        <option>19 &#8362;</option>
                        <option selected="true">20 &#8362;</option>
                        <option>21 &#8362;</option>
                        <option>22 &#8362;</option>
                        <option>23 &#8362;</option>
                        <option>24 &#8362;</option>
                        <option>25 &#8362;</option>
                        <option>26 &#8362;</option>
                        <option>27 &#8362;</option>
                        <option>28 &#8362;</option>
                        <option>29 &#8362;</option>
                        <option>30 &#8362;</option>
                        <option>31 &#8362;</option>
                        <option>32 &#8362;</option>
                        <option>33 &#8362;</option>
                        <option>34 &#8362;</option>
                        <option>35 &#8362;</option>
                        <option>36 &#8362;</option>
                        <option>37 &#8362;</option>
                        <option>38 &#8362;</option>
                        <option>39 &#8362;</option>
                        <option>40 &#8362;</option>
                        <option>41 &#8362;</option>
                        <option>42 &#8362;</option>
                        <option>43 &#8362;</option>
                        <option>44 &#8362;</option>
                        <option>45 &#8362;</option>
                        <option>46 &#8362;</option>
                        <option>47 &#8362;</option>
                        <option>48 &#8362;</option>
                        <option>49 &#8362;</option>
                        <option>50 &#8362;</option>
                        <option>51 &#8362;</option>
                        <option>52 &#8362;</option>
                        <option>53 &#8362;</option>
                        <option>54 &#8362;</option>
                        <option>55 &#8362;</option>
                        <option>56 &#8362;</option>
                        <option>57 &#8362;</option>
                        <option>58 &#8362;</option>
                        <option>59 &#8362;</option>
                        <option>60 &#8362;</option>
                        <option>61 &#8362;</option>
                        <option>62 &#8362;</option>
                        <option>63 &#8362;</option>
                        <option>64 &#8362;</option>
                        <option>65 &#8362;</option>
                        <option>66 &#8362;</option>
                        <option>67 &#8362;</option>
                        <option>68 &#8362;</option>
                        <option>69 &#8362;</option>
                        <option>70 &#8362;</option>
                        <option>71 &#8362;</option>
                        <option>72 &#8362;</option>
                        <option>73 &#8362;</option>
                        <option>74 &#8362;</option>
                        <option>75 &#8362;</option>
                        <option>76 &#8362;</option>
                        <option>77 &#8362;</option>
                        <option>78 &#8362;</option>
                        <option>79 &#8362;</option>
                        <option>80 &#8362;</option>
                        <option>81 &#8362;</option>
                        <option>82 &#8362;</option>
                        <option>83 &#8362;</option>
                        <option>84 &#8362;</option>
                        <option>85 &#8362;</option>
                        <option>86 &#8362;</option>
                        <option>87 &#8362;</option>
                        <option>88 &#8362;</option>
                        <option>89 &#8362;</option>
                        <option>90 &#8362;</option>
                        <option>91 &#8362;</option>
                        <option>92 &#8362;</option>
                        <option>93 &#8362;</option>
                        <option>94 &#8362;</option>
                        <option>95 &#8362;</option>
                        <option>96 &#8362;</option>
                        <option>97 &#8362;</option>
                        <option>98 &#8362;</option>
                        <option>99 &#8362;</option>
                        <option>100 &#8362;</option>
                    </select>
                </div>
            </div>
            <!--            <div class="picker" id="showroutediv"><a id="offershowroutepickerlink" href="#"><img id="offershowroutepickerimg" src="../img/showrouteicon.png" alt="xyz" /></a></div>
                        </div>-->
        </form>

        <div style="margin-top:3px;" class="separator-line">
            <img src="../img/horizline.png" width="306" height="2" alt="xyz" />
        </div>
        <div class="category-txt">
            Departure Time Range:
            <br/>
        </div>
        <div class="date">
            <div class="dateContainer">
                <div id="showdate">
                    <label class="labelStyle" id="dayLabel">
                    </label>.
                    <label class="labelStyle" id="monthLabel">
                    </label>.
                    <label class="labelStyle" id="yearLabel">
                    </label>
                </div>
                <div id="dateUpDownArrows">
                    <a id="dateuparrowlink" class="arrowlinks" href="#"><img id="dateuparrow" class="arrows" src="../img/upArr2.png" height="39" width="39" alt="xyz" /></a><a id="datedownarrowlink" class="arrowlinks" href="#"><img id="datedownarrow" class="arrows" src="../img/downArr2.png" height="39" width="39" alt="xyz" /></a>
                </div><!--<div class="picker"><a href="#"><img src="../img/pickCalIcon.png" alt="xyz" /></a></div>-->
            </div>
            <div class="dateContainer">
                <div id="showtime">
                    <label class="labelStyle" id="hourLabel">
                    </label>:
                    <label class="labelStyle" id="minuteLabel">
                    </label>
                    <div class="datetxt">

                    </div>
                </div>
                <div id="timeUpDownArrows">
                    <a id="timeuparrowlink" class="arrowlinks" href="#"><img id="timeuparrow" class="arrows" src="../img/upArr2.png" height="39" width="39" alt="xyz" /></a><a id="timedownarrowlink" class="arrowlinks" href="#"><img id="timedownarrow" class="arrows" src="../img/downArr2.png" height="39" width="39" alt="xyz" /></a>
                </div>
            </div>
            <div class="dateContainer">

                <div id="showtime">
                    <label class="labelStyle" id="hourLabelEnd">
                    </label>:
                    <label class="labelStyle" id="minuteLabelEnd">
                    </label>
                    <div class="datetxt">

                    </div>
                </div>

                <div id="timeUpDownArrows">
                    <a id="timeuparrowlinkEnd" class="arrowlinks" href="#"><img id="timeuparrowEnd" class="arrows" src="../img/upArr2.png" height="39" width="39" alt="xyz" /></a><a id="timedownarrowlinkEnd" class="arrowlinks" href="#"><img id="timedownarrowEnd" class="arrows" src="../img/downArr2.png" height="39" width="39" alt="xyz" /></a>
                </div>

            </div>
        </div>
        <div style="margin-top:3px; margin-bottom: 3px;" class="separator-line">
            <img src="../img/horizline.png" width="306" height="2" alt="xyz" />
        </div>
        <div id="detOpts">
            <a id="newoffersubmit" href="#"><img class="submitBtn" id="newoffersubmitbtn" src="../img/confirmSend.png" alt="xyz" /></a>
        </div>
    </div>
    <div id="newofferdetailsUI">
        <!--<div class="category-txt">Weitere Angaben zum Fahrtangebot:</div>--><!--<div class="category-txt">Weitere Angaben zum Fahrtangebot:</div>-->
        <form id="offerdetform" action="" class="optionlist">
            <!--<div class="optionlistitems">
            <div class="cboptionitem">
            <div class="optiontxt">checkbox</div>
            <a id="" href=""><img id="" class="" src="" alt="" /></a>
            </div>
            </div>-->
            <!--            <div class="optionlistitems">
                            <div class="ddoptionitem">
                                <div class="optiontxt">
                                    Maximal detour:
                                </div>
                                <select id="offerdetourselect" class="listselect">
                                    <option selected="selected">1 km</option>
                                    <option>2 km</option>
                                    <option>5 km</option>
                                    <option>10 km</option>
                                    <option>20 km</option>
                                    <option>30 km</option>
                                </select>
                            </div>
                        </div>-->
            <div class="optionlistitems">
                <div class="ddoptionitem">
                    <div class="optiontxt">
                        Number of Persons:
                    </div>
                    <select id="offerseatsselect" class="listselect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </div>
            <!--  <div class="optionlistitems">
                  <div class="ddoptionitem">
                      <div class="optiontxt">
                          Currency:
                      </div>
                      <select id="offerCurrency" class="listselect">
                          <option selected="true">Euro</option>
                          <option>Shekel</option>
                          <option>Dollar</option>
                          <option>Pound</option>
                      </select>
                  </div>
              </div> -->
            <div class="optionlistitems">
                <div class="ddoptionitem">
                    <div class="optiontxt">
                        Price:
                    </div>
                    <select id="offerpriceselect" class="listselect">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option selected="true">20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                        <option>35</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                        <option>47</option>
                        <option>48</option>
                        <option>49</option>
                        <option>50</option>
                        <option>51</option>
                        <option>52</option>
                        <option>53</option>
                        <option>54</option>
                        <option>55</option>
                        <option>56</option>
                        <option>57</option>
                        <option>58</option>
                        <option>59</option>
                        <option>60</option>
                        <option>61</option>
                        <option>62</option>
                        <option>63</option>
                        <option>64</option>
                        <option>65</option>
                        <option>66</option>
                        <option>67</option>
                        <option>68</option>
                        <option>69</option>
                        <option>70</option>
                        <option>71</option>
                        <option>72</option>
                        <option>73</option>
                        <option>74</option>
                        <option>75</option>
                        <option>76</option>
                        <option>77</option>
                        <option>78</option>
                        <option>79</option>
                        <option>80</option>
                        <option>81</option>
                        <option>82</option>
                        <option>83</option>
                        <option>84</option>
                        <option>85</option>
                        <option>86</option>
                        <option>87</option>
                        <option>88</option>
                        <option>89</option>
                        <option>90</option>
                        <option>91</option>
                        <option>92</option>
                        <option>93</option>
                        <option>94</option>
                        <option>95</option>
                        <option>96</option>
                        <option>97</option>
                        <option>98</option>
                        <option>99</option>
                        <option>100</option>
                    </select>
                </div>
            </div>
            <div class="optionlistitems" style="display:none;">
                <div class="taoptionitem">
                    <textarea id="offercommentta" class="offercommentta" name="offercomment" cols="30" rows="2">Enter comments about the ride here!</textarea>
                </div>
            </div>
            <div class="optionlistitems">
                <div class="btnoptionitem">
                    <a id="resumebtnlink" href="#"><img id="resumebtnimg" src="../img/resumebtn.png" alt="" /></a>
                </div>
            </div>
        </form>
    </div>
    <div id="newsearchdetailsUI">
        <form id="searchdetform" action="">
            <!--<div class="optionlistitems">
            <div class="cboptionitem">
            <div class="optiontxt">checkbox</div>
            <a id="" href=""><img id="" class="" src="" alt="" /></a>
            </div>
            </div>-->
            <div class="optionlistitems">
                <div class="ddoptionitem">
                    <div class="optiontxt">
                        Number of Persons:
                    </div>
                    <select id="searchseatsselect" class="listselect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </div>
            <div class="optionlistitems">
                <div class="ddoptionitem">
                    <div class="optiontxt">
                        Ready to wait for:
                    </div>
                    <select id="searchwaitimeselect" class="listselect">
                        <option>10 min</option>
                        <option>15 min</option>
                        <option>20 min</option>
                        <option>30 min</option>
                        <option>45 min</option>
                        <option>1 hour</option>
                        <option>2 hour</option>
                        <option>3 hour</option>
                        <option>4 hour</option>
                    </select>
                </div>
            </div>
            <div class="optionlistitems" style="display:none;">
                <div class="taoptionitem">
                    <textarea id="searchcommentta" class="offercommentta" name="searchcomment" cols="30" rows="2">Enter comments about search here!</textarea>
                </div>
            </div>
            <div class="optionlistitems">
                <div class="btnoptionitem">
                    <a id="resumebtnlink2" href="#"><img id="resumebtnimg2" src="../img/resumebtn.png" alt="" /></a>
                </div>
            </div>
        </form>
    </div>
    <div id="activeofferUI">
        <h3>My offers</h3>
        <ul id="activeofferlist" class="ridelist">
            <!-- list populated through JS -->
        </ul>
    </div>
    <div id="activeofferdetailUI">
    </div>
    <div id="activesearchUI">
        <h3>My Searches</h3>
        <ul id="activesearchlist" class="ridelist">
            <!-- list populated through JS -->
        </ul>
    </div>
    <div id="completedtripsUI">
        <ul id="completedtrips" class="ridelist">
            <!-- list populated through JS -->
        </ul>
    </div>
    <div id="homeUI">
        <div id="homeUI_loading">
            <h3>Loading personal data</h3>
        </div>
        <div id="homeUI_live" style="display: none;">
            <div id="homeinfo">
                <h3>Welcome <span id="usernametag"></span>!</h3>
                <img id="profilepicimg" src="../../OpenRideWeb/img/profile/default.jpg" alt="profilepic" width="125" height="125" />
                <p style="margin-top: -6px;">
                    <span class="statshl" id="homeinfoopenoffers"></span>
                    <a href="#" id="homeActiveOffers" class="homeui_links">Active<span id="homeinfoopenoffers-singular"></span> offer<span id="homeinfoopenoffers-plural">s</span></a>
                    <br /><span style="padding: 0 0 0 22px; font-size: 12px; line-height: 100%;">(Driver mode)</span>
                    <br/>
                    <span class="statshl" id="homeinfoopensearches"></span>
                    <a href="#" id="homeActiveSearches" class="homeui_links">Active<span id="homeinfoopensearches-singular"></span>
                        search<span id="homeinfoopensearches-plural">es</span></a>
                    <br /><span style="padding: 0 0 0 22px; font-size: 12px; line-height: 100%;">(Rider mode)</span>
                    <br/>
                    <span class="statshl" id="homeinfoopenratings"></span>
                    <a href="#" id="homeOpenRatings" class="homeui_links">Write review<span id="homeinfoopenratings-plural">s</span></a>
                </p>
                <h3 style="clear: both;"></h3>
            </div>
            <div>
                <span id="motivationmessage" style="background-color: pink; direction: rtl;"></span>
            </div>
            <div class="fastoption">
                <div id="usermodelink">
                    <img id="ridermodeimg" src="../img/ridermodebtn_inactive.png" alt="" />
                    <div id="usermodeslider_bg">
                        <img src="../img/switch_btn.png" alt="" id="usermodeslider" />
                    </div><img id="drivermodeimg" src="../img/drivermodebtn_active.png" alt="" />
                    <p>
                        Current mode: <span id="usermodelabel">Driver</span>
                    </p>
                    <div id="riderupdatecount" style="display: none; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; position: absolute; top: -1px; right: 135px;"></div>
                    <div id="driverupdatecount" style="display: none; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; position: absolute; top: -1px; right: 0px;"></div>
                </div>
                <div id="logoutlink">
                    <img id="logoutimg" src="../img/logoutbtn.png" alt="" />
                    <p>
                        Logout
                    </p>
                </div>
            </div>

        </div>
    </div>
    <div id="activesearchdetailUI">
    </div>
    <div id="newsearchUI">
        <div class="category-txt">
            From:
        </div>
        <form name="searchSelectStartForm" action="#">
            <div class="pickloc" style="display:none">
                <div class="formstyle">
                    <select id="searchstartdropd" name="dropd05" onChange="">
                        <option id="searchstartselectcurrpos">Location: to be determined...</option>
                        <option id="searchstartselectmaplink">Select start point on map</option>
                    </select>
                </div>
                <div style="margin-top:1px;" class="picker">
                    <a id="searchstartpickerlink" href="#"><img src="../img/pickMapIcon.png" alt="xyz" /></a>
                </div>
            </div>
            <div class="pickloc">
                <select id="searchstartcombo" name="dropd03" onChange="">
                    <option>Tel Aviv</option>
                    <option>Beer Sheva</option>
                    <option>Jerusalem</option>
                    <option>Haifa</option>
                    <option>Shoham</option>
                    <option>Rishon Lezion</option>
                </select>
            </div>
            <div class="category-txt">
                To:
            </div>
            <div class="pickloc" style="display:none">
                <div class="formstyle" >
                    <select id="searchdestdropd" name="dropd06" onChange="">
                        <option id="searchdestselectcurrpos">Location: to be determined...</option>
                        <option id="searchdestselectmaplink">Select destination on map</option>
                    </select>
                </div>
                <div class="picker">
                    <a id="searchdestpickerlink" href="#"><img src="../img/pickMapIcon.png" alt="xyz" /></a>
                </div>
            </div>
            <div class="pickloc">
                <select id="searchendcombo" name="dropd03" onChange="">
                    <option>Tel Aviv</option>
                    <option>Beer Sheva</option>
                    <option>Jerusalem</option>
                    <option>Haifa</option>
                    <option>Shoham</option>
                    <option>Rishon Lezion</option>
                </select>
            </div>
            <br/>
            <div class="detaillinkdiv" style="display:none">
                <a id="newsearchdetaillink" href="#"><img id="newsearchdetailbtn" src="../img/detailedInfo_new.png" alt="options" /></a>
                <div class="picker" id="showriderroutediv">
                    <a id="searchroutepickerlink" href="#"><img src="../img/showrouteicon.png" alt="xyz" /></a>
                </div>
            </div>
<!--             <div id="placesnwait" class="pickloc">
                <div id="searchplacestxt" class="category-txt">Passengers:</div>
               <div id="searchmaxwaittxt" class="category-txt">Max. Wait:</div>--<br />
              <!--  <div class="formstyle" id="placesnwaitform">
                    <select id="nrplacesselect" name="dropd07" onChange="">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
<!--                    <select id="maxwait" name="dropd08" onChange="">
                        <option>10 min</option>
                        <option>15 min</option>
                        <option>20 min</option>
                        <option>30 min</option>
                        <option>45 min</option>
                        <option>1 hour</option>
                        <option>2 hour</option>
                        <option>3 hour</option>
                        <option>4 hour</option>
                    </select>--
<!--                </div>--
                <!--            <div class="picker" id="showriderroutediv"><a id="searchroutepickerlink" href="#"><img src="../img/showrouteicon.png" alt="xyz" /></a></div>--
            </div>-->
        </form>
        <div style="margin-top:3px;" class="separator-line">
            <img src="../img/horizline.png" width="306" height="2" alt="xyz" />
        </div>
        <div class="category-txt">
            Departure Time Range:
            <br/>
        </div>
        <div class="date">
            <div class="dateContainer">
                <div id="searchshowdate">
                    <label class="labelStyle" id="searchdayLabel">
                    </label>.
                    <label class="labelStyle" id="searchmonthLabel">
                    </label>.
                    <label class="labelStyle" id="searchyearLabel">
                    </label>
                </div>
                <div id="searchdateUpDownArrows">
                    <a id="searchdateuparrowlink" class="arrowlinks" href="#"><img id="searchdateuparrow" class="arrows" src="../img/upArr2.png" height="39" width="39" alt="xyz" /></a><a id="searchdatedownarrowlink" class="arrowlinks" href="#"><img id="searchdatedownarrow" class="arrows" src="../img/downArr2.png" height="39" width="39" alt="xyz" /></a>
                </div><!--<div class="picker"><a href="#"><img src="../img/pickCalIcon.png" alt="xyz" /></a></div>-->
            </div>
            <div class="dateContainer">
                <div id="searchshowtime">
                    <label class="labelStyle" id="searchhourLabel">
                    </label>:
                    <label class="labelStyle" id="searchminuteLabel">
                    </label>
                    <div class="datetxt">

                    </div>
                </div>
                <div id="searchtimeUpDownArrows">
                    <a id="searchtimeuparrowlink" class="arrowlinks" href="#"><img id="searchtimeuparrow" class="arrows" src="../img/upArr2.png" height="39" width="39" alt="xyz" /></a><a id="searchtimedownarrowlink" class="arrowlinks" href="#"><img id="searchtimedownarrow" class="arrows" src="../img/downArr2.png" height="39" width="39" alt="xyz" /></a>
                </div>
            </div>
            <div class="dateContainer">
                <div id="searchshowtime">
                    <label class="labelStyle" id="searchhourLabelEnd">
                    </label>:
                    <label class="labelStyle" id="searchminuteLabelEnd">
                    </label>
                    <div class="datetxt">

                    </div>
                </div>
                <div id="searchtimeUpDownArrows">
                    <a id="searchtimeuparrowlinkEnd" class="arrowlinks" href="#"><img id="searchtimeuparrowEnd" class="arrows" src="../img/upArr2.png" height="39" width="39" alt="xyz" /></a><a id="searchtimedownarrowlinkEnd" class="arrowlinks" href="#"><img id="searchtimedownarrowEnd" class="arrows" src="../img/downArr2.png" height="39" width="39" alt="xyz" /></a>
                </div>
            </div>
        </div>
        <div style="margin-top:3px; margin-bottom: 3px;" class="separator-line">
            <img src="../img/horizline.png" width="306" height="2" alt="xyz" />
        </div>
        <div id="detsearchopts">
            <a id="newsearchsubmit" href="#"><img class="submitBtn" id="newsearchsubmitbtn" src="../img/confirmSend.png" alt="xyz" /></a>
        </div>
    </div>
    <div id="ratingsUI">
        <h3>Profile: </h3>

        <div class="ratingstatsrow">
            <span class="txttabsmall">Username: </span>
            <span class="statshl" id="ratingsUserName"></span>
        </div>
        <div class="ratingstatsrow">
            <span class="txttabsmall">Gender: </span>
            <span class="statshl" id="ratingsUserGender"></span>
        </div>
        <div class="ratingstatsrow">
            <span class="txttabsmall">Location: </span>
            <span class="statshl" id="ratingsUserLocation"></span>
        </div>
        <br><br>
        <h3>
            <strong>Total Ratings: </strong>
        </h3>
        <div class="simplehighlight" style="margin: -0.3em 0 0.5em 28px;" id="ratingssummarytotal">
        </div>
        <div class="ratingInformation">
            (Calculated from total ratings for you)
        </div>
        <p>
            <strong>Detailed Rating:</strong>
        </p>
        <div style="width: 70%; margin-left: 25px;">
            <div class="ratingstatsrow" style="display:none">
                <img class="flleftimg" src="../img/rated_1.png" alt="x" /><span class="txttabsmall">Price: </span>
                <span class="statshl" id="ratingssummarypositive"></span>
                <span class="statshl" id="ratingssummaryratio"></span>
            </div>
            <div class="ratingstatsrow">
                <img class="flleftimg" src="../img/rated_1.png" alt="x" /><span class="txttabsmall">On Time:  </span> <!--Reliability:-->
                <span class="statshl" id="ratingssummarydecent"></span>
                <span class="statshl" id="ratingssummaryratio"></span>
            </div>
            <div class="ratingstatsrow"  style="display:none">
                <img class="flleftimg" src="../img/rated_1.png" alt="x" /><span class="txttabsmall">Communication: </span>
                <span class="statshl" id="ratingssummaryneutral"></span>
                <span class="statshl" id="ratingssummaryratio"></span>
            </div>
            <div class="ratingstatsrow">
                <img class="flleftimg" src="../img/rated_1.png" alt="x" /><span class="txttabsmall">Friendliness: </span>
                <span class="statshl" id="ratingssummarymediocre"></span>
                <span class="statshl" id="ratingssummaryratio"></span>
            </div>
            <%--div class="ratingstatsrow">
                <img class="flleftimg" src="../img/rated_-1.png" alt="x" /><span class="txttabsmall">Negative: </span>
                <span class="statshl" id="ratingssummarynegative"></span>
                <span class="statshl" id="ratingssummaryratio"></span>
            </div--%>
        </div>
    </div>
    <div id="openratingsUI">
        <!-- list populated through JS -->
    </div>
    <div id="receivedratingsUI">
        <!-- list populated through JS -->
    </div>
    <div id="favlistUI">
        <p></p>
        <p>SmartSociety is an EU FP7 project.</p>
    <p>Developed by the <a href="https://sites.google.com/site/hdmbgu/" target="_blank">HDM Lab</a> in <a href="http://in.bgu.ac.il/Pages/default.aspx" target="_blank">BGU.</a></p>

    <p>Visit this project at <a href="http://www.smart-society-project.eu/" target="_blank">SmartSociety.</a> </p>

    <p>OpenRide is a Project of Fraunhofer Institute for Open Communication Systems (FOKUS).</p>
    </div>
    <div id="profileUI">
        <h3>Personal Data</h3>
        <form id="profilepersonaldataform" action="." class="profile">
            <p>
                Please check and complete your details:
            </p>
            <div>
                <label for="profilepersonaldatafirstname">
                    First name:
                </label>
                <span id="profilepersonaldatafirstname" class="value"></span>
                <br/>
            </div>
            <div>
                <label for="profilepersonaldatalastname">
                    Last name:
                </label>
                <span id="profilepersonaldatalastname" class="value"></span>
                <br/>
            </div>
            <div>
                <label for="profilepersonaldatagender">
                    Gender:
                </label>
                <span id="profilepersonaldatagender" class="value"></span>
                <br/>
            </div>
            <div>
                <label for="profilepersonaldatadateofbirth">
                    Birth date:
                </label>
                <input type="text" id="profilepersonaldatadateofbirth" />
                <br/>
            </div>
            <div>
                <label for="profilepersonaldataemail">
                    E-Mail-Address: <span class="requiredField">(*)</span>
                </label>
                <input type="text" id="profilepersonaldataemail" />
                <br/>
            </div>
            <div>
                <label for="profilepersonaldatamobilephonenumber">
                    Mobile phone number: <span class="requiredField">(*)</span>
                </label>
                <input type="text" id="profilepersonaldatamobilephonenumber" />
                <br/>
            </div>
            <!--div>
                <label for="profilepersonaldatafixedphonenumber">
                    Festnetznummer:
                </label>
                <input type="text" id="profilepersonaldatafixedphonenumber" />
                <br/>
            </div-->
            <div>
                <label for="profilepersonaldatastreetaddress">
                    Street, House number:
                </label>
                <input type="text" id="profilepersonaldatastreetaddress" />
                <br/>
            </div>
            <div>
                <label for="profilepersonaldatazipcode">
                    ZipCode:
                </label>
                <input type="text" id="profilepersonaldatazipcode" />
                <br/>
            </div>
            <div>
                <label for="profilepersonaldatacity">
                    Location:
                </label>
                <input type="text" id="profilepersonaldatacity" />
                <br/>
            </div>
            <div>
                <label for="profilepersonaldataissmoker-no">
                    I am a... :
                </label>
                <br/>
                <div class="optionlist">
                    <input type="radio" value="n" id="profilepersonaldataissmoker-no" name="profilepersonaldataissmoker" />
                    <label for="profilepersonaldataissmoker-no" class="option">
                        Non smoker
                    </label>
                    <input type="radio" value="y" id="profilepersonaldataissmoker-yes" name="profilepersonaldataissmoker" />
                    <label for="profilepersonaldataissmoker-yes" class="option">
                        Smoker
                    </label>
                    <br/>
                    <input type="radio" value="-" id="profilepersonaldataissmoker-null" name="profilepersonaldataissmoker" />
                    <label for="profilepersonaldataissmoker-null" class="option">
                        Not specified
                    </label>
                    <br/>
                </div>
            </div>
            <p><strong>Driver information</strong></p>
            <p style="font-size: 12px;">To participate as a driver you have to provide at least car color and brand of car </p> <!--and license plate number.-->
            <div>
                <label for="profilepersonaldatacarcolour">
                    Car color:
                </label>
                <input type="text" id="profilepersonaldatacarcolour" />
                <br/>
            </div>
            <div>
                <label for="profilepersonaldatacarbrand">
                    Car brand/model:
                </label>
                <input type="text" id="profilepersonaldatacarbrand" />
                <br/>
            </div>
            <!--div>
                <label for="profilepersonaldatacarbuildyear">
                    Autobaujahr:
                </label>
                <input type="text" id="profilepersonaldatacarbuildyear" />
                <br/>
            </div-->
            <div style="display:none">
                <label for="profilepersonaldatacarplateno">
                    Car plate number:<br />
                    <!--span style="font-size: 12px; font-weight: normal;">(Letzte vier Zeichen)</span-->
                </label>
                <input type="text" id="profilepersonaldatacarplateno" />
                <br/>
            </div>
            <!--div>
                <label for="profilepersonaldatalicensedate">
                    F?hrerschein seit:<br />
                    <span style="font-size: 12px; font-weight: normal;">(Jahr)</span>
                </label>
                <input type="text" id="profilepersonaldatalicensedate" />
                <br/>
            </div-->
            <input type="button" value="Save personal data" onclick="fokus.openride.mobclient.controller.modules.modulemanager.putprofilepersonaldata();"/>
            <div style="color: #999; margin: -0.5em 0 1em 10px; font-size: 12px;">
                <br><span class="requiredField">(*)</span>
                = required
            </div>
        </form>
        <h3 class="separated">My Picture</h3>
        <form id="profilepictureform" action="" method="POST" enctype="multipart/form-data" class="profile">
            <p>
                Save my photo as profile picture:
            </p>
            <div>
                <label for="">
                    New picture:
                </label>
                <br/>
                <input type="file" id="profilepicturefile" name="profilepicturefile" size="12" />
                <br/>
            </div>
            <input type="submit" value="Save profile picture" onclick="if (document.getElementById('profilepicturefile').value != '') {fokus.openride.mobclient.controller.modules.modulemanager.putprofileicture(); showOverlayDialog('The profile picture is now uploaded.', '', 'OK', 'location.reload()', '', '');} else { showOverlayDialog('Please select a new image first.', '', 'OK', '', '', ''); return false; }"/>
            <script type="text/javascript">
                if (DetectMobileQuick()) {
                    document.write('<div style="color: #999; margin: -0.5em 0 1em 10px; font-size: 12px;">This feature may not be available on mobile web browsers. Please do not use in this case a web browser on your desktop computer.</div>');
                }

            </script>
        </form>
        <h3 class="separated">Preferences</h3>
        <form id="profileprefsform" action="." class="profile">
            <p>
                General preferences:
            </p>
            <div>
                <label for="profileprefissmoker-yes" class="wide">
                    Smoking while driving is allowed:
                </label>
                <br/>
                <div class="optionlist">
                    <input type="radio" value="y" id="profileprefissmoker-yes" name="profileprefissmoker" />
                    <label for="profileprefissmoker-yes" class="option">
                        yes
                    </label>
                    <input type="radio" value="n" id="profileprefissmoker-no" name="profileprefissmoker" />
                    <label for="profileprefissmoker-no" class="option">
                        no
                    </label>
                    <input type="radio" value="-" id="profileprefissmoker-null" name="profileprefissmoker" />
                    <label for="profileprefissmoker-null" class="option">
                        whatever
                    </label>
                    <br/>
                </div>
            </div>
            <!--div>
                <label for="profileprefgender-f" class="wide">
                    Geschlecht meiner Fahrer und Mitfahrer:
                </label>
                <br/>
                <div class="optionlist">
                    <input type="radio" value="f" id="profileprefgender-f" name="profileprefgender" />
                    <label for="profileprefgender-f" class="option">
                        weiblich
                    </label>
                    <input type="radio" value="-" id="profileprefgender-null" name="profileprefgender" />
                    <label for="profileprefgender-null" class="option">
                        egal
                    </label>
                    <br/>
                </div>
            </div-->
            <input type="button" value="Save preferences" onclick="fokus.openride.mobclient.controller.modules.modulemanager.putprofilepreferences();"/>
        </form><h3 class="separated">Password</h3>
        <form id="profilepasswordform" action="." class="profile">
            <p>
                Change your password for access to OpenRide:
            </p>
            <div>
                <label for="">
                    Old password: <span class="requiredField">(*)</span>
                </label>
                <input type="password" id="profilepasswordold" />
                <br/>
            </div>
            <div>
                <label for="">
                    New password: <span class="requiredField">(*)</span>
                </label>
                <input type="password" id="profilepassword" />
                <br/>
            </div>
            <div>
                <label for="">
                    New password (repeat): <span class="requiredField">(*)</span>
                </label>
                <input type="password" id="profilepasswordcheck" />
                <br/>
            </div>
            <input type="button" value="Save password" onclick="fokus.openride.mobclient.controller.modules.modulemanager.putprofilepassword();"/>
            <div style="color: #999; margin: -0.5em 0 1em 10px; font-size: 12px;">
                <br><span class="requiredField">(*)</span>
                = required
            </div>
        </form>
    </div>
    <div id="accountUI">
        <div class="category-txt">
            <br/>
            Here is the brief account management!
        </div>
    </div>
    <div id="dummyUI">
        <div class="category-txt">
        </div>
    </div>
    <div id="testdiv">
    </div>

</div>


<!-- ### full screen map views html start ### -->

<!-- offer start chooser screen -->
<div id="offerstartgmapscreencontainer">
    <div id="offerstartgmapzoomcontainer">
        <input id="offerstartgmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="offerstartgmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="offerstartgmapcontainer">
        <div id="offerstartgmap" style="width: 100%; height: 100%">
            <!-- here the offerstartmap tiles go -->
        </div>
    </div>
    <div id="offerstartgmapinfo">
        <div class="mapinfotxt">
            You can enter address here or
            <br/>
					select the start point on the map.
            <!-- info about screen usage -->
        </div>
        <div class="addressarea">
            <!-- input for reverse geocoding -->
            <input id="offerstartgmapaddressinput" name="offerstartgmapaddressinput" type"text" />
                   <input id="offerstartgmaplocateadressbtn" class="rounded2 compact2" type="button" value="Search" style="width:80px;"/>
        </div>
        <div class="leftrightmapcolum">
            <input id="offerstartgmapbackbtn" class="rounded2 compact2" type="button" value="<< Abort" style="width:120px;"/>
            <input id="offerstartgmapconfirmadressandbackbtn" class="rounded2 compact2" type="button" value="Accept" style="width:160px;"/>
        </div>
    </div>
</div><!-- offer destination chooser screen -->
<div id="offerdestgmapscreencontainer">
    <div id="offerdestgmapzoomcontainer">
        <input id="offerdestgmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="offerdestgmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="offerdestgmapcontainer">
        <div id="offerdestgmap">
            <!-- here the offerdestmap tiles go -->
        </div>
    </div>
    <div id="offerdestgmapinfo">
        <div class="mapinfotxt">
            Enter an address here or
            <br/>
					select the start point from the map.
            <!-- info about screen usage -->
        </div>
        <div class="addressarea">
            <!-- address input for reverse geocoding -->
            <input id="offerdestgmapaddressinput" name="offerdestgmapaddressinput" type"text" />
                   <input id="offerdestgmaplocateadressbtn" class="rounded2 compact2" type="button" value="Search" style="width:80px;"/>
        </div>
        <div class="leftrightmapcolum">
            <input id="offerdestgmapbackbtn" class="rounded2 compact2" type="button" value="<< Abort" style="width:120px;"/>
            <input id="offerdestgmapconfirmadressandbackbtn" class="rounded2 compact2" type="button" value="Accept" style="width:160px;"/>
        </div>
    </div>
</div><!-- search start chooser screen -->
<div id="searchstartgmapscreencontainer">
    <div id="searchstartgmapzoomcontainer">
        <input id="searchstartgmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="searchstartgmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="searchstartgmapcontainer">
        <div id="searchstartgmap">
            <!-- here the searchstartmap tiles go -->
        </div>
    </div>
    <div id="searchstartgmapinfo">
        <div class="mapinfotxt">
            Enter an address here or
            <br/>
					select the start point on the map.
            <!-- info about screen usage -->
        </div>
        <div class="addressarea">
            <!-- address input for reverse geocoding -->
            <input id="searchstartgmapaddressinput" name="searchstartgmapaddressinput" type"text" />
                   <input id="searchstartgmaplocateadressbtn" class="rounded2 compact2" type="button" value="Search" style="width:80px;"/>
        </div>
        <div class="leftrightmapcolum">
            <input id="searchstartgmapbackbtn" class="rounded2 compact2" type="button" value="<< Abort" style="width:120px;"/>
            <input id="searchstartgmapconfirmadressandbackbtn" class="rounded2 compact2" type="button" value="Accept" style="width:160px;"/>
        </div>
    </div>
</div><!-- search destination chooser screen -->
<div id="searchdestgmapscreencontainer">
    <div id="searchdestgmapzoomcontainer">
        <input id="searchdestgmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="searchdestgmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="searchdestgmapcontainer">
        <div id="searchdestgmap">
            <!-- here the searchdestmap tiles go -->
        </div>
    </div>
    <div id="searchdestgmapinfo">
        <div class="mapinfotxt">
            Enter an address here or
            <br/>
					select the start point on the map.
            <!-- info about screen usage -->
        </div>
        <form id="searchdestgmapform" action="javascript:void(0);">
            <div class="addressarea">
                <!-- address input for reverse geocoding -->
                <input id="searchdestgmapaddressinput" name="searchdestgmapaddressinput" type"text" />
                       <input id="searchdestgmaplocateadressbtn" class="rounded2 compact2" type="button" value="Search" style="width:80px;"/>
            </div>
            <div class="leftrightmapcolum">
                <input id="searchdestgmapbackbtn" class="rounded2 compact2" type="button" value="<< Abort" style="width:120px;"/>
                <input id="searchdestgmapconfirmadressandbackbtn" class="rounded2 compact2" type="button" value="Accept" style="width:160px;"/>
            </div>
        </form>
    </div>
</div><!-- simple offerroute screen -->
<div id="offerroutegmapscreencontainer">
    <div id="offerroutegmapzoomcontainer">
        <input id="offerroutegmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="offerroutegmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="offerroutegmapcontainer">
        <div id="offerroutegmap">
            <!-- here the offerroutemap tiles go -->
        </div>
    </div>
    <div id="offerroutegmapinfo">
        <div class="mapinfotxt">
            Here you can see the route between
            <br/>
					the start point and end point.
            <!-- info about screen usage -->
        </div>
        <!--<input id="offerroutegmapaddptbtn" class="rounded2 compact2" type="button" value="Wegpunkt hinzuf&uuml;gen" style="width:260px;"/>
            	//delete: <input id="offerroutegmapbackbtn" class="rounded2 compact2" type="button" value="<< Zur&uuml;ck" style="width:260px;"/> -->
        <input id="offerroutegmapbackbtn" class="rounded2 compact2" type="button" value="<< Back" style="width:260px;"/>
    </div>
</div><!-- simple searchroute screen -->
<div id="searchroutegmapscreencontainer">
    <div id="searchroutegmapzoomcontainer">
        <input id="searchroutegmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="searchroutegmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="searchroutegmapcontainer">
        <div id="searchroutegmap">
            <!-- here the searchroutemap tiles go -->
        </div>
    </div>
    <div id="searchroutegmapinfo">
        <div class="mapinfotxt">
            Here you can see the route between
            <br/>
					the start point and end point.
            <!-- info about screen usage -->
        </div>
        <input id="searchroutegmapbackbtn" class="rounded2 compact2" type="button" value="<< Back" style="width:260px;"/>
    </div>
</div><!-- viapoint route screen -->
<div id="viaptroutegmapscreencontainer">
    <div id="viaptroutegmapzoomcontainer">
        <input id="viaptroutegmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="viaptroutegmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="viaptroutegmapcontainer">
        <div id="viaptroutegmap">
            <!-- here the viaptroutemap tiles go -->
        </div>
    </div>
    <div id="viaptroutegmapinfo">
        <div class="mapinfotxt">
            Here you can see the route
            <br/>
					pickup/destination points of riders.
            <!-- info about screen usage -->
        </div>
        <input id="viaptroutegmapbackbtn" class="rounded2 compact2" type="button" value="<< Back" style="width:260px;"/>
    </div>
</div><!-- favorite chooser screen -->
<div id="favoritesgmapscreencontainer">
    <div id="favoritesgmapzoomcontainer">
        <input id="favoritesgmapzoominbtn" class="rounded2 compact2" type="button" value="Zoom +" style="width:100px;"/>
        <input id="favoritesgmapzoomoutbtn" class="rounded2 compact2" type="button" value="Zoom -" style="width:100px;"/>
    </div>
    <div id="favoritesgmapcontainer">
        <div id="favoritesgmap">
            <!-- here the favoritesmap tiles go -->
        </div>
    </div>
    <div id="favoritesgmapinfo">
        <div class="mapinfotxt">
            To select a favorite pick a location
        </div>
        <div class="addressarea">
            <!-- address input for reverse geocoding -->
            <input id="favoritesgmapaddressinput" name="favoritesgmapaddressinput" type"text" />
                   <input id="favoritesgmaplocateadressbtn" class="rounded2 compact2" type="button" value="Search" style="width:80px;"/>
        </div>
        <div class="leftrightmapcolum">
            <input id="favoritesgmapbackbtn" class="rounded2 compact2" type="button" value="<< Abort" style="width:120px;"/>
            <input id="favoritesgmapconfirmadressandbackbtn" class="rounded2 compact2" type="button" value="Accept" style="width:160px;"/>
        </div>
    </div>
</div><!-- ### full screen map views html end ### -->