(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.decoder"),p$1={},I$=[[0,'StringBuffer','io.scif.jj2000.j2k.util.FacilityManager','io.scif.jj2000.j2k.util.ArrayUtil','io.scif.jj2000.j2k.image.DataBlkInt','io.scif.jj2000.j2k.entropy.decoder.ByteInputBuffer','io.scif.jj2000.j2k.entropy.decoder.MQDecoder','io.scif.jj2000.j2k.entropy.decoder.ByteToBitInput','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StdEntropyDecoder", null, 'io.scif.jj2000.j2k.entropy.decoder.EntropyDecoder', 'io.scif.jj2000.j2k.entropy.StdEntropyCoderOptions');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.ZC_LUT_LH=Clazz.array(Integer.TYPE, [256]);
C$.ZC_LUT_HL=Clazz.array(Integer.TYPE, [256]);
C$.ZC_LUT_HH=Clazz.array(Integer.TYPE, [256]);
C$.SC_LUT=Clazz.array(Integer.TYPE, [512]);
C$.MR_LUT=Clazz.array(Integer.TYPE, [512]);
C$.MQ_INIT=Clazz.array(Integer.TYPE, -1, [46, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
{
var i;
var j;
var val;
var deltaMSE;
var inter_sc_lut;
var ds;
var us;
var rs;
var ls;
var dsgn;
var usgn;
var rsgn;
var lsgn;
var h;
var v;
C$.ZC_LUT_LH[0]=2;
for (i=1; i < 16; i++) {
C$.ZC_LUT_LH[i]=4;
}
for (i=0; i < 4; i++) {
C$.ZC_LUT_LH[1 << i]=3;
}
for (i=0; i < 16; i++) {
C$.ZC_LUT_LH[32 | i]=5;
C$.ZC_LUT_LH[16 | i]=5;
C$.ZC_LUT_LH[32 | 16 | i ]=6;
}
C$.ZC_LUT_LH[128]=7;
C$.ZC_LUT_LH[64]=7;
for (i=1; i < 16; i++) {
C$.ZC_LUT_LH[128 | i]=8;
C$.ZC_LUT_LH[64 | i]=8;
}
for (i=1; i < 4; i++) {
for (j=0; j < 16; j++) {
C$.ZC_LUT_LH[128 | (i << 4) | j ]=9;
C$.ZC_LUT_LH[64 | (i << 4) | j ]=9;
}
}
for (i=0; i < 64; i++) {
C$.ZC_LUT_LH[128 | 64 | i ]=10;
}
C$.ZC_LUT_HL[0]=2;
for (i=1; i < 16; i++) {
C$.ZC_LUT_HL[i]=4;
}
for (i=0; i < 4; i++) {
C$.ZC_LUT_HL[1 << i]=3;
}
for (i=0; i < 16; i++) {
C$.ZC_LUT_HL[128 | i]=5;
C$.ZC_LUT_HL[64 | i]=5;
C$.ZC_LUT_HL[128 | 64 | i ]=6;
}
C$.ZC_LUT_HL[32]=7;
C$.ZC_LUT_HL[16]=7;
for (i=1; i < 16; i++) {
C$.ZC_LUT_HL[32 | i]=8;
C$.ZC_LUT_HL[16 | i]=8;
}
for (i=1; i < 4; i++) {
for (j=0; j < 16; j++) {
C$.ZC_LUT_HL[(i << 6) | 32 | j ]=9;
C$.ZC_LUT_HL[(i << 6) | 16 | j ]=9;
}
}
for (i=0; i < 4; i++) {
for (j=0; j < 16; j++) {
C$.ZC_LUT_HL[(i << 6) | 32 | 16 | j ]=10;
}
}
var twoBits=Clazz.array(Integer.TYPE, -1, [3, 5, 6, 9, 10, 12]);
var oneBit=Clazz.array(Integer.TYPE, -1, [1, 2, 4, 8]);
var twoLeast=Clazz.array(Integer.TYPE, -1, [3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15]);
var threeLeast=Clazz.array(Integer.TYPE, -1, [7, 11, 13, 14, 15]);
C$.ZC_LUT_HH[0]=2;
for (i=0; i < oneBit.length; i++) C$.ZC_LUT_HH[oneBit[i] << 4]=3;

for (i=0; i < twoLeast.length; i++) C$.ZC_LUT_HH[twoLeast[i] << 4]=4;

for (i=0; i < oneBit.length; i++) C$.ZC_LUT_HH[oneBit[i]]=5;

for (i=0; i < oneBit.length; i++) for (j=0; j < oneBit.length; j++) C$.ZC_LUT_HH[(oneBit[i] << 4) | oneBit[j]]=6;


for (i=0; i < twoLeast.length; i++) for (j=0; j < oneBit.length; j++) C$.ZC_LUT_HH[(twoLeast[i] << 4) | oneBit[j]]=7;


for (i=0; i < twoBits.length; i++) C$.ZC_LUT_HH[twoBits[i]]=8;

for (j=0; j < twoBits.length; j++) for (i=1; i < 16; i++) C$.ZC_LUT_HH[(i << 4) | twoBits[j]]=9;


for (i=0; i < 16; i++) for (j=0; j < threeLeast.length; j++) C$.ZC_LUT_HH[(i << 4) | threeLeast[j]]=10;


inter_sc_lut=Clazz.array(Integer.TYPE, [36]);
inter_sc_lut[18]=15;
inter_sc_lut[17]=14;
inter_sc_lut[16]=13;
inter_sc_lut[10]=12;
inter_sc_lut[9]=11;
inter_sc_lut[8]=-2147483636;
inter_sc_lut[2]=-2147483635;
inter_sc_lut[1]=-2147483634;
inter_sc_lut[0]=-2147483633;
for (i=0; i < 511; i++) {
ds=i & 1;
us=(i >> 1) & 1;
rs=(i >> 2) & 1;
ls=(i >> 3) & 1;
dsgn=(i >> 5) & 1;
usgn=(i >> 6) & 1;
rsgn=(i >> 7) & 1;
lsgn=(i >> 8) & 1;
h=ls * (1 - 2 * lsgn) + rs * (1 - 2 * rsgn);
h=(h >= -1) ? h : -1;
h=(h <= 1) ? h : 1;
v=us * (1 - 2 * usgn) + ds * (1 - 2 * dsgn);
v=(v >= -1) ? v : -1;
v=(v <= 1) ? v : 1;
C$.SC_LUT[i]=inter_sc_lut[(h + 1) << 3 | (v + 1)];
}
inter_sc_lut=null;
C$.MR_LUT[0]=16;
for (i=1; i < (256); i++) {
C$.MR_LUT[i]=17;
}
for (; i < (512); i++) {
C$.MR_LUT[i]=18;
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['doer','verber'],'I',['options','mQuit'],'O',['time','long[]','bin','io.scif.jj2000.j2k.entropy.decoder.ByteToBitInput','mq','io.scif.jj2000.j2k.entropy.decoder.MQDecoder','decSpec','io.scif.jj2000.j2k.decoder.DecoderSpecs','state','int[]','srcblk','io.scif.jj2000.j2k.entropy.decoder.DecLyrdCBlk']]
,['O',['ZC_LUT_LH','int[]','+ZC_LUT_HL','+ZC_LUT_HH','+SC_LUT','+MR_LUT','+MQ_INIT']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_decoder_CodedCBlkDataSrcDec$io_scif_jj2000_j2k_decoder_DecoderSpecs$Z$Z$I', function (src, decSpec, doer, verber, mQuit) {
;C$.superclazz.c$$io_scif_jj2000_j2k_entropy_decoder_CodedCBlkDataSrcDec.apply(this,[src]);C$.$init$.apply(this);
this.decSpec=decSpec;
this.doer=doer;
this.verber=verber;
this.mQuit=mQuit;
if (false) {
this.time=Clazz.array(Long.TYPE, [src.getNumComps$()]);
}this.state=Clazz.array(Integer.TYPE, [(decSpec.cblks.getMaxCBlkWidth$() + 2) * (((decSpec.cblks.getMaxCBlkHeight$() + 1)/2|0) + 2)]);
}, 1);

Clazz.newMeth(C$, 'finalize$', function () {
if (false) {
var c;
var sb;
sb=Clazz.new_($I$(1,1).c$$S,["StdEntropyDecoder decompression wall clock time:"]);
for (c=0; c < this.time.length; c++) {
sb.append$S("\n  component ");
sb.append$I(c);
sb.append$S(": ");
sb.append$J(this.time[c]);
sb.append$S(" ms");
}
$I$(2).getMsgLogger$().printmsg$I$S(1, sb.toString());
}C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'getCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk', function (c, m, n, sb, cblk) {
var stime=0;
var zc_lut;
var out_data;
var npasses;
var curbp;
var error;
var tslen;
var tsidx;
var $in=null;
var isterm;
this.srcblk=this.src.getCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I$I$io_scif_jj2000_j2k_entropy_decoder_DecLyrdCBlk(c, m, n, sb, 1, -1, this.srcblk);
if (false) stime=System.currentTimeMillis$();
this.options=(this.decSpec.ecopts.getTileCompVal$I$I(this.tIdx, c)).intValue$();
$I$(3).intArraySet$IA$I(this.state, 0);
if (cblk == null ) {
cblk=Clazz.new_($I$(4,1));
}cblk.progressive=this.srcblk.prog;
cblk.ulx=this.srcblk.ulx;
cblk.uly=this.srcblk.uly;
cblk.w=this.srcblk.w;
cblk.h=this.srcblk.h;
cblk.offset=0;
cblk.scanw=cblk.w;
out_data=cblk.getData$();
if (out_data == null  || out_data.length < this.srcblk.w * this.srcblk.h ) {
out_data=Clazz.array(Integer.TYPE, [this.srcblk.w * this.srcblk.h]);
cblk.setData$O(out_data);
} else {
$I$(3).intArraySet$IA$I(out_data, 0);
}if (this.srcblk.nl <= 0 || this.srcblk.nTrunc <= 0 ) {
return cblk;
}tslen=(this.srcblk.tsLengths == null ) ? this.srcblk.dl : this.srcblk.tsLengths[0];
tsidx=0;
npasses=this.srcblk.nTrunc;
if (this.mq == null ) {
$in=Clazz.new_($I$(5,1).c$$BA$I$I,[this.srcblk.data, 0, tslen]);
this.mq=Clazz.new_($I$(6,1).c$$io_scif_jj2000_j2k_entropy_decoder_ByteInputBuffer$I$IA,[$in, 19, C$.MQ_INIT]);
} else {
this.mq.nextSegment$BA$I$I(this.srcblk.data, 0, tslen);
this.mq.resetCtxts$();
}error=false;
if ((this.options & 1) != 0) {
if (this.bin == null ) {
if ($in == null ) $in=this.mq.getByteInputBuffer$();
this.bin=Clazz.new_($I$(7,1).c$$io_scif_jj2000_j2k_entropy_decoder_ByteInputBuffer,[$in]);
}}switch (sb.orientation) {
case 1:
zc_lut=C$.ZC_LUT_HL;
break;
case 2:
case 0:
zc_lut=C$.ZC_LUT_LH;
break;
case 3:
zc_lut=C$.ZC_LUT_HH;
break;
default:
throw Clazz.new_($I$(8,1).c$$S,["JJ2000 internal error"]);
}
curbp=30 - this.srcblk.skipMSBP;
if (this.mQuit != -1 && (this.mQuit * 3 - 2) < npasses ) {
npasses=this.mQuit * 3 - 2;
}if (curbp >= 0 && npasses > 0 ) {
isterm=(this.options & 4) != 0 || ((this.options & 1) != 0 && (31 - 4 - this.srcblk.skipMSBP ) >= curbp ) ;
error=p$1.cleanuppass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_MQDecoder$I$IA$IA$Z.apply(this, [cblk, this.mq, curbp, this.state, zc_lut, isterm]);
npasses--;
if (!error || !this.doer ) curbp--;
}if (!error || !this.doer ) {
while (curbp >= 0 && npasses > 0 ){
if ((this.options & 1) != 0 && (curbp < 31 - 4 - this.srcblk.skipMSBP ) ) {
this.bin.setByteArray$BA$I$I(null, -1, this.srcblk.tsLengths[++tsidx]);
isterm=(this.options & 4) != 0;
error=p$1.rawSigProgPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_ByteToBitInput$I$IA$Z.apply(this, [cblk, this.bin, curbp, this.state, isterm]);
npasses--;
if (npasses <= 0 || (error && this.doer ) ) break;
if ((this.options & 4) != 0) {
this.bin.setByteArray$BA$I$I(null, -1, this.srcblk.tsLengths[++tsidx]);
}isterm=(this.options & 4) != 0 || ((this.options & 1) != 0 && (31 - 4 - this.srcblk.skipMSBP  > curbp) ) ;
error=p$1.rawMagRefPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_ByteToBitInput$I$IA$Z.apply(this, [cblk, this.bin, curbp, this.state, isterm]);
} else {
if ((this.options & 4) != 0) {
this.mq.nextSegment$BA$I$I(null, -1, this.srcblk.tsLengths[++tsidx]);
}isterm=(this.options & 4) != 0;
error=p$1.sigProgPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_MQDecoder$I$IA$IA$Z.apply(this, [cblk, this.mq, curbp, this.state, zc_lut, isterm]);
npasses--;
if (npasses <= 0 || (error && this.doer ) ) break;
if ((this.options & 4) != 0) {
this.mq.nextSegment$BA$I$I(null, -1, this.srcblk.tsLengths[++tsidx]);
}isterm=(this.options & 4) != 0 || ((this.options & 1) != 0 && (31 - 4 - this.srcblk.skipMSBP  > curbp) ) ;
error=p$1.magRefPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_MQDecoder$I$IA$Z.apply(this, [cblk, this.mq, curbp, this.state, isterm]);
}npasses--;
if (npasses <= 0 || (error && this.doer ) ) break;
if ((this.options & 4) != 0 || ((this.options & 1) != 0 && (curbp < 31 - 4 - this.srcblk.skipMSBP ) ) ) {
this.mq.nextSegment$BA$I$I(null, -1, this.srcblk.tsLengths[++tsidx]);
}isterm=(this.options & 4) != 0 || ((this.options & 1) != 0 && (31 - 4 - this.srcblk.skipMSBP ) >= curbp ) ;
error=p$1.cleanuppass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_MQDecoder$I$IA$IA$Z.apply(this, [cblk, this.mq, curbp, this.state, zc_lut, isterm]);
npasses--;
if (error) break;
curbp--;
}
}if (error && this.doer ) {
if (this.verber) {
$I$(2).getMsgLogger$().printmsg$I$S(2, "Error detected at bit-plane " + curbp + " in code-block (" + m + "," + n + "), sb_idx " + sb.sbandIdx + ", res. level " + sb.resLvl + ". Concealing..." );
}p$1.conceal$io_scif_jj2000_j2k_image_DataBlk$I.apply(this, [cblk, curbp]);
}if (false) this.time[c]+=System.currentTimeMillis$() - stime;
return cblk;
});

Clazz.newMeth(C$, 'getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk', function (c, m, n, sb, cblk) {
return this.getCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk(c, m, n, sb, cblk);
});

Clazz.newMeth(C$, 'sigProgPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_MQDecoder$I$IA$IA$Z', function (cblk, mq, bp, state, zc_lut, isterm) {
var j;
var sj;
var k;
var sk;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var setmask;
var sym;
var ctxt;
var data;
var s;
var causal;
var nstripes;
var sheight;
var off_ul;
var off_ur;
var off_dr;
var off_dl;
var error;
dscanw=cblk.scanw;
sscanw=cblk.w + 2;
jstep=(sscanw * 4/2|0) - cblk.w;
kstep=dscanw * 4 - cblk.w;
setmask=(3 << bp) >> 1;
data=cblk.getData$();
nstripes=((cblk.h + 4 - 1)/4|0);
causal=(this.options & 8) != 0;
off_ul=-sscanw - 1;
off_ur=-sscanw + 1;
off_dr=sscanw + 1;
off_dl=sscanw - 1;
sk=cblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : cblk.h - (nstripes - 1) * 4;
stopsk=sk + cblk.w;
for (; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk;
if ((csj & (40960)) == 8192) {
if (mq.decodeSymbol$I(zc_lut[csj & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
if (!causal) {
state[j + off_ul]|=536936448;
state[j + off_ur]|=537001984;
}if (sym != 0) {
csj|=606126080;
if (!causal) {
state[j - sscanw]|=571473920;
}state[j + 1]|=537407616;
state[j - 1]|=537143360;
} else {
csj|=539017216;
if (!causal) {
state[j - sscanw]|=537919488;
}state[j + 1]|=537403520;
state[j - 1]|=537141312;
}} else {
csj|=16384;
}}if (sheight < 2) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
if (mq.decodeSymbol$I(zc_lut[(csj >>> 16) & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
state[j + off_dl]|=8196;
state[j + off_dr]|=8200;
if (sym != 0) {
csj|=-1073733104;
state[j + sscanw]|=9248;
state[j + 1]|=813703170;
state[j - 1]|=675291137;
} else {
csj|=-1073733616;
state[j + sscanw]|=8224;
state[j + 1]|=545267714;
state[j - 1]|=541073409;
}} else {
csj|=1073741824;
}}state[j]=csj;
}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk + (dscanw << 1);
if ((csj & (40960)) == 8192) {
if (mq.decodeSymbol$I(zc_lut[csj & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
state[j + off_ul]|=536936448;
state[j + off_ur]|=537001984;
if (sym != 0) {
csj|=606126080;
state[j - sscanw]|=571473920;
state[j + 1]|=537407616;
state[j - 1]|=537143360;
} else {
csj|=539017216;
state[j - sscanw]|=537919488;
state[j + 1]|=537403520;
state[j - 1]|=537141312;
}} else {
csj|=16384;
}}if (sheight < 4) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
if (mq.decodeSymbol$I(zc_lut[(csj >>> 16) & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
state[j + off_dl]|=8196;
state[j + off_dr]|=8200;
if (sym != 0) {
csj|=-1073733104;
state[j + sscanw]|=9248;
state[j + 1]|=813703170;
state[j - 1]|=675291137;
} else {
csj|=-1073733616;
state[j + sscanw]|=8224;
state[j + 1]|=545267714;
state[j - 1]|=541073409;
}} else {
csj|=1073741824;
}}state[j]=csj;
}}
}
error=false;
if (isterm && (this.options & 16) != 0 ) {
error=mq.checkPredTerm$();
}if ((this.options & 2) != 0) {
mq.resetCtxts$();
}return error;
}, p$1);

Clazz.newMeth(C$, 'rawSigProgPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_ByteToBitInput$I$IA$Z', function (cblk, bin, bp, state, isterm) {
var j;
var sj;
var k;
var sk;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var setmask;
var sym;
var data;
var s;
var causal;
var nstripes;
var sheight;
var off_ul;
var off_ur;
var off_dr;
var off_dl;
var error;
dscanw=cblk.scanw;
sscanw=cblk.w + 2;
jstep=(sscanw * 4/2|0) - cblk.w;
kstep=dscanw * 4 - cblk.w;
setmask=(3 << bp) >> 1;
data=cblk.getData$();
nstripes=((cblk.h + 4 - 1)/4|0);
causal=(this.options & 8) != 0;
off_ul=-sscanw - 1;
off_ur=-sscanw + 1;
off_dr=sscanw + 1;
off_dl=sscanw - 1;
sk=cblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : cblk.h - (nstripes - 1) * 4;
stopsk=sk + cblk.w;
for (; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk;
if ((csj & (40960)) == 8192) {
if (bin.readBit$() != 0) {
sym=bin.readBit$();
data[k]=(sym << 31) | setmask;
if (!causal) {
state[j + off_ul]|=536936448;
state[j + off_ur]|=537001984;
}if (sym != 0) {
csj|=606126080;
if (!causal) {
state[j - sscanw]|=571473920;
}state[j + 1]|=537407616;
state[j - 1]|=537143360;
} else {
csj|=539017216;
if (!causal) {
state[j - sscanw]|=537919488;
}state[j + 1]|=537403520;
state[j - 1]|=537141312;
}} else {
csj|=16384;
}}if (sheight < 2) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
if (bin.readBit$() != 0) {
sym=bin.readBit$();
data[k]=(sym << 31) | setmask;
state[j + off_dl]|=8196;
state[j + off_dr]|=8200;
if (sym != 0) {
csj|=-1073733104;
state[j + sscanw]|=9248;
state[j + 1]|=813703170;
state[j - 1]|=675291137;
} else {
csj|=-1073733616;
state[j + sscanw]|=8224;
state[j + 1]|=545267714;
state[j - 1]|=541073409;
}} else {
csj|=1073741824;
}}state[j]=csj;
}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk + (dscanw << 1);
if ((csj & (40960)) == 8192) {
if (bin.readBit$() != 0) {
sym=bin.readBit$();
data[k]=(sym << 31) | setmask;
state[j + off_ul]|=536936448;
state[j + off_ur]|=537001984;
if (sym != 0) {
csj|=606126080;
state[j - sscanw]|=571473920;
state[j + 1]|=537407616;
state[j - 1]|=537143360;
} else {
csj|=539017216;
state[j - sscanw]|=537919488;
state[j + 1]|=537403520;
state[j - 1]|=537141312;
}} else {
csj|=16384;
}}if (sheight < 4) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
if (bin.readBit$() != 0) {
sym=bin.readBit$();
data[k]=(sym << 31) | setmask;
state[j + off_dl]|=8196;
state[j + off_dr]|=8200;
if (sym != 0) {
csj|=-1073733104;
state[j + sscanw]|=9248;
state[j + 1]|=813703170;
state[j - 1]|=675291137;
} else {
csj|=-1073733616;
state[j + sscanw]|=8224;
state[j + 1]|=545267714;
state[j - 1]|=541073409;
}} else {
csj|=1073741824;
}}state[j]=csj;
}}
}
error=false;
if (isterm) {
error=bin.checkBytePadding$();
}return error;
}, p$1);

Clazz.newMeth(C$, 'magRefPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_MQDecoder$I$IA$Z', function (cblk, mq, bp, state, isterm) {
var j;
var sj;
var k;
var sk;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var setmask;
var resetmask;
var sym;
var data;
var s;
var nstripes;
var sheight;
var error;
dscanw=cblk.scanw;
sscanw=cblk.w + 2;
jstep=(sscanw * 4/2|0) - cblk.w;
kstep=dscanw * 4 - cblk.w;
setmask=(1 << bp) >> 1;
resetmask=(-1) << (bp + 1);
data=cblk.getData$();
nstripes=((cblk.h + 4 - 1)/4|0);
sk=cblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : cblk.h - (nstripes - 1) * 4;
stopsk=sk + cblk.w;
for (; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk;
if ((csj & (49152)) == 32768) {
sym=mq.decodeSymbol$I(C$.MR_LUT[csj & 511]);
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
csj|=256;
}if (sheight < 2) {
state[j]=csj;
continue;
}if ((csj & (-1073741824)) == -2147483648) {
k+=dscanw;
sym=mq.decodeSymbol$I(C$.MR_LUT[(csj >>> 16) & 511]);
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
csj|=16777216;
}state[j]=csj;
}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk + (dscanw << 1);
if ((csj & (49152)) == 32768) {
sym=mq.decodeSymbol$I(C$.MR_LUT[csj & 511]);
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
csj|=256;
}if (sheight < 4) {
state[j]=csj;
continue;
}if ((state[j] & (-1073741824)) == -2147483648) {
k+=dscanw;
sym=mq.decodeSymbol$I(C$.MR_LUT[(csj >>> 16) & 511]);
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
csj|=16777216;
}state[j]=csj;
}}
}
error=false;
if (isterm && (this.options & 16) != 0 ) {
error=mq.checkPredTerm$();
}if ((this.options & 2) != 0) {
mq.resetCtxts$();
}return error;
}, p$1);

Clazz.newMeth(C$, 'rawMagRefPass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_ByteToBitInput$I$IA$Z', function (cblk, bin, bp, state, isterm) {
var j;
var sj;
var k;
var sk;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var setmask;
var resetmask;
var sym;
var data;
var s;
var nstripes;
var sheight;
var error;
dscanw=cblk.scanw;
sscanw=cblk.w + 2;
jstep=(sscanw * 4/2|0) - cblk.w;
kstep=dscanw * 4 - cblk.w;
setmask=(1 << bp) >> 1;
resetmask=(-1) << (bp + 1);
data=cblk.getData$();
nstripes=((cblk.h + 4 - 1)/4|0);
sk=cblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : cblk.h - (nstripes - 1) * 4;
stopsk=sk + cblk.w;
for (; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk;
if ((csj & (49152)) == 32768) {
sym=bin.readBit$();
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
}if (sheight < 2) continue;
if ((csj & (-1073741824)) == -2147483648) {
k+=dscanw;
sym=bin.readBit$();
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
}}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk + (dscanw << 1);
if ((csj & (49152)) == 32768) {
sym=bin.readBit$();
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
}if (sheight < 4) continue;
if ((state[j] & (-1073741824)) == -2147483648) {
k+=dscanw;
sym=bin.readBit$();
data[k]&=resetmask;
data[k]|=(sym << bp) | setmask;
}}}
}
error=false;
if (isterm && (this.options & 16) != 0 ) {
error=bin.checkBytePadding$();
}return error;
}, p$1);

Clazz.newMeth(C$, 'cleanuppass$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_entropy_decoder_MQDecoder$I$IA$IA$Z', function (cblk, mq, bp, state, zc_lut, isterm) {
var j;
var sj;
var k;
var sk;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var setmask;
var sym;
var rlclen;
var ctxt;
var data;
var s;
var causal;
var nstripes;
var sheight;
var off_ul;
var off_ur;
var off_dr;
var off_dl;
var error;
dscanw=cblk.scanw;
sscanw=cblk.w + 2;
jstep=(sscanw * 4/2|0) - cblk.w;
kstep=dscanw * 4 - cblk.w;
setmask=(3 << bp) >> 1;
data=cblk.getData$();
nstripes=((cblk.h + 4 - 1)/4|0);
causal=(this.options & 8) != 0;
off_ul=-sscanw - 1;
off_ur=-sscanw + 1;
off_dr=sscanw + 1;
off_dl=sscanw - 1;
sk=cblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : cblk.h - (nstripes - 1) * 4;
stopsk=sk + cblk.w;
for (; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
 top_half : {
if (csj == 0 && state[j + sscanw] == 0  && sheight == 4 ) {
if (mq.decodeSymbol$I(1) != 0) {
rlclen=mq.decodeSymbol$I(0) << 1;
rlclen|=mq.decodeSymbol$I(0);
k=sk + rlclen * dscanw;
if (rlclen > 1) {
j+=sscanw;
csj=state[j];
}} else {
continue;
}if ((rlclen & 1) == 0) {
ctxt=C$.SC_LUT[(csj >> 4) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
if (rlclen != 0 || !causal ) {
state[j + off_ul]|=536936448;
state[j + off_ur]|=537001984;
}if (sym != 0) {
csj|=606126080;
if (rlclen != 0 || !causal ) {
state[j - sscanw]|=571473920;
}state[j + 1]|=537407616;
state[j - 1]|=537143360;
} else {
csj|=539017216;
if (rlclen != 0 || !causal ) {
state[j - sscanw]|=537919488;
}state[j + 1]|=537403520;
state[j - 1]|=537141312;
}if ((rlclen >> 1) != 0) {
break top_half;
}} else {
ctxt=C$.SC_LUT[(csj >> 20) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
state[j + off_dl]|=8196;
state[j + off_dr]|=8200;
if (sym != 0) {
csj|=-2147474928;
state[j + sscanw]|=9248;
state[j + 1]|=813703170;
state[j - 1]|=675291137;
} else {
csj|=-2147475440;
state[j + sscanw]|=8224;
state[j + 1]|=545267714;
state[j - 1]|=541073409;
}state[j]=csj;
if ((rlclen >> 1) != 0) {
continue;
}j+=sscanw;
csj=state[j];
break top_half;
}}if ((((csj >> 1) | csj) & 1073758208) != 1073758208) {
k=sk;
if ((csj & (49152)) == 0) {
if (mq.decodeSymbol$I(zc_lut[csj & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
if (!causal) {
state[j + off_ul]|=536936448;
state[j + off_ur]|=537001984;
}if (sym != 0) {
csj|=606126080;
if (!causal) {
state[j - sscanw]|=571473920;
}state[j + 1]|=537407616;
state[j - 1]|=537143360;
} else {
csj|=539017216;
if (!causal) {
state[j - sscanw]|=537919488;
}state[j + 1]|=537403520;
state[j - 1]|=537141312;
}}}if (sheight < 2) {
csj&=~(1073758208);
state[j]=csj;
continue;
}if ((csj & (-1073741824)) == 0) {
k+=dscanw;
if (mq.decodeSymbol$I(zc_lut[(csj >>> 16) & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
state[j + off_dl]|=8196;
state[j + off_dr]|=8200;
if (sym != 0) {
csj|=-1073733104;
state[j + sscanw]|=9248;
state[j + 1]|=813703170;
state[j - 1]|=675291137;
} else {
csj|=-1073733616;
state[j + sscanw]|=8224;
state[j + 1]|=545267714;
state[j - 1]|=541073409;
}}}}csj&=~(1073758208);
state[j]=csj;
if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
}if ((((csj >> 1) | csj) & 1073758208) != 1073758208) {
k=sk + (dscanw << 1);
if ((csj & (49152)) == 0) {
if (mq.decodeSymbol$I(zc_lut[csj & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >> 4) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
state[j + off_ul]|=536936448;
state[j + off_ur]|=537001984;
if (sym != 0) {
csj|=606126080;
state[j - sscanw]|=571473920;
state[j + 1]|=537407616;
state[j - 1]|=537143360;
} else {
csj|=539017216;
state[j - sscanw]|=537919488;
state[j + 1]|=537403520;
state[j - 1]|=537141312;
}}}if (sheight < 4) {
csj&=~(1073758208);
state[j]=csj;
continue;
}if ((csj & (-1073741824)) == 0) {
k+=dscanw;
if (mq.decodeSymbol$I(zc_lut[(csj >>> 16) & 255]) != 0) {
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
sym=mq.decodeSymbol$I(ctxt & 15) ^ (ctxt >>> 31);
data[k]=(sym << 31) | setmask;
state[j + off_dl]|=8196;
state[j + off_dr]|=8200;
if (sym != 0) {
csj|=-1073733104;
state[j + sscanw]|=9248;
state[j + 1]|=813703170;
state[j - 1]|=675291137;
} else {
csj|=-1073733616;
state[j + sscanw]|=8224;
state[j + 1]|=545267714;
state[j - 1]|=541073409;
}}}}csj&=~(1073758208);
state[j]=csj;
}
}
if ((this.options & 32) != 0) {
sym=mq.decodeSymbol$I(0) << 3;
sym|=mq.decodeSymbol$I(0) << 2;
sym|=mq.decodeSymbol$I(0) << 1;
sym|=mq.decodeSymbol$I(0);
error=sym != 10;
} else {
error=false;
}if (isterm && (this.options & 16) != 0 ) {
error=mq.checkPredTerm$();
}if ((this.options & 2) != 0) {
mq.resetCtxts$();
}return error;
}, p$1);

Clazz.newMeth(C$, 'conceal$io_scif_jj2000_j2k_image_DataBlk$I', function (cblk, bp) {
var l;
var k;
var kmax;
var dk;
var data;
var setmask;
var resetmask;
setmask=1 << bp;
resetmask=(-1) << (bp);
data=cblk.getData$();
for (l=cblk.h - 1, k=cblk.offset; l >= 0; l--) {
for (kmax=k + cblk.w; k < kmax; k++) {
dk=data[k];
if ((dk & resetmask & 2147483647 ) != 0) {
data[k]=(dk & resetmask) | setmask;
} else {
data[k]=0;
}}
k+=cblk.scanw - cblk.w;
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
