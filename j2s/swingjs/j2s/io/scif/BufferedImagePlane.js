(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'io.scif.gui.AWTImageTools','org.scijava.util.Bytes','net.imglib2.util.Intervals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BufferedImagePlane", null, 'io.scif.AbstractPlane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cachedBytes=null;
}, 1);

C$.$fields$=[['O',['cachedBytes','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_ImageMetadata$net_imglib2_Interval', function (meta, bounds) {
;C$.superclazz.c$$io_scif_ImageMetadata$net_imglib2_Interval.apply(this,[meta, bounds]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBytes$', function () {
if (this.cachedBytes == null ) {
switch (this.getData$().getColorModel$().getComponentSize$I(0)) {
case 8:
this.cachedBytes=$I$(1).getBytes$java_awt_image_BufferedImage$Z(this.getData$(), false);
break;
case 16:
var ts=$I$(1).getShorts$java_awt_image_BufferedImage(this.getData$());
this.cachedBytes=Clazz.array(Byte.TYPE, [ts.length * ts[0].length * 2 ]);
for (var c=0; c < ts.length; c++) {
var offset=c * ts[c].length * 2 ;
for (var i=0; i < ts[c].length; i++) {
$I$(2).unpack$J$BA$I$I$Z(ts[c][i], this.cachedBytes, offset, 2, this.getImageMetadata$().isLittleEndian$());
offset+=2;
}
}
break;
}
}return this.cachedBytes;
});

Clazz.newMeth(C$, 'blankPlane$net_imglib2_Interval', function (bounds) {
var type=this.getImageMetadata$().getPixelType$();
return $I$(1).blankImage$io_scif_ImageMetadata$JA$I(this.getImageMetadata$(), $I$(3).dimensionsAsLongArray$net_imglib2_Dimensions(bounds), type);
});

Clazz.newMeth(C$, ['setData$java_awt_image_BufferedImage','setData$TT'], function (data) {
C$.superclazz.prototype.setData$TT.apply(this, [data]);
this.cachedBytes=null;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
