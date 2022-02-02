const input = document.getElementById('favchap');
const button = document.getElementById('submit');
const item = document.getElementById('ul');

submit.addEventListener('click', () => {
  const text = input.value
  if (text.length != 0) {
    const createAnHTMLList = `<li class=""><div>${text}</div><button
      onclick="removeNameFromTheList(this)">X</button>`
    list.innerHTML += createAnHTMLList
    input.value = ''
    input.classList.remove('el');
  } else {
    input.classList.add('el');
  }
})

function removeNameFromTheList(e) {
  e.parentElement.remove()
}