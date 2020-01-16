(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ByteVector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['size'],'O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.data=Clazz.array(Byte.TYPE, [10]);
this.size=0;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialSize) {
;C$.$init$.apply(this);
this.data=Clazz.array(Byte.TYPE, [initialSize]);
this.size=0;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (byteBuffer) {
;C$.$init$.apply(this);
this.data=byteBuffer;
this.size=0;
}, 1);

Clazz.newMeth(C$, 'add$B', function (x) {
while (this.size >= this.data.length)this.doubleCapacity$();

this.data[this.size++]=(x|0);
});

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'get$I', function (index) {
return $b$[0] = this.data[index], $b$[0];
});

Clazz.newMeth(C$, 'add$BA', function (array) {
this.add$BA$I$I(array, 0, array.length);
});

Clazz.newMeth(C$, 'add$BA$I$I', function (array, off, len) {
while (this.data.length < this.size + len)this.doubleCapacity$();

if (len == 1) this.data[this.size]=(array[off]|0);
 else if (len < 35) {
for (var i=0; i < len; i++) this.data[this.size + i]=(array[off + i]|0);

} else System.arraycopy$O$I$O$I$I(array, off, this.data, this.size, len);
this.size+=len;
});

Clazz.newMeth(C$, 'doubleCapacity$', function () {
var tmp=Clazz.array(Byte.TYPE, [this.data.length * 2 + 1]);
System.arraycopy$O$I$O$I$I(this.data, 0, tmp, 0, this.data.length);
this.data=tmp;
});

Clazz.newMeth(C$, 'clear$', function () {
this.size=0;
});

Clazz.newMeth(C$, 'toByteArray$', function () {
var bytes=Clazz.array(Byte.TYPE, [this.size]);
System.arraycopy$O$I$O$I$I(this.data, 0, bytes, 0, this.size);
return bytes;
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
