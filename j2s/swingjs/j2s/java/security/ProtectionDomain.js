(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ProtectionDomain");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_security_CodeSource$java_security_PermissionCollection', function (codesource, permissions) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_CodeSource$java_security_PermissionCollection$ClassLoader$java_security_PrincipalA', function (codesource, permissions, classloader, principals) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCodeSource$', function () {
return null;
});

Clazz.newMeth(C$, 'getClassLoader$', function () {
return this.getClass$().getClassLoader$();
});

Clazz.newMeth(C$, 'getPrincipals$', function () {
return null;
});

Clazz.newMeth(C$, 'getPermissions$', function () {
return null;
});

Clazz.newMeth(C$, 'implies$java_security_Permission', function (permission) {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:47 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
