var fWorldMapHandler = function (){

     // ==== WORLD MAP ==== //

    // North America

    var oWorldMapNA = document.querySelector("#worldMapNA");
    var oImageMapNA = document.querySelector("#imageMapNA");
    
    oWorldMapNA.onmouseover = function (){
        oImageMapNA.src ="images/worldMapNAHover.jpg";
    };

    oWorldMapNA.onmouseout = function (){
        oImageMapNA.src ="images/worldMapNA.jpg";
    };

     // South America

    var oWorldMapSA = document.querySelector("#worldMapSA");
    var oImageMapSA = document.querySelector("#imageMapSA");
    
    oWorldMapSA.onmouseover = function (){
        oImageMapSA.src="images/worldMapSAHover.jpg";
    };

    oWorldMapSA.onmouseout = function (){
        oImageMapSA.src ="images/worldMapSA.jpg";
    };

    // Asia

    var oWorldMapAS = document.querySelector("#worldMapAS");
    var oImageMapAS = document.querySelector("#imageMapAS");

    oWorldMapAS.onmouseover = function (){
        oImageMapAS.src ="images/worldMapASHover.jpg";
    };

    oWorldMapAS.onmouseout = function (){
        oImageMapAS.src ="images/worldMapAS.jpg";
    };

    // Europe

    var oWorldMapEU = document.querySelector("#worldMapEU");
    var oImageMapEU = document.querySelector("#imageMapEU");

    oWorldMapEU.onmouseover = function (){
        oImageMapEU.src = "images/worldMapEUHover.jpg";
    };

    oWorldMapEU.onmouseout = function(){
        oImageMapEU.src = "images/worldMapEU.jpg";
    };

    // Oceania

    var oWorldMapOC = document.querySelector("#worldMapOC");
    var oImageMapOC = document.querySelector("#imageMapOC");

    oWorldMapOC.onmouseover = function (){
        oImageMapOC.src = "images/worldMapOCHover.jpg";
    };
    oWorldMapOC.onmouseout = function (){
        oImageMapOC.src = "images/worldMapOC.jpg";
    };

    // info boxes

    // north america

    var oNorthAmericaControl = document.querySelector("#worldMapNA");

    var oOverlayNorthAmerica = document.querySelector("#overlayNorthAmerica");
    
    oNorthAmericaControl.onclick = function (){

        oOverlayNorthAmerica.className = ""; // removes class (css properties) so it will appear

        return false;

    };

    oOverlayNorthAmerica.onclick = function (e){

        //if(e.target.id == "overlayNorthAmerica") {

            this.className = "hide";
        //}

        return false; 
    };

    // south america
    var oSouthAmericaControl = document.querySelector("#worldMapSA");

    var oOverlaySouthAmerica = document.querySelector("#overlaySouthAmerica");
    
    oSouthAmericaControl.onclick = function (){

        oOverlaySouthAmerica.className = ""; // removes class (css properties) so it will appear

        return false;

    };

    oOverlaySouthAmerica.onclick = function (e){

        //if(e.target.id == "overlaySouthAmerica") {

            this.className = "hide";
        //} 

        return false;
    };

    // europe
    var oEuropeControl = document.querySelector("#worldMapEU");

    var oOverlayEurope = document.querySelector("#overlayEurope");
    
    oEuropeControl.onclick = function (){

        oOverlayEurope.className = ""; // removes class (css properties) so it will appear

        return false;

    };

    oOverlayEurope.onclick = function (e){

        //if(e.target.id == "overlayEurope") {

            this.className = "hide";
        //}

        return false;   
    };

    // asia
    var oAsiaControl = document.querySelector("#worldMapAS");

    var oOverlayAsia = document.querySelector("#overlayAsia");
    
    oAsiaControl.onclick = function (){

        oOverlayAsia.className = ""; // removes class (css properties) so it will appear

        return false;

    };

    oOverlayAsia.onclick = function (e){

        // if(e.target.id == "overlayAsia") {

            this.className = "hide";
        //}

        return false;   
    };
    
    // oceania
    var oOceaniaControl = document.querySelector("#worldMapOC");

    var oOverlayOceania = document.querySelector("#overlayOceania");
    
    oOceaniaControl.onclick = function (){

        oOverlayOceania.className = ""; // removes class (css properties) so it will appear

        return false;

    };

    oOverlayOceania.onclick = function (e){

        //if(e.target.id == "overlayOceania") {

            this.className = "hide";
        //}

        return false;   
    };
};

window.addEventListener("load",fWorldMapHandler);