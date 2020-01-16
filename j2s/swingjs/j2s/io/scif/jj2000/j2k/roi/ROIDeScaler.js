(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ROIDeScaler", null, 'io.scif.jj2000.j2k.wavelet.synthesis.MultiResImgDataAdapter', 'io.scif.jj2000.j2k.quantization.dequantizer.CBlkQuantDataSrcDec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Rno_roi", null, "This argument makes sure that the no ROI de-scaling is performed. Decompression is done like there is no ROI in the image", null])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['mss','io.scif.jj2000.j2k.roi.MaxShiftSpec','src','io.scif.jj2000.j2k.quantization.dequantizer.CBlkQuantDataSrcDec']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$io_scif_jj2000_j2k_roi_MaxShiftSpec', function (src, mss) {
;C$.superclazz.c$$io_scif_jj2000_j2k_wavelet_synthesis_MultiResImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
this.mss=mss;
}, 1);

Clazz.newMeth(C$, 'getSynSubbandTree$I$I', function (t, c) {
return this.src.getSynSubbandTree$I$I(t, c);
});

Clazz.newMeth(C$, 'getCbULX$', function () {
return this.src.getCbULX$();
});

Clazz.newMeth(C$, 'getCbULY$', function () {
return this.src.getCbULY$();
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'getCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk', function (c, m, n, sb, cblk) {
return this.getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk(c, m, n, sb, cblk);
});

Clazz.newMeth(C$, 'getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk', function (c, m, n, sb, cblk) {
var mi;
var i;
var j;
var k;
var wrap;
var ulx;
var uly;
var w;
var h;
var data;
var tmp;
var limit;
cblk=this.src.getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk(c, m, n, sb, cblk);
var noRoiInTile=false;
if (this.mss == null  || this.mss.getTileCompVal$I$I(this.getTileIdx$(), c) == null  ) noRoiInTile=true;
if (noRoiInTile || cblk == null  ) {
return cblk;
}data=cblk.getData$();
ulx=cblk.ulx;
uly=cblk.uly;
w=cblk.w;
h=cblk.h;
var boost=(this.mss.getTileCompVal$I$I(this.getTileIdx$(), c)).intValue$();
var mask=((1 << sb.magbits) - 1) << (31 - sb.magbits);
var mask2=(~mask) & 2147483647;
wrap=cblk.scanw - w;
i=cblk.offset + cblk.scanw * (h - 1) + w - 1;
for (j=h; j > 0; j--) {
for (k=w; k > 0; k--, i--) {
tmp=data[i];
if ((tmp & mask) == 0) {
data[i]=(tmp & -2147483648) | (tmp << boost);
} else {
if ((tmp & mask2) != 0) {
data[i]=(tmp & (~mask2)) | (1 << (30 - sb.magbits));
}}}
i-=wrap;
}
return cblk;
});

Clazz.newMeth(C$, 'createInstance$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (src, j2krparam, decSpec) {
var noRoi=j2krparam.getNoROIDescaling$();
if (noRoi || decSpec.rois == null  ) {
return Clazz.new_(C$.c$$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$io_scif_jj2000_j2k_roi_MaxShiftSpec,[src, null]);
}return Clazz.new_(C$.c$$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$io_scif_jj2000_j2k_roi_MaxShiftSpec,[src, decSpec.rois]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
