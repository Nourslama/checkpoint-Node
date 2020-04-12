

//exercice1
// console.log("HELLO WORLD")


//exercice2
//ecrivez un prog qui accepte un ou plusieurs nombres comme arguments de la ligne de commande et affiche la somme de ces nombres sur la console
//conseils: l'objet process.argv un tableau contenant la ligne de commande complete
//le premier element du tableau process.argv est tjrs node le second est toujours le chemain et le troisieme(i=2)
//process.argv sont des strings donc convertir en mettant Number
// let res=0
// for(let i=2;i<process.argv.length;i++)
// {
// 	res+=Number(process.argv[i]);
	
// }
// console.log(res)


//exercice3 
//ecrivez un prog qui utilise une opération synchrone sur le système de fichiers pour lire un fichier et afficher son nombre de fins de ligne 
// const fs=require("fs")
// //lire un fichier sync
// let fichier = fs.readFileSync(process.argv[2]);
// //convertir en string
// var str=fichier.toString()
// //compter les sauts de lignes
// var ligne=str.split('\n')
// //nombre de ligne
// var nbr=ligne.length-1
// console.log(nbr)

//exercice 4
//ecrivez un prog qui utilise une opération asynchrone sur le sys de fichier pour lire un fichier et addicher qon nombre de fins de ligne 

// var fs=require("fs")
// let fichier=process.argv[2]
// fs.readFile(fichier, function(err,data){
// 	if(err)
// 		console.log('can t read file')

// 	 else 
// console.log(data.toString().split('\n').length-1)

// })


//exercice 5
//creez un prog qui affiche une liste de fichiers au sein d'un repertoire donné,filtrés en fonction de leur extension
var fs = require('fs')
var path=require('path')

var  directory=process.argv[2]
var extension='.'+ process.argv[3]

fs.readdir(directory,function(err,data){
if (err)
	console.log(err)
else
data.forEach(file=>{
	if (path.extname(file)===extension)
		 {console.log(file)}
	})
})

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
