(function(){var P$=Clazz.newPackage("java.lang.ref"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Reference");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['referent','<T>']]]

Clazz.newMeth(C$, 'get$', function () {
return this.referent;
});

Clazz.newMeth(C$, 'clear$', function () {
this.referent=null;
});

Clazz.newMeth(C$, 'isEnqueued$', function () {
return false;
});

Clazz.newMeth(C$, 'enqueue$', function () {
return false;
});

Clazz.newMeth(C$, 'c$$TT', function (referent) {
C$.c$$TT$ref_ReferenceQueue.apply(this, [referent, null]);
}, 1);

Clazz.newMeth(C$, 'c$$TT$ref_ReferenceQueue', function (referent, queue) {
;C$.$init$.apply(this);
this.referent=referent;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
