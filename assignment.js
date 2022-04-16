//problem01
function kilometerToMeter(kilo) {
    if (kilo < 0) {
        errorMsg = "Length cannot be Negative."
        return errorMsg;
    } else {
        var meter = kilo * 1000;
        return meter;
    }
}
//var result=kilometerToMeter(10);
//console.log(result);

//problem02
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptopPrice < 0) {
        errorMsg = "Quantity cannot be Negative";
        return errorMsg;
    } else {
        var budget = 0;
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;

        budget = watchPrice + phonePrice + laptopPrice;
        return budget;
    }

}
//  var result= budgetCalculator(2,1,2);
//  console.log(result);




//problem 03
function hotelCost(days) {
    if (days < 0) {
        errorMsg = "Please Provide a Positive Input";
        return errorMsg;
    }
    var totalCost = 0;

    if (days <= 10) {
        totalCost = days * 100;
        return totalCost;
    } else if (days <= 20) {
        var first10DaysCost = 10 * 100;
        var remainingDays = days - 10;
        var remainingCost = remainingDays * 80;
        totalCost = first10DaysCost + remainingCost;

        return totalCost;
    } else {
        var first10DaysCost = 10 * 100;
        var second10DaysCost = 10 * 80;
        var remainingDays = days - 20;
        var remainingCost = remainingDays * 50;
        totalCost = first10DaysCost + second10DaysCost + remainingCost;

        return totalCost;

    }
}

var result = hotelCost(-1);
//console.log(result);


//Problem 04
function megaFriend(friends) {

    if(friends.length==0){        
        errorMsg = "Please give input Names";
        return errorMsg;
    }

    var mega = '';
    var longestLength = 0;
    
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > longestLength) {
            mega = friends[i];
            longestLength = friends[i].length;
        }

    }

    return mega;

}


var friends = ['Munne', 'mahmudboksho', 'xavi', 'Sheikh', 'jono', 'Mahmud boksho munna'];
//var friends=[];
 var result = megaFriend(friends);
 console.log(result);