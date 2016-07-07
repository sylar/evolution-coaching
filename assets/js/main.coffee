menuItems = [{
    name: {
      fr: 'Qui',
      en: "Who"
    },
    url: 'who',
    id: 'id-who'

  },{
    name: {
      fr: 'Quelle',
      en: 'What'
    },
    url:  'what',
    id: 'id-what'

  },{
    name: {
      fr: 'Comment',
      en: 'How'
    },
    url: 'how',
    id: 'id-how'
  },{
    name: {
      fr: 'Contact',
      en: 'Contact'
    },
    url: 'contact',
    id: 'id-contact'

  }]


page = document.location.pathname.split('/')[document.location.pathname.split('/').length - 1]

if (!localStorage.lang)
  localStorage.setItem('lang', 'en')

language = localStorage.getItem('lang')

console.log('language', language)

$('#navbar').html(templates.navbar({
    logo: '/img/Logos/logo-' + (page || 'who') + '.svg',
    logotype: '/img/Logos/logotype-' + (page || 'who') + '.svg',
    menuItems: menuItems,
    className: (page || 'who'),
    language: language
  })
)

$('.' + language).show();

$('#navbar .menu .switch').on 'langchange', (e) ->
  console.log e

$('#navbar .menu .switch').trigger('lang::change')
$('#navbar .menu .switch').click ->
  console.log 'click'
  if language == 'en'
    localStorage.setItem('lang', 'fr')
    language = 'fr'
    $('.fr').show()
    $('.en').hide()
    $('.lang-fr').addClass('bold')
    $('.lang-en').removeClass('bold')
  else
    localStorage.setItem('lang', 'en')
    language = 'en'
    $('.en').show()
    $('.fr').hide()
    $('.lang-en').addClass('bold')
    $('.lang-fr').removeClass('bold')
  document.querySelector('#navbar .menu .switch').dispatchEvent(new Event('langchange'))



$('#navbar .menu .switch .lang-' + language).toggleClass('bold')

if (!page)
  page = 'home'

$('#content').addClass(page + '-page')
$('#navbar').addClass(page + '-page-navbar')

$('.id-' + page).addClass('active')
