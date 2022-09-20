const lista = document.getElementById("lista")

fetch('https://jsonplaceholder.typicode.com/users')
   .then((res) => res.json())
   .then((data) => data.forEach((info) => {
      const li = document.createElement('li')
      li.innerHTML = `
      <h3>Nombre del cliente: ${info.name }</h3>
      <p>Cliente numero: ${info.id}</p>
      <p>Nombre de usuario: ${info.username}</p>
      <p>Mail: ${info.email}</p>
      `
      lista.append(li)
   }))