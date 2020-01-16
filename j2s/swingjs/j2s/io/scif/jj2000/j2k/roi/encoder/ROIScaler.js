(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi.encoder"),p$1={},I$=[[0,'io.scif.jj2000.j2k.image.DataBlkInt','java.util.Vector','io.scif.jj2000.j2k.roi.encoder.ROI','io.scif.jj2000.j2k.roi.encoder.RectROIMaskGenerator','io.scif.jj2000.j2k.roi.encoder.ArbROIMaskGenerator','java.util.StringTokenizer','io.scif.jj2000.j2k.ModuleSpec','io.scif.jj2000.j2k.image.input.ImgReaderPGM','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ROIScaler", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', 'io.scif.jj2000.j2k.quantization.quantizer.CBlkQuantDataSrcEnc');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Rroi", "[<component idx>] R <left> <top> <width> <height> or [<component idx>] C <centre column> <centre row> <radius> or [<component idx>] A <filename>", "Specifies ROIs shape and location. The shape can be either rectangular \'R\', or circular \'C\' or arbitrary \'A\'. Each new occurrence of an \'R\', a \'C\' or an \'A\' is a new ROI. For circular and rectangular ROIs, all values are given as their pixel values relative to the canvas origin. Arbitrary shapes must be included in a PGM file where non 0 values correspond to ROI coefficients. The PGM file must have the size as the image. The component idx specifies which components contain the ROI. The component index is specified as described by points 3 and 4 in the general comment on tile-component idx. If this option is used, the codestream is layer progressive by default unless it is overridden by the \'Aptype\' option.", null]), Clazz.array(String, -1, ["Ralign", "[true|false]", "By specifying this argument, the ROI mask will be limited to covering only entire code-blocks. The ROI coding can then be performed without any actual scaling of the coefficients but by instead scaling the distortion estimates.", "false"]), Clazz.array(String, -1, ["Rstart_level", "<level>", "This argument forces the lowest <level> resolution levels to belong to the ROI. By doing this, it is possible to avoid only getting information for the ROI at an early stage of transmission.<level> = 0 means the lowest resolution level belongs to the ROI, 1 means the two lowest etc. (-1 deactivates the option)", "-1"]), Clazz.array(String, -1, ["Rno_rect", "[true|false]", "This argument makes sure that the ROI mask generation is not done using the fast ROI mask generation for rectangular ROIs regardless of whether the specified ROIs are rectangular or not", "false"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['roi','blockAligned'],'I',['useStartLevel'],'O',['maxMagBits','int[][]','mg','io.scif.jj2000.j2k.roi.encoder.ROIMaskGenerator','roiMask','io.scif.jj2000.j2k.image.DataBlkInt','src','io.scif.jj2000.j2k.quantization.quantizer.Quantizer']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_quantization_quantizer_Quantizer$io_scif_jj2000_j2k_roi_encoder_ROIMaskGenerator$Z$I$Z$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, mg, roi, sLev, uba, wp) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
this.roi=roi;
this.useStartLevel=sLev;
if (roi) {
this.mg=mg;
this.roiMask=Clazz.new_($I$(1,1));
p$1.calcMaxMagBits$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava.apply(this, [wp]);
this.blockAligned=uba;
}}, 1);

Clazz.newMeth(C$, 'isReversible$I$I', function (t, c) {
return this.src.isReversible$I$I(t, c);
});

Clazz.newMeth(C$, 'getAnSubbandTree$I$I', function (t, c) {
return this.src.getAnSubbandTree$I$I(t, c);
});

Clazz.newMeth(C$, 'getCbULX$', function () {
return this.src.getCbULX$();
});

Clazz.newMeth(C$, 'getCbULY$', function () {
return this.src.getCbULY$();
});

Clazz.newMeth(C$, 'createInstance$io_scif_jj2000_j2k_quantization_quantizer_Quantizer$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, wp) {
var roiVector=Clazz.new_($I$(2,1));
var maskGen=null;
var roiopt=wp.getROIs$().getSpecified$();
if (roiopt == null ) {
return Clazz.new_(C$.c$$io_scif_jj2000_j2k_quantization_quantizer_Quantizer$io_scif_jj2000_j2k_roi_encoder_ROIMaskGenerator$Z$I$Z$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava,[src, null, false, -1, false, wp]);
}var sLev=wp.getStartLevelROI$();
var useBlockAligned=wp.getAlignROI$();
var onlyRect=false;
C$.parseROIs$S$I$java_util_Vector(roiopt, src.getNumComps$(), roiVector);
var roiArray=Clazz.array($I$(3), [roiVector.size$()]);
roiVector.copyInto$OA(roiArray);
if (onlyRect) {
for (var i=roiArray.length - 1; i >= 0; i--) if (!roiArray[i].rect) {
onlyRect=false;
break;
}
}if (onlyRect) {
maskGen=Clazz.new_($I$(4,1).c$$io_scif_jj2000_j2k_roi_encoder_ROIA$I,[roiArray, src.getNumComps$()]);
} else {
maskGen=Clazz.new_($I$(5,1).c$$io_scif_jj2000_j2k_roi_encoder_ROIA$I$io_scif_jj2000_j2k_quantization_quantizer_Quantizer,[roiArray, src.getNumComps$(), src]);
}return Clazz.new_(C$.c$$io_scif_jj2000_j2k_quantization_quantizer_Quantizer$io_scif_jj2000_j2k_roi_encoder_ROIMaskGenerator$Z$I$Z$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava,[src, maskGen, true, sLev, useBlockAligned, wp]);
}, 1);

Clazz.newMeth(C$, 'parseROIs$S$I$java_util_Vector', function (roiopt, nc, roiVector) {
var ROIs;
var roi;
var stok;
var tok;
var nrOfROIs=0;
var c;
var comp;
var ulx;
var uly;
var w;
var h;
var x;
var y;
var rad;
var roiInComp=null;
stok=Clazz.new_($I$(6,1).c$$S,[roiopt]);
var word;
while (stok.hasMoreTokens$()){
word=stok.nextToken$();
switch ((word.charCodeAt$I(0))) {
case 99:
roiInComp=$I$(7).parseIdx$S$I(word, nc);
break;
case 82:
nrOfROIs++;
try {
word=stok.nextToken$();
ulx=( new Integer(word)).intValue$();
word=stok.nextToken$();
uly=( new Integer(word)).intValue$();
word=stok.nextToken$();
w=( new Integer(word)).intValue$();
word=stok.nextToken$();
h=( new Integer(word)).intValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad parameter for " + "'-Rroi R' option : " + word ]);
}
} else if (Clazz.exceptionOf(e$$,"java.util.NoSuchElementException")){
var f = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wrong number of parameters for  h\'-Rroi R\' option."]);
}
} else {
throw e$$;
}
}
if (roiInComp != null ) for (var i=0; i < nc; i++) {
if (roiInComp[i]) {
roi=Clazz.new_($I$(3,1).c$$I$I$I$I$I,[i, ulx, uly, w, h]);
roiVector.addElement$TE(roi);
}}
 else {
for (var i=0; i < nc; i++) {
roi=Clazz.new_($I$(3,1).c$$I$I$I$I$I,[i, ulx, uly, w, h]);
roiVector.addElement$TE(roi);
}
}break;
case 67:
nrOfROIs++;
try {
word=stok.nextToken$();
x=( new Integer(word)).intValue$();
word=stok.nextToken$();
y=( new Integer(word)).intValue$();
word=stok.nextToken$();
rad=( new Integer(word)).intValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad parameter for " + "'-Rroi C' option : " + word ]);
}
} else if (Clazz.exceptionOf(e$$,"java.util.NoSuchElementException")){
var f = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wrong number of parameters for \'-Rroi C\' option."]);
}
} else {
throw e$$;
}
}
if (roiInComp != null ) for (var i=0; i < nc; i++) {
if (roiInComp[i]) {
roi=Clazz.new_($I$(3,1).c$$I$I$I$I,[i, x, y, rad]);
roiVector.addElement$TE(roi);
}}
 else {
for (var i=0; i < nc; i++) {
roi=Clazz.new_($I$(3,1).c$$I$I$I$I,[i, x, y, rad]);
roiVector.addElement$TE(roi);
}
}break;
case 65:
nrOfROIs++;
var filename;
var maskPGM=null;
try {
filename=stok.nextToken$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wrong number of parameters for \'-Rroi A\' option."]);
} else {
throw e;
}
}
try {
maskPGM=Clazz.new_($I$(8,1).c$$S,[filename]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(9,1).c$$S,["Cannot read PGM file with ROI"]);
} else {
throw e;
}
}
if (roiInComp != null ) for (var i=0; i < nc; i++) {
if (roiInComp[i]) {
roi=Clazz.new_($I$(3,1).c$$I$io_scif_jj2000_j2k_image_input_ImgReaderPGM,[i, maskPGM]);
roiVector.addElement$TE(roi);
}}
 else {
for (var i=0; i < nc; i++) {
roi=Clazz.new_($I$(3,1).c$$I$io_scif_jj2000_j2k_image_input_ImgReaderPGM,[i, maskPGM]);
roiVector.addElement$TE(roi);
}
}break;
default:
throw Clazz.new_($I$(9,1).c$$S,["Bad parameters for ROI nr " + roiVector.size$()]);
}
}
return roiVector;
}, 1);

Clazz.newMeth(C$, 'getNextCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData', function (n, cblk) {
return this.getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(n, cblk);
});

Clazz.newMeth(C$, 'getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData', function (c, cblk) {
var mi;
var i;
var j;
var k;
var wrap;
var ulx;
var uly;
var w;
var h;
var mask=this.roiMask;
var maskData;
var data;
var tmp;
var bitMask=2147483647;
var root;
var sb;
var maxBits=0;
var roiInTile;
var sbInMask;
var nROIcoeff=0;
cblk=this.src.getNextCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(c, cblk);
if (!this.roi || cblk == null  ) {
return cblk;
}data=cblk.getData$();
sb=cblk.sb;
ulx=cblk.ulx;
uly=cblk.uly;
w=cblk.w;
h=cblk.h;
sbInMask=(sb.resLvl <= this.useStartLevel);
maskData=mask.getDataInt$();
if (maskData == null  || w * h > maskData.length ) {
maskData=Clazz.array(Integer.TYPE, [w * h]);
mask.setDataInt$IA(maskData);
} else {
for (i=w * h - 1; i >= 0; i--) maskData[i]=0;

}mask.ulx=ulx;
mask.uly=uly;
mask.w=w;
mask.h=h;
root=this.src.getAnSubbandTree$I$I(this.tIdx, c);
maxBits=this.maxMagBits[this.tIdx][c];
roiInTile=this.mg.getROIMask$io_scif_jj2000_j2k_image_DataBlkInt$io_scif_jj2000_j2k_wavelet_Subband$I$I(mask, root, maxBits, c);
if (!roiInTile && (!sbInMask) ) {
cblk.nROIbp=0;
return cblk;
}cblk.nROIbp=cblk.magbits;
if (sbInMask) {
cblk.wmseScaling *= (1 << (maxBits << 1));
cblk.nROIcoeff=w * h;
return cblk;
}if (this.blockAligned) {
wrap=cblk.scanw - w;
mi=h * w - 1;
i=cblk.offset + cblk.scanw * (h - 1) + w - 1;
var nroicoeff=0;
for (j=h; j > 0; j--) {
for (k=w - 1; k >= 0; k--, i--, mi--) {
if (maskData[mi] != 0) {
nroicoeff++;
}}
i-=wrap;
}
if (nroicoeff != 0) {
cblk.wmseScaling *= (1 << (maxBits << 1));
cblk.nROIcoeff=w * h;
}return cblk;
}bitMask=(((1 << cblk.magbits) - 1) << (31 - cblk.magbits));
wrap=cblk.scanw - w;
mi=h * w - 1;
i=cblk.offset + cblk.scanw * (h - 1) + w - 1;
for (j=h; j > 0; j--) {
for (k=w; k > 0; k--, i--, mi--) {
tmp=data[i];
if (maskData[mi] != 0) {
data[i]=(-2147483648 & tmp) | (tmp & bitMask);
nROIcoeff++;
} else {
data[i]=(-2147483648 & tmp) | ((tmp & 2147483647) >> maxBits);
}}
i-=wrap;
}
cblk.magbits+=maxBits;
cblk.nROIcoeff=nROIcoeff;
return cblk;
});

Clazz.newMeth(C$, 'getROIMaskGenerator$', function () {
return this.mg;
});

Clazz.newMeth(C$, 'getBlockAligned$', function () {
return this.blockAligned;
});

Clazz.newMeth(C$, 'useRoi$', function () {
return this.roi;
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
C$.superclazz.prototype.setTile$I$I.apply(this, [x, y]);
if (this.roi) this.mg.tileChanged$();
});

Clazz.newMeth(C$, 'nextTile$', function () {
C$.superclazz.prototype.nextTile$.apply(this, []);
if (this.roi) this.mg.tileChanged$();
});

Clazz.newMeth(C$, 'calcMaxMagBits$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (wp) {
var tmp;
var rois=wp.getROIs$();
var nt=this.src.getNumTiles$();
var nc=this.src.getNumComps$();
this.maxMagBits=Clazz.array(Integer.TYPE, [nt, nc]);
this.src.setTile$I$I(0, 0);
for (var t=0; t < nt; t++) {
for (var c=nc - 1; c >= 0; c--) {
tmp=this.src.getMaxMagBits$I(c);
this.maxMagBits[t][c]=tmp;
rois.setTileCompVal$I$I$O(t, c,  new Integer(tmp));
}
if (t < nt - 1) this.src.nextTile$();
}
this.src.setTile$I$I(0, 0);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
