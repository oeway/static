(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),I$=[[0,'io.scif.jj2000.j2k.wavelet.analysis.ForwWTFull']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ForwardWT", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', ['io.scif.jj2000.j2k.wavelet.analysis.ForwWT', 'io.scif.jj2000.j2k.wavelet.analysis.CBlkWTDataSrc']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Wlev", "<number of decomposition levels>", "Specifies the number of wavelet decomposition levels to apply to the image. If 0 no wavelet transform is performed. All components and all tiles have the same number of decomposition levels.", "5"]), Clazz.array(String, -1, ["Wwt", "[full]", "Specifies the wavelet transform to be used. Possible value is: \'full\' (full page). The value \'full\' performs a normal DWT.", "full"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_ImgData', function (src) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[src]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'createInstance$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, wp) {
var defdec;
var deflev;
var decompstr;
var wtstr;
var pstr;
var stok;
var strtok;
var prefx;
var prefy;
deflev=(wp.getDecompositionLevel$().getDefault$()).intValue$();
prefx=0;
prefy=0;
return Clazz.new_($I$(1,1).c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$I$I,[src, wp, prefx, prefy]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
