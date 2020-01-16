(function(){var P$=Clazz.newPackage("net.imglib2.display.screenimage.awt"),I$=[[0,'java.awt.image.DirectColorModel','net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.util.Fraction','net.imglib2.type.numeric.ARGBType','java.awt.image.DataBufferInt','java.awt.image.Raster','java.awt.image.BufferedImage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ARGBScreenImage", null, 'net.imglib2.img.array.ArrayImg', 'net.imglib2.display.screenimage.awt.AWTScreenImage');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.ARGB_COLOR_MODEL=Clazz.new_($I$(1,1).c$$I$I$I$I$I,[32, 16711680, 65280, 255, -16777216]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$data','int[]','image','java.awt.image.BufferedImage']]
,['O',['ARGB_COLOR_MODEL','java.awt.image.ColorModel']]]

Clazz.newMeth(C$, 'c$$I$I', function (width, height) {
C$.c$$I$I$IA.apply(this, [width, height, Clazz.array(Integer.TYPE, [width * height])]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$net_imglib2_img_basictypeaccess_array_IntArray', function (width, height, data) {
C$.c$$I$I$IA.apply(this, [width, height, data.getCurrentStorageArray$()]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$IA', function (width, height, data) {
;C$.superclazz.c$$TA$JA$net_imglib2_util_Fraction.apply(this,[Clazz.new_($I$(2,1).c$$IA,[data]), Clazz.array(Long.TYPE, -1, [width, height]), Clazz.new_($I$(3,1))]);C$.$init$.apply(this);
this.setLinkedType$TT(Clazz.new_($I$(4,1).c$$net_imglib2_img_NativeImg,[this]));
this.$data=data;
var sampleModel=C$.ARGB_COLOR_MODEL.createCompatibleWritableRaster$I$I(1, 1).getSampleModel$().createCompatibleSampleModel$I$I(width, height);
var dataBuffer=Clazz.new_($I$(5,1).c$$IA$I$I,[data, width * height, 0]);
var rgbRaster=$I$(6).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sampleModel, dataBuffer, null);
this.image=Clazz.new_($I$(7,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[C$.ARGB_COLOR_MODEL, rgbRaster, false, null]);
}, 1);

Clazz.newMeth(C$, 'image$', function () {
return this.image;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.$data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
