(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),I$=[[0,'io.scif.jj2000.j2k.util.FacilityManager','io.scif.jj2000.j2k.util.ThreadPool','Thread','java.util.Stack',['io.scif.jj2000.j2k.entropy.encoder.StdEntropyCoder','.Compressor'],'io.scif.jj2000.j2k.entropy.encoder.ByteOutputBuffer','io.scif.jj2000.j2k.entropy.encoder.MQCoder','io.scif.jj2000.j2k.entropy.encoder.BitToByteOutput','io.scif.jj2000.j2k.wavelet.analysis.CBlkWTData','StringBuffer','io.scif.jj2000.j2k.entropy.encoder.CBlkRateDistStats','io.scif.jj2000.j2k.util.ArrayUtil','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StdEntropyCoder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.jj2000.j2k.entropy.encoder.EntropyCoder', 'io.scif.jj2000.j2k.entropy.StdEntropyCoderOptions');
C$.$classes$=[['Compressor',2]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.ZC_LUT_LH=Clazz.array(Integer.TYPE, [256]);
C$.ZC_LUT_HL=Clazz.array(Integer.TYPE, [256]);
C$.ZC_LUT_HH=Clazz.array(Integer.TYPE, [256]);
C$.SC_LUT=Clazz.array(Integer.TYPE, [512]);
C$.MR_LUT=Clazz.array(Integer.TYPE, [512]);
C$.MQ_INIT=Clazz.array(Integer.TYPE, -1, [46, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
C$.SEG_SYMBOLS=Clazz.array(Integer.TYPE, -1, [1, 0, 1, 0]);
C$.SEG_SYMB_CTXTS=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0]);
C$.FS_LOSSY=Clazz.array(Integer.TYPE, [64]);
C$.FM_LOSSY=Clazz.array(Integer.TYPE, [128]);
C$.FS_LOSSLESS=Clazz.array(Integer.TYPE, [64]);
C$.FM_LOSSLESS=Clazz.array(Integer.TYPE, [128]);
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
for (i=0; i < (64); i++) {
val=i / (64) + 1.0;
deltaMSE=val * val;
C$.FS_LOSSLESS[i]=(Math.floor(deltaMSE * (8192.0) + 0.5)|0);
val -= 1.5;
deltaMSE -= val * val;
C$.FS_LOSSY[i]=(Math.floor(deltaMSE * (8192.0) + 0.5)|0);
}
for (i=0; i < (128); i++) {
val=i / (64);
deltaMSE=(val - 1.0) * (val - 1.0);
C$.FM_LOSSLESS[i]=(Math.floor(deltaMSE * (8192.0) + 0.5)|0);
val -= (i < (64)) ? 0.5 : 1.5;
deltaMSE -= val * val;
C$.FM_LOSSY[i]=(Math.floor(deltaMSE * (8192.0) + 0.5)|0);
}
};
}

Clazz.newMeth(C$, '$init$', function () {
this.opts=null;
this.lenCalc=null;
this.tType=null;
}, 1);

C$.$fields$=[['O',['time','long[]','tPool','io.scif.jj2000.j2k.util.ThreadPool','idleComps','java.util.Stack','completedComps','java.util.Stack[]','nBusyComps','int[]','finishedTileComponent','boolean[]','mqT','io.scif.jj2000.j2k.entropy.encoder.MQCoder[]','boutT','io.scif.jj2000.j2k.entropy.encoder.BitToByteOutput[]','outT','io.scif.jj2000.j2k.entropy.encoder.ByteOutputBuffer[]','cblks','io.scif.jj2000.j2k.entropy.CBlkSizeSpec','pss','io.scif.jj2000.j2k.entropy.PrecinctSizeSpec','bms','io.scif.jj2000.j2k.StringSpec','+mqrs','+rts','+css','+sss','+lcs','+tts','opts','int[][]','+lenCalc','+tType','+stateT','distbufT','double[][]','ratebufT','int[][]','istermbufT','boolean[][]','srcblkT','io.scif.jj2000.j2k.wavelet.analysis.CBlkWTData[]','symbufT','int[][]','+ctxtbufT','precinctPartition','boolean[][]']]
,['O',['ZC_LUT_LH','int[]','+ZC_LUT_HL','+ZC_LUT_HH','+SC_LUT','+MR_LUT','+MQ_INIT','+SEG_SYMBOLS','+SEG_SYMB_CTXTS','+FS_LOSSY','+FM_LOSSY','+FS_LOSSLESS','+FM_LOSSLESS']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_quantization_quantizer_CBlkQuantDataSrcEnc$io_scif_jj2000_j2k_entropy_CBlkSizeSpec$io_scif_jj2000_j2k_entropy_PrecinctSizeSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec', function (src, cblks, pss, bms, mqrs, rts, css, sss, lcs, tts) {
;C$.superclazz.c$$io_scif_jj2000_j2k_quantization_quantizer_CBlkQuantDataSrcEnc.apply(this,[src]);C$.$init$.apply(this);
this.cblks=cblks;
this.pss=pss;
this.bms=bms;
this.mqrs=mqrs;
this.rts=rts;
this.css=css;
this.sss=sss;
this.lcs=lcs;
this.tts=tts;
var maxCBlkWidth;
var maxCBlkHeight;
var i;
var nt;
var tsl;
maxCBlkWidth=cblks.getMaxCBlkWidth$();
maxCBlkHeight=cblks.getMaxCBlkHeight$();
try {
try {
nt=Integer.parseInt$S(System.getProperty$S$S("io.scif.jj2000.j2k.entropy.encoder.StdEntropyCoder.nthreads", "0"));
} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
nt=Integer.parseInt$S("0");
} else {
throw se;
}
}
if (nt < 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid number of threads for entropy coding in property io.scif.jj2000.j2k.entropy.encoder.StdEntropyCoder.nthreads"]);
} else {
throw e;
}
}
if (false) {
this.time=Clazz.array(Long.TYPE, [src.getNumComps$()]);
}if (nt > 0) {
$I$(1).getMsgLogger$().printmsg$I$S(1, "Using multithreaded entropy coder with " + nt + " compressor threads." );
tsl=nt;
this.tPool=Clazz.new_($I$(2,1).c$$I$I$S,[nt, $I$(3).currentThread$().getPriority$() + 0, "StdEntropyCoder"]);
this.idleComps=Clazz.new_($I$(4,1));
this.completedComps=Clazz.array($I$(4), [src.getNumComps$()]);
this.nBusyComps=Clazz.array(Integer.TYPE, [src.getNumComps$()]);
this.finishedTileComponent=Clazz.array(Boolean.TYPE, [src.getNumComps$()]);
for (i=src.getNumComps$() - 1; i >= 0; i--) {
this.completedComps[i]=Clazz.new_($I$(4,1));
}
for (i=0; i < nt; i++) {
this.idleComps.push$TE(Clazz.new_($I$(5,1).c$$I, [this, null, i]));
}
} else {
tsl=1;
this.tPool=null;
this.idleComps=null;
this.completedComps=null;
this.nBusyComps=null;
this.finishedTileComponent=null;
}this.outT=Clazz.array($I$(6), [tsl]);
this.mqT=Clazz.array($I$(7), [tsl]);
this.boutT=Clazz.array($I$(8), [tsl]);
this.stateT=Clazz.array(Integer.TYPE, [tsl, (maxCBlkWidth + 2) * (((maxCBlkHeight + 1)/2|0) + 2)]);
this.symbufT=Clazz.array(Integer.TYPE, [tsl, maxCBlkWidth * (10)]);
this.ctxtbufT=Clazz.array(Integer.TYPE, [tsl, maxCBlkWidth * (10)]);
this.distbufT=Clazz.array(Double.TYPE, [tsl, 96]);
this.ratebufT=Clazz.array(Integer.TYPE, [tsl, 96]);
this.istermbufT=Clazz.array(Boolean.TYPE, [tsl, 96]);
this.srcblkT=Clazz.array($I$(9), [tsl]);
for (i=0; i < tsl; i++) {
this.outT[i]=Clazz.new_($I$(6,1));
this.mqT[i]=Clazz.new_($I$(7,1).c$$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer$I$IA,[this.outT[i], 19, C$.MQ_INIT]);
}
this.precinctPartition=Clazz.array(Boolean.TYPE, [src.getNumComps$(), src.getNumTiles$()]);
var numTiles=src.getNumTiles$java_awt_Point(null);
var nc=this.getNumComps$();
this.initTileComp$I$I(this.getNumTiles$(), nc);
for (var c=0; c < nc; c++) {
for (var tY=0; tY < numTiles.y; tY++) {
for (var tX=0; tX < numTiles.x; tX++) {
this.precinctPartition[c][this.tIdx]=false;
}
}
}
}, 1);

Clazz.newMeth(C$, 'finalize$', function () {
if (false) {
var c;
var sb;
if (this.tPool == null ) {
sb=Clazz.new_($I$(10,1).c$$S,["StdEntropyCoder compression wall clock time:"]);
for (c=0; c < this.time.length; c++) {
sb.append$S("\n  component ");
sb.append$I(c);
sb.append$S(": ");
sb.append$J(this.time[c]);
sb.append$S(" ms");
}
$I$(1).getMsgLogger$().printmsg$I$S(1, sb.toString());
} else {
var compr;
var msglog=$I$(1).getMsgLogger$();
sb=Clazz.new_($I$(10,1).c$$S,["StdEntropyCoder manager thread wall clock time:"]);
for (c=0; c < this.time.length; c++) {
sb.append$S("\n  component ");
sb.append$I(c);
sb.append$S(": ");
sb.append$J(this.time[c]);
sb.append$S(" ms");
}
var enumVar=this.idleComps.elements$();
sb.append$S("\nStdEntropyCoder compressor threads wall clock time:");
while (enumVar.hasMoreElements$()){
compr=(enumVar.nextElement$());
for (c=0; c < this.time.length; c++) {
sb.append$S("\n  compressor ");
sb.append$I(compr.getIdx$());
sb.append$S(", component ");
sb.append$I(c);
sb.append$S(": ");
sb.append$J(compr.getTiming$I(c));
sb.append$S(" ms");
}
}
$I$(1).getMsgLogger$().printmsg$I$S(1, sb.toString());
}}C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'getCBlkWidth$I$I', function (t, c) {
return this.cblks.getCBlkWidth$B$I$I(($b$[0] = 3, $b$[0]), t, c);
});

Clazz.newMeth(C$, 'getCBlkHeight$I$I', function (t, c) {
return this.cblks.getCBlkHeight$B$I$I(($b$[0] = 3, $b$[0]), t, c);
});

Clazz.newMeth(C$, 'getNextCodeBlock$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStats', function (c, ccb) {
var stime=0;
if (this.tPool == null ) {
this.srcblkT[0]=this.src.getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(c, this.srcblkT[0]);
if (false) stime=System.currentTimeMillis$();
if (this.srcblkT[0] == null ) {
return null;
}if ((this.opts[this.tIdx][c] & 1) != 0 && this.boutT[0] == null  ) {
this.boutT[0]=Clazz.new_($I$(8,1).c$$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer,[this.outT[0]]);
}if (ccb == null ) {
ccb=Clazz.new_($I$(11,1));
}C$.compressCodeBlock$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStats$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$io_scif_jj2000_j2k_entropy_encoder_BitToByteOutput$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer$IA$DA$IA$ZA$IA$IA$I$Z$I$I(c, ccb, this.srcblkT[0], this.mqT[0], this.boutT[0], this.outT[0], this.stateT[0], this.distbufT[0], this.ratebufT[0], this.istermbufT[0], this.symbufT[0], this.ctxtbufT[0], this.opts[this.tIdx][c], this.isReversible$I$I(this.tIdx, c), this.lenCalc[this.tIdx][c], this.tType[this.tIdx][c]);
if (false) this.time[c]+=System.currentTimeMillis$() - stime;
return ccb;
} else {
var cIdx;
var compr;
if (false) stime=System.currentTimeMillis$();
while (!this.finishedTileComponent[c] && !this.idleComps.empty$() ){
compr=this.idleComps.pop$();
cIdx=compr.getIdx$();
if (false) this.time[c]+=System.currentTimeMillis$() - stime;
this.srcblkT[cIdx]=this.src.getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(c, this.srcblkT[cIdx]);
if (false) stime=System.currentTimeMillis$();
if (this.srcblkT[cIdx] != null ) {
if ((this.opts[this.tIdx][c] & 1) != 0 && this.boutT[cIdx] == null  ) {
this.boutT[cIdx]=Clazz.new_($I$(8,1).c$$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer,[this.outT[cIdx]]);
}if (ccb == null ) ccb=Clazz.new_($I$(11,1));
compr.ccb=ccb;
compr.c=c;
compr.options=this.opts[this.tIdx][c];
compr.rev=this.isReversible$I$I(this.tIdx, c);
compr.lcType=this.lenCalc[this.tIdx][c];
compr.tType=this.tType[this.tIdx][c];
this.nBusyComps[c]++;
ccb=null;
this.tPool.runTarget$Runnable$O(compr, this.completedComps[c]);
} else {
this.idleComps.push$TE(compr);
this.finishedTileComponent[c]=true;
}}
if (this.nBusyComps[c] > 0) {
/*sync org.eclipse.jdt.core.dom.ArrayAccess*/(this.completedComps[c]);
{
if (this.completedComps[c].empty$()) {
try {
if (false) {
this.time[c]+=System.currentTimeMillis$() - stime;
}this.completedComps[c].wait$();
if (false) {
stime=System.currentTimeMillis$();
}} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}compr=this.completedComps[c].pop$();
cIdx=compr.getIdx$();
this.nBusyComps[c]--;
this.idleComps.push$TE(compr);
this.tPool.checkTargetErrors$();
if (false) this.time[c]+=System.currentTimeMillis$() - stime;
return compr.ccb;
}} else {
this.tPool.checkTargetErrors$();
if (false) this.time[c]+=System.currentTimeMillis$() - stime;
return null;
}}});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
C$.superclazz.prototype.setTile$I$I.apply(this, [x, y]);
if (this.finishedTileComponent != null ) {
for (var c=this.src.getNumComps$() - 1; c >= 0; c--) {
this.finishedTileComponent[c]=false;
}
}});

Clazz.newMeth(C$, 'nextTile$', function () {
if (this.finishedTileComponent != null ) {
for (var c=this.src.getNumComps$() - 1; c >= 0; c--) {
this.finishedTileComponent[c]=false;
}
}C$.superclazz.prototype.nextTile$.apply(this, []);
});

Clazz.newMeth(C$, 'compressCodeBlock$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStats$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$io_scif_jj2000_j2k_entropy_encoder_BitToByteOutput$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer$IA$DA$IA$ZA$IA$IA$I$Z$I$I', function (c, ccb, srcblk, mq, bout, out, state, distbuf, ratebuf, istermbuf, symbuf, ctxtbuf, options, rev, lcType, tType) {
var zc_lut;
var skipbp;
var curbp;
var fm;
var fs;
var lmb;
var npass;
var msew;
var totdist;
var ltpidx;
if ((options & 16) != 0 && tType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Embedded error-resilient info in MQ termination option specified but incorrect MQ termination policy specified"]);
}mq.setLenCalcType$I(lcType);
mq.setTermType$I(tType);
lmb=30 - srcblk.magbits + 1;
lmb=(lmb < 0) ? 0 : lmb;
$I$(12).intArraySet$IA$I(state, 0);
skipbp=C$.calcSkipMSBP$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$I(srcblk, lmb);
ccb.m=srcblk.m;
ccb.n=srcblk.n;
ccb.sb=srcblk.sb;
ccb.nROIcoeff=srcblk.nROIcoeff;
ccb.skipMSBP=skipbp;
if (ccb.nROIcoeff != 0) {
ccb.nROIcp=3 * (srcblk.nROIbp - skipbp - 1 ) + 1;
} else {
ccb.nROIcp=0;
}switch (srcblk.sb.orientation) {
case 1:
zc_lut=C$.ZC_LUT_HL;
break;
case 0:
case 2:
zc_lut=C$.ZC_LUT_LH;
break;
case 3:
zc_lut=C$.ZC_LUT_HH;
break;
default:
throw Clazz.new_($I$(13,1).c$$S,["JJ2000 internal error"]);
}
curbp=30 - skipbp;
fs=C$.FS_LOSSLESS;
fm=C$.FM_LOSSLESS;
msew=Math.pow(2, ((curbp - lmb) << 1) - 13) * srcblk.sb.stepWMSE * srcblk.wmseScaling ;
totdist=0.0;
npass=0;
ltpidx=-1;
if (curbp >= lmb) {
if (rev && curbp == lmb ) {
fs=C$.FM_LOSSLESS;
}istermbuf[npass]=(options & 4) != 0 || curbp == lmb  || ((options & 1) != 0 && (31 - 4 - skipbp ) >= curbp ) ;
totdist += C$.cleanuppass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$Z$I$IA$IA$IA$IA$IA$IA$I$I$I(srcblk, mq, istermbuf[npass], curbp, state, fs, zc_lut, symbuf, ctxtbuf, ratebuf, npass, ltpidx, options) * msew;
distbuf[npass]=totdist;
if (istermbuf[npass]) ltpidx=npass;
npass++;
msew *= 0.25;
curbp--;
}while (curbp >= lmb){
if (rev && curbp == lmb ) {
fs=C$.FS_LOSSLESS;
fm=C$.FM_LOSSLESS;
}istermbuf[npass]=(options & 4) != 0;
if ((options & 1) == 0 || (31 - 4 - skipbp  <= curbp) ) {
totdist += C$.sigProgPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$Z$I$IA$IA$IA$IA$IA$IA$I$I$I(srcblk, mq, istermbuf[npass], curbp, state, fs, zc_lut, symbuf, ctxtbuf, ratebuf, npass, ltpidx, options) * msew;
} else {
bout.setPredTerm$Z((options & 16) != 0);
totdist += C$.rawSigProgPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_BitToByteOutput$Z$I$IA$IA$IA$I$I$I(srcblk, bout, istermbuf[npass], curbp, state, fs, ratebuf, npass, ltpidx, options) * msew;
}distbuf[npass]=totdist;
if (istermbuf[npass]) ltpidx=npass;
npass++;
istermbuf[npass]=(options & 4) != 0 || ((options & 1) != 0 && (31 - 4 - skipbp  > curbp) ) ;
if ((options & 1) == 0 || (31 - 4 - skipbp  <= curbp) ) {
totdist += C$.magRefPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$Z$I$IA$IA$IA$IA$IA$I$I$I(srcblk, mq, istermbuf[npass], curbp, state, fm, symbuf, ctxtbuf, ratebuf, npass, ltpidx, options) * msew;
} else {
bout.setPredTerm$Z((options & 16) != 0);
totdist += C$.rawMagRefPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_BitToByteOutput$Z$I$IA$IA$IA$I$I$I(srcblk, bout, istermbuf[npass], curbp, state, fm, ratebuf, npass, ltpidx, options) * msew;
}distbuf[npass]=totdist;
if (istermbuf[npass]) ltpidx=npass;
npass++;
istermbuf[npass]=(options & 4) != 0 || curbp == lmb  || ((options & 1) != 0 && (31 - 4 - skipbp ) >= curbp ) ;
totdist += C$.cleanuppass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$Z$I$IA$IA$IA$IA$IA$IA$I$I$I(srcblk, mq, istermbuf[npass], curbp, state, fs, zc_lut, symbuf, ctxtbuf, ratebuf, npass, ltpidx, options) * msew;
distbuf[npass]=totdist;
if (istermbuf[npass]) ltpidx=npass;
npass++;
msew *= 0.25;
curbp--;
}
ccb.data=Clazz.array(Byte.TYPE, [out.size$()]);
out.toByteArray$I$I$BA$I(0, out.size$(), ccb.data, 0);
C$.checkEndOfPassFF$BA$IA$ZA$I(ccb.data, ratebuf, istermbuf, npass);
ccb.selectConvexHull$IA$DA$ZA$I$Z(ratebuf, distbuf, (options & (5)) != 0 ? istermbuf : null, npass, rev);
mq.reset$();
if (bout != null ) bout.reset$();
}, 1);

Clazz.newMeth(C$, 'calcSkipMSBP$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$I', function (cblk, lmb) {
var k;
var kmax;
var mask;
var data;
var maxmag;
var mag;
var w;
var h;
var msbp;
var l;
data=cblk.getData$();
w=cblk.w;
h=cblk.h;
maxmag=0;
mask=2147483647 & (~((1 << lmb) - 1));
for (l=h - 1, k=cblk.offset; l >= 0; l--) {
for (kmax=k + w; k < kmax; k++) {
mag=data[k] & mask;
if (mag > maxmag) maxmag=mag;
}
k+=cblk.scanw - w;
}
msbp=30;
do {
if (((1 << msbp) & maxmag) != 0) break;
msbp--;
} while (msbp >= lmb);
return 30 - msbp;
}, 1);

Clazz.newMeth(C$, 'sigProgPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$Z$I$IA$IA$IA$IA$IA$IA$I$I$I', function (srcblk, mq, doterm, bp, state, fs, zc_lut, symbuf, ctxtbuf, ratebuf, pidx, ltpidx, options) {
var j;
var sj;
var k;
var sk;
var nsym;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var mask;
var sym;
var ctxt;
var data;
var dist;
var shift;
var upshift;
var downshift;
var normval;
var s;
var causal;
var nstripes;
var sheight;
var off_ul;
var off_ur;
var off_dr;
var off_dl;
dscanw=srcblk.scanw;
sscanw=srcblk.w + 2;
jstep=(sscanw * 4/2|0) - srcblk.w;
kstep=dscanw * 4 - srcblk.w;
mask=1 << bp;
data=srcblk.getData$();
nstripes=((srcblk.h + 4 - 1)/4|0);
dist=0;
shift=bp - (6);
upshift=(shift >= 0) ? 0 : -shift;
downshift=(shift <= 0) ? 0 : shift;
causal=(options & 8) != 0;
off_ul=-sscanw - 1;
off_ur=-sscanw + 1;
off_dr=sscanw + 1;
off_dl=sscanw - 1;
sk=srcblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : srcblk.h - (nstripes - 1) * 4;
stopsk=sk + srcblk.w;
for (nsym=0; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk;
if ((csj & (40960)) == 8192) {
ctxtbuf[nsym]=zc_lut[csj & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=16384;
}}if (sheight < 2) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
ctxtbuf[nsym]=zc_lut[(csj >>> 16) & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=1073741824;
}}state[j]=csj;
}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk + (dscanw << 1);
if ((csj & (40960)) == 8192) {
ctxtbuf[nsym]=zc_lut[csj & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=16384;
}}if (sheight < 4) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
ctxtbuf[nsym]=zc_lut[(csj >>> 16) & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=1073741824;
}}state[j]=csj;
}}
mq.codeSymbols$IA$IA$I(symbuf, ctxtbuf, nsym);
}
if ((options & 2) != 0) {
mq.resetCtxts$();
}if (doterm) {
ratebuf[pidx]=mq.terminate$();
} else {
ratebuf[pidx]=mq.getNumCodedBytes$();
}if (ltpidx >= 0) {
ratebuf[pidx]+=ratebuf[ltpidx];
}if (doterm) {
mq.finishLengthCalculation$IA$I(ratebuf, pidx);
}return dist;
}, 1);

Clazz.newMeth(C$, 'rawSigProgPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_BitToByteOutput$Z$I$IA$IA$IA$I$I$I', function (srcblk, bout, doterm, bp, state, fs, ratebuf, pidx, ltpidx, options) {
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
var mask;
var nsym=0;
var sym;
var data;
var dist;
var shift;
var upshift;
var downshift;
var normval;
var s;
var causal;
var nstripes;
var sheight;
var off_ul;
var off_ur;
var off_dr;
var off_dl;
dscanw=srcblk.scanw;
sscanw=srcblk.w + 2;
jstep=(sscanw * 4/2|0) - srcblk.w;
kstep=dscanw * 4 - srcblk.w;
mask=1 << bp;
data=srcblk.getData$();
nstripes=((srcblk.h + 4 - 1)/4|0);
dist=0;
shift=bp - (6);
upshift=(shift >= 0) ? 0 : -shift;
downshift=(shift <= 0) ? 0 : shift;
causal=(options & 8) != 0;
off_ul=-sscanw - 1;
off_ur=-sscanw + 1;
off_dr=sscanw + 1;
off_dl=sscanw - 1;
sk=srcblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : srcblk.h - (nstripes - 1) * 4;
stopsk=sk + srcblk.w;
for (; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk;
if ((csj & (40960)) == 8192) {
sym=(data[k] & mask) >>> bp;
bout.writeBit$I(sym);
nsym++;
if (sym != 0) {
sym=data[k] >>> 31;
bout.writeBit$I(sym);
nsym++;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=16384;
}}if (sheight < 2) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
sym=(data[k] & mask) >>> bp;
bout.writeBit$I(sym);
nsym++;
if (sym != 0) {
sym=data[k] >>> 31;
bout.writeBit$I(sym);
nsym++;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=1073741824;
}}state[j]=csj;
}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((~csj) & (csj << 2)) & -2147450880) != 0) {
k=sk + (dscanw << 1);
if ((csj & (40960)) == 8192) {
sym=(data[k] & mask) >>> bp;
bout.writeBit$I(sym);
nsym++;
if (sym != 0) {
sym=data[k] >>> 31;
bout.writeBit$I(sym);
nsym++;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=16384;
}}if (sheight < 4) {
state[j]=csj;
continue;
}if ((csj & (-1610612736)) == 536870912) {
k+=dscanw;
sym=(data[k] & mask) >>> bp;
bout.writeBit$I(sym);
nsym++;
if (sym != 0) {
sym=data[k] >>> 31;
bout.writeBit$I(sym);
nsym++;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
} else {
csj|=1073741824;
}}state[j]=csj;
}}
}
if (doterm) {
ratebuf[pidx]=bout.terminate$();
} else {
ratebuf[pidx]=bout.length$();
}if (ltpidx >= 0) {
ratebuf[pidx]+=ratebuf[ltpidx];
}return dist;
}, 1);

Clazz.newMeth(C$, 'magRefPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$Z$I$IA$IA$IA$IA$IA$I$I$I', function (srcblk, mq, doterm, bp, state, fm, symbuf, ctxtbuf, ratebuf, pidx, ltpidx, options) {
var j;
var sj;
var k;
var sk;
var nsym=0;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var mask;
var data;
var dist;
var shift;
var upshift;
var downshift;
var normval;
var s;
var nstripes;
var sheight;
dscanw=srcblk.scanw;
sscanw=srcblk.w + 2;
jstep=(sscanw * 4/2|0) - srcblk.w;
kstep=dscanw * 4 - srcblk.w;
mask=1 << bp;
data=srcblk.getData$();
nstripes=((srcblk.h + 4 - 1)/4|0);
dist=0;
shift=bp - (6);
upshift=(shift >= 0) ? 0 : -shift;
downshift=(shift <= 0) ? 0 : shift;
sk=srcblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : srcblk.h - (nstripes - 1) * 4;
stopsk=sk + srcblk.w;
for (nsym=0; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk;
if ((csj & (49152)) == 32768) {
symbuf[nsym]=(data[k] & mask) >>> bp;
ctxtbuf[nsym++]=C$.MR_LUT[csj & 511];
csj|=256;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}if (sheight < 2) {
state[j]=csj;
continue;
}if ((csj & (-1073741824)) == -2147483648) {
k+=dscanw;
symbuf[nsym]=(data[k] & mask) >>> bp;
ctxtbuf[nsym++]=C$.MR_LUT[(csj >>> 16) & 511];
csj|=16777216;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}state[j]=csj;
}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk + (dscanw << 1);
if ((csj & (49152)) == 32768) {
symbuf[nsym]=(data[k] & mask) >>> bp;
ctxtbuf[nsym++]=C$.MR_LUT[csj & 511];
csj|=256;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}if (sheight < 4) {
state[j]=csj;
continue;
}if ((state[j] & (-1073741824)) == -2147483648) {
k+=dscanw;
symbuf[nsym]=(data[k] & mask) >>> bp;
ctxtbuf[nsym++]=C$.MR_LUT[(csj >>> 16) & 511];
csj|=16777216;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}state[j]=csj;
}}
if (nsym > 0) mq.codeSymbols$IA$IA$I(symbuf, ctxtbuf, nsym);
}
if ((options & 2) != 0) {
mq.resetCtxts$();
}if (doterm) {
ratebuf[pidx]=mq.terminate$();
} else {
ratebuf[pidx]=mq.getNumCodedBytes$();
}if (ltpidx >= 0) {
ratebuf[pidx]+=ratebuf[ltpidx];
}if (doterm) {
mq.finishLengthCalculation$IA$I(ratebuf, pidx);
}return dist;
}, 1);

Clazz.newMeth(C$, 'rawMagRefPass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_BitToByteOutput$Z$I$IA$IA$IA$I$I$I', function (srcblk, bout, doterm, bp, state, fm, ratebuf, pidx, ltpidx, options) {
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
var mask;
var data;
var dist;
var shift;
var upshift;
var downshift;
var normval;
var s;
var nstripes;
var sheight;
var nsym=0;
dscanw=srcblk.scanw;
sscanw=srcblk.w + 2;
jstep=(sscanw * 4/2|0) - srcblk.w;
kstep=dscanw * 4 - srcblk.w;
mask=1 << bp;
data=srcblk.getData$();
nstripes=((srcblk.h + 4 - 1)/4|0);
dist=0;
shift=bp - (6);
upshift=(shift >= 0) ? 0 : -shift;
downshift=(shift <= 0) ? 0 : shift;
sk=srcblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : srcblk.h - (nstripes - 1) * 4;
stopsk=sk + srcblk.w;
for (; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk;
if ((csj & (49152)) == 32768) {
bout.writeBit$I((data[k] & mask) >>> bp);
nsym++;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}if (sheight < 2) continue;
if ((csj & (-1073741824)) == -2147483648) {
k+=dscanw;
bout.writeBit$I((data[k] & mask) >>> bp);
nsym++;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}}if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
if ((((csj >>> 1) & (~csj)) & 1073758208) != 0) {
k=sk + (dscanw << 1);
if ((csj & (49152)) == 32768) {
bout.writeBit$I((data[k] & mask) >>> bp);
nsym++;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}if (sheight < 4) continue;
if ((state[j] & (-1073741824)) == -2147483648) {
k+=dscanw;
bout.writeBit$I((data[k] & mask) >>> bp);
nsym++;
normval=(data[k] >> downshift) << upshift;
dist+=fm[normval & (127)];
}}}
}
if (doterm) {
ratebuf[pidx]=bout.terminate$();
} else {
ratebuf[pidx]=bout.length$();
}if (ltpidx >= 0) {
ratebuf[pidx]+=ratebuf[ltpidx];
}return dist;
}, 1);

Clazz.newMeth(C$, 'cleanuppass$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$Z$I$IA$IA$IA$IA$IA$IA$I$I$I', function (srcblk, mq, doterm, bp, state, fs, zc_lut, symbuf, ctxtbuf, ratebuf, pidx, ltpidx, options) {
var j;
var sj;
var k;
var sk;
var nsym=0;
var dscanw;
var sscanw;
var jstep;
var kstep;
var stopsk;
var csj;
var mask;
var sym;
var rlclen;
var ctxt;
var data;
var dist;
var shift;
var upshift;
var downshift;
var normval;
var s;
var causal;
var nstripes;
var sheight;
var off_ul;
var off_ur;
var off_dr;
var off_dl;
dscanw=srcblk.scanw;
sscanw=srcblk.w + 2;
jstep=(sscanw * 4/2|0) - srcblk.w;
kstep=dscanw * 4 - srcblk.w;
mask=1 << bp;
data=srcblk.getData$();
nstripes=((srcblk.h + 4 - 1)/4|0);
dist=0;
shift=bp - (6);
upshift=(shift >= 0) ? 0 : -shift;
downshift=(shift <= 0) ? 0 : shift;
causal=(options & 8) != 0;
off_ul=-sscanw - 1;
off_ur=-sscanw + 1;
off_dr=sscanw + 1;
off_dl=sscanw - 1;
sk=srcblk.offset;
sj=sscanw + 1;
for (s=nstripes - 1; s >= 0; s--, sk+=kstep, sj+=jstep) {
sheight=(s != 0) ? 4 : srcblk.h - (nstripes - 1) * 4;
stopsk=sk + srcblk.w;
for (nsym=0; sk < stopsk; sk++, sj++) {
j=sj;
csj=state[j];
 top_half : {
if (csj == 0 && state[j + sscanw] == 0  && sheight == 4 ) {
k=sk;
if ((data[k] & mask) != 0) {
rlclen=0;
} else if ((data[k+=dscanw] & mask) != 0) {
rlclen=1;
} else if ((data[k+=dscanw] & mask) != 0) {
rlclen=2;
j+=sscanw;
csj=state[j];
} else if ((data[k+=dscanw] & mask) != 0) {
rlclen=3;
j+=sscanw;
csj=state[j];
} else {
symbuf[nsym]=0;
ctxtbuf[nsym++]=1;
continue;
}symbuf[nsym]=1;
ctxtbuf[nsym++]=1;
symbuf[nsym]=rlclen >> 1;
ctxtbuf[nsym++]=0;
symbuf[nsym]=rlclen & 1;
ctxtbuf[nsym++]=0;
normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
sym=data[k] >>> 31;
if ((rlclen & 1) == 0) {
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
ctxtbuf[nsym]=zc_lut[csj & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
}}if (sheight < 2) {
csj&=~(1073758208);
state[j]=csj;
continue;
}if ((csj & (-1073741824)) == 0) {
k+=dscanw;
ctxtbuf[nsym]=zc_lut[(csj >>> 16) & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
}}}csj&=~(1073758208);
state[j]=csj;
if (sheight < 3) continue;
j+=sscanw;
csj=state[j];
}if ((((csj >> 1) | csj) & 1073758208) != 1073758208) {
k=sk + (dscanw << 1);
if ((csj & (49152)) == 0) {
ctxtbuf[nsym]=zc_lut[csj & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 4) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
}}if (sheight < 4) {
csj&=~(1073758208);
state[j]=csj;
continue;
}if ((csj & (-1073741824)) == 0) {
k+=dscanw;
ctxtbuf[nsym]=zc_lut[(csj >>> 16) & 255];
if ((symbuf[nsym++]=(data[k] & mask) >>> bp) != 0) {
sym=data[k] >>> 31;
ctxt=C$.SC_LUT[(csj >>> 20) & 511];
symbuf[nsym]=sym ^ (ctxt >>> 31);
ctxtbuf[nsym++]=ctxt & 15;
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
}normval=(data[k] >> downshift) << upshift;
dist+=fs[normval & (63)];
}}}csj&=~(1073758208);
state[j]=csj;
}
if (nsym > 0) mq.codeSymbols$IA$IA$I(symbuf, ctxtbuf, nsym);
}
if ((options & 32) != 0) {
mq.codeSymbols$IA$IA$I(C$.SEG_SYMBOLS, C$.SEG_SYMB_CTXTS, C$.SEG_SYMBOLS.length);
}if ((options & 2) != 0) {
mq.resetCtxts$();
}if (doterm) {
ratebuf[pidx]=mq.terminate$();
} else {
ratebuf[pidx]=mq.getNumCodedBytes$();
}if (ltpidx >= 0) {
ratebuf[pidx]+=ratebuf[ltpidx];
}if (doterm) {
mq.finishLengthCalculation$IA$I(ratebuf, pidx);
}return dist;
}, 1);

Clazz.newMeth(C$, 'checkEndOfPassFF$BA$IA$ZA$I', function (data, rates, isterm, n) {
var dp;
if (isterm == null ) {
for (n--; n >= 0; n--) {
dp=rates[n] - 1;
if (dp >= 0 && (data[dp] == -1) ) {
rates[n]--;
}}
} else {
for (n--; n >= 0; n--) {
if (!isterm[n]) {
dp=rates[n] - 1;
if (dp >= 0 && (data[dp] == -1) ) {
rates[n]--;
}}}
}}, 1);

Clazz.newMeth(C$, 'initTileComp$I$I', function (nt, nc) {
this.opts=Clazz.array(Integer.TYPE, [nt, nc]);
this.lenCalc=Clazz.array(Integer.TYPE, [nt, nc]);
this.tType=Clazz.array(Integer.TYPE, [nt, nc]);
for (var t=0; t < nt; t++) {
for (var c=0; c < nc; c++) {
this.opts[t][c]=0;
if ((this.bms.getTileCompVal$I$I(t, c)).equalsIgnoreCase$S("true")) {
this.opts[t][c]|=1;
}if ((this.mqrs.getTileCompVal$I$I(t, c)).equalsIgnoreCase$S("true")) {
this.opts[t][c]|=2;
}if ((this.rts.getTileCompVal$I$I(t, c)).equalsIgnoreCase$S("true")) {
this.opts[t][c]|=4;
}if ((this.css.getTileCompVal$I$I(t, c)).equalsIgnoreCase$S("true")) {
this.opts[t][c]|=8;
}if ((this.sss.getTileCompVal$I$I(t, c)).equalsIgnoreCase$S("true")) {
this.opts[t][c]|=32;
}var lCalcType=this.lcs.getTileCompVal$I$I(t, c);
if (lCalcType.equals$O("near_opt")) {
this.lenCalc[t][c]=2;
} else if (lCalcType.equals$O("lazy_good")) {
this.lenCalc[t][c]=1;
} else if (lCalcType.equals$O("lazy")) {
this.lenCalc[t][c]=0;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unrecognized or unsupported MQ length calculation."]);
}var termType=this.tts.getTileCompVal$I$I(t, c);
if (termType.equalsIgnoreCase$S("easy")) {
this.tType[t][c]=2;
} else if (termType.equalsIgnoreCase$S("full")) {
this.tType[t][c]=0;
} else if (termType.equalsIgnoreCase$S("near_opt")) {
this.tType[t][c]=1;
} else if (termType.equalsIgnoreCase$S("predict")) {
this.tType[t][c]=3;
this.opts[t][c]|=16;
if ((this.opts[t][c] & (5)) == 0) {
$I$(1).getMsgLogger$().printmsg$I$S(1, "Using error resilient MQ termination, but terminating only at the end of code-blocks. The error protection offered by this option will be very weak. Specify the \'Creg_term\' and/or \'Cbypass\' option for increased error resilience.");
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unrecognized or unsupported MQ coder termination."]);
}}
}
});

Clazz.newMeth(C$, 'getPPX$I$I$I', function (t, c, rl) {
return this.pss.getPPX$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'getPPY$I$I$I', function (t, c, rl) {
return this.pss.getPPY$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'precinctPartitionUsed$I$I', function (c, t) {
return this.precinctPartition[c][t];
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StdEntropyCoder, "Compressor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['rev'],'I',['idx','c','options','lcType','tType'],'O',['ccb','io.scif.jj2000.j2k.entropy.encoder.CBlkRateDistStats','time','long[]']]]

Clazz.newMeth(C$, 'c$$I', function (idx) {
;C$.$init$.apply(this);
this.idx=idx;
if (false) this.time=Clazz.array(Long.TYPE, [this.this$0.src.getNumComps$()]);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
var stime=0;
if (false) stime=System.currentTimeMillis$();
P$.StdEntropyCoder.compressCodeBlock$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStats$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData$io_scif_jj2000_j2k_entropy_encoder_MQCoder$io_scif_jj2000_j2k_entropy_encoder_BitToByteOutput$io_scif_jj2000_j2k_entropy_encoder_ByteOutputBuffer$IA$DA$IA$ZA$IA$IA$I$Z$I$I(this.c, this.ccb, this.this$0.srcblkT[this.idx], this.this$0.mqT[this.idx], this.this$0.boutT[this.idx], this.this$0.outT[this.idx], this.this$0.stateT[this.idx], this.this$0.distbufT[this.idx], this.this$0.ratebufT[this.idx], this.this$0.istermbufT[this.idx], this.this$0.symbufT[this.idx], this.this$0.ctxtbufT[this.idx], this.options, this.rev, this.lcType, this.tType);
if (false) this.time[this.c]+=System.currentTimeMillis$() - stime;
} finally {
this.this$0.completedComps[this.c].push$TE(this);
}
});

Clazz.newMeth(C$, 'getTiming$I', function (c) {
if (false) {
var t=this.time[c];
this.time[c]=0;
return t;
} else {
return 0;
}});

Clazz.newMeth(C$, 'getIdx$', function () {
return this.idx;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
