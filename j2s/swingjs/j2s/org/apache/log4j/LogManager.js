(function(){var P$=Clazz.newPackage("org.apache.log4j"),I$=[[0,'org.apache.log4j.Level','org.apache.log4j.Category',['org.apache.log4j.LogManager','.PrivateManager'],'org.apache.log4j.LogManager','org.apache.log4j.helpers.NullEnumeration',['org.apache.log4j.LogManager','.Repository'],'org.apache.log4j.Logger','org.apache.log4j.legacy.core.ContextUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogManager", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.REPOSITORY=Clazz.new_($I$(6,1));
{
var core=false;
try {
if (Clazz.forName("org.apache.logging.log4j.core.LoggerContext") != null ) {
core=true;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
C$.isLog4jCore=core;
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['isLog4jCore'],'S',['DEFAULT_CONFIGURATION_FILE','DEFAULT_CONFIGURATION_KEY','CONFIGURATOR_CLASS_KEY','DEFAULT_INIT_OVERRIDE_KEY','DEFAULT_XML_CONFIGURATION_FILE'],'O',['REPOSITORY','org.apache.log4j.spi.LoggerRepository']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getRootLogger$', function () {
return $I$(2).getInstance$org_apache_logging_log4j_spi_LoggerContext$S($I$(3).getContext$(), "");
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return $I$(2).getInstance$org_apache_logging_log4j_spi_LoggerContext$S($I$(3).getContext$(), name);
}, 1);

Clazz.newMeth(C$, 'getLogger$Class', function (clazz) {
return $I$(2).getInstance$org_apache_logging_log4j_spi_LoggerContext$S($I$(3).getContext$(), clazz.getName$());
}, 1);

Clazz.newMeth(C$, 'getLogger$S$org_apache_log4j_spi_LoggerFactory', function (name, factory) {
return $I$(2).getInstance$org_apache_logging_log4j_spi_LoggerContext$S($I$(3).getContext$(), name);
}, 1);

Clazz.newMeth(C$, 'exists$S', function (name) {
var ctx=$I$(3).getContext$();
if (!ctx.hasLogger$S(name)) {
return null;
}return $I$(7).getLogger$S(name);
}, 1);

Clazz.newMeth(C$, 'getCurrentLoggers$', function () {
return $I$(5).getInstance$();
}, 1);

Clazz.newMeth(C$, 'reconfigure$', function () {
if (C$.isLog4jCore) {
var ctx=$I$(3).getContext$();
$I$(8).reconfigure$org_apache_logging_log4j_spi_LoggerContext(ctx);
}}, 1);

Clazz.newMeth(C$, 'shutdown$', function () {
}, 1);

Clazz.newMeth(C$, 'resetConfiguration$', function () {
}, 1);

Clazz.newMeth(C$, 'setRepositorySelector$org_apache_log4j_spi_RepositorySelector$O', function (selector, guard) {
}, 1);

Clazz.newMeth(C$, 'getLoggerRepository$', function () {
return C$.REPOSITORY;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "Repository", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.apache.log4j.spi.LoggerRepository');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'addHierarchyEventListener$org_apache_log4j_spi_HierarchyEventListener', function (listener) {
});

Clazz.newMeth(C$, 'isDisabled$I', function (level) {
return false;
});

Clazz.newMeth(C$, 'setThreshold$org_apache_log4j_Level', function (level) {
});

Clazz.newMeth(C$, 'setThreshold$S', function (val) {
});

Clazz.newMeth(C$, 'emitNoAppenderWarning$org_apache_log4j_Category', function (cat) {
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return $I$(1).OFF;
});

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return $I$(2).getInstance$org_apache_logging_log4j_spi_LoggerContext$S($I$(3).getContext$(), name);
});

Clazz.newMeth(C$, 'getLogger$S$org_apache_log4j_spi_LoggerFactory', function (name, factory) {
return $I$(2).getInstance$org_apache_logging_log4j_spi_LoggerContext$S($I$(3).getContext$(), name);
});

Clazz.newMeth(C$, 'getRootLogger$', function () {
return $I$(2).getRoot$org_apache_logging_log4j_spi_LoggerContext($I$(3).getContext$());
});

Clazz.newMeth(C$, 'exists$S', function (name) {
return $I$(4).exists$S(name);
});

Clazz.newMeth(C$, 'shutdown$', function () {
});

Clazz.newMeth(C$, 'getCurrentLoggers$', function () {
return $I$(5).getInstance$();
});

Clazz.newMeth(C$, 'getCurrentCategories$', function () {
return $I$(5).getInstance$();
});

Clazz.newMeth(C$, 'fireAddAppenderEvent$org_apache_log4j_Category$org_apache_log4j_Appender', function (logger, appender) {
});

Clazz.newMeth(C$, 'resetConfiguration$', function () {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LogManager, "PrivateManager", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.apache.logging.log4j.LogManager');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$FQCN=Clazz.getClass($I$(4)).getName$();
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
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:27:31 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
