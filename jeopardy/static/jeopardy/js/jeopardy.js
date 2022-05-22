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

  show = document.getElementById('show_question');
  question = document.getElementById('question');
  answers = document.getElementById('answers');
  question_pk_input = document.getElementById('question_pk');
  submit_btn = document.getElementById('submit_btn');

  show.style.display = 'none';

  submit_btn.addEventListener('click', e => {
    document.getElementById('jeopardy_form').submit();
  });


  values = document.querySelectorAll('.value');
  values.forEach(val => {
    val.addEventListener('click', e => {
      get_answers(e);
      question.innerHTML = e.target.dataset.question;
      question_pk_input.value = e.target.dataset.pk;
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
        answers.innerHTML = data[i].answer;
      }
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
  }




});
