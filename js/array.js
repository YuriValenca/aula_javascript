var array = ["maçã", "pera", "uva", "salada mista"];
array.push("melão"); //adiciona um elemento ao array
console.log(array.length); //length dá o tamanho (qtde de eltos) do array
console.log(array); //imprime o array
array.pop("uva"); //remove um elemento, se a função for vazia, remove o último
console.log(array);
console.log(array.reverse()); //imprime o array ao contrário
console.log(array.toString()); //imprime o array em forma de string
console.log(array.join(" e ")); //imprime o array em forma de string, porém o que separa os eltos é oq está no arg