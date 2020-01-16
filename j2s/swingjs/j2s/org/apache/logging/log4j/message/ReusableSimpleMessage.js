(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'org.apache.logging.log4j.message.SimpleMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReusableSimpleMessage", null, null, ['org.apache.logging.log4j.message.ReusableMessage', 'CharSequence', 'org.apache.logging.log4j.message.ParameterVisitable', 'org.apache.logging.log4j.message.Clearable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY_PARAMS=Clazz.array(java.lang.Object, [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['charSequence','CharSequence']]
,['L',['serialVersionUID'],'O',['EMPTY_PARAMS','Object[]']]]

Clazz.newMeth(C$, 'set$S', function (message) {
this.charSequence=message;
});

Clazz.newMeth(C$, 'set$CharSequence', function (charSequence) {
this.charSequence=charSequence;
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
return String.valueOf$O(this.charSequence);
});

Clazz.newMeth(C$, 'getFormat$', function () {
return Clazz.instanceOf(this.charSequence, "java.lang.String") ? this.charSequence : null;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return C$.EMPTY_PARAMS;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return null;
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
buffer.append$CharSequence(this.charSequence);
});

Clazz.newMeth(C$, 'swapParameters$OA', function (emptyReplacement) {
return emptyReplacement;
});

Clazz.newMeth(C$, 'getParameterCount$', function () {
return $s$[0] = 0, $s$[0];
});

Clazz.newMeth(C$, ['forEachParameter$org_apache_logging_log4j_message_ParameterConsumer$TS','forEachParameter$'], function (action, state) {
});

Clazz.newMeth(C$, 'memento$', function () {
return Clazz.new_($I$(1,1).c$$CharSequence,[this.charSequence]);
});

Clazz.newMeth(C$, 'length$', function () {
return this.charSequence == null  ? 0 : this.charSequence.length$();
});

Clazz.newMeth(C$, 'charAt$I', function (index) {
return this.charSequence.charAt$I(index);
});

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
return this.charSequence.subSequence$I$I(start, end);
});

Clazz.newMeth(C$, 'clear$', function () {
this.charSequence=null;
});
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[[null,'org.apache.logging.log4j.message.ReusableSimpleMessage',null,['org.apache.logging.log4j.util.PerformanceSensitive']],['"allocation"']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
