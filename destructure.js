const details = {
    name: "ashik",
    age : 21,
    address: "bangladesh",
    education : {
        psc: 4.83,
        jsc : 4.95,
        ssc : 4.83,
        diploma : 3.65
    }
}

const {name,age,address, education : {psc,ssc,jsc,diploma} = {}} = details
console.log(diploma)