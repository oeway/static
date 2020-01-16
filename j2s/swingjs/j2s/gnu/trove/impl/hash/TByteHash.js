(function(){var P$=Clazz.newPackage("gnu.trove.impl.hash"),I$=[[0,'gnu.trove.impl.Constants','java.util.Arrays','gnu.trove.impl.HashFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TByteHash", null, 'gnu.trove.impl.hash.TPrimitiveHash');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['consumeFreeSlot'],'B',['no_entry_value'],'O',['_set','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = $I$(1).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
if (this.no_entry_value != 0) {
$I$(2).fill$BA$B(this._set, ($b$[0] = this.no_entry_value, $b$[0]));
}}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = $I$(1).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
if (this.no_entry_value != 0) {
$I$(2).fill$BA$B(this._set, ($b$[0] = this.no_entry_value, $b$[0]));
}}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = $I$(1).DEFAULT_BYTE_NO_ENTRY_VALUE, $b$[0]);
if (this.no_entry_value != 0) {
$I$(2).fill$BA$B(this._set, ($b$[0] = this.no_entry_value, $b$[0]));
}}, 1);

Clazz.newMeth(C$, 'c$$I$F$B', function (initialCapacity, loadFactor, no_entry_value) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_value=($b$[0] = no_entry_value, $b$[0]);
if (no_entry_value != 0) {
$I$(2).fill$BA$B(this._set, ($b$[0] = no_entry_value, $b$[0]));
}}, 1);

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.no_entry_value, $b$[0];
});

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._set=Clazz.array(Byte.TYPE, [capacity]);
return capacity;
});

Clazz.newMeth(C$, 'contains$B', function (val) {
return this.index$B(($b$[0] = val, $b$[0])) >= 0;
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TByteProcedure', function (procedure) {
var states=this._states;
var set=this._set;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(($b$[0] = set[i], $b$[0])) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._set[index]=(this.no_entry_value|0);
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'index$B', function (val) {
var hash;
var probe;
var index;
var length;
var states=this._states;
var set=this._set;
length=states.length;
hash=$I$(3).hash$I(val) & 2147483647;
index=hash % length;
var state=($b$[0] = states[index], $b$[0]);
if (state == 0) return -1;
if (state == 1 && set[index] == val ) return index;
return this.indexRehashed$B$I$I$B(($b$[0] = val, $b$[0]), index, hash, ($b$[0] = state, $b$[0]));
});

Clazz.newMeth(C$, 'indexRehashed$B$I$I$B', function (key, index, hash, state) {
var length=this._set.length;
var probe=1 + (hash % (length - 2));
var loopIndex=index;
do {
index-=probe;
if (index < 0) {
index+=length;
}state=($b$[0] = this._states[index], $b$[0]);
if (state == 0) return -1;
if (key == this._set[index] && state != 2 ) return index;
} while (index != loopIndex);
return -1;
});

Clazz.newMeth(C$, 'insertKey$B', function (val) {
var hash;
var index;
hash=$I$(3).hash$I(val) & 2147483647;
index=hash % this._states.length;
var state=($b$[0] = this._states[index], $b$[0]);
this.consumeFreeSlot=false;
if (state == 0) {
this.consumeFreeSlot=true;
this.insertKeyAt$I$B(index, ($b$[0] = val, $b$[0]));
return index;
}if (state == 1 && this._set[index] == val ) {
return -index - 1;
}return this.insertKeyRehash$B$I$I$B(($b$[0] = val, $b$[0]), index, hash, ($b$[0] = state, $b$[0]));
});

Clazz.newMeth(C$, 'insertKeyRehash$B$I$I$B', function (val, index, hash, state) {
var length=this._set.length;
var probe=1 + (hash % (length - 2));
var loopIndex=index;
var firstRemoved=-1;
do {
if (state == 2 && firstRemoved == -1 ) firstRemoved=index;
index-=probe;
if (index < 0) {
index+=length;
}state=($b$[0] = this._states[index], $b$[0]);
if (state == 0) {
if (firstRemoved != -1) {
this.insertKeyAt$I$B(firstRemoved, ($b$[0] = val, $b$[0]));
return firstRemoved;
} else {
this.consumeFreeSlot=true;
this.insertKeyAt$I$B(index, ($b$[0] = val, $b$[0]));
return index;
}}if (state == 1 && this._set[index] == val ) {
return -index - 1;
}} while (index != loopIndex);
if (firstRemoved != -1) {
this.insertKeyAt$I$B(firstRemoved, ($b$[0] = val, $b$[0]));
return firstRemoved;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No free or removed slots available. Key set full?!!"]);
});

Clazz.newMeth(C$, 'insertKeyAt$I$B', function (index, val) {
this._set[index]=(val|0);
this._states[index]=(1|0);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
