(function(){var P$=Clazz.newPackage("org.apache.log4j"),I$=[[0,'java.util.HashMap','InheritableThreadLocal','org.apache.logging.log4j.ThreadContext','java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MDC");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.localMap=((P$.MDC$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MDC$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('InheritableThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'initialValue$', function () {
return Clazz.new_(1,{V:"String",K:"java.lang.Object"},$I$(1,1));
});

Clazz.newMeth(C$, ['childValue$java_util_Map','childValue$TT'], function (parentValue) {
return parentValue == null  ? Clazz.new_(1,{V:"String",K:"java.lang.Object"},$I$(1,1)) : Clazz.new_(1,{V:"String",K:"java.lang.Object"},$I$(1,1).c$$java_util_Map,[parentValue]);
});
})()
), Clazz.new_(1,{T:"java.util.Map"},$I$(2,1), [this, null],P$.MDC$1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['localMap','ThreadLocal']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'put$S$S', function (key, value) {
C$.localMap.get$().put$TK$TV(key, value);
$I$(3).put$S$S(key, value);
}, 1);

Clazz.newMeth(C$, 'put$S$O', function (key, value) {
C$.localMap.get$().put$TK$TV(key, value);
$I$(3).put$S$S(key, value.toString());
}, 1);

Clazz.newMeth(C$, 'get$S', function (key) {
return C$.localMap.get$().get$O(key);
}, 1);

Clazz.newMeth(C$, 'remove$S', function (key) {
C$.localMap.get$().remove$O(key);
$I$(3).remove$S(key);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
C$.localMap.get$().clear$();
$I$(3).clearMap$();
}, 1);

Clazz.newMeth(C$, 'getContext$', function () {
return Clazz.new_(1,{V:"String",K:"java.lang.Object"},$I$(4,1).c$$java_util_Map,[C$.localMap.get$()]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
