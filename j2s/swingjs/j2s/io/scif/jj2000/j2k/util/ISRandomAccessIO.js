(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "ISRandomAccessIO", null, null, 'io.scif.jj2000.j2k.io.RandomAccessIO');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.uia=new Uint32Array(1) ||null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['complete'],'I',['maxsize','inc','len','pos'],'O',['is','java.io.InputStream','buf','byte[]']]
,['O',['uia','long[]']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$I$I$I', function (is, size, inc, maxsize) {
;C$.$init$.apply(this);
if (size < 0 || inc <= 0  || maxsize <= 0  || is == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.is=is;
if (size < 2147483647) size++;
this.buf=Clazz.array(Byte.TYPE, [size]);
this.inc=inc;
if (maxsize < 2147483647) maxsize++;
this.maxsize=maxsize;
this.pos=0;
this.len=0;
this.complete=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function (is) {
C$.c$$java_io_InputStream$I$I$I.apply(this, [is, 262144, 262144, 2147483647]);
}, 1);

Clazz.newMeth(C$, 'growBuffer', function () {
var newbuf;
var effinc;
effinc=this.inc;
if (this.buf.length + effinc > this.maxsize) effinc=this.maxsize - this.buf.length;
if (effinc <= 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Reached maximum cache size (" + this.maxsize + ")" ]);
}try {
newbuf=Clazz.array(Byte.TYPE, [this.buf.length + this.inc]);
} catch (e) {
if (Clazz.exceptionOf(e,"OutOfMemoryError")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Out of memory to cache input data"]);
} else {
throw e;
}
}
System.arraycopy$O$I$O$I$I(this.buf, 0, newbuf, 0, this.len);
this.buf=newbuf;
}, p$1);

Clazz.newMeth(C$, 'readInput', function () {
var n;
var b;
var k;
if (this.complete) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Already reached EOF"]);
}n=0;
if (n == 0) n=1;
while (this.len + n > this.buf.length){
p$1.growBuffer.apply(this, []);
}
do {
k=this.is.read$BA$I$I(this.buf, this.len, n);
if (k > 0) {
this.len+=k;
n-=k;
}} while (n > 0 && k > 0 );
if (k <= 0) {
this.complete=true;
this.is=null;
}}, p$1);

Clazz.newMeth(C$, 'close$', function () {
this.buf=null;
if (!this.complete) {
this.is.close$();
this.is=null;
}});

Clazz.newMeth(C$, 'getPos$', function () {
return this.pos;
});

Clazz.newMeth(C$, 'seek$I', function (off) {
if (this.complete) {
if (off > this.len) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}}this.pos=off;
});

Clazz.newMeth(C$, 'length$', function () {
if (2147483647 != this.maxsize) return this.maxsize - 1;
while (!this.complete){
p$1.readInput.apply(this, []);
}
return this.len;
});

Clazz.newMeth(C$, 'read$', function () {
if (this.pos < this.len) {
return 255 & this.buf[this.pos++];
}while (!this.complete && this.pos >= this.len ){
p$1.readInput.apply(this, []);
}
if (this.pos == this.len) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
} else if (this.pos > this.len) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Position beyond EOF"]);
}return 255 & this.buf[this.pos++];
});

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, off, n) {
if (this.pos + n <= this.len) {
System.arraycopy$O$I$O$I$I(this.buf, this.pos, b, off, n);
this.pos+=n;
return;
}while (!this.complete && this.pos + n > this.len ){
p$1.readInput.apply(this, []);
}
if (this.pos + n > this.len) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}System.arraycopy$O$I$O$I$I(this.buf, this.pos, b, off, n);
this.pos+=n;
});

Clazz.newMeth(C$, 'getByteOrdering$', function () {
return 0;
});

Clazz.newMeth(C$, 'readByte$', function () {
if (this.pos < this.len) {
return $b$[0] = this.buf[this.pos++], $b$[0];
}return $b$[0] = (this.read$()|0), $b$[0];
});

Clazz.newMeth(C$, 'readUnsignedByte$', function () {
if (this.pos < this.len) {
return 255 & this.buf[this.pos++];
}return this.read$();
});

Clazz.newMeth(C$, 'readShort$', function () {
if (this.pos + 1 < this.len) {
return ($s$[0] = ((this.buf[this.pos++] << 8) | (255 & this.buf[this.pos++])), $s$[0]);
}return ($s$[0] = ((this.read$() << 8) | this.read$()), $s$[0]);
});

Clazz.newMeth(C$, 'readUnsignedShort$', function () {
if (this.pos + 1 < this.len) {
return ((255 & this.buf[this.pos++]) << 8) | (255 & this.buf[this.pos++]);
}return (this.read$() << 8) | this.read$();
});

Clazz.newMeth(C$, 'readInt$', function () {
if (this.pos + 3 < this.len) {
return ((this.buf[this.pos++] << 24) | ((255 & this.buf[this.pos++]) << 16) | ((255 & this.buf[this.pos++]) << 8) | (255 & this.buf[this.pos++]) );
}return (this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | this.read$() ;
});

Clazz.newMeth(C$, 'readUnsignedInt$', function () {
if (this.pos + 3 < this.len) {
return C$.uint$I(((this.buf[this.pos++] << 24) | ((255 & this.buf[this.pos++]) << 16) | ((255 & this.buf[this.pos++]) << 8) | (255 & this.buf[this.pos++]) ));
}return C$.uint$I(((this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | this.read$() ));
});

Clazz.newMeth(C$, 'uint$I', function (i) {

return uia[0] = i, uia[0];
return 4294967295 & i;
}, 1);

Clazz.newMeth(C$, 'readLong$', function () {
if (this.pos + 7 < this.len) {
return ((this.buf[this.pos++] << 56) | ((255 & this.buf[this.pos++]) << 48) | ((255 & this.buf[this.pos++]) << 40) | ((255 & this.buf[this.pos++]) << 32) | ((255 & this.buf[this.pos++]) << 24) | ((255 & this.buf[this.pos++]) << 16) | ((255 & this.buf[this.pos++]) << 8) | (255 & this.buf[this.pos++]) );
}return ((this.read$() << 56) | (this.read$() << 48) | (this.read$() << 40) | (this.read$() << 32) | (this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | this.read$() );
});

Clazz.newMeth(C$, 'readFloat$', function () {
if (this.pos + 3 < this.len) {
return Float.intBitsToFloat$I((this.buf[this.pos++] << 24) | ((255 & this.buf[this.pos++]) << 16) | ((255 & this.buf[this.pos++]) << 8) | (255 & this.buf[this.pos++]) );
}return Float.intBitsToFloat$I((this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | this.read$() );
});

Clazz.newMeth(C$, 'readDouble$', function () {
if (this.pos + 7 < this.len) {
return Double.longBitsToDouble$J((this.buf[this.pos++] << 56) | ((255 & this.buf[this.pos++]) << 48) | ((255 & this.buf[this.pos++]) << 40) | ((255 & this.buf[this.pos++]) << 32) | ((255 & this.buf[this.pos++]) << 24) | ((255 & this.buf[this.pos++]) << 16) | ((255 & this.buf[this.pos++]) << 8) | (255 & this.buf[this.pos++]) );
}return Double.longBitsToDouble$J((this.read$() << 56) | (this.read$() << 48) | (this.read$() << 40) | (this.read$() << 32) | (this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | this.read$() );
});

Clazz.newMeth(C$, 'skipBytes$I', function (n) {
if (this.complete) {
if (this.pos + n > this.len) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}}this.pos+=n;
return n;
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'write$I', function (b) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["read-only"]);
});

Clazz.newMeth(C$, 'writeByte$I', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["read-only"]);
});

Clazz.newMeth(C$, 'writeShort$I', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["read-only"]);
});

Clazz.newMeth(C$, 'writeInt$I', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["read-only"]);
});

Clazz.newMeth(C$, 'writeLong$J', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["read-only"]);
});

Clazz.newMeth(C$, 'writeFloat$F', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["read-only"]);
});

Clazz.newMeth(C$, 'writeDouble$D', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["read-only"]);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
