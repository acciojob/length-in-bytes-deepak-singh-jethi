const byteSize = (str) => {
  
	 // Encode the string using UTF-8 encoding
    encoded_string = str.encode('utf-8');
	
    return len(encoded_string)
	
};

// Do not change the code below
const str = rompt("Enter some string.");
alert(byteSize(str));
