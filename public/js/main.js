(function() {
  var menuItems, page;

  menuItems = [
    {
      name: 'Who',
      url: '/who',
      id: 'id-who'
    }, {
      name: 'What',
      url: '/what',
      id: 'id-what'
    }, {
      name: 'How',
      url: '/how',
      id: 'id-how'
    }, {
      name: 'Contact',
      url: '/contact',
      id: 'id-contact'
    }
  ];

  page = document.location.pathname.slice(1);

  $('#navbar').html(templates.navbar({
    logo: '/img/Logos/logo-' + page + '.svg',
    logotype: '/img/Logos/logotype-' + page + '.svg',
    menuItems: menuItems,
    className: page
  }));

  $('#content').addClass(page + '-page');

  $('.id-' + page).addClass('active');

}).call(this);

 //# sourceMappingURL=main.js.map