const lista = ['Mariana', 'Luiz', 'João', 'Amanda'];


let newList = [];
let word = '';

for (let element of lista) {
    element = element.toLowerCase()
    
    for (let indice in element) {
        if (indice > greaterIndex) {
            greaterIndex = indice;
        }
        let greaterIndex = 0;
    }

    for (let i = 0; i < element.length; i+=1) {
        if (element[i].indexOf() === element[element.length -1]) {
            word = element[i].toUpperCase() + word ;
        } else {
            word = element[i] + word;
        }
    }

    newList.push(word)
    word = '';
}
console.log(greaterIndex)
console.log(newList)