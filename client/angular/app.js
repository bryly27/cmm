var cosplay = angular.module('cosplay', ['ngRoute', 'LocalStorageModule']);

cosplay.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**',
    'https://scontent.cdninstagram.com/**'
  ]);
});

cosplay.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
		})
		.when('/news',{
			templateUrl: '../partials/news.html',
		})
		.when('/blog',{
			templateUrl: 'partials/blog.html',
		})
		.when('/cosplayers',{
			templateUrl: 'partials/cosplayers.html',
		})
		.when('/contact',{
			templateUrl: 'partials/contact.html',
		})
		.when('/admin_login',{
			templateUrl: 'partials/admin/admin_login.html',
		})
		.when('/admin_home', {
			templateUrl: 'partials/admin/admin_home.html',
		})
		.when('/admin_email', {
			templateUrl: 'partials/admin/admin_email.html',
		})
		.otherwise({
			redirectTo: '/'
		})
})