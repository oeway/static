(function(){var P$=Clazz.newPackage("org.scijava.log"),p$1={},I$=[[0,'org.scijava.log.LogSource',['org.scijava.log.AbstractLogService','.RootLogger'],'org.scijava.log.LogLevel','org.scijava.log.CallingClassUtils','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractLogService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'org.scijava.log.LogService');
C$.$classes$=[['RootLogger',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentLevel=p$1.levelFromEnvironment.apply(this, []);
}, 1);

C$.$fields$=[['I',['currentLevel'],'O',['classAndPackageLevels','java.util.Map','rootLogger','org.scijava.log.Logger']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_Properties.apply(this, [System.getProperties$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Properties', function (properties) {
Clazz.super_(C$, this);
this.rootLogger=Clazz.new_($I$(2,1), [this, null]);
var level=$I$(3).value$S(properties.getProperty$S("scijava.log.level"));
if (level >= 0) this.currentLevel=level;
this.classAndPackageLevels=p$1.setupMapFromProperties$java_util_Properties$S.apply(this, [properties, "scijava.log.level:"]);
p$1.initLogSourceLevels$java_util_Properties.apply(this, [properties]);
}, 1);

Clazz.newMeth(C$, 'setLevel$I', function (level) {
this.currentLevel=level;
});

Clazz.newMeth(C$, 'setLevel$S$I', function (classOrPackageName, level) {
this.classAndPackageLevels.put$TK$TV(classOrPackageName, new Integer(level));
});

Clazz.newMeth(C$, 'setLevelForLogger$S$I', function (source, level) {
this.rootLogger.getSource$().subSource$S(source).setLogLevel$I(level);
});

Clazz.newMeth(C$, 'alwaysLog$I$O$Throwable', function (level, msg, t) {
this.rootLogger.alwaysLog$I$O$Throwable(level, msg, t);
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.rootLogger.getSource$();
});

Clazz.newMeth(C$, 'getLevel$', function () {
if (this.classAndPackageLevels.isEmpty$()) return this.currentLevel;
return p$1.getLevelForClass$S$I.apply(this, [$I$(4).getCallingClass$().getName$(), this.currentLevel]);
});

Clazz.newMeth(C$, 'subLogger$S$I', function (name, level) {
return this.rootLogger.subLogger$S$I(name, level);
});

Clazz.newMeth(C$, 'addLogListener$org_scijava_log_LogListener', function (listener) {
this.rootLogger.addLogListener$org_scijava_log_LogListener(listener);
});

Clazz.newMeth(C$, 'removeLogListener$org_scijava_log_LogListener', function (listener) {
this.rootLogger.removeLogListener$org_scijava_log_LogListener(listener);
});

Clazz.newMeth(C$, 'notifyListeners$org_scijava_log_LogMessage', function (event) {
this.rootLogger.notifyListeners$org_scijava_log_LogMessage(event);
});

Clazz.newMeth(C$, 'getPrefix$I', function (level) {
return "[" + $I$(3).prefix$I(level) + "]" ;
});

Clazz.newMeth(C$, 'initLogSourceLevels$java_util_Properties', function (properties) {
var nameLevels=p$1.setupMapFromProperties$java_util_Properties$S.apply(this, [properties, "scijava.log.level.source:"]);
nameLevels.forEach$java_util_function_BiConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "AbstractLogService$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return $$.setLevelForLogger$S$I.apply($$,[t,u])});
})()
)); return Clazz.new_(1,{T:"? super java.lang.String",U:"? super java.lang.Integer"},P$.AbstractLogService$lambda1.$init$, [this, null])})(this));
}, p$1);

Clazz.newMeth(C$, 'getLevelForClass$S$I', function (classOrPackageName, defaultLevel) {
while (classOrPackageName != null ){
var level=this.classAndPackageLevels.get$O(classOrPackageName);
if (level != null ) return (level).valueOf();
classOrPackageName=p$1.parentPackage$S.apply(this, [classOrPackageName]);
}
return defaultLevel;
}, p$1);

Clazz.newMeth(C$, 'parentPackage$S', function (classOrPackageName) {
var dot=classOrPackageName.lastIndexOf$S(".");
if (dot < 0) return null;
return classOrPackageName.substring$I$I(0, dot);
}, p$1);

Clazz.newMeth(C$, 'levelFromEnvironment', function () {
return System.getenv$S("DEBUG") == null  ? 3 : 4;
}, p$1);

Clazz.newMeth(C$, 'setupMapFromProperties$java_util_Properties$S', function (properties, prefix) {
var map=Clazz.new_(1,{K:"String",V:"Integer"},$I$(5,1));
for (var propName, $propName = properties.stringPropertyNames$().iterator$(); $propName.hasNext$()&&((propName=($propName.next$())),1);) if (propName.startsWith$S(prefix)) {
var key=propName.substring$I(prefix.length$());
map.put$TK$TV(key, new Integer($I$(3).value$S(properties.getProperty$S(propName))));
}
return map;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.log.AbstractLogService',null,['org.scijava.log.IgnoreAsCallingClass']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractLogService, "RootLogger", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.scijava.log.DefaultLogger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$org_scijava_log_LogListener$org_scijava_log_LogSource$I.apply(this,[(function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "AbstractLogService$RootLogger$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.scijava.log.LogListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'messageLogged$', function (t) { return $$.messageLogged$org_scijava_log_LogMessage.apply($$,[t])});
})()
)); return Clazz.new_(P$.AbstractLogService$RootLogger$lambda1.$init$, [this, null])})(this.this$0), $I$(1).newRoot$(), 0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLevel$', function () {
return this.this$0.getLevel$.apply(this.this$0, []);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.log.AbstractLogService.RootLogger',null,['org.scijava.log.IgnoreAsCallingClass']],['']]]}
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
