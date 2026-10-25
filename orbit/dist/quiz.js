'use strict';
(() => {
  const questions = [
    {
      question: 'Which is the largest planet in our solar system?',
      options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'], answer: 2,
      explanation: 'Jupiter is the largest planet, with an equatorial diameter of 142,984 km — about 11 times Earth’s diameter.'
    },
    {
      question: 'Which planet is closest to the Sun?',
      options: ['Mercury', 'Venus', 'Earth', 'Mars'], answer: 0,
      explanation: 'Mercury is the closest planet to the Sun, at a mean distance of about 57.9 million km.'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Uranus', 'Jupiter', 'Mars'], answer: 3,
      explanation: 'Mars looks rusty red because iron minerals in its surface dust have oxidised.'
    },
    {
      question: 'About how wide is Earth at its equator?',
      options: ['4,879 km', '12,756 km', '49,528 km', '142,984 km'], answer: 1,
      explanation: 'Earth’s equatorial diameter is about 12,756 km. A diameter measures the full width through a planet’s centre.'
    },
    {
      question: 'Which planet is famous for its large, bright rings?',
      options: ['Mars', 'Mercury', 'Saturn', 'Earth'], answer: 2,
      explanation: 'Saturn’s spectacular rings are made mostly of ice particles. Jupiter, Uranus, and Neptune also have rings, but they are much fainter.'
    }
  ];
  const form = document.querySelector('#quiz-form');
  const container = document.querySelector('#quiz-questions');
  const result = document.querySelector('#quiz-result');
  const submit = document.querySelector('#quiz-submit');
  const retry = document.querySelector('#quiz-retry');
  const progress = document.querySelector('#quiz-progress');
  let submitted = false;

  container.innerHTML = questions.map((q, i) => `
    <fieldset class="quiz-question" id="quiz-q${i}">
      <legend><span class="quiz-number">0${i + 1}</span>${q.question}</legend>
      <div class="quiz-options">${q.options.map((option, j) => `
        <label class="quiz-option"><input type="radio" name="quiz-${i}" value="${j}" required aria-describedby="quiz-feedback-${i}"><span class="quiz-letter">${String.fromCharCode(65 + j)}</span><span>${option}</span></label>
      `).join('')}</div>
      <p class="quiz-feedback" id="quiz-feedback-${i}" hidden></p>
    </fieldset>
  `).join('');

  form.addEventListener('change', () => {
    if (submitted) return;
    const count = form.querySelectorAll('input:checked').length;
    progress.textContent = `${count} of ${questions.length} answered`;
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (submitted || !form.reportValidity()) return;
    let score = 0;
    questions.forEach((q, i) => {
      const chosen = form.querySelector(`input[name="quiz-${i}"]:checked`);
      const correct = Number(chosen.value) === q.answer;
      if (correct) score++;
      const fieldset = document.querySelector(`#quiz-q${i}`);
      fieldset.classList.add(correct ? 'quiz-correct' : 'quiz-incorrect');
      fieldset.querySelectorAll('input').forEach(input => {
        input.disabled = true;
        if (Number(input.value) === q.answer) input.closest('label').classList.add('correct-answer');
      });
      const feedback = document.querySelector(`#quiz-feedback-${i}`);
      feedback.textContent = `${correct ? '✓ Correct!' : `Not quite — the answer is ${q.options[q.answer]}.`} ${q.explanation}`;
      feedback.hidden = false;
    });
    submitted = true;
    const message = score === 5 ? 'Perfect score, space explorer!' : score >= 3 ? 'Nice exploring! Keep your curiosity going.' : 'Every explorer starts somewhere. Read the answers and have another go!';
    result.innerHTML = `<span class="eyebrow">MISSION COMPLETE</span><h3>${score} / ${questions.length}</h3><p>${message}</p><p class="quiz-result-hint">Your answers and explanations are shown above.</p>`;
    result.hidden = false;
    progress.textContent = 'Quiz complete';
    submit.hidden = true;
    retry.hidden = false;
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  });

  retry.addEventListener('click', () => {
    form.reset();
    submitted = false;
    form.querySelectorAll('input').forEach(input => { input.disabled = false; });
    container.querySelectorAll('.quiz-question').forEach(fieldset => fieldset.classList.remove('quiz-correct', 'quiz-incorrect'));
    container.querySelectorAll('.correct-answer').forEach(label => label.classList.remove('correct-answer'));
    container.querySelectorAll('.quiz-feedback').forEach(feedback => { feedback.hidden = true; feedback.textContent = ''; });
    result.hidden = true;
    result.innerHTML = '';
    submit.hidden = false;
    retry.hidden = true;
    progress.textContent = `0 of ${questions.length} answered`;
    form.querySelector('input').focus();
  });
})();
