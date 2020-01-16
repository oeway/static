(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BufferedImageTools");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPixelType$java_awt_image_BufferedImage', function (image) {
var raster=image.getRaster$();
if (raster == null ) return -1;
var buffer=raster.getDataBuffer$();
if (buffer == null ) return -1;
if (Clazz.instanceOf(buffer, "io.scif.gui.SignedByteBuffer")) {
return 0;
} else if (Clazz.instanceOf(buffer, "io.scif.gui.SignedShortBuffer")) {
return 2;
} else if (Clazz.instanceOf(buffer, "io.scif.gui.UnsignedIntBuffer")) {
return 5;
}var type=buffer.getDataType$();
var imageType=image.getType$();
switch (type) {
case 0:
return 1;
case 5:
return 7;
case 4:
return 6;
case 3:
if (imageType == 1 || imageType == 4  || imageType == 2 ) {
return 1;
}if (Clazz.instanceOf(buffer, "io.scif.gui.UnsignedIntBuffer")) {
return 5;
}return 4;
case 2:
return 2;
case 1:
if (imageType == 9 || imageType == 8 ) {
return 1;
}return 3;
default:
return -1;
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
