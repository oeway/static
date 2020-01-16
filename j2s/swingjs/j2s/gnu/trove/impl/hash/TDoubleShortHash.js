(function(){var P$=Clazz.newPackage("gnu.trove.impl.hash"),I$=[[0,'gnu.trove.impl.HashFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TDoubleShortHash", null, 'gnu.trove.impl.hash.TPrimitiveHash');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['consumeFreeSlot'],'D',['no_entry_key'],'H',['no_entry_value'],'O',['_set','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.no_entry_key=0.0;
this.no_entry_value=0;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.no_entry_key=0.0;
this.no_entry_value=0;
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_key=0.0;
this.no_entry_value=0;
}, 1);

Clazz.newMeth(C$, 'c$$I$F$D$H', function (initialCapacity, loadFactor, no_entry_key, no_entry_value) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.no_entry_key=no_entry_key;
this.no_entry_value=no_entry_value;
}, 1);

Clazz.newMeth(C$, 'getNoEntryKey$', function () {
return this.no_entry_key;
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.no_entry_value;
});

Clazz.newMeth(C$, 'setUp$I', function (initialCapacity) {
var capacity;
capacity=C$.superclazz.prototype.setUp$I.apply(this, [initialCapacity]);
this._set=Clazz.array(Double.TYPE, [capacity]);
return capacity;
});

Clazz.newMeth(C$, 'contains$D', function (val) {
return this.index$D(val) >= 0;
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TDoubleProcedure', function (procedure) {
var states=this._states;
var set=this._set;
for (var i=set.length; i-- > 0; ) {
if (states[i] == 1 && !procedure.execute$(set[i]) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'removeAt$I', function (index) {
this._set[index]=this.no_entry_key;
C$.superclazz.prototype.removeAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'index$D', function (key) {
var hash;
var probe;
var index;
var length;
var states=this._states;
var set=this._set;
length=states.length;
hash=$I$(1).hash$D(key) & 2147483647;
index=hash % length;
var state=($b$[0] = states[index], $b$[0]);
if (state == 0) return -1;
if (state == 1 && set[index] == key  ) return index;
return this.indexRehashed$D$I$I$B(key, index, hash, ($b$[0] = state, $b$[0]));
});

Clazz.newMeth(C$, 'indexRehashed$D$I$I$B', function (key, index, hash, state) {
var length=this._set.length;
var probe=1 + (hash % (length - 2));
var loopIndex=index;
do {
index-=probe;
if (index < 0) {
index+=length;
}state=($b$[0] = this._states[index], $b$[0]);
if (state == 0) return -1;
if (key == this._set[index]  && state != 2 ) return index;
} while (index != loopIndex);
return -1;
});

Clazz.newMeth(C$, 'insertKey$D', function (val) {
var hash;
var index;
hash=$I$(1).hash$D(val) & 2147483647;
index=hash % this._states.length;
var state=($b$[0] = this._states[index], $b$[0]);
this.consumeFreeSlot=false;
if (state == 0) {
this.consumeFreeSlot=true;
this.insertKeyAt$I$D(index, val);
return index;
}if (state == 1 && this._set[index] == val  ) {
return -index - 1;
}return this.insertKeyRehash$D$I$I$B(val, index, hash, ($b$[0] = state, $b$[0]));
});

Clazz.newMeth(C$, 'insertKeyRehash$D$I$I$B', function (val, index, hash, state) {
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
this.insertKeyAt$I$D(firstRemoved, val);
return firstRemoved;
} else {
this.consumeFreeSlot=true;
this.insertKeyAt$I$D(index, val);
return index;
}}if (state == 1 && this._set[index] == val  ) {
return -index - 1;
}} while (index != loopIndex);
if (firstRemoved != -1) {
this.insertKeyAt$I$D(firstRemoved, val);
return firstRemoved;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No free or removed slots available. Key set full?!!"]);
});

Clazz.newMeth(C$, 'insertKeyAt$I$D', function (index, val) {
this._set[index]=val;
this._states[index]=(1|0);
});

Clazz.newMeth(C$, 'XinsertKey$D', function (key) {
var hash;
var probe;
var index;
var length;
var states=this._states;
var set=this._set;
length=states.length;
hash=$I$(1).hash$D(key) & 2147483647;
index=hash % length;
var state=($b$[0] = states[index], $b$[0]);
this.consumeFreeSlot=false;
if (state == 0) {
this.consumeFreeSlot=true;
set[index]=key;
states[index]=(1|0);
return index;
} else if (state == 1 && set[index] == key  ) {
return -index - 1;
} else {
probe=1 + (hash % (length - 2));
if (state != 2) {
do {
index-=probe;
if (index < 0) {
index+=length;
}state=($b$[0] = states[index], $b$[0]);
} while (state == 1 && set[index] != key  );
}if (state == 2) {
var firstRemoved=index;
while (state != 0 && (state == 2 || set[index] != key  ) ){
index-=probe;
if (index < 0) {
index+=length;
}state=($b$[0] = states[index], $b$[0]);
}
if (state == 1) {
return -index - 1;
} else {
set[index]=key;
states[index]=(1|0);
return firstRemoved;
}}if (state == 1) {
return -index - 1;
} else {
this.consumeFreeSlot=true;
set[index]=key;
states[index]=(1|0);
return index;
}}});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeDouble$D(this.no_entry_key);
out.writeShort$I(this.no_entry_value);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.no_entry_key=$in.readDouble$();
this.no_entry_value=$in.readShort$();
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
