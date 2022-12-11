module.exports = {
    buySelector: '#buy-now-button',
    addrSelectors: [
        '#address-ui-widgets-enterAddressFullName',
        '#address-ui-widgets-enterAddressPhoneNumber',
        '#address-ui-widgets-enterAddressLine1',
        '#address-ui-widgets-enterAddressLine2',
        '#address-ui-widgets-enterAddressCity',
        '#address-ui-widgets-enterAddressPostalCode',
        '#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId',
        '#address-ui-widgets-countryCode-dropdown-nativeId'
    ],
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