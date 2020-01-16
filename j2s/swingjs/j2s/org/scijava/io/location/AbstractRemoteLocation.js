(function(){var P$=Clazz.newPackage("org.scijava.io.location"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractRemoteLocation", null, 'org.scijava.io.location.AbstractLocation', 'org.scijava.io.location.RemoteLocation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.timeout=15000;
}, 1);

C$.$fields$=[['L',['timeout']]]

Clazz.newMeth(C$, 'getTimeout$', function () {
return this.timeout;
});

Clazz.newMeth(C$, 'setTimeout$J', function (timeout) {
this.timeout=timeout;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
