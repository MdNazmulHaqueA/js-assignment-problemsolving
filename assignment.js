// https://github.com/MdNazmulHaqueA/js-assignment-problemsolving

// Problem 1 : Convert Kilometer to meter - function name kilometerToMeter
//Algorithm: 1km = 1000m

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Measuring unit cannot be less than 0! Positive input please...";
    } else {
        const meter = (kilometer * 1000).toFixed(2);
        return meter;
    }
}
var convertedMeter = kilometerToMeter(12);
console.log(convertedMeter);

/*
Problem 2 : Budget Calculator. 
Input : amount of watch, phone and laptop. 
Given: Cost => {watch - 50, phone - 100 and laptop - 500}
Output: total budget.
Function Name: budgetCalculator
 */

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Cannot Purchase Negative amount of products!";
    } else {
        var totalCost = watch * 50 + phone * 100 + laptop * 500;
        return totalCost;
    }
}

var budget = budgetCalculator(2, 1, 1);
console.log(budget);

/*
Problem 3 : Hotel Cost Calculator. 
Input : days of staying. 
Given: Cost => {first10days - 100/day, day11to20 - 80/day and moreThan20 - 50}
Output: total cost.
Function Name: hotelCost
 */

function hotelCost(days) {
    if (days < 0) {
        return "Minimum 1 day of staying in hotel is counted";
    } else if (days <= 10) {
        var cost = days * 100;
    } else if (days <= 20) {
        var cost = 10 * 100 + (days - 10) * 80; // 10 days cost = 10*100 and the rest day counted by days-10
    } else {
        var cost = 10 * 100 + 10 * 80 + (days - 20) * 50; // 20 days cost = 10*100 + 10 * 80 and the rest day counted by days-20
    }
    return cost;
}

var totalCost = hotelCost(21);
console.log(totalCost);

/*
Input: array with friends name
Output: the largest name
Function Name: megaFriend
*/

function megaFriend(friends) {
    //Array undefined or null inputs handled by placing the defined values in an empty array
    var definedNames = [];
    for (var i = 0; i < friends.length; i++) {
        if (typeof friends[i] != "undefined" && friends[i] != null) {
            definedNames.push(friends[i]);
        }
    }

    //Handling empty string or white space inputs [From googling -> stack_over_flow]
    var friendList = definedNames.filter(definedNames => definedNames.trim().length > 0);

    //remove extra white spaces in the array element [From googling -> stack_over_flow]
    var validNames = [];
    for (var i = 0; i < friendList.length; i++) {
        validNames.push(friendList[i].replace(/\s{2,}/g, " ").trim());
    }

    // To compare friend names we need at least 2 valid names.
    if (validNames.length < 2) {
        return "Require at lest two valid names to compare";
    }

    // We have valid names of array! Now finding to largest name by the following codes
    else {
        //finding the largest length of array element from validNames array
        var megaLength = validNames[0].length;
        for (var i = 0; i < validNames.length; i++) {
            if (validNames[i].length > megaLength) {
                megaLength = validNames[i].length;
            }
        }
        // placing the largest-same-size elements in a new array from the validNames array
        var megaName = [];
        for (var i = 0; i < validNames.length; i++) {
            if (validNames[i].length == megaLength) {
                megaName.push(validNames[i]);
            }
        }
        // sort the megaName array in ascending order.
        var megaNameSorted = megaName.sort();
        // now we need to show the last element of the sorted array.
        //We can do it by reversing the array and then showing the first element of the reversed array
        var megaNameReveredSort = megaNameSorted.reverse();
        return megaNameReveredSort[0];
    }
}

var friends = ["Nazmul Haque", "Ashraful Emo", "Parul", "Tusher Imran", , "", " ", "  Nazmul   Haq ", "Arif"];
var megaFriendName = megaFriend(friends);
console.log(megaFriendName);
