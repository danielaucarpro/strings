// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

const stringLib = () => {

    function concatanate(a, b) {
        // append one string to another
        console.log("Your first word is: " + a);
        console.log("Your second word is: " + b);
        let res = a.concat(b);
        return document.getElementById('conc').innerHTML = res.trim();
    }
    concatanate("Hello", "World");

    function ASCIINumberToChar(Number) { //ascii is a number that computers understand as some char, number or function
        // take one number, say, 127 and convert it to its ASCII char representation
        console.log('Your number to convert is: ' + Number);
        let res = String.fromCharCode(Number)
        return document.getElementById('ascii').innerHTML = res;
    }
    ASCIINumberToChar(420);

    function CharToAsciiNumber(aChar) {
        // take one Character, say, 'A' and convert it to it's Number representation

        //charAt and charCadoAt pick a character inside a word just like a array. Meaning that the first character in the word will be index "0"
        let charPicked = aChar.charAt(2);
        console.log("Char picked is: " + charPicked + " from " + aChar);
        return document.getElementById('charToNum').innerHTML = aChar.charCodeAt(2);
    }
    CharToAsciiNumber('character');

    function ReverseString(origionalString) {
        // return a string, ie: Hello becomes olleH
        console.log('String to be reversed: ' + origionalString);
        //here we are spliting the string given, which means we are transforming the string into array
        //then we are reversing this array order
        //finally we a joining this new reversed array back to string again
        return document.getElementById('reverse').innerHTML = origionalString.split('').reverse('').join('');
    }
    ReverseString('hello');

    function GenerateOnlyUpperCase(string) {
        //Ie: A,B,C,D,E,F,G...Z
        console.log("String to upper case: " + string);
        return document.getElementById('upCase').innerHTML = string.toUpperCase();
    }
    GenerateOnlyUpperCase('hello');

    function GenerateOnlyLowerCase(string) {
        //Ie: a,b,c,d,e,f,g...z
        console.log("String to lower case: " + string);
        return document.getElementById('lowCase').innerHTML = string.toLowerCase();
    }
    GenerateOnlyLowerCase('HELLO');

    function GenerateOnlyNumbers() {
        //Ie: 0,1,2,3...9

        //In order to understand what we are tipying, we "taught" the computers how they should understand when we press a input
        //That means for each symbol, letter or number we have a code for that. 
        // for example: if we press the input "0" the computer will read this input as 48 (according to ASCII table)
        //so if we want to generate only number we have to look for all the codes, from ASCII, which will return a number for us.
        //that is why we are looping from 48 to 57, then showing this with console.log
        console.log('Showing numbers');
        for (let i = 48; i <= 57; i++) {
           console.log(String.fromCharCode(i));
        }
        document.getElementById('onlyNum').innerHTML = "Look at the console";
    }
    GenerateOnlyNumbers();

    function GenerateOnlySymbols() {
        //Ie: $, %, !, #, etc
        console.log('Showing symbols');
        for(let i = 33; i<= 47; i++){
            console.log(String.fromCharCode(i));
        }
        for(let i = 58; i<= 64; i++){
            console.log(String.fromCharCode(i));
        }
        for(let i = 91; i<= 96; i++){
            console.log(String.fromCharCode(i));
        }
        for(let i = 123; i<= 126; i++){
            console.log(String.fromCharCode(i));
        }
        document.getElementById('symbols').innerHTML = "Look at the console";
    }
    GenerateOnlySymbols();

    function GenerateUpperAndLowerCase(string) {
        //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
        console.log('Your word is: ' + string);
        document.getElementById('up').innerHTML = GenerateOnlyUpperCase(string);
        document.getElementById('lower').innerHTML = GenerateOnlyLowerCase(string);
    }
    GenerateUpperAndLowerCase('genERAte');
}