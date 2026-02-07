///promies is an object that manage asynchronous operations 

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
walkTheDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("You finshed the task") })
    .catch(error=>console.error(error));
    
