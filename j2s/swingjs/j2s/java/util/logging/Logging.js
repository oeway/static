(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[[0,'java.util.logging.LogManager','java.util.ArrayList','java.util.logging.Level']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Logging", null, null, 'java.util.logging.LoggingMXBean');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.logManager=$I$(1).getLogManager$();
C$.EMPTY_STRING="";
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['EMPTY_STRING'],'O',['logManager','java.util.logging.LogManager']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLoggerNames$', function () {
var loggers=C$.logManager.getLoggerNames$();
var array=Clazz.new_(1,{E:"String"},$I$(2,1));
for (; loggers.hasMoreElements$(); ) {
array.add$TE(loggers.nextElement$());
}
return array;
});

Clazz.newMeth(C$, 'getLoggerLevel$S', function (loggerName) {
var l=C$.logManager.getLogger$S(loggerName);
if (l == null ) {
return null;
}var level=l.getLevel$();
if (level == null ) {
return C$.EMPTY_STRING;
} else {
return level.getLevelName$();
}});

Clazz.newMeth(C$, 'setLoggerLevel$S$S', function (loggerName, levelName) {
if (loggerName == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["loggerName is null"]);
}var logger=C$.logManager.getLogger$S(loggerName);
if (logger == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Logger " + loggerName + "does not exist" ]);
}var level=null;
if (levelName != null ) {
level=$I$(3).findLevel$S(levelName);
if (level == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown level \"" + levelName + "\"" ]);
}}logger.setLevel$java_util_logging_Level(level);
});

Clazz.newMeth(C$, 'getParentLoggerName$S', function (loggerName) {
var l=C$.logManager.getLogger$S(loggerName);
if (l == null ) {
return null;
}var p=l.getParent$();
if (p == null ) {
return C$.EMPTY_STRING;
} else {
return p.getName$();
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
