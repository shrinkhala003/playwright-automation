export const authPageSelectors = {
    button: {
        // iframe title contains 'Google' regardless of locale
        googleIframe: 'iframe[title*="Google"]',
        // button inside the iframe always has accessible name containing 'Google'
        signInWithGoogleButton: /google/i
    },

    heading: {
        welcomeHeading: 'WELCOME TO',
        toastMessage: /logged in/i
    }
}