(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),p$1={},p$2={},I$=[[0,['com.sun.imageio.plugins.jpeg.JPEGImageReader','.CallBackLock','.State'],'java.security.AccessController','javax.imageio.stream.ImageInputStream','javax.imageio.plugins.jpeg.JPEGQTable','javax.imageio.plugins.jpeg.JPEGHuffmanTable',['com.sun.imageio.plugins.jpeg.JPEGImageReader','.CallBackLock'],['com.sun.imageio.plugins.jpeg.JPEGImageReader','.JPEGReaderDisposerRecord'],'sun.java2d.Disposer','InternalError','com.sun.imageio.plugins.jpeg.JPEGMetadata','com.sun.imageio.plugins.jpeg.JPEGBuffer','java.awt.color.ICC_Profile','java.util.Arrays','java.awt.color.ICC_ColorSpace','com.sun.imageio.plugins.jpeg.ImageTypeProducer','java.util.ArrayList','javax.imageio.ImageTypeSpecifier','com.sun.imageio.plugins.jpeg.JPEG','com.sun.imageio.plugins.jpeg.ImageTypeIterator','java.awt.image.ColorConvertOp',['com.sun.imageio.plugins.jpeg.JPEG','.JCS'],'javax.imageio.plugins.jpeg.JPEGImageReadParam','java.awt.Rectangle','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.Point','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageTypeProducer");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.defaultTypes=Clazz.array(C$, [12]);
}

Clazz.newMeth(C$, '$init$', function () {
this.type=null;
this.failed=false;
}, 1);

C$.$fields$=[['Z',['failed'],'I',['csCode'],'O',['type','javax.imageio.ImageTypeSpecifier']]
,['O',['defaultTypes','com.sun.imageio.plugins.jpeg.ImageTypeProducer[]']]]

Clazz.newMeth(C$, 'c$$I', function (csCode) {
;C$.$init$.apply(this);
this.csCode=csCode;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.csCode=-1;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
if (!this.failed && this.type == null  ) {
try {
this.type=this.produce$();
} catch (e) {
this.failed=true;
}
}return this.type;
});

Clazz.newMeth(C$, 'getTypeProducer$I', function (csCode) {
if (csCode < 0 || csCode >= 12 ) {
return null;
}if (C$.defaultTypes[csCode] == null ) {
C$.defaultTypes[csCode]=Clazz.new_(C$.c$$I,[csCode]);
}return C$.defaultTypes[csCode];
}, 1);

Clazz.newMeth(C$, 'produce$', function () {
switch (this.csCode) {
case 1:
return $I$(17).createFromBufferedImageType$I(10);
case 2:
return $I$(17).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z($I$(21).sRGB, $I$(18).bOffsRGB, 0, false, false);
case 6:
return $I$(17).createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z($I$(21).sRGB, -16777216, 16711680, 65280, 255, 3, false);
case 5:
if ($I$(21).getYCC$() != null ) {
return $I$(17).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z($I$(21).getYCC$(), $I$(18).bandOffsets[2], 0, false, false);
} else {
return null;
}case 10:
if ($I$(21).getYCC$() != null ) {
return $I$(17).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z($I$(21).getYCC$(), $I$(18).bandOffsets[3], 0, true, false);
} else {
return null;
}default:
return null;
}
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
