(function(){var P$=Clazz.newPackage("org.apache.log4j"),I$=[[0,'org.apache.log4j.Logger',['org.apache.log4j.Logger','.PrivateManager'],'org.apache.log4j.Category']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Logger", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.apache.log4j.Category');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$org_apache_logging_log4j_spi_LoggerContext$S.apply(this, [$I$(2).getContext$(), name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_spi_LoggerContext$S', function (context, name) {
;C$.superclazz.c$$org_apache_logging_log4j_spi_LoggerContext$S.apply(this, [context, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return $I$(3).getInstance$org_apache_logging_log4j_spi_LoggerContext$S($I$(2).getContext$(), name);
}, 1);

Clazz.newMeth(C$, 'getLogger$Class', function (clazz) {
return $I$(3).getInstance$org_apache_logging_log4j_spi_LoggerContext$Class($I$(2).getContext$(), clazz);
}, 1);

Clazz.newMeth(C$, 'getRootLogger$', function () {
return $I$(3).getRoot$org_apache_logging_log4j_spi_LoggerContext($I$(2).getContext$());
}, 1);

Clazz.newMeth(C$, 'getLogger$S$org_apache_log4j_spi_LoggerFactory', function (name, factory) {
return $I$(3).getInstance$org_apache_logging_log4j_spi_LoggerContext$S$org_apache_log4j_spi_LoggerFactory($I$(2).getContext$(), name, factory);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Logger, "PrivateManager", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.apache.logging.log4j.LogManager');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$FQCN=Clazz.getClass($I$(1)).getName$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['$FQCN']]]

Clazz.newMeth(C$, 'getContext$', function () {
return org.apache.logging.log4j.LogManager.getContext$S$Z(C$.$FQCN, false);
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return org.apache.logging.log4j.LogManager.getLogger$S$S(C$.$FQCN, name);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
