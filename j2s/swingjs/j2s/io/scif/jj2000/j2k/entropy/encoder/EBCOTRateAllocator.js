(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),p$1={},I$=[[0,'io.scif.jj2000.j2k.entropy.encoder.CBlkRateDistStats','java.awt.Point','io.scif.jj2000.j2k.codestream.writer.PktEncoder','StringBuffer','io.scif.jj2000.j2k.util.FacilityManager','io.scif.jj2000.j2k.entropy.encoder.EBCOTLayer','Error','io.scif.jj2000.j2k.util.MathUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EBCOTRateAllocator", null, 'io.scif.jj2000.j2k.entropy.encoder.PostCompRateAllocator');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOG2=Math.log(2);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['F',['maxSlope','minSlope'],'L',['initTime','buildTime','writeTime'],'O',['cblks','io.scif.jj2000.j2k.entropy.encoder.CBlkRateDistStats[][][][][]','truncIdxs','int[][][][][][]','numPrec','java.awt.Point[][][]','layers','io.scif.jj2000.j2k.entropy.encoder.EBCOTLayer[]','RDSlopesRates','int[]','pktEnc','io.scif.jj2000.j2k.codestream.writer.PktEncoder','lyrSpec','io.scif.jj2000.j2k.entropy.encoder.LayersInfo']]
,['D',['LOG2']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$io_scif_jj2000_j2k_entropy_encoder_LayersInfo$io_scif_jj2000_j2k_codestream_writer_CodestreamWriter$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, lyrs, writer, wp) {
;C$.superclazz.c$$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$I$io_scif_jj2000_j2k_codestream_writer_CodestreamWriter$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava.apply(this,[src, lyrs.getTotNumLayers$(), writer, wp]);C$.$init$.apply(this);
var minsbi;
var maxsbi;
var i;
var sb;
var sb2;
var ncblks=null;
if (false) {
this.initTime=0;
this.buildTime=0;
this.writeTime=0;
}this.lyrSpec=lyrs;
this.RDSlopesRates=Clazz.array(Integer.TYPE, [64]);
var nt=src.getNumTiles$();
var nc=this.getNumComps$();
this.cblks=Clazz.array($I$(1), [nt, nc, null, null, null]);
this.truncIdxs=Clazz.array(Integer.TYPE, [nt, this.numLayers, nc, null, null, null]);
var cblkPerSubband;
var mrl;
var l;
var s;
var tx0;
var ty0;
var tx1;
var ty1;
var tcx0;
var tcy0;
var tcx1;
var tcy1;
var trx0;
var try0;
var trx1;
var try1;
var xrsiz;
var yrsiz;
var tileI=null;
var nTiles=null;
var xsiz;
var ysiz;
var x0siz;
var y0siz;
var xt0siz;
var yt0siz;
var xtsiz;
var ytsiz;
var cb0x=src.getCbULX$();
var cb0y=src.getCbULY$();
src.setTile$I$I(0, 0);
for (var t=0; t < nt; t++) {
nTiles=src.getNumTiles$java_awt_Point(nTiles);
tileI=src.getTile$java_awt_Point(tileI);
x0siz=this.getImgULX$();
y0siz=this.getImgULY$();
xsiz=x0siz + this.getImgWidth$();
ysiz=y0siz + this.getImgHeight$();
xt0siz=src.getTilePartULX$();
yt0siz=src.getTilePartULY$();
xtsiz=src.getNomTileWidth$();
ytsiz=src.getNomTileHeight$();
tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
for (var c=0; c < nc; c++) {
sb=src.getAnSubbandTree$I$I(t, c);
mrl=sb.resLvl + 1;
if (this.numPrec == null ) {
this.numPrec=Clazz.array($I$(2), [nt, nc, null]);
}if (this.numPrec[t][c] == null ) {
this.numPrec[t][c]=Clazz.array($I$(2), [mrl]);
}xrsiz=src.getCompSubsX$I(c);
yrsiz=src.getCompSubsY$I(c);
tcx0=(Math.ceil(tx0 / (xrsiz))|0);
tcy0=(Math.ceil(ty0 / (yrsiz))|0);
tcx1=(Math.ceil(tx1 / (xrsiz))|0);
tcy1=(Math.ceil(ty1 / (yrsiz))|0);
this.cblks[t][c]=Clazz.array($I$(1), [mrl, null, null]);
for (l=0; l < this.numLayers; l++) {
this.truncIdxs[t][l][c]=Clazz.array(Integer.TYPE, [mrl, null, null]);
}
for (var r=0; r < mrl; r++) {
trx0=(Math.ceil(tcx0 / (1 << (mrl - 1 - r )))|0);
try0=(Math.ceil(tcy0 / (1 << (mrl - 1 - r )))|0);
trx1=(Math.ceil(tcx1 / (1 << (mrl - 1 - r )))|0);
try1=(Math.ceil(tcy1 / (1 << (mrl - 1 - r )))|0);
var twoppx=wp.getPrecinctPartition$().getPPX$I$I$I(t, c, r);
var twoppy=wp.getPrecinctPartition$().getPPY$I$I$I(t, c, r);
this.numPrec[t][c][r]=Clazz.new_($I$(2,1));
if (trx1 > trx0) {
this.numPrec[t][c][r].x=(Math.ceil((trx1 - cb0x) / twoppx)|0) - (Math.floor((trx0 - cb0x) / twoppx)|0);
} else {
this.numPrec[t][c][r].x=0;
}if (try1 > try0) {
this.numPrec[t][c][r].y=(Math.ceil((try1 - cb0y) / twoppy)|0) - (Math.floor((try0 - cb0y) / twoppy)|0);
} else {
this.numPrec[t][c][r].y=0;
}minsbi=(r == 0) ? 0 : 1;
maxsbi=(r == 0) ? 1 : 4;
this.cblks[t][c][r]=Clazz.array($I$(1), [maxsbi, null]);
for (l=0; l < this.numLayers; l++) {
this.truncIdxs[t][l][c][r]=Clazz.array(Integer.TYPE, [maxsbi, null]);
}
for (s=minsbi; s < maxsbi; s++) {
sb2=sb.getSubbandByIdx$I$I(r, s);
ncblks=sb2.numCb;
cblkPerSubband=ncblks.x * ncblks.y;
this.cblks[t][c][r][s]=Clazz.array($I$(1), [cblkPerSubband]);
for (l=0; l < this.numLayers; l++) {
this.truncIdxs[t][l][c][r][s]=Clazz.array(Integer.TYPE, [cblkPerSubband]);
for (i=0; i < cblkPerSubband; i++) {
this.truncIdxs[t][l][c][r][s][i]=-1;
}
}
}
}
}
if (t != nt - 1) {
src.nextTile$();
}}
this.pktEnc=Clazz.new_($I$(3,1).c$$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$java_awt_PointAAA,[src, wp, this.numPrec]);
}, 1);

Clazz.newMeth(C$, 'finalize$', function () {
if (false) {
var sb;
sb=Clazz.new_($I$(4,1).c$$S,["EBCOTRateAllocator wall clock times:\n"]);
sb.append$S("  initialization: ");
sb.append$J(this.initTime);
sb.append$S(" ms\n");
sb.append$S("  layer building: ");
sb.append$J(this.buildTime);
sb.append$S(" ms\n");
sb.append$S("  final writing:  ");
sb.append$J(this.writeTime);
sb.append$S(" ms");
$I$(5).getMsgLogger$().printmsg$I$S(1, sb.toString());
}C$.superclazz.prototype.finalize$.apply(this, []);
});

Clazz.newMeth(C$, 'runAndWrite$', function () {
p$1.buildAndWriteLayers.apply(this, []);
});

Clazz.newMeth(C$, 'initialize$', function () {
var n;
var i;
var l;
var ho;
var np;
var ls;
var basebytes;
var lastbytes;
var newbytes;
var nextbytes;
var loopnlyrs;
var minlsz;
var totenclength;
var maxpkt;
var numTiles=this.src.getNumTiles$();
var numComps=this.src.getNumComps$();
var numLvls;
var avgPktLen;
var stime=0;
p$1.getAllCodeBlocks.apply(this, []);
if (false) stime=System.currentTimeMillis$();
totenclength=this.RDSlopesRates[0];
for (var t=0; t < numTiles; t++) {
avgPktLen=2;
if ((this.wp.getSOP$().getTileDef$I(t)).equalsIgnoreCase$S("true")) {
avgPktLen+=6;
}if ((this.wp.getEPH$().getTileDef$I(t)).equalsIgnoreCase$S("true")) {
avgPktLen+=2;
}for (var c=0; c < numComps; c++) {
numLvls=this.src.getAnSubbandTree$I$I(t, c).resLvl + 1;
if (!this.src.precinctPartitionUsed$I$I(c, t)) {
totenclength+=this.numLayers * avgPktLen * numLvls ;
} else {
for (var rl=0; rl < numLvls; rl++) {
maxpkt=this.numPrec[t][c][rl].x * this.numPrec[t][c][rl].y;
totenclength+=this.numLayers * avgPktLen * maxpkt ;
}
}}
}
ho=this.headEnc.getLength$();
np=this.src.getImgWidth$() * this.src.getImgHeight$() / 8.0;
for (var t=0; t < numTiles; t++) {
this.headEnc.reset$();
this.headEnc.encodeTilePartHeader$I$I(0, t);
ho+=this.headEnc.getLength$();
}
this.layers=Clazz.array($I$(6), [this.numLayers]);
for (n=this.numLayers - 1; n >= 0; n--) {
this.layers[n]=Clazz.new_($I$(6,1));
}
minlsz=0;
for (var t=0; t < numTiles; t++) {
for (var c=0; c < numComps; c++) {
numLvls=this.src.getAnSubbandTree$I$I(t, c).resLvl + 1;
if (!this.src.precinctPartitionUsed$I$I(c, t)) {
minlsz+=32 * numLvls;
} else {
for (var rl=0; rl < numLvls; rl++) {
maxpkt=this.numPrec[t][c][rl].x * this.numPrec[t][c][rl].y;
minlsz+=32 * maxpkt;
}
}}
}
n=0;
i=0;
lastbytes=0;
while (n < this.numLayers - 1){
basebytes=Math.floor(this.lyrSpec.getTargetBitrate$I(i) * np);
if (i < this.lyrSpec.getNOptPoints$() - 1) {
nextbytes=((this.lyrSpec.getTargetBitrate$I(i + 1) * np)|0);
if (nextbytes > totenclength) nextbytes=totenclength;
} else {
nextbytes=1;
}loopnlyrs=this.lyrSpec.getExtraLayers$I(i) + 1;
ls=Math.exp(Math.log(nextbytes / basebytes) / loopnlyrs);
this.layers[n].optimize=true;
for (l=0; l < loopnlyrs; l++) {
newbytes=(basebytes|0) - lastbytes - ho ;
if (newbytes < minlsz) {
basebytes *= ls;
this.numLayers--;
continue;
}lastbytes=(basebytes|0) - ho;
this.layers[n].maxBytes=lastbytes;
basebytes *= ls;
n++;
}
i++;
}
n=this.numLayers - 2;
nextbytes=((this.lyrSpec.getTotBitrate$() * np)|0) - ho;
newbytes=nextbytes - ((n >= 0) ? this.layers[n].maxBytes : 0);
while (newbytes < minlsz){
if (this.numLayers == 1) {
if (newbytes <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Overall target bitrate too low, given the current bit stream header overhead"]);
}break;
}this.numLayers--;
n--;
newbytes=nextbytes - ((n >= 0) ? this.layers[n].maxBytes : 0);
}
n++;
this.layers[n].maxBytes=nextbytes;
this.layers[n].optimize=true;
var prog1;
var prog2;
prog1=this.wp.getProgressionType$().getDefault$();
var nValidProg=prog1.length;
for (var prg=0; prg < prog1.length; prg++) {
if (prog1[prg].lye > this.numLayers) {
prog1[prg].lye=this.numLayers;
}}
if (nValidProg == 0) throw Clazz.new_($I$(7,1).c$$S,["Unable to initialize rate allocator: No default progression type has been defined."]);
for (var t=0; t < numTiles; t++) {
if (this.wp.getProgressionType$().isTileSpecified$I(t)) {
prog1=this.wp.getProgressionType$().getTileDef$I(t);
nValidProg=prog1.length;
for (var prg=0; prg < prog1.length; prg++) {
if (prog1[prg].lye > this.numLayers) {
prog1[prg].lye=this.numLayers;
}}
if (nValidProg == 0) throw Clazz.new_($I$(7,1).c$$S,["Unable to initialize rate allocator: No default progression type has been defined."]);
}}
if (false) this.initTime+=System.currentTimeMillis$() - stime;
});

Clazz.newMeth(C$, 'getAllCodeBlocks', function () {
var numComps;
var numTiles;
var numBytes;
var c;
var r;
var t;
var s;
var sidx;
var k;
var slope;
var subb;
var ccb=null;
var ncblks=null;
var last_sidx;
var fslope;
var stime=0;
this.maxSlope=0.0;
this.minSlope=3.4028235E38;
numComps=this.src.getNumComps$();
numTiles=this.src.getNumTiles$();
var root;
var sb;
var cblkToEncode=0;
var nEncCblk=0;
var pw=$I$(5).getProgressWatch$();
this.src.setTile$I$I(0, 0);
for (t=0; t < numTiles; t++) {
nEncCblk=0;
cblkToEncode=0;
for (c=0; c < numComps; c++) {
root=this.src.getAnSubbandTree$I$I(t, c);
for (r=0; r <= root.resLvl; r++) {
if (r == 0) {
sb=root.getSubbandByIdx$I$I(0, 0);
if (sb != null ) cblkToEncode+=sb.numCb.x * sb.numCb.y;
} else {
sb=root.getSubbandByIdx$I$I(r, 1);
if (sb != null ) cblkToEncode+=sb.numCb.x * sb.numCb.y;
sb=root.getSubbandByIdx$I$I(r, 2);
if (sb != null ) cblkToEncode+=sb.numCb.x * sb.numCb.y;
sb=root.getSubbandByIdx$I$I(r, 3);
if (sb != null ) cblkToEncode+=sb.numCb.x * sb.numCb.y;
}}
}
if (pw != null ) {
pw.initProgressWatch$I$I$S(0, cblkToEncode, "Encoding tile " + t + "..." );
}for (c=0; c < numComps; c++) {
while ((ccb=this.src.getNextCodeBlock$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStats(c, ccb)) != null ){
if (false) stime=System.currentTimeMillis$();
if (pw != null ) {
nEncCblk++;
pw.updateProgressWatch$I$S(nEncCblk, null);
}subb=ccb.sb;
r=subb.resLvl;
s=subb.sbandIdx;
ncblks=subb.numCb;
last_sidx=-1;
for (k=ccb.nVldTrunc - 1; k >= 0; k--) {
fslope=ccb.truncSlopes[k];
if (fslope > this.maxSlope ) this.maxSlope=fslope;
if (fslope < this.minSlope ) this.minSlope=fslope;
sidx=C$.getLimitedSIndexFromSlope$F(fslope);
for (; sidx > last_sidx; sidx--) {
this.RDSlopesRates[sidx]+=ccb.truncRates[ccb.truncIdxs[k]];
}
last_sidx=C$.getLimitedSIndexFromSlope$F(fslope);
}
this.cblks[t][c][r][s][(ccb.m * ncblks.x) + ccb.n]=ccb;
ccb=null;
if (false) this.initTime+=System.currentTimeMillis$() - stime;
}
}
if (pw != null ) {
pw.terminateProgressWatch$();
}if (t < numTiles - 1) this.src.nextTile$();
}
}, p$1);

Clazz.newMeth(C$, 'buildAndWriteLayers', function () {
var nPrec=0;
var maxBytes;
var actualBytes;
var rdThreshold;
var sb;
var threshold;
var hBuff=null;
var bBuff=null;
var tileLengths;
var tmp;
var sopUsed;
var ephUsed;
var nc=this.src.getNumComps$();
var nt=this.src.getNumTiles$();
var mrl;
var stime=0;
if (false) stime=System.currentTimeMillis$();
rdThreshold=this.maxSlope;
tileLengths=Clazz.array(Integer.TYPE, [nt]);
actualBytes=0;
for (var l=0; l < this.numLayers; l++) {
maxBytes=this.layers[l].maxBytes;
if (this.layers[l].optimize) {
rdThreshold=p$1.optimizeBitstreamLayer$I$F$I$I.apply(this, [l, rdThreshold, maxBytes, actualBytes]);
} else {
if (l <= 0 || l >= this.numLayers - 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The first and the last layer thresholds must be optimized"]);
}rdThreshold=p$1.estimateLayerThreshold$I$io_scif_jj2000_j2k_entropy_encoder_EBCOTLayer.apply(this, [maxBytes, this.layers[l - 1]]);
}for (var t=0; t < nt; t++) {
if (l == 0) {
this.headEnc.reset$();
this.headEnc.encodeTilePartHeader$I$I(0, t);
tileLengths[t]+=this.headEnc.getLength$();
}for (var c=0; c < nc; c++) {
sopUsed=(this.wp.getSOP$().getTileDef$I(t)).equalsIgnoreCase$S("true");
ephUsed=(this.wp.getEPH$().getTileDef$I(t)).equalsIgnoreCase$S("true");
sb=this.src.getAnSubbandTree$I$I(t, c);
mrl=sb.resLvl + 1;
while (sb.subb_LL != null ){
sb=sb.subb_LL;
}
for (var r=0; r < mrl; r++) {
nPrec=this.numPrec[t][c][r].x * this.numPrec[t][c][r].y;
for (var p=0; p < nPrec; p++) {
p$1.findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I.apply(this, [l, c, r, t, sb, rdThreshold, p]);
hBuff=this.pktEnc.encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I(l + 1, c, r, t, this.cblks[t][c][r], this.truncIdxs[t][l][c][r], hBuff, bBuff, p);
if (this.pktEnc.isPacketWritable$()) {
tmp=this.bsWriter.writePacketHead$BA$I$Z$Z$Z(hBuff.getBuffer$(), hBuff.getLength$(), true, sopUsed, ephUsed);
tmp+=this.bsWriter.writePacketBody$BA$I$Z$Z$I(this.pktEnc.getLastBodyBuf$(), this.pktEnc.getLastBodyLen$(), true, this.pktEnc.isROIinPkt$(), this.pktEnc.getROILen$());
actualBytes+=tmp;
tileLengths[t]+=tmp;
}}
sb=sb.parent;
}
}
}
this.layers[l].rdThreshold=rdThreshold;
this.layers[l].actualBytes=actualBytes;
}
if (false) this.buildTime+=System.currentTimeMillis$() - stime;
if (false) stime=System.currentTimeMillis$();
this.pktEnc.reset$();
var prog;
var cs;
var ce;
var rs;
var re;
var lye;
var mrlc=Clazz.array(Integer.TYPE, [nc]);
for (var t=0; t < nt; t++) {
var lysA;
var lys=Clazz.array(Integer.TYPE, [nc, null]);
for (var c=0; c < nc; c++) {
mrlc[c]=this.src.getAnSubbandTree$I$I(t, c).resLvl;
lys[c]=Clazz.array(Integer.TYPE, [mrlc[c] + 1]);
}
this.headEnc.reset$();
this.headEnc.encodeTilePartHeader$I$I(tileLengths[t], t);
this.bsWriter.commitBitstreamHeader$io_scif_jj2000_j2k_codestream_writer_HeaderEncoder(this.headEnc);
prog=this.wp.getProgressionType$().getTileDef$I(t);
for (var prg=0; prg < prog.length; prg++) {
lye=prog[prg].lye;
cs=prog[prg].cs;
ce=prog[prg].ce;
rs=prog[prg].rs;
re=prog[prg].re;
switch (prog[prg].type) {
case 1:
this.writeResLyCompPos$I$I$I$I$I$IAA$I(t, rs, re, cs, ce, lys, lye);
break;
case 0:
this.writeLyResCompPos$I$I$I$I$I$IAA$I(t, rs, re, cs, ce, lys, lye);
break;
case 3:
this.writePosCompResLy$I$I$I$I$I$IAA$I(t, rs, re, cs, ce, lys, lye);
break;
case 4:
this.writeCompPosResLy$I$I$I$I$I$IAA$I(t, rs, re, cs, ce, lys, lye);
break;
case 2:
this.writeResPosCompLy$I$I$I$I$I$IAA$I(t, rs, re, cs, ce, lys, lye);
break;
default:
throw Clazz.new_($I$(7,1).c$$S,["Unsupported bit stream progression type"]);
}
for (var c=cs; c < ce; c++) for (var r=rs; r < re; r++) {
if (r > mrlc[c]) continue;
lys[c][r]=lye;
}

}
}
if (false) this.writeTime+=System.currentTimeMillis$() - stime;
}, p$1);

Clazz.newMeth(C$, 'writeResLyCompPos$I$I$I$I$I$IAA$I', function (t, rs, re, cs, ce, lys, lye) {
var sopUsed;
var ephUsed;
var nc=this.src.getNumComps$();
var mrl=Clazz.array(Integer.TYPE, [nc]);
var sb;
var threshold;
var hBuff=null;
var bBuff=null;
var nPrec=0;
var maxResLvl=0;
for (var c=0; c < nc; c++) {
mrl[c]=this.src.getAnSubbandTree$I$I(t, c).resLvl;
if (mrl[c] > maxResLvl) maxResLvl=mrl[c];
}
var minlys;
for (var r=rs; r < re; r++) {
if (r > maxResLvl) continue;
minlys=100000;
for (var c=cs; c < ce; c++) {
if (r < lys[c].length && lys[c][r] < minlys ) {
minlys=lys[c][r];
}}
for (var l=minlys; l < lye; l++) {
for (var c=cs; c < ce; c++) {
if (r >= lys[c].length) continue;
if (l < lys[c][r]) continue;
if (r > mrl[c]) continue;
nPrec=this.numPrec[t][c][r].x * this.numPrec[t][c][r].y;
for (var p=0; p < nPrec; p++) {
sopUsed=(this.wp.getSOP$().getTileDef$I(t)).equals$O("true");
ephUsed=(this.wp.getEPH$().getTileDef$I(t)).equals$O("true");
sb=this.src.getAnSubbandTree$I$I(t, c);
for (var i=mrl[c]; i > r; i--) {
sb=sb.subb_LL;
}
threshold=this.layers[l].rdThreshold;
p$1.findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I.apply(this, [l, c, r, t, sb, threshold, p]);
hBuff=this.pktEnc.encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I(l + 1, c, r, t, this.cblks[t][c][r], this.truncIdxs[t][l][c][r], hBuff, bBuff, p);
if (this.pktEnc.isPacketWritable$()) {
this.bsWriter.writePacketHead$BA$I$Z$Z$Z(hBuff.getBuffer$(), hBuff.getLength$(), false, sopUsed, ephUsed);
this.bsWriter.writePacketBody$BA$I$Z$Z$I(this.pktEnc.getLastBodyBuf$(), this.pktEnc.getLastBodyLen$(), false, this.pktEnc.isROIinPkt$(), this.pktEnc.getROILen$());
}}
}
}
}
});

Clazz.newMeth(C$, 'writeLyResCompPos$I$I$I$I$I$IAA$I', function (t, rs, re, cs, ce, lys, lye) {
var sopUsed;
var ephUsed;
var nc=this.src.getNumComps$();
var mrl;
var sb;
var threshold;
var hBuff=null;
var bBuff=null;
var nPrec=0;
var minlys=100000;
for (var c=cs; c < ce; c++) {
for (var r=0; r < lys.length; r++) {
if (lys[c] != null  && r < lys[c].length  && lys[c][r] < minlys ) {
minlys=lys[c][r];
}}
}
for (var l=minlys; l < lye; l++) {
for (var r=rs; r < re; r++) {
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
if (r > mrl) continue;
if (r >= lys[c].length) continue;
if (l < lys[c][r]) continue;
nPrec=this.numPrec[t][c][r].x * this.numPrec[t][c][r].y;
for (var p=0; p < nPrec; p++) {
sopUsed=(this.wp.getSOP$().getTileDef$I(t)).equals$O("true");
ephUsed=(this.wp.getEPH$().getTileDef$I(t)).equals$O("true");
sb=this.src.getAnSubbandTree$I$I(t, c);
for (var i=mrl; i > r; i--) {
sb=sb.subb_LL;
}
threshold=this.layers[l].rdThreshold;
p$1.findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I.apply(this, [l, c, r, t, sb, threshold, p]);
hBuff=this.pktEnc.encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I(l + 1, c, r, t, this.cblks[t][c][r], this.truncIdxs[t][l][c][r], hBuff, bBuff, p);
if (this.pktEnc.isPacketWritable$()) {
this.bsWriter.writePacketHead$BA$I$Z$Z$Z(hBuff.getBuffer$(), hBuff.getLength$(), false, sopUsed, ephUsed);
this.bsWriter.writePacketBody$BA$I$Z$Z$I(this.pktEnc.getLastBodyBuf$(), this.pktEnc.getLastBodyLen$(), false, this.pktEnc.isROIinPkt$(), this.pktEnc.getROILen$());
}}
}
}
}
});

Clazz.newMeth(C$, 'writePosCompResLy$I$I$I$I$I$IAA$I', function (t, rs, re, cs, ce, lys, lye) {
var sopUsed;
var ephUsed;
var nc=this.src.getNumComps$();
var mrl;
var sb;
var threshold;
var hBuff=null;
var bBuff=null;
var nTiles=this.src.getNumTiles$java_awt_Point(null);
var tileI=this.src.getTile$java_awt_Point(null);
var x0siz=this.src.getImgULX$();
var y0siz=this.src.getImgULY$();
var xsiz=x0siz + this.src.getImgWidth$();
var ysiz=y0siz + this.src.getImgHeight$();
var xt0siz=this.src.getTilePartULX$();
var yt0siz=this.src.getTilePartULY$();
var xtsiz=this.src.getNomTileWidth$();
var ytsiz=this.src.getNomTileHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var prec;
var p;
var gcd_x=0;
var gcd_y=0;
var nPrec=0;
var nextPrec=Clazz.array(Integer.TYPE, [ce, null]);
var minlys=100000;
var minx=tx1;
var miny=ty1;
var maxx=tx0;
var maxy=ty0;
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
nextPrec[c]=Clazz.array(Integer.TYPE, [mrl + 1]);
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
if (r < lys[c].length && lys[c][r] < minlys ) {
minlys=lys[c][r];
}p=this.numPrec[t][c][r].y * this.numPrec[t][c][r].x - 1;
for (; p >= 0; p--) {
prec=this.pktEnc.getPrecInfo$I$I$I$I(t, c, r, p);
if (prec.rgulx != tx0) {
if (prec.rgulx < minx) minx=prec.rgulx;
if (prec.rgulx > maxx) maxx=prec.rgulx;
}if (prec.rguly != ty0) {
if (prec.rguly < miny) miny=prec.rguly;
if (prec.rguly > maxy) maxy=prec.rguly;
}if (nPrec == 0) {
gcd_x=prec.rgw;
gcd_y=prec.rgh;
} else {
gcd_x=$I$(8).gcd$I$I(gcd_x, prec.rgw);
gcd_y=$I$(8).gcd$I$I(gcd_y, prec.rgh);
}nPrec++;
}
}
}
if (nPrec == 0) {
throw Clazz.new_($I$(7,1).c$$S,["Image cannot have no precinct"]);
}var pyend=((maxy - miny)/gcd_y|0) + 1;
var pxend=((maxx - minx)/gcd_x|0) + 1;
var y=ty0;
var x=tx0;
for (var py=0; py <= pyend; py++) {
for (var px=0; px <= pxend; px++) {
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
if (nextPrec[c][r] >= this.numPrec[t][c][r].x * this.numPrec[t][c][r].y) {
continue;
}prec=this.pktEnc.getPrecInfo$I$I$I$I(t, c, r, nextPrec[c][r]);
if ((prec.rgulx != x) || (prec.rguly != y) ) {
continue;
}for (var l=minlys; l < lye; l++) {
if (r >= lys[c].length) continue;
if (l < lys[c][r]) continue;
sopUsed=(this.wp.getSOP$().getTileDef$I(t)).equals$O("true");
ephUsed=(this.wp.getEPH$().getTileDef$I(t)).equals$O("true");
sb=this.src.getAnSubbandTree$I$I(t, c);
for (var i=mrl; i > r; i--) {
sb=sb.subb_LL;
}
threshold=this.layers[l].rdThreshold;
p$1.findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I.apply(this, [l, c, r, t, sb, threshold, nextPrec[c][r]]);
hBuff=this.pktEnc.encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I(l + 1, c, r, t, this.cblks[t][c][r], this.truncIdxs[t][l][c][r], hBuff, bBuff, nextPrec[c][r]);
if (this.pktEnc.isPacketWritable$()) {
this.bsWriter.writePacketHead$BA$I$Z$Z$Z(hBuff.getBuffer$(), hBuff.getLength$(), false, sopUsed, ephUsed);
this.bsWriter.writePacketBody$BA$I$Z$Z$I(this.pktEnc.getLastBodyBuf$(), this.pktEnc.getLastBodyLen$(), false, this.pktEnc.isROIinPkt$(), this.pktEnc.getROILen$());
}}
nextPrec[c][r]++;
}
}
if (px != pxend) {
x=minx + px * gcd_x;
} else {
x=tx0;
}}
if (py != pyend) {
y=miny + py * gcd_y;
} else {
y=ty0;
}}
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
if (nextPrec[c][r] < this.numPrec[t][c][r].x * this.numPrec[t][c][r].y - 1) {
throw Clazz.new_($I$(7,1).c$$S,["JJ2000 bug: One precinct at least has not been written for resolution level " + r + " of component " + c + " in tile " + t + "." ]);
}}
}
});

Clazz.newMeth(C$, 'writeCompPosResLy$I$I$I$I$I$IAA$I', function (t, rs, re, cs, ce, lys, lye) {
var sopUsed;
var ephUsed;
var nc=this.src.getNumComps$();
var mrl;
var sb;
var threshold;
var hBuff=null;
var bBuff=null;
var nTiles=this.src.getNumTiles$java_awt_Point(null);
var tileI=this.src.getTile$java_awt_Point(null);
var x0siz=this.src.getImgULX$();
var y0siz=this.src.getImgULY$();
var xsiz=x0siz + this.src.getImgWidth$();
var ysiz=y0siz + this.src.getImgHeight$();
var xt0siz=this.src.getTilePartULX$();
var yt0siz=this.src.getTilePartULY$();
var xtsiz=this.src.getNomTileWidth$();
var ytsiz=this.src.getNomTileHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var prec;
var p;
var gcd_x=0;
var gcd_y=0;
var nPrec=0;
var nextPrec=Clazz.array(Integer.TYPE, [ce, null]);
var minlys=100000;
var minx=tx1;
var miny=ty1;
var maxx=tx0;
var maxy=ty0;
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
nextPrec[c]=Clazz.array(Integer.TYPE, [mrl + 1]);
if (r < lys[c].length && lys[c][r] < minlys ) {
minlys=lys[c][r];
}p=this.numPrec[t][c][r].y * this.numPrec[t][c][r].x - 1;
for (; p >= 0; p--) {
prec=this.pktEnc.getPrecInfo$I$I$I$I(t, c, r, p);
if (prec.rgulx != tx0) {
if (prec.rgulx < minx) minx=prec.rgulx;
if (prec.rgulx > maxx) maxx=prec.rgulx;
}if (prec.rguly != ty0) {
if (prec.rguly < miny) miny=prec.rguly;
if (prec.rguly > maxy) maxy=prec.rguly;
}if (nPrec == 0) {
gcd_x=prec.rgw;
gcd_y=prec.rgh;
} else {
gcd_x=$I$(8).gcd$I$I(gcd_x, prec.rgw);
gcd_y=$I$(8).gcd$I$I(gcd_y, prec.rgh);
}nPrec++;
}
}
}
if (nPrec == 0) {
throw Clazz.new_($I$(7,1).c$$S,["Image cannot have no precinct"]);
}var pyend=((maxy - miny)/gcd_y|0) + 1;
var pxend=((maxx - minx)/gcd_x|0) + 1;
var y;
var x;
for (var c=cs; c < ce; c++) {
y=ty0;
x=tx0;
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
for (var py=0; py <= pyend; py++) {
for (var px=0; px <= pxend; px++) {
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
if (nextPrec[c][r] >= this.numPrec[t][c][r].x * this.numPrec[t][c][r].y) {
continue;
}prec=this.pktEnc.getPrecInfo$I$I$I$I(t, c, r, nextPrec[c][r]);
if ((prec.rgulx != x) || (prec.rguly != y) ) {
continue;
}for (var l=minlys; l < lye; l++) {
if (r >= lys[c].length) continue;
if (l < lys[c][r]) continue;
sopUsed=(this.wp.getSOP$().getTileDef$I(t)).equals$O("true");
ephUsed=(this.wp.getEPH$().getTileDef$I(t)).equals$O("true");
sb=this.src.getAnSubbandTree$I$I(t, c);
for (var i=mrl; i > r; i--) {
sb=sb.subb_LL;
}
threshold=this.layers[l].rdThreshold;
p$1.findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I.apply(this, [l, c, r, t, sb, threshold, nextPrec[c][r]]);
hBuff=this.pktEnc.encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I(l + 1, c, r, t, this.cblks[t][c][r], this.truncIdxs[t][l][c][r], hBuff, bBuff, nextPrec[c][r]);
if (this.pktEnc.isPacketWritable$()) {
this.bsWriter.writePacketHead$BA$I$Z$Z$Z(hBuff.getBuffer$(), hBuff.getLength$(), false, sopUsed, ephUsed);
this.bsWriter.writePacketBody$BA$I$Z$Z$I(this.pktEnc.getLastBodyBuf$(), this.pktEnc.getLastBodyLen$(), false, this.pktEnc.isROIinPkt$(), this.pktEnc.getROILen$());
}}
nextPrec[c][r]++;
}
if (px != pxend) {
x=minx + px * gcd_x;
} else {
x=tx0;
}}
if (py != pyend) {
y=miny + py * gcd_y;
} else {
y=ty0;
}}
}
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
if (nextPrec[c][r] < this.numPrec[t][c][r].x * this.numPrec[t][c][r].y - 1) {
throw Clazz.new_($I$(7,1).c$$S,["JJ2000 bug: One precinct at least has not been written for resolution level " + r + " of component " + c + " in tile " + t + "." ]);
}}
}
});

Clazz.newMeth(C$, 'writeResPosCompLy$I$I$I$I$I$IAA$I', function (t, rs, re, cs, ce, lys, lye) {
var sopUsed;
var ephUsed;
var nc=this.src.getNumComps$();
var mrl;
var sb;
var threshold;
var hBuff=null;
var bBuff=null;
var nTiles=this.src.getNumTiles$java_awt_Point(null);
var tileI=this.src.getTile$java_awt_Point(null);
var x0siz=this.src.getImgULX$();
var y0siz=this.src.getImgULY$();
var xsiz=x0siz + this.src.getImgWidth$();
var ysiz=y0siz + this.src.getImgHeight$();
var xt0siz=this.src.getTilePartULX$();
var yt0siz=this.src.getTilePartULY$();
var xtsiz=this.src.getNomTileWidth$();
var ytsiz=this.src.getNomTileHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var prec;
var p;
var gcd_x=0;
var gcd_y=0;
var nPrec=0;
var nextPrec=Clazz.array(Integer.TYPE, [ce, null]);
var minlys=100000;
var minx=tx1;
var miny=ty1;
var maxx=tx0;
var maxy=ty0;
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
nextPrec[c]=Clazz.array(Integer.TYPE, [mrl + 1]);
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
if (r < lys[c].length && lys[c][r] < minlys ) {
minlys=lys[c][r];
}p=this.numPrec[t][c][r].y * this.numPrec[t][c][r].x - 1;
for (; p >= 0; p--) {
prec=this.pktEnc.getPrecInfo$I$I$I$I(t, c, r, p);
if (prec.rgulx != tx0) {
if (prec.rgulx < minx) minx=prec.rgulx;
if (prec.rgulx > maxx) maxx=prec.rgulx;
}if (prec.rguly != ty0) {
if (prec.rguly < miny) miny=prec.rguly;
if (prec.rguly > maxy) maxy=prec.rguly;
}if (nPrec == 0) {
gcd_x=prec.rgw;
gcd_y=prec.rgh;
} else {
gcd_x=$I$(8).gcd$I$I(gcd_x, prec.rgw);
gcd_y=$I$(8).gcd$I$I(gcd_y, prec.rgh);
}nPrec++;
}
}
}
if (nPrec == 0) {
throw Clazz.new_($I$(7,1).c$$S,["Image cannot have no precinct"]);
}var pyend=((maxy - miny)/gcd_y|0) + 1;
var pxend=((maxx - minx)/gcd_x|0) + 1;
var x;
var y;
for (var r=rs; r < re; r++) {
y=ty0;
x=tx0;
for (var py=0; py <= pyend; py++) {
for (var px=0; px <= pxend; px++) {
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
if (r > mrl) continue;
if (nextPrec[c][r] >= this.numPrec[t][c][r].x * this.numPrec[t][c][r].y) {
continue;
}prec=this.pktEnc.getPrecInfo$I$I$I$I(t, c, r, nextPrec[c][r]);
if ((prec.rgulx != x) || (prec.rguly != y) ) {
continue;
}for (var l=minlys; l < lye; l++) {
if (r >= lys[c].length) continue;
if (l < lys[c][r]) continue;
sopUsed=(this.wp.getSOP$().getTileDef$I(t)).equals$O("true");
ephUsed=(this.wp.getEPH$().getTileDef$I(t)).equals$O("true");
sb=this.src.getAnSubbandTree$I$I(t, c);
for (var i=mrl; i > r; i--) {
sb=sb.subb_LL;
}
threshold=this.layers[l].rdThreshold;
p$1.findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I.apply(this, [l, c, r, t, sb, threshold, nextPrec[c][r]]);
hBuff=this.pktEnc.encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I(l + 1, c, r, t, this.cblks[t][c][r], this.truncIdxs[t][l][c][r], hBuff, bBuff, nextPrec[c][r]);
if (this.pktEnc.isPacketWritable$()) {
this.bsWriter.writePacketHead$BA$I$Z$Z$Z(hBuff.getBuffer$(), hBuff.getLength$(), false, sopUsed, ephUsed);
this.bsWriter.writePacketBody$BA$I$Z$Z$I(this.pktEnc.getLastBodyBuf$(), this.pktEnc.getLastBodyLen$(), false, this.pktEnc.isROIinPkt$(), this.pktEnc.getROILen$());
}}
nextPrec[c][r]++;
}
if (px != pxend) {
x=minx + px * gcd_x;
} else {
x=tx0;
}}
if (py != pyend) {
y=miny + py * gcd_y;
} else {
y=ty0;
}}
}
for (var c=cs; c < ce; c++) {
mrl=this.src.getAnSubbandTree$I$I(t, c).resLvl;
for (var r=rs; r < re; r++) {
if (r > mrl) continue;
if (nextPrec[c][r] < this.numPrec[t][c][r].x * this.numPrec[t][c][r].y - 1) {
throw Clazz.new_($I$(7,1).c$$S,["JJ2000 bug: One precinct at least has not been written for resolution level " + r + " of component " + c + " in tile " + t + "." ]);
}}
}
});

Clazz.newMeth(C$, 'optimizeBitstreamLayer$I$F$I$I', function (layerIdx, fmaxt, maxBytes, prevBytes) {
var nt;
var nc;
var numLvls;
var actualBytes;
var fmint;
var ft;
var sb;
var hBuff;
var bBuff;
var sidx;
var sopUsed;
var ephUsed;
var precinctIdx;
var nPrec;
this.pktEnc.save$();
nt=this.src.getNumTiles$();
nc=this.src.getNumComps$();
hBuff=null;
bBuff=null;
for (sidx=63; sidx > 0; sidx--) {
if (this.RDSlopesRates[sidx] >= maxBytes) {
break;
}}
fmint=C$.getSlopeFromSIndex$I(sidx);
if (fmint >= fmaxt ) {
sidx--;
fmint=C$.getSlopeFromSIndex$I(sidx);
}if (sidx <= 0) fmint=0;
ft=(fmaxt + fmint) / 2.0;
if (ft <= fmint ) ft=fmaxt;
do {
actualBytes=prevBytes;
this.src.setTile$I$I(0, 0);
for (var t=0; t < nt; t++) {
for (var c=0; c < nc; c++) {
sopUsed=(this.wp.getSOP$().getTileDef$I(t)).equalsIgnoreCase$S("true");
ephUsed=(this.wp.getEPH$().getTileDef$I(t)).equalsIgnoreCase$S("true");
sb=this.src.getAnSubbandTree$I$I(t, c);
numLvls=sb.resLvl + 1;
sb=sb.getSubbandByIdx$I$I(0, 0);
for (var r=0; r < numLvls; r++) {
nPrec=this.numPrec[t][c][r].x * this.numPrec[t][c][r].y;
for (var p=0; p < nPrec; p++) {
p$1.findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I.apply(this, [layerIdx, c, r, t, sb, ft, p]);
hBuff=this.pktEnc.encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I(layerIdx + 1, c, r, t, this.cblks[t][c][r], this.truncIdxs[t][layerIdx][c][r], hBuff, bBuff, p);
if (this.pktEnc.isPacketWritable$()) {
bBuff=this.pktEnc.getLastBodyBuf$();
actualBytes+=this.bsWriter.writePacketHead$BA$I$Z$Z$Z(hBuff.getBuffer$(), hBuff.getLength$(), true, sopUsed, ephUsed);
actualBytes+=this.bsWriter.writePacketBody$BA$I$Z$Z$I(bBuff, this.pktEnc.getLastBodyLen$(), true, this.pktEnc.isROIinPkt$(), this.pktEnc.getROILen$());
}}
sb=sb.parent;
}
}
}
if (actualBytes > maxBytes) {
fmint=ft;
} else {
fmaxt=ft;
}ft=(fmaxt + fmint) / 2.0;
if (ft <= fmint ) ft=fmaxt;
this.pktEnc.restore$();
} while (ft < fmaxt * (0.9999)  && ft < (fmaxt - 1.0E-10)  );
if (ft <= 1.0E-10 ) {
ft=0.0;
} else {
ft=fmaxt;
}return ft;
}, p$1);

Clazz.newMeth(C$, 'estimateLayerThreshold$I$io_scif_jj2000_j2k_entropy_encoder_EBCOTLayer', function (targetBytes, lastLayer) {
var log_sl1;
var log_sl2;
var log_len1;
var log_len2;
var log_isl;
var log_ilen;
var log_ab;
var sidx;
var log_off;
var tlen;
var lthresh;
var eth;
lthresh=lastLayer.rdThreshold;
if (lthresh > this.maxSlope ) lthresh=this.maxSlope;
if (lthresh < 1.0E-10 ) return 0.0;
sidx=C$.getLimitedSIndexFromSlope$F(lthresh);
if (sidx >= 63) sidx=62;
if (this.RDSlopesRates[sidx + 1] == 0) {
log_len1=Math.log((this.RDSlopesRates[sidx] << 1) + 1);
log_len2=Math.log(this.RDSlopesRates[sidx] + 1);
log_ab=Math.log(lastLayer.actualBytes + this.RDSlopesRates[sidx] + 1 );
} else {
log_len1=Math.log(this.RDSlopesRates[sidx]);
log_len2=Math.log(this.RDSlopesRates[sidx + 1]);
log_ab=Math.log(lastLayer.actualBytes);
}log_sl1=Math.log(C$.getSlopeFromSIndex$I(sidx));
log_sl2=Math.log(C$.getSlopeFromSIndex$I(sidx + 1));
log_isl=Math.log(lthresh);
log_ilen=log_len1 + (log_isl - log_sl1) * (log_len1 - log_len2) / (log_sl1 - log_sl2);
log_off=log_ab - log_ilen;
if (log_off < 0 ) log_off=0.0;
tlen=((targetBytes / Math.exp(log_off))|0);
for (sidx=63; sidx >= 0; sidx--) {
if (this.RDSlopesRates[sidx] >= tlen) break;
}
sidx++;
if (sidx >= 64) sidx=63;
if (sidx <= 0) sidx=1;
if (this.RDSlopesRates[sidx] == 0) {
log_len1=Math.log(this.RDSlopesRates[sidx - 1] + 1);
log_len2=Math.log((this.RDSlopesRates[sidx - 1] << 1) + 1);
log_ilen=Math.log(tlen + this.RDSlopesRates[sidx - 1] + 1 );
} else {
log_len1=Math.log(this.RDSlopesRates[sidx]);
log_len2=Math.log(this.RDSlopesRates[sidx - 1]);
log_ilen=Math.log(tlen);
}log_sl1=Math.log(C$.getSlopeFromSIndex$I(sidx));
log_sl2=Math.log(C$.getSlopeFromSIndex$I(sidx - 1));
log_isl=log_sl1 + (log_ilen - log_len1) * (log_sl1 - log_sl2) / (log_len1 - log_len2);
eth=Math.exp(log_isl);
if (eth > lthresh ) eth=lthresh;
if (eth < 1.0E-10 ) eth=0.0;
return eth;
}, p$1);

Clazz.newMeth(C$, 'findTruncIndices$I$I$I$I$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$F$I', function (layerIdx, compIdx, lvlIdx, tileIdx, subb, fthresh, precinctIdx) {
var minsbi;
var maxsbi;
var b;
var bIdx;
var n;
var ncblks=null;
var sb;
var cur_cblk;
var prec=this.pktEnc.getPrecInfo$I$I$I$I(tileIdx, compIdx, lvlIdx, precinctIdx);
var cbCoord;
sb=subb;
while (sb.subb_HH != null ){
sb=sb.subb_HH;
}
minsbi=(lvlIdx == 0) ? 0 : 1;
maxsbi=(lvlIdx == 0) ? 1 : 4;
var yend;
var xend;
sb=subb.getSubbandByIdx$I$I(lvlIdx, minsbi);
for (var s=minsbi; s < maxsbi; s++) {
yend=(prec.cblk[s] != null ) ? prec.cblk[s].length : 0;
for (var y=0; y < yend; y++) {
xend=(prec.cblk[s][y] != null ) ? prec.cblk[s][y].length : 0;
for (var x=0; x < xend; x++) {
cbCoord=prec.cblk[s][y][x].idx;
b=cbCoord.x + cbCoord.y * sb.numCb.x;
cur_cblk=this.cblks[tileIdx][compIdx][lvlIdx][s][b];
for (n=0; n < cur_cblk.nVldTrunc; n++) {
if (cur_cblk.truncSlopes[n] < fthresh ) {
break;
} else {
continue;
}}
this.truncIdxs[tileIdx][layerIdx][compIdx][lvlIdx][s][b]=n - 1;
}
}
sb=sb.nextSubband$();
}
}, p$1);

Clazz.newMeth(C$, 'getLimitedSIndexFromSlope$F', function (slope) {
var idx;
idx=(Math.floor(Math.log(slope) / C$.LOG2)|0) + 24;
if (idx < 0) {
return 0;
} else if (idx >= 64) {
return 63;
} else {
return idx;
}}, 1);

Clazz.newMeth(C$, 'getSlopeFromSIndex$I', function (index) {
return Math.pow(2, (index - 24));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
