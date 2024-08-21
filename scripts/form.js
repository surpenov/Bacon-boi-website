function createCard() {
    const name = document.getElementById('name').value;
    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;
    const cardContent = `Dear ${recipient}, ${message} – From ${name}`;
    
    document.getElementById('cardContent').innerText = cardContent;
    document.getElementById('card').style.display = 'block';
  }
  