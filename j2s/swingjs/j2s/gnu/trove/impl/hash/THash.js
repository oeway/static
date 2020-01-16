(function(){var P$=Clazz.newPackage("gnu.trove.impl.hash"),I$=[[0,'gnu.trove.impl.HashFunctions','gnu.trove.impl.PrimeFinder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "THash", null, null, 'java.io.Externalizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._autoCompactTemporaryDisable=false;
}, 1);

C$.$fields$=[['Z',['_autoCompactTemporaryDisable'],'F',['_loadFactor','_autoCompactionFactor'],'I',['_size','_free','_maxSize','_autoCompactRemovesRemaining']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$F.apply(this, [10, 0.5]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.c$$I$F.apply(this, [initialCapacity, 0.5]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.$init$.apply(this);
this._loadFactor=loadFactor;
this._autoCompactionFactor=loadFactor;
this.setUp$I($I$(1).fastCeil$F(initialCapacity / loadFactor));
}, 1);

Clazz.newMeth(C$, 'isEmpty$', function () {
return 0 == this._size;
});

Clazz.newMeth(C$, 'size$', function () {
return this._size;
});

Clazz.newMeth(C$, 'ensureCapacity$I', function (desiredCapacity) {
if (desiredCapacity > (this._maxSize - this.size$())) {
this.rehash$I($I$(2).nextPrime$I(Math.max(this.size$() + 1, $I$(1).fastCeil$F((desiredCapacity + this.size$()) / this._loadFactor) + 1)));
this.computeMaxSize$I(this.capacity$());
}});

Clazz.newMeth(C$, 'compact$', function () {
this.rehash$I($I$(2).nextPrime$I(Math.max(this._size + 1, $I$(1).fastCeil$F(this.size$() / this._loadFactor) + 1)));
this.computeMaxSize$I(this.capacity$());
if (this._autoCompactionFactor != 0 ) {
this.computeNextAutoCompactionAmount$I(this.size$());
}});

Clazz.newMeth(C$, 'setAutoCompactionFactor$F', function (factor) {
if (factor < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Factor must be >= 0: " + new Float(factor).toString()]);
}this._autoCompactionFactor=factor;
});

Clazz.newMeth(C$, 'getAutoCompactionFactor$', function () {
return this._autoCompactionFactor;
});

Clazz.newMeth(C$, 'trimToSize$', function () {
this.compact$();
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._size--;
if (this._autoCompactionFactor != 0 ) {
this._autoCompactRemovesRemaining--;
if (!this._autoCompactTemporaryDisable && this._autoCompactRemovesRemaining <= 0 ) {
this.compact$();
}}});

Clazz.newMeth(C$, 'clear$', function () {
this._size=0;
this._free=this.capacity$();
});

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=$I$(2).nextPrime$I(initialCapacity);
this.computeMaxSize$I(capacity);
this.computeNextAutoCompactionAmount$I(initialCapacity);
return capacity;
});

Clazz.newMeth(C$, 'tempDisableAutoCompaction$', function () {
this._autoCompactTemporaryDisable=true;
});

Clazz.newMeth(C$, 'reenableAutoCompaction$Z', function (check_for_compaction) {
this._autoCompactTemporaryDisable=false;
if (check_for_compaction && this._autoCompactRemovesRemaining <= 0  && this._autoCompactionFactor != 0  ) {
this.compact$();
}});

Clazz.newMeth(C$, 'computeMaxSize$I', function (capacity) {
this._maxSize=Math.min(capacity - 1, ((capacity * this._loadFactor)|0));
this._free=capacity - this._size;
});

Clazz.newMeth(C$, 'computeNextAutoCompactionAmount$I', function (size) {
if (this._autoCompactionFactor != 0 ) {
this._autoCompactRemovesRemaining=(((size * this._autoCompactionFactor) + 0.5)|0);
}});

Clazz.newMeth(C$, 'postInsertHook$Z', function (usedFreeSlot) {
if (usedFreeSlot) {
this._free--;
}if (++this._size > this._maxSize || this._free == 0 ) {
var newCapacity=this._size > this._maxSize ? $I$(2).nextPrime$I(this.capacity$() << 1) : this.capacity$();
this.rehash$I(newCapacity);
this.computeMaxSize$I(this.capacity$());
}});

Clazz.newMeth(C$, 'calculateGrownCapacity$', function () {
return this.capacity$() << 1;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeFloat$F(this._loadFactor);
out.writeFloat$F(this._autoCompactionFactor);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
var old_factor=this._loadFactor;
this._loadFactor=$in.readFloat$();
this._autoCompactionFactor=$in.readFloat$();
if (old_factor != this._loadFactor ) {
this.setUp$I((Math.ceil(10 / this._loadFactor)|0));
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
