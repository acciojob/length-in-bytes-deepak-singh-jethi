const byteSize = (str) => {
  
	// Encode the string using UTF-8 encoding
  const encodedString = new TextEncoder().encode(str);
  
  // Return the size of the encoded string in bytes
  return encodedString.length;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
