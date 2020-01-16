(function(){var P$=Clazz.newPackage("org.apache.logging.slf4j"),I$=[[0,'org.apache.logging.log4j.status.StatusLogger','org.apache.logging.slf4j.SLF4JLoggerContext','org.apache.logging.log4j.util.LoaderUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SLF4JLoggerContextFactory", null, null, 'org.apache.logging.log4j.spi.LoggerContextFactory');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOGGER=$I$(1).getLogger$();
C$.context=Clazz.new_($I$(2,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['LOGGER','org.apache.logging.log4j.status.StatusLogger','context','org.apache.logging.log4j.spi.LoggerContext']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
var misconfigured=false;
try {
$I$(3).loadClass$S("org.slf4j.helpers.Log4jLoggerFactory");
misconfigured=true;
} catch (classNotFoundIsGood) {
if (Clazz.exceptionOf(classNotFoundIsGood,"ClassNotFoundException")){
C$.LOGGER.debug$S("org.slf4j.helpers.Log4jLoggerFactory is not on classpath. Good!");
} else {
throw classNotFoundIsGood;
}
}
if (misconfigured) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["slf4j-impl jar is mutually exclusive with log4j-to-slf4j jar (the first routes calls from SLF4J to Log4j, the second from Log4j to SLF4J)"]);
}}, 1);

Clazz.newMeth(C$, 'getContext$S$ClassLoader$O$Z', function (fqcn, loader, externalContext, currentContext) {
return C$.context;
});

Clazz.newMeth(C$, 'getContext$S$ClassLoader$O$Z$java_net_URI$S', function (fqcn, loader, externalContext, currentContext, configLocation, name) {
return C$.context;
});

Clazz.newMeth(C$, 'removeContext$org_apache_logging_log4j_spi_LoggerContext', function (ignored) {
});
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
