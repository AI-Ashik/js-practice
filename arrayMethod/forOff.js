// const fruits = [1,2,3,4,5,6,7]
// const nam = "ashik"

// for(num of nam) {
//     console.log(num)
// }


// for in (objects)

const language = {
    language : "Javascript",
    created : 1995
}

for (const key in language) {
    console.log(`${key} : ${language[key]}`)
}