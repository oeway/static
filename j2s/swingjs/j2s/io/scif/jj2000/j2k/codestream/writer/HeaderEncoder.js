(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.writer"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.DataOutputStream','io.scif.jj2000.j2k.util.MathUtil','Error','io.scif.jj2000.j2k.quantization.quantizer.StdQuantizer','java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HeaderEncoder", null, null, ['io.scif.jj2000.j2k.codestream.Markers', 'io.scif.jj2000.j2k.entropy.StdEntropyCoderOptions']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enJJ2KMarkSeg=true;
this.otherCOMMarkSeg=null;
}, 1);

C$.$fields$=[['Z',['enJJ2KMarkSeg'],'I',['defimgn','deftilenr','nComp'],'S',['otherCOMMarkSeg'],'O',['baos','java.io.ByteArrayOutputStream','hbuf','java.io.DataOutputStream','origSrc','io.scif.jj2000.j2k.image.ImgData','isOrigSig','boolean[]','ralloc','io.scif.jj2000.j2k.entropy.encoder.PostCompRateAllocator','dwt','io.scif.jj2000.j2k.wavelet.analysis.ForwardWT','tiler','io.scif.jj2000.j2k.image.Tiler','roiSc','io.scif.jj2000.j2k.roi.encoder.ROIScaler','wp','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriteParamJava']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_ImgData$ZA$io_scif_jj2000_j2k_wavelet_analysis_ForwardWT$io_scif_jj2000_j2k_image_Tiler$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_jj2000_j2k_roi_encoder_ROIScaler$io_scif_jj2000_j2k_entropy_encoder_PostCompRateAllocator', function (origsrc, isorigsig, dwt, tiler, wp, roiSc, ralloc) {
;C$.$init$.apply(this);
if (origsrc.getNumComps$() != isorigsig.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.origSrc=origsrc;
this.isOrigSig=isorigsig;
this.dwt=dwt;
this.tiler=tiler;
this.wp=wp;
this.roiSc=roiSc;
this.ralloc=ralloc;
this.baos=Clazz.new_($I$(1,1));
this.hbuf=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[this.baos]);
this.nComp=origsrc.getNumComps$();
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
this.baos.reset$();
this.hbuf=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[this.baos]);
});

Clazz.newMeth(C$, 'getBuffer$', function () {
return this.baos.toByteArray$();
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.hbuf.size$();
});

Clazz.newMeth(C$, 'writeTo$io_scif_jj2000_j2k_io_BinaryDataOutput', function (out) {
var i;
var len;
var buf;
buf=this.getBuffer$();
len=this.getLength$();
for (i=0; i < len; i++) {
out.writeByte$I(buf[i]);
}
});

Clazz.newMeth(C$, 'getBufferLength$', function () {
return this.baos.size$();
});

Clazz.newMeth(C$, 'writeTo$java_io_OutputStream', function (out) {
out.write$BA$I$I(this.getBuffer$(), 0, this.getBufferLength$());
});

Clazz.newMeth(C$, 'writeSOC', function () {
this.hbuf.writeShort$I(-177);
}, p$1);

Clazz.newMeth(C$, 'writeSIZ', function () {
var tmp;
this.hbuf.writeShort$I(-175);
var markSegLen=38 + 3 * this.nComp;
this.hbuf.writeShort$I(markSegLen);
this.hbuf.writeShort$I(0);
this.hbuf.writeInt$I(this.tiler.getImgWidth$() + this.tiler.getImgULX$());
this.hbuf.writeInt$I(this.tiler.getImgHeight$() + this.tiler.getImgULY$());
this.hbuf.writeInt$I(this.tiler.getImgULX$());
this.hbuf.writeInt$I(this.tiler.getImgULY$());
this.hbuf.writeInt$I(this.tiler.getNomTileWidth$());
this.hbuf.writeInt$I(this.tiler.getNomTileHeight$());
var torig=this.tiler.getTilingOrigin$java_awt_Point(null);
this.hbuf.writeInt$I(torig.x);
this.hbuf.writeInt$I(torig.y);
this.hbuf.writeShort$I(this.nComp);
for (var c=0; c < this.nComp; c++) {
tmp=this.origSrc.getNomRangeBits$I(c) - 1;
tmp|=((this.isOrigSig[c] ? 1 : 0) << 7);
this.hbuf.write$I(tmp);
this.hbuf.write$I(this.tiler.getCompSubsX$I(c));
this.hbuf.write$I(this.tiler.getCompSubsY$I(c));
}
}, p$1);

Clazz.newMeth(C$, 'writeCOD$Z$I', function (mh, tileIdx) {
var filt;
var precinctPartitionUsed;
var tmp;
var mrl=0;
var a=0;
var ppx=0;
var ppy=0;
var prog;
if (mh) {
mrl=(this.wp.getDecompositionLevel$().getDefault$()).intValue$();
ppx=this.wp.getPrecinctPartition$().getPPX$I$I$I(-1, -1, mrl);
ppy=this.wp.getPrecinctPartition$().getPPY$I$I$I(-1, -1, mrl);
prog=(this.wp.getProgressionType$().getDefault$());
} else {
mrl=(this.wp.getDecompositionLevel$().getTileDef$I(tileIdx)).intValue$();
ppx=this.wp.getPrecinctPartition$().getPPX$I$I$I(tileIdx, -1, mrl);
ppy=this.wp.getPrecinctPartition$().getPPY$I$I$I(tileIdx, -1, mrl);
prog=(this.wp.getProgressionType$().getTileDef$I(tileIdx));
}if (ppx != 65535 || ppy != 65535 ) {
precinctPartitionUsed=true;
} else {
precinctPartitionUsed=false;
}if (precinctPartitionUsed) {
a=mrl + 1;
}this.hbuf.writeShort$I(-174);
var markSegLen=12 + a;
this.hbuf.writeShort$I(markSegLen);
tmp=0;
if (precinctPartitionUsed) tmp=1;
if (mh) {
if ((this.wp.getSOP$().getDefault$().toString()).equalsIgnoreCase$S("true")) {
tmp|=2;
}} else {
if ((this.wp.getSOP$().getTileDef$I(tileIdx).toString()).equalsIgnoreCase$S("true")) {
tmp|=2;
}}if (mh) {
if ((this.wp.getEPH$().getDefault$().toString()).equalsIgnoreCase$S("true")) {
tmp|=4;
}} else {
if ((this.wp.getEPH$().getTileDef$I(tileIdx).toString()).equalsIgnoreCase$S("true")) {
tmp|=4;
}}if (this.dwt.getCbULX$() != 0) tmp|=8;
if (this.dwt.getCbULY$() != 0) tmp|=16;
this.hbuf.write$I(tmp);
this.hbuf.write$I(prog[0].type);
this.hbuf.writeShort$I(this.ralloc.getNumLayers$());
var str=null;
if (mh) str=this.wp.getComponentTransformation$().getDefault$();
 else str=this.wp.getComponentTransformation$().getTileDef$I(tileIdx);
if (str.equals$O("none")) this.hbuf.write$I(0);
 else this.hbuf.write$I(1);
this.hbuf.write$I(mrl);
if (mh) {
tmp=this.wp.getCodeBlockSize$().getCBlkWidth$B$I$I(($b$[0] = 0, $b$[0]), -1, -1);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
tmp=this.wp.getCodeBlockSize$().getCBlkHeight$B$I$I(($b$[0] = 0, $b$[0]), -1, -1);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
} else {
tmp=this.wp.getCodeBlockSize$().getCBlkWidth$B$I$I(($b$[0] = 2, $b$[0]), tileIdx, -1);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
tmp=this.wp.getCodeBlockSize$().getCBlkHeight$B$I$I(($b$[0] = 2, $b$[0]), tileIdx, -1);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
}tmp=0;
if (mh) {
if ((this.wp.getBypass$().getDefault$()).equals$O("true")) {
tmp|=1;
}if ((this.wp.getResetMQ$().getDefault$()).equals$O("true")) {
tmp|=2;
}if ((this.wp.getTerminateOnByte$().getDefault$()).equals$O("true")) {
tmp|=4;
}if ((this.wp.getCausalCXInfo$().getDefault$()).equals$O("true")) {
tmp|=8;
}if ((this.wp.getMethodForMQTermination$().getDefault$()).equals$O("predict")) {
tmp|=16;
}if ((this.wp.getCodeSegSymbol$().getDefault$()).equals$O("true")) {
tmp|=32;
}} else {
if ((this.wp.getBypass$().getTileDef$I(tileIdx)).equals$O("true")) {
tmp|=1;
}if ((this.wp.getResetMQ$().getTileDef$I(tileIdx)).equals$O("true")) {
tmp|=2;
}if ((this.wp.getTerminateOnByte$().getTileDef$I(tileIdx)).equals$O("true")) {
tmp|=4;
}if ((this.wp.getCausalCXInfo$().getTileDef$I(tileIdx)).equals$O("true")) {
tmp|=8;
}if ((this.wp.getMethodForMQTermination$().getTileDef$I(tileIdx)).equals$O("predict")) {
tmp|=16;
}if ((this.wp.getCodeSegSymbol$().getTileDef$I(tileIdx)).equals$O("true")) {
tmp|=32;
}}this.hbuf.write$I(tmp);
if (mh) {
filt=(this.wp.getFilters$().getDefault$());
this.hbuf.write$I(filt[0][0].getFilterType$());
} else {
filt=(this.wp.getFilters$().getTileDef$I(tileIdx));
this.hbuf.write$I(filt[0][0].getFilterType$());
}if (precinctPartitionUsed) {
var v=null;
if (mh) {
v=this.wp.getPrecinctPartition$().getDefault$();
} else {
v=this.wp.getPrecinctPartition$().getTileDef$I(tileIdx);
}for (var r=mrl; r >= 0; r--) {
if (r >= v[1].size$()) {
tmp=(v[1].elementAt$I(v[1].size$() - 1)).intValue$();
} else {
tmp=(v[1].elementAt$I(r)).intValue$();
}var yExp=($I$(3).log2$I(tmp) << 4) & 240;
if (r >= v[0].size$()) {
tmp=(v[0].elementAt$I(v[0].size$() - 1)).intValue$();
} else {
tmp=(v[0].elementAt$I(r)).intValue$();
}var xExp=$I$(3).log2$I(tmp) & 15;
this.hbuf.write$I(yExp | xExp);
}
}});

Clazz.newMeth(C$, 'writeCOC$Z$I$I', function (mh, tileIdx, compIdx) {
var filt;
var precinctPartitionUsed;
var tmp;
var mrl=0;
var a=0;
var ppx=0;
var ppy=0;
var prog;
if (mh) {
mrl=(this.wp.getDecompositionLevel$().getCompDef$I(compIdx)).intValue$();
ppx=this.wp.getPrecinctPartition$().getPPX$I$I$I(-1, compIdx, mrl);
ppy=this.wp.getPrecinctPartition$().getPPY$I$I$I(-1, compIdx, mrl);
prog=(this.wp.getProgressionType$().getCompDef$I(compIdx));
} else {
mrl=(this.wp.getDecompositionLevel$().getTileCompVal$I$I(tileIdx, compIdx)).intValue$();
ppx=this.wp.getPrecinctPartition$().getPPX$I$I$I(tileIdx, compIdx, mrl);
ppy=this.wp.getPrecinctPartition$().getPPY$I$I$I(tileIdx, compIdx, mrl);
prog=(this.wp.getProgressionType$().getTileCompVal$I$I(tileIdx, compIdx));
}if (ppx != 65535 || ppy != 65535 ) {
precinctPartitionUsed=true;
} else {
precinctPartitionUsed=false;
}if (precinctPartitionUsed) {
a=mrl + 1;
}this.hbuf.writeShort$I(-173);
var markSegLen=8 + ((this.nComp < 257) ? 1 : 2) + a ;
this.hbuf.writeShort$I(markSegLen);
if (this.nComp < 257) {
this.hbuf.write$I(compIdx);
} else {
this.hbuf.writeShort$I(compIdx);
}tmp=0;
if (precinctPartitionUsed) {
tmp=1;
}this.hbuf.write$I(tmp);
this.hbuf.write$I(mrl);
if (mh) {
tmp=this.wp.getCodeBlockSize$().getCBlkWidth$B$I$I(($b$[0] = 1, $b$[0]), -1, compIdx);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
tmp=this.wp.getCodeBlockSize$().getCBlkHeight$B$I$I(($b$[0] = 1, $b$[0]), -1, compIdx);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
} else {
tmp=this.wp.getCodeBlockSize$().getCBlkWidth$B$I$I(($b$[0] = 3, $b$[0]), tileIdx, compIdx);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
tmp=this.wp.getCodeBlockSize$().getCBlkHeight$B$I$I(($b$[0] = 3, $b$[0]), tileIdx, compIdx);
this.hbuf.write$I($I$(3).log2$I(tmp) - 2);
}tmp=0;
if (mh) {
if ((this.wp.getBypass$().getCompDef$I(compIdx)).equals$O("true")) {
tmp|=1;
}if ((this.wp.getResetMQ$().getCompDef$I(compIdx)).equalsIgnoreCase$S("true")) {
tmp|=2;
}if ((this.wp.getTerminateOnByte$().getCompDef$I(compIdx)).equals$O("true")) {
tmp|=4;
}if ((this.wp.getCausalCXInfo$().getCompDef$I(compIdx)).equals$O("true")) {
tmp|=8;
}if ((this.wp.getMethodForMQTermination$().getCompDef$I(compIdx)).equals$O("predict")) {
tmp|=16;
}if ((this.wp.getCodeSegSymbol$().getCompDef$I(compIdx)).equals$O("true")) {
tmp|=32;
}} else {
if ((this.wp.getBypass$().getTileCompVal$I$I(tileIdx, compIdx)).equals$O("true")) {
tmp|=1;
}if ((this.wp.getResetMQ$().getTileCompVal$I$I(tileIdx, compIdx)).equals$O("true")) {
tmp|=2;
}if ((this.wp.getTerminateOnByte$().getTileCompVal$I$I(tileIdx, compIdx)).equals$O("true")) {
tmp|=4;
}if ((this.wp.getCausalCXInfo$().getTileCompVal$I$I(tileIdx, compIdx)).equals$O("true")) {
tmp|=8;
}if ((this.wp.getMethodForMQTermination$().getTileCompVal$I$I(tileIdx, compIdx)).equals$O("predict")) {
tmp|=16;
}if ((this.wp.getCodeSegSymbol$().getTileCompVal$I$I(tileIdx, compIdx)).equals$O("true")) {
tmp|=32;
}}this.hbuf.write$I(tmp);
if (mh) {
filt=(this.wp.getFilters$().getCompDef$I(compIdx));
this.hbuf.write$I(filt[0][0].getFilterType$());
} else {
filt=(this.wp.getFilters$().getTileCompVal$I$I(tileIdx, compIdx));
this.hbuf.write$I(filt[0][0].getFilterType$());
}if (precinctPartitionUsed) {
var v=null;
if (mh) {
v=this.wp.getPrecinctPartition$().getCompDef$I(compIdx);
} else {
v=this.wp.getPrecinctPartition$().getTileCompVal$I$I(tileIdx, compIdx);
}for (var r=mrl; r >= 0; r--) {
if (r >= v[1].size$()) {
tmp=(v[1].elementAt$I(v[1].size$() - 1)).intValue$();
} else {
tmp=(v[1].elementAt$I(r)).intValue$();
}var yExp=($I$(3).log2$I(tmp) << 4) & 240;
if (r >= v[0].size$()) {
tmp=(v[0].elementAt$I(v[0].size$() - 1)).intValue$();
} else {
tmp=(v[0].elementAt$I(r)).intValue$();
}var xExp=$I$(3).log2$I(tmp) & 15;
this.hbuf.write$I(yExp | xExp);
}
}});

Clazz.newMeth(C$, 'writeMainQCD$', function () {
var step;
var qType=this.wp.getQuantizationType$().getDefault$();
var baseStep=(this.wp.getQuantizationStep$().getDefault$()).floatValue$();
var gb=(this.wp.getGuardBits$().getDefault$()).intValue$();
var isDerived=qType.equals$O("derived");
var isReversible=qType.equals$O("reversible");
var mrl=(this.wp.getDecompositionLevel$().getDefault$()).intValue$();
var nt=this.dwt.getNumTiles$();
var nc=this.dwt.getNumComps$();
var tmpI;
var tcIdx=Clazz.array(Integer.TYPE, [2]);
var tmpStr;
var notFound=true;
for (var t=0; t < nt && notFound ; t++) {
for (var c=0; c < nc && notFound ; c++) {
tmpI=(this.wp.getDecompositionLevel$().getTileCompVal$I$I(t, c)).intValue$();
tmpStr=this.wp.getQuantizationType$().getTileCompVal$I$I(t, c);
if (tmpI == mrl && tmpStr.equals$O(qType) ) {
tcIdx[0]=t;
tcIdx[1]=c;
notFound=false;
}}
}
if (notFound) {
throw Clazz.new_($I$(4,1).c$$S,["Default representative for quantization type  and number of decomposition levels not found  in main QCD marker segment. You have found a JJ2000 bug."]);
}var sb;
var csb;
var sbRoot=this.dwt.getAnSubbandTree$I$I(tcIdx[0], tcIdx[1]);
this.defimgn=this.dwt.getNomRangeBits$I(tcIdx[1]);
var nqcd;
var qstyle=(isReversible) ? 0 : ((isDerived) ? 1 : 2);
this.hbuf.writeShort$I(-164);
switch (qstyle) {
case 1:
nqcd=1;
break;
case 0:
case 2:
nqcd=0;
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
csb=sb;
while (csb != null ){
nqcd++;
csb=csb.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
var markSegLen=3 + ((isReversible) ? nqcd : 2 * nqcd);
this.hbuf.writeShort$I(markSegLen);
this.hbuf.write$I(qstyle + (gb << 5));
switch (qstyle) {
case 0:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
csb=sb;
while (csb != null ){
var tmp=(this.defimgn + csb.anGainExp);
this.hbuf.write$I(tmp << 3);
csb=csb.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
case 1:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
step=baseStep / (1 << sb.level);
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
break;
case 2:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
csb=sb;
while (csb != null ){
step=baseStep / (csb.l2Norm * (1 << csb.anGainExp));
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
csb=csb.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
});

Clazz.newMeth(C$, 'writeMainQCC$I', function (compIdx) {
var mrl;
var qstyle;
var tIdx=0;
var step;
var sb;
var sb2;
var sbRoot;
var imgnr=this.dwt.getNomRangeBits$I(compIdx);
var qType=this.wp.getQuantizationType$().getCompDef$I(compIdx);
var baseStep=(this.wp.getQuantizationStep$().getCompDef$I(compIdx)).floatValue$();
var gb=(this.wp.getGuardBits$().getCompDef$I(compIdx)).intValue$();
var isReversible=qType.equals$O("reversible");
var isDerived=qType.equals$O("derived");
mrl=(this.wp.getDecompositionLevel$().getCompDef$I(compIdx)).intValue$();
var nt=this.dwt.getNumTiles$();
var nc=this.dwt.getNumComps$();
var tmpI;
var tmpStr;
var notFound=true;
for (var t=0; t < nt && notFound ; t++) {
for (var c=0; c < nc && notFound ; c++) {
tmpI=(this.wp.getDecompositionLevel$().getTileCompVal$I$I(t, c)).intValue$();
tmpStr=this.wp.getQuantizationType$().getTileCompVal$I$I(t, c);
if (tmpI == mrl && tmpStr.equals$O(qType) ) {
tIdx=t;
notFound=false;
}}
}
if (notFound) {
throw Clazz.new_($I$(4,1).c$$S,["Default representative for quantization type  and number of decomposition levels not found  in main QCC (c=" + compIdx + ") marker segment. " + "You have found a JJ2000 bug." ]);
}sbRoot=this.dwt.getAnSubbandTree$I$I(tIdx, compIdx);
var nqcc;
if (isReversible) {
qstyle=0;
} else if (isDerived) {
qstyle=1;
} else {
qstyle=2;
}this.hbuf.writeShort$I(-163);
switch (qstyle) {
case 1:
nqcc=1;
break;
case 0:
case 2:
nqcc=0;
sb=sbRoot;
mrl=sb.resLvl;
sb=sb.getSubbandByIdx$I$I(0, 0);
while (sb.resLvl != 0){
sb=sb.subb_LL;
}
for (var j=0; j <= mrl; j++) {
sb2=sb;
while (sb2 != null ){
nqcc++;
sb2=sb2.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
var markSegLen=3 + ((this.nComp < 257) ? 1 : 2) + ((isReversible) ? nqcc : 2 * nqcc) ;
this.hbuf.writeShort$I(markSegLen);
if (this.nComp < 257) {
this.hbuf.write$I(compIdx);
} else {
this.hbuf.writeShort$I(compIdx);
}this.hbuf.write$I(qstyle + (gb << 5));
switch (qstyle) {
case 0:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
sb2=sb;
while (sb2 != null ){
var tmp=(imgnr + sb2.anGainExp);
this.hbuf.write$I(tmp << 3);
sb2=sb2.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
case 1:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
step=baseStep / (1 << sb.level);
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
break;
case 2:
sb=sbRoot;
mrl=sb.resLvl;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
sb2=sb;
while (sb2 != null ){
step=baseStep / (sb2.l2Norm * (1 << sb2.anGainExp));
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
sb2=sb2.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
});

Clazz.newMeth(C$, 'writeTileQCD$I', function (tIdx) {
var mrl;
var qstyle;
var step;
var sb;
var csb;
var sbRoot;
var qType=this.wp.getQuantizationType$().getTileDef$I(tIdx);
var baseStep=(this.wp.getQuantizationStep$().getTileDef$I(tIdx)).floatValue$();
mrl=(this.wp.getDecompositionLevel$().getTileDef$I(tIdx)).intValue$();
var nc=this.dwt.getNumComps$();
var tmpI;
var tmpStr;
var notFound=true;
var compIdx=0;
for (var c=0; c < nc && notFound ; c++) {
tmpI=(this.wp.getDecompositionLevel$().getTileCompVal$I$I(tIdx, c)).intValue$();
tmpStr=this.wp.getQuantizationStep$().getTileCompVal$I$I(tIdx, c);
if (tmpI == mrl && tmpStr.equals$O(qType) ) {
compIdx=c;
notFound=false;
}}
if (notFound) {
throw Clazz.new_($I$(4,1).c$$S,["Default representative for quantization type  and number of decomposition levels not found  in tile QCD (t=" + tIdx + ") marker segment. " + "You have found a JJ2000 bug." ]);
}sbRoot=this.dwt.getAnSubbandTree$I$I(tIdx, compIdx);
this.deftilenr=this.dwt.getNomRangeBits$I(compIdx);
var gb=(this.wp.getGuardBits$().getTileDef$I(tIdx)).intValue$();
var isDerived=qType.equals$O("derived");
var isReversible=qType.equals$O("reversible");
var nqcd;
qstyle=(isReversible) ? 0 : ((isDerived) ? 1 : 2);
this.hbuf.writeShort$I(-164);
switch (qstyle) {
case 1:
nqcd=1;
break;
case 0:
case 2:
nqcd=0;
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
csb=sb;
while (csb != null ){
nqcd++;
csb=csb.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
var markSegLen=3 + ((isReversible) ? nqcd : 2 * nqcd);
this.hbuf.writeShort$I(markSegLen);
this.hbuf.write$I(qstyle + (gb << 5));
switch (qstyle) {
case 0:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
csb=sb;
while (csb != null ){
var tmp=(this.deftilenr + csb.anGainExp);
this.hbuf.write$I(tmp << 3);
csb=csb.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
case 1:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
step=baseStep / (1 << sb.level);
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
break;
case 2:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
csb=sb;
while (csb != null ){
step=baseStep / (csb.l2Norm * (1 << csb.anGainExp));
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
csb=csb.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
});

Clazz.newMeth(C$, 'writeTileQCC$I$I', function (t, compIdx) {
var mrl;
var qstyle;
var step;
var sb;
var sb2;
var nqcc;
var sbRoot=this.dwt.getAnSubbandTree$I$I(t, compIdx);
var imgnr=this.dwt.getNomRangeBits$I(compIdx);
var qType=this.wp.getQuantizationType$().getTileCompVal$I$I(t, compIdx);
var baseStep=(this.wp.getQuantizationStep$().getTileCompVal$I$I(t, compIdx)).floatValue$();
var gb=(this.wp.getGuardBits$().getTileCompVal$I$I(t, compIdx)).intValue$();
var isReversible=qType.equals$O("reversible");
var isDerived=qType.equals$O("derived");
mrl=(this.wp.getDecompositionLevel$().getTileCompVal$I$I(t, compIdx)).intValue$();
if (isReversible) {
qstyle=0;
} else if (isDerived) {
qstyle=1;
} else {
qstyle=2;
}this.hbuf.writeShort$I(-163);
switch (qstyle) {
case 1:
nqcc=1;
break;
case 0:
case 2:
nqcc=0;
sb=sbRoot;
mrl=sb.resLvl;
sb=sb.getSubbandByIdx$I$I(0, 0);
while (sb.resLvl != 0){
sb=sb.subb_LL;
}
for (var j=0; j <= mrl; j++) {
sb2=sb;
while (sb2 != null ){
nqcc++;
sb2=sb2.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
var markSegLen=3 + ((this.nComp < 257) ? 1 : 2) + ((isReversible) ? nqcc : 2 * nqcc) ;
this.hbuf.writeShort$I(markSegLen);
if (this.nComp < 257) {
this.hbuf.write$I(compIdx);
} else {
this.hbuf.writeShort$I(compIdx);
}this.hbuf.write$I(qstyle + (gb << 5));
switch (qstyle) {
case 0:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
sb2=sb;
while (sb2 != null ){
var tmp=(imgnr + sb2.anGainExp);
this.hbuf.write$I(tmp << 3);
sb2=sb2.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
case 1:
sb=sbRoot;
sb=sb.getSubbandByIdx$I$I(0, 0);
step=baseStep / (1 << sb.level);
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
break;
case 2:
sb=sbRoot;
mrl=sb.resLvl;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var j=0; j <= mrl; j++) {
sb2=sb;
while (sb2 != null ){
step=baseStep / (sb2.l2Norm * (1 << sb2.anGainExp));
this.hbuf.writeShort$I($I$(5).convertToExpMantissa$F(step));
sb2=sb2.nextSubband$();
}
sb=sb.getNextResLevel$();
}
break;
default:
throw Clazz.new_($I$(4,1).c$$S,["Internal JJ2000 error"]);
}
});

Clazz.newMeth(C$, 'writePOC$Z$I', function (mh, tileIdx) {
var markSegLen=0;
var lenCompField;
var prog=null;
var npoc;
if (mh) {
prog=(this.wp.getProgressionType$().getDefault$());
} else {
prog=(this.wp.getProgressionType$().getTileDef$I(tileIdx));
}lenCompField=(this.nComp < 257 ? 1 : 2);
this.hbuf.writeShort$I(-161);
npoc=prog.length;
markSegLen=2 + npoc * (1 + lenCompField + 2 + 1 + lenCompField + 1 );
this.hbuf.writeShort$I(markSegLen);
for (var i=0; i < npoc; i++) {
this.hbuf.write$I(prog[i].rs);
if (lenCompField == 2) {
this.hbuf.writeShort$I(prog[i].cs);
} else {
this.hbuf.write$I(prog[i].cs);
}this.hbuf.writeShort$I(prog[i].lye);
this.hbuf.write$I(prog[i].re);
if (lenCompField == 2) {
this.hbuf.writeShort$I(prog[i].ce);
} else {
this.hbuf.write$I(prog[i].ce);
}this.hbuf.write$I(prog[i].type);
}
});

Clazz.newMeth(C$, 'encodeMainHeader$', function () {
var i;
p$1.writeSOC.apply(this, []);
p$1.writeSIZ.apply(this, []);
var isEresUsed=(this.wp.getTerminateOnByte$().getDefault$()).equals$O("predict");
this.writeCOD$Z$I(true, 0);
for (i=0; i < this.nComp; i++) {
var isEresUsedinComp=(this.wp.getTerminateOnByte$().getCompDef$I(i)).equals$O("predict");
if (this.wp.getFilters$().isCompSpecified$I(i) || this.wp.getDecompositionLevel$().isCompSpecified$I(i) || this.wp.getBypass$().isCompSpecified$I(i) || this.wp.getResetMQ$().isCompSpecified$I(i) || this.wp.getMethodForMQTermination$().isCompSpecified$I(i) || this.wp.getCodeSegSymbol$().isCompSpecified$I(i) || this.wp.getCausalCXInfo$().isCompSpecified$I(i) || this.wp.getPrecinctPartition$().isCompSpecified$I(i) || this.wp.getCodeBlockSize$().isCompSpecified$I(i) || (isEresUsed != isEresUsedinComp )  ) this.writeCOC$Z$I$I(true, 0, i);
}
this.writeMainQCD$();
for (i=0; i < this.nComp; i++) {
if (this.dwt.getNomRangeBits$I(i) != this.defimgn || this.wp.getQuantizationType$().isCompSpecified$I(i)  || this.wp.getQuantizationStep$().isCompSpecified$I(i)  || this.wp.getDecompositionLevel$().isCompSpecified$I(i)  || this.wp.getGuardBits$().isCompSpecified$I(i) ) {
this.writeMainQCC$I(i);
}}
var prog=(this.wp.getProgressionType$().getDefault$());
if (prog.length > 1) this.writePOC$Z$I(true, 0);
p$1.writeCOM.apply(this, []);
});

Clazz.newMeth(C$, 'writeCOM', function () {
if (this.enJJ2KMarkSeg) {
var str="Created by: JJ2000 version 4.1";
var markSegLen;
this.hbuf.writeShort$I(-156);
markSegLen=2 + 2 + str.length$() ;
this.hbuf.writeShort$I(markSegLen);
this.hbuf.writeShort$I(1);
var chars=str.getBytes$();
for (var i=0; i < chars.length; i++) {
this.hbuf.writeByte$I(chars[i]);
}
}if (this.otherCOMMarkSeg != null ) {
var stk=Clazz.new_($I$(6,1).c$$S$S,[this.otherCOMMarkSeg, "#"]);
while (stk.hasMoreTokens$()){
var str=stk.nextToken$();
var markSegLen;
this.hbuf.writeShort$I(-156);
markSegLen=2 + 2 + str.length$() ;
this.hbuf.writeShort$I(markSegLen);
this.hbuf.writeShort$I(1);
var chars=str.getBytes$();
for (var i=0; i < chars.length; i++) {
this.hbuf.writeByte$I(chars[i]);
}
}
}}, p$1);

Clazz.newMeth(C$, 'writeRGN$I', function (tIdx) {
var i;
var markSegLen;
for (i=0; i < this.nComp; i++) {
this.hbuf.writeShort$I(-162);
markSegLen=4 + ((this.nComp < 257) ? 1 : 2);
this.hbuf.writeShort$I(markSegLen);
if (this.nComp < 257) this.hbuf.writeByte$I(i);
 else this.hbuf.writeShort$I(i);
this.hbuf.writeByte$I(0);
this.hbuf.writeByte$I(((this.wp.getROIs$().getTileCompVal$I$I(tIdx, i))).intValue$());
}
}, p$1);

Clazz.newMeth(C$, 'encodeTilePartHeader$I$I', function (tileLength, tileIdx) {
var tmp;
var numTiles=this.ralloc.getNumTiles$java_awt_Point(null);
this.ralloc.setTile$I$I(tileIdx % numTiles.x, (tileIdx/numTiles.x|0));
this.hbuf.writeByte$I(-1);
this.hbuf.writeByte$I(-112);
this.hbuf.writeByte$I(0);
this.hbuf.writeByte$I(10);
if (tileIdx > 65534) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Trying to write a tile-part header whose tile index is too high"]);
}this.hbuf.writeByte$I(tileIdx >> 8);
this.hbuf.writeByte$I(tileIdx);
tmp=tileLength;
this.hbuf.writeByte$I(tmp >> 24);
this.hbuf.writeByte$I(tmp >> 16);
this.hbuf.writeByte$I(tmp >> 8);
this.hbuf.writeByte$I(tmp);
this.hbuf.writeByte$I(0);
this.hbuf.writeByte$I(1);
var isEresUsed=(this.wp.getMethodForMQTermination$().getDefault$()).equals$O("predict");
var isEresUsedInTile=(this.wp.getMethodForMQTermination$().getTileDef$I(tileIdx)).equals$O("predict");
var tileCODwritten=false;
if (this.wp.getFilters$().isTileSpecified$I(tileIdx) || this.wp.getComponentTransformation$().isTileSpecified$I(tileIdx) || this.wp.getDecompositionLevel$().isTileSpecified$I(tileIdx) || this.wp.getBypass$().isTileSpecified$I(tileIdx) || this.wp.getResetMQ$().isTileSpecified$I(tileIdx) || this.wp.getTerminateOnByte$().isTileSpecified$I(tileIdx) || this.wp.getCausalCXInfo$().isTileSpecified$I(tileIdx) || this.wp.getPrecinctPartition$().isTileSpecified$I(tileIdx) || this.wp.getSOP$().isTileSpecified$I(tileIdx) || this.wp.getCodeSegSymbol$().isTileSpecified$I(tileIdx) || this.wp.getProgressionType$().isTileSpecified$I(tileIdx) || this.wp.getEPH$().isTileSpecified$I(tileIdx) || this.wp.getCodeBlockSize$().isTileSpecified$I(tileIdx) || (isEresUsed != isEresUsedInTile )  ) {
this.writeCOD$Z$I(false, tileIdx);
tileCODwritten=true;
}for (var c=0; c < this.nComp; c++) {
var isEresUsedInTileComp=(this.wp.getMethodForMQTermination$().getTileCompVal$I$I(tileIdx, c)).equals$O("predict");
if (this.wp.getFilters$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getDecompositionLevel$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getBypass$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getResetMQ$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getTerminateOnByte$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getCausalCXInfo$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getPrecinctPartition$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getCodeSegSymbol$().isTileCompSpecified$I$I(tileIdx, c) || this.wp.getCodeBlockSize$().isTileCompSpecified$I$I(tileIdx, c) || (isEresUsedInTileComp != isEresUsed )  ) {
this.writeCOC$Z$I$I(false, tileIdx, c);
} else if (tileCODwritten) {
if (this.wp.getFilters$().isCompSpecified$I(c) || this.wp.getDecompositionLevel$().isCompSpecified$I(c) || this.wp.getBypass$().isCompSpecified$I(c) || this.wp.getResetMQ$().isCompSpecified$I(c) || this.wp.getTerminateOnByte$().isCompSpecified$I(c) || this.wp.getCodeSegSymbol$().isCompSpecified$I(c) || this.wp.getCausalCXInfo$().isCompSpecified$I(c) || this.wp.getPrecinctPartition$().isCompSpecified$I(c) || this.wp.getCodeBlockSize$().isCompSpecified$I(c) || (this.wp.getMethodForMQTermination$().isCompSpecified$I(c) && (this.wp.getMethodForMQTermination$().getCompDef$I(c)).equals$O("predict") )  ) {
this.writeCOC$Z$I$I(false, tileIdx, c);
}}}
var tileQCDwritten=false;
if (this.wp.getQuantizationType$().isTileSpecified$I(tileIdx) || this.wp.getQuantizationStep$().isTileSpecified$I(tileIdx) || this.wp.getDecompositionLevel$().isTileSpecified$I(tileIdx) || this.wp.getGuardBits$().isTileSpecified$I(tileIdx)  ) {
this.writeTileQCD$I(tileIdx);
tileQCDwritten=true;
} else {
this.deftilenr=this.defimgn;
}for (var c=0; c < this.nComp; c++) {
if (this.dwt.getNomRangeBits$I(c) != this.deftilenr || this.wp.getQuantizationType$().isTileCompSpecified$I$I(tileIdx, c)  || this.wp.getQuantizationStep$().isTileCompSpecified$I$I(tileIdx, c)  || this.wp.getDecompositionLevel$().isTileCompSpecified$I$I(tileIdx, c)  || this.wp.getGuardBits$().isTileCompSpecified$I$I(tileIdx, c) ) {
this.writeTileQCC$I$I(tileIdx, c);
} else if (tileQCDwritten) {
if (this.wp.getQuantizationType$().isCompSpecified$I(c) || this.wp.getQuantizationStep$().isCompSpecified$I(c) || this.wp.getDecompositionLevel$().isCompSpecified$I(c) || this.wp.getGuardBits$().isCompSpecified$I(c)  ) {
this.writeTileQCC$I$I(tileIdx, c);
}}}
if (this.roiSc.useRoi$() && (!this.roiSc.getBlockAligned$()) ) p$1.writeRGN$I.apply(this, [tileIdx]);
var prog;
if (this.wp.getProgressionType$().isTileSpecified$I(tileIdx)) {
prog=(this.wp.getProgressionType$().getTileDef$I(tileIdx));
if (prog.length > 1) this.writePOC$Z$I(false, tileIdx);
}this.hbuf.writeByte$I(-1);
this.hbuf.writeByte$I(-109);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
