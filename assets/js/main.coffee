console.log 'hello there!'

console.log location
console.log templates
$('#navbar').html(templates.navbar({
  location: document.location.pathname,
  logo: '/img/Logos/logo-who.svg',
  logotype: '/img/Logos/logotype-who.svg'
  })
)
