(function() {
  var menuItems, page;

  menuItems = [
    {
      name: 'Who',
      url: 'who',
      id: 'id-who'
    }, {
      name: 'What',
      url: 'what',
      id: 'id-what'
    }, {
      name: 'How',
      url: 'how',
      id: 'id-how'
    }, {
      name: 'Contact',
      url: 'contact',
      id: 'id-contact'
    }
  ];

  page = document.location.pathname.split('/')[document.location.pathname.split('/').length - 1];

  console.log(page);

  $('#navbar').html(templates.navbar({
    logo: 'img/Logos/logo-' + (page || 'who') + '.svg',
    logotype: 'img/Logos/logotype-' + (page || 'who') + '.svg',
    menuItems: menuItems,
    className: page || 'who'
  }));

  $('#content').addClass(page + '-page');

  $('.id-' + page).addClass('active');

}).call(this);

 //# sourceMappingURL=main.js.map