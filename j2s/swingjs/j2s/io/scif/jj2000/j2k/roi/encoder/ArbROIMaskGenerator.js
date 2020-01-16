(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi.encoder"),p$1={},I$=[[0,'io.scif.jj2000.j2k.image.DataBlkInt','io.scif.jj2000.j2k.image.input.ImgReaderPGM']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArbROIMaskGenerator", null, 'io.scif.jj2000.j2k.roi.encoder.ROIMaskGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['$roiInTile'],'O',['src','io.scif.jj2000.j2k.quantization.quantizer.Quantizer','roiMask','int[][]','maskLineLow','int[]','+maskLineHigh','+paddedMaskLine']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_roi_encoder_ROIA$I$io_scif_jj2000_j2k_quantization_quantizer_Quantizer', function (rois, nrc, src) {
;C$.superclazz.c$$io_scif_jj2000_j2k_roi_encoder_ROIA$I.apply(this,[rois, nrc]);C$.$init$.apply(this);
this.roiMask=Clazz.array(Integer.TYPE, [nrc, null]);
this.src=src;
}, 1);

Clazz.newMeth(C$, 'getROIMask$io_scif_jj2000_j2k_image_DataBlkInt$io_scif_jj2000_j2k_wavelet_Subband$I$I', function (db, sb, magbits, c) {
var x=db.ulx;
var y=db.uly;
var w=db.w;
var h=db.h;
var tilew=sb.w;
var tileh=sb.h;
var maskData=db.getData$();
var i;
var j;
var k;
var bi;
var wrap;
if (!this.tileMaskMade[c]) {
this.makeMask$io_scif_jj2000_j2k_wavelet_Subband$I$I(sb, magbits, c);
this.tileMaskMade[c]=true;
}if (!this.$roiInTile) return false;
var mask=this.roiMask[c];
i=(y + h - 1) * tilew + x + w - 1;
bi=w * h - 1;
wrap=tilew - w;
for (j=h; j > 0; j--) {
for (k=w; k > 0; k--, i--, bi--) {
maskData[bi]=mask[i];
}
i-=wrap;
}
return true;
});

Clazz.newMeth(C$, 'toString', function () {
return ("Fast rectangular ROI mask generator");
});

Clazz.newMeth(C$, 'makeMask$io_scif_jj2000_j2k_wavelet_Subband$I$I', function (sb, magbits, c) {
var mask;
var rois=this.rois;
var i;
var j;
var k;
var r;
var mink;
var minj;
var maxj;
var lrx;
var lry;
var x;
var y;
var w;
var h;
var cx;
var cy;
var rad;
var wrap;
var curScalVal;
var tileulx=sb.ulcx;
var tileuly=sb.ulcy;
var tilew=sb.w;
var tileh=sb.h;
var lineLen=(tilew > tileh) ? tilew : tileh;
if (this.roiMask[c] == null  || (this.roiMask[c].length < (tilew * tileh)) ) {
this.roiMask[c]=Clazz.array(Integer.TYPE, [tilew * tileh]);
mask=this.roiMask[c];
} else {
mask=this.roiMask[c];
for (i=tilew * tileh - 1; i >= 0; i--) mask[i]=0;

}if (this.maskLineLow == null  || (this.maskLineLow.length < ((lineLen + 1)/2|0)) ) this.maskLineLow=Clazz.array(Integer.TYPE, [((lineLen + 1)/2|0)]);
if (this.maskLineHigh == null  || (this.maskLineHigh.length < ((lineLen + 1)/2|0)) ) this.maskLineHigh=Clazz.array(Integer.TYPE, [((lineLen + 1)/2|0)]);
this.$roiInTile=false;
for (r=rois.length - 1; r >= 0; r--) {
if (rois[r].comp == c) {
curScalVal=magbits;
if (rois[r].arbShape) {
var maskPGM=rois[r].maskPGM;
if ((this.src.getImgWidth$() != maskPGM.getImgWidth$()) || (this.src.getImgHeight$() != maskPGM.getImgHeight$()) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input image and ROI mask must have the same size"]);
x=this.src.getImgULX$();
y=this.src.getImgULY$();
lrx=x + this.src.getImgWidth$() - 1;
lry=y + this.src.getImgHeight$() - 1;
if ((x > tileulx + tilew) || (y > tileuly + tileh) || (lrx < tileulx) || (lry < tileuly)  ) continue;
x-=tileulx;
lrx-=tileulx;
y-=tileuly;
lry-=tileuly;
var offx=0;
var offy=0;
if (x < 0) {
offx=-x;
x=0;
}if (y < 0) {
offy=-y;
y=0;
}w=(lrx > (tilew - 1)) ? tilew - x : lrx + 1 - x;
h=(lry > (tileh - 1)) ? tileh - y : lry + 1 - y;
var srcblk=Clazz.new_($I$(1,1));
var mDcOff=-$I$(2).DC_OFFSET;
var nROIcoeff=0;
var src_data;
srcblk.ulx=offx;
srcblk.w=w;
srcblk.h=1;
i=(y + h - 1) * tilew + x + w - 1;
maxj=w;
wrap=tilew - maxj;
for (k=h; k > 0; k--) {
srcblk.uly=offy + k - 1;
srcblk=maskPGM.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(srcblk, 0);
src_data=srcblk.getDataInt$();
for (j=maxj; j > 0; j--, i--) {
if (src_data[j - 1] != mDcOff) {
mask[i]=curScalVal;
nROIcoeff++;
}}
i-=wrap;
}
if (nROIcoeff != 0) {
this.$roiInTile=true;
}} else if (rois[r].rect) {
x=rois[r].ulx;
y=rois[r].uly;
lrx=rois[r].w + x - 1;
lry=rois[r].h + y - 1;
if ((x > tileulx + tilew) || (y > tileuly + tileh) || (lrx < tileulx) || (lry < tileuly)  ) continue;
this.$roiInTile=true;
x-=tileulx;
lrx-=tileulx;
y-=tileuly;
lry-=tileuly;
x=(x < 0) ? 0 : x;
y=(y < 0) ? 0 : y;
w=(lrx > (tilew - 1)) ? tilew - x : lrx + 1 - x;
h=(lry > (tileh - 1)) ? tileh - y : lry + 1 - y;
i=(y + h - 1) * tilew + x + w - 1;
maxj=w;
wrap=tilew - maxj;
for (k=h; k > 0; k--) {
for (j=maxj; j > 0; j--, i--) {
mask[i]=curScalVal;
}
i-=wrap;
}
} else {
cx=rois[r].x - tileulx;
cy=rois[r].y - tileuly;
rad=rois[r].r;
i=tileh * tilew - 1;
for (k=tileh - 1; k >= 0; k--) {
for (j=tilew - 1; j >= 0; j--, i--) {
if (((j - cx) * (j - cx) + (k - cy) * (k - cy) < rad * rad)) {
mask[i]=curScalVal;
this.$roiInTile=true;
}}
}
}}}
if (sb.isNode) {
var vFilter=sb.getVerWFilter$();
var hFilter=sb.getHorWFilter$();
var lvsup=vFilter.getSynLowNegSupport$() + vFilter.getSynLowPosSupport$();
var hvsup=vFilter.getSynHighNegSupport$() + vFilter.getSynHighPosSupport$();
var lhsup=hFilter.getSynLowNegSupport$() + hFilter.getSynLowPosSupport$();
var hhsup=hFilter.getSynHighNegSupport$() + hFilter.getSynHighPosSupport$();
lvsup=(lvsup > hvsup) ? lvsup : hvsup;
lhsup=(lhsup > hhsup) ? lhsup : hhsup;
lvsup=(lvsup > lhsup) ? lvsup : lhsup;
this.paddedMaskLine=Clazz.array(Integer.TYPE, [lineLen + lvsup]);
if (this.$roiInTile) p$1.decomp$io_scif_jj2000_j2k_wavelet_Subband$I$I$I.apply(this, [sb, tilew, tileh, c]);
}});

Clazz.newMeth(C$, 'decomp$io_scif_jj2000_j2k_wavelet_Subband$I$I$I', function (sb, tilew, tileh, c) {
var ulx=sb.ulx;
var uly=sb.uly;
var w=sb.w;
var h=sb.h;
var scalVal;
var maxVal=0;
var i;
var j;
var k;
var s;
var hi;
var mi=0;
var pin;
var li;
var hmax;
var lmax;
var smax;
var wrap;
var lineoffs;
var lastlow;
var mask=this.roiMask[c];
var low=this.maskLineLow;
var high=this.maskLineHigh;
var padLine=this.paddedMaskLine;
var highFirst=0;
var lastpin;
if (!sb.isNode) return;
var filter=sb.getHorWFilter$();
var lnSup=filter.getSynLowNegSupport$();
var hnSup=filter.getSynHighNegSupport$();
var lpSup=filter.getSynLowPosSupport$();
var hpSup=filter.getSynHighPosSupport$();
var lsup=lnSup + lpSup + 1 ;
var hsup=hnSup + hpSup + 1 ;
highFirst=sb.ulcx % 2;
if (sb.w % 2 == 0) {
lmax=(w/2|0) - 1;
hmax=lmax;
} else {
if (highFirst == 0) {
lmax=((w + 1)/2|0) - 1;
hmax=(w/2|0) - 1;
} else {
hmax=((w + 1)/2|0) - 1;
lmax=(w/2|0) - 1;
}}var maxnSup=(lnSup > hnSup) ? lnSup : hnSup;
var maxpSup=(lpSup > hpSup) ? lpSup : hpSup;
for (pin=maxnSup - 1; pin >= 0; pin--) padLine[pin]=0;

for (pin=maxnSup + w - 1 + maxpSup; pin >= w; pin--) padLine[pin]=0;

lineoffs=(uly + h) * tilew + ulx + w - 1;
for (j=h - 1; j >= 0; j--) {
lineoffs-=tilew;
mi=lineoffs;
for (k=w, pin=w - 1 + maxnSup; k > 0; k--, mi--, pin--) {
padLine[pin]=mask[mi];
}
lastpin=maxnSup + highFirst + 2 * lmax  + lpSup;
for (k=lmax; k >= 0; k--, lastpin-=2) {
pin=lastpin;
for (s=lsup; s > 0; s--, pin--) {
scalVal=padLine[pin];
if (scalVal > maxVal) maxVal=scalVal;
}
low[k]=maxVal;
maxVal=0;
}
lastpin=maxnSup - highFirst + 2 * hmax + 1 + hpSup;
for (k=hmax; k >= 0; k--, lastpin-=2) {
pin=lastpin;
for (s=hsup; s > 0; s--, pin--) {
scalVal=padLine[pin];
if (scalVal > maxVal) maxVal=scalVal;
}
high[k]=maxVal;
maxVal=0;
}
mi=lineoffs;
for (k=hmax; k >= 0; k--, mi--) {
mask[mi]=high[k];
}
for (k=lmax; k >= 0; k--, mi--) {
mask[mi]=low[k];
}
}
filter=sb.getVerWFilter$();
lnSup=filter.getSynLowNegSupport$();
hnSup=filter.getSynHighNegSupport$();
lpSup=filter.getSynLowPosSupport$();
hpSup=filter.getSynHighPosSupport$();
lsup=lnSup + lpSup + 1 ;
hsup=hnSup + hpSup + 1 ;
highFirst=sb.ulcy % 2;
if (sb.h % 2 == 0) {
lmax=(h/2|0) - 1;
hmax=lmax;
} else {
if (sb.ulcy % 2 == 0) {
lmax=((h + 1)/2|0) - 1;
hmax=(h/2|0) - 1;
} else {
hmax=((h + 1)/2|0) - 1;
lmax=(h/2|0) - 1;
}}maxnSup=(lnSup > hnSup) ? lnSup : hnSup;
maxpSup=(lpSup > hpSup) ? lpSup : hpSup;
for (pin=maxnSup - 1; pin >= 0; pin--) padLine[pin]=0;

for (pin=maxnSup + h - 1 + maxpSup; pin >= h; pin--) padLine[pin]=0;

lineoffs=(uly + h - 1) * tilew + ulx + w;
for (j=w - 1; j >= 0; j--) {
lineoffs--;
mi=lineoffs;
for (k=h, pin=k - 1 + maxnSup; k > 0; k--, mi-=tilew, pin--) {
padLine[pin]=mask[mi];
}
lastpin=maxnSup + highFirst + 2 * lmax  + lpSup;
for (k=lmax; k >= 0; k--, lastpin-=2) {
pin=lastpin;
for (s=lsup; s > 0; s--, pin--) {
scalVal=padLine[pin];
if (scalVal > maxVal) maxVal=scalVal;
}
low[k]=maxVal;
maxVal=0;
}
lastpin=maxnSup - highFirst + 2 * hmax + 1 + hpSup;
for (k=hmax; k >= 0; k--, lastpin-=2) {
pin=lastpin;
for (s=hsup; s > 0; s--, pin--) {
scalVal=padLine[pin];
if (scalVal > maxVal) maxVal=scalVal;
}
high[k]=maxVal;
maxVal=0;
}
mi=lineoffs;
for (k=hmax; k >= 0; k--, mi-=tilew) {
mask[mi]=high[k];
}
for (k=lmax; k >= 0; k--, mi-=tilew) {
mask[mi]=low[k];
}
}
if (sb.isNode) {
p$1.decomp$io_scif_jj2000_j2k_wavelet_Subband$I$I$I.apply(this, [sb.getHH$(), tilew, tileh, c]);
p$1.decomp$io_scif_jj2000_j2k_wavelet_Subband$I$I$I.apply(this, [sb.getLH$(), tilew, tileh, c]);
p$1.decomp$io_scif_jj2000_j2k_wavelet_Subband$I$I$I.apply(this, [sb.getHL$(), tilew, tileh, c]);
p$1.decomp$io_scif_jj2000_j2k_wavelet_Subband$I$I$I.apply(this, [sb.getLL$(), tilew, tileh, c]);
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
