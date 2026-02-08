function palendrom(txt) {
    const reversed_txt = txt.split('').reverse().join('')
    if (txt === reversed_txt) {
      console.log(`The word ${txt} is Palendrom`)
    }
    else {
        console.log(`The word ${txt} is Not Palendrom`)
    }
}
palendrom('input')