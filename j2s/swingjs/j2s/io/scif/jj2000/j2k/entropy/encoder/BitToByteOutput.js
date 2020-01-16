(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BitToByteOutput");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isPredTerm=false;
this.delFF=false;
this.bpos=7;
this.nb=0;
}, 1);

C$.$fields$=[['Z',['isPredTerm','delFF'],'I',['bbuf','bpos','nb'],'O',['out','io.scif.jj2000.j2k.entropy.encoder.ByteOutputBuffer']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer', function (out) {
;C$.$init$.apply(this);
this.out=out;
}, 1);

Clazz.newMeth(C$, 'writeBits$IA$I', function (symbuf, nsym) {
var i;
var bbuf;
var bpos;
bbuf=this.bbuf;
bpos=this.bpos;
for (i=0; i < nsym; i++) {
bbuf|=(symbuf[i] & 1) << (bpos--);
if (bpos < 0) {
if (bbuf != 255) {
if (this.delFF) {
this.out.write$I(255);
this.delFF=false;
this.nb++;
}this.out.write$I(bbuf);
this.nb++;
bpos=7;
} else {
this.delFF=true;
bpos=6;
}bbuf=0;
}}
this.bbuf=bbuf;
this.bpos=bpos;
});

Clazz.newMeth(C$, 'writeBit$I', function (bit) {
this.bbuf|=(bit & 1) << (this.bpos--);
if (this.bpos < 0) {
if (this.bbuf != 255) {
if (this.delFF) {
this.out.write$I(255);
this.delFF=false;
this.nb++;
}this.out.write$I(this.bbuf);
this.nb++;
this.bpos=7;
} else {
this.delFF=true;
this.bpos=6;
}this.bbuf=0;
}});

Clazz.newMeth(C$, 'flush$', function () {
if (this.delFF) {
if (this.bpos != 6) {
this.out.write$I(255);
this.delFF=false;
this.nb++;
this.bbuf|=(42 >>> (6 - this.bpos));
this.out.write$I(this.bbuf);
this.nb++;
this.bpos=7;
this.bbuf=0;
} else if (this.isPredTerm) {
this.out.write$I(255);
this.nb++;
this.out.write$I(42);
this.nb++;
this.bpos=7;
this.bbuf=0;
this.delFF=false;
}} else {
if (this.bpos != 7) {
this.bbuf|=(42 >>> (6 - this.bpos));
this.out.write$I(this.bbuf);
this.nb++;
this.bpos=7;
this.bbuf=0;
}}});

Clazz.newMeth(C$, 'terminate$', function () {
this.flush$();
var savedNb=this.nb;
this.reset$();
return savedNb;
});

Clazz.newMeth(C$, 'reset$', function () {
this.delFF=false;
this.bpos=7;
this.bbuf=0;
this.nb=0;
});

Clazz.newMeth(C$, 'length$', function () {
if (this.delFF) {
return this.nb + 2;
} else {
return this.nb + ((this.bpos == 7) ? 0 : 1);
}});

Clazz.newMeth(C$, 'setPredTerm$Z', function (isPredTerm) {
this.isPredTerm=isPredTerm;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
