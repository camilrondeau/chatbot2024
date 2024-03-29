const chatForm = get('form');
const chatInput = get('input');
const chatBox = get('main');

appendMessage('bot', 'This is a bot bubble');
appendMessage('user', 'This is a user bubble');
appendMessage('bot', 'Hi! How can i help you?');

chatForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = chatInput.value;
  console.log(chatInput.value);
  if (!text) return;
  
  appendMessage('user', text);
  //box d'entrée de texte
  chatInput.value = '';
  console.log(chatInput.value);
});

function appendMessage(side, text) {
  const bubble = `
    <div class="msg -${side}">
        <div class="bubble">${text}</div>
    </div>`;
  chatBox.insertAdjacentHTML('beforeend', bubble);
  chatBox.scrollTop += 500;
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}