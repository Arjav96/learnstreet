// This function takes a string as input, separates up the values found between the commas and returns an array of those values.
function separateCommaValues(text)
    {
        // REPLACE THIS CODE WITH YOUR separateCommaValues() METHOD
        var res = [];
        res = text.split(",");
        return res;
    }

// This function extracts local and domain portions of an email address
function extractLocalDomain(str)
    {
        // REPLACE THIS CODE WITH YOUR extractLocalDomain() METHOD
        var res = [];
        var local = str.split("@");
        var name = "";
        for (var i = 0; i < local[0].length; ++i) {
            var ch = local[0].charAt(i);
            if (ch != " ") {
                name += ch;
            } 
        }
        var domain = "";
        for (var i = 0; i < local[1].length; ++i) {
            var ch = local[1].charAt(i);
            if (ch != " ") {
                domain += ch;
            } else {
                break;
            }
        }
        res.push(name);
        res.push(domain);
        return res;
    }


// This function checks if the local portion of an email is valid
function isValidLocal(str)
	{
        // REPLACE THIS CODE WITH YOUR isValidLocal() METHOD
        var ch = str.charAt(0);
        if (ch == "." || ch == "_") {
            return false;
        }
        for(var i = 1; i < str.length; ++i) {
            var ch = str.charAt(i);
            var valid = ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") 
            || (ch >= "0" && ch <= "9") || ch == "." || ch == "_");
            if (!valid) {
                return false;
            }
        }
        return true;
	}
  
// No need to modify this function
// This function checks if the domain portion of an email is valid
function isValidDomain(str){
    flag_dot = 0
    hiphen = 0
    var len = str.length;
    if ( len > 0 )
        {
    	// Can't start with a dot or an underscore
		if ( str[0]!='.' && str[0]!='_' && str[len-1]!= '.')
			{
			// Everything else should be alphabet, number or '.' or '_'
			var ctr=0;
			while (ctr < len && ( (str[ctr] >= 'A' && str[ctr] <= 'Z') || (str[ctr] >= 'a' && str[ctr] <= 'z') || ( str[ctr] >= '0' && str[ctr] <= '9') || str[ctr] == '.' || str[ctr] == '-' ))
				{
                    if(str[ctr] == '.') flag_dot += 1
                    if(str[ctr] == '-') hiphen += 1
				ctr++;
				}
			if (ctr==len && flag_dot == 1 && hiphen <= 1)
				{
				return true;
				}
			}
		}
	return false;
}
    
// No need to modify this function
function run(input_val){
    result = []
    local = ""
    emails = separateCommaValues(input_val)
    for(i=0; i<emails.length;i++){
        local_domain = extractLocalDomain(emails[i])
        if(isValidLocal(local_domain[0]) && isValidDomain(local_domain[1])){
            result.push(local_domain)
        }
    }
    return result;
}