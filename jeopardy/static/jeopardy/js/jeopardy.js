document.addEventListener('DOMContentLoaded', () => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////// SHOW QUESTION SELECTED/////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  selected = document.getElementById('ggg');
  selected.style.display = 'none';
  selected.addEventListener('click', e => {
    console.log("HEY", e)
    e.target.style.display = 'none';
  });
  questions = document.querySelectorAll('.question');
  questions.forEach(q => {
    q.addEventListener('click', e => {
      console.log(e.target.dataset.question);
      selected.style.display = 'block';
      selected.innerHTML = e.target.dataset.question;
    });
  });
});
