const prompt = require('prompt-sync')
({sigint: true})

let caughtFish = []
let fish1 = generateFish()
let fish2 = generateFish()

caughtFish.push(fish1,fish2)

console.log(caughtFish)
console.log(getTotalWeight())

console.log("Youve gone fishing!")
console.log("Try to macimize the value of your caught fish. ")
console.log("You can fish for six hours (tille 12:00pm) and can catch at most 10 lbs of fish.")





for(let i = 6; i < 13; i++){
    console.log
    ('===========================\n')
    console.log("The time is " + i +":00am. so far you've caught:")
}




















function generateRandomWeight(){
   let weight = Number((Math.random() * 5).toPrecision(3))
    while(weight < 1){
        weight = Number((Math.random() * 5).toPrecision(3))
    }
   return weight
}




function generateRandomValue(){

    let value = Number((Math.random()*5).toPrecision(3))


    while(value < 0.1){
        value = Number((Math.random()*5).toPrecision(3))
    }

    if(value < 1){
        value = value.toPrecision(2)
    }
    return value
}


function generateRandomName(){

    let adjectives = [
        'Shiny', 'Red','Dull',
        'Blue', 'Slimy', 'Green',
        'Dry', 'Yellow', 'Vibrant',
        'Purple', 'Floppy', 'Orange',
        'Silly', 'Silver']



    let types =[
        'Salmon', 'Bass', 'Trout', 
        'Flounder', 'Perch', 'Snapper',
        'Cod', 'Catfish', 'Grouper',
        'Tuna', 'Blobfish', 'Blowfish']

    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)]
    
    let adj2 = adjectives[Math.floor(Math.random() *adjectives.length)]
    
    while(adj1 === adj2 ){
        adj2 = adjectives[Math.floor(Math.random() *adjectives.length)]
    }
    
    let type = types[Math.floor(Math.random() *types.length)]

        return adj1 + " " + adj2 + " " + type
}





function generateFish(){
    let fish = {}
    fish.name = generateRandomName()
    fish.weight = generateRandomWeight()
    fish.value = generateRandomValue()
    return fish
}

console.log(generateFish())

function getTotalWeight(){

let totalWeight = 0
for(let i = 0; i < caughtFish.length; i++){
    let currentFish = caughtFish[i]
    totalWeight += currentFish.weight
}
return Number(totalWeight.toPrecision(3))
}

function getTotalValue(){




}


