function validate() {

    let userName = $("#username");
    let email = $("#email");
    let userPassword = $("#password");
    let confirmPassowrd = $("#confirm-password");
    let checkBoxCompany = $('#company');
    let CompanyNumber = $('#companyNumber');


    checkBoxCompany.on('click', function () { //todo валидацията да мине на on.click при Submit и като цяло не работи
        if (checkBoxCompany.prop('checked') === true) {
            $('#companyInfo').css("display", "block")
        } else {
            $('#companyInfo').css("display", "")
        }
    });


    $('#submit').on('click', function (ev) {
        ev.preventDefault();


        let validUserName = false;
        let validEmail = false;
        let validPassword = false;
        let validConfirmPassword = false;
        let validCompanyNumber = false;

        const userNamePattern = /^[a-zA-Z0-9]+$/gm;
        const emailPattern = /.+@.+\.+.*/g;
        const userPasswordPattern = /^[_a-zA-Z]+$/gm;


        if (checkBoxCompany.prop('checked') === true &&
            CompanyNumber.val() >= 1000 &&
            CompanyNumber.val() <= 9999) {
            validCompanyNumber = true
        }

        if (checkBoxCompany.prop('checked') === false) {
            validCompanyNumber = true
        }


        if (userNamePattern.test(userName.val()) &&
            (userName.val()).length >= 3 &&
            (userName.val()).length <= 20) {
            validUserName = true;
            userName.css("border", "none");
        } else {
            userName.css("border", "solid red");
        }

        if (emailPattern.test(email.val())) {
            validEmail = true;
            email.css("border", "none");
        } else {
            email.css("border", "solid red");
        }


        if (userPasswordPattern.test(userPassword.val()) &&
            (userPassword.val()).length >= 5 &&
            (userPassword.val()).length <= 15) {
            validPassword = true;
            userPassword.css("border", "none");
        } else {
            userPassword.css("border", "solid red");
        }

        let x = (confirmPassowrd.val().toString()).localeCompare(userPassword.val().toString());

        if (validPassword && x === 0) {
            validConfirmPassword = true;
            confirmPassowrd.css("border", "none");
        } else {
            confirmPassowrd.css("border", "solid red");
        }


        if (validUserName && validCompanyNumber && validEmail && validPassword && validConfirmPassword) {
            $('#valid').css("display", "")
        }

    });


}