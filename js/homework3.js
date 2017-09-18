const firstName = 'Hovhannes';
const lastName = 'Zohrabyan';
const testString = 'HelloPeople';


function numberOperator(num1 , num2 , num3) {
    //TODO Rename function
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

function returnLongest(firstName , lastName , testString) {

    const firstStringLenght = firstName.length;
    const secondStringLenght = lastName.length;
    const thirdStringLenght = testString.length;

    const maxLenght = firstStringLenght;
    
    if(secondStringLenght > maxLenght){
        return secondStringLenght;
    }
    else if(thirdStringLenght > maxLenght){
        return secondStringLenght;
    }
    else {
        return maxLenght;
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
    else if (statement2){
        return statement2;
    }
    else if (statement3){
        return statement2;
    }
    else{
        return 'Please Enter at least one True Statement'
    }
}