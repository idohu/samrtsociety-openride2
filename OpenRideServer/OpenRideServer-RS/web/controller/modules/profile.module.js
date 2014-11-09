fokus.openride.mobclient.controller.modules.profile = function(){


    /* ------ private variabeles and methods ------ */
    var reqProfile = {
        'ProfileRequest':[
        {
            '_id'               : '',
            'preferences'       : '',
            'pictures'          : '',
            'favouritesList'    : '',
            'firstName'         : "",
            'lastName'          : "",
            'dateOfBirth'       : "",
            'email'             : '',
            'mobilePhoneNumber' : '',
            'fixedPhoneNumber'  : '',
            'streetAddress'     : '',
            'zipCode'           : '',
            'city'              : '',
            'isSmoker'          : '',
            'licenseDate'       : '',
            'carColour'         : '',
            'carBrand'          : '',
            'carBuildYear'      : '',
            'carPlateNo'        : '',
            'gender'            : "-",
            '_revision'         : 0,
            '__v'               : 0
        }
        ]
    }

    var reqPreferences = {
        'PreferencesRequest':[
        {
            'prefIsSmoker'      : '',
            'prefGender'        : ''
        }
        ]
    }

    var reqPassword = {
        'PasswordRequest':[
        {
            'passwordOld'       : '',
            'password'          : ''
        }
        ]
    }

    /* ------ public variabeles and methods ------ */
    return {
        
        setAllData : function (profile){
            reqProfile.ProfileRequest[0]._id = profile._id;
            reqProfile.ProfileRequest[0].preferences = profile.preferences;
            reqProfile.ProfileRequest[0].pictures = profile.pictures;
            reqProfile.ProfileRequest[0].favouritesList = profile.favouritesList;
            reqProfile.ProfileRequest[0].firstName = profile.firstName;
            reqProfile.ProfileRequest[0].lastName = profile.lastName;
            reqProfile.ProfileRequest[0].dateOfBirth = profile.dateOfBirth;
            reqProfile.ProfileRequest[0].email = profile.email;
            reqProfile.ProfileRequest[0].mobilePhoneNumber = profile.mobilePhoneNumber;
            reqProfile.ProfileRequest[0].fixedPhoneNumber = profile.fixedPhoneNumber;
            reqProfile.ProfileRequest[0].streetAddress = profile.streetAddress;
            reqProfile.ProfileRequest[0].zipCode = profile.zipCode;
            reqProfile.ProfileRequest[0].city = profile.city;
            reqProfile.ProfileRequest[0].isSmoker = profile.isSmoker;
            reqProfile.ProfileRequest[0].licenseDate = profile.licenseDate;
            reqProfile.ProfileRequest[0].carColour = profile.carColour;
            reqProfile.ProfileRequest[0].carBrand = profile.carBrand;
            reqProfile.ProfileRequest[0].carBuildYear = profile.carBuildYear;
            reqProfile.ProfileRequest[0].carPlateNo = profile.carPlateNo;
            reqProfile.ProfileRequest[0].gender = profile.gender;
            reqProfile.ProfileRequest[0]._revision = profile._revision;
            reqProfile.ProfileRequest[0]._v = profile._v;
        },
        setDateOfBirth : function(dateofbirth){
            reqProfile.ProfileRequest[0].dateOfBirth = dateofbirth;
        },

        getDateOfBirth : function(){
            return reqProfile.ProfileRequest[0].dateOfBirth;
        },

        setEmail : function(mailaddress){
            reqProfile.ProfileRequest[0].email = mailaddress;
        },

        getEmail : function(){
            return reqProfile.ProfileRequest[0].email;
        },

        setMobilePhoneNumber : function(mobileno){
            reqProfile.ProfileRequest[0].mobilePhoneNumber = mobileno;
        },

        getMobilePhoneNumber : function(){
            return reqProfile.ProfileRequest[0].mobilePhoneNumber;
        },

        setFixedPhoneNumber : function(phoneno){
            reqProfile.ProfileRequest[0].fixedPhoneNumber = phoneno;
        },

        getFixedPhoneNumber : function(){
            return reqProfile.ProfileRequest[0].fixedPhoneNumber;
        },

        setStreetAddress : function(street){
            reqProfile.ProfileRequest[0].streetAddress = street;
        },

        getStreetAddress : function(){
            return reqProfile.ProfileRequest[0].streetAddress;
        },

        setZipCode : function(zip){
            reqProfile.ProfileRequest[0].zipCode = ""+zip;
        },

        getZipCode : function(){
            return reqProfile.ProfileRequest[0].zipCode;
        },

        setCity : function(city){
            reqProfile.ProfileRequest[0].city = city;
        },

        getCity : function(){
            return reqProfile.ProfileRequest[0].city;
        },

        setIsSmoker : function(issmoker){
            reqProfile.ProfileRequest[0].isSmoker = issmoker;
        },

        getIsSmoker : function(){
            return reqProfile.ProfileRequest[0].isSmoker;
        },

        setLicenseDate : function(licensedate){
            reqProfile.ProfileRequest[0].licenseDate = licensedate;
        },

        getLicenseDate : function(){
            return reqProfile.ProfileRequest[0].licenseDate;
        },

        setCarColour : function(carColour){
            reqProfile.ProfileRequest[0].carColour = carColour;
        },

        getCarColour : function(){
            return reqProfile.ProfileRequest[0].carColour;
        },

        setCarBrand : function(carBrand){
            reqProfile.ProfileRequest[0].carBrand = carBrand;
        },

        getCarBrand : function(){
            return reqProfile.ProfileRequest[0].carBrand;
        },

        setCarBuildYear : function(carBuildYear){
            reqProfile.ProfileRequest[0].carBuildYear = carBuildYear;
        },

        getCarBuildYear : function(){
            return reqProfile.ProfileRequest[0].carBuildYear;
        },

        setCarPlateNo : function(carPlateNo){
            reqProfile.ProfileRequest[0].carPlateNo = carPlateNo;
        },

        getCarPlateNo : function(){
            return reqProfile.ProfileRequest[0].carPlateNo;
        },

        getProfileRequest : function(){
            return reqProfile.ProfileRequest[0];
        },


        setPrefIsSmoker : function (prefissmoker){
            reqPreferences.PreferencesRequest[0].prefIsSmoker = prefissmoker;
        },

        getPrefIsSmoker : function (){
            return reqPreferences.PreferencesRequest[0].prefIsSmoker;
        },

        setPrefGender : function (prefgender){
            reqPreferences.PreferencesRequest[0].prefGender = prefgender;
        },

        getPrefGender : function (){
            return reqPreferences.PreferencesRequest[0].prefGender;
        },

        getPreferencesRequest : function(){
            return reqPreferences;
        },

        setPasswordOld : function (passwordold){
            reqPassword.PasswordRequest[0].passwordOld = passwordold;
        },

        getPasswordOld : function (){
            return reqPassword.PasswordRequest[0].passwordOld;
        },

        setPassword : function (password){
            reqPassword.PasswordRequest[0].password = password;
        },

        getPassword : function (){
            return reqPassword.PasswordRequest[0].password;
        },

        getPasswordRequest : function(){
            return reqPassword;
        }

    };
}();

