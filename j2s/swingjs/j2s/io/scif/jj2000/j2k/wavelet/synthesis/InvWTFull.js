(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis"),p$1={},I$=[[0,'io.scif.jj2000.j2k.image.DataBlk','io.scif.jj2000.j2k.util.FacilityManager','io.scif.jj2000.j2k.image.DataBlkFloat','io.scif.jj2000.j2k.image.DataBlkInt']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InvWTFull", null, 'io.scif.jj2000.j2k.wavelet.synthesis.InverseWT');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pw=null;
this.cblkToDecode=0;
this.nDecCblk=0;
}, 1);

C$.$fields$=[['I',['cblkToDecode','nDecCblk','dtype'],'O',['pw','io.scif.jj2000.j2k.util.ProgressWatch','src','io.scif.jj2000.j2k.wavelet.synthesis.CBlkWTDataSrcDec','reconstructedComps','io.scif.jj2000.j2k.image.DataBlk[]','ndl','int[]','reversible','boolean[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_wavelet_synthesis_CBlkWTDataSrcDec$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (src, decSpec) {
;C$.superclazz.c$$io_scif_jj2000_j2k_wavelet_synthesis_MultiResImgData$io_scif_jj2000_j2k_decoder_DecoderSpecs.apply(this,[src, decSpec]);C$.$init$.apply(this);
this.src=src;
var nc=src.getNumComps$();
this.reconstructedComps=Clazz.array($I$(1), [nc]);
this.ndl=Clazz.array(Integer.TYPE, [nc]);
this.pw=$I$(2).getProgressWatch$();
}, 1);

Clazz.newMeth(C$, 'isSubbandReversible$io_scif_jj2000_j2k_wavelet_Subband', function (subband) {
if (subband.isNode) {
return p$1.isSubbandReversible$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [subband.getLL$()]) && p$1.isSubbandReversible$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [subband.getHL$()]) && p$1.isSubbandReversible$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [subband.getLH$()]) && p$1.isSubbandReversible$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [subband.getHH$()]) && (subband).hFilter.isReversible$() && (subband).vFilter.isReversible$()  ;
} else {
return true;
}}, p$1);

Clazz.newMeth(C$, 'isReversible$I$I', function (t, c) {
if (this.reversible[t] == null ) {
this.reversible[t]=Clazz.array(Boolean.TYPE, [this.getNumComps$()]);
for (var i=this.reversible.length - 1; i >= 0; i--) {
this.reversible[t][i]=p$1.isSubbandReversible$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [this.src.getSynSubbandTree$I$I(t, i)]);
}
}return this.reversible[t][c];
});

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
return this.src.getNomRangeBits$I(c);
});

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return this.src.getFixedPoint$I(c);
});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
var tIdx=this.getTileIdx$();
if (this.src.getSynSubbandTree$I$I(tIdx, c).getHorWFilter$() == null ) {
this.dtype=3;
} else {
this.dtype=this.src.getSynSubbandTree$I$I(tIdx, c).getHorWFilter$().getDataType$();
}if (this.reconstructedComps[c] == null ) {
switch (this.dtype) {
case 4:
this.reconstructedComps[c]=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, this.getTileCompWidth$I$I(tIdx, c), this.getTileCompHeight$I$I(tIdx, c)]);
break;
case 3:
this.reconstructedComps[c]=Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, this.getTileCompWidth$I$I(tIdx, c), this.getTileCompHeight$I$I(tIdx, c)]);
break;
}
p$1.waveletTreeReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I.apply(this, [this.reconstructedComps[c], this.src.getSynSubbandTree$I$I(tIdx, c), c]);
if (this.pw != null  && c == this.src.getNumComps$() - 1 ) {
this.pw.terminateProgressWatch$();
}}if (blk.getDataType$() != this.dtype) {
if (this.dtype == 3) {
blk=Clazz.new_($I$(4,1).c$$I$I$I$I,[blk.ulx, blk.uly, blk.w, blk.h]);
} else {
blk=Clazz.new_($I$(3,1).c$$I$I$I$I,[blk.ulx, blk.uly, blk.w, blk.h]);
}}blk.setData$O(this.reconstructedComps[c].getData$());
blk.offset=this.reconstructedComps[c].w * blk.uly + blk.ulx;
blk.scanw=this.reconstructedComps[c].w;
blk.progressive=false;
return blk;
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
var j;
var src_data;
var dst_data;
var src_data_int;
var dst_data_int;
var src_data_float;
var dst_data_float;
dst_data=null;
switch (blk.getDataType$()) {
case 3:
dst_data_int=blk.getData$();
if (dst_data_int == null  || dst_data_int.length < blk.w * blk.h ) {
dst_data_int=Clazz.array(Integer.TYPE, [blk.w * blk.h]);
}dst_data=dst_data_int;
break;
case 4:
dst_data_float=blk.getData$();
if (dst_data_float == null  || dst_data_float.length < blk.w * blk.h ) {
dst_data_float=Clazz.array(Float.TYPE, [blk.w * blk.h]);
}dst_data=dst_data_float;
break;
}
blk=this.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
blk.setData$O(dst_data);
blk.offset=0;
blk.scanw=blk.w;
return blk;
});

Clazz.newMeth(C$, 'wavelet2DReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I', function (db, sb, c) {
var data;
var buf;
var ulx;
var uly;
var w;
var h;
var i;
var j;
var k;
var offset;
if (sb.w == 0 || sb.h == 0 ) {
return;
}data=db.getData$();
ulx=sb.ulx;
uly=sb.uly;
w=sb.w;
h=sb.h;
buf=null;
switch (sb.getHorWFilter$().getDataType$()) {
case 3:
buf=Clazz.array(Integer.TYPE, [(w >= h) ? w : h]);
break;
case 4:
buf=Clazz.array(Float.TYPE, [(w >= h) ? w : h]);
break;
}
offset=(uly - db.uly) * db.w + ulx - db.ulx;
if (sb.ulcx % 2 == 0) {
for (i=0; i < h; i++, offset+=db.w) {
System.arraycopy$O$I$O$I$I(data, offset, buf, 0, w);
sb.hFilter.synthetize_lpf$O$I$I$I$O$I$I$I$O$I$I(buf, 0, ((w + 1)/2|0), 1, buf, ((w + 1)/2|0), (w/2|0), 1, data, offset, 1);
}
} else {
for (i=0; i < h; i++, offset+=db.w) {
System.arraycopy$O$I$O$I$I(data, offset, buf, 0, w);
sb.hFilter.synthetize_hpf$O$I$I$I$O$I$I$I$O$I$I(buf, 0, (w/2|0), 1, buf, (w/2|0), ((w + 1)/2|0), 1, data, offset, 1);
}
}offset=(uly - db.uly) * db.w + ulx - db.ulx;
switch (sb.getVerWFilter$().getDataType$()) {
case 3:
var data_int;
var buf_int;
data_int=data;
buf_int=buf;
if (sb.ulcy % 2 == 0) {
for (j=0; j < w; j++, offset++) {
for (i=h - 1, k=offset + i * db.w; i >= 0; i--, k-=db.w) buf_int[i]=data_int[k];

sb.vFilter.synthetize_lpf$O$I$I$I$O$I$I$I$O$I$I(buf, 0, ((h + 1)/2|0), 1, buf, ((h + 1)/2|0), (h/2|0), 1, data, offset, db.w);
}
} else {
for (j=0; j < w; j++, offset++) {
for (i=h - 1, k=offset + i * db.w; i >= 0; i--, k-=db.w) buf_int[i]=data_int[k];

sb.vFilter.synthetize_hpf$O$I$I$I$O$I$I$I$O$I$I(buf, 0, (h/2|0), 1, buf, (h/2|0), ((h + 1)/2|0), 1, data, offset, db.w);
}
}break;
case 4:
var data_float;
var buf_float;
data_float=data;
buf_float=buf;
if (sb.ulcy % 2 == 0) {
for (j=0; j < w; j++, offset++) {
for (i=h - 1, k=offset + i * db.w; i >= 0; i--, k-=db.w) buf_float[i]=data_float[k];

sb.vFilter.synthetize_lpf$O$I$I$I$O$I$I$I$O$I$I(buf, 0, ((h + 1)/2|0), 1, buf, ((h + 1)/2|0), (h/2|0), 1, data, offset, db.w);
}
} else {
for (j=0; j < w; j++, offset++) {
for (i=h - 1, k=offset + i * db.w; i >= 0; i--, k-=db.w) buf_float[i]=data_float[k];

sb.vFilter.synthetize_hpf$O$I$I$I$O$I$I$I$O$I$I(buf, 0, (h/2|0), 1, buf, (h/2|0), ((h + 1)/2|0), 1, data, offset, db.w);
}
}break;
}
}, p$1);

Clazz.newMeth(C$, 'waveletTreeReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I', function (img, sb, c) {
var subbData;
if (!sb.isNode) {
var i;
var m;
var n;
var src_data;
var dst_data;
var ncblks;
if (sb.w == 0 || sb.h == 0 ) {
return;
}if (this.dtype == 3) {
subbData=Clazz.new_($I$(4,1));
} else {
subbData=Clazz.new_($I$(3,1));
}ncblks=sb.numCb;
dst_data=img.getData$();
for (m=0; m < ncblks.y; m++) {
for (n=0; n < ncblks.x; n++) {
subbData=this.src.getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk(c, m, n, sb, subbData);
src_data=subbData.getData$();
if (this.pw != null ) {
this.nDecCblk++;
this.pw.updateProgressWatch$I$S(this.nDecCblk, null);
}for (i=subbData.h - 1; i >= 0; i--) {
System.arraycopy$O$I$O$I$I(src_data, subbData.offset + i * subbData.scanw, dst_data, (subbData.uly + i) * img.w + subbData.ulx, subbData.w);
}
}
}
} else if (sb.isNode) {
p$1.waveletTreeReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I.apply(this, [img, sb.getLL$(), c]);
if (sb.resLvl <= this.reslvl - this.maxImgRes + this.ndl[c]) {
p$1.waveletTreeReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I.apply(this, [img, sb.getHL$(), c]);
p$1.waveletTreeReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I.apply(this, [img, sb.getLH$(), c]);
p$1.waveletTreeReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I.apply(this, [img, sb.getHH$(), c]);
p$1.wavelet2DReconstruction$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I.apply(this, [img, sb, c]);
}}}, p$1);

Clazz.newMeth(C$, 'getImplementationType$I', function (c) {
return 2;
});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
var i;
C$.superclazz.prototype.setTile$I$I.apply(this, [x, y]);
var nc=this.src.getNumComps$();
var tIdx=this.src.getTileIdx$();
for (var c=0; c < nc; c++) {
this.ndl[c]=this.src.getSynSubbandTree$I$I(tIdx, c).resLvl;
}
if (this.reconstructedComps != null ) {
for (i=this.reconstructedComps.length - 1; i >= 0; i--) {
this.reconstructedComps[i]=null;
}
}this.cblkToDecode=0;
var root;
var sb;
for (var c=0; c < nc; c++) {
root=this.src.getSynSubbandTree$I$I(tIdx, c);
for (var r=0; r <= this.reslvl - this.maxImgRes + root.resLvl; r++) {
if (r == 0) {
sb=root.getSubbandByIdx$I$I(0, 0);
if (sb != null ) this.cblkToDecode+=sb.numCb.x * sb.numCb.y;
} else {
sb=root.getSubbandByIdx$I$I(r, 1);
if (sb != null ) this.cblkToDecode+=sb.numCb.x * sb.numCb.y;
sb=root.getSubbandByIdx$I$I(r, 2);
if (sb != null ) this.cblkToDecode+=sb.numCb.x * sb.numCb.y;
sb=root.getSubbandByIdx$I$I(r, 3);
if (sb != null ) this.cblkToDecode+=sb.numCb.x * sb.numCb.y;
}}
}
this.nDecCblk=0;
if (this.pw != null ) {
this.pw.initProgressWatch$I$I$S(0, this.cblkToDecode, "Decoding tile " + tIdx + "..." );
}});

Clazz.newMeth(C$, 'nextTile$', function () {
var i;
C$.superclazz.prototype.nextTile$.apply(this, []);
var nc=this.src.getNumComps$();
var tIdx=this.src.getTileIdx$();
for (var c=0; c < nc; c++) {
this.ndl[c]=this.src.getSynSubbandTree$I$I(tIdx, c).resLvl;
}
if (this.reconstructedComps != null ) {
for (i=this.reconstructedComps.length - 1; i >= 0; i--) {
this.reconstructedComps[i]=null;
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
