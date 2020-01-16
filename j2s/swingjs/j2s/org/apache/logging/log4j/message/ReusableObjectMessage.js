(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'org.apache.logging.log4j.util.StringBuilders','org.apache.logging.log4j.message.ObjectMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReusableObjectMessage", null, null, ['org.apache.logging.log4j.message.ReusableMessage', 'org.apache.logging.log4j.message.ParameterVisitable', 'org.apache.logging.log4j.message.Clearable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['obj','java.lang.Object']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'set$O', function (object) {
this.obj=object;
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
return String.valueOf$O(this.obj);
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
$I$(1).appendValue$StringBuilder$O(buffer, this.obj);
});

Clazz.newMeth(C$, 'getFormat$', function () {
return Clazz.instanceOf(this.obj, "java.lang.String") ? this.obj : null;
});

Clazz.newMeth(C$, 'getParameter$', function () {
return this.obj;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return Clazz.array(java.lang.Object, -1, [this.obj]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return Clazz.instanceOf(this.obj, "java.lang.Throwable") ? this.obj : null;
});

Clazz.newMeth(C$, 'swapParameters$OA', function (emptyReplacement) {
if (emptyReplacement.length == 0) {
var params=Clazz.array(java.lang.Object, [10]);
params[0]=this.obj;
return params;
}emptyReplacement[0]=this.obj;
return emptyReplacement;
});

Clazz.newMeth(C$, 'getParameterCount$', function () {
return $s$[0] = 1, $s$[0];
});

Clazz.newMeth(C$, ['forEachParameter$org_apache_logging_log4j_message_ParameterConsumer$TS','forEachParameter$'], function (action, state) {
action.accept$(this.obj, 0, state);
});

Clazz.newMeth(C$, 'memento$', function () {
return Clazz.new_($I$(2,1).c$$O,[this.obj]);
});

Clazz.newMeth(C$, 'clear$', function () {
this.obj=null;
});
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.message.ReusableObjectMessage',null,['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
