console.log('Hello from app.js!');

// DOM
console.log(navigator);
console.log(window);
console.log(document);

const notes = ['learn html', 'learn css', 'learn js'];

// ---------------- HOW TO SELECT ELEMENTS
console.log(document.getElementById('header-title'));
const header = document.getElementById('header');
const headerTitle = document.getElementById('header-title');
const notesList = document.getElementById('notes-list');
const newNoteForm = document.getElementById('new-note-form');

// ---------------- HOW TO CHANGE CONTENT
headerTitle.innerHTML = 'Hello from app.js!';

// ---------------- HOW TO CHANGE STYLES
header.style.backgroundColor = 'yellowgreen';
header.style.color = 'black';

// ---------------- HOW TO DYNAMIC RENDERING
const renderNotes = () => {
  notesList.innerHTML = '';

  for (const note of notes) {
    notesList.innerHTML += `
        <article>
          <h4>${note}</h4>
        </article>`;
  }
};

renderNotes();

// ---------------- HOW TO ACCESS EVENTS
const handleNewNoteFormSubmit = (event) => {
  event.preventDefault();
  console.log('Hello from submitting event!');

  //   console.log(event.target.elements.email.value);
  const { content } = event.target.elements;
  //   console.log(content.value);

  notes.push(content.value);

  content.value = '';
  renderNotes();
};

newNoteForm.addEventListener('submit', handleNewNoteFormSubmit);

const handleWindowResize = () => {
  console.log('resizing!');
};

window.addEventListener('resize', handleWindowResize);
