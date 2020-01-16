(function(){var P$=Clazz.newPackage("gnu.trove.impl.hash"),I$=[[0,'gnu.trove.impl.hash.TObjectHash']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TCustomObjectHash", null, 'gnu.trove.impl.hash.TObjectHash');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['strategy','gnu.trove.strategy.HashingStrategy']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy', function (strategy) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.strategy=strategy;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy$I', function (strategy, initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.strategy=strategy;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_strategy_HashingStrategy$I$F', function (strategy, initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.strategy=strategy;
}, 1);

Clazz.newMeth(C$, 'hash$O', function (obj) {
return this.strategy.computeHashCode$TT(obj);
});

Clazz.newMeth(C$, 'equals$O$O', function (one, two) {
return two !== $I$(1).REMOVED  && this.strategy.equals$TT$TT(one, two) ;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeObject$O(this.strategy);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.strategy=$in.readObject$();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
