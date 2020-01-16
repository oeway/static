(function(){var P$=Clazz.newPackage("net.imglib2.display.screenimage.awt"),p$1={},I$=[[0,'java.awt.image.PixelInterleavedSampleModel','java.awt.image.Raster','java.awt.image.BufferedImage','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayImgAWTScreenImage", null, 'net.imglib2.img.array.ArrayImg', 'net.imglib2.display.screenimage.awt.AWTScreenImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['bufferedImage','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayImg', function (img) {
C$.c$$TT$TA$JA.apply(this, [img.firstElement$(), img.update$O(null), C$.dimensions$net_imglib2_Dimensions(img)]);
}, 1);

Clazz.newMeth(C$, ['c$$TT$TA$JA'], function (type, data, dim) {
;C$.superclazz.c$$TA$JA$net_imglib2_util_Fraction.apply(this,[data, dim, type.getEntitiesPerPixel$()]);C$.$init$.apply(this);
this.bufferedImage=p$1.createBufferedImage$TT$TA$I$I.apply(this, [type, data, (dim[0]|0), (dim[1]|0)]);
}, 1);

Clazz.newMeth(C$, 'image$', function () {
return this.bufferedImage;
});

Clazz.newMeth(C$, ['getBitsPerPixel$TT'], function (type) {
if (Clazz.instanceOf(type, "net.imglib2.type.numeric.RealType")) {
return (type).getBitsPerPixel$();
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unknown bits per pixel: " + type]);
});

Clazz.newMeth(C$, ['createBufferedImage$TT$TA$I$I'], function (type, data, width, height) {
var buffer=this.createDataBuffer$TA(data);
var model=Clazz.new_($I$(1,1).c$$I$I$I$I$I$IA,[buffer.getDataType$(), width, height, 1, width, Clazz.array(Integer.TYPE, -1, [0])]);
var colorModel=p$1.createColorModel$TT$java_awt_image_DataBuffer.apply(this, [type, buffer]);
var raster=$I$(2).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(model, buffer, null);
return Clazz.new_($I$(3,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, raster, false, null]);
}, p$1);

Clazz.newMeth(C$, ['createColorModel$TT$java_awt_image_DataBuffer'], function (type, buffer) {
var cs=$I$(4).getInstance$I(1003);
var bits=Clazz.array(Integer.TYPE, -1, [this.getBitsPerPixel$TT(type)]);
return Clazz.new_($I$(5,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, bits, false, false, 1, buffer.getDataType$()]);
}, p$1);

Clazz.newMeth(C$, 'dimensions$net_imglib2_Dimensions', function (img) {
var dimensions=Clazz.array(Long.TYPE, [img.numDimensions$()]);
img.dimensions$JA(dimensions);
return dimensions;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
