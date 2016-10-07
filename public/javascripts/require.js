function validateMyForm() {

  if (parseInt(document.forms[0].phoneNumber.value)

      != document.forms[0].phoneNumber.value) {

    alert('Please enter a phone number, numbers only');

    return false;

  }
  if (parseInt(document.forms[0].amountNeeded.value)

      != document.forms[0].amountNeeded.value) {

    alert('Please enter a valid amount, numbers only');

    return false;

  }
  if (parseInt(document.forms[0].yearsInBusiness.value)

      != document.forms[0].yearsInBusiness.value) {

    alert('Please enter valid years in business, numbers only');

    return false;

  }
  if (parseInt(document.forms[0].fullName.value) === "") {

    alert('Full Name field cannot be empty');

    return false;

  }
  if (parseInt(document.forms[0].companyName.value) === "") {

    alert('Company Name field cannot be empty');

    return false;

  }
  if (parseInt(document.forms[0].amountNeeded.value) === "") {

    alert('Amount Needed field cannot be empty');

    return false;

  }
  if (parseInt(document.forms[0].yearsInBusiness.value) === "") {

    alert('Years In Business field cannot be empty');

    return false;

  }
  if (parseInt(document.forms[0].phoneNumber.value) === "") {

    alert('Phone Number field cannot be empty');

    return false;

  }
  if (parseInt(document.forms[0].emailAddress.value) === "") {

    alert('Email Address field cannot be empty');

    return false;

  }

  return true;

}