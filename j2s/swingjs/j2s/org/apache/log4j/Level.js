(function(){var P$=Clazz.newPackage("org.apache.log4j"),p$1={},I$=[[0,'java.util.Locale']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Level", null, 'org.apache.log4j.Priority', 'java.io.Serializable');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.OFF=Clazz.new_(C$.c$$I$S$I,[2147483647, "OFF", 0]);
C$.$FATAL=Clazz.new_(C$.c$$I$S$I,[50000, "FATAL", 0]);
C$.$ERROR=Clazz.new_(C$.c$$I$S$I,[40000, "ERROR", 3]);
C$.$WARN=Clazz.new_(C$.c$$I$S$I,[30000, "WARN", 4]);
C$.$INFO=Clazz.new_(C$.c$$I$S$I,[20000, "INFO", 6]);
C$.$DEBUG=Clazz.new_(C$.c$$I$S$I,[10000, "DEBUG", 7]);
C$.TRACE=Clazz.new_(C$.c$$I$S$I,[5000, "TRACE", 7]);
C$.ALL=Clazz.new_(C$.c$$I$S$I,[-2147483648, "ALL", 7]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['TRACE_INT'],'L',['serialVersionUID'],'O',['OFF','org.apache.log4j.Level','+$FATAL','+$ERROR','+$WARN','+$INFO','+$DEBUG','+TRACE','+ALL']]]

Clazz.newMeth(C$, 'c$$I$S$I', function (level, levelStr, syslogEquivalent) {
;C$.superclazz.c$$I$S$I.apply(this, [level, levelStr, syslogEquivalent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toLevel$S', function (sArg) {
return C$.toLevel$S$org_apache_log4j_Level(sArg, C$.$DEBUG);
}, 1);

Clazz.newMeth(C$, 'toLevel$I', function (val) {
return C$.toLevel$I$org_apache_log4j_Level(val, C$.$DEBUG);
}, 1);

Clazz.newMeth(C$, 'toLevel$I$org_apache_log4j_Level', function (val, defaultLevel) {
switch (val) {
case -2147483648:
return C$.ALL;
case 10000:
return C$.$DEBUG;
case 20000:
return C$.$INFO;
case 30000:
return C$.$WARN;
case 40000:
return C$.$ERROR;
case 50000:
return C$.$FATAL;
case 2147483647:
return C$.OFF;
case 5000:
return C$.TRACE;
default:
return defaultLevel;
}
}, 1);

Clazz.newMeth(C$, 'toLevel$S$org_apache_log4j_Level', function (sArg, defaultLevel) {
if (sArg == null ) {
return defaultLevel;
}var s=sArg.toUpperCase$java_util_Locale($I$(1).ROOT);
switch (s) {
case "ALL":
return C$.ALL;
case "DEBUG":
return C$.$DEBUG;
case "INFO":
return C$.$INFO;
case "WARN":
return C$.$WARN;
case "ERROR":
return C$.$ERROR;
case "FATAL":
return C$.$FATAL;
case "OFF":
return C$.OFF;
case "TRACE":
return C$.TRACE;
default:
return defaultLevel;
}
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
this.level=s.readInt$();
this.syslogEquivalent=s.readInt$();
this.levelStr=s.readUTF$();
if (this.levelStr == null ) {
this.levelStr="";
}}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.level);
s.writeInt$I(this.syslogEquivalent);
s.writeUTF$S(this.levelStr);
}, p$1);

Clazz.newMeth(C$, 'readResolve$', function () {
if (this.getClass$() === Clazz.getClass(C$) ) {
return C$.toLevel$I(this.level);
}return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
