(function(){var P$=Clazz.newPackage("org.xml.sax.helpers"),I$=[[0,'Thread','UnknownError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NewInstance");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassLoader$S', function (classLoader, className) {
var driverClass;
if (classLoader == null ) {
driverClass=Clazz.forName(className);
} else {
driverClass=classLoader.loadClass$S(className);
}return driverClass.newInstance$();
}, 1);

Clazz.newMeth(C$, 'getClassLoader$', function () {
var m=null;
try {
m=Clazz.getClass($I$(1)).getMethod$S$ClassA("getContextClassLoader", null);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
return Clazz.getClass(C$).getClassLoader$();
} else {
throw e;
}
}
try {
return m.invoke$O$OA($I$(1).currentThread$(), null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_($I$(2,1).c$$S,[e.getMessage$()]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_($I$(2,1).c$$S,[e.getMessage$()]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
