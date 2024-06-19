const url = 'https://api.github.com/users/MariaRuasCode';


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
    console.error('There was a problem with the fetch operation:', error);
  });
