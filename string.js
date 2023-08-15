//This FIle contains js functions related to String
/**
 * 
 * @param {*} str 
 * @returns 
 */
function lowerCase(str){
    return str.toLowerCase();
}

/**
 * This Function joins 2 String
 * @param {*} str1 
 * @param {*} str2 
 * @returns a single String
 */
function concatenate(str1,str2){
    return str1+str2
}
/**
 * This function reverses a string.
 * @param {string} str 
 * @returns the result.
 */
function ReverseString(str) {
    return str.split('').reverse().join('')
}