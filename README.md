# Google Docs Font Formatter

A versatile Google Apps Script for Google Docs that allows users to automate the process of changing specific font styles, colors, and font families according to user preferences. This script was created because Google Docs does not natively provide this functionality, and it is much faster than manually updating text in multiple places.

## Features

- Target specific fonts in a Google Docs document and change them to a new font, color, and style.
- Configurable settings for font type, text color, and styles such as italics, bold, and underline.
- Easy to integrate and use with any Google Docs document.

## Setup

### Prerequisites

- Google Account
- Access to Google Docs and Google Apps Script

### Installation

1. **Open Your Google Document**:
   - Open the Google Doc you want to apply the script to.

2. **Access Google Apps Script Editor**:
   - Click on `Extensions` in the menu.
   - Select `Apps Script`.

3. **Add the Script**:
   - Delete any existing code in the editor.
   - Copy and paste the contents of `fontFormatter.gs` into the script editor.

4. **Configure the Script**:
   - Set the following constants in the script:
     - `FONT_TO_CHANGE`: Specify the font you want to target (e.g., `'Roboto Mono'`).
     - `NEW_FONT`: The font you want to apply (e.g., `'Arial'`).
     - `NEW_COLOR`: The hex color code you want to apply (e.g., `'#000000'` for black).
     - `MAKE_ITALIC`: Set to `true` to apply italics, `false` otherwise.
     - `MAKE_BOLD`: Set to `true` to apply bold, `false` otherwise.
     - `MAKE_UNDERLINE`: Set to `true` to apply underline, `false` otherwise.

5. **Run the Script**:
   - Click the Run button in the Apps Script editor.
   - Authorize the script to run if prompted.

## Usage

Modify the constants at the start of the script to alter the font, style, and color changes as desired. Run the script to automatically apply these changes to all occurrences of the specified font in your document.

## Motivation

While working on my EPA project, for my Level 4 Software Development Apprenticeship, I decided to change the style of some highlighted words. Google Docs' lack of a bulk formatting feature meant that each change had to be done manually, which was both time-consuming and prone to error. The repetitive nature of this task was BORING. 

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for guidance and inspiration.
