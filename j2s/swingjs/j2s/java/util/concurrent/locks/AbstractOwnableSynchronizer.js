(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractOwnableSynchronizer", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['exclusiveOwnerThread','Thread']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setExclusiveOwnerThread$Thread', function (t) {
this.exclusiveOwnerThread=t;
});

Clazz.newMeth(C$, 'getExclusiveOwnerThread$', function () {
return this.exclusiveOwnerThread;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
