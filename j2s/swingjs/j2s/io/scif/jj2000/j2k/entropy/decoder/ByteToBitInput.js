(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.decoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ByteToBitInput");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bpos=-1;
}, 1);

C$.$fields$=[['I',['bbuf','bpos'],'O',['$in','io.scif.jj2000.j2k.entropy.decoder.ByteInputBuffer']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_decoder_ByteInputBuffer', function ($in) {
;C$.$init$.apply(this);
this.$in=$in;
}, 1);

Clazz.newMeth(C$, 'readBit$', function () {
if (this.bpos < 0) {
if ((this.bbuf & 255) != 255) {
this.bbuf=this.$in.read$();
this.bpos=7;
} else {
this.bbuf=this.$in.read$();
this.bpos=6;
}}return (this.bbuf >> this.bpos--) & 1;
});

Clazz.newMeth(C$, 'checkBytePadding$', function () {
var seq;
if (this.bpos < 0 && (this.bbuf & 255) == 255 ) {
this.bbuf=this.$in.read$();
this.bpos=6;
}if (this.bpos >= 0) {
seq=this.bbuf & ((1 << (this.bpos + 1)) - 1);
if (seq != (85 >> (7 - this.bpos))) return true;
}if (this.bbuf != -1) {
if (this.bbuf == 255 && this.bpos == 0 ) {
if ((this.$in.read$() & 255) >= 128) return true;
} else {
if (this.$in.read$() != -1) return true;
}}return false;
});

Clazz.newMeth(C$, 'flush$', function () {
this.bbuf=0;
this.bpos=-1;
});

Clazz.newMeth(C$, 'setByteArray$BA$I$I', function (buf, off, len) {
this.$in.setByteArray$BA$I$I(buf, off, len);
this.bbuf=0;
this.bpos=-1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
