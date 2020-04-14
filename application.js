  
//exporter une unique fonctin qui prend exactement les arguments décrits
//appeler la fonction de rappel une et une seul fois avec soit une erreur soit des données de la facon decrite
//ne rien changer d'autres relles que les variables globales ou la sortie standards
//traiter toute erreur qui pourrait survenir en les passant à la fonction de rappel 
const fs=require('fs')
const path=require('path')
module.exports=
    function filterDir(repertory,extension,callback){

          extension=`.${extension}`;
          fs.readdir(repertory,(err,list)=>{
	      if(err)
		return callback(err)
	      const filtred=list.filter(file=>
	      	{return path.extname(file)===extension
          })
             callback(null,filtred);
});
      }


