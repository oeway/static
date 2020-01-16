(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.decoder"),p$1={},I$=[[0,'io.scif.jj2000.j2k.util.ArrayUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MQDecoder");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.qe=Clazz.array(Integer.TYPE, -1, [22017, 13313, 6145, 2753, 1313, 545, 22017, 21505, 18433, 14337, 12289, 9217, 7169, 5633, 22017, 21505, 20737, 18433, 14337, 13313, 12289, 10241, 9217, 8705, 7169, 6145, 5633, 5121, 4609, 4353, 2753, 2497, 2209, 1313, 1089, 673, 545, 321, 273, 133, 73, 37, 21, 9, 5, 1, 22017]);
C$.nMPS=Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 5, 38, 7, 8, 9, 10, 11, 12, 13, 29, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 45, 46]);
C$.nLPS=Clazz.array(Integer.TYPE, -1, [1, 6, 9, 12, 29, 33, 6, 14, 14, 14, 17, 18, 20, 21, 14, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46]);
C$.switchLM=Clazz.array(Integer.TYPE, -1, [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['markerFound'],'I',['c','cT','a','b'],'O',['$in','io.scif.jj2000.j2k.entropy.decoder.ByteInputBuffer','mPS','int[]','+I','+initStates']]
,['O',['qe','int[]','+nMPS','+nLPS','+switchLM']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_decoder_ByteInputBuffer$I$IA', function (iStream, nrOfContexts, initStates) {
;C$.$init$.apply(this);
this.$in=iStream;
this.I=Clazz.array(Integer.TYPE, [nrOfContexts]);
this.mPS=Clazz.array(Integer.TYPE, [nrOfContexts]);
this.initStates=initStates;
p$1.init.apply(this, []);
this.resetCtxts$();
}, 1);

Clazz.newMeth(C$, 'fastDecodeSymbols$IA$I$I', function (bits, ctxt, n) {
var q;
var idx;
var la;
var i;
idx=this.I[ctxt];
q=C$.qe[idx];
if ((q < 16384) && (n <= ((this.a - (this.c >>> 16) - 1 )/q|0)) && (n <= ((this.a - 32768)/q|0) + 1)  ) {
this.a-=n * q;
if (this.a >= 32768) {
bits[0]=this.mPS[ctxt];
return true;
} else {
this.I[ctxt]=C$.nMPS[idx];
if (this.cT == 0) p$1.byteIn.apply(this, []);
this.a<<=1;
this.c<<=1;
this.cT--;
bits[0]=this.mPS[ctxt];
return true;
}} else {
la=this.a;
for (i=0; i < n; i++) {
la-=q;
if ((this.c >>> 16) < la) {
if (la >= 32768) {
bits[i]=this.mPS[ctxt];
} else {
if (la >= q) {
bits[i]=this.mPS[ctxt];
idx=C$.nMPS[idx];
q=C$.qe[idx];
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} else {
bits[i]=1 - this.mPS[ctxt];
if (C$.switchLM[idx] == 1) this.mPS[ctxt]=1 - this.mPS[ctxt];
idx=C$.nLPS[idx];
q=C$.qe[idx];
do {
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} while (la < 32768);
}}} else {
this.c-=(la << 16);
if (la < q) {
la=q;
bits[i]=this.mPS[ctxt];
idx=C$.nMPS[idx];
q=C$.qe[idx];
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} else {
la=q;
bits[i]=1 - this.mPS[ctxt];
if (C$.switchLM[idx] == 1) this.mPS[ctxt]=1 - this.mPS[ctxt];
idx=C$.nLPS[idx];
q=C$.qe[idx];
do {
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} while (la < 32768);
}}}
this.a=la;
this.I[ctxt]=idx;
return false;
}});

Clazz.newMeth(C$, 'decodeSymbols$IA$IA$I', function (bits, cX, n) {
var q;
var ctxt;
var la;
var index;
var i;
for (i=0; i < n; i++) {
ctxt=cX[i];
index=this.I[ctxt];
q=C$.qe[index];
this.a-=q;
if ((this.c >>> 16) < this.a) {
if (this.a >= 32768) {
bits[i]=this.mPS[ctxt];
} else {
la=this.a;
if (la >= q) {
bits[i]=this.mPS[ctxt];
this.I[ctxt]=C$.nMPS[index];
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} else {
bits[i]=1 - this.mPS[ctxt];
if (C$.switchLM[index] == 1) this.mPS[ctxt]=1 - this.mPS[ctxt];
this.I[ctxt]=C$.nLPS[index];
do {
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} while (la < 32768);
}this.a=la;
}} else {
la=this.a;
this.c-=(la << 16);
if (la < q) {
la=q;
bits[i]=this.mPS[ctxt];
this.I[ctxt]=C$.nMPS[index];
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} else {
la=q;
bits[i]=1 - this.mPS[ctxt];
if (C$.switchLM[index] == 1) this.mPS[ctxt]=1 - this.mPS[ctxt];
this.I[ctxt]=C$.nLPS[index];
do {
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} while (la < 32768);
}this.a=la;
}}
});

Clazz.newMeth(C$, 'decodeSymbol$I', function (context) {
var q;
var la;
var index;
var decision;
index=this.I[context];
q=C$.qe[index];
this.a-=q;
if ((this.c >>> 16) < this.a) {
if (this.a >= 32768) {
decision=this.mPS[context];
} else {
la=this.a;
if (la >= q) {
decision=this.mPS[context];
this.I[context]=C$.nMPS[index];
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} else {
decision=1 - this.mPS[context];
if (C$.switchLM[index] == 1) this.mPS[context]=1 - this.mPS[context];
this.I[context]=C$.nLPS[index];
do {
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} while (la < 32768);
}this.a=la;
}} else {
la=this.a;
this.c-=(la << 16);
if (la < q) {
la=q;
decision=this.mPS[context];
this.I[context]=C$.nMPS[index];
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} else {
la=q;
decision=1 - this.mPS[context];
if (C$.switchLM[index] == 1) this.mPS[context]=1 - this.mPS[context];
this.I[context]=C$.nLPS[index];
do {
if (this.cT == 0) p$1.byteIn.apply(this, []);
la<<=1;
this.c<<=1;
this.cT--;
} while (la < 32768);
}this.a=la;
}return decision;
});

Clazz.newMeth(C$, 'checkPredTerm$', function () {
var k;
var q;
if (this.b != 255 && !this.markerFound ) return true;
if (this.cT != 0 && !this.markerFound ) return true;
if (this.cT == 1) return false;
if (this.cT == 0) {
if (!this.markerFound) {
this.b=this.$in.read$() & 255;
if (this.b <= 143) return true;
}this.cT=8;
}k=this.cT - 1;
q=32768 >> k;
this.a-=q;
if ((this.c >>> 16) < this.a) {
return true;
}this.c-=(this.a << 16);
this.a=q;
do {
if (this.cT == 0) p$1.byteIn.apply(this, []);
this.a<<=1;
this.c<<=1;
this.cT--;
} while (this.a < 32768);
return false;
});

Clazz.newMeth(C$, 'byteIn', function () {
if (!this.markerFound) {
if (this.b == 255) {
this.b=this.$in.read$() & 255;
if (this.b > 143) {
this.markerFound=true;
this.cT=8;
} else {
this.c+=65024 - (this.b << 9);
this.cT=7;
}} else {
this.b=this.$in.read$() & 255;
this.c+=65280 - (this.b << 8);
this.cT=8;
}} else {
this.cT=8;
}}, p$1);

Clazz.newMeth(C$, 'getNumCtxts$', function () {
return this.I.length;
});

Clazz.newMeth(C$, 'resetCtxt$I', function (c) {
this.I[c]=this.initStates[c];
this.mPS[c]=0;
});

Clazz.newMeth(C$, 'resetCtxts$', function () {
System.arraycopy$O$I$O$I$I(this.initStates, 0, this.I, 0, this.I.length);
$I$(1).intArraySet$IA$I(this.mPS, 0);
});

Clazz.newMeth(C$, 'nextSegment$BA$I$I', function (buf, off, len) {
this.$in.setByteArray$BA$I$I(buf, off, len);
p$1.init.apply(this, []);
});

Clazz.newMeth(C$, 'getByteInputBuffer$', function () {
return this.$in;
});

Clazz.newMeth(C$, 'init', function () {
this.markerFound=false;
this.b=this.$in.read$() & 255;
this.c=(this.b ^ 255) << 16;
p$1.byteIn.apply(this, []);
this.c=this.c << 7;
this.cT=this.cT - 7;
this.a=32768;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
