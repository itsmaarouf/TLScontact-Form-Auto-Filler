# Quick TLScontact France Form Filler

This script is designed to help individuals fill out the TLScontact France appointment form quickly and efficiently. TLScontact deletes personal data every 10 days, making it cumbersome to re-enter information repeatedly. By using this script, you can save time and effort by automating the data entry process for commonly required fields.

## Features

- Automatically fills out personal information, passport details, and travel dates on the TLScontact France form.
- Dynamically generates buttons for multiple users, enabling quick selection of pre-saved data.
- Automatically calculates a default travel date (30 days from the current date).
- The generated button panel stays fixed at the top of the page for easy access, even while scrolling.

## Installation and Usage

### Copy the Code&colon;

Copy the JavaScript code provided in `script.js`.

### Integrate the Script&colon;

1. Use a browser extension like **Tampermonkey** or **Greasemonkey** to run the script on the TLScontact France form page.
2. Alternatively, paste the script into your browser console while on the form page.

### Customize Data&colon;

Update the `persons` array with your own details. Each object should include:

- `name` (Full name)
- `ref` (Reference number)
- `lastName` (Surname)
- `firstName` (Given name)
- `birth` (Date of birth in `YYYY-MM-DD` format)
- `passType` (Passport type, e.g., `ordinary_passport`)
- `passNum` (Passport number)
- `mobile` (Mobile number with country code)

### Run the Script&colon;

1. Once the script is loaded, buttons for each user will appear at the top of the page.
2. Click on a user’s button to auto-fill the form with their details.

## How It Works

### Key Functions&colon;

#### `fillForm(person)`

This function:

- Auto-fills form fields with the selected user's data.
- Calculates and sets a travel date 30 days in the future.

#### `createButtons()`

This function:

- Dynamically creates a button for each user in the `persons` array.
- Ensures the button container remains visible at the top of the page.

#### `setValueAndDispatchEvent()`

A utility function to:

- Set values in input fields.
- Trigger events to ensure the form recognizes the changes.

## Customization

### Adding More Users&colon;

Add new user objects to the `persons` array following the existing structure.

### Changing Travel Date&colon;

Update the logic inside the `travelDate` variable calculation in the `fillForm` function to customize the default travel date.

## Disclaimer

This script is provided as-is for personal use to streamline form filling. Ensure compliance with TLScontact France's terms of service and data protection regulations when using this tool. Use at your own discretion.

## License

This project is licensed under the MIT License.
