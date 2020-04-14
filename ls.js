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