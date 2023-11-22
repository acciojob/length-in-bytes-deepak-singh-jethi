const byteSize = (str) => {
  
	// Encode the string using UTF-8 encoding
  const encodedString = new TextEncoder().encode(inputString);
  
  // Return the size of the encoded string in bytes
  return encodedString.length;
	
};

// Do not change the code below
const str = rompt("Enter some string.");
alert(byteSize(str));
