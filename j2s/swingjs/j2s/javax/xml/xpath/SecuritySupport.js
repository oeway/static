(function(){var P$=Clazz.newPackage("javax.xml.xpath"),I$=[[0,'java.security.AccessController','Thread','java.io.FileInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SecuritySupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
return $I$(1).doPrivileged$java_security_PrivilegedAction(((P$.SecuritySupport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var cl=null;
try {
cl=$I$(2).currentThread$().getContextClassLoader$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
return cl;
});
})()
), Clazz.new_(P$.SecuritySupport$1.$init$, [this, null])));
});

Clazz.newMeth(C$, 'getSystemProperty$S', function (propName) {
return $I$(1).doPrivileged$java_security_PrivilegedAction(((P$.SecuritySupport$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return System.getProperty$S(this.$finals$.propName);
});
})()
), Clazz.new_(P$.SecuritySupport$2.$init$, [this, {propName:propName}])));
});

Clazz.newMeth(C$, 'getFileInputStream$java_io_File', function (file) {
try {
return $I$(1).doPrivileged$java_security_PrivilegedExceptionAction(((P$.SecuritySupport$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return Clazz.new_($I$(3,1).c$$java_io_File,[this.$finals$.file]);
});
})()
), Clazz.new_(P$.SecuritySupport$3.$init$, [this, {file:file}])));
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
throw e.getException$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getURLInputStream$java_net_URL', function (url) {
try {
return $I$(1).doPrivileged$java_security_PrivilegedExceptionAction(((P$.SecuritySupport$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.url.openStream$();
});
})()
), Clazz.new_(P$.SecuritySupport$4.$init$, [this, {url:url}])));
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
throw e.getException$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getResourceAsURL$ClassLoader$S', function (cl, name) {
return $I$(1).doPrivileged$java_security_PrivilegedAction(((P$.SecuritySupport$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var url;
if (this.$finals$.cl == null ) {
url=Clazz.getClass(java.lang.Object).getResource$S(this.$finals$.name);
} else {
url=this.$finals$.cl.getResource$S(this.$finals$.name);
}return url;
});
})()
), Clazz.new_(P$.SecuritySupport$5.$init$, [this, {cl:cl,name:name}])));
});

Clazz.newMeth(C$, 'getResources$ClassLoader$S', function (cl, name) {
try {
return $I$(1).doPrivileged$java_security_PrivilegedExceptionAction(((P$.SecuritySupport$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var enumeration;
if (this.$finals$.cl == null ) {
enumeration=ClassLoader.getSystemResources$S(this.$finals$.name);
} else {
enumeration=this.$finals$.cl.getResources$S(this.$finals$.name);
}return enumeration;
});
})()
), Clazz.new_(P$.SecuritySupport$6.$init$, [this, {cl:cl,name:name}])));
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
throw e.getException$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getResourceAsStream$ClassLoader$S', function (cl, name) {
return $I$(1).doPrivileged$java_security_PrivilegedAction(((P$.SecuritySupport$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var ris;
if (this.$finals$.cl == null ) {
ris=Clazz.getClass(java.lang.Object).getResourceAsStream$S(this.$finals$.name);
} else {
ris=this.$finals$.cl.getResourceAsStream$S(this.$finals$.name);
}return ris;
});
})()
), Clazz.new_(P$.SecuritySupport$7.$init$, [this, {cl:cl,name:name}])));
});

Clazz.newMeth(C$, 'doesFileExist$java_io_File', function (f) {
return ($I$(1).doPrivileged$java_security_PrivilegedAction(((P$.SecuritySupport$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return  Boolean.from(this.$finals$.f.exists$());
});
})()
), Clazz.new_(P$.SecuritySupport$8.$init$, [this, {f:f}])))).booleanValue$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:48 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
