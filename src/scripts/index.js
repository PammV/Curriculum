const add_text= (id,texto)=> {
  document.getElementById(id).innerHTML = texto;
}

const add_attr= (id,att,value)=> {
  document.getElementById(id).setAttribute(att,value);
}

// obteniendo perfil aleatorio
fetch(`https://randomuser.me/api/`)
  .then((res) => res.json())
  .then((json) => {
    const user = json.results[0];
    const img = document.getElementById("img-top");
    let count = 0;
    
    //Encabezado
    img.setAttribute(`src`, `${user.picture.large}`);
    img.addEventListener(`error`,(ev)=>{
      if(ev){
        switch (count) {
          case 0:
            img.setAttribute(`src`, `${user.picture.medium}`);
            count++
            break;
          case 1:
            img.setAttribute(`src`, `${user.picture.thumbnail}`);
            count++
            break;
          default:
            break;
        }
      
    }
  })

    document.getElementById("name").innerHTML = `${user.name.first} ${user.name.last}`;

    //Cargar datos

    add_text(`ubication`,`${user.location.city}, ${user.location.state}, ${user.location.country}.`);

    add_text(`street`,`${user.location.street.name}, ${user.location.street.number}.`);

    add_text(`phone`,`${user.phone}`);
    add_attr(`phone`,`href`,`tel:${user.phone}`)

    
    add_text(`cell`,`${user.cell}`);
    add_attr(`cell`,`href`,`tel:${user.cell}`)

    add_text(`email`,`${user.email}`)
    add_attr(`email`,`href`,`mailto:${user.cell}`)


  });
