(function(){var P$=Clazz.newPackage("gnu.trove.impl.hash"),I$=[[0,'gnu.trove.impl.hash.TObjectHash']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "THashIterator", null, null, ['gnu.trove.iterator.TIterator', 'java.util.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['_expectedSize','_index'],'O',['_object_hash','gnu.trove.impl.hash.TObjectHash','_hash','gnu.trove.impl.hash.THash']]]

Clazz.newMeth(C$, 'c$$gnu_trove_impl_hash_TObjectHash', function (hash) {
;C$.$init$.apply(this);
this._hash=hash;
this._expectedSize=this._hash.size$();
this._index=this._hash.capacity$();
this._object_hash=hash;
}, 1);

Clazz.newMeth(C$, 'next$', function () {
this.moveToNextIndex$();
return this.objectAtIndex$I(this._index);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.nextIndex$() >= 0;
});

Clazz.newMeth(C$, 'remove$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}try {
this._hash.tempDisableAutoCompaction$();
this._hash.removeAt$I(this._index);
} finally {
this._hash.reenableAutoCompaction$Z(false);
}
this._expectedSize--;
});

Clazz.newMeth(C$, 'moveToNextIndex$', function () {
if ((this._index=this.nextIndex$()) < 0) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$, 'nextIndex$', function () {
if (this._expectedSize != this._hash.size$()) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}var set=this._object_hash._set;
var i=this._index;
while (i-- > 0 && (set[i] === $I$(1).FREE  || set[i] === $I$(1).REMOVED  ) ){
;}
return i;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
