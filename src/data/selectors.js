module.exports = {
    buySelector: '#buy-now-button',
    shippingSelectors: {
        fullName: '#address-ui-widgets-enterAddressFullName',
        phone: '#address-ui-widgets-enterAddressPhoneNumber',
        addr1: '#address-ui-widgets-enterAddressLine1',
        addr2: '#address-ui-widgets-enterAddressLine2',
        city: '#address-ui-widgets-enterAddressCity',
        postalCode: '#address-ui-widgets-enterAddressPostalCode',
        regDrop: '#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId',
        regInput: '#address-ui-widgets-enterAddressStateOrRegion',
        countryDrop: '#address-ui-widgets-countryCode-dropdown-nativeId'
    },
    shippingSubmits: {
        '1': '#address-ui-widgets-form-submit-button-announce',
        '2': '[aria-labelledby="shipToThisAddressButton-announce"]'
    },
    paymentSelectors: {
        cardNumber: '[name="addCreditCardNumber"]',
        nameOnCard: '[name="ppw-accountHolderName"]',
        selectExpirationDateMonth: '[name="ppw-expirationDate_month"]',
        selectExpirationDateYear: '[name="ppw-expirationDate_year"]',
        addCard: '[class="a-button a-button-primary pmts-button-input"]'
    },
    loginSelectors: {
        emailInput: '#ap_email',
        continueBtn: '#continue',
        passwordInput: '#ap_password',
        submitBtn: '#signInSubmit'
    }
}