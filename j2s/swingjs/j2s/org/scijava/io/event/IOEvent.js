(function(){var P$=Clazz.newPackage("org.scijava.io.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IOEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['descriptor'],'O',['data','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S$O', function (descriptor, data) {
Clazz.super_(C$, this);
this.descriptor=descriptor;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getDescriptor$', function () {
return this.descriptor;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tdescriptor = " + this.data + "\n\tdata = " + this.data ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
