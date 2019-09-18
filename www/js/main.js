var $$ = Dom7;

var items   = [];

var app = new Framework7({
  root: '#app',
  id:   'com.askitchen.stockinfo',
  name: 'Stock Info',

  data: function () {
    return {
      // db: null,
      // username: null,
      // password: null,

      endpoint: 'https://askitchen.com/api/v1/',

    };
  },
  // App root methods
  methods: {
    
    itemExists: function(kode) {
      
      var bFound = false;

      for (var i=0; i < items.length; i++)
        if (items[i].kdbar === kode) {
          
          bFound = true;
          break;
        }
      return bFound;
    },
  },
  routes: [
    // Add your routes here
    // Example:
    /*
    {
      path: '/about/',
      url: 'about.html',
    },
    */
    {
      path: '/',
      async: function (routeTo, routeFrom, resolve, reject) {
        // Router instance
        // var router = this;

        // App instance
        // var app = router.app;

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/home.html',
          }
        );
      },
    }
  ],
});

var mainView = app.views.create('.view-main', {
  url: '/'
});
