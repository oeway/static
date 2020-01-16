(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.simple"),I$=[[0,'org.apache.logging.log4j.spi.LoggerRegistry','org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.Level','java.io.FileOutputStream','java.io.PrintStream','org.apache.logging.log4j.spi.AbstractLogger','org.apache.logging.log4j.simple.SimpleLogger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleLoggerContext", null, null, 'org.apache.logging.log4j.spi.LoggerContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.loggerRegistry=Clazz.new_(1,{T:"org.apache.logging.log4j.spi.ExtendedLogger"},$I$(1,1));
}, 1);

C$.$fields$=[['Z',['showLogName','showShortName','showDateTime','showContextMap'],'S',['dateTimeFormat'],'O',['props','org.apache.logging.log4j.util.PropertiesUtil','defaultLevel','org.apache.logging.log4j.Level','stream','java.io.PrintStream','loggerRegistry','org.apache.logging.log4j.spi.LoggerRegistry']]
,['S',['SYSTEM_OUT','SYSTEM_ERR','DEFAULT_DATE_TIME_FORMAT','SYSTEM_PREFIX']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.props=Clazz.new_($I$(2,1).c$$S,["log4j2.simplelog.properties"]);
this.showContextMap=this.props.getBooleanProperty$S$Z("org.apache.logging.log4j.simplelog.showContextMap", false);
this.showLogName=this.props.getBooleanProperty$S$Z("org.apache.logging.log4j.simplelog.showlogname", false);
this.showShortName=this.props.getBooleanProperty$S$Z("org.apache.logging.log4j.simplelog.showShortLogname", true);
this.showDateTime=this.props.getBooleanProperty$S$Z("org.apache.logging.log4j.simplelog.showdatetime", false);
var lvl=this.props.getStringProperty$S("org.apache.logging.log4j.simplelog.level");
this.defaultLevel=$I$(3).toLevel$S$org_apache_logging_log4j_Level(lvl, $I$(3).ERROR);
this.dateTimeFormat=this.showDateTime ? this.props.getStringProperty$S$S("org.apache.logging.log4j.simplelog.dateTimeFormat", "yyyy/MM/dd HH:mm:ss:SSS zzz") : null;
var fileName=this.props.getStringProperty$S$S("org.apache.logging.log4j.simplelog.logFile", "system.err");
var ps;
if ("system.err".equalsIgnoreCase$S(fileName)) {
ps=System.err;
} else if ("system.out".equalsIgnoreCase$S(fileName)) {
ps=System.out;
} else {
try {
var os=Clazz.new_($I$(4,1).c$$S,[fileName]);
ps=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[os]);
} catch (fnfe) {
if (Clazz.exceptionOf(fnfe,"java.io.FileNotFoundException")){
ps=System.err;
} else {
throw fnfe;
}
}
}this.stream=ps;
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return this.getLogger$S$org_apache_logging_log4j_message_MessageFactory(name, null);
});

Clazz.newMeth(C$, 'getLogger$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
var extendedLogger=this.loggerRegistry.getLogger$S$org_apache_logging_log4j_message_MessageFactory(name, messageFactory);
if (extendedLogger != null ) {
$I$(6).checkMessageFactory$org_apache_logging_log4j_spi_ExtendedLogger$org_apache_logging_log4j_message_MessageFactory(extendedLogger, messageFactory);
return extendedLogger;
}var simpleLogger=Clazz.new_($I$(7,1).c$$S$org_apache_logging_log4j_Level$Z$Z$Z$Z$S$org_apache_logging_log4j_message_MessageFactory$org_apache_logging_log4j_util_PropertiesUtil$java_io_PrintStream,[name, this.defaultLevel, this.showLogName, this.showShortName, this.showDateTime, this.showContextMap, this.dateTimeFormat, messageFactory, this.props, this.stream]);
this.loggerRegistry.putIfAbsent$S$org_apache_logging_log4j_message_MessageFactory$TT(name, messageFactory, simpleLogger);
return this.loggerRegistry.getLogger$S$org_apache_logging_log4j_message_MessageFactory(name, messageFactory);
});

Clazz.newMeth(C$, 'hasLogger$S', function (name) {
return false;
});

Clazz.newMeth(C$, 'hasLogger$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
return false;
});

Clazz.newMeth(C$, 'hasLogger$S$Class', function (name, messageFactoryClass) {
return false;
});

Clazz.newMeth(C$, 'getExternalContext$', function () {
return null;
});
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
