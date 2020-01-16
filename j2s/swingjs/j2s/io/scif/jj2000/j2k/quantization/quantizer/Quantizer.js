(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.quantization.quantizer"),I$=[[0,'io.scif.jj2000.j2k.quantization.quantizer.StdQuantizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Quantizer", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', 'io.scif.jj2000.j2k.quantization.quantizer.CBlkQuantDataSrcEnc');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Qtype", "[<tile-component idx>] <id> [ [<tile-component idx>] <id> ...]", "Specifies which quantization type to use for specified tile-component. The default type is either \'reversible\' or \'expounded\' depending on whether or not the \'-lossless\' option  is specified.\n<tile-component idx> : see general note.\n<id>: Supported quantization types specification are : \'reversible\' (no quantization), \'derived\' (derived quantization step size) and \'expounded\'.\nExample: -Qtype reversible or -Qtype t2,4-8 c2 reversible t9 derived.", null]), Clazz.array(String, -1, ["Qstep", "[<tile-component idx>] <bnss> [ [<tile-component idx>] <bnss> ...]", "This option specifies the base normalized quantization step size (bnss) for tile-components. It is normalized to a dynamic range of 1 in the image domain. This parameter is ignored in reversible coding. The default value is \'1/128\' (i.e. 0.0078125).", "0.0078125"]), Clazz.array(String, -1, ["Qguard_bits", "[<tile-component idx>] <gb> [ [<tile-component idx>] <gb> ...]", "The number of bits used for each tile-component in the quantizer to avoid overflow (gb).", "2"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['src','io.scif.jj2000.j2k.wavelet.analysis.CBlkWTDataSrc']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTDataSrc', function (src) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
}, 1);

Clazz.newMeth(C$, 'getAnSubbandTree$I$I', function (t, c) {
var sbba;
sbba=this.src.getAnSubbandTree$I$I(t, c);
this.calcSbParams$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I(sbba, c);
return sbba;
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

Clazz.newMeth(C$, 'createInstance$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, wp) {
return Clazz.new_($I$(1,1).c$$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava,[src, wp]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
