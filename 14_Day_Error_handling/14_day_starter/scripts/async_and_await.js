////async/await ==async makes a function return a promise
///   Await- makes an aasync functioon wait for promise

function walkTheDog() {
   
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
             const dogWalked = true;

            if (dogWalked) {
                resolve("Walk the dog")
                    
            }
            else {
                reject("You Didn't walked the dog")
}
        }, 1500)
    })
    
}
function cleanKitchen(callback) {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             const kitchenCleaned = true
            if (kitchenCleaned) {
                resolve("Clean the kitchen")
            }
            else {
                reject("You didn't cleaned the kitchen")
            }
        } , 2500)
    })
    }
function takeOutTrash(callback) {
   
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
             const takeOuttheTrash = false
            if (takeOuttheTrash) {
                resolve("take ot the trash")
            }
            else {
                reject("You didn't take out the trash")
            }
        }, 500)
    })

}
async function doTask() {
    try {
        const walkDogResult = await walkTheDog();
        console.log(walkDogResult)
        const cleanTheKitchenResult = await cleanKitchen();
        console.log(cleanTheKitchenResult);
        const takeOuttheTrashResult = await takeOutTrash();
        console.log(takeOuttheTrashResult)
        console.log("You finished Your Task")
    }
    catch (error) {
        console.error(error)
    }
}
doTask()