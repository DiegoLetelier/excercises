/*
const nacionalidad = ["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"];

function contando() {

    let mex = nacionalidad.filter (element => element === "mexicano")
    mex = "Mexicanos: " + " " + mex.length
    let arg = nacionalidad.filter (element => element === "argentino")
    arg = "Argentinos: " + " " + arg.length
    let per = nacionalidad.filter (element => element === "peruano")
    per = "Peruanos: " + " " + per.length
    let chi = nacionalidad.filter (element => element === "venezolano")
    chi = "Chilenos: " + " " + chi.length
    
    console.log(chi,mex,per,arg)
    alert(`${chi}, ${mex}, ${per}, ${arg}`)
    
    }
    
    contando () */

    
   // funciona forEach
  
    let nation = (["mexicano", "argentino", "argentino", "venezolano",
"peruano", "mexicano", "argentino", "peruano", "venezolano"]);


function SelectNation(nation) {
    let mex = [];
    let argent = [];
    let ven = [];
    let per = [];

    nation.forEach((element)=>{
        if(element === "mexicano") {
            mex.push(element)
        }
        if(element === "argentino") {
            argent.push(element)
        }if(element === "venezolano") {
            ven.push(element)
        }if(element === "peruano") {
            per.push(element)
        }
    })
    console.log("mexicanos: ", mex.length)
    console.log("peruano: ", per.length)
    console.log("venezolano: ", ven.length)
    console.log("argentino: ", argent.length)
}
 
SelectNation(nation)
  

/*

function selectNation(nation){
    
     for(let i = 0; i<= nation.length; i++) 
          { 
        if(nation[i] == 'mexicano'){ 
            mex.push(nation[i]);           
        }else {
            if(nation[i] == 'argentino'){
                argent.push(nation[i]);  
            }else{
                if(nation[i] == 'venezolano'){
                    ven.push(nation[i]); 
                }else{
                    if(nation[i] == 'peruano'){
                        per.push(nation[i]); 
                    } 
                } 
        }
    }
    document.write("Existen " + mex.length + " Mexicanos");
    document.write("Existen " + argent.length + " Argentinos");
    document.write("Existen " + ven.length + " Venezolanos");
    document.write("Existen " + per.length + " Peruanos");
    
}

selectNation(nation); */