(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.security.AccessController','AssertionError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Reflect");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAccessible$reflect_AccessibleObject', function (ao) {
$I$(1).doPrivileged$java_security_PrivilegedAction(((P$.Reflect$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Reflect$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.ao.setAccessible$Z(true);
return null;
});
})()
), Clazz.new_(P$.Reflect$1.$init$, [this, {ao:ao}])));
}, 1);

Clazz.newMeth(C$, 'lookupField$S$S', function (className, fieldName) {
try {
var cl=Clazz.forName(className);
var f=cl.getDeclaredField$S(fieldName);
C$.setAccessible$reflect_AccessibleObject(f);
return f;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$O,[x]);
}
} else if (Clazz.exceptionOf(e$$,"NoSuchFieldException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$O,[x]);
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
