var atm = [
    { nominal: 500, bills: 1 },
    { nominal: 200, bills: 2 },
    { nominal: 100, bills: 3 },
    { nominal: 50, bills: 4 }
]
var summAllCashinAtm = 0;

atm.forEach(item => {
    summAllCashinAtm += item.nominal * item.bills
})
function getCashFromAtm(userCashRequest) {

    console.log('...........................\n...........................\n    Welcome to our ATM \n...........................\n...........................\n')

    if (userCashRequest > summAllCashinAtm)
        console.log(" Not enough money \n Try again...")
    else {
        var someLeft = userCashRequest;
        atm.forEach(item => {
            if (someLeft >= item.nominal && item.bills != 0) {
                var neededBils = Math.floor(someLeft / item.nominal);
                if (neededBils > item.bills)
                    neededBils = item.bills
                item.bills -= neededBils
                someLeft -= neededBils * item.nominal
                console.log(neededBils, item.nominal)
            }
        })
        console.log(atm)
    }
}
getCashFromAtm(1700)

