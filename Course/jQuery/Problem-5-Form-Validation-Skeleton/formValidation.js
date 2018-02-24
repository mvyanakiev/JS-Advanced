function validate() {
    // TODO form validation
    
    let validUserName = false;
    let validEmail = false;
    let validPassword = false;
    let validConfirmPassword = false;
    let validCompanyNumber = false;

    let userName = $("#username");
    let email = $("#email");
    let userPassword = ("#password");
    let confirmPassowrd = ("#confirm-password");
    let checkBoxCompany = $('#company');
    let CompanyNumber = $('#companyNumber');



    checkBoxCompany.on('click', function () {
        if (checkBoxCompany.prop('checked') === true) {
            $('#companyInfo').css("display", "")
        } else {
            $('#companyInfo').css("display", "none")
        }
    });

    userName.on('change', function () {
        let value = userName.val();
        console.log('user name = ' + value);
        validUserName = true;
    });





    $('#submit').on('click', function (ev) {
        ev.preventDefault();




        if (checkBoxCompany.prop('checked') === true) {
            if (CompanyNumber.val() >= 1000 && CompanyNumber.val() <= 9999) {
                alert('tuka triabva neshto da napravim');
            }
        } else {
            validCompanyNumber = true
        }








        if (!validUserName) {
            $("#username").css("border-color", "red")
        }

        if (validUserName && validCompanyNumber) {
            $('#valid').css("display", "")
        }

    });



}







