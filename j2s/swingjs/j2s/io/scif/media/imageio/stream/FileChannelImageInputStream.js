(function(){var P$=Clazz.newPackage("io.scif.media.imageio.stream"),p$1={},I$=[[0,['java.nio.channels.FileChannel','.MapMode']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileChannelImageInputStream", null, 'javax.imageio.stream.ImageInputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['mappedPos','mappedUpperBound'],'O',['channel','java.nio.channels.FileChannel','mappedBuffer','java.nio.MappedByteBuffer']]]

Clazz.newMeth(C$, 'c$$java_nio_channels_FileChannel', function (channel) {
Clazz.super_(C$, this);
if (channel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["channel == null"]);
} else if (!channel.isOpen$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["channel.isOpen() == false"]);
}this.channel=channel;
var channelPosition=channel.position$();
this.streamPos=this.flushedPos=channelPosition;
var fullSize=channel.size$() - channelPosition;
var mappedSize=Math.min(fullSize, 2147483647);
this.mappedPos=0;
this.mappedUpperBound=this.mappedPos + mappedSize;
this.mappedBuffer=channel.map$java_nio_channels_FileChannel_MapMode$J$J($I$(1).READ_ONLY, channelPosition, mappedSize);
}, 1);

Clazz.newMeth(C$, 'getMappedBuffer$I', function (len) {
if (this.streamPos < this.mappedPos || this.streamPos + len >= this.mappedUpperBound ) {
this.mappedPos=this.streamPos;
var mappedSize=Math.min(this.channel.size$() - this.mappedPos, 2147483647);
this.mappedUpperBound=this.mappedPos + mappedSize;
this.mappedBuffer=this.channel.map$java_nio_channels_FileChannel_MapMode$J$J($I$(1).READ_ONLY, this.mappedPos, mappedSize);
this.mappedBuffer.order$java_nio_ByteOrder(C$.superclazz.prototype.getByteOrder$.apply(this, []));
}return this.mappedBuffer;
}, p$1);

Clazz.newMeth(C$, 'read$', function () {
this.checkClosed$();
this.bitOffset=0;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [1]);
if (byteBuffer.remaining$() < 1) {
return -1;
}var value=byteBuffer.get$() & 255;
this.streamPos++;
return value;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
if (off < 0 || len < 0  || off + len > b.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > b.length"]);
} else if (len == 0) {
return 0;
}this.checkClosed$();
this.bitOffset=0;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [len]);
var numBytesRemaining=byteBuffer.remaining$();
if (numBytesRemaining < 1) {
return -1;
} else if (len > numBytesRemaining) {
len=numBytesRemaining;
}byteBuffer.get$BA$I$I(b, off, len);
this.streamPos+=len;
return len;
});

Clazz.newMeth(C$, 'close$', function () {
C$.superclazz.prototype.close$.apply(this, []);
this.channel=null;
});

Clazz.newMeth(C$, 'readFully$CA$I$I', function (c, off, len) {
if (off < 0 || len < 0  || off + len > c.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > c.length"]);
} else if (len == 0) {
return;
}var byteLen=2 * len;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [byteLen]);
if (byteBuffer.remaining$() < byteLen) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}var viewBuffer=byteBuffer.asCharBuffer$();
viewBuffer.get$CA$I$I(c, off, len);
this.seek$J(this.streamPos + byteLen);
});

Clazz.newMeth(C$, 'readFully$HA$I$I', function (s, off, len) {
if (off < 0 || len < 0  || off + len > s.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > s.length"]);
} else if (len == 0) {
return;
}var byteLen=2 * len;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [byteLen]);
if (byteBuffer.remaining$() < byteLen) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}var viewBuffer=byteBuffer.asShortBuffer$();
viewBuffer.get$HA$I$I(s, off, len);
this.seek$J(this.streamPos + byteLen);
});

Clazz.newMeth(C$, 'readFully$IA$I$I', function (i, off, len) {
if (off < 0 || len < 0  || off + len > i.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > i.length"]);
} else if (len == 0) {
return;
}var byteLen=4 * len;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [byteLen]);
if (byteBuffer.remaining$() < byteLen) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}var viewBuffer=byteBuffer.asIntBuffer$();
viewBuffer.get$IA$I$I(i, off, len);
this.seek$J(this.streamPos + byteLen);
});

Clazz.newMeth(C$, 'readFully$JA$I$I', function (l, off, len) {
if (off < 0 || len < 0  || off + len > l.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > l.length"]);
} else if (len == 0) {
return;
}var byteLen=8 * len;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [byteLen]);
if (byteBuffer.remaining$() < byteLen) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}var viewBuffer=byteBuffer.asLongBuffer$();
viewBuffer.get$JA$I$I(l, off, len);
this.seek$J(this.streamPos + byteLen);
});

Clazz.newMeth(C$, 'readFully$FA$I$I', function (f, off, len) {
if (off < 0 || len < 0  || off + len > f.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > f.length"]);
} else if (len == 0) {
return;
}var byteLen=4 * len;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [byteLen]);
if (byteBuffer.remaining$() < byteLen) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}var viewBuffer=byteBuffer.asFloatBuffer$();
viewBuffer.get$FA$I$I(f, off, len);
this.seek$J(this.streamPos + byteLen);
});

Clazz.newMeth(C$, 'readFully$DA$I$I', function (d, off, len) {
if (off < 0 || len < 0  || off + len > d.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > d.length"]);
} else if (len == 0) {
return;
}var byteLen=8 * len;
var byteBuffer=p$1.getMappedBuffer$I.apply(this, [byteLen]);
if (byteBuffer.remaining$() < byteLen) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}var viewBuffer=byteBuffer.asDoubleBuffer$();
viewBuffer.get$DA$I$I(d, off, len);
this.seek$J(this.streamPos + byteLen);
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
if (pos >= this.mappedPos && pos < this.mappedUpperBound ) {
this.mappedBuffer.position$I(((pos - this.mappedPos)|0));
} else {
var len=(Math.min(this.channel.size$() - pos, 2147483647)|0);
this.mappedBuffer=p$1.getMappedBuffer$I.apply(this, [len]);
}});

Clazz.newMeth(C$, 'setByteOrder$java_nio_ByteOrder', function (networkByteOrder) {
C$.superclazz.prototype.setByteOrder$java_nio_ByteOrder.apply(this, [networkByteOrder]);
this.mappedBuffer.order$java_nio_ByteOrder(networkByteOrder);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
