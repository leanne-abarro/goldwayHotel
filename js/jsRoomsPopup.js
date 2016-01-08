// onload javascript

var fPopupModalHandler = function (){
    
    // ==== POPUP MODAL ROOMS ==== //
    
    // standard room

	var oStandardControl = document.querySelector("#standRm");

	var oOverlayStandard = document.querySelector("#overlayStandard");
	
	oStandardControl.onclick = function (){

		oOverlayStandard.className = ""; // removes class (css properties) so it will appear

		return false;

	};

	oOverlayStandard.onclick = function (e){

		//if(e.target.id == "overlayStandard") {

			console.log(e.target);

			this.className = "hide";
		//}

		return false;

	};
    
    // superior room
    
    var oSuperiorControl = document.querySelector("#superRm");

	var oOverlaySuperior = document.querySelector("#overlaySuperior");
	
	oSuperiorControl.onclick = function (){

		oOverlaySuperior.className = ""; // removes class (css properties) so it will appear

		return false;

	};

	oOverlaySuperior.onclick = function (e){

		// if(e.target.id == "overlaySuperior") {

			this.className = "hide";
		//} 
		
		return false;
	};
    
    // penthouse room
    
    var oPenthouseControl = document.querySelector("#penthouseRm");

	var oOverlayPenthouse = document.querySelector("#overlayPenthouse");
	
	oPenthouseControl.onclick = function (){

		oOverlayPenthouse.className = ""; // removes class (css properties) so it will appear

		return false;

	};

	oOverlayPenthouse.onclick = function (e){

		// if(e.target.id == "overlayPenthouse") {

			this.className = "hide";
		// }
		return false; 	
	};
    
};

window.addEventListener("load",fPopupModalHandler);