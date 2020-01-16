(function(){var P$=Clazz.newPackage("org.apache.log4j"),I$=[[0,'org.apache.log4j.Level']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Priority");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.FATAL=Clazz.new_($I$(1,1).c$$I$S$I,[50000, "FATAL", 0]);
C$.ERROR=Clazz.new_($I$(1,1).c$$I$S$I,[40000, "ERROR", 3]);
C$.WARN=Clazz.new_($I$(1,1).c$$I$S$I,[30000, "WARN", 4]);
C$.INFO=Clazz.new_($I$(1,1).c$$I$S$I,[20000, "INFO", 6]);
C$.DEBUG=Clazz.new_($I$(1,1).c$$I$S$I,[10000, "DEBUG", 7]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['level','syslogEquivalent'],'S',['levelStr']]
,['I',['OFF_INT','FATAL_INT','ERROR_INT','WARN_INT','INFO_INT','DEBUG_INT','ALL_INT'],'O',['FATAL','org.apache.log4j.Priority','+ERROR','+WARN','+INFO','+DEBUG']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.level=10000;
this.levelStr="DEBUG";
this.syslogEquivalent=7;
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I', function (level, levelStr, syslogEquivalent) {
;C$.$init$.apply(this);
this.level=level;
this.levelStr=levelStr;
this.syslogEquivalent=syslogEquivalent;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (Clazz.instanceOf(o, "org.apache.log4j.Priority")) {
var r=o;
return this.level == r.level;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.level;
});

Clazz.newMeth(C$, 'getSyslogEquivalent$', function () {
return this.syslogEquivalent;
});

Clazz.newMeth(C$, 'isGreaterOrEqual$org_apache_log4j_Priority', function (r) {
return this.level >= r.level;
});

Clazz.newMeth(C$, 'getAllPossiblePriorities$', function () {
return Clazz.array(C$, -1, [C$.FATAL, C$.ERROR, $I$(1).$WARN, C$.INFO, C$.DEBUG]);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.levelStr;
});

Clazz.newMeth(C$, 'toInt$', function () {
return this.level;
});

Clazz.newMeth(C$, 'toPriority$S', function (sArg) {
return $I$(1).toLevel$S(sArg);
}, 1);

Clazz.newMeth(C$, 'toPriority$I', function (val) {
return C$.toPriority$I$org_apache_log4j_Priority(val, C$.DEBUG);
}, 1);

Clazz.newMeth(C$, 'toPriority$I$org_apache_log4j_Priority', function (val, defaultPriority) {
return $I$(1).toLevel$I$org_apache_log4j_Level(val, defaultPriority);
}, 1);

Clazz.newMeth(C$, 'toPriority$S$org_apache_log4j_Priority', function (sArg, defaultPriority) {
return $I$(1).toLevel$S$org_apache_log4j_Level(sArg, defaultPriority);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
