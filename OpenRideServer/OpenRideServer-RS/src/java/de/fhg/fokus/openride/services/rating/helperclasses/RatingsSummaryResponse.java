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

package de.fhg.fokus.openride.services.rating.helperclasses;

/**
 *
 * @author tku
 */
public class RatingsSummaryResponse {

    private Integer ratingsTotal;
    private Integer ratingsRatioPercent;
    private Integer ratingsLatestPositive;
    private Integer ratingsLatestDecent;
    private Integer ratingsLatestNeutral;
    private Integer ratingsLatestMediocre;
    private Integer ratingsLatestNegative;


    public Integer getRatingsLatestNegative() {
        return ratingsLatestNegative;
    }

    public void setRatingsLatestNegative(Integer ratingsLatestNegative) {
        this.ratingsLatestNegative = ratingsLatestNegative;
    }

    public Integer getRatingsLatestNeutral() {
        return ratingsLatestNeutral;
    }

    public void setRatingsLatestNeutral(Integer ratingsLatestNeutral) {
        this.ratingsLatestNeutral = ratingsLatestNeutral;
    }

    public Integer getRatingsLatestPositive() {
        return ratingsLatestPositive;
    }

    public void setRatingsLatestPositive(Integer ratingsLatestPositive) {
        this.ratingsLatestPositive = ratingsLatestPositive;
    }

    public Integer getRatingsRatioPercent() {
        return ratingsRatioPercent;
    }

    public void setRatingsRatioPercent(Integer ratingsRatioPercent) {
        this.ratingsRatioPercent = ratingsRatioPercent;
    }

    public Integer getRatingsTotal() {
        return ratingsTotal;
    }

    public void setRatingsTotal(Integer ratingsTotal) {
        this.ratingsTotal = ratingsTotal;
    }

    public void setRatingsLatestDecent(Integer ratingsLatestDecent) {
        this.ratingsLatestDecent = ratingsLatestDecent;
    }

    public Integer getRatingsLatestDecent() {
        return ratingsLatestDecent;
    }

    public void setRatingsLatestMediocre(Integer ratingsLatestMediocre) {
        this.ratingsLatestMediocre = ratingsLatestMediocre;
    }

     public Integer getRatingsLatestMediocre() {
        return ratingsLatestMediocre;
    }
    
    

}
