const buttonEl = document.querySelector('button')
buttonEl.addEventListener('click', e => {
  // alert('알림창이 떴습니다')
  const name = prompt('이름이 무엇인가요?')
  document.querySelector('h1').textContent = 'name'
})