const url = 'https://api.github.com/users/MariaRuasCode';
const dbREPO = 'http://localhost:3000/repos';
const dbIMAGEM = 'http://localhost:3000/Imagens';
const dbColegas = 'http://localhost:3000/colegas';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network resposta was n foi');
    }
    return response.json(); 
  })
  .then(data => {
    const avatar = document.getElementById("github-profile");
    avatar.src = data.avatar_url;
    let usuario = document.getElementById("titulo");
    usuario.innerText = data.login;
    let nome = document.getElementById("nome");
    nome.innerText = data.name;
    let bio = document.getElementById("bio");
    bio.innerText = data.bio;
    
    
  })
  .catch(error => {
    console.error('n foi', error);
  });



  document.addEventListener('DOMContentLoaded', function() {
   
    fetch(dbREPO)
      .then(response => response.json())
      .then(data => {
        let repo = data;
        console.log(repo);
  
       
        let RepoContainer = document.getElementById("todosrepositorio");
  
        
        repo.forEach(projeto => {
          let repoCard = document.createElement('div');
          repoCard.innerHTML = `
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${projeto.titulo}</h5>
                <p class="card-text">${projeto.descricao}</p>
                <a href="repos.html?id=${projeto.id}" class="btn btn-primary">Detalhes</a>
              </div>
            </div>`;
          RepoContainer.appendChild(repoCard);
        });

      });
        
     
    fetch(dbIMAGEM)
    .then(response => response.json())
      .then(data => {
        let image = data;
        console.log(image);

        let img1 = document.getElementById("imagem1");
        let img2 = document.getElementById("imagem2");
        let img3 = document.getElementById("imagem3");
        let img4 = document.getElementById("imagem4");
        let img5 = document.getElementById("imagem5");
        
          img1.src = image[0].url;
          img2.src = image[1].url;
          img3.src = image[2].url;
          img4.src = image[3].url;
          img5.src = image[4].url;

          let desc1 = document.getElementById("desc1")
          let desc2 = document.getElementById("desc2")
          let desc3 = document.getElementById("desc3")
          let desc4 = document.getElementById("desc4")
          let desc5 = document.getElementById("desc5")

          desc1.innerText = image[0].desc;
          desc2.innerText = image[1].desc;
          desc3.innerText = image[2].desc;
          desc4.innerText = image[3].desc;
          desc5.innerText = image[4].desc;
       
    });
    
   


    fetch(dbColegas)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          let Colegas = data;
          let ColegaContainer = document.getElementById("Colegas")

          Colegas.forEach(colega => {

            let ColegaCard = document.createElement('div');

            ColegaCard.innerHTML =`
            <div class = "Colega" >
              <img id ="ColegasImg" src="${colega.icon}" >
              <h2>${colega.nome}</h2>
              <p>${colega.website}</p>
            </div>`;

            ColegaContainer.appendChild(ColegaCard);
          })



      });
    })
    

    