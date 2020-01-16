(function(){var P$=Clazz.newPackage("gnu.trove.impl.hash"),p$1={},I$=[[0,'java.util.Arrays','StringBuilder','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TObjectHash", null, 'gnu.trove.impl.hash.THash');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.REMOVED= Clazz.new_();
C$.FREE= Clazz.new_();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['consumeFreeSlot'],'O',['_set','Object[]']]
,['O',['REMOVED','java.lang.Object','+FREE']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'capacity$', function () {
return this._set.length;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._set[index]=C$.REMOVED;
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._set=Clazz.array(java.lang.Object, [capacity]);
$I$(1).fill$OA$O(this._set, C$.FREE);
return capacity;
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TObjectProcedure', function (procedure) {
var set=this._set;
for (var i=set.length; i-- > 0; ) {
if (set[i] !== C$.FREE  && set[i] !== C$.REMOVED   && !procedure.execute$(set[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'contains$O', function (obj) {
return this.index$O(obj) >= 0;
});

Clazz.newMeth(C$, 'index$O', function (obj) {
if (obj == null ) return p$1.indexForNull.apply(this, []);
var hash=this.hash$O(obj) & 2147483647;
var index=hash % this._set.length;
var cur=this._set[index];
if (cur === C$.FREE ) {
return -1;
}if (cur === obj  || this.equals$O$O(obj, cur) ) {
return index;
}return p$1.indexRehashed$O$I$I$O.apply(this, [obj, index, hash, cur]);
});

Clazz.newMeth(C$, 'indexRehashed$O$I$I$O', function (obj, index, hash, cur) {
var set=this._set;
var length=set.length;
var probe=1 + (hash % (length - 2));
var loopIndex=index;
do {
index-=probe;
if (index < 0) {
index+=length;
}cur=set[index];
if (cur === C$.FREE ) return -1;
if ((cur === obj  || this.equals$O$O(obj, cur) )) return index;
} while (index != loopIndex);
return -1;
}, p$1);

Clazz.newMeth(C$, 'indexForNull', function () {
var index=0;
for (var o, $o = 0, $$o = this._set; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
if (o == null ) return index;
if (o === C$.FREE ) return -1;
index++;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'insertionIndex$TT', function (obj) {
return this.insertKey$TT(obj);
});

Clazz.newMeth(C$, 'insertKey$TT', function (key) {
this.consumeFreeSlot=false;
if (key == null ) return p$1.insertKeyForNull.apply(this, []);
var hash=this.hash$O(key) & 2147483647;
var index=hash % this._set.length;
var cur=this._set[index];
if (cur === C$.FREE ) {
this.consumeFreeSlot=true;
this._set[index]=key;
return index;
}if (cur === key  || this.equals$O$O(key, cur) ) {
return -index - 1;
}return p$1.insertKeyRehash$TT$I$I$O.apply(this, [key, index, hash, cur]);
});

Clazz.newMeth(C$, 'insertKeyRehash$TT$I$I$O', function (key, index, hash, cur) {
var set=this._set;
var length=set.length;
var probe=1 + (hash % (length - 2));
var loopIndex=index;
var firstRemoved=-1;
do {
if (cur === C$.REMOVED  && firstRemoved == -1 ) firstRemoved=index;
index-=probe;
if (index < 0) {
index+=length;
}cur=set[index];
if (cur === C$.FREE ) {
if (firstRemoved != -1) {
this._set[firstRemoved]=key;
return firstRemoved;
} else {
this.consumeFreeSlot=true;
this._set[index]=key;
return index;
}}if (cur === key  || this.equals$O$O(key, cur) ) {
return -index - 1;
}} while (index != loopIndex);
if (firstRemoved != -1) {
this._set[firstRemoved]=key;
return firstRemoved;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No free or removed slots available. Key set full?!!"]);
}, p$1);

Clazz.newMeth(C$, 'insertKeyForNull', function () {
var index=0;
var firstRemoved=-1;
for (var o, $o = 0, $$o = this._set; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
if (o === C$.REMOVED  && firstRemoved == -1 ) firstRemoved=index;
if (o === C$.FREE ) {
if (firstRemoved != -1) {
this._set[firstRemoved]=null;
return firstRemoved;
} else {
this.consumeFreeSlot=true;
this._set[index]=null;
return index;
}}if (o == null ) {
return -index - 1;
}index++;
}
if (firstRemoved != -1) {
this._set[firstRemoved]=null;
return firstRemoved;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Could not find insertion index for null key. Key set full!?!!"]);
}, p$1);

Clazz.newMeth(C$, 'throwObjectContractViolation$O$O', function (o1, o2) {
throw this.buildObjectContractViolation$O$O$S(o1, o2, "");
});

Clazz.newMeth(C$, 'throwObjectContractViolation$O$O$I$I$OA', function (o1, o2, size, oldSize, oldKeys) {
var extra=this.dumpExtraInfo$O$O$I$I$OA(o1, o2, this.size$(), oldSize, oldKeys);
throw this.buildObjectContractViolation$O$O$S(o1, o2, extra);
});

Clazz.newMeth(C$, 'buildObjectContractViolation$O$O$S', function (o1, o2, extra) {
return Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Equal objects must have equal hashcodes. During rehashing, Trove discovered that the following two objects claim to be equal (as in java.lang.Object.equals()) but their hashCodes (or those calculated by your TObjectHashingStrategy) are not equal.This violates the general contract of java.lang.Object.hashCode().  See bullet point two in that method\'s documentation. object #1 =" + C$.objectInfo$O(o1) + "; object #2 =" + C$.objectInfo$O(o2) + "\n" + extra ]);
});

Clazz.newMeth(C$, 'equals$O$O', function (notnull, two) {
if (two == null  || two === C$.REMOVED  ) return false;
return notnull.equals$O(two);
});

Clazz.newMeth(C$, 'hash$O', function (notnull) {
return notnull.hashCode$();
});

Clazz.newMeth(C$, 'reportPotentialConcurrentMod$I$I', function (newSize, oldSize) {
if (newSize != oldSize) return "[Warning] apparent concurrent modification of the key set. Size before and after rehash() do not match " + oldSize + " vs " + newSize ;
return "";
}, 1);

Clazz.newMeth(C$, 'dumpExtraInfo$O$O$I$I$OA', function (newVal, oldVal, currentSize, oldSize, oldKeys) {
var b=Clazz.new_($I$(2,1));
b.append$S(p$1.dumpKeyTypes$O$O.apply(this, [newVal, oldVal]));
b.append$S(C$.reportPotentialConcurrentMod$I$I(currentSize, oldSize));
b.append$S(C$.detectKeyLoss$OA$I(oldKeys, oldSize));
if (newVal === oldVal ) {
b.append$S("Inserting same object twice, rehashing bug. Object= ").append$O(oldVal);
}return b.toString();
});

Clazz.newMeth(C$, 'detectKeyLoss$OA$I', function (keys, oldSize) {
var buf=Clazz.new_($I$(2,1));
var k=C$.makeKeySet$OA(keys);
if (k.size$() != oldSize) {
buf.append$S("\nhashCode() and/or equals() have inconsistent implementation");
buf.append$S("\nKey set lost entries, now got ").append$I(k.size$()).append$S(" instead of ").append$I(oldSize);
buf.append$S(". This can manifest itself as an apparent duplicate key.");
}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'makeKeySet$OA', function (keys) {
var types=Clazz.new_(1,{E:"java.lang.Object"},$I$(3,1));
for (var o, $o = 0, $$o = keys; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
if (o !== C$.FREE  && o !== C$.REMOVED  ) {
types.add$TE(o);
}}
return types;
}, 1);

Clazz.newMeth(C$, 'equalsSymmetryInfo$O$O', function (a, b) {
var buf=Clazz.new_($I$(2,1));
if (a === b ) {
return "a == b";
}if (a.getClass$() !== b.getClass$() ) {
buf.append$S("Class of objects differ a=").append$O(a.getClass$()).append$S(" vs b=").append$O(b.getClass$());
var aEb=a.equals$O(b);
var bEa=b.equals$O(a);
if (aEb != bEa ) {
buf.append$S("\nequals() of a or b object are asymmetric");
buf.append$S("\na.equals(b) =").append$Z(aEb);
buf.append$S("\nb.equals(a) =").append$Z(bEa);
}}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'objectInfo$O', function (o) {
return (o == null  ? "class null" : o.getClass$()) + " id= " + System.identityHashCode$O(o) + " hashCode= " + (o == null  ? 0 : o.hashCode$()) + " toString= " + String.valueOf$O(o) ;
}, 1);

Clazz.newMeth(C$, 'dumpKeyTypes$O$O', function (newVal, oldVal) {
var buf=Clazz.new_($I$(2,1));
var types=Clazz.new_(1,{E:"Class"},$I$(3,1));
for (var o, $o = 0, $$o = this._set; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
if (o !== C$.FREE  && o !== C$.REMOVED  ) {
if (o != null ) types.add$TE(o.getClass$());
 else types.add$TE(null);
}}
if (types.size$() > 1) {
buf.append$S("\nMore than one type used for keys. Watch out for asymmetric equals(). Read about the \'Liskov substitution principle\' and the implications for equals() in java.");
buf.append$S("\nKey types: ").append$O(types);
buf.append$S(C$.equalsSymmetryInfo$O$O(newVal, oldVal));
}return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
