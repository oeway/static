(function(){var P$=Clazz.newPackage("sun.reflect.misc"),p$1={},I$=[[0,'Error','java.security.AccessController','java.lang.reflect.Method','swingjs.JSUtil',['sun.reflect.misc.MethodUtil','.Signature'],'InternalError','sun.reflect.misc.ReflectUtil','java.security.CodeSource','java.io.BufferedInputStream','sun.misc.IOUtils','java.security.AllPermission']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Trampoline");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
if (Clazz.getClass(C$).getClassLoader$() == null ) {
throw Clazz.new_($I$(1,1).c$$S,["Trampoline must not be defined by the bootstrap classloader"]);
}};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'ensureInvocableMethod$reflect_Method', function (m) {
var clazz=m.getDeclaringClass$();
if (clazz.equals$O(Clazz.getClass($I$(2))) || clazz.equals$O(Clazz.getClass($I$(3))) || clazz.getName$().startsWith$S("java.lang.invoke.")  ) throw Clazz.new_(Clazz.load('java.lang.reflect.InvocationTargetException').c$$Throwable,[Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["invocation not supported"])]);
}, 1);

Clazz.newMeth(C$, 'invoke$reflect_Method$O$OA', function (m, obj, params) {
C$.ensureInvocableMethod$reflect_Method(m);
return m.invoke$O$OA(obj, params);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
