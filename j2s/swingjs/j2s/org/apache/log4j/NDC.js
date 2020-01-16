(function(){var P$=Clazz.newPackage("org.apache.log4j"),I$=[[0,'org.apache.logging.log4j.ThreadContext','java.util.Stack']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NDC");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
$I$(1).clearStack$();
}, 1);

Clazz.newMeth(C$, 'cloneStack$', function () {
var stack=Clazz.new_(1,{E:"String"},$I$(2,1));
for (var element, $element = $I$(1).cloneStack$().asList$().iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
stack.push$TE(element);
}
return stack;
}, 1);

Clazz.newMeth(C$, 'inherit$java_util_Stack', function (stack) {
$I$(1).setStack$java_util_Collection(stack);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return $I$(1).peek$();
}, 1);

Clazz.newMeth(C$, 'getDepth$', function () {
return $I$(1).getDepth$();
}, 1);

Clazz.newMeth(C$, 'pop$', function () {
return $I$(1).pop$();
}, 1);

Clazz.newMeth(C$, 'peek$', function () {
return $I$(1).peek$();
}, 1);

Clazz.newMeth(C$, 'push$S', function (message) {
$I$(1).push$S(message);
}, 1);

Clazz.newMeth(C$, 'remove$', function () {
$I$(1).removeStack$();
}, 1);

Clazz.newMeth(C$, 'setMaxDepth$I', function (maxDepth) {
$I$(1).trim$I(maxDepth);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
