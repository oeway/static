(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.simple"),I$=[[0,'org.apache.logging.log4j.simple.SimpleLoggerContext']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleLoggerContextFactory", null, null, 'org.apache.logging.log4j.spi.LoggerContextFactory');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.context=Clazz.new_($I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['context','org.apache.logging.log4j.spi.LoggerContext']]]

Clazz.newMeth(C$, 'getContext$S$ClassLoader$O$Z', function (fqcn, loader, externalContext, currentContext) {
return C$.context;
});

Clazz.newMeth(C$, 'getContext$S$ClassLoader$O$Z$java_net_URI$S', function (fqcn, loader, externalContext, currentContext, configLocation, name) {
return C$.context;
});

Clazz.newMeth(C$, 'removeContext$org_apache_logging_log4j_spi_LoggerContext', function (removeContext) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:58 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
