function removeError(element) {
  element.classList.remove('error');
}

const submit = document.getElementById('submit');
const tbody = document.getElementById('tbody');
const tasks = [];

submit.addEventListener('click', function () {
  const name = document.getElementById('name');
  const question = document.getElementById('question');
  const getAnswer = document.getElementById('getAnswer')

  const options = [
    "Так", "Ні", "Вперед!",
    "Так тримати!",
    "Не зараз","Давай",
    "Пізніше", "Не варто",
    "Не опускай руки", "Хороша ідея",    
    "Спробуй ще", "Забудь про це",
    "В жодному разі", "Можливо",
    "Надто рано", "Звісно так",
    "Авжеж", "Не раджу",
    "Тільки так!", "Аж ніяк",
    "Подумай ще раз", "Продовжуй"
  ];

  let answer = '';
  let num = (Math.random() * options.length).toFixed();
  if (num < 0 || num >= options.length) {
    num = 0;
  }
  answer = options[num];

  if (name.value !== '' && question.value !== '') {
    const task = {
      name: name.value,
      question: question.value,
      answer: answer,
    }
    tasks.push(task);
    name.value = '';
    question.value = '';
    getAnswer.innerHTML = answer;
  } else {
    if (name.value === '') {
      name.classList.add('error');
    }
    if (question.value === '') {
      question.classList.add('error');
    }
    if (name.value === '') {
      getAnswer.innerHTML = 'хто ти?';
    }
    if (question.value === '') {
      getAnswer.innerHTML = 'запитай мене';
    } 
  }
  setData(tasks);
  console.log('click', tasks);
});

function setData(arr) {
  if (arr.length >= 0) {
    let tmp = '';
    for (let i = 0; i < arr.length; i++) {
      tmp += renderItem(i, arr[i]);
    }
    tbody.innerHTML = tmp;
  }

}

function renderItem(i, item) {
  return `
      <tr>
        <td>${item.name}</td>
        <td>${item.question}</td>
        <td>${item.answer}</td>
      </tr>
    `;
}