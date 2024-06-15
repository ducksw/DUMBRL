document.getElementById('btn').setAttribute('onclick', 'call()')
var subida = document.getElementById('subida')
var lcont = 0;
let cn = 0;

// array image
let image = [""]

function call() {
  let inp = document.getElementById('input').value
  let result = document.getElementById('result').innerHTML 
  let input_value = document.getElementById('input_value')
  let pending = document.getElementById('pending')


  result.innerHTML = "Cargando..."

  if (image == "") {
    result.innerHTML = "No hay imagenes"
    return 0;
  }

  let pic = document.getElementById('pic')

  pending.innerHTML = "pending...";

  setTimeout(function() {
    cn++
    if (cn >= 1) {
      let randName = Math.floor(Math.random() * image.length)
      let img = image[randName]

      pic.style.backgroundImage = `url(${img.src})`

      document.getElementById('result').innerHTML = ""
      document.getElementById('result2').innerHTML = `<b>${img.name}</b>`
     

      console.log(img)
    }
    pending.innerHTML = "";
  }, 3000)

  input_value.innerHTML = inp;
}

function upArchive() {
  let archivo = document.getElementById("file").files[0];
  let rd = new FileReader();

  if (file) {
    let nm = prompt("Coloca el nombre del personaje")
    rd.readAsDataURL(archivo );
    rd.onloadend = function () {
    setTimeout(function() {
      subida.innerHTML = "Cargando Imagen.."

      setInterval(function() {
        for (let i = 0; i < 1; i++) {
          subida.innerHTML = "Imagen Cargada";
        }
        image.push({name: nm, src: rd.result})

      }, 1000)
    }, 100)

    }

    console.log(image)
  }
}