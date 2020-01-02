const xhr = new XMLHttpRequest();
const empleadoBtn = document.querySelector("#boton1");
const empleadoBtn2 = document.querySelector("#boton2");

const empleado = document.getElementById("empleado");
const empleados = document.getElementById("empleados");
empleadoBtn.addEventListener("click", loadEmpleado);
empleadoBtn2.addEventListener("click", loadEmpleados);

function loadEmpleado() {
  console.log("here!");
  xhr.open("GET", "empleado.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const result = JSON.parse(this.response);
      const template = `
            <ul>
            <li>Id:${result.id}</li>
            <li>nombre: ${result.nombre}</li>
            <li>empresa: ${result.empresa}</li>
            <li>trabajo: ${result.trabajo}</li>
            </ul>
            `;
      empleado.innerHTML = template;
    }
  };

  xhr.send();
}

function loadEmpleados() {
  console.log("here!");
  xhr.open("GET", "empleados.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const results = JSON.parse(this.response);
      console.log(results);
      let template = "";
      results.forEach(function(result) {
        template += `
              <ul><li>Id:${result.id}</li>
              <li>nombre: ${result.nombre}</li>
              <li>empresa: ${result.empresa}</li>
              <li>trabajo: ${result.trabajo}</li></ul>
              `;
      });
      empleados.innerHTML = template;
    }
  };

  xhr.send();
}
