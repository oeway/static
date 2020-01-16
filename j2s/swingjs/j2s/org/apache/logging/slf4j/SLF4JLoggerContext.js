(function(){var P$=Clazz.newPackage("org.apache.logging.slf4j"),I$=[[0,'org.apache.logging.log4j.spi.LoggerRegistry','org.apache.logging.slf4j.SLF4JLogger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SLF4JLoggerContext", null, null, 'org.apache.logging.log4j.spi.LoggerContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.loggerRegistry=Clazz.new_(1,{T:"org.apache.logging.log4j.spi.ExtendedLogger"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['loggerRegistry','org.apache.logging.log4j.spi.LoggerRegistry']]]

Clazz.newMeth(C$, 'getExternalContext$', function () {
return null;
});

Clazz.newMeth(C$, 'getLogger$S', function (name) {
if (!this.loggerRegistry.hasLogger$S(name)) {
this.loggerRegistry.putIfAbsent$S$org_apache_logging_log4j_message_MessageFactory$TT(name, null, Clazz.new_($I$(2,1).$init$));
}return this.loggerRegistry.getLogger$S(name);
});

Clazz.newMeth(C$, 'getLogger$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
if (!this.loggerRegistry.hasLogger$S(name)) {
this.loggerRegistry.putIfAbsent$S$org_apache_logging_log4j_message_MessageFactory$TT(name, null, Clazz.new_($I$(2,1).$init$));
}return this.loggerRegistry.getLogger$S(name);
});

Clazz.newMeth(C$, 'hasLogger$S', function (name) {
return this.loggerRegistry.hasLogger$S(name);
});

Clazz.newMeth(C$, 'hasLogger$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
return this.loggerRegistry.hasLogger$S$org_apache_logging_log4j_message_MessageFactory(name, messageFactory);
});

Clazz.newMeth(C$, 'hasLogger$S$Class', function (name, messageFactoryClass) {
return this.loggerRegistry.hasLogger$S$Class(name, messageFactoryClass);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
