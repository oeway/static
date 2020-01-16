(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),p$1={},I$=[[0,'io.scif.jj2000.j2k.wavelet.analysis.SubbandAn','io.scif.jj2000.j2k.image.DataBlk','io.scif.jj2000.j2k.image.DataBlkInt','io.scif.jj2000.j2k.image.DataBlkFloat','Error','io.scif.jj2000.j2k.wavelet.analysis.CBlkWTDataInt','io.scif.jj2000.j2k.wavelet.analysis.CBlkWTDataFloat','io.scif.jj2000.j2k.util.MathUtil','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ForwWTFull", null, 'io.scif.jj2000.j2k.wavelet.analysis.ForwardWT');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['intData'],'I',['cb0x','cb0y'],'O',['subbTrees','io.scif.jj2000.j2k.wavelet.analysis.SubbandAn[][]','src','io.scif.jj2000.j2k.image.BlkImgDataSrc','dls','io.scif.jj2000.j2k.IntegerSpec','filters','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterSpec','cblks','io.scif.jj2000.j2k.entropy.CBlkSizeSpec','pss','io.scif.jj2000.j2k.entropy.PrecinctSizeSpec','decomposedComps','io.scif.jj2000.j2k.image.DataBlk[]','lastn','int[]','+lastm','currentSubband','io.scif.jj2000.j2k.wavelet.analysis.SubbandAn[]','ncblks','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$I$I', function (src, wp, pox, poy) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
this.cb0x=this.cb0x;
this.cb0y=this.cb0y;
this.dls=wp.getDecompositionLevel$();
this.filters=wp.getFilters$();
this.cblks=wp.getCodeBlockSize$();
this.pss=wp.getPrecinctPartition$();
var ncomp=src.getNumComps$();
var ntiles=src.getNumTiles$();
this.currentSubband=Clazz.array($I$(1), [ncomp]);
this.decomposedComps=Clazz.array($I$(2), [ncomp]);
this.subbTrees=Clazz.array($I$(1), [ntiles, ncomp]);
this.lastn=Clazz.array(Integer.TYPE, [ncomp]);
this.lastm=Clazz.array(Integer.TYPE, [ncomp]);
}, 1);

Clazz.newMeth(C$, 'getImplementationType$I', function (c) {
return 2;
});

Clazz.newMeth(C$, 'getDecompLevels$I$I', function (t, c) {
return (this.dls.getTileCompVal$I$I(t, c)).intValue$();
});

Clazz.newMeth(C$, 'getDecomp$I$I', function (t, c) {
return 0;
});

Clazz.newMeth(C$, 'getHorAnWaveletFilters$I$I', function (t, c) {
return this.filters.getHFilters$I$I(t, c);
});

Clazz.newMeth(C$, 'getVertAnWaveletFilters$I$I', function (t, c) {
return this.filters.getVFilters$I$I(t, c);
});

Clazz.newMeth(C$, 'isReversible$I$I', function (t, c) {
return this.filters.isReversible$I$I(t, c);
});

Clazz.newMeth(C$, 'getCbULX$', function () {
return this.cb0x;
});

Clazz.newMeth(C$, 'getCbULY$', function () {
return this.cb0y;
});

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return this.src.getFixedPoint$I(c);
});

Clazz.newMeth(C$, 'getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData', function (c, cblk) {
var cbm;
var cbn;
var cn;
var cm;
var acb0x;
var acb0y;
var sb;
this.intData=(this.filters.getWTDataType$I$I(this.tIdx, c) == 3);
if (this.decomposedComps[c] == null ) {
var k;
var w;
var h;
var bufblk;
var dst_data;
w=this.getTileCompWidth$I$I(this.tIdx, c);
h=this.getTileCompHeight$I$I(this.tIdx, c);
if (this.intData) {
this.decomposedComps[c]=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, w, h]);
bufblk=Clazz.new_($I$(3,1));
} else {
this.decomposedComps[c]=Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, w, h]);
bufblk=Clazz.new_($I$(4,1));
}dst_data=this.decomposedComps[c].getData$();
var lstart=this.getCompULX$I(c);
bufblk.ulx=lstart;
bufblk.w=w;
bufblk.h=1;
var kk=this.getCompULY$I(c);
for (k=0; k < h; k++, kk++) {
bufblk.uly=kk;
bufblk.ulx=lstart;
bufblk=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(bufblk, c);
System.arraycopy$O$I$O$I$I(bufblk.getData$(), bufblk.offset, dst_data, k * w, w);
}
p$1.waveletTreeDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I.apply(this, [this.decomposedComps[c], this.getAnSubbandTree$I$I(this.tIdx, c), c]);
this.currentSubband[c]=p$1.getNextSubband$I.apply(this, [c]);
this.lastn[c]=-1;
this.lastm[c]=0;
}do {
this.ncblks=this.currentSubband[c].numCb;
this.lastn[c]++;
if (this.lastn[c] == this.ncblks.x) {
this.lastn[c]=0;
this.lastm[c]++;
}if (this.lastm[c] < this.ncblks.y) {
break;
}this.currentSubband[c]=p$1.getNextSubband$I.apply(this, [c]);
this.lastn[c]=-1;
this.lastm[c]=0;
if (this.currentSubband[c] == null ) {
this.decomposedComps[c]=null;
return null;
}} while (true);
acb0x=this.cb0x;
acb0y=this.cb0y;
switch (this.currentSubband[c].sbandIdx) {
case 0:
break;
case 1:
acb0x=0;
break;
case 2:
acb0y=0;
break;
case 3:
acb0x=0;
acb0y=0;
break;
default:
throw Clazz.new_($I$(5,1).c$$S,["Internal JJ2000 error"]);
}
if (cblk == null ) {
if (this.intData) {
cblk=Clazz.new_($I$(6,1));
} else {
cblk=Clazz.new_($I$(7,1));
}}cbn=this.lastn[c];
cbm=this.lastm[c];
sb=this.currentSubband[c];
cblk.n=cbn;
cblk.m=cbm;
cblk.sb=sb;
cn=((sb.ulcx - acb0x + sb.nomCBlkW)/sb.nomCBlkW|0) - 1;
cm=((sb.ulcy - acb0y + sb.nomCBlkH)/sb.nomCBlkH|0) - 1;
if (cbn == 0) {
cblk.ulx=sb.ulx;
} else {
cblk.ulx=(cn + cbn) * sb.nomCBlkW - (sb.ulcx - acb0x) + sb.ulx;
}if (cbm == 0) {
cblk.uly=sb.uly;
} else {
cblk.uly=(cm + cbm) * sb.nomCBlkH - (sb.ulcy - acb0y) + sb.uly;
}if (cbn < this.ncblks.x - 1) {
cblk.w=(cn + cbn + 1 ) * sb.nomCBlkW - (sb.ulcx - acb0x) + sb.ulx - cblk.ulx;
} else {
cblk.w=sb.ulx + sb.w - cblk.ulx;
}if (cbm < this.ncblks.y - 1) {
cblk.h=(cm + cbm + 1 ) * sb.nomCBlkH - (sb.ulcy - acb0y) + sb.uly - cblk.uly;
} else {
cblk.h=sb.uly + sb.h - cblk.uly;
}cblk.wmseScaling=1.0;
cblk.offset=cblk.uly * this.decomposedComps[c].w + cblk.ulx;
cblk.scanw=this.decomposedComps[c].w;
cblk.setData$O(this.decomposedComps[c].getData$());
return cblk;
});

Clazz.newMeth(C$, 'getNextCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData', function (c, cblk) {
var j;
var k;
var w;
var dst_data;
var dst_data_int;
var dst_data_float;
var src_data;
this.intData=(this.filters.getWTDataType$I$I(this.tIdx, c) == 3);
dst_data=null;
if (cblk != null ) {
dst_data=cblk.getData$();
}cblk=this.getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(c, cblk);
if (cblk == null ) {
return null;
}if (this.intData) {
dst_data_int=dst_data;
if (dst_data_int == null  || dst_data_int.length < cblk.w * cblk.h ) {
dst_data=Clazz.array(Integer.TYPE, [cblk.w * cblk.h]);
}} else {
dst_data_float=dst_data;
if (dst_data_float == null  || dst_data_float.length < cblk.w * cblk.h ) {
dst_data=Clazz.array(Float.TYPE, [cblk.w * cblk.h]);
}}src_data=cblk.getData$();
w=cblk.w;
for (j=w * (cblk.h - 1), k=cblk.offset + (cblk.h - 1) * cblk.scanw; j >= 0; j-=w, k-=cblk.scanw) {
System.arraycopy$O$I$O$I$I(src_data, k, dst_data, j, w);
}
cblk.setData$O(dst_data);
cblk.offset=0;
cblk.scanw=w;
return cblk;
});

Clazz.newMeth(C$, 'getDataType$I$I', function (t, c) {
return this.filters.getWTDataType$I$I(t, c);
});

Clazz.newMeth(C$, 'getNextSubband$I', function (c) {
var down=1;
var up=0;
var direction=down;
var nextsb;
nextsb=this.currentSubband[c];
if (nextsb == null ) {
nextsb=this.getAnSubbandTree$I$I(this.tIdx, c);
if (!nextsb.isNode) {
return nextsb;
}}do {
if (nextsb == null ) {
break;
} else if (!nextsb.isNode) {
switch (nextsb.orientation) {
case 3:
nextsb=nextsb.getParent$().getLH$();
direction=down;
break;
case 2:
nextsb=nextsb.getParent$().getHL$();
direction=down;
break;
case 1:
nextsb=nextsb.getParent$().getLL$();
direction=down;
break;
case 0:
nextsb=nextsb.getParent$();
direction=up;
break;
}
} else if (nextsb.isNode) {
if (direction == down) {
nextsb=nextsb.getHH$();
} else if (direction == up) {
switch (nextsb.orientation) {
case 3:
nextsb=nextsb.getParent$().getLH$();
direction=down;
break;
case 2:
nextsb=nextsb.getParent$().getHL$();
direction=down;
break;
case 1:
nextsb=nextsb.getParent$().getLL$();
direction=down;
break;
case 0:
nextsb=nextsb.getParent$();
direction=up;
break;
}
}}if (nextsb == null ) {
break;
}} while (nextsb.isNode);
return nextsb;
}, p$1);

Clazz.newMeth(C$, 'waveletTreeDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I', function (band, subband, c) {
if (!subband.isNode) return;
 else {
p$1.wavelet2DDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I.apply(this, [band, subband, c]);
p$1.waveletTreeDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I.apply(this, [band, subband.getHH$(), c]);
p$1.waveletTreeDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I.apply(this, [band, subband.getLH$(), c]);
p$1.waveletTreeDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I.apply(this, [band, subband.getHL$(), c]);
p$1.waveletTreeDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I.apply(this, [band, subband.getLL$(), c]);
}}, p$1);

Clazz.newMeth(C$, 'wavelet2DDecomposition$io_scif_jj2000_j2k_image_DataBlk$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I', function (band, subband, c) {
var ulx;
var uly;
var w;
var h;
var band_w;
var band_h;
if (subband.w == 0 || subband.h == 0 ) {
return;
}ulx=subband.ulx;
uly=subband.uly;
w=subband.w;
h=subband.h;
band_w=this.getTileCompWidth$I$I(this.tIdx, c);
band_h=this.getTileCompHeight$I$I(this.tIdx, c);
if (this.intData) {
var i;
var j;
var offset;
var tmpVector=Clazz.array(Integer.TYPE, [java.lang.Math.max(w, h)]);
var data=(band).getDataInt$();
if (subband.ulcy % 2 == 0) {
for (j=0; j < w; j++) {
offset=uly * band_w + ulx + j;
for (i=0; i < h; i++) tmpVector[i]=data[offset + (i * band_w)];

subband.vFilter.analyze_lpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, h, 1, data, offset, band_w, data, offset + (((h + 1)/2|0)) * band_w, band_w);
}
} else {
for (j=0; j < w; j++) {
offset=uly * band_w + ulx + j;
for (i=0; i < h; i++) tmpVector[i]=data[offset + (i * band_w)];

subband.vFilter.analyze_hpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, h, 1, data, offset, band_w, data, offset + ((h/2|0)) * band_w, band_w);
}
}if (subband.ulcx % 2 == 0) {
for (i=0; i < h; i++) {
offset=(uly + i) * band_w + ulx;
for (j=0; j < w; j++) tmpVector[j]=data[offset + j];

subband.hFilter.analyze_lpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, w, 1, data, offset, 1, data, offset + ((w + 1)/2|0), 1);
}
} else {
for (i=0; i < h; i++) {
offset=(uly + i) * band_w + ulx;
for (j=0; j < w; j++) tmpVector[j]=data[offset + j];

subband.hFilter.analyze_hpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, w, 1, data, offset, 1, data, offset + (w/2|0), 1);
}
}} else {
var i;
var j;
var offset;
var tmpVector=Clazz.array(Float.TYPE, [java.lang.Math.max(w, h)]);
var data=(band).getDataFloat$();
if (subband.ulcy % 2 == 0) {
for (j=0; j < w; j++) {
offset=uly * band_w + ulx + j;
for (i=0; i < h; i++) tmpVector[i]=data[offset + (i * band_w)];

subband.vFilter.analyze_lpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, h, 1, data, offset, band_w, data, offset + (((h + 1)/2|0)) * band_w, band_w);
}
} else {
for (j=0; j < w; j++) {
offset=uly * band_w + ulx + j;
for (i=0; i < h; i++) tmpVector[i]=data[offset + (i * band_w)];

subband.vFilter.analyze_hpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, h, 1, data, offset, band_w, data, offset + ((h/2|0)) * band_w, band_w);
}
}if (subband.ulcx % 2 == 0) {
for (i=0; i < h; i++) {
offset=(uly + i) * band_w + ulx;
for (j=0; j < w; j++) tmpVector[j]=data[offset + j];

subband.hFilter.analyze_lpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, w, 1, data, offset, 1, data, offset + ((w + 1)/2|0), 1);
}
} else {
for (i=0; i < h; i++) {
offset=(uly + i) * band_w + ulx;
for (j=0; j < w; j++) tmpVector[j]=data[offset + j];

subband.hFilter.analyze_hpf$O$I$I$I$O$I$I$O$I$I(tmpVector, 0, w, 1, data, offset, 1, data, offset + (w/2|0), 1);
}
}}}, p$1);

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
var i;
C$.superclazz.prototype.setTile$I$I.apply(this, [x, y]);
if (this.decomposedComps != null ) {
for (i=this.decomposedComps.length - 1; i >= 0; i--) {
this.decomposedComps[i]=null;
this.currentSubband[i]=null;
}
}});

Clazz.newMeth(C$, 'nextTile$', function () {
var i;
C$.superclazz.prototype.nextTile$.apply(this, []);
if (this.decomposedComps != null ) {
for (i=this.decomposedComps.length - 1; i >= 0; i--) {
this.decomposedComps[i]=null;
this.currentSubband[i]=null;
}
}});

Clazz.newMeth(C$, 'getAnSubbandTree$I$I', function (t, c) {
if (this.subbTrees[t][c] == null ) {
this.subbTrees[t][c]=Clazz.new_($I$(1,1).c$$I$I$I$I$I$io_scif_jj2000_j2k_wavelet_WaveletFilterA$io_scif_jj2000_j2k_wavelet_WaveletFilterA,[this.getTileCompWidth$I$I(this.tIdx, c), this.getTileCompHeight$I$I(this.tIdx, c), this.getCompULX$I(c), this.getCompULY$I(c), this.getDecompLevels$I$I(t, c), this.getHorAnWaveletFilters$I$I(t, c), this.getVertAnWaveletFilters$I$I(t, c)]);
p$1.initSubbandsFields$I$I$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [t, c, this.subbTrees[t][c]]);
}return this.subbTrees[t][c];
});

Clazz.newMeth(C$, 'initSubbandsFields$I$I$io_scif_jj2000_j2k_wavelet_Subband', function (t, c, sb) {
var cbw=this.cblks.getCBlkWidth$B$I$I(($b$[0] = 3, $b$[0]), t, c);
var cbh=this.cblks.getCBlkHeight$B$I$I(($b$[0] = 3, $b$[0]), t, c);
if (!sb.isNode) {
var ppx;
var ppy;
var ppxExp;
var ppyExp;
var cbwExp;
var cbhExp;
ppx=this.pss.getPPX$I$I$I(t, c, sb.resLvl);
ppy=this.pss.getPPY$I$I$I(t, c, sb.resLvl);
if (ppx != 65535 || ppy != 65535 ) {
ppxExp=$I$(8).log2$I(ppx);
ppyExp=$I$(8).log2$I(ppy);
cbwExp=$I$(8).log2$I(cbw);
cbhExp=$I$(8).log2$I(cbh);
switch (sb.resLvl) {
case 0:
sb.nomCBlkW=(cbwExp < ppxExp ? (1 << cbwExp) : (1 << ppxExp));
sb.nomCBlkH=(cbhExp < ppyExp ? (1 << cbhExp) : (1 << ppyExp));
break;
default:
sb.nomCBlkW=(cbwExp < ppxExp - 1 ? (1 << cbwExp) : (1 << (ppxExp - 1)));
sb.nomCBlkH=(cbhExp < ppyExp - 1 ? (1 << cbhExp) : (1 << (ppyExp - 1)));
break;
}
} else {
sb.nomCBlkW=cbw;
sb.nomCBlkH=cbh;
}if (sb.numCb == null ) sb.numCb=Clazz.new_($I$(9,1));
if (sb.w != 0 && sb.h != 0 ) {
var acb0x=this.cb0x;
var acb0y=this.cb0y;
var tmp;
switch (sb.sbandIdx) {
case 0:
break;
case 1:
acb0x=0;
break;
case 2:
acb0y=0;
break;
case 3:
acb0x=0;
acb0y=0;
break;
default:
throw Clazz.new_($I$(5,1).c$$S,["Internal JJ2000 error"]);
}
if (sb.ulcx - acb0x < 0 || sb.ulcy - acb0y < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code-blocks partition origin or image offset in the reference grid."]);
}tmp=sb.ulcx - acb0x + sb.nomCBlkW;
sb.numCb.x=((tmp + sb.w - 1)/sb.nomCBlkW|0) - ((tmp/sb.nomCBlkW|0) - 1);
tmp=sb.ulcy - acb0y + sb.nomCBlkH;
sb.numCb.y=((tmp + sb.h - 1)/sb.nomCBlkH|0) - ((tmp/sb.nomCBlkH|0) - 1);
} else {
sb.numCb.x=sb.numCb.y=0;
}} else {
p$1.initSubbandsFields$I$I$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [t, c, sb.getLL$()]);
p$1.initSubbandsFields$I$I$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [t, c, sb.getHL$()]);
p$1.initSubbandsFields$I$I$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [t, c, sb.getLH$()]);
p$1.initSubbandsFields$I$I$io_scif_jj2000_j2k_wavelet_Subband.apply(this, [t, c, sb.getHH$()]);
}}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
