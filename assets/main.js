document.getElementById('year').innerHTML = new Date().getFullYear()

const scrollHeight = 300

const topArrow = document.querySelector('.top-arrow')

const scrollContainer = () => {
  return document.documentElement || document.body
}

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > scrollHeight) {
    topArrow.classList.remove('hidden')
  } else {
    topArrow.classList.add('hidden')
  }
})
