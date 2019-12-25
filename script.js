//---------------------------------------------------QUESTION1-------------------------------------------------------
//Clean the room function: given an input of [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20 ,20], 
//make a function that organizes these into individual array that is ordered.
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return 
//[[1,2], ["2", "3"]]
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//---------------------------------------------WHAT'S BEING ASKED ?--------------------------------------------------
//This function must order an array and put similar values in a sub array traiting strings and number differently
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//----------------------------------------------------PLAN-----------------------------------------------------------
//Given input X, what are the steps necessary to return output Y?
//-->step1: take X and return Y1: array with string data type,  and Y2: array with number data type
//          X = [100, 2, "20", "3", 100, 3, 2, "1", 1, "3", 2, 2]
//          Y1 = ["20", "3", "1", "3"]
//          Y2 = [100, 2, 100, 3, 2, 1, 2, 2]
//-->step2: take Yi(i=1 or 2) and return an ordered array Zi(i=1 or 2)
//          Z1 = ["1", "3", "3", "20"]
//          Z2 = [1, 2, 2, 2, 2, 3, 100, 100]
//-->step3: take Zi(i=1 or 2) and return an array Ti(i=1 or 2) that organise similar values into array inside the 
//          orignial array
//          T1 = ["1", ["3", "3"], "20"]
//          T2 = [1, [2, 2, 2, 2], 3, [100, 100]]
//-->step4: take Ti(i=1 or 2) and return a contatenated array Y of T1 and T2
//          Y = [1, [2, 2, 2, 2], 3, [100, 100], "1", ["3", "3"], "20"]
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//--------------------------------------step1: function sortNumberString---------------------------------------------
//1. --> function sortNumberString-:
//   A.--> Make two arrays each one contains a type of data: 
//         stringArr contains strings, 
//         numberArray contains numbers
//   B.--> Return an array which contains numberArr and stringArr
//   B.--> Order both arrays
//   C.--> Return an array which contains numberArr and stringArr

let sortNumberString = (arr) => {
    //filter() array method is used to filter "string" and "number" data types

    let numberArr = (arr.filter(item => typeof (item) == "number")).sort(function (a, b) {
        return a - b
    });
    let stringArr = (arr.filter(item => typeof (item) == "string")).sort(function (a, b) {
        return a - b
    });
    return [
        numberArr,
        stringArr
    ];
}

//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//------------------------------------------step2: function orderArray-----------------------------------------------
//1. --> function orderArray:
//   A.--> Order both an array and return it

let orderArray = (arr) => {
    //Then sort() method sorts each array
    let orderedArr = arr.sort(function (a, b) { return a - b });
    return orderedArr;
}
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//------------------------------------------step3: function organiseArr-----------------------------------------------
//2. --> function organiseArr 
//   A. --> check if there are similar items in an array and if there are, put them in a new one
//   B. --> put all new arrays and uniques values into a parent array
//   C. --> return the parent array
let organiseArr = (arr) => {
    //To be able to determine the beginning and the ending of the similar values, a for loop with indexs is used
    //j and k are respectively index of beginning and ending
    //if there are similar values, using j and k indexs we push them into the parent array using slice() method
    //if it's an unique value, we push it too without slice() method (so it will not be considered as an array)
    let j = 0;
    let k = 0;
    let parentArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            k = i;
            ((k + 1) - j > 1) ? parentArr.push(arr.slice(j, k + 1)): parentArr.push(arr[j]);
            j = i + 1;
        }
    }
    return parentArr;
}

//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//--------------------------------------------step4: function answer-------------------------------------------------
//3. --> function answer:
//   A. --> uses the previous 3 functions to return an ordered array (strings and numbers  considered differently)
let answer = (arr) => {
    //concat() method is used to concat string array and number array
    return organiseArr(orderArray(sortNumberString(arr)[0])).concat(organiseArr(orderArray(sortNumberString(arr)[1])));
}
//-------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------QUESTION2-------------------------------------------------------
// Write a javascript function that takes an array of numbers and a target number. The function should find two 
// different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)
//should return [1,3]
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//---------------------------------------------WHAT'S BEING ASKED ?--------------------------------------------------
//Write a function that :
// --> takes as inputs an array and a target number
// --> look for two diffent numbers in the array that when summed give the target number
// --> return an array containg theses two numbers
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//----------------------------------------------------PLAN-----------------------------------------------------------
//Given input X, what are the steps necessary to return output Y?
//-->step1: take the array A and the target number TN and start comparing the sum of the array numbers with TN.
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//-----------------------------------------step1: function lookInAnArray---------------------------------------------
//1. --> function lookInAnArray:

let lookInAnArray = (arr, TN) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === TN) {
                return [arr[i], arr[j]];
            }
        }
    }

    return `We can't find numbers a and b in the given array that satisfies: a + b = ${TN}`;
}

//--------------------------------------------------QUESTION3-------------------------------------------------------
//Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if 
//you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//---------------------------------------------WHAT'S BEING ASKED ?--------------------------------------------------
//Write a function that :
// --> Convert HEX to RGB
// --> Convert RGB to HEX (color format auto-detect)
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//----------------------------------------------------PLAN-----------------------------------------------------------
//Given input X, what are the steps necessary to return output Y?
//-->step1: take X (RGB or HEX) and verify if X is RGB or HEX format
//-->step2: if X is HEX, converts to RGB 
//-->step3: if X is RGB, converts to HEX
//-->step4: function calling the three previous functions
//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//-----------------------------------------step1: function detectHexRGB----------------------------------------------
//1. --> function detectHexRGB:
//   A. 
let detectHexRgb = (color) => {
    if (color.includes("#")) {
        return 1;
    } else if (color.includes("rgb")  ||  color.includes("RGB")) {
        return 0;
    } 
}

//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//-----------------------------------step2: function convertHexToRgb-------------------------------------------------

let convertHexToRgb = (hexColor) => { //hexColor = "#R1R2G1G2B1B2";
    let colorPart = hexColor.split("#")[1].split(""); //==> ["R1", "R2", "G1", "G2", "B1", "B2"]
    let objHexCode = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    }

    let correspandanceArr = Object.entries(objHexCode);
    let newHexCode = [];
    for (item of colorPart) {
        for (let i = 0; i < correspandanceArr.length; i++) {
            if (item === correspandanceArr[i][0]) {
                newHexCode.push(correspandanceArr[i][1])
            }
        }
    }

    let R = newHexCode[0] * 16 + newHexCode[1];
    let G = newHexCode[2] * 16 + newHexCode[3];
    let B = newHexCode[4] * 16 + newHexCode[5];

    return `rgb(${R}, ${G}, ${B})`;

}

//-------------------------------------------------------------------------------------------------------------------
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//-----------------------------------step3: function convertRgbToHex-------------------------------------------------


let convertRgbToHex = (rgbColor) => { //hexColor = "rgb(R, G, B)"";
    let colorPart = rgbColor.split("(")[1].split(")")[0].split(",");
    let objHexCode = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    }

    let correspandanceArr = Object.entries(objHexCode);
    let newRgbCode = [];



    for (let i = 0; i < colorPart.length; i++) {
        newRgbCode.push((+colorPart[i] - +colorPart[i] % 16) / 16);
        newRgbCode.push(+colorPart[i] % 16);
    }


    let rgbCode = [];
    for (item of newRgbCode) {
        for (let i = 0; i < correspandanceArr.length; i++) {
            if (item === correspandanceArr[i][1]) {
                rgbCode.push(correspandanceArr[i][0])
            }
        }
    }


    return "#".concat(rgbCode.join(""));

}

let convert = (colorCode) => {
    if (detectHexRgb(colorCode) === 1) {
        return convertHexToRgb(colorCode);
    } else if (detectHexRgb(colorCode) === 0) {
        return convertRgbToHex(colorCode);
    } else return `the color format of ${colorCode} is incorrect `;
}



//test of functions
//Function 1
const arr = ["2", 4, 77, 12, "3", 44, "0", "55", 77, 4, 1, "20", "55", "2", "2"];
console.log(arr, answer(arr));

//Function 2
const arr1 = [40, 22, 14, 3, 5];
console.log(arr1, lookInAnArray(arr1, 45));

//Function 3
const hexColorCode = "#FF56EF";
const rgbColorCode = "rgb(255, 86, 239)";
console.log(hexColorCode, convert(hexColorCode));
console.log(rgbColorCode, convert(rgbColorCode));