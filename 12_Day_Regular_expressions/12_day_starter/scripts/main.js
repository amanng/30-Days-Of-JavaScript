const str = "I love javascript"
const pattern = /love/g
const result = str.match(pattern)
//console.log(result)
const searchResult = str.search(pattern)
//console.log(searchResult)
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
replaced = txt.replace(/Python|python/, 'Javascript')
//console.log(replaced)
const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches1 = txt.replace(/%/g, '')
console.log(matches1)  
const emailText = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
let patterns=/[Ee]-?mail/g
emailtext = emailText.match(patterns)
console.log(emailtext)
