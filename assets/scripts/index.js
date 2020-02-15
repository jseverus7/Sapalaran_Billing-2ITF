/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

const shipNameInput = document.getElementById('shippingName');
const zipCodeInput = document.getElementById('shippingZip');
const billingNameInput = document.getElementById('billingName');
const billingZipInput = document.getElementById('billingZip');
const checkbox = document.getElementById('same');

function billingFunction() 
{
    if(checkbox.checked)
    {
        billingNameInput.value = shipNameInput.value;
        billingZipInput.value = zipCodeInput.value;
    }
    else
    {
        billingNameInput.value = '';
        billingZipInput.value = '';
    }

    // if(!zipCodeInput.value === '')
    // {
    //     billingZipInput.value = zipCodeInput.value;
    // }
    // else
    // {
    //     billingZipInput.value = '';
    // }
}

//billingFunction();

