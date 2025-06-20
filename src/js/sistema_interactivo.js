function contieneSoloLetras(texto) {
  const patron = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/; // Regular expression for letters, accents, ñ
  return patron.test(texto);
}
//Extraction of data
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let user = document.getElementById("user").value.trim();
  let age = document.getElementById("age").value.trim();
  // Principally function.
  try {
    if (user == "" || age == "") {
      alert("Error: no puede dejar ninguna casilla vacia.");
    } else if (!contieneSoloLetras(user)) {
      alert("Error, el nombre solo puede contener letras.");
      age = parseInt(age, 10);
    } else if (isNaN(age)) {
      console.error("Error: Por favor, ingresa una edad válida en números");
    } else if (age < 0 || age > 120) {
      alert("Error. Ingrese un numero dentro del rango (0 a 120)");
    } else if (age < 18) {
      alert(
        `Hola ${user}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
      );
    } else if (age >= 18 && age <= 120) {
      alert(
        `Hola ${user}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
      );
    } else {
      console.error("Error: Por favor, ingresa una edad válida en números.");
    }
  } catch {
    window.alert("Error. Recargue la pagina.");
  }
});
