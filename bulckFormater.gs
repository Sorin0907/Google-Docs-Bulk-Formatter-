/**
 * Google Docs Bulk Formatter
 *
 * This script automates the process of changing specific font styles, colors, and font families in a Google Doc.
 * It allows you to target specific fonts and apply new styles such as italics, bold, and underline.
 *
 * @constant {string} FONT_TO_CHANGE - The font family to be replaced.
 * @constant {string} NEW_FONT - The new font family to apply.
 * @constant {string} NEW_COLOR - The new text color in hex.
 * @constant {boolean} MAKE_ITALIC - Set to true to apply italics, false otherwise.
 * @constant {boolean} MAKE_BOLD - Set to true to apply bold, false otherwise.
 * @constant {boolean} MAKE_UNDERLINE - Set to true to apply underline, false otherwise.
 */
function changeSpecificFormatting() {
  // Configuration variables: Set these to your desired values
  const FONT_TO_CHANGE = 'Roboto Mono';
  const NEW_FONT = 'Arial';
  const NEW_COLOR = '#000000';
  const MAKE_ITALIC = true;
  const MAKE_BOLD = false;
  const MAKE_UNDERLINE = false;

  const body = DocumentApp.getActiveDocument().getBody();
  const totalElements = body.getNumChildren();

  // Iterate through each element in the document
  for (let i = 0; i < totalElements; i++) {
    const element = body.getChild(i);

    // Process only text elements (paragraphs or text blocks)
    if (element.getType() === DocumentApp.ElementType.PARAGRAPH || 
        element.getType() === DocumentApp.ElementType.TEXT) {
      const textElement = element.asText();
      formatSpecifiedFontText(textElement, FONT_TO_CHANGE, NEW_FONT, NEW_COLOR, MAKE_ITALIC, MAKE_BOLD, MAKE_UNDERLINE);
    }
  }
}

/**
 * Formats specific text sections that match the specified font.
 *
 * @param {Text} textElement - A text element from the document to be processed.
 * @param {string} fontToChange - The font family to search for.
 * @param {string} newFont - The new font family to apply.
 * @param {string} newColor - The new text color in hex.
 * @param {boolean} makeItalic - Apply italics if true.
 * @param {boolean} makeBold - Apply bold if true.
 * @param {boolean} makeUnderline - Apply underline if true.
 */
function formatSpecifiedFontText(textElement, fontToChange, newFont, newColor, makeItalic, makeBold, makeUnderline) {
  const text = textElement.getText();
  const length = text.length;
  let start = -1;
  
  // Iterate over each character in the text element
  for (let i = 0; i < length; i++) {
    const fontFamily = textElement.getFontFamily(i);

    // Detect the start of a section with the target font
    if (fontFamily === fontToChange) {
      if (start === -1) {
        start = i; // Mark the beginning of the font section
      }
    } else if (start !== -1) {
      // Apply formatting when the section ends
      applyFormatting(textElement, start, i - 1, newFont, newColor, makeItalic, makeBold, makeUnderline);
      start = -1; // Reset start after applying formatting
    }
  }
  
  // Check if the last part of the text needs formatting
  if (start !== -1) {
    applyFormatting(textElement, start, length - 1, newFont, newColor, makeItalic, makeBold, makeUnderline);
  }
}

/**
 * Applies the specified formatting options to a range of text.
 *
 * @param {Text} textElement - A text element from the document to be processed.
 * @param {number} start - The starting index of the text range.
 * @param {number} end - The ending index of the text range.
 * @param {string} newFont - The new font family to apply.
 * @param {string} newColor - The new text color in hex.
 * @param {boolean} makeItalic - Apply italics if true.
 * @param {boolean} makeBold - Apply bold if true.
 * @param {boolean} makeUnderline - Apply underline if true.
 */
function applyFormatting(textElement, start, end, newFont, newColor, makeItalic, makeBold, makeUnderline) {
  textElement.setFontFamily(start, end, newFont);
  textElement.setForegroundColor(start, end, newColor);

  // Apply styles based on configuration using ternary operators
  textElement.setItalic(start, end, makeItalic !== undefined ? makeItalic : false);
  textElement.setBold(start, end, makeBold !== undefined ? makeBold : false);
  textElement.setUnderline(start, end, makeUnderline !== undefined ? makeUnderline : false);
}
