(function(){var P$=Clazz.newPackage("gnu.trove.iterator.hash"),I$=[[0,'gnu.trove.impl.hash.TObjectHash']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TObjectHashIterator", null, 'gnu.trove.impl.hash.THashIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_objectHash','gnu.trove.impl.hash.TObjectHash']]]

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TObjectHash', function (hash) {
;C$.superclazz.c$$gnu_trove_impl_hash_TObjectHash.apply(this,[hash]);C$.$init$.apply(this);
this._objectHash=hash;
}, 1);

Clazz.newMeth(C$, 'objectAtIndex$I', function (index) {
var obj=this._objectHash._set[index];
if (obj === $I$(1).FREE  || obj === $I$(1).REMOVED  ) {
return null;
}return obj;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
