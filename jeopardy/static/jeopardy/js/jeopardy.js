document.addEventListener('DOMContentLoaded', () => {

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////// GET CSRF TOKEN //////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////// SHOW QUESTION SELECTED/////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let form = document.getElementById('jeopardy-form');
  let show = document.getElementById('show_question');
  let question = document.getElementById('question');
  let answers = document.getElementById('answers');

  show.style.display = 'none';

  values = document.querySelectorAll('.value');
  values.forEach(val => {
      val.addEventListener('click', e => {
          get_answers(e);
          let txt = document.createTextNode(e.target.dataset.question);
          question.appendChild(txt);
          show.style.display = 'block';
      });
  });





  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////// GET ANSWERS ////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function get_answers(e){
      console.log(e.target)
      let data = { question_pk: e.target.dataset.pk };

      fetch('/get_answers', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
          },
          body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success: ', data);

          for (i = 0; i < data.length; i++){
              let div = document.createElement('div');
              div.className = 'answers d-grid gap-2 col-6 mx-auto';
              let btn = document.createElement('button');
              btn.className = 'btn btn-lg btn-primary';
              btn.type = 'submit';
              btn.name = 'answer_pk';
              btn.value = data[i].id;
              let txt = document.createTextNode(data[i].answer);
              btn.appendChild(txt);
              div.appendChild(btn);
              answers.appendChild(div);
          }

      })
      .catch((error) => {
          console.error('Error: ', error);
      });
  }



});
