(function(){var P$=Clazz.newPackage("gnu.trove.impl.hash"),I$=[[0,'gnu.trove.impl.HashFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TPrimitiveHash", null, 'gnu.trove.impl.hash.THash');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_states','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.c$$I$F.apply(this, [initialCapacity, 0.5]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
initialCapacity=Math.max(1, initialCapacity);
this._loadFactor=loadFactor;
this.setUp$I($I$(1).fastCeil$F(initialCapacity / loadFactor));
}, 1);

Clazz.newMeth(C$, 'capacity$', function () {
return this._states.length;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._states[index]=(2|0);
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._states=Clazz.array(Byte.TYPE, [capacity]);
return capacity;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
