(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'RuntimePermission',['org.apache.logging.log4j.util.PrivateSecurityManagerStackTraceUtil','.PrivateSecurityManager'],'java.util.Stack']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PrivateSecurityManagerStackTraceUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
var psm;
try {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkPermission$java_security_Permission(Clazz.new_($I$(1,1).c$$S,["createSecurityManager"]));
}psm=Clazz.new_($I$(2,1));
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"SecurityException")){
psm=null;
} else {
throw ignored;
}
}
C$.SECURITY_MANAGER=psm;
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['SECURITY_MANAGER','org.apache.logging.log4j.util.PrivateSecurityManagerStackTraceUtil.PrivateSecurityManager']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isEnabled$', function () {
return C$.SECURITY_MANAGER != null ;
}, 1);

Clazz.newMeth(C$, 'getCurrentStackTrace$', function () {
var array=C$.SECURITY_MANAGER.getClassContext$();
var classes=Clazz.new_(1,{E:"Class"},$I$(3,1));
classes.ensureCapacity$I(array.length);
for (var clazz, $clazz = 0, $$clazz = array; $clazz<$$clazz.length&&((clazz=($$clazz[$clazz])),1);$clazz++) {
classes.push$TE(clazz);
}
return classes;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.PrivateSecurityManagerStackTraceUtil, "PrivateSecurityManager", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'SecurityManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getClassContext$', function () {
return C$.superclazz.prototype.getClassContext$.apply(this, []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
