(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.writer"),p$1={},I$=[[0,'io.scif.jj2000.j2k.codestream.writer.TagTreeEncoder','io.scif.jj2000.j2k.codestream.PrecInfo','io.scif.jj2000.j2k.util.ArrayUtil','io.scif.jj2000.j2k.codestream.CBlkCoordInfo','io.scif.jj2000.j2k.codestream.writer.BitOutputBuffer','io.scif.jj2000.j2k.util.MathUtil','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PktEncoder");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Psop", "[<tile idx>] true|false[ [<tile idx>] true|false ...]", "Specifies whether start of packet (SOP) markers should be used. \'true\' enables, \'false\' disables it.", "false"]), Clazz.array(String, -1, ["Peph", "[<tile idx>] true|false[ [<tile  idx>] true|false ...]", "Specifies whether end of packet header (EPH) markers should be  used. \'true\' enables, \'false\' disables it.", "false"])]);
}

Clazz.newMeth(C$, '$init$', function () {
this.roiInPkt=false;
this.roiLen=0;
}, 1);

C$.$fields$=[['Z',['saved','roiInPkt','packetWritable'],'I',['lblen','roiLen'],'O',['infoSrc','io.scif.jj2000.j2k.entropy.encoder.CodedCBlkDataSrcEnc','wp','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriteParamJava','ttIncl','io.scif.jj2000.j2k.codestream.writer.TagTreeEncoder[][][][][]','+ttMaxBP','lblock','int[][][][][]','+prevtIdxs','+bak_lblock','+bak_prevtIdxs','lbbuf','byte[]','ppinfo','io.scif.jj2000.j2k.codestream.PrecInfo[][][][]']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_encoder_CodedCBlkDataSrcEnc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$java_awt_PointAAA', function (infoSrc, wp, numPrec) {
;C$.$init$.apply(this);
this.infoSrc=infoSrc;
this.wp=wp;
var nc=infoSrc.getNumComps$();
var nt=infoSrc.getNumTiles$();
this.ttIncl=Clazz.array($I$(1), [nt, nc, null, null, null]);
this.ttMaxBP=Clazz.array($I$(1), [nt, nc, null, null, null]);
this.lblock=Clazz.array(Integer.TYPE, [nt, nc, null, null, null]);
this.prevtIdxs=Clazz.array(Integer.TYPE, [nt, nc, null, null, null]);
this.ppinfo=Clazz.array($I$(2), [nt, nc, null, null]);
var root;
var sb;
var maxs;
var mins;
var mrl;
var tmpCoord=null;
var numcb;
var cblks=null;
infoSrc.setTile$I$I(0, 0);
for (var t=0; t < nt; t++) {
for (var c=0; c < nc; c++) {
root=infoSrc.getAnSubbandTree$I$I(t, c);
mrl=root.resLvl;
this.lblock[t][c]=Clazz.array(Integer.TYPE, [mrl + 1, null, null]);
this.ttIncl[t][c]=Clazz.array($I$(1), [mrl + 1, null, null]);
this.ttMaxBP[t][c]=Clazz.array($I$(1), [mrl + 1, null, null]);
this.prevtIdxs[t][c]=Clazz.array(Integer.TYPE, [mrl + 1, null, null]);
this.ppinfo[t][c]=Clazz.array($I$(2), [mrl + 1, null]);
for (var r=0; r <= mrl; r++) {
mins=(r == 0) ? 0 : 1;
maxs=(r == 0) ? 1 : 4;
var maxPrec=numPrec[t][c][r].x * numPrec[t][c][r].y;
this.ttIncl[t][c][r]=Clazz.array($I$(1), [maxPrec, maxs]);
this.ttMaxBP[t][c][r]=Clazz.array($I$(1), [maxPrec, maxs]);
this.prevtIdxs[t][c][r]=Clazz.array(Integer.TYPE, [maxs, null]);
this.lblock[t][c][r]=Clazz.array(Integer.TYPE, [maxs, null]);
this.ppinfo[t][c][r]=Clazz.array($I$(2), [maxPrec]);
p$1.fillPrecInfo$I$I$I.apply(this, [t, c, r]);
for (var s=mins; s < maxs; s++) {
sb=root.getSubbandByIdx$I$I(r, s);
numcb=sb.numCb.x * sb.numCb.y;
this.lblock[t][c][r][s]=Clazz.array(Integer.TYPE, [numcb]);
$I$(3).intArraySet$IA$I(this.lblock[t][c][r][s], 3);
this.prevtIdxs[t][c][r][s]=Clazz.array(Integer.TYPE, [numcb]);
$I$(3).intArraySet$IA$I(this.prevtIdxs[t][c][r][s], -1);
}
}
}
if (t != nt - 1) infoSrc.nextTile$();
}
}, 1);

Clazz.newMeth(C$, 'fillPrecInfo$I$I$I', function (t, c, r) {
if (this.ppinfo[t][c][r].length == 0) return;
var tileI=this.infoSrc.getTile$java_awt_Point(null);
var nTiles=this.infoSrc.getNumTiles$java_awt_Point(null);
var x0siz=this.infoSrc.getImgULX$();
var y0siz=this.infoSrc.getImgULY$();
var xsiz=x0siz + this.infoSrc.getImgWidth$();
var ysiz=y0siz + this.infoSrc.getImgHeight$();
var xt0siz=this.infoSrc.getTilePartULX$();
var yt0siz=this.infoSrc.getTilePartULY$();
var xtsiz=this.infoSrc.getNomTileWidth$();
var ytsiz=this.infoSrc.getNomTileHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var xrsiz=this.infoSrc.getCompSubsX$I(c);
var yrsiz=this.infoSrc.getCompSubsY$I(c);
var tcx0=(Math.ceil(tx0 / (xrsiz))|0);
var tcy0=(Math.ceil(ty0 / (yrsiz))|0);
var tcx1=(Math.ceil(tx1 / (xrsiz))|0);
var tcy1=(Math.ceil(ty1 / (yrsiz))|0);
var ndl=this.infoSrc.getAnSubbandTree$I$I(t, c).resLvl - r;
var trx0=(Math.ceil(tcx0 / (1 << ndl))|0);
var try0=(Math.ceil(tcy0 / (1 << ndl))|0);
var trx1=(Math.ceil(tcx1 / (1 << ndl))|0);
var try1=(Math.ceil(tcy1 / (1 << ndl))|0);
var cb0x=this.infoSrc.getCbULX$();
var cb0y=this.infoSrc.getCbULY$();
var twoppx=this.wp.getPrecinctPartition$().getPPX$I$I$I(t, c, r);
var twoppy=this.wp.getPrecinctPartition$().getPPY$I$I$I(t, c, r);
var twoppx2=((twoppx / 2)|0);
var twoppy2=((twoppy / 2)|0);
var maxPrec=this.ppinfo[t][c][r].length;
var nPrec=0;
var istart=(Math.floor((try0 - cb0y) / twoppy)|0);
var iend=(Math.floor((try1 - 1 - cb0y ) / twoppy)|0);
var jstart=(Math.floor((trx0 - cb0x) / twoppx)|0);
var jend=(Math.floor((trx1 - 1 - cb0x ) / twoppx)|0);
var acb0x;
var acb0y;
var root=this.infoSrc.getAnSubbandTree$I$I(t, c);
var sb=null;
var p0x;
var p0y;
var p1x;
var p1y;
var s0x;
var s0y;
var s1x;
var s1y;
var cw;
var ch;
var kstart;
var kend;
var lstart;
var lend;
var k0;
var l0;
var prg_ulx;
var prg_uly;
var prg_w=(twoppx|0) << ndl;
var prg_h=(twoppy|0) << ndl;
var cb;
for (var i=istart; i <= iend; i++) {
for (var j=jstart; j <= jend; j++, nPrec++) {
if (j == jstart && (trx0 - cb0x) % (xrsiz * ((twoppx|0))) != 0 ) {
prg_ulx=tx0;
} else {
prg_ulx=cb0x + j * xrsiz * ((twoppx|0) << ndl) ;
}if (i == istart && (try0 - cb0y) % (yrsiz * ((twoppy|0))) != 0 ) {
prg_uly=ty0;
} else {
prg_uly=cb0y + i * yrsiz * ((twoppy|0) << ndl) ;
}this.ppinfo[t][c][r][nPrec]=Clazz.new_($I$(2,1).c$$I$I$I$I$I$I$I$I$I,[r, ((cb0x + j * twoppx)|0), ((cb0y + i * twoppy)|0), (twoppx|0), (twoppy|0), prg_ulx, prg_uly, prg_w, prg_h]);
if (r == 0) {
acb0x=cb0x;
acb0y=cb0y;
p0x=acb0x + j * (twoppx|0);
p1x=p0x + (twoppx|0);
p0y=acb0y + i * (twoppy|0);
p1y=p0y + (twoppy|0);
sb=root.getSubbandByIdx$I$I(0, 0);
s0x=(p0x < sb.ulcx) ? sb.ulcx : p0x;
s1x=(p1x > sb.ulcx + sb.w) ? sb.ulcx + sb.w : p1x;
s0y=(p0y < sb.ulcy) ? sb.ulcy : p0y;
s1y=(p1y > sb.ulcy + sb.h) ? sb.ulcy + sb.h : p1y;
cw=sb.nomCBlkW;
ch=sb.nomCBlkH;
k0=(Math.floor((sb.ulcy - acb0y) / ch)|0);
kstart=(Math.floor((s0y - acb0y) / ch)|0);
kend=(Math.floor((s1y - 1 - acb0y ) / ch)|0);
l0=(Math.floor((sb.ulcx - acb0x) / cw)|0);
lstart=(Math.floor((s0x - acb0x) / cw)|0);
lend=(Math.floor((s1x - 1 - acb0x ) / cw)|0);
if (s1x - s0x <= 0 || s1y - s0y <= 0 ) {
this.ppinfo[t][c][r][nPrec].nblk[0]=0;
this.ttIncl[t][c][r][nPrec][0]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
this.ttMaxBP[t][c][r][nPrec][0]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[t][c][r][nPrec][0]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[t][c][r][nPrec][0]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].cblk[0]=Clazz.array($I$(4), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].nblk[0]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(4,1).c$$I$I,[k - k0, l - l0]);
this.ppinfo[t][c][r][nPrec].cblk[0][k - kstart][l - lstart]=cb;
}
}
}} else {
acb0x=0;
acb0y=cb0y;
p0x=acb0x + j * twoppx2;
p1x=p0x + twoppx2;
p0y=acb0y + i * twoppy2;
p1y=p0y + twoppy2;
sb=root.getSubbandByIdx$I$I(r, 1);
s0x=(p0x < sb.ulcx) ? sb.ulcx : p0x;
s1x=(p1x > sb.ulcx + sb.w) ? sb.ulcx + sb.w : p1x;
s0y=(p0y < sb.ulcy) ? sb.ulcy : p0y;
s1y=(p1y > sb.ulcy + sb.h) ? sb.ulcy + sb.h : p1y;
cw=sb.nomCBlkW;
ch=sb.nomCBlkH;
k0=(Math.floor((sb.ulcy - acb0y) / ch)|0);
kstart=(Math.floor((s0y - acb0y) / ch)|0);
kend=(Math.floor((s1y - 1 - acb0y ) / ch)|0);
l0=(Math.floor((sb.ulcx - acb0x) / cw)|0);
lstart=(Math.floor((s0x - acb0x) / cw)|0);
lend=(Math.floor((s1x - 1 - acb0x ) / cw)|0);
if (s1x - s0x <= 0 || s1y - s0y <= 0 ) {
this.ppinfo[t][c][r][nPrec].nblk[1]=0;
this.ttIncl[t][c][r][nPrec][1]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
this.ttMaxBP[t][c][r][nPrec][1]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[t][c][r][nPrec][1]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[t][c][r][nPrec][1]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].cblk[1]=Clazz.array($I$(4), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].nblk[1]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(4,1).c$$I$I,[k - k0, l - l0]);
this.ppinfo[t][c][r][nPrec].cblk[1][k - kstart][l - lstart]=cb;
}
}
}acb0x=cb0x;
acb0y=0;
p0x=acb0x + j * twoppx2;
p1x=p0x + twoppx2;
p0y=acb0y + i * twoppy2;
p1y=p0y + twoppy2;
sb=root.getSubbandByIdx$I$I(r, 2);
s0x=(p0x < sb.ulcx) ? sb.ulcx : p0x;
s1x=(p1x > sb.ulcx + sb.w) ? sb.ulcx + sb.w : p1x;
s0y=(p0y < sb.ulcy) ? sb.ulcy : p0y;
s1y=(p1y > sb.ulcy + sb.h) ? sb.ulcy + sb.h : p1y;
cw=sb.nomCBlkW;
ch=sb.nomCBlkH;
k0=(Math.floor((sb.ulcy - acb0y) / ch)|0);
kstart=(Math.floor((s0y - acb0y) / ch)|0);
kend=(Math.floor((s1y - 1 - acb0y ) / ch)|0);
l0=(Math.floor((sb.ulcx - acb0x) / cw)|0);
lstart=(Math.floor((s0x - acb0x) / cw)|0);
lend=(Math.floor((s1x - 1 - acb0x ) / cw)|0);
if (s1x - s0x <= 0 || s1y - s0y <= 0 ) {
this.ppinfo[t][c][r][nPrec].nblk[2]=0;
this.ttIncl[t][c][r][nPrec][2]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
this.ttMaxBP[t][c][r][nPrec][2]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[t][c][r][nPrec][2]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[t][c][r][nPrec][2]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].cblk[2]=Clazz.array($I$(4), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].nblk[2]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(4,1).c$$I$I,[k - k0, l - l0]);
this.ppinfo[t][c][r][nPrec].cblk[2][k - kstart][l - lstart]=cb;
}
}
}acb0x=0;
acb0y=0;
p0x=acb0x + j * twoppx2;
p1x=p0x + twoppx2;
p0y=acb0y + i * twoppy2;
p1y=p0y + twoppy2;
sb=root.getSubbandByIdx$I$I(r, 3);
s0x=(p0x < sb.ulcx) ? sb.ulcx : p0x;
s1x=(p1x > sb.ulcx + sb.w) ? sb.ulcx + sb.w : p1x;
s0y=(p0y < sb.ulcy) ? sb.ulcy : p0y;
s1y=(p1y > sb.ulcy + sb.h) ? sb.ulcy + sb.h : p1y;
cw=sb.nomCBlkW;
ch=sb.nomCBlkH;
k0=(Math.floor((sb.ulcy - acb0y) / ch)|0);
kstart=(Math.floor((s0y - acb0y) / ch)|0);
kend=(Math.floor((s1y - 1 - acb0y ) / ch)|0);
l0=(Math.floor((sb.ulcx - acb0x) / cw)|0);
lstart=(Math.floor((s0x - acb0x) / cw)|0);
lend=(Math.floor((s1x - 1 - acb0x ) / cw)|0);
if (s1x - s0x <= 0 || s1y - s0y <= 0 ) {
this.ppinfo[t][c][r][nPrec].nblk[3]=0;
this.ttIncl[t][c][r][nPrec][3]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
this.ttMaxBP[t][c][r][nPrec][3]=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[t][c][r][nPrec][3]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[t][c][r][nPrec][3]=Clazz.new_($I$(1,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].cblk[3]=Clazz.array($I$(4), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[t][c][r][nPrec].nblk[3]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(4,1).c$$I$I,[k - k0, l - l0]);
this.ppinfo[t][c][r][nPrec].cblk[3][k - kstart][l - lstart]=cb;
}
}
}}}
}
}, p$1);

Clazz.newMeth(C$, 'encodePacket$I$I$I$I$io_scif_jj2000_j2k_entropy_encoder_CBlkRateDistStatsAA$IAA$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer$BA$I', function (ly, c, r, t, cbs, tIndx, hbuf, bbuf, pIdx) {
var b;
var i;
var maxi;
var ncb;
var thmax;
var newtp;
var cblen;
var prednbits;
var nbits;
var deltabits;
var cur_ttIncl;
var cur_ttMaxBP;
var cur_prevtIdxs;
var cur_cbs;
var cur_tIndx;
var minsb=(r == 0) ? 0 : 1;
var maxsb=(r == 0) ? 1 : 4;
var cbCoord=null;
var root=this.infoSrc.getAnSubbandTree$I$I(t, c);
var sb;
this.roiInPkt=false;
this.roiLen=0;
var mend;
var nend;
if (pIdx >= this.ppinfo[t][c][r].length) {
this.packetWritable=false;
return hbuf;
}var prec=this.ppinfo[t][c][r][pIdx];
var isPrecVoid=true;
for (var s=minsb; s < maxsb; s++) {
if (prec.nblk[s] == 0) {
continue;
} else {
isPrecVoid=false;
break;
}}
if (isPrecVoid) {
this.packetWritable=true;
if (hbuf == null ) {
hbuf=Clazz.new_($I$(5,1));
} else {
hbuf.reset$();
}if (bbuf == null ) {
this.lbbuf=bbuf=Clazz.array(Byte.TYPE, [1]);
}hbuf.writeBit$I(0);
this.lblen=0;
return hbuf;
}if (hbuf == null ) {
hbuf=Clazz.new_($I$(5,1));
} else {
hbuf.reset$();
}this.lbbuf=null;
this.lblen=0;
hbuf.writeBit$I(1);
for (var s=minsb; s < maxsb; s++) {
sb=root.getSubbandByIdx$I$I(r, s);
if (prec.nblk[s] == 0) {
continue;
}cur_ttIncl=this.ttIncl[t][c][r][pIdx][s];
cur_ttMaxBP=this.ttMaxBP[t][c][r][pIdx][s];
cur_prevtIdxs=this.prevtIdxs[t][c][r][s];
cur_cbs=cbs[s];
cur_tIndx=tIndx[s];
mend=(prec.cblk[s] == null ) ? 0 : prec.cblk[s].length;
for (var m=0; m < mend; m++) {
nend=(prec.cblk[s][m] == null ) ? 0 : prec.cblk[s][m].length;
for (var n=0; n < nend; n++) {
cbCoord=prec.cblk[s][m][n].idx;
b=cbCoord.x + cbCoord.y * sb.numCb.x;
if (cur_tIndx[b] > cur_prevtIdxs[b] && cur_prevtIdxs[b] < 0 ) {
cur_ttIncl.setValue$I$I$I(m, n, ly - 1);
}if (ly == 1) {
cur_ttMaxBP.setValue$I$I$I(m, n, cur_cbs[b].skipMSBP);
}}
}
for (var m=0; m < prec.cblk[s].length; m++) {
for (var n=0; n < prec.cblk[s][m].length; n++) {
cbCoord=prec.cblk[s][m][n].idx;
b=cbCoord.x + cbCoord.y * sb.numCb.x;
if (cur_tIndx[b] > cur_prevtIdxs[b]) {
if (cur_prevtIdxs[b] < 0) {
cur_ttIncl.encode$I$I$I$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer(m, n, ly, hbuf);
thmax=cur_cbs[b].skipMSBP + 1;
for (i=1; i <= thmax; i++) {
cur_ttMaxBP.encode$I$I$I$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer(m, n, i, hbuf);
}
this.lblen+=cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_tIndx[b]]];
} else {
hbuf.writeBit$I(1);
this.lblen+=cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_tIndx[b]]] - cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_prevtIdxs[b]]];
}if (cur_prevtIdxs[b] < 0) {
newtp=cur_cbs[b].truncIdxs[cur_tIndx[b]];
} else {
newtp=cur_cbs[b].truncIdxs[cur_tIndx[b]] - cur_cbs[b].truncIdxs[cur_prevtIdxs[b]] - 1 ;
}switch (newtp) {
case 0:
hbuf.writeBit$I(0);
break;
case 1:
hbuf.writeBits$I$I(2, 2);
break;
case 2:
case 3:
case 4:
hbuf.writeBits$I$I((12) | (newtp - 2), 4);
break;
default:
if (newtp <= 35) {
hbuf.writeBits$I$I((480) | (newtp - 5), 9);
} else if (newtp <= 163) {
hbuf.writeBits$I$I((65408) | (newtp - 36), 16);
} else {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Maximum number of truncation points exceeded"]);
}}
} else {
if (cur_prevtIdxs[b] >= 0) {
hbuf.writeBit$I(0);
} else {
cur_ttIncl.encode$I$I$I$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer(m, n, ly, hbuf);
}continue;
}newtp=1;
maxi=cur_cbs[b].truncIdxs[cur_tIndx[b]];
cblen=(cur_prevtIdxs[b] < 0) ? 0 : cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_prevtIdxs[b]]];
i=(cur_prevtIdxs[b] < 0) ? 0 : cur_cbs[b].truncIdxs[cur_prevtIdxs[b]] + 1;
var minbits=0;
for (; i < maxi; i++, newtp++) {
if (cur_cbs[b].isTermPass != null  && cur_cbs[b].isTermPass[i] ) {
cblen=cur_cbs[b].truncRates[i] - cblen;
prednbits=this.lblock[t][c][r][s][b] + $I$(6).log2$I(newtp);
minbits=((cblen > 0) ? $I$(6).log2$I(cblen) : 0) + 1;
for (var j=prednbits; j < minbits; j++) {
this.lblock[t][c][r][s][b]++;
hbuf.writeBit$I(1);
}
newtp=0;
cblen=cur_cbs[b].truncRates[i];
}}
cblen=cur_cbs[b].truncRates[i] - cblen;
prednbits=this.lblock[t][c][r][s][b] + $I$(6).log2$I(newtp);
minbits=((cblen > 0) ? $I$(6).log2$I(cblen) : 0) + 1;
for (var j=prednbits; j < minbits; j++) {
this.lblock[t][c][r][s][b]++;
hbuf.writeBit$I(1);
}
hbuf.writeBit$I(0);
newtp=1;
maxi=cur_cbs[b].truncIdxs[cur_tIndx[b]];
cblen=(cur_prevtIdxs[b] < 0) ? 0 : cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_prevtIdxs[b]]];
i=(cur_prevtIdxs[b] < 0) ? 0 : cur_cbs[b].truncIdxs[cur_prevtIdxs[b]] + 1;
for (; i < maxi; i++, newtp++) {
if (cur_cbs[b].isTermPass != null  && cur_cbs[b].isTermPass[i] ) {
cblen=cur_cbs[b].truncRates[i] - cblen;
nbits=$I$(6).log2$I(newtp) + this.lblock[t][c][r][s][b];
hbuf.writeBits$I$I(cblen, nbits);
newtp=0;
cblen=cur_cbs[b].truncRates[i];
}}
cblen=cur_cbs[b].truncRates[i] - cblen;
nbits=$I$(6).log2$I(newtp) + this.lblock[t][c][r][s][b];
hbuf.writeBits$I$I(cblen, nbits);
}
}
}
if (bbuf == null  || bbuf.length < this.lblen ) {
bbuf=Clazz.array(Byte.TYPE, [this.lblen]);
}this.lbbuf=bbuf;
this.lblen=0;
for (var s=minsb; s < maxsb; s++) {
sb=root.getSubbandByIdx$I$I(r, s);
cur_prevtIdxs=this.prevtIdxs[t][c][r][s];
cur_cbs=cbs[s];
cur_tIndx=tIndx[s];
ncb=cur_prevtIdxs.length;
mend=(prec.cblk[s] == null ) ? 0 : prec.cblk[s].length;
for (var m=0; m < mend; m++) {
nend=(prec.cblk[s][m] == null ) ? 0 : prec.cblk[s][m].length;
for (var n=0; n < nend; n++) {
cbCoord=prec.cblk[s][m][n].idx;
b=cbCoord.x + cbCoord.y * sb.numCb.x;
if (cur_tIndx[b] > cur_prevtIdxs[b]) {
if (cur_prevtIdxs[b] < 0) {
cblen=cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_tIndx[b]]];
System.arraycopy$O$I$O$I$I(cur_cbs[b].data, 0, this.lbbuf, this.lblen, cblen);
} else {
cblen=cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_tIndx[b]]] - cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_prevtIdxs[b]]];
System.arraycopy$O$I$O$I$I(cur_cbs[b].data, cur_cbs[b].truncRates[cur_cbs[b].truncIdxs[cur_prevtIdxs[b]]], this.lbbuf, this.lblen, cblen);
}this.lblen+=cblen;
if (cur_cbs[b].nROIcoeff != 0 && (cur_prevtIdxs[b] == -1 || cur_cbs[b].truncIdxs[cur_prevtIdxs[b]] <= cur_cbs[b].nROIcp - 1 ) ) {
this.roiInPkt=true;
this.roiLen=this.lblen;
}cur_prevtIdxs[b]=cur_tIndx[b];
}}
}
}
this.packetWritable=true;
if (hbuf.getLength$() == 0) {
throw Clazz.new_($I$(7,1).c$$S,["You have found a bug in PktEncoder, method: encodePacket"]);
}return hbuf;
});

Clazz.newMeth(C$, 'getLastBodyBuf$', function () {
if (this.lbbuf == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return this.lbbuf;
});

Clazz.newMeth(C$, 'getLastBodyLen$', function () {
return this.lblen;
});

Clazz.newMeth(C$, 'save$', function () {
var maxsbi;
var minsbi;
if (this.bak_lblock == null ) {
this.bak_lblock=Clazz.array(Integer.TYPE, [this.ttIncl.length, null, null, null, null]);
this.bak_prevtIdxs=Clazz.array(Integer.TYPE, [this.ttIncl.length, null, null, null, null]);
for (var t=this.ttIncl.length - 1; t >= 0; t--) {
this.bak_lblock[t]=Clazz.array(Integer.TYPE, [this.ttIncl[t].length, null, null, null]);
this.bak_prevtIdxs[t]=Clazz.array(Integer.TYPE, [this.ttIncl[t].length, null, null, null]);
for (var c=this.ttIncl[t].length - 1; c >= 0; c--) {
this.bak_lblock[t][c]=Clazz.array(Integer.TYPE, [this.lblock[t][c].length, null, null]);
this.bak_prevtIdxs[t][c]=Clazz.array(Integer.TYPE, [this.ttIncl[t][c].length, null, null]);
for (var r=this.lblock[t][c].length - 1; r >= 0; r--) {
this.bak_lblock[t][c][r]=Clazz.array(Integer.TYPE, [this.lblock[t][c][r].length, null]);
this.bak_prevtIdxs[t][c][r]=Clazz.array(Integer.TYPE, [this.prevtIdxs[t][c][r].length, null]);
minsbi=(r == 0) ? 0 : 1;
maxsbi=(r == 0) ? 1 : 4;
for (var s=minsbi; s < maxsbi; s++) {
this.bak_lblock[t][c][r][s]=Clazz.array(Integer.TYPE, [this.lblock[t][c][r][s].length]);
this.bak_prevtIdxs[t][c][r][s]=Clazz.array(Integer.TYPE, [this.prevtIdxs[t][c][r][s].length]);
}
}
}
}
}var ttIncl_t_c;
var ttMaxBP_t_c;
var ttIncl_t_c_r;
var ttMaxBP_t_c_r;
var lblock_t_c;
var bak_lblock_t_c;
var prevtIdxs_t_c_r;
var bak_prevtIdxs_t_c_r;
for (var t=this.ttIncl.length - 1; t >= 0; t--) {
for (var c=this.ttIncl[t].length - 1; c >= 0; c--) {
lblock_t_c=this.lblock[t][c];
bak_lblock_t_c=this.bak_lblock[t][c];
ttIncl_t_c=this.ttIncl[t][c];
ttMaxBP_t_c=this.ttMaxBP[t][c];
for (var r=lblock_t_c.length - 1; r >= 0; r--) {
ttIncl_t_c_r=ttIncl_t_c[r];
ttMaxBP_t_c_r=ttMaxBP_t_c[r];
prevtIdxs_t_c_r=this.prevtIdxs[t][c][r];
bak_prevtIdxs_t_c_r=this.bak_prevtIdxs[t][c][r];
minsbi=(r == 0) ? 0 : 1;
maxsbi=(r == 0) ? 1 : 4;
for (var s=minsbi; s < maxsbi; s++) {
System.arraycopy$O$I$O$I$I(lblock_t_c[r][s], 0, bak_lblock_t_c[r][s], 0, lblock_t_c[r][s].length);
System.arraycopy$O$I$O$I$I(prevtIdxs_t_c_r[s], 0, bak_prevtIdxs_t_c_r[s], 0, prevtIdxs_t_c_r[s].length);
}
for (var p=this.ppinfo[t][c][r].length - 1; p >= 0; p--) {
if (p < ttIncl_t_c_r.length) {
for (var s=minsbi; s < maxsbi; s++) {
ttIncl_t_c_r[p][s].save$();
ttMaxBP_t_c_r[p][s].save$();
}
}}
}
}
}
this.saved=true;
});

Clazz.newMeth(C$, 'restore$', function () {
var maxsbi;
var minsbi;
if (!this.saved) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.lbbuf=null;
var ttIncl_t_c;
var ttMaxBP_t_c;
var ttIncl_t_c_r;
var ttMaxBP_t_c_r;
var lblock_t_c;
var bak_lblock_t_c;
var prevtIdxs_t_c_r;
var bak_prevtIdxs_t_c_r;
for (var t=this.ttIncl.length - 1; t >= 0; t--) {
for (var c=this.ttIncl[t].length - 1; c >= 0; c--) {
lblock_t_c=this.lblock[t][c];
bak_lblock_t_c=this.bak_lblock[t][c];
ttIncl_t_c=this.ttIncl[t][c];
ttMaxBP_t_c=this.ttMaxBP[t][c];
for (var r=lblock_t_c.length - 1; r >= 0; r--) {
ttIncl_t_c_r=ttIncl_t_c[r];
ttMaxBP_t_c_r=ttMaxBP_t_c[r];
prevtIdxs_t_c_r=this.prevtIdxs[t][c][r];
bak_prevtIdxs_t_c_r=this.bak_prevtIdxs[t][c][r];
minsbi=(r == 0) ? 0 : 1;
maxsbi=(r == 0) ? 1 : 4;
for (var s=minsbi; s < maxsbi; s++) {
System.arraycopy$O$I$O$I$I(bak_lblock_t_c[r][s], 0, lblock_t_c[r][s], 0, lblock_t_c[r][s].length);
System.arraycopy$O$I$O$I$I(bak_prevtIdxs_t_c_r[s], 0, prevtIdxs_t_c_r[s], 0, prevtIdxs_t_c_r[s].length);
}
for (var p=this.ppinfo[t][c][r].length - 1; p >= 0; p--) {
if (p < ttIncl_t_c_r.length) {
for (var s=minsbi; s < maxsbi; s++) {
ttIncl_t_c_r[p][s].restore$();
ttMaxBP_t_c_r[p][s].restore$();
}
}}
}
}
}
});

Clazz.newMeth(C$, 'reset$', function () {
var maxsbi;
var minsbi;
this.saved=false;
this.lbbuf=null;
var ttIncl_t_c;
var ttMaxBP_t_c;
var ttIncl_t_c_r;
var ttMaxBP_t_c_r;
var lblock_t_c;
var prevtIdxs_t_c_r;
for (var t=this.ttIncl.length - 1; t >= 0; t--) {
for (var c=this.ttIncl[t].length - 1; c >= 0; c--) {
lblock_t_c=this.lblock[t][c];
ttIncl_t_c=this.ttIncl[t][c];
ttMaxBP_t_c=this.ttMaxBP[t][c];
for (var r=lblock_t_c.length - 1; r >= 0; r--) {
ttIncl_t_c_r=ttIncl_t_c[r];
ttMaxBP_t_c_r=ttMaxBP_t_c[r];
prevtIdxs_t_c_r=this.prevtIdxs[t][c][r];
minsbi=(r == 0) ? 0 : 1;
maxsbi=(r == 0) ? 1 : 4;
for (var s=minsbi; s < maxsbi; s++) {
$I$(3).intArraySet$IA$I(prevtIdxs_t_c_r[s], -1);
$I$(3).intArraySet$IA$I(lblock_t_c[r][s], 3);
}
for (var p=this.ppinfo[t][c][r].length - 1; p >= 0; p--) {
if (p < ttIncl_t_c_r.length) {
for (var s=minsbi; s < maxsbi; s++) {
ttIncl_t_c_r[p][s].reset$();
ttMaxBP_t_c_r[p][s].reset$();
}
}}
}
}
}
});

Clazz.newMeth(C$, 'isPacketWritable$', function () {
return this.packetWritable;
});

Clazz.newMeth(C$, 'isROIinPkt$', function () {
return this.roiInPkt;
});

Clazz.newMeth(C$, 'getROILen$', function () {
return this.roiLen;
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'getPrecInfo$I$I$I$I', function (t, c, r, p) {
return this.ppinfo[t][c][r][p];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
