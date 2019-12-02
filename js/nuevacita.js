function cargando(){
    var nodocita = document.getElementById("cita");
    nodocita.innerText = "Cargando...";
    setTimeout(3000);
}
function actualizarnodo(obj){
    var nodocita = document.getElementById("cita");
	nodocita.innerText = obj.value;
}
function cita(){
    var nodocita = document.getElementById("cita");
    fetch('https://api.chucknorris.io/jokes/random')
.then(res => res.json())
.then(data => obj = data)
.then(() => actualizarnodo(obj))  
}