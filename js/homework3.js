function numberOperator(num1 , num2 , num3) {
    const result = num1 + num2 + num3;
    return result;
}

function returnMessages() {
    return 'Hello World';
}

function fullName(firstName , lastName) {
    const result = firstName + ' ' + lastName;
    return result;
}

function returnLongest(firstString , secondString , thirdString) {

    const firstStringLenght = firstString.length;
    const secondStringLenght = secondString.length;
    const thirdStringLenght = thirdString.length;

    /*
    In Case if Var Was allowed
    var maxLenght = firstStringLenght;

    if(secondStringLenght > maxLenght){
        maxLenght = secondStringLenght;
    }
    else if(thirdStringLenght > maxLenght){
        maxLenght = thirdStringLenght;
    }

    return maxLenght;
    */

   if (firstStringLenght > secondStringLenght && firstStringLenght> thirdStringLenght){
       const result = 'The longest string  is "' + firstString + '" And it contains "' + firstStringLenght + '" characters';
       return result;
   }
   else if (secondStringLenght > thirdStringLenght && secondStringLenght>firstStringLenght){
       const result = 'The longest string  is "' + secondString + '" And it contains "' + secondStringLenght + '" characters';
       return result;
   }
   else{
       const result = 'The longest string  is "' + thirdString + '" And it contains "' + thirdStringLenght + '" characters';
       return result;
   }
}

function compareNumbers(num1 , num2){
    if(num1 === num2){
        return 0;
    }
    else if ( num1 > num2){
        return 1;
    }
    else {
        return -1;
    }
}

function firstTrueStatement(statement1 , statement2 , statement3){
    if (statement1){
        return statement1;
    }
    else if (statement2) {
        return statement2;
    }
    else if (statement3){
        return statement2;
    }
    else{
        return 'Please Enter at least one True Statement'
    }
}