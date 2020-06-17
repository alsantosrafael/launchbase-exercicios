// Creating the user profile (object)
const user = {
    
    name: 'John',
    transactions: [],
    balance: 0
}

//Creating function which is responsible for registering every transaction
//Conditionals help to addrees wheter I am adding money to my balance (credit) or withdrawing from it (debit)
function createTransaction(type, value) {

    const transactionObject = {
        type: type,
        value: value
    }

    if (type === 'credit'){
        user.balance += transactionObject.value
    } 
    
    else if(type === 'debit'){
        user.balance -= transactionObject.value
    }

    user.transactions.push(transactionObject) //This method is responsible for adding an object to an array
 
}
createTransaction('credit', 50)
createTransaction('debit', 150)
createTransaction('credit', 110)
createTransaction('debit', 20)
console.log(user)

function getDebit(user){
    arrayD = []
    for(let transaction of user.transactions){
        if(transaction.type === 'debit') {
            arrayD.push(transaction)
        }
    }
    return arrayD
}

function getCredit(user){
    arrayC = []
    for(let transaction of user.transactions){
        if(transaction.type === 'credit') {
            arrayC.push(transaction)
        }
    }
    return arrayC
}

function getHighestTransactionByType(type, user){
    let majorD = getDebit(user)[0]
    let majorC = getCredit(user)[0]

    if (type === 'debit'){
        arrayD = getDebit(user)
        for (let bubble of arrayD){
            if(bubble.value >= majorD.value){
                majorD = bubble
            }
            return majorD
        }
    }
    if (type === 'credit'){
        arrayC = getCredit(user)
        for (let bubble of arrayC){
            if(bubble.value >= majorC.value){
                majorC = bubble
            }
        }return majorC
    }
}

function getAverageTransactionValue(user) {
    sum = 0
    for (let i = 0; i < user.transactions.length; i++) {
        sum += user.transactions[i].value
    }
    return sum / user.transactions.length

}

function getTransactionsCount (user) {
    let contD = 0
    let contC = 0
    for (let i = 0; i < user.transactions.length; i++){
        if(user.transactions[i].type === 'credit'){
            contC += 1
        }

        if(user.transactions[i].type === 'debit'){
            contD += 1
        }
    }    
    return [contC, contD]
}
const contC = getTransactionsCount(user)[0]
const contD = getTransactionsCount(user)[1]
console.log('The highest efetuated transaction is: ')
console.log(getHighestTransactionByType('credit', user))
console.log('The average of the efetuated transactions is: ')
console.log(getAverageTransactionValue(user))
console.log(`Number of Transactions - Credit: ${contC} and Debit: ${contD}`)
