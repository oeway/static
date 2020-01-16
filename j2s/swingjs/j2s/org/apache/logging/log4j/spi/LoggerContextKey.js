(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'org.apache.logging.log4j.spi.AbstractLogger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoggerContextKey");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'create$S', function (name) {
return C$.create$S$Class(name, $I$(1).DEFAULT_MESSAGE_FACTORY_CLASS);
}, 1);

Clazz.newMeth(C$, 'create$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
var messageFactoryClass=messageFactory != null  ? messageFactory.getClass$() : $I$(1).DEFAULT_MESSAGE_FACTORY_CLASS;
return C$.create$S$Class(name, messageFactoryClass);
}, 1);

Clazz.newMeth(C$, 'create$S$Class', function (name, messageFactoryClass) {
var mfClass=messageFactoryClass != null  ? messageFactoryClass : $I$(1).DEFAULT_MESSAGE_FACTORY_CLASS;
return name + "." + mfClass.getName$() ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
