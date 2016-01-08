// functions

// ==== FORM FUNCTIONS ==== //


// names check

var fNameCheck = function (){

    var sInput = this.value.trim();

    var oMessage = document.getElementById(this.id + "Message");

    var oRegEx = /[^a-zA-Z]/;

    var bResult = oRegEx.test(sInput);

    if (sInput.length == 0){

        oMessage.innerHTML = "Please Fill In";
        oMessage.className = "message-error";
        this.valid = false;

    } else if (bResult == true){

        oMessage.innerHTML = "Alphabets Only";
        oMessage.className = "message-error";
        this.valid = false;

    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }
};

// email check

var fEmailCheck = function (){

    var sInput = this.value.trim();

    var oRegEx = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    var bResult = oRegEx.test(sInput);

    var oMessage = document.getElementById(this.id + "Message");

    if (sInput.length == 0){

        oMessage.innerHTML = "Please Fill In";
        oMessage.className = "message-error";
        this.valid = false;

    } else if (bResult == false){

        oMessage.innerHTML = "Email Invalid";
        oMessage.className = "message-error";
        this.valid = false;

    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }
};

// email newsletter subscription check

var fNewsletterSubscribeCheck = function (){

    var sInput = this.value.trim();

    var oRegEx = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    var bResult = oRegEx.test(sInput);

    var oMessage = document.getElementById(this.id + "Message");

    if (sInput.length == 0){

        oMessage.innerHTML = "Please Include Your Email";
        oMessage.className = "message-error2";
        this.valid = false;

    } else if (bResult == false){

        oMessage.innerHTML = "Email Invalid";
        oMessage.className = "message-error2";
        this.valid = false;

    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }
};

// telephone check

var fTelephoneCheck = function (){
    
    var sInput = this.value.trim();
    
    var oRegEx = /^[0-9()-]+$/;
    
    var bResult = oRegEx.test(sInput);
    
    var oMessage = document.getElementById(this.id + "Message");
    
    if (bResult == false){
        oMessage.innerHTML = "Numbers Only";
        oMessage.className = "message-error";
        this.valid = false;
    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }
};


//country selection check

var fCountryCheck = function (){
    
    var oCountry = document.getElementById("country");
    var oMessage = document.getElementById(this.id + "Message");
    
    if (oCountry.selectedIndex == 0) {
        oMessage.innerHTML = "Please Select a Country";
        oMessage.className = "message-error";
        this.valid = false;
    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }

};

// check date

var fCheckDate = function (){

   
    //console.log(oCheckIn);

    var oMessage = document.getElementById(this.id + "Message");

    if (this.value == ""){

        oMessage.innerHTML = "Please Select a Date";
        oMessage.className = "message-error";
        this.valid = false;
        
    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }
};

// adults check

var fAdultCheck = function (){

    var oMessage = document.getElementById(this.id + "Message");

    if (this.selectedIndex == 0) {
        oMessage.innerHTML = "Please Select No. of Adults";
        oMessage.className = "message-error";
        this.valid = false;
    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }
};

// rooms check

var fRoomsCheck = function (){
    
    var oMessage = document.getElementById(this.id + "Message");
    
    if (this.selectedIndex == 0) {
        oMessage.innerHTML = "Please Select No. of Rooms";
        oMessage.className = "message-error";
        this.valid = false;
    } else {

        oMessage.innerHTML = "";
        oMessage.className = "message-success";
        this.valid = true;
    }
    
};


// onload

var fQuickBookingHandler = function(){
    // ==== QUICK BOOKING VALID ==== //
    
    // quick check-in and check-out
    
    var oQuickCheckInInput = document.querySelector("#quickCheckInDate");
    
    oQuickCheckInInput.valid = true;
    oQuickCheckInInput.onblur = fCheckDate;
    oQuickCheckInInput.onchange = fCheckDate;
    
    
    var oQuickCheckOutInput = document.querySelector("#quickCheckOutDate");
    
    oQuickCheckOutInput.valid = true;
    oQuickCheckOutInput.onblur = fCheckDate;
    oQuickCheckOutInput.onchange = fCheckDate;

    var oQuickAdultsCheckInput = document.querySelector("#quickAdultNumber");

    oQuickAdultsCheckInput.valid = true;
    oQuickAdultsCheckInput.onblur = fAdultCheck;
    
    var oQuickRoomsCheckInput = document.querySelector("#quickRoomNumber");
    
    oQuickRoomsCheckInput.valid = true;
    oQuickRoomsCheckInput.onblur = fRoomsCheck;
    
    var oSubmitQuickBook = document.querySelector("#quickReserve");

    oSubmitQuickBook.onsubmit = function (){
        
        oQuickCheckInInput.onblur();
        oQuickCheckInInput.onchange();
        oQuickCheckOutInput.onblur();
        oQuickCheckOutInput.onchange();
        oQuickAdultsCheckInput.onblur();
        oQuickRoomsCheckInput.onblur();
        
        var bFormValid = oQuickCheckInInput.valid && 
                          oQuickCheckOutInput.valid &&
                          oQuickAdultsCheckInput.valid &&
                          oQuickRoomsCheckInput.valid;

        return bFormValid;
    }
};

var fValidationHandler = function (){
    
    
    // ==== FORMS VALIDATION ==== //
    
    //firstName 

    var oFirstNameInput = document.querySelector("#firstName");

    oFirstNameInput.valid = true;
    
    oFirstNameInput.onblur = fNameCheck;


    //lastName

    var oLastNameInput = document.querySelector("#lastName");

    oLastNameInput.valid = true;

    oLastNameInput.onblur = fNameCheck;
    
    //email

    var oEmailInput = document.querySelector("#email");

    oEmailInput.valid = true;

    oEmailInput.onblur = fEmailCheck;
    
    //phone number
    
    var oTelephoneInput = document.querySelector("#telephone");
    
    oTelephoneInput.valid = true;
    
    oTelephoneInput.onblur = fTelephoneCheck;
    
    //country 
    
    var oCountryInput = document.querySelector("#country");
    

    if (oCountryInput != null){
        oCountryInput.valid = true;
        oCountryInput.onblur = fCountryCheck;
    }
    
    // number of adults

    var oAdultNumberInput = document.querySelector("#adults");

    if (oAdultNumberInput != null){
        oAdultNumberInput.valid = true;
        oAdultNumberInput.onblur = fAdultCheck;
    }
    
    // number of rooms

    var oRoomNumberInput = document.querySelector("#rooms");

    if (oRoomNumberInput != null){
        oRoomNumberInput.valid = true;
        oRoomNumberInput.onblur = fRoomsCheck;
    }
    
    // check-in and check-out

    var oCheckInInput = document.querySelector("#checkInDate");
    
    if (oCheckInInput != null){
        oCheckInInput.valid = true;
        oCheckInInput.onblur = fCheckDate;
        oCheckInInput.onchange = fCheckDate;
    }
    
    var oCheckOutInput = document.querySelector("#checkOutDate");
    
    if (oCheckOutInput != null){
        oCheckOutInput.valid = true;
        oCheckOutInput.onblur = fCheckDate;
        oCheckOutInput.onchange = fCheckDate;
    }
    
    //submit button for forms
    
    //contact and reservations

    var oSubmitForm = document.querySelector("#contactReservationsForm");

    oSubmitForm.onsubmit = function (){

            // forces all checks to happen before submission:

            oFirstNameInput.onblur();
            oLastNameInput.onblur();
            oEmailInput.onblur();
        
            if (oCheckInInput != null){
                oCheckInInput.onblur();
                oCheckInInput.onchange();
            }
        
            if (oCheckOutInput != null){
                oCheckOutInput.onblur();
                oCheckOutInput.onchange();
            }

            if (oCountryInput != null){
                oCountryInput.onblur();
            }

            if (oAdultNumberInput != null){
                oAdultNumberInput.onblur();
            }
        
            if (oRoomNumberInput != null){
                oRoomNumberInput.onblur();
            }
            
            var bFormValid = oFirstNameInput.valid && 
                             oLastNameInput.valid && 
                             oEmailInput.valid;
                             
            if (oCheckInInput != null){
                bFormValid = bFormValid && oCheckInInput.valid;
            }
            
            if (oCheckOutInput != null){
                bFormValid = bFormValid && oCheckOutInput.valid;
            }

            if (oCountryInput != null){
                    bFormValid = bFormValid && oCountryInput.valid;
            }
            
            if (oAdultNumberInput != null){
                    bFormValid = bFormValid && oAdultNumberInput.valid;
            }
        
            if (oRoomNumberInput != null){
                    bFormValid = bFormValid && oRoomNumberInput.valid;
            } 

            return bFormValid;
    };    
};

var fNewsEmailHandler = function (){

    var oNewsEmailInput = document.querySelector("#emailNews");

    oNewsEmailInput.valid = true;

    oNewsEmailInput.onblur = fNewsletterSubscribeCheck;

    //validate on subscribe

    var oSubscribe = document.querySelector("#newsletterSignUp");

    oSubscribe.onsubmit = function (){

        oNewsEmailInput.onblur();

        var bFormValid = oNewsEmailInput.valid;

        return bFormValid;
    };

};

if(document.querySelector("#contactReservationsForm") != null){
    window.addEventListener("load",fValidationHandler);
}

if(document.querySelector("#quickReserve") != null){
    window.addEventListener("load",fQuickBookingHandler);
}
    
window.addEventListener("load",fNewsEmailHandler);

