const fs=require("fs")
//lire un fichier sync
let fichier = fs.readFileSync(process.argv[2]);
//convertir en string
var str=fichier.toString()
//compter les sauts de lignes
var ligne=str.split('\n')
//nombre de ligne
var nbr=ligne.length-1
console.log(nbr)