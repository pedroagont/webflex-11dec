$(document).ready(() => {
  console.log('Hello from app.js!');

  // DOM
  // console.log(navigator);
  // console.log(window);
  // console.log(document);

  const notes = ['learn html', 'learn css', 'learn js'];

  // ---------------- HOW TO SELECT ELEMENTS
  // with vanilla js
  // console.log(document.getElementById('header-title'));
  // const header = document.getElementById('header');
  // const headerTitle = document.getElementById('header-title');
  // const notesList = document.getElementById('notes-list');
  // const newNoteForm = document.getElementById('new-note-form');

  // with jQuery
  // console.log(jQuery);
  // console.log($);
  console.log($('#header-title'));
  const header = $('#header');
  const headerTitle = $('#header-title');
  const notesList = $('#notes-list');
  const newNoteForm = $('#new-note-form');

  // // ---------------- HOW TO CHANGE CONTENT
  // with vanilla js
  // headerTitle.innerHTML = 'Hello from app.js!';

  // with jQuery
  headerTitle.html('Hello from app.js using jQuery!');

  // // ---------------- HOW TO CHANGE STYLES
  // with vanilla js
  // header.style.backgroundColor = 'yellowgreen';
  // header.style.color = 'black';

  // with jQuery
  header.css('background-color', 'yellowgreen');
  header.css('color', 'black');

  // // ---------------- HOW TO DYNAMIC RENDERING
  const renderNotes = () => {
    // with vanilla js
    //   notesList.innerHTML = '';
    //   for (const note of notes) {
    //     notesList.innerHTML += `
    //         <article>
    //           <h4>${note}</h4>
    //         </article>`;
    //   }

    // with jQuery
    notesList.empty();

    for (const note of notes) {
      notesList.append(`
            <article>
                <h4>${note}</h4>
            </article>`);
    }
  };

  renderNotes();

  // // ---------------- HOW TO ACCESS EVENTS
  // with vanilla js
  // const handleNewNoteFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Hello from submitting event!');

  //   //   console.log(event.target.elements.email.value);
  //   const { content } = event.target.elements;
  //   //   console.log(content.value);

  //   notes.push(content.value);

  //   content.value = '';
  //   renderNotes();
  // };

  // newNoteForm.addEventListener('submit', handleNewNoteFormSubmit);

  // const handleWindowResize = () => {
  //   console.log('resizing!');
  // };

  // window.addEventListener('resize', handleWindowResize);

  // with jQuery
  const handleNewNoteFormSubmit = (event) => {
    event.preventDefault();
    console.log('Hello from submit jquery!');

    const { content } = event.target.elements;

    notes.push(content.value);

    $(content).val('');
    renderNotes();
  };

  // newNoteForm.on('submit', handleNewNoteFormSubmit);
  newNoteForm.submit(handleNewNoteFormSubmit);

  $(window).on('resize', () => {
    console.log('resizing!');
  });
});
