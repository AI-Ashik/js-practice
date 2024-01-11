function getProfit(profit){
    return function(interest){
        return (profit * interest) / 100
    }
}

const business1 = getProfit(100000)
console.log(business1)
// output function()
business1(25)
// output - 250000