Package.describe({
  name: 'app-test',
});

Npm.depends({
  "react": "0.14.6",
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.4');
  api.use('ecmascript');

  api.addFiles('form.jsx', 'client');

  api.export('App');
});
