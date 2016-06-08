menuItems = [{
    name: 'Qui',
    url: 'who',
    id: 'id-who'

  },{
    name: 'Quelle',
    url:  'what',
    id: 'id-what'

  },{
    name: 'Comment',
    url: 'how',
    id: 'id-how'

  },{
    name: 'Contact',
    url: 'contact',
    id: 'id-contact'

  }]

page = document.location.pathname.split('/')[document.location.pathname.split('/').length - 1]
console.log page

if (!page)
  document.location.pathname += 'who'

$('#navbar').html(templates.navbar({
    logo: 'img/Logos/logo-' + (page || 'who') + '.svg',
    logotype: 'img/Logos/logotype-' + (page || 'who') + '.svg',
    menuItems: menuItems,
    className: (page || 'who')
  })
)

$('#content').addClass(page + '-page')

$('.id-' + page).addClass('active')
