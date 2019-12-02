function frases(){
fetch('https://api.chucknorris.io/jokes/random')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))
 return obj;
}