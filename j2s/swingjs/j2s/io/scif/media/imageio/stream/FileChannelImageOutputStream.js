(function(){var P$=Clazz.newPackage("io.scif.media.imageio.stream"),p$1={},I$=[[0,'java.nio.ByteBuffer','io.scif.media.imageio.stream.FileChannelImageInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileChannelImageOutputStream", null, 'javax.imageio.stream.ImageOutputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.readStream=null;
}, 1);

C$.$fields$=[['O',['channel','java.nio.channels.FileChannel','byteBuffer','java.nio.ByteBuffer','readStream','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$java_nio_channels_FileChannel', function (channel) {
Clazz.super_(C$, this);
if (channel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["channel == null"]);
} else if (!channel.isOpen$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["channel.isOpen() == false"]);
}this.channel=channel;
this.streamPos=this.flushedPos=channel.position$();
this.byteBuffer=$I$(1).allocateDirect$I(1048576);
this.readStream=Clazz.new_($I$(2,1).c$$java_nio_channels_FileChannel,[channel]);
}, 1);

Clazz.newMeth(C$, 'getImageInputStream', function () {
p$1.flushBuffer.apply(this, []);
this.readStream.setByteOrder$java_nio_ByteOrder(this.byteOrder);
this.readStream.seek$J(this.streamPos);
this.readStream.flushBefore$J(this.flushedPos);
this.readStream.setBitOffset$I(this.bitOffset);
return this.readStream;
}, p$1);

Clazz.newMeth(C$, 'flushBuffer', function () {
if (this.byteBuffer.position$() != 0) {
this.byteBuffer.limit$I(this.byteBuffer.position$());
this.byteBuffer.position$I(0);
this.channel.write$java_nio_ByteBuffer(this.byteBuffer);
this.byteBuffer.clear$();
}}, p$1);

Clazz.newMeth(C$, 'read$', function () {
this.checkClosed$();
this.bitOffset=0;
var inputStream=p$1.getImageInputStream.apply(this, []);
this.streamPos++;
return inputStream.read$();
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
if (off < 0 || len < 0  || off + len > b.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > b.length"]);
} else if (len == 0) {
return 0;
}this.checkClosed$();
this.bitOffset=0;
var inputStream=p$1.getImageInputStream.apply(this, []);
var numBytesRead=inputStream.read$BA$I$I(b, off, len);
this.streamPos+=numBytesRead;
return numBytesRead;
});

Clazz.newMeth(C$, 'write$I', function (b) {
this.write$BA$I$I(Clazz.array(Byte.TYPE, -1, [($b$[0] = (b & 255), $b$[0])]), 0, 1);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
if (off < 0 || len < 0  || off + len > b.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > b.length"]);
} else if (len == 0) {
return;
}this.flushBits$();
var numPut=0;
do {
var numToPut=Math.min(len - numPut, this.byteBuffer.remaining$());
if (numToPut == 0) {
p$1.flushBuffer.apply(this, []);
continue;
}this.byteBuffer.put$BA$I$I(b, off + numPut, numToPut);
numPut+=numToPut;
} while (numPut < len);
this.streamPos+=len;
});

Clazz.newMeth(C$, 'readFully$CA$I$I', function (c, off, len) {
p$1.getImageInputStream.apply(this, []).readFully$CA$I$I(c, off, len);
this.streamPos+=2 * len;
});

Clazz.newMeth(C$, 'readFully$HA$I$I', function (s, off, len) {
p$1.getImageInputStream.apply(this, []).readFully$HA$I$I(s, off, len);
this.streamPos+=2 * len;
});

Clazz.newMeth(C$, 'readFully$IA$I$I', function (i, off, len) {
p$1.getImageInputStream.apply(this, []).readFully$IA$I$I(i, off, len);
this.streamPos+=4 * len;
});

Clazz.newMeth(C$, 'readFully$JA$I$I', function (l, off, len) {
p$1.getImageInputStream.apply(this, []).readFully$JA$I$I(l, off, len);
this.streamPos+=8 * len;
});

Clazz.newMeth(C$, 'readFully$FA$I$I', function (f, off, len) {
p$1.getImageInputStream.apply(this, []).readFully$FA$I$I(f, off, len);
this.streamPos+=4 * len;
});

Clazz.newMeth(C$, 'readFully$DA$I$I', function (d, off, len) {
p$1.getImageInputStream.apply(this, []).readFully$DA$I$I(d, off, len);
this.streamPos+=8 * len;
});

Clazz.newMeth(C$, 'writeChars$CA$I$I', function (c, off, len) {
if (off < 0 || len < 0  || off + len > c.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > c.length"]);
} else if (len == 0) {
return;
}this.flushBits$();
var numPut=0;
var viewBuffer=this.byteBuffer.asCharBuffer$();
do {
var numToPut=Math.min(len - numPut, viewBuffer.remaining$());
if (numToPut == 0) {
p$1.flushBuffer.apply(this, []);
continue;
}viewBuffer.put$CA$I$I(c, off + numPut, numToPut);
this.byteBuffer.position$I(this.byteBuffer.position$() + 2 * numToPut);
numPut+=numToPut;
} while (numPut < len);
this.streamPos+=2 * len;
});

Clazz.newMeth(C$, 'writeShorts$HA$I$I', function (s, off, len) {
if (off < 0 || len < 0  || off + len > s.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > c.length"]);
} else if (len == 0) {
return;
}this.flushBits$();
var numPut=0;
var viewBuffer=this.byteBuffer.asShortBuffer$();
do {
var numToPut=Math.min(len - numPut, viewBuffer.remaining$());
if (numToPut == 0) {
p$1.flushBuffer.apply(this, []);
continue;
}viewBuffer.put$HA$I$I(s, off + numPut, numToPut);
this.byteBuffer.position$I(this.byteBuffer.position$() + 2 * numToPut);
numPut+=numToPut;
} while (numPut < len);
this.streamPos+=2 * len;
});

Clazz.newMeth(C$, 'writeInts$IA$I$I', function (i, off, len) {
if (off < 0 || len < 0  || off + len > i.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > c.length"]);
} else if (len == 0) {
return;
}this.flushBits$();
var numPut=0;
var viewBuffer=this.byteBuffer.asIntBuffer$();
do {
var numToPut=Math.min(len - numPut, viewBuffer.remaining$());
if (numToPut == 0) {
p$1.flushBuffer.apply(this, []);
continue;
}viewBuffer.put$IA$I$I(i, off + numPut, numToPut);
this.byteBuffer.position$I(this.byteBuffer.position$() + 4 * numToPut);
numPut+=numToPut;
} while (numPut < len);
this.streamPos+=4 * len;
});

Clazz.newMeth(C$, 'writeLongs$JA$I$I', function (l, off, len) {
if (off < 0 || len < 0  || off + len > l.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > c.length"]);
} else if (len == 0) {
return;
}this.flushBits$();
var numPut=0;
var viewBuffer=this.byteBuffer.asLongBuffer$();
do {
var numToPut=Math.min(len - numPut, viewBuffer.remaining$());
if (numToPut == 0) {
p$1.flushBuffer.apply(this, []);
continue;
}viewBuffer.put$JA$I$I(l, off + numPut, numToPut);
this.byteBuffer.position$I(this.byteBuffer.position$() + 8 * numToPut);
numPut+=numToPut;
} while (numPut < len);
this.streamPos+=8 * len;
});

Clazz.newMeth(C$, 'writeFloats$FA$I$I', function (f, off, len) {
if (off < 0 || len < 0  || off + len > f.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > f.length"]);
} else if (len == 0) {
return;
}this.flushBits$();
var numPut=0;
var viewBuffer=this.byteBuffer.asFloatBuffer$();
do {
var numToPut=Math.min(len - numPut, viewBuffer.remaining$());
if (numToPut == 0) {
p$1.flushBuffer.apply(this, []);
continue;
}viewBuffer.put$FA$I$I(f, off + numPut, numToPut);
this.byteBuffer.position$I(this.byteBuffer.position$() + 4 * numToPut);
numPut+=numToPut;
} while (numPut < len);
this.streamPos+=4 * len;
});

Clazz.newMeth(C$, 'writeDoubles$DA$I$I', function (d, off, len) {
if (off < 0 || len < 0  || off + len > d.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > d.length"]);
} else if (len == 0) {
return;
}this.flushBits$();
var numPut=0;
var viewBuffer=this.byteBuffer.asDoubleBuffer$();
do {
var numToPut=Math.min(len - numPut, viewBuffer.remaining$());
if (numToPut == 0) {
p$1.flushBuffer.apply(this, []);
continue;
}viewBuffer.put$DA$I$I(d, off + numPut, numToPut);
this.byteBuffer.position$I(this.byteBuffer.position$() + 8 * numToPut);
numPut+=numToPut;
} while (numPut < len);
this.streamPos+=8 * len;
});

Clazz.newMeth(C$, 'close$', function () {
p$1.flushBuffer.apply(this, []);
this.readStream.close$();
this.readStream=null;
this.channel=null;
this.byteBuffer=null;
C$.superclazz.prototype.close$.apply(this, []);
});

Clazz.newMeth(C$, 'length$', function () {
var length=-1;
try {
length=this.channel.size$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return length;
});

Clazz.newMeth(C$, 'seek$J', function (pos) {
C$.superclazz.prototype.seek$J.apply(this, [pos]);
p$1.flushBuffer.apply(this, []);
this.channel.position$J(pos);
});

Clazz.newMeth(C$, 'setByteOrder$java_nio_ByteOrder', function (networkByteOrder) {
C$.superclazz.prototype.setByteOrder$java_nio_ByteOrder.apply(this, [networkByteOrder]);
this.byteBuffer.order$java_nio_ByteOrder(networkByteOrder);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
