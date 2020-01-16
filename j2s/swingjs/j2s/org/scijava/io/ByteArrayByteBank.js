(function(){var P$=Clazz.newPackage("org.scijava.io"),p$1={},I$=[[0,'org.scijava.util.ByteArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteArrayByteBank", null, null, 'org.scijava.io.ByteBank');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['size'],'O',['buffer','org.scijava.util.ByteArray']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_util_ByteArray.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
C$.c$$org_scijava_util_ByteArray.apply(this, [C$.emptyByteArrayOfCapacity$I(initialCapacity)]);
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (bytes) {
C$.c$$org_scijava_util_ByteArray.apply(this, [Clazz.new_($I$(1,1).c$$BA,[bytes])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_util_ByteArray', function (bytes) {
;C$.$init$.apply(this);
this.buffer=bytes;
this.size=bytes.size$();
}, 1);

Clazz.newMeth(C$, 'getMaxBufferSize$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'setBytes$J$BA$I$I', function (startpos, bytes, offset, length) {
this.checkWritePos$J$J(startpos, startpos + length);
var neededCapacity=((this.size + length)|0);
this.buffer.ensureCapacity$I(neededCapacity);
System.arraycopy$O$I$O$I$I(bytes, offset, this.buffer.getArray$(), (startpos|0), length);
this.buffer.setSize$I(neededCapacity);
p$1.updateSize$J.apply(this, [startpos + length]);
});

Clazz.newMeth(C$, 'setByte$J$B', function (pos, b) {
this.checkWritePos$J$J(pos, pos);
this.buffer.ensureCapacity$I((pos|0));
if (pos == this.buffer.size$()) {
this.buffer.setSize$I(((pos + 1)|0));
}this.buffer.setValue$I$B((pos|0), ($b$[0] = b, $b$[0]));
p$1.updateSize$J.apply(this, [pos + 1]);
});

Clazz.newMeth(C$, 'clear$', function () {
this.buffer.clear$();
this.size=0;
});

Clazz.newMeth(C$, 'getByte$J', function (pos) {
this.checkReadPos$J$J(pos, pos);
return $b$[0] = this.buffer.getValue$I((pos|0)), $b$[0];
});

Clazz.newMeth(C$, 'getBytes$J$BA$I$I', function (startPos, b, offset, length) {
this.checkReadPos$J$J(startPos, startPos + length);
var readLength=(Math.min(this.size$() - startPos, length)|0);
System.arraycopy$O$I$O$I$I(this.buffer.getArray$(), (startPos|0), b, offset, readLength);
return readLength;
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'updateSize$J', function (newSize) {
this.size=newSize > this.size ? newSize : this.size;
}, p$1);

Clazz.newMeth(C$, 'emptyByteArrayOfCapacity$I', function (capacity) {
var byteArray=Clazz.new_($I$(1,1).c$$BA,[Clazz.array(Byte.TYPE, [capacity])]);
byteArray.setSize$I(0);
return byteArray;
}, 1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
