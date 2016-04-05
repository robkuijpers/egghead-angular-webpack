//module.exports = function(ngModule) {
export default ngModule => {

  if(ON_TEST){
    require('./kcd-hello.test')(ngModule);
  }

  ngModule.directive('kcdHello', function($log) {
    require('./kcd-hello.scss');
    return {
      restrict: 'E',
      scope: {},
      template: require('./kcd-hello.html'),
      controllerAs: 'vm',
      controller: function() {
        var vm = this;
        console.log('test');
        vm.greeting = 'Hello Webpack';
        $log.info('I have some info');
      }
    }
  });
}
