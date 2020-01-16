(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),p$1={},I$=[[0,'io.scif.jj2000.j2k.codestream.reader.PktHeaderBitReader','io.scif.jj2000.j2k.codestream.reader.CBlkInfo','io.scif.jj2000.j2k.codestream.reader.TagTreeDecoder','java.awt.Point','io.scif.jj2000.j2k.codestream.PrecInfo','io.scif.jj2000.j2k.util.ArrayUtil','io.scif.jj2000.j2k.codestream.CBlkCoordInfo','java.util.Vector','io.scif.jj2000.j2k.util.MathUtil','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PktDecoder", null, null, 'io.scif.jj2000.j2k.entropy.StdEntropyCoderOptions');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pph=false;
this.INIT_LBLOCK=3;
this.nl=0;
this.sopUsed=false;
this.ephUsed=false;
}, 1);

C$.$fields$=[['Z',['pph','sopUsed','ephUsed','ncbQuit','isTruncMode'],'I',['INIT_LBLOCK','tIdx','nl','nc','pktIdx','ncb','maxCB','tQuit','cQuit','sQuit','rQuit','xQuit','yQuit'],'O',['src','io.scif.jj2000.j2k.codestream.reader.BitstreamReaderAgent','pphbais','java.io.ByteArrayInputStream','decSpec','io.scif.jj2000.j2k.decoder.DecoderSpecs','hd','io.scif.jj2000.j2k.codestream.reader.HeaderDecoder','bin','io.scif.jj2000.j2k.codestream.reader.PktHeaderBitReader','ehs','io.scif.jj2000.j2k.io.RandomAccessIO','numPrec','java.awt.Point[][]','ppinfo','io.scif.jj2000.j2k.codestream.PrecInfo[][][]','lblock','int[][][][][]','ttIncl','io.scif.jj2000.j2k.codestream.reader.TagTreeDecoder[][][][]','+ttMaxBP','cblks','java.util.Vector[]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_decoder_DecoderSpecs$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_jj2000_j2k_codestream_reader_BitstreamReaderAgent$Z$I', function (decSpec, hd, ehs, src, isTruncMode, maxCB) {
;C$.$init$.apply(this);
this.decSpec=decSpec;
this.hd=hd;
this.ehs=ehs;
this.isTruncMode=isTruncMode;
this.bin=Clazz.new_($I$(1,1).c$$io_scif_jj2000_j2k_io_RandomAccessIO,[ehs]);
this.src=src;
this.ncb=0;
this.ncbQuit=false;
this.maxCB=maxCB;
}, 1);

Clazz.newMeth(C$, 'restart$I$IA$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAAAA$Z$java_io_ByteArrayInputStream', function (nc, mdl, nl, cbI, pph, pphbais) {
this.nc=nc;
this.nl=nl;
this.tIdx=this.src.getTileIdx$();
this.pph=pph;
this.pphbais=pphbais;
this.sopUsed=(this.decSpec.sops.getTileDef$I(this.tIdx)).booleanValue$();
this.pktIdx=0;
this.ephUsed=(this.decSpec.ephs.getTileDef$I(this.tIdx)).booleanValue$();
cbI=Clazz.array($I$(2), [nc, null, null, null, null]);
this.lblock=Clazz.array(Integer.TYPE, [nc, null, null, null, null]);
this.ttIncl=Clazz.array($I$(3), [nc, null, null, null]);
this.ttMaxBP=Clazz.array($I$(3), [nc, null, null, null]);
this.numPrec=Clazz.array($I$(4), [nc, null]);
this.ppinfo=Clazz.array($I$(5), [nc, null, null]);
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
var root;
var sb;
var mins;
var maxs;
var nBlk=null;
var cb0x=this.src.getCbULX$();
var cb0y=this.src.getCbULY$();
for (var c=0; c < nc; c++) {
cbI[c]=Clazz.array($I$(2), [mdl[c] + 1, null, null, null]);
this.lblock[c]=Clazz.array(Integer.TYPE, [mdl[c] + 1, null, null, null]);
this.ttIncl[c]=Clazz.array($I$(3), [mdl[c] + 1, null, null]);
this.ttMaxBP[c]=Clazz.array($I$(3), [mdl[c] + 1, null, null]);
this.numPrec[c]=Clazz.array($I$(4), [mdl[c] + 1]);
this.ppinfo[c]=Clazz.array($I$(5), [mdl[c] + 1, null]);
tcx0=this.src.getResULX$I$I(c, mdl[c]);
tcy0=this.src.getResULY$I$I(c, mdl[c]);
tcx1=tcx0 + this.src.getTileCompWidth$I$I$I(this.tIdx, c, mdl[c]);
tcy1=tcy0 + this.src.getTileCompHeight$I$I$I(this.tIdx, c, mdl[c]);
for (var r=0; r <= mdl[c]; r++) {
trx0=(Math.ceil(tcx0 / (1 << (mdl[c] - r)))|0);
try0=(Math.ceil(tcy0 / (1 << (mdl[c] - r)))|0);
trx1=(Math.ceil(tcx1 / (1 << (mdl[c] - r)))|0);
try1=(Math.ceil(tcy1 / (1 << (mdl[c] - r)))|0);
var twoppx=this.getPPX$I$I$I(this.tIdx, c, r);
var twoppy=this.getPPY$I$I$I(this.tIdx, c, r);
this.numPrec[c][r]=Clazz.new_($I$(4,1));
if (trx1 > trx0) {
this.numPrec[c][r].x=(Math.ceil((trx1 - cb0x) / twoppx)|0) - (Math.floor((trx0 - cb0x) / twoppx)|0);
} else {
this.numPrec[c][r].x=0;
}if (try1 > try0) {
this.numPrec[c][r].y=(Math.ceil((try1 - cb0y) / twoppy)|0) - (Math.floor((try0 - cb0y) / twoppy)|0);
} else {
this.numPrec[c][r].y=0;
}mins=(r == 0) ? 0 : 1;
maxs=(r == 0) ? 1 : 4;
var maxPrec=this.numPrec[c][r].x * this.numPrec[c][r].y;
this.ttIncl[c][r]=Clazz.array($I$(3), [maxPrec, maxs + 1]);
this.ttMaxBP[c][r]=Clazz.array($I$(3), [maxPrec, maxs + 1]);
cbI[c][r]=Clazz.array($I$(2), [maxs + 1, null, null]);
this.lblock[c][r]=Clazz.array(Integer.TYPE, [maxs + 1, null, null]);
this.ppinfo[c][r]=Clazz.array($I$(5), [maxPrec]);
p$1.fillPrecInfo$I$I$I.apply(this, [c, r, mdl[c]]);
root=this.src.getSynSubbandTree$I$I(this.tIdx, c);
for (var s=mins; s < maxs; s++) {
sb=root.getSubbandByIdx$I$I(r, s);
nBlk=sb.numCb;
cbI[c][r][s]=Clazz.array($I$(2), [nBlk.y, nBlk.x]);
this.lblock[c][r][s]=Clazz.array(Integer.TYPE, [nBlk.y, nBlk.x]);
for (var i=nBlk.y - 1; i >= 0; i--) {
$I$(6).intArraySet$IA$I(this.lblock[c][r][s][i], 3);
}
}
}
}
return cbI;
});

Clazz.newMeth(C$, 'fillPrecInfo$I$I$I', function (c, r, mdl) {
if (this.ppinfo[c][r].length == 0) return;
var tileI=this.src.getTile$java_awt_Point(null);
var nTiles=this.src.getNumTiles$java_awt_Point(null);
var xsiz;
var ysiz;
var x0siz;
var y0siz;
var xt0siz;
var yt0siz;
var xtsiz;
var ytsiz;
xt0siz=this.src.getTilePartULX$();
yt0siz=this.src.getTilePartULY$();
xtsiz=this.src.getNomTileWidth$();
ytsiz=this.src.getNomTileHeight$();
x0siz=this.hd.getImgULX$();
y0siz=this.hd.getImgULY$();
xsiz=this.hd.getImgWidth$();
ysiz=this.hd.getImgHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var xrsiz=this.hd.getCompSubsX$I(c);
var yrsiz=this.hd.getCompSubsY$I(c);
var tcx0=this.src.getResULX$I$I(c, mdl);
var tcy0=this.src.getResULY$I$I(c, mdl);
var tcx1=tcx0 + this.src.getTileCompWidth$I$I$I(this.tIdx, c, mdl);
var tcy1=tcy0 + this.src.getTileCompHeight$I$I$I(this.tIdx, c, mdl);
var ndl=mdl - r;
var trx0=(Math.ceil(tcx0 / (1 << ndl))|0);
var try0=(Math.ceil(tcy0 / (1 << ndl))|0);
var trx1=(Math.ceil(tcx1 / (1 << ndl))|0);
var try1=(Math.ceil(tcy1 / (1 << ndl))|0);
var cb0x=this.src.getCbULX$();
var cb0y=this.src.getCbULY$();
var twoppx=this.getPPX$I$I$I(this.tIdx, c, r);
var twoppy=this.getPPY$I$I$I(this.tIdx, c, r);
var twoppx2=((twoppx / 2)|0);
var twoppy2=((twoppy / 2)|0);
var maxPrec=this.ppinfo[c][r].length;
var nPrec=0;
var istart=(Math.floor((try0 - cb0y) / twoppy)|0);
var iend=(Math.floor((try1 - 1 - cb0y ) / twoppy)|0);
var jstart=(Math.floor((trx0 - cb0x) / twoppx)|0);
var jend=(Math.floor((trx1 - 1 - cb0x ) / twoppx)|0);
var acb0x;
var acb0y;
var root=this.src.getSynSubbandTree$I$I(this.tIdx, c);
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
var tmp1;
var tmp2;
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
}this.ppinfo[c][r][nPrec]=Clazz.new_($I$(5,1).c$$I$I$I$I$I$I$I$I$I,[r, ((cb0x + j * twoppx)|0), ((cb0y + i * twoppy)|0), (twoppx|0), (twoppy|0), prg_ulx, prg_uly, prg_w, prg_h]);
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
this.ppinfo[c][r][nPrec].nblk[0]=0;
this.ttIncl[c][r][nPrec][0]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
this.ttMaxBP[c][r][nPrec][0]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[c][r][nPrec][0]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[c][r][nPrec][0]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].cblk[0]=Clazz.array($I$(7), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].nblk[0]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(7,1).c$$I$I,[k - k0, l - l0]);
if (l == l0) {
cb.ulx=sb.ulx;
} else {
cb.ulx=sb.ulx + l * cw - (sb.ulcx - acb0x);
}if (k == k0) {
cb.uly=sb.uly;
} else {
cb.uly=sb.uly + k * ch - (sb.ulcy - acb0y);
}tmp1=acb0x + l * cw;
tmp1=(tmp1 > sb.ulcx) ? tmp1 : sb.ulcx;
tmp2=acb0x + (l + 1) * cw;
tmp2=(tmp2 > sb.ulcx + sb.w) ? sb.ulcx + sb.w : tmp2;
cb.w=tmp2 - tmp1;
tmp1=acb0y + k * ch;
tmp1=(tmp1 > sb.ulcy) ? tmp1 : sb.ulcy;
tmp2=acb0y + (k + 1) * ch;
tmp2=(tmp2 > sb.ulcy + sb.h) ? sb.ulcy + sb.h : tmp2;
cb.h=tmp2 - tmp1;
this.ppinfo[c][r][nPrec].cblk[0][k - kstart][l - lstart]=cb;
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
this.ppinfo[c][r][nPrec].nblk[1]=0;
this.ttIncl[c][r][nPrec][1]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
this.ttMaxBP[c][r][nPrec][1]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[c][r][nPrec][1]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[c][r][nPrec][1]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].cblk[1]=Clazz.array($I$(7), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].nblk[1]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(7,1).c$$I$I,[k - k0, l - l0]);
if (l == l0) {
cb.ulx=sb.ulx;
} else {
cb.ulx=sb.ulx + l * cw - (sb.ulcx - acb0x);
}if (k == k0) {
cb.uly=sb.uly;
} else {
cb.uly=sb.uly + k * ch - (sb.ulcy - acb0y);
}tmp1=acb0x + l * cw;
tmp1=(tmp1 > sb.ulcx) ? tmp1 : sb.ulcx;
tmp2=acb0x + (l + 1) * cw;
tmp2=(tmp2 > sb.ulcx + sb.w) ? sb.ulcx + sb.w : tmp2;
cb.w=tmp2 - tmp1;
tmp1=acb0y + k * ch;
tmp1=(tmp1 > sb.ulcy) ? tmp1 : sb.ulcy;
tmp2=acb0y + (k + 1) * ch;
tmp2=(tmp2 > sb.ulcy + sb.h) ? sb.ulcy + sb.h : tmp2;
cb.h=tmp2 - tmp1;
this.ppinfo[c][r][nPrec].cblk[1][k - kstart][l - lstart]=cb;
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
this.ppinfo[c][r][nPrec].nblk[2]=0;
this.ttIncl[c][r][nPrec][2]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
this.ttMaxBP[c][r][nPrec][2]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[c][r][nPrec][2]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[c][r][nPrec][2]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].cblk[2]=Clazz.array($I$(7), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].nblk[2]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(7,1).c$$I$I,[k - k0, l - l0]);
if (l == l0) {
cb.ulx=sb.ulx;
} else {
cb.ulx=sb.ulx + l * cw - (sb.ulcx - acb0x);
}if (k == k0) {
cb.uly=sb.uly;
} else {
cb.uly=sb.uly + k * ch - (sb.ulcy - acb0y);
}tmp1=acb0x + l * cw;
tmp1=(tmp1 > sb.ulcx) ? tmp1 : sb.ulcx;
tmp2=acb0x + (l + 1) * cw;
tmp2=(tmp2 > sb.ulcx + sb.w) ? sb.ulcx + sb.w : tmp2;
cb.w=tmp2 - tmp1;
tmp1=acb0y + k * ch;
tmp1=(tmp1 > sb.ulcy) ? tmp1 : sb.ulcy;
tmp2=acb0y + (k + 1) * ch;
tmp2=(tmp2 > sb.ulcy + sb.h) ? sb.ulcy + sb.h : tmp2;
cb.h=tmp2 - tmp1;
this.ppinfo[c][r][nPrec].cblk[2][k - kstart][l - lstart]=cb;
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
this.ppinfo[c][r][nPrec].nblk[3]=0;
this.ttIncl[c][r][nPrec][3]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
this.ttMaxBP[c][r][nPrec][3]=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
} else {
this.ttIncl[c][r][nPrec][3]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ttMaxBP[c][r][nPrec][3]=Clazz.new_($I$(3,1).c$$I$I,[kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].cblk[3]=Clazz.array($I$(7), [kend - kstart + 1, lend - lstart + 1]);
this.ppinfo[c][r][nPrec].nblk[3]=(kend - kstart + 1) * (lend - lstart + 1);
for (var k=kstart; k <= kend; k++) {
for (var l=lstart; l <= lend; l++) {
cb=Clazz.new_($I$(7,1).c$$I$I,[k - k0, l - l0]);
if (l == l0) {
cb.ulx=sb.ulx;
} else {
cb.ulx=sb.ulx + l * cw - (sb.ulcx - acb0x);
}if (k == k0) {
cb.uly=sb.uly;
} else {
cb.uly=sb.uly + k * ch - (sb.ulcy - acb0y);
}tmp1=acb0x + l * cw;
tmp1=(tmp1 > sb.ulcx) ? tmp1 : sb.ulcx;
tmp2=acb0x + (l + 1) * cw;
tmp2=(tmp2 > sb.ulcx + sb.w) ? sb.ulcx + sb.w : tmp2;
cb.w=tmp2 - tmp1;
tmp1=acb0y + k * ch;
tmp1=(tmp1 > sb.ulcy) ? tmp1 : sb.ulcy;
tmp2=acb0y + (k + 1) * ch;
tmp2=(tmp2 > sb.ulcy + sb.h) ? sb.ulcy + sb.h : tmp2;
cb.h=tmp2 - tmp1;
this.ppinfo[c][r][nPrec].cblk[3][k - kstart][l - lstart]=cb;
}
}
}}}
}
}, p$1);

Clazz.newMeth(C$, 'getNumPrecinct$I$I', function (c, r) {
return this.numPrec[c][r].x * this.numPrec[c][r].y;
});

Clazz.newMeth(C$, 'readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA', function (l, r, c, p, cbI, nb) {
var ccb;
var nSeg;
var cbLen;
var ltp;
var passtype;
var tdIncl;
var tdBD;
var tmp;
var tmp2;
var totnewtp;
var lblockCur;
var tpidx;
var sumtotnewtp=0;
var cbc;
var startPktHead=this.ehs.getPos$();
if (startPktHead >= this.ehs.length$()) {
return true;
}var tIdx=this.src.getTileIdx$();
var bin;
var mend;
var nend;
var b;
var sb;
var root=this.src.getSynSubbandTree$I$I(tIdx, c);
if (this.pph) {
bin=Clazz.new_($I$(1,1).c$$java_io_ByteArrayInputStream,[this.pphbais]);
} else {
bin=this.bin;
}var mins=(r == 0) ? 0 : 1;
var maxs=(r == 0) ? 1 : 4;
var precFound=false;
for (var s=mins; s < maxs; s++) {
if (p < this.ppinfo[c][r].length) {
precFound=true;
}}
if (!precFound) {
return false;
}var prec=this.ppinfo[c][r][p];
bin.sync$();
if (bin.readBit$() == 0) {
this.cblks=Clazz.array($I$(8), [maxs + 1]);
for (var s=mins; s < maxs; s++) {
this.cblks[s]=Clazz.new_($I$(8,1));
}
this.pktIdx++;
if (this.isTruncMode && this.maxCB == -1 ) {
tmp=this.ehs.getPos$() - startPktHead;
if (tmp > nb[tIdx]) {
nb[tIdx]=0;
return true;
} else {
nb[tIdx]-=tmp;
}}if (this.ephUsed) {
this.readEPHMarker$io_scif_jj2000_j2k_codestream_reader_PktHeaderBitReader(bin);
}return false;
}if (this.cblks == null  || this.cblks.length < maxs + 1 ) {
this.cblks=Clazz.array($I$(8), [maxs + 1]);
}for (var s=mins; s < maxs; s++) {
if (this.cblks[s] == null ) {
this.cblks[s]=Clazz.new_($I$(8,1));
} else {
this.cblks[s].removeAllElements$();
}sb=root.getSubbandByIdx$I$I(r, s);
if (prec.nblk[s] == 0) {
continue;
}tdIncl=this.ttIncl[c][r][p][s];
tdBD=this.ttMaxBP[c][r][p][s];
mend=(prec.cblk[s] == null ) ? 0 : prec.cblk[s].length;
for (var m=0; m < mend; m++) {
nend=(prec.cblk[s][m] == null ) ? 0 : prec.cblk[s][m].length;
for (var n=0; n < nend; n++) {
cbc=prec.cblk[s][m][n].idx;
b=cbc.x + cbc.y * sb.numCb.x;
ccb=cbI[s][cbc.y][cbc.x];
try {
if (ccb == null  || ccb.ctp == 0 ) {
if (ccb == null ) {
ccb=cbI[s][cbc.y][cbc.x]=Clazz.new_($I$(2,1).c$$I$I$I$I$I,[prec.cblk[s][m][n].ulx, prec.cblk[s][m][n].uly, prec.cblk[s][m][n].w, prec.cblk[s][m][n].h, this.nl]);
}ccb.pktIdx[l]=this.pktIdx;
tmp=tdIncl.update$I$I$I$io_scif_jj2000_j2k_codestream_reader_PktHeaderBitReader(m, n, l + 1, bin);
if (tmp > l) {
continue;
}tmp=1;
for (tmp2=1; tmp >= tmp2; tmp2++) {
tmp=tdBD.update$I$I$I$io_scif_jj2000_j2k_codestream_reader_PktHeaderBitReader(m, n, tmp2, bin);
}
ccb.msbSkipped=tmp2 - 2;
totnewtp=1;
ccb.addNTP$I$I(l, 0);
this.ncb++;
if (this.maxCB != -1 && !this.ncbQuit  && this.ncb == this.maxCB ) {
this.ncbQuit=true;
this.tQuit=tIdx;
this.cQuit=c;
this.sQuit=s;
this.rQuit=r;
this.xQuit=cbc.x;
this.yQuit=cbc.y;
}} else {
ccb.pktIdx[l]=this.pktIdx;
if (bin.readBit$() != 1) {
continue;
}totnewtp=1;
}if (bin.readBit$() == 1) {
totnewtp++;
if (bin.readBit$() == 1) {
totnewtp++;
tmp=bin.readBits$I(2);
totnewtp+=tmp;
if (tmp == 3) {
tmp=bin.readBits$I(5);
totnewtp+=tmp;
if (tmp == 31) {
totnewtp+=bin.readBits$I(7);
}}}}ccb.addNTP$I$I(l, totnewtp);
sumtotnewtp+=totnewtp;
this.cblks[s].addElement$TE(prec.cblk[s][m][n]);
var options=(this.decSpec.ecopts.getTileCompVal$I$I(tIdx, c)).intValue$();
if ((options & 4) != 0) {
nSeg=totnewtp;
} else if ((options & 1) != 0) {
if (ccb.ctp <= 10) {
nSeg=1;
} else {
nSeg=1;
for (tpidx=ccb.ctp - totnewtp; tpidx < ccb.ctp - 1; tpidx++) {
if (tpidx >= 9) {
passtype=(tpidx + 2) % 3;
if (passtype == 1 || passtype == 2 ) {
nSeg++;
}}}
}} else {
nSeg=1;
}while (bin.readBit$() != 0){
this.lblock[c][r][s][cbc.y][cbc.x]++;
}
if (nSeg == 1) {
cbLen=bin.readBits$I(this.lblock[c][r][s][cbc.y][cbc.x] + $I$(9).log2$I(totnewtp));
} else {
ccb.segLen[l]=Clazz.array(Integer.TYPE, [nSeg]);
cbLen=0;
var j;
if ((options & 4) != 0) {
for (tpidx=ccb.ctp - totnewtp, j=0; tpidx < ccb.ctp; tpidx++, j++) {
lblockCur=this.lblock[c][r][s][cbc.y][cbc.x];
tmp=bin.readBits$I(lblockCur);
ccb.segLen[l][j]=tmp;
cbLen+=tmp;
}
} else {
ltp=ccb.ctp - totnewtp - 1 ;
for (tpidx=ccb.ctp - totnewtp, j=0; tpidx < ccb.ctp - 1; tpidx++) {
if (tpidx >= 9) {
passtype=(tpidx + 2) % 3;
if (passtype == 0) continue;
lblockCur=this.lblock[c][r][s][cbc.y][cbc.x];
tmp=bin.readBits$I(lblockCur + $I$(9).log2$I(tpidx - ltp));
ccb.segLen[l][j]=tmp;
cbLen+=tmp;
ltp=tpidx;
j++;
}}
lblockCur=this.lblock[c][r][s][cbc.y][cbc.x];
tmp=bin.readBits$I(lblockCur + $I$(9).log2$I(tpidx - ltp));
cbLen+=tmp;
ccb.segLen[l][j]=tmp;
}}ccb.len[l]=cbLen;
if (this.isTruncMode && this.maxCB == -1 ) {
tmp=this.ehs.getPos$() - startPktHead;
if (tmp > nb[tIdx]) {
nb[tIdx]=0;
if (l == 0) {
cbI[s][cbc.y][cbc.x]=null;
} else {
ccb.off[l]=ccb.len[l]=0;
ccb.ctp-=ccb.ntp[l];
ccb.ntp[l]=0;
ccb.pktIdx[l]=-1;
}return true;
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
if (l == 0) {
cbI[s][cbc.y][cbc.x]=null;
} else {
ccb.off[l]=ccb.len[l]=0;
ccb.ctp-=ccb.ntp[l];
ccb.ntp[l]=0;
ccb.pktIdx[l]=-1;
}return true;
} else {
throw e;
}
}
}
}
}
if (this.ephUsed) {
this.readEPHMarker$io_scif_jj2000_j2k_codestream_reader_PktHeaderBitReader(bin);
}this.pktIdx++;
if (this.isTruncMode && this.maxCB == -1 ) {
tmp=this.ehs.getPos$() - startPktHead;
if (tmp > nb[tIdx]) {
nb[tIdx]=0;
return true;
} else {
nb[tIdx]-=tmp;
}}return false;
});

Clazz.newMeth(C$, 'readPktBody$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA', function (l, r, c, p, cbI, nb) {
var curOff=this.ehs.getPos$();
var curCB;
var ccb;
var stopRead=false;
var tIdx=this.src.getTileIdx$();
var cbc;
var precFound=false;
var mins=(r == 0) ? 0 : 1;
var maxs=(r == 0) ? 1 : 4;
for (var s=mins; s < maxs; s++) {
if (p < this.ppinfo[c][r].length) {
precFound=true;
}}
if (!precFound) {
return false;
}for (var s=mins; s < maxs; s++) {
for (var numCB=0; numCB < this.cblks[s].size$(); numCB++) {
cbc=(this.cblks[s].elementAt$I(numCB)).idx;
ccb=cbI[s][cbc.y][cbc.x];
ccb.off[l]=curOff;
curOff+=ccb.len[l];
try {
this.ehs.seek$I(curOff);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
if (l == 0) {
cbI[s][cbc.y][cbc.x]=null;
} else {
ccb.off[l]=ccb.len[l]=0;
ccb.ctp-=ccb.ntp[l];
ccb.ntp[l]=0;
ccb.pktIdx[l]=-1;
}throw Clazz.new_(Clazz.load('java.io.EOFException'));
} else {
throw e;
}
}
if (this.isTruncMode) {
if (stopRead || ccb.len[l] > nb[tIdx] ) {
if (l == 0) {
cbI[s][cbc.y][cbc.x]=null;
} else {
ccb.off[l]=ccb.len[l]=0;
ccb.ctp-=ccb.ntp[l];
ccb.ntp[l]=0;
ccb.pktIdx[l]=-1;
}stopRead=true;
}if (!stopRead) {
nb[tIdx]-=ccb.len[l];
}}if (this.ncbQuit && r == this.rQuit  && s == this.sQuit  && cbc.x == this.xQuit  && cbc.y == this.yQuit  && tIdx == this.tQuit  && c == this.cQuit ) {
cbI[s][cbc.y][cbc.x]=null;
stopRead=true;
}}
}
this.ehs.seek$I(curOff);
if (stopRead) {
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'getPPX$I$I$I', function (t, c, r) {
return this.decSpec.pss.getPPX$I$I$I(t, c, r);
});

Clazz.newMeth(C$, 'getPPY$I$I$I', function (t, c, rl) {
return this.decSpec.pss.getPPY$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'readSOPMarker$IA$I$I$I', function (nBytes, p, c, r) {
var val;
var sopArray=Clazz.array(Byte.TYPE, [6]);
var tIdx=this.src.getTileIdx$();
var mins=(r == 0) ? 0 : 1;
var maxs=(r == 0) ? 1 : 4;
var precFound=false;
for (var s=mins; s < maxs; s++) {
if (p < this.ppinfo[c][r].length) {
precFound=true;
}}
if (!precFound) {
return false;
}if (!this.sopUsed) {
return false;
}var pos=this.ehs.getPos$();
if (($s$[0] = ((this.ehs.read$() << 8) | this.ehs.read$()), $s$[0]) != -111) {
this.ehs.seek$I(pos);
return false;
}this.ehs.seek$I(pos);
if (nBytes[tIdx] < 6) {
return true;
}nBytes[tIdx]-=6;
this.ehs.readFully$BA$I$I(sopArray, 0, 6);
val=sopArray[0];
val<<=8;
val|=sopArray[1];
if (val != -111) {
throw Clazz.new_($I$(10,1).c$$S,["Corrupted Bitstream: Could not parse SOP marker !"]);
}val=(sopArray[2] & 255);
val<<=8;
val|=(sopArray[3] & 255);
if (val != 4) {
throw Clazz.new_($I$(10,1).c$$S,["Corrupted Bitstream: Corrupted SOP marker !"]);
}val=(sopArray[4] & 255);
val<<=8;
val|=(sopArray[5] & 255);
if (!this.pph && val != this.pktIdx ) {
throw Clazz.new_($I$(10,1).c$$S,["Corrupted Bitstream: SOP marker out of sequence !"]);
}if (this.pph && val != this.pktIdx - 1 ) {
throw Clazz.new_($I$(10,1).c$$S,["Corrupted Bitstream: SOP marker out of sequence !"]);
}return false;
});

Clazz.newMeth(C$, 'readEPHMarker$io_scif_jj2000_j2k_codestream_reader_PktHeaderBitReader', function (bin) {
var val;
var ephArray=Clazz.array(Byte.TYPE, [2]);
if (bin.usebais) {
bin.bais.read$BA$I$I(ephArray, 0, 2);
} else {
bin.$in.readFully$BA$I$I(ephArray, 0, 2);
}val=ephArray[0];
val<<=8;
val|=ephArray[1];
if (val != -110) {
throw Clazz.new_($I$(10,1).c$$S,["Corrupted Bitstream: Could not parse EPH marker ! "]);
}});

Clazz.newMeth(C$, 'getPrecInfo$I$I$I', function (c, r, p) {
return this.ppinfo[c][r][p];
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
