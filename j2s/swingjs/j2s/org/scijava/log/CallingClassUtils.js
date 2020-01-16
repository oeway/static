(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[[0,'Thread','org.scijava.log.IgnoreAsCallingClass']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CallingClassUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCallingClass$', function () {
try {
var stackTrace=$I$(1).currentThread$().getStackTrace$();
for (var i=1; i < stackTrace.length - 1; i++) {
var clazz=Clazz.forName(stackTrace[i].getClassName$());
if (!clazz.isAnnotationPresent$Class(Clazz.getClass($I$(2),[]))) return clazz;
}
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"ClassNotFoundException")){
} else {
throw ignore;
}
}
throw Clazz.new_(Clazz.load('IllegalStateException'));
}, 1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.log.CallingClassUtils',null,['org.scijava.log.IgnoreAsCallingClass']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
