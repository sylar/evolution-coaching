(function() {
  var menuItems;

  menuItems = [
    {
      name: 'Who',
      url: '/who'
    }, {
      name: 'What',
      url: '/what'
    }, {
      name: 'How',
      url: '/how'
    }, {
      name: 'Contact',
      url: '/contact'
    }
  ];

  $('#navbar').html(templates.navbar({
    location: document.location.pathname,
    logo: '/img/Logos/logo-who.svg',
    logotype: '/img/Logos/logotype-who.svg',
    menuItems: menuItems
  }));

}).call(this);

 //# sourceMappingURL=main.js.map