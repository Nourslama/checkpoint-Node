
const application=require('./application')

 var  fichier=process.argv[2]
var extension=process.argv[3]
application.filterDir(fichier,extension,function(err,filtredlist){
if(err){
 return console.log(err)}
else
	filtredlist.forEach(file=>{
 		console.log(file)
 	})
 })

