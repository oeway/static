(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'java.nio.ByteOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IISRandomAccessIO", null, null, 'io.scif.jj2000.j2k.io.RandomAccessIO');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['iis','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream', function (iis) {
;C$.$init$.apply(this);
if (iis == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["iis == null!"]);
}this.iis=iis;
}, 1);

Clazz.newMeth(C$, 'close$', function () {
this.iis.close$();
});

Clazz.newMeth(C$, 'getPos$', function () {
var pos=this.iis.getStreamPosition$();
return pos > 2147483647 ? 2147483647 : (pos|0);
});

Clazz.newMeth(C$, 'seek$I', function (off) {
this.iis.seek$J(off);
});

Clazz.newMeth(C$, 'length$', function () {
var len=this.iis.length$();
if (len != -1) {
return len > 2147483647 ? 2147483647 : (len|0);
}this.iis.mark$();
var bufLen=1024;
var buf=Clazz.array(Byte.TYPE, [bufLen]);
var pos=this.iis.getStreamPosition$();
while (pos < 2147483647){
var numRead=this.iis.read$BA$I$I(buf, 0, bufLen);
if (numRead == -1) break;
pos+=numRead;
}
this.iis.reset$();
return pos > 2147483647 ? 2147483647 : (pos|0);
});

Clazz.newMeth(C$, 'read$', function () {
return this.iis.read$();
});

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, off, n) {
this.iis.readFully$BA$I$I(b, off, n);
});

Clazz.newMeth(C$, 'getByteOrdering$', function () {
return this.iis.getByteOrder$() === $I$(1).BIG_ENDIAN  ? 0 : 1;
});

Clazz.newMeth(C$, 'readByte$', function () {
return $b$[0] = this.iis.readByte$(), $b$[0];
});

Clazz.newMeth(C$, 'readUnsignedByte$', function () {
return this.iis.readUnsignedByte$();
});

Clazz.newMeth(C$, 'readShort$', function () {
return this.iis.readShort$();
});

Clazz.newMeth(C$, 'readUnsignedShort$', function () {
return this.iis.readUnsignedShort$();
});

Clazz.newMeth(C$, 'readInt$', function () {
return this.iis.readInt$();
});

Clazz.newMeth(C$, 'readUnsignedInt$', function () {
return this.iis.readUnsignedInt$();
});

Clazz.newMeth(C$, 'readLong$', function () {
return this.iis.readLong$();
});

Clazz.newMeth(C$, 'readFloat$', function () {
return this.iis.readFloat$();
});

Clazz.newMeth(C$, 'readDouble$', function () {
return this.iis.readDouble$();
});

Clazz.newMeth(C$, 'skipBytes$I', function (n) {
return this.iis.skipBytes$I(n);
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'write$I', function (b) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Writing is not supported!"]);
});

Clazz.newMeth(C$, 'writeByte$I', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Writing is not supported!"]);
});

Clazz.newMeth(C$, 'writeShort$I', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Writing is not supported!"]);
});

Clazz.newMeth(C$, 'writeInt$I', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Writing is not supported!"]);
});

Clazz.newMeth(C$, 'writeLong$J', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Writing is not supported!"]);
});

Clazz.newMeth(C$, 'writeFloat$F', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Writing is not supported!"]);
});

Clazz.newMeth(C$, 'writeDouble$D', function (v) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Writing is not supported!"]);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
