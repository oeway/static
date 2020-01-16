(function(){var P$=Clazz.newPackage("gnu.trove.stack.array"),p$1={},I$=[[0,'gnu.trove.list.array.TByteArrayList','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TByteArrayStack", null, null, ['gnu.trove.stack.TByteStack', 'java.io.Externalizable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['_list','gnu.trove.list.array.TByteArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (capacity) {
;C$.$init$.apply(this);
this._list=Clazz.new_($I$(1,1).c$$I,[capacity]);
}, 1);

Clazz.newMeth(C$, 'c$$I$B', function (capacity, no_entry_value) {
;C$.$init$.apply(this);
this._list=Clazz.new_($I$(1,1).c$$I$B,[capacity, ($b$[0] = no_entry_value, $b$[0])]);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_stack_TByteStack', function (stack) {
;C$.$init$.apply(this);
if (Clazz.instanceOf(stack, "gnu.trove.stack.array.TByteArrayStack")) {
var array_stack=stack;
this._list=Clazz.new_($I$(1,1).c$$gnu_trove_TByteCollection,[array_stack._list]);
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Only support TByteArrayStack"]);
}}, 1);

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this._list.getNoEntryValue$(), $b$[0];
});

Clazz.newMeth(C$, 'push$B', function (val) {
this._list.add$B(($b$[0] = val, $b$[0]));
});

Clazz.newMeth(C$, 'pop$', function () {
return $b$[0] = this._list.removeAt$I(this._list.size$() - 1), $b$[0];
});

Clazz.newMeth(C$, 'peek$', function () {
return $b$[0] = this._list.get$I(this._list.size$() - 1), $b$[0];
});

Clazz.newMeth(C$, 'size$', function () {
return this._list.size$();
});

Clazz.newMeth(C$, 'clear$', function () {
this._list.clear$();
});

Clazz.newMeth(C$, 'toArray$', function () {
var retval=this._list.toArray$();
p$1.reverse$BA$I$I.apply(this, [retval, 0, this.size$()]);
return retval;
});

Clazz.newMeth(C$, 'toArray$BA', function (dest) {
var size=this.size$();
var start=size - dest.length;
if (start < 0) {
start=0;
}var length=Math.min(size, dest.length);
this._list.toArray$BA$I$I(dest, start, length);
p$1.reverse$BA$I$I.apply(this, [dest, 0, length]);
if (dest.length > size) {
dest[size]=(this._list.getNoEntryValue$()|0);
}});

Clazz.newMeth(C$, 'reverse$BA$I$I', function (dest, from, to) {
if (from == to) {
return;
}if (from > to) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["from cannot be greater than to"]);
}for (var i=from, j=to - 1; i < j; i++, j--) {
p$1.swap$BA$I$I.apply(this, [dest, i, j]);
}
}, p$1);

Clazz.newMeth(C$, 'swap$BA$I$I', function (dest, i, j) {
var tmp=($b$[0] = dest[i], $b$[0]);
dest[i]=(dest[j]|0);
dest[j]=(tmp|0);
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(2,1).c$$S,["{"]);
for (var i=this._list.size$() - 1; i > 0; i--) {
buf.append$I(this._list.get$I(i));
buf.append$S(", ");
}
if (this.size$() > 0) {
buf.append$I(this._list.get$I(0));
}buf.append$S("}");
return buf.toString();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
return this._list.equals$O(that._list);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this._list.hashCode$();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeObject$O(this._list);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this._list=$in.readObject$();
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
