(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.util.LoaderUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Constants");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.IS_WEB_APP=$I$(1).getProperties$().getBooleanProperty$S$Z("log4j2.is.webapp", C$.isClassAvailable$S("javax.servlet.Servlet"));
C$.ENABLE_THREADLOCALS=!C$.IS_WEB_APP && $I$(1).getProperties$().getBooleanProperty$S$Z("log4j2.enable.threadlocals", true) ;
C$.JAVA_MAJOR_VERSION=C$.getMajorVersion$();
C$.MAX_REUSABLE_MESSAGE_SIZE=C$.size$S$I("log4j.maxReusableMsgSize", 518);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['IS_WEB_APP','ENABLE_THREADLOCALS'],'I',['JAVA_MAJOR_VERSION','MAX_REUSABLE_MESSAGE_SIZE'],'S',['LOG4J2_DEBUG']]]

Clazz.newMeth(C$, 'size$S$I', function (property, defaultValue) {
return $I$(1).getProperties$().getIntegerProperty$S$I(property, defaultValue);
}, 1);

Clazz.newMeth(C$, 'isClassAvailable$S', function (className) {
try {
return $I$(2).loadClass$S(className) != null ;
} catch (e) {
return false;
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMajorVersion$', function () {
return C$.getMajorVersion$S(System.getProperty$S("java.version"));
}, 1);

Clazz.newMeth(C$, 'getMajorVersion$S', function (version) {
var parts=version.split$S("-|\\.");
var isJEP223;
try {
var token=Integer.parseInt$S(parts[0]);
isJEP223=token != 1;
if (isJEP223) {
return token;
}return Integer.parseInt$S(parts[1]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return 0;
} else {
throw ex;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
