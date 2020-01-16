(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BitWriter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index','bit'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.$init$.apply(this);
this.buf=Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'write$I$I', function (value, numBits) {
if (numBits <= 0) return;
var bits=Clazz.array(Byte.TYPE, [numBits]);
for (var i=0; i < numBits; i++) {
bits[i]=(((value & 1)|0)|0);
value>>=1;
}
for (var i=numBits - 1; i >= 0; i--) {
var b=bits[i] << (7 - this.bit);
this.buf[$k$=this.index]=(this.buf[$k$]|(b)|0);
this.bit++;
if (this.bit > 7) {
this.bit=0;
this.index++;
if (this.index >= this.buf.length) {
var newBuf=Clazz.array(Byte.TYPE, [this.buf.length * 2]);
System.arraycopy$O$I$O$I$I(this.buf, 0, newBuf, 0, this.buf.length);
this.buf=newBuf;
}}}
});

Clazz.newMeth(C$, 'write$S', function (bitString) {
if (bitString == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The string cannot be null."]);
for (var i=0; i < bitString.length$(); i++) {
if ("1" == bitString.charAt$I(i)) {
var b=1 << (7 - this.bit);
this.buf[$k$=this.index]=(this.buf[$k$]|(b)|0);
} else if ("0" != bitString.charAt$I(i)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[bitString.charAt$I(i) + "found at character " + i + "; 0 or 1 expected. Write only partially completed." ]);
}this.bit++;
if (this.bit > 7) {
this.bit=0;
this.index++;
if (this.index >= this.buf.length) {
var newBuf=Clazz.array(Byte.TYPE, [this.buf.length * 2]);
System.arraycopy$O$I$O$I$I(this.buf, 0, newBuf, 0, this.buf.length);
this.buf=newBuf;
}}}
});

Clazz.newMeth(C$, 'toByteArray$', function () {
var size=this.index;
if (this.bit > 0) size++;
var b=Clazz.array(Byte.TYPE, [size]);
System.arraycopy$O$I$O$I$I(this.buf, 0, b, 0, size);
return b;
});
var $k$;
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
