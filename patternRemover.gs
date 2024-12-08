/**
 * Pattern Remover Script
 *
 * This script finds and removes occurrences of the pattern "in Appendix <letter> " (including a trailing space) from a Google Doc.
 * It maintains the document's original formatting while removing the specified text.
 *
 * @constant {RegExp} searchPattern - A regular expression to match "in Appendix <letter> ".
 */
function removeInAppendixPattern() {
  const body = DocumentApp.getActiveDocument().getBody();
  const searchPattern = /in Appendix \w\s/g;

  // Get the total number of elements in the document
  const totalElements = body.getNumChildren();
  
  // Iterate over each element in the document
  for (let i = 0; i < totalElements; i++) {
    const element = body.getChild(i);
    
    // Process only text elements
    if (element.getType() === DocumentApp.ElementType.PARAGRAPH || 
        element.getType() === DocumentApp.ElementType.TEXT) {
      const textElement = element.asText();
      let text = textElement.getText();
      
      // Find all matches of the pattern
      let match;
      while ((match = searchPattern.exec(text)) !== null) {
        // Remove the matched text while maintaining other formatting
        textElement.deleteText(match.index, match.index + match[0].length - 1);
        
        // Update text for continued searching
        text = textElement.getText();
        
        // Reset the regex index for consecutive matches
        searchPattern.lastIndex = match.index;
      }
    }
  }
}