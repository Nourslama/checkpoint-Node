var fs=require("fs")
let fichier=process.argv[2]
fs.readFile(fichier, function(err,data){
	if(err)
		console.log('can t read file')

	 else 
console.log(data.toString().split('\n').length-1)

})