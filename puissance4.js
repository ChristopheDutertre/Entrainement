var contenu = document.getElementById("contenu");
var tableau = document.createElement("table");


var nbLignes = 6;
var nbColonnes = 7;

for (var i=0; i<nbLignes; i++) {
	var ligne = document.createElement("tr");
	ligne.id = "ligne" + (i+1);
	for(var j=0; j<nbColonnes; j++) {
		var cellule = document.createElement("td");
		ligne.appendChild(cellule);
		tableau.appendChild(ligne);
	}
}


contenu.appendChild(tableau);