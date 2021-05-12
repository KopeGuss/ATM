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
        // nit:
        // we could specify amount of available cash, e.g.:
        // console.log(`Not enough money in ATM.\nAvalable cash amount: ${summAllCashinAtm}`)
    else {
        // the name someLeft doesn't tell us a lot,
        // we should use names that represent what variable stores
        // someLeft -> cashToWithdraw seems like a goot fit here
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

        // in functions like getSomething(), we should ususally
        // return something. Like operation state, or cash amount, e.g.
        return true;
    }
}
getCashFromAtm(1700)

// Overall
//
// We should improve handling situations when atm has enough cash, but no suitable bills
// var is a bad practice. Use let&const instead
// use same semicolon style in project
// would be cool to add visuals and more behaviour