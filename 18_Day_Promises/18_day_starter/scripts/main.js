const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['html', 'css', 'JS']
        //if (skills.length>0) {
        if (skills.includes('Node')) {
            resolve('Fiullstack')
        }
        else {
            reject('somthing wrong')
        }
},2000)
})
promis.then(result => {
    console.log(result)
}).catch(error => console.error(error)
);