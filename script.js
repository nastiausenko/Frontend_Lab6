const downloadButton = document.getElementById('download-button');
const personContainer = document.getElementById('person-container');
const message = document.getElementById('message');

downloadButton.addEventListener('click', () => {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
      const personCard = document.createElement('div');
      personCard.className = 'person-card';

      const user = data.results[0];
      const picture = document.createElement('img');
      picture.src = user.picture.large;
      picture.alt = `${user.name.first} ${user.name.last}`;

      const email = document.createElement('p');
      email.innerHTML = `<strong>Email</strong>: ${user.email}`;

      const name = document.createElement('p');
      name.innerHTML = `<strong>Name</strong>: ${user.name.first} ${user.name.last}`;

      const phone = document.createElement('p');
      phone.innerHTML = `<strong>Phone</strong>: ${user.phone}`;

      const city = document.createElement('p');
      city.innerHTML = `<strong>City</strong>: ${user.location.city}`;

      personCard.append(picture, email, name, phone, city);
      personContainer.appendChild(personCard);

      message.textContent = 'success!';
      message.style.color = '#242d38';
    })
    .catch(() => {
      message.textContent = 'error!';
      message.style.color = 'red';
    })
    .finally(() => setTimeout(() => (message.textContent = ''), 2000));
});
