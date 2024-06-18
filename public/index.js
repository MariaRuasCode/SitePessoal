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
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
