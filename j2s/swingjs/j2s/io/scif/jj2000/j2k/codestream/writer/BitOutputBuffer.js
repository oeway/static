(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.writer"),I$=[[0,'io.scif.jj2000.j2k.util.ArrayUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BitOutputBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.avbits=8;
}, 1);

C$.$fields$=[['I',['curbyte','avbits'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.buf=Clazz.array(Byte.TYPE, [32]);
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
var i;
this.curbyte=0;
this.avbits=8;
$I$(1).byteArraySet$BA$B(this.buf, ($b$[0] = 0, $b$[0]));
});

Clazz.newMeth(C$, 'writeBit$I', function (bit) {
this.buf[$k$=this.curbyte]=(this.buf[$k$]|(bit << --this.avbits)|0);
if (this.avbits > 0) {
return;
} else {
if (this.buf[this.curbyte] != -1) {
this.avbits=8;
} else {
this.avbits=7;
}this.curbyte++;
if (this.curbyte == this.buf.length) {
var oldbuf=this.buf;
this.buf=Clazz.array(Byte.TYPE, [oldbuf.length + 16]);
System.arraycopy$O$I$O$I$I(oldbuf, 0, this.buf, 0, oldbuf.length);
}}});

Clazz.newMeth(C$, 'writeBits$I$I', function (bits, n) {
if (((this.buf.length - this.curbyte) << 3) - 8 + this.avbits <= n + 2) {
var oldbuf=this.buf;
this.buf=Clazz.array(Byte.TYPE, [oldbuf.length + 16]);
System.arraycopy$O$I$O$I$I(oldbuf, 0, this.buf, 0, oldbuf.length);
}if (n >= this.avbits) {
n-=this.avbits;
this.buf[$k$=this.curbyte]=(this.buf[$k$]|(bits >> n)|0);
if (this.buf[this.curbyte] != -1) {
this.avbits=8;
} else {
this.avbits=7;
}this.curbyte++;
while (n >= this.avbits){
n-=this.avbits;
this.buf[$k$=this.curbyte]=(this.buf[$k$]|((bits >> n) & (~(1 << this.avbits)))|0);
if (this.buf[this.curbyte] != -1) {
this.avbits=8;
} else {
this.avbits=7;
}this.curbyte++;
}
}if (n > 0) {
this.avbits-=n;
this.buf[$k$=this.curbyte]=(this.buf[$k$]|((bits & ((1 << n) - 1)) << this.avbits)|0);
}if (this.avbits == 0) {
if (this.buf[this.curbyte] != -1) {
this.avbits=8;
} else {
this.avbits=7;
}this.curbyte++;
}});

Clazz.newMeth(C$, 'getLength$', function () {
if (this.avbits == 8) {
return this.curbyte;
} else {
return this.curbyte + 1;
}});

Clazz.newMeth(C$, 'getBuffer$', function () {
return this.buf;
});

Clazz.newMeth(C$, 'toByteArray$BA', function (data) {
if (data == null ) {
data=Clazz.array(Byte.TYPE, [(this.avbits == 8) ? this.curbyte : this.curbyte + 1]);
}System.arraycopy$O$I$O$I$I(this.buf, 0, data, 0, (this.avbits == 8) ? this.curbyte : this.curbyte + 1);
return data;
});

Clazz.newMeth(C$, 'toString', function () {
return "bits written = " + (this.curbyte * 8 + (8 - this.avbits)) + ", curbyte = " + this.curbyte + ", avbits = " + this.avbits ;
});
var $b$ = new Int8Array(1);
var $k$;
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
