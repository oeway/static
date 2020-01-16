(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PktHeaderBitReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['usebais'],'I',['bbuf','bpos','nextbbuf'],'O',['$in','io.scif.jj2000.j2k.io.RandomAccessIO','bais','java.io.ByteArrayInputStream']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_io_RandomAccessIO', function ($in) {
;C$.$init$.apply(this);
this.$in=$in;
this.usebais=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_ByteArrayInputStream', function (bais) {
;C$.$init$.apply(this);
this.bais=bais;
this.usebais=true;
}, 1);

Clazz.newMeth(C$, 'readBit$', function () {
if (this.bpos == 0) {
if (this.bbuf != 255) {
if (this.usebais) this.bbuf=this.bais.read$();
 else this.bbuf=this.$in.read$();
this.bpos=8;
if (this.bbuf == 255) {
if (this.usebais) this.nextbbuf=this.bais.read$();
 else this.nextbbuf=this.$in.read$();
}} else {
this.bbuf=this.nextbbuf;
this.bpos=7;
}}return (this.bbuf >> --this.bpos) & 1;
});

Clazz.newMeth(C$, 'readBits$I', function (n) {
var bits;
if (n <= this.bpos) {
return (this.bbuf >> (this.bpos-=n)) & ((1 << n) - 1);
} else {
bits=0;
do {
bits<<=this.bpos;
n-=this.bpos;
bits|=this.readBits$I(this.bpos);
if (this.bbuf != 255) {
if (this.usebais) this.bbuf=this.bais.read$();
 else this.bbuf=this.$in.read$();
this.bpos=8;
if (this.bbuf == 255) {
if (this.usebais) this.nextbbuf=this.bais.read$();
 else this.nextbbuf=this.$in.read$();
}} else {
this.bbuf=this.nextbbuf;
this.bpos=7;
}} while (n > this.bpos);
bits<<=n;
bits|=(this.bbuf >> (this.bpos-=n)) & ((1 << n) - 1);
return bits;
}});

Clazz.newMeth(C$, 'sync$', function () {
this.bbuf=0;
this.bpos=0;
});

Clazz.newMeth(C$, 'setInput$io_scif_jj2000_j2k_io_RandomAccessIO', function ($in) {
this.$in=$in;
this.bbuf=0;
this.bpos=0;
});

Clazz.newMeth(C$, 'setInput$java_io_ByteArrayInputStream', function (bais) {
this.bais=bais;
this.bbuf=0;
this.bpos=0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
