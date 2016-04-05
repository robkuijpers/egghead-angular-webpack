import registerKcdHello from './kcd-hello';

export default ngModule => {
  registerKcdHello(ngModule);
}

//module.exports = function(ngModule) {
//  require('./kcd-hello')(ngModule);
//}