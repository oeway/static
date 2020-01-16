(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),p$1={},I$=[[0,'Error','io.scif.jj2000.j2k.util.ArrayUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MQCoder");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.qe=Clazz.array(Integer.TYPE, -1, [22017, 13313, 6145, 2753, 1313, 545, 22017, 21505, 18433, 14337, 12289, 9217, 7169, 5633, 22017, 21505, 20737, 18433, 14337, 13313, 12289, 10241, 9217, 8705, 7169, 6145, 5633, 5121, 4609, 4353, 2753, 2497, 2209, 1313, 1089, 673, 545, 321, 273, 133, 73, 37, 21, 9, 5, 1, 22017]);
C$.nMPS=Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 5, 38, 7, 8, 9, 10, 11, 12, 13, 29, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 45, 46]);
C$.nLPS=Clazz.array(Integer.TYPE, -1, [1, 6, 9, 12, 29, 33, 6, 14, 14, 14, 17, 18, 20, 21, 14, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46]);
C$.switchLM=Clazz.array(Integer.TYPE, -1, [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}

Clazz.newMeth(C$, '$init$', function () {
this.nrOfWrittenBytes=-1;
}, 1);

C$.$fields$=[['Z',['delFF'],'I',['c','cT','a','b','nrOfWrittenBytes','ttype','ltype','nSaved'],'O',['out','io.scif.jj2000.j2k.entropy.encoder.ByteOutputBuffer','mPS','int[]','+I','+initStates','+savedC','+savedCT','+savedA','+savedB','savedDelFF','boolean[]']]
,['O',['qe','int[]','+nMPS','+nLPS','+switchLM']]]

Clazz.newMeth(C$, 'setLenCalcType$I', function (ltype) {
if (ltype != 0 && ltype != 1  && ltype != 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unrecognized length " + "calculation type code: " + ltype ]);
}if (ltype == 2) {
if (this.savedC == null ) this.savedC=Clazz.array(Integer.TYPE, [96]);
if (this.savedCT == null ) this.savedCT=Clazz.array(Integer.TYPE, [96]);
if (this.savedA == null ) this.savedA=Clazz.array(Integer.TYPE, [96]);
if (this.savedB == null ) this.savedB=Clazz.array(Integer.TYPE, [96]);
if (this.savedDelFF == null ) this.savedDelFF=Clazz.array(Boolean.TYPE, [96]);
}this.ltype=ltype;
});

Clazz.newMeth(C$, 'setTermType$I', function (ttype) {
if (ttype != 0 && ttype != 1  && ttype != 2  && ttype != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unrecognized termination type " + "code: " + ttype ]);
}this.ttype=ttype;
});

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer$I$IA', function (oStream, nrOfContexts, init) {
;C$.$init$.apply(this);
this.out=oStream;
this.I=Clazz.array(Integer.TYPE, [nrOfContexts]);
this.mPS=Clazz.array(Integer.TYPE, [nrOfContexts]);
this.initStates=init;
this.a=32768;
this.c=0;
if (this.b == 255) this.cT=13;
 else this.cT=12;
this.resetCtxts$();
this.b=0;
}, 1);

Clazz.newMeth(C$, 'fastCodeSymbols$I$I$I', function (bit, ctxt, n) {
var q;
var la;
var nc;
var ns;
var li;
li=this.I[ctxt];
q=C$.qe[li];
if ((q <= 16384) && (bit == this.mPS[ctxt]) && ((ns=((this.a - 32768)/q|0) + 1) > 1)  ) {
do {
if (n <= ns) {
la=n * q;
this.a-=la;
this.c+=la;
if (this.a >= 32768) {
this.I[ctxt]=li;
return;
}this.I[ctxt]=C$.nMPS[li];
this.a<<=1;
this.c<<=1;
this.cT--;
if (this.cT == 0) {
p$1.byteOut.apply(this, []);
}return;
} else {
la=ns * q;
this.c+=la;
this.a-=la;
li=C$.nMPS[li];
q=C$.qe[li];
this.a<<=1;
this.c<<=1;
this.cT--;
if (this.cT == 0) {
p$1.byteOut.apply(this, []);
}n-=ns;
ns=((this.a - 32768)/q|0) + 1;
continue;
}} while (n > 0);
} else {
la=this.a;
do {
if (bit == this.mPS[ctxt]) {
la-=q;
if (la >= 32768) {
this.c+=q;
} else {
if (la < q) la=q;
 else this.c+=q;
li=C$.nMPS[li];
q=C$.qe[li];
la<<=1;
this.c<<=1;
this.cT--;
if (this.cT == 0) {
p$1.byteOut.apply(this, []);
}}} else {
la-=q;
if (la < q) this.c+=q;
 else la=q;
if (C$.switchLM[li] != 0) {
this.mPS[ctxt]=1 - this.mPS[ctxt];
}li=C$.nLPS[li];
q=C$.qe[li];
nc=0;
do {
la<<=1;
nc++;
} while (la < 32768);
if (this.cT > nc) {
this.c<<=nc;
this.cT-=nc;
} else {
do {
this.c<<=this.cT;
nc-=this.cT;
p$1.byteOut.apply(this, []);
} while (this.cT <= nc);
this.c<<=nc;
this.cT-=nc;
}}n--;
} while (n > 0);
this.I[ctxt]=li;
this.a=la;
}});

Clazz.newMeth(C$, 'codeSymbols$IA$IA$I', function (bits, cX, n) {
var q;
var li;
var la;
var nc;
var ctxt;
var i;
la=this.a;
for (i=0; i < n; i++) {
ctxt=cX[i];
li=this.I[ctxt];
q=C$.qe[li];
if (bits[i] == this.mPS[ctxt]) {
la-=q;
if (la >= 32768) {
this.c+=q;
} else {
if (la < q) la=q;
 else this.c+=q;
this.I[ctxt]=C$.nMPS[li];
la<<=1;
this.c<<=1;
this.cT--;
if (this.cT == 0) {
p$1.byteOut.apply(this, []);
}}} else {
la-=q;
if (la < q) this.c+=q;
 else la=q;
if (C$.switchLM[li] != 0) {
this.mPS[ctxt]=1 - this.mPS[ctxt];
}this.I[ctxt]=C$.nLPS[li];
nc=0;
do {
la<<=1;
nc++;
} while (la < 32768);
if (this.cT > nc) {
this.c<<=nc;
this.cT-=nc;
} else {
do {
this.c<<=this.cT;
nc-=this.cT;
p$1.byteOut.apply(this, []);
} while (this.cT <= nc);
this.c<<=nc;
this.cT-=nc;
}}}
this.a=la;
});

Clazz.newMeth(C$, 'codeSymbol$I$I', function (bit, context) {
var q;
var li;
var la;
var n;
li=this.I[context];
q=C$.qe[li];
if (bit == this.mPS[context]) {
this.a-=q;
if (this.a >= 32768) {
this.c+=q;
} else {
if (this.a < q) this.a=q;
 else this.c+=q;
this.I[context]=C$.nMPS[li];
this.a<<=1;
this.c<<=1;
this.cT--;
if (this.cT == 0) {
p$1.byteOut.apply(this, []);
}}} else {
la=this.a;
la-=q;
if (la < q) this.c+=q;
 else la=q;
if (C$.switchLM[li] != 0) {
this.mPS[context]=1 - this.mPS[context];
}this.I[context]=C$.nLPS[li];
n=0;
do {
la<<=1;
n++;
} while (la < 32768);
if (this.cT > n) {
this.c<<=n;
this.cT-=n;
} else {
do {
this.c<<=this.cT;
n-=this.cT;
p$1.byteOut.apply(this, []);
} while (this.cT <= n);
this.c<<=n;
this.cT-=n;
}this.a=la;
}});

Clazz.newMeth(C$, 'byteOut', function () {
if (this.nrOfWrittenBytes >= 0) {
if (this.b == 255) {
this.delFF=true;
this.b=this.c >>> 20;
this.c&=1048575;
this.cT=7;
} else if (this.c < 134217728) {
if (this.delFF) {
this.out.write$I(255);
this.delFF=false;
this.nrOfWrittenBytes++;
}this.out.write$I(this.b);
this.nrOfWrittenBytes++;
this.b=this.c >>> 19;
this.c&=524287;
this.cT=8;
} else {
this.b++;
if (this.b == 255) {
this.delFF=true;
this.c&=134217727;
this.b=this.c >>> 20;
this.c&=1048575;
this.cT=7;
} else {
if (this.delFF) {
this.out.write$I(255);
this.delFF=false;
this.nrOfWrittenBytes++;
}this.out.write$I(this.b);
this.nrOfWrittenBytes++;
this.b=((this.c >>> 19) & 255);
this.c&=524287;
this.cT=8;
}}} else {
this.b=(this.c >>> 19);
this.c&=524287;
this.cT=8;
this.nrOfWrittenBytes++;
}}, p$1);

Clazz.newMeth(C$, 'terminate$', function () {
switch (this.ttype) {
case 0:
var tempc=this.c + this.a;
this.c=this.c | 65535;
if (this.c >= tempc) this.c=this.c - 32768;
var remainingBits=27 - this.cT;
do {
this.c<<=this.cT;
if (this.b != 255) remainingBits-=8;
 else remainingBits-=7;
p$1.byteOut.apply(this, []);
} while (remainingBits > 0);
this.b|=(1 << (-remainingBits)) - 1;
if (this.b == 255) {
this.delFF=true;
} else {
if (this.delFF) {
this.out.write$I(255);
this.delFF=false;
this.nrOfWrittenBytes++;
}this.out.write$I(this.b);
this.nrOfWrittenBytes++;
}break;
case 3:
case 2:
var k;
k=(11 - this.cT) + 1;
this.c<<=this.cT;
for (; k > 0; k-=this.cT, this.c<<=this.cT) {
p$1.byteOut.apply(this, []);
}
if (k < 0 && this.ttype == 2 ) {
this.b|=(1 << (-k)) - 1;
}p$1.byteOut.apply(this, []);
break;
case 1:
var cLow;
var cUp;
var bLow;
var bUp;
cLow=this.c;
cUp=this.c + this.a;
bLow=bUp=this.b;
cLow<<=this.cT;
cUp<<=this.cT;
if ((cLow & (134217728)) != 0) {
if (bLow == 255) {
this.delFF=true;
bLow=cLow >>> 20;
bUp=cUp >>> 20;
cLow&=1048575;
cUp&=1048575;
cLow<<=7;
cUp<<=7;
} else {
bLow++;
cLow&=~(134217728);
}}if ((cUp & (134217728)) != 0) {
bUp++;
cUp&=~(134217728);
}while (true){
if (this.delFF) {
if (bLow <= 127 && bUp > 127 ) break;
this.out.write$I(255);
this.nrOfWrittenBytes++;
this.delFF=false;
} else {
if (bLow <= 255 && bUp > 255 ) break;
}if (bLow < 255) {
if (this.nrOfWrittenBytes >= 0) this.out.write$I(bLow);
this.nrOfWrittenBytes++;
bUp-=bLow;
bUp<<=8;
bUp|=(cUp >>> 19) & 255;
bLow=(cLow >>> 19) & 255;
cLow&=524287;
cUp&=524287;
cLow<<=8;
cUp<<=8;
} else {
this.delFF=true;
bUp-=bLow;
bUp<<=7;
bUp|=(cUp >> 20) & 127;
bLow=(cLow >> 20) & 127;
cLow&=1048575;
cUp&=1048575;
cLow<<=7;
cUp<<=7;
}}
break;
default:
throw Clazz.new_($I$(1,1).c$$S,["Illegal termination type code"]);
}
var len;
len=this.nrOfWrittenBytes;
this.a=32768;
this.c=0;
this.b=0;
this.cT=12;
this.delFF=false;
this.nrOfWrittenBytes=-1;
return len;
});

Clazz.newMeth(C$, 'getNumCtxts$', function () {
return this.I.length;
});

Clazz.newMeth(C$, 'resetCtxt$I', function (c) {
this.I[c]=this.initStates[c];
this.mPS[c]=0;
});

Clazz.newMeth(C$, 'resetCtxts$', function () {
System.arraycopy$O$I$O$I$I(this.initStates, 0, this.I, 0, this.I.length);
$I$(2).intArraySet$IA$I(this.mPS, 0);
});

Clazz.newMeth(C$, 'getNumCodedBytes$', function () {
switch (this.ltype) {
case 1:
var bitsInN3Bytes;
if (this.b >= 254) {
bitsInN3Bytes=22;
} else {
bitsInN3Bytes=23;
}if ((11 - this.cT + 16) <= bitsInN3Bytes) {
return this.nrOfWrittenBytes + (this.delFF ? 1 : 0) + 1 + 3 ;
} else {
return this.nrOfWrittenBytes + (this.delFF ? 1 : 0) + 1 + 4 ;
}case 0:
if ((27 - this.cT) <= 22) {
return this.nrOfWrittenBytes + (this.delFF ? 1 : 0) + 1 + 3 ;
} else {
return this.nrOfWrittenBytes + (this.delFF ? 1 : 0) + 1 + 4 ;
}case 2:
p$1.saveState.apply(this, []);
return this.nrOfWrittenBytes;
default:
throw Clazz.new_($I$(1,1).c$$S,["Illegal length calculation type code"]);
}
});

Clazz.newMeth(C$, 'reset$', function () {
this.out.reset$();
this.a=32768;
this.c=0;
this.b=0;
if (this.b == 255) this.cT=13;
 else this.cT=12;
this.resetCtxts$();
this.nrOfWrittenBytes=-1;
this.delFF=false;
this.nSaved=0;
});

Clazz.newMeth(C$, 'saveState', function () {
if (this.nSaved == this.savedC.length) {
var tmp;
tmp=this.savedC;
this.savedC=Clazz.array(Integer.TYPE, [this.nSaved + 12]);
System.arraycopy$O$I$O$I$I(tmp, 0, this.savedC, 0, this.nSaved);
tmp=this.savedCT;
this.savedCT=Clazz.array(Integer.TYPE, [this.nSaved + 12]);
System.arraycopy$O$I$O$I$I(tmp, 0, this.savedCT, 0, this.nSaved);
tmp=this.savedA;
this.savedA=Clazz.array(Integer.TYPE, [this.nSaved + 12]);
System.arraycopy$O$I$O$I$I(tmp, 0, this.savedA, 0, this.nSaved);
tmp=this.savedB;
this.savedB=Clazz.array(Integer.TYPE, [this.nSaved + 12]);
System.arraycopy$O$I$O$I$I(tmp, 0, this.savedB, 0, this.nSaved);
tmp=this.savedDelFF;
this.savedDelFF=Clazz.array(Boolean.TYPE, [this.nSaved + 12]);
System.arraycopy$O$I$O$I$I(tmp, 0, this.savedDelFF, 0, this.nSaved);
}this.savedC[this.nSaved]=this.c;
this.savedCT[this.nSaved]=this.cT;
this.savedA[this.nSaved]=this.a;
this.savedB[this.nSaved]=this.b;
this.savedDelFF[this.nSaved]=this.delFF;
this.nSaved++;
}, p$1);

Clazz.newMeth(C$, 'finishLengthCalculation$IA$I', function (rates, n) {
if (this.ltype != 2) {
if (n > 0 && rates[n - 1] > rates[n] ) {
var tl=rates[n];
n--;
do {
rates[n--]=tl;
} while (n >= 0 && rates[n] > tl );
}} else {
var cLow;
var cUp;
var bLow;
var bUp;
var ridx;
var sidx;
var clen;
var cdFF;
var nb;
var minlen;
var maxlen;
ridx=n - this.nSaved;
minlen=(ridx - 1 >= 0) ? rates[ridx - 1] : 0;
maxlen=rates[n];
for (sidx=0; ridx < n; ridx++, sidx++) {
cLow=this.savedC[sidx];
cUp=this.savedC[sidx] + this.savedA[sidx];
bLow=this.savedB[sidx];
bUp=this.savedB[sidx];
cLow<<=this.savedCT[sidx];
if ((cLow & 134217728) != 0) {
bLow++;
cLow&=134217727;
}cUp<<=this.savedCT[sidx];
if ((cUp & 134217728) != 0) {
bUp++;
cUp&=134217727;
}cdFF=this.savedDelFF[sidx];
clen=rates[ridx] + (cdFF ? 1 : 0);
while (true){
if (clen >= maxlen) {
clen=maxlen;
break;
}if (cdFF) {
if (bLow < 128 && bUp >= 128 ) {
clen--;
break;
}} else {
if (bLow < 256 && bUp >= 256 ) {
break;
}}nb=(clen >= minlen) ? this.out.getByte$I(clen) : 0;
bLow-=nb;
bUp-=nb;
clen++;
if (nb == 255) {
bLow<<=7;
bLow|=(cLow >> 20) & 127;
cLow&=1048575;
cLow<<=7;
bUp<<=7;
bUp|=(cUp >> 20) & 127;
cUp&=1048575;
cUp<<=7;
cdFF=true;
} else {
bLow<<=8;
bLow|=(cLow >> 19) & 255;
cLow&=524287;
cLow<<=8;
bUp<<=8;
bUp|=(cUp >> 19) & 255;
cUp&=524287;
cUp<<=8;
cdFF=false;
}}
rates[ridx]=(clen >= minlen) ? clen : minlen;
}
this.nSaved=0;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
