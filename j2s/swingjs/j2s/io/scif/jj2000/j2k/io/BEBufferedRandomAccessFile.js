(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.io"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BEBufferedRandomAccessFile", null, 'io.scif.jj2000.j2k.io.BufferedRandomAccessFile', ['io.scif.jj2000.j2k.io.RandomAccessIO', 'io.scif.jj2000.j2k.io.EndianType']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S$I', function (file, mode, bufferSize) {
;C$.superclazz.c$$java_io_File$S$I.apply(this,[file, mode, bufferSize]);C$.$init$.apply(this);
this.byteOrdering=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S', function (file, mode) {
;C$.superclazz.c$$java_io_File$S.apply(this,[file, mode]);C$.$init$.apply(this);
this.byteOrdering=0;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I', function (name, mode, bufferSize) {
;C$.superclazz.c$$S$S$I.apply(this,[name, mode, bufferSize]);C$.$init$.apply(this);
this.byteOrdering=0;
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (name, mode) {
;C$.superclazz.c$$S$S.apply(this,[name, mode]);C$.$init$.apply(this);
this.byteOrdering=0;
}, 1);

Clazz.newMeth(C$, 'writeShort$I', function (v) {
this.write$I(v >>> 8);
this.write$I(v);
});

Clazz.newMeth(C$, 'writeInt$I', function (v) {
this.write$I(v >>> 24);
this.write$I(v >>> 16);
this.write$I(v >>> 8);
this.write$I(v);
});

Clazz.newMeth(C$, 'writeLong$J', function (v) {
this.write$I(((v >>> 56)|0));
this.write$I(((v >>> 48)|0));
this.write$I(((v >>> 40)|0));
this.write$I(((v >>> 32)|0));
this.write$I(((v >>> 24)|0));
this.write$I(((v >>> 16)|0));
this.write$I(((v >>> 8)|0));
this.write$I((v|0));
});

Clazz.newMeth(C$, 'writeFloat$F', function (v) {
var intV=Float.floatToIntBits$F(v);
this.write$I(intV >>> 24);
this.write$I(intV >>> 16);
this.write$I(intV >>> 8);
this.write$I(intV);
});

Clazz.newMeth(C$, 'writeDouble$D', function (v) {
var longV=Double.doubleToLongBits$D(v);
this.write$I(((longV >>> 56)|0));
this.write$I(((longV >>> 48)|0));
this.write$I(((longV >>> 40)|0));
this.write$I(((longV >>> 32)|0));
this.write$I(((longV >>> 24)|0));
this.write$I(((longV >>> 16)|0));
this.write$I(((longV >>> 8)|0));
this.write$I(((longV)|0));
});

Clazz.newMeth(C$, 'readShort$', function () {
return ($s$[0] = ((this.read$() << 8) | (this.read$())), $s$[0]);
});

Clazz.newMeth(C$, 'readUnsignedShort$', function () {
return ((this.read$() << 8) | this.read$());
});

Clazz.newMeth(C$, 'readInt$', function () {
return ((this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | this.read$() );
});

Clazz.newMeth(C$, 'readUnsignedInt$', function () {
return ((this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | this.read$() );
});

Clazz.newMeth(C$, 'readLong$', function () {
return ((this.read$() << 56) | (this.read$() << 48) | (this.read$() << 40) | (this.read$() << 32) | (this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | (this.read$()) );
});

Clazz.newMeth(C$, 'readFloat$', function () {
return Float.intBitsToFloat$I((this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | (this.read$()) );
});

Clazz.newMeth(C$, 'readDouble$', function () {
return Double.longBitsToDouble$J((this.read$() << 56) | (this.read$() << 48) | (this.read$() << 40) | (this.read$() << 32) | (this.read$() << 24) | (this.read$() << 16) | (this.read$() << 8) | (this.read$()) );
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\nBig-Endian ordering";
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
