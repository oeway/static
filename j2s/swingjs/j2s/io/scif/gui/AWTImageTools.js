(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'java.awt.Container','io.scif.gui.SignedByteBuffer','java.awt.image.DataBufferByte','io.scif.gui.SignedShortBuffer','java.awt.image.DataBufferUShort','java.awt.image.DataBufferInt','io.scif.gui.UnsignedIntBuffer','java.awt.image.DataBufferFloat','java.awt.image.DataBufferDouble','org.scijava.util.Bytes','io.scif.gui.XYCTuple','io.scif.gui.UnsignedIntColorModel','java.awt.image.SinglePixelPackedSampleModel','java.awt.image.BandedSampleModel','java.awt.image.PixelInterleavedSampleModel','java.awt.image.ComponentSampleModel','java.awt.image.Raster','java.awt.image.BufferedImage','io.scif.util.FormatTools','io.scif.gui.SignedColorModel','net.imglib2.display.ColorTable8','java.awt.image.IndexColorModel','net.imglib2.display.ColorTable16','io.scif.gui.Index16ColorModel','io.scif.BufferedImagePlane','java.util.Hashtable','io.scif.util.ImageTools','java.awt.RenderingHints','java.awt.geom.AffineTransform','java.awt.MediaTracker','java.awt.Dimension','java.awt.GraphicsEnvironment','io.scif.gui.TwoChannelColorSpace','java.awt.image.ComponentColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AWTImageTools");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.OBS=Clazz.new_($I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['OBS','java.awt.Component']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeImage$BA$I$I$Z', function (data, w, h, signed) {
return C$.makeImage$BAA$I$I$Z(Clazz.array(Byte.TYPE, -2, [data]), w, h, signed);
}, 1);

Clazz.newMeth(C$, 'makeImage$HA$I$I$Z', function (data, w, h, signed) {
return C$.makeImage$HAA$I$I$Z(Clazz.array(Short.TYPE, -2, [data]), w, h, signed);
}, 1);

Clazz.newMeth(C$, 'makeImage$IA$I$I$Z', function (data, w, h, signed) {
return C$.makeImage$IAA$I$I$Z(Clazz.array(Integer.TYPE, -2, [data]), w, h, signed);
}, 1);

Clazz.newMeth(C$, 'makeImage$FA$I$I', function (data, w, h) {
return C$.makeImage$FAA$I$I(Clazz.array(Float.TYPE, -2, [data]), w, h);
}, 1);

Clazz.newMeth(C$, 'makeImage$DA$I$I', function (data, w, h) {
return C$.makeImage$DAA$I$I(Clazz.array(Double.TYPE, -2, [data]), w, h);
}, 1);

Clazz.newMeth(C$, 'makeImage$BA$I$I$I$Z$Z', function (data, w, h, c, interleaved, signed) {
if (c == 1) return C$.makeImage$BA$I$I$Z(data, w, h, signed);
if (c > 2) return C$.makeRGBImage$BA$I$I$I$Z(data, c, w, h, interleaved);
var dataType;
var buffer;
dataType=0;
if (signed) {
buffer=Clazz.new_($I$(2,1).c$$BA$I,[data, c * w * h ]);
} else {
buffer=Clazz.new_($I$(3,1).c$$BA$I,[data, c * w * h ]);
}return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(c, dataType, w, h, interleaved, false, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$HA$I$I$I$Z$Z', function (data, w, h, c, interleaved, signed) {
if (c == 1) return C$.makeImage$HA$I$I$Z(data, w, h, signed);
var dataType;
var buffer;
if (signed) {
dataType=2;
buffer=Clazz.new_($I$(4,1).c$$HA$I,[data, c * w * h ]);
} else {
dataType=1;
buffer=Clazz.new_($I$(5,1).c$$HA$I,[data, c * w * h ]);
}return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(c, dataType, w, h, interleaved, false, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$IA$I$I$I$Z$Z', function (data, w, h, c, interleaved, signed) {
if (c == 1) return C$.makeImage$IA$I$I$Z(data, w, h, signed);
var dataType=3;
var buffer;
if (signed) {
buffer=Clazz.new_($I$(6,1).c$$IA$I,[data, c * w * h ]);
} else {
buffer=Clazz.new_($I$(7,1).c$$IA$I,[data, c * w * h ]);
}return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(c, 3, w, h, interleaved, false, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$FA$I$I$I$Z', function (data, w, h, c, interleaved) {
if (c == 1) return C$.makeImage$FA$I$I(data, w, h);
var dataType=4;
var buffer=Clazz.new_($I$(8,1).c$$FA$I,[data, c * w * h ]);
return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(c, 4, w, h, interleaved, false, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$DA$I$I$I$Z', function (data, w, h, c, interleaved) {
if (c == 1) return C$.makeImage$DA$I$I(data, w, h);
var dataType=5;
var buffer=Clazz.new_($I$(9,1).c$$DA$I,[data, c * w * h ]);
return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(c, 5, w, h, interleaved, false, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$BAA$I$I$Z', function (data, w, h, signed) {
if (data.length > 2) return C$.makeRGBImage$BAA$I$I(data, w, h);
var dataType;
var buffer;
dataType=0;
if (signed) {
buffer=Clazz.new_($I$(2,1).c$$BAA$I,[data, data[0].length]);
} else {
buffer=Clazz.new_($I$(3,1).c$$BAA$I,[data, data[0].length]);
}return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(data.length, dataType, w, h, false, true, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$HAA$I$I$Z', function (data, w, h, signed) {
var dataType;
var buffer;
if (signed) {
dataType=2;
buffer=Clazz.new_($I$(4,1).c$$HAA$I,[data, data[0].length]);
} else {
dataType=1;
buffer=Clazz.new_($I$(5,1).c$$HAA$I,[data, data[0].length]);
}return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(data.length, dataType, w, h, false, true, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$IAA$I$I$Z', function (data, w, h, signed) {
var dataType=3;
var buffer;
if (signed) {
buffer=Clazz.new_($I$(6,1).c$$IAA$I,[data, data[0].length]);
} else {
buffer=Clazz.new_($I$(7,1).c$$IAA$I,[data, data[0].length]);
}return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(data.length, 3, w, h, false, true, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$FAA$I$I', function (data, w, h) {
var dataType=4;
var buffer=Clazz.new_($I$(8,1).c$$FAA$I,[data, data[0].length]);
return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(data.length, 4, w, h, false, true, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$DAA$I$I', function (data, w, h) {
var dataType=5;
var buffer=Clazz.new_($I$(9,1).c$$DAA$I,[data, data[0].length]);
return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(data.length, 5, w, h, false, true, buffer);
}, 1);

Clazz.newMeth(C$, 'makeImage$BA$I$I$I$Z$I$Z$Z$Z', function (data, w, h, c, interleaved, bpp, fp, little, signed) {
var pixels=$I$(10).makeArray$BA$I$Z$Z(data, bpp % 3 == 0 ? (bpp/3|0) : bpp, fp, little);
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -1))) {
return C$.makeImage$BA$I$I$I$Z$Z(pixels, w, h, c, interleaved, signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Short.TYPE, -1))) {
return C$.makeImage$HA$I$I$I$Z$Z(pixels, w, h, c, interleaved, signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Integer.TYPE, -1))) {
return C$.makeImage$IA$I$I$I$Z$Z(pixels, w, h, c, interleaved, signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Float.TYPE, -1))) {
return C$.makeImage$FA$I$I$I$Z(pixels, w, h, c, interleaved);
} else if (Clazz.instanceOf(pixels, Clazz.array(Double.TYPE, -1))) {
return C$.makeImage$DA$I$I$I$Z(pixels, w, h, c, interleaved);
}return null;
}, 1);

Clazz.newMeth(C$, 'makeImage$BAA$I$I$I$Z$Z$Z', function (data, w, h, bpp, fp, little, signed) {
var c=data.length;
var v=null;
for (var i=0; i < c; i++) {
var pixels=$I$(10).makeArray$BA$I$Z$Z(data[i], bpp % 3 == 0 ? (bpp/3|0) : bpp, fp, little);
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -1))) {
if (v == null ) v=Clazz.array(Byte.TYPE, [c, null]);
(v)[i]=pixels;
} else if (Clazz.instanceOf(pixels, Clazz.array(Short.TYPE, -1))) {
if (v == null ) v=Clazz.array(Short.TYPE, [c, null]);
(v)[i]=pixels;
} else if (Clazz.instanceOf(pixels, Clazz.array(Integer.TYPE, -1))) {
if (v == null ) v=Clazz.array(Integer.TYPE, [c, null]);
(v)[i]=pixels;
} else if (Clazz.instanceOf(pixels, Clazz.array(Float.TYPE, -1))) {
if (v == null ) v=Clazz.array(Float.TYPE, [c, null]);
(v)[i]=pixels;
} else if (Clazz.instanceOf(pixels, Clazz.array(Double.TYPE, -1))) {
if (v == null ) v=Clazz.array(Double.TYPE, [c, null]);
(v)[i]=pixels;
}}
if (Clazz.instanceOf(v, Clazz.array(Byte.TYPE, -2))) {
return C$.makeImage$BAA$I$I$Z(v, w, h, signed);
} else if (Clazz.instanceOf(v, Clazz.array(Short.TYPE, -2))) {
return C$.makeImage$HAA$I$I$Z(v, w, h, signed);
} else if (Clazz.instanceOf(v, Clazz.array(Integer.TYPE, -2))) {
return C$.makeImage$IAA$I$I$Z(v, w, h, signed);
} else if (Clazz.instanceOf(v, Clazz.array(Float.TYPE, -2))) {
return C$.makeImage$FAA$I$I(v, w, h);
} else if (Clazz.instanceOf(v, Clazz.array(Double.TYPE, -2))) {
return C$.makeImage$DAA$I$I(v, w, h);
}return null;
}, 1);

Clazz.newMeth(C$, 'makeRGBImage$BA$I$I$I$Z', function (data, c, w, h, interleaved) {
var cc=Math.min(c, 4);
var buf=Clazz.array(Integer.TYPE, [(data.length/c|0)]);
var nBits=(cc - 1) * 8;
for (var i=0; i < buf.length; i++) {
for (var q=0; q < cc; q++) {
if (interleaved) {
buf[i]|=((data[i * c + q] & 255) << (nBits - q * 8));
} else {
buf[i]|=((data[q * buf.length + i] & 255) << (nBits - q * 8));
}}
}
var buffer=Clazz.new_($I$(6,1).c$$IA$I,[buf, buf.length]);
return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(cc, 3, w, h, false, false, buffer);
}, 1);

Clazz.newMeth(C$, 'makeRGBImage$BAA$I$I', function (data, w, h) {
var buf=Clazz.array(Integer.TYPE, [data[0].length]);
var nBits=(data.length - 1) * 8;
for (var i=0; i < buf.length; i++) {
for (var q=0; q < data.length; q++) {
buf[i]|=((data[q][i] & 255) << (nBits - q * 8));
}
}
var buffer=Clazz.new_($I$(6,1).c$$IA$I,[buf, buf.length]);
return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer(data.length, 3, w, h, false, false, buffer);
}, 1);

Clazz.newMeth(C$, 'blankImage$io_scif_ImageMetadata$JA$I', function (meta, axes, type) {
var xyc=Clazz.new_($I$(11,1).c$$io_scif_ImageMetadata$JA,[meta, axes]);
var c=xyc.c$$();
var w=xyc.x$();
var h=xyc.y$();
switch (type) {
case 0:
return C$.makeImage$BAA$I$I$Z(Clazz.array(Byte.TYPE, [c, w * h]), w, h, true);
case 1:
return C$.makeImage$BAA$I$I$Z(Clazz.array(Byte.TYPE, [c, w * h]), w, h, false);
case 2:
return C$.makeImage$HAA$I$I$Z(Clazz.array(Short.TYPE, [c, w * h]), w, h, true);
case 3:
return C$.makeImage$HAA$I$I$Z(Clazz.array(Short.TYPE, [c, w * h]), w, h, false);
case 4:
return C$.makeImage$IAA$I$I$Z(Clazz.array(Integer.TYPE, [c, w * h]), w, h, true);
case 5:
return C$.makeImage$IAA$I$I$Z(Clazz.array(Integer.TYPE, [c, w * h]), w, h, false);
case 6:
return C$.makeImage$FAA$I$I(Clazz.array(Float.TYPE, [c, w * h]), w, h);
case 7:
return C$.makeImage$DAA$I$I(Clazz.array(Double.TYPE, [c, w * h]), w, h);
}
return null;
}, 1);

Clazz.newMeth(C$, 'constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer', function (c, type, w, h, interleaved, banded, buffer) {
return C$.constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer$java_awt_image_ColorModel(c, type, w, h, interleaved, banded, buffer, null);
}, 1);

Clazz.newMeth(C$, 'constructImage$I$I$I$I$Z$Z$java_awt_image_DataBuffer$java_awt_image_ColorModel', function (c, type, w, h, interleaved, banded, buffer, colorModel) {
if (c > 4) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot construct image with " + c + " channels" ]);
}if (colorModel == null  || Clazz.instanceOf(colorModel, "java.awt.image.DirectColorModel") ) {
colorModel=C$.makeColorModel$I$I(c, type);
if (colorModel == null ) return null;
if (Clazz.instanceOf(buffer, "io.scif.gui.UnsignedIntBuffer")) {
colorModel=Clazz.new_($I$(12,1).c$$I$I$I,[32, type, c]);
}}var model;
if (c > 2 && type == 3  && buffer.getNumBanks$() == 1  && !(Clazz.instanceOf(buffer, "io.scif.gui.UnsignedIntBuffer")) ) {
var bitMasks=Clazz.array(Integer.TYPE, [c]);
for (var i=0; i < c; i++) {
bitMasks[i]=255 << ((c - i - 1 ) * 8);
}
model=Clazz.new_($I$(13,1).c$$I$I$I$IA,[3, w, h, bitMasks]);
} else if (banded) model=Clazz.new_($I$(14,1).c$$I$I$I$I,[type, w, h, c]);
 else if (interleaved) {
var bandOffsets=Clazz.array(Integer.TYPE, [c]);
for (var i=0; i < c; i++) bandOffsets[i]=i;

model=Clazz.new_($I$(15,1).c$$I$I$I$I$I$IA,[type, w, h, c, c * w, bandOffsets]);
} else {
var bandOffsets=Clazz.array(Integer.TYPE, [c]);
for (var i=0; i < c; i++) bandOffsets[i]=i * w * h ;

model=Clazz.new_($I$(16,1).c$$I$I$I$I$I$IA,[type, w, h, 1, w, bandOffsets]);
}var raster=$I$(17).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(model, buffer, null);
var b=null;
if (c == 1 && type == 0  && !(Clazz.instanceOf(buffer, "io.scif.gui.SignedByteBuffer")) ) {
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
b=Clazz.new_($I$(18,1).c$$I$I$I,[w, h, 13]);
} else {
b=Clazz.new_($I$(18,1).c$$I$I$I,[w, h, 10]);
}b.setData$java_awt_image_Raster(raster);
} else if (c == 1 && type == 1 ) {
if (!(Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel"))) {
b=Clazz.new_($I$(18,1).c$$I$I$I,[w, h, 11]);
b.setData$java_awt_image_Raster(raster);
}} else if (c > 2 && type == 3  && buffer.getNumBanks$() == 1  && !(Clazz.instanceOf(buffer, "io.scif.gui.UnsignedIntBuffer")) ) {
if (c == 3) {
b=Clazz.new_($I$(18,1).c$$I$I$I,[w, h, 1]);
} else if (c == 4) {
b=Clazz.new_($I$(18,1).c$$I$I$I,[w, h, 2]);
}if (b != null ) b.setData$java_awt_image_Raster(raster);
}if (b == null ) b=Clazz.new_($I$(18,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, raster, false, null]);
return b;
}, 1);

Clazz.newMeth(C$, 'openImage$io_scif_Plane$io_scif_Reader$I', function (plane, r, imageIndex) {
var lengths=r.getMetadata$().get$I(imageIndex).getAxesLengthsPlanar$();
return C$.openImage$io_scif_Plane$io_scif_Reader$JA$I(plane, r, lengths, imageIndex);
}, 1);

Clazz.newMeth(C$, 'openImage$io_scif_Plane$io_scif_Reader$JA$I', function (plane, r, axes, imageIndex) {
return C$.openImage$io_scif_Plane$BA$io_scif_Reader$JA$I(plane, plane.getBytes$(), r, axes, imageIndex);
}, 1);

Clazz.newMeth(C$, 'openImage$io_scif_Plane$BA$io_scif_Reader$JA$I', function (plane, bytes, r, axes, imageIndex) {
var meta=r.getMetadata$();
var whc=Clazz.new_($I$(11,1).c$$io_scif_ImageMetadata$JA,[meta.get$I(imageIndex), axes]);
var w=whc.x$();
var h=whc.y$();
var rgbChanCount=whc.c$$();
var pixelType=meta.get$I(imageIndex).getPixelType$();
var little=meta.get$I(imageIndex).isLittleEndian$();
var normal=r.isNormalized$();
var interleaved=meta.get$I(imageIndex).getInterleavedAxisCount$() > 0;
var indexed=meta.get$I(imageIndex).isIndexed$();
if (pixelType == 6) {
var f=$I$(10).makeArray$BA$I$Z$Z(bytes, 4, true, little);
if (normal) f=$I$(10).normalize$FA(f);
return C$.makeImage$FA$I$I$I$Z(f, w, h, rgbChanCount, interleaved);
} else if (pixelType == 7) {
var d=$I$(10).makeArray$BA$I$Z$Z(bytes, 8, true, little);
if (normal) d=$I$(10).normalize$DA(d);
return C$.makeImage$DA$I$I$I$Z(d, w, h, rgbChanCount, interleaved);
}var signed=$I$(19).isSigned$I(pixelType);
var model=null;
if (signed) {
if (pixelType == 0) {
model=Clazz.new_($I$(20,1).c$$I$I$I,[8, 0, rgbChanCount]);
} else if (pixelType == 2) {
model=Clazz.new_($I$(20,1).c$$I$I$I,[16, 2, rgbChanCount]);
} else if (pixelType == 4) {
model=Clazz.new_($I$(20,1).c$$I$I$I,[32, 3, rgbChanCount]);
}}var bpp=$I$(19).getBytesPerPixel$I(pixelType);
var b=C$.makeImage$BA$I$I$I$Z$I$Z$Z$Z(bytes, w, h, rgbChanCount, interleaved, bpp, false, little, signed);
if (b == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Could not construct BufferedImage"]);
}if (indexed && rgbChanCount == 1 ) {
var ct=plane.getColorTable$();
if (Clazz.getClass($I$(21)).isAssignableFrom$Class(ct.getClass$())) {
var table=(ct).getValues$();
if (table != null  && table.length > 0  && table[0] != null  ) {
var len=table[0].length;
var dummy=table.length < 3 ? Clazz.array(Byte.TYPE, [len]) : null;
var red=table.length >= 1 ? table[0] : dummy;
var green=table.length >= 2 ? table[1] : dummy;
var blue=table.length >= 3 ? table[2] : dummy;
model=Clazz.new_($I$(22,1).c$$I$I$BA$BA$BA,[8, len, red, green, blue]);
}} else if (Clazz.getClass($I$(23)).isAssignableFrom$Class(ct.getClass$())) {
var table=(ct).getValues$();
if (table != null  && table.length > 0  && table[0] != null  ) {
model=Clazz.new_($I$(24,1).c$$I$I$HAA$Z,[16, table[0].length, table, meta.get$I(imageIndex).isLittleEndian$()]);
}}}if (indexed && rgbChanCount == 1  && Clazz.getClass($I$(25)).isAssignableFrom$Class(plane.getClass$()) ) {
model=(plane).getData$().getColorModel$();
}if (model != null ) {
var raster=$I$(17).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(b.getSampleModel$(), b.getRaster$().getDataBuffer$(), null);
b=Clazz.new_($I$(18,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[model, raster, false, null]);
}return b;
}, 1);

Clazz.newMeth(C$, 'openThumbImage$io_scif_Plane$io_scif_Reader$I$JA$I$I$Z', function (plane, r, imageIndex, axes, thumbSizeX, thumbSizeY, pad) {
var img=C$.openImage$io_scif_Plane$io_scif_Reader$JA$I(plane, r, axes, imageIndex);
img=C$.makeUnsigned$java_awt_image_BufferedImage(img);
img=C$.scale$java_awt_image_BufferedImage$I$I$Z(img, thumbSizeX, thumbSizeY, pad);
return img;
}, 1);

Clazz.newMeth(C$, 'getPixels$java_awt_image_BufferedImage', function (image) {
return C$.getPixels$java_awt_image_BufferedImage$I$I$I$I(image, 0, 0, image.getWidth$(), image.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getPixels$java_awt_image_BufferedImage$I$I$I$I', function (image, x, y, w, h) {
var raster=image.getRaster$();
return C$.getPixels$java_awt_image_WritableRaster$I$I$I$I(raster, x, y, w, h);
}, 1);

Clazz.newMeth(C$, 'getPixels$java_awt_image_WritableRaster', function (raster) {
return C$.getPixels$java_awt_image_WritableRaster$I$I$I$I(raster, 0, 0, raster.getWidth$(), raster.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getPixels$java_awt_image_WritableRaster$I$I$I$I', function (raster, x, y, w, h) {
var tt=raster.getTransferType$();
if (tt == 0) return C$.getBytes$java_awt_image_WritableRaster$I$I$I$I(raster, x, y, w, h);
 else if (tt == 1 || tt == 2 ) {
return C$.getShorts$java_awt_image_WritableRaster$I$I$I$I(raster, x, y, w, h);
} else if (tt == 3) return C$.getInts$java_awt_image_WritableRaster$I$I$I$I(raster, x, y, w, h);
 else if (tt == 4) return C$.getFloats$java_awt_image_WritableRaster$I$I$I$I(raster, x, y, w, h);
 else if (tt == 5) {
return C$.getDoubles$java_awt_image_WritableRaster$I$I$I$I(raster, x, y, w, h);
} else return null;
}, 1);

Clazz.newMeth(C$, 'getBytes$java_awt_image_BufferedImage', function (image) {
var r=image.getRaster$();
return C$.getBytes$java_awt_image_WritableRaster(r);
}, 1);

Clazz.newMeth(C$, 'getBytes$java_awt_image_WritableRaster', function (r) {
return C$.getBytes$java_awt_image_WritableRaster$I$I$I$I(r, 0, 0, r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getBytes$java_awt_image_WritableRaster$I$I$I$I', function (r, x, y, w, h) {
if (C$.canUseBankDataDirectly$java_awt_image_WritableRaster$I$Class(r, 0, Clazz.getClass($I$(3))) && x == 0  && y == 0  && w == r.getWidth$()  && h == r.getHeight$() ) {
return (r.getDataBuffer$()).getBankData$();
}var c=r.getNumBands$();
var samples=Clazz.array(Byte.TYPE, [c, w * h]);
var buf=Clazz.array(Integer.TYPE, [w * h]);
for (var i=0; i < c; i++) {
r.getSamples$I$I$I$I$I$IA(x, y, w, h, i, buf);
for (var j=0; j < buf.length; j++) samples[i][j]=((buf[j]|0)|0);

}
return samples;
}, 1);

Clazz.newMeth(C$, 'getShorts$java_awt_image_BufferedImage', function (image) {
var r=image.getRaster$();
return C$.getShorts$java_awt_image_WritableRaster(r);
}, 1);

Clazz.newMeth(C$, 'getShorts$java_awt_image_WritableRaster', function (r) {
return C$.getShorts$java_awt_image_WritableRaster$I$I$I$I(r, 0, 0, r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getShorts$java_awt_image_WritableRaster$I$I$I$I', function (r, x, y, w, h) {
if (C$.canUseBankDataDirectly$java_awt_image_WritableRaster$I$Class(r, 1, Clazz.getClass($I$(5))) && x == 0  && y == 0  && w == r.getWidth$()  && h == r.getHeight$() ) {
return (r.getDataBuffer$()).getBankData$();
}var c=r.getNumBands$();
var samples=Clazz.array(Short.TYPE, [c, w * h]);
var buf=Clazz.array(Integer.TYPE, [w * h]);
for (var i=0; i < c; i++) {
r.getSamples$I$I$I$I$I$IA(x, y, w, h, i, buf);
for (var j=0; j < buf.length; j++) samples[i][j]=(buf[j]|0);

}
return samples;
}, 1);

Clazz.newMeth(C$, 'getInts$java_awt_image_BufferedImage', function (image) {
var r=image.getRaster$();
return C$.getInts$java_awt_image_WritableRaster(r);
}, 1);

Clazz.newMeth(C$, 'getInts$java_awt_image_WritableRaster', function (r) {
return C$.getInts$java_awt_image_WritableRaster$I$I$I$I(r, 0, 0, r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getInts$java_awt_image_WritableRaster$I$I$I$I', function (r, x, y, w, h) {
if (C$.canUseBankDataDirectly$java_awt_image_WritableRaster$I$Class(r, 3, Clazz.getClass($I$(6))) && x == 0  && y == 0  && w == r.getWidth$()  && h == r.getHeight$() ) {
return (r.getDataBuffer$()).getBankData$();
}var c=r.getNumBands$();
var samples=Clazz.array(Integer.TYPE, [c, w * h]);
for (var i=0; i < c; i++) r.getSamples$I$I$I$I$I$IA(x, y, w, h, i, samples[i]);

return samples;
}, 1);

Clazz.newMeth(C$, 'getFloats$java_awt_image_BufferedImage', function (image) {
var r=image.getRaster$();
return C$.getFloats$java_awt_image_WritableRaster(r);
}, 1);

Clazz.newMeth(C$, 'getFloats$java_awt_image_WritableRaster', function (r) {
return C$.getFloats$java_awt_image_WritableRaster$I$I$I$I(r, 0, 0, r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getFloats$java_awt_image_WritableRaster$I$I$I$I', function (r, x, y, w, h) {
if (C$.canUseBankDataDirectly$java_awt_image_WritableRaster$I$Class(r, 4, Clazz.getClass($I$(8))) && x == 0  && y == 0  && w == r.getWidth$()  && h == r.getHeight$() ) {
return (r.getDataBuffer$()).getBankData$();
}var c=r.getNumBands$();
var samples=Clazz.array(Float.TYPE, [c, w * h]);
for (var i=0; i < c; i++) r.getSamples$I$I$I$I$I$FA(x, y, w, h, i, samples[i]);

return samples;
}, 1);

Clazz.newMeth(C$, 'getDoubles$java_awt_image_BufferedImage', function (image) {
var r=image.getRaster$();
return C$.getDoubles$java_awt_image_WritableRaster(r);
}, 1);

Clazz.newMeth(C$, 'getDoubles$java_awt_image_WritableRaster', function (r) {
return C$.getDoubles$java_awt_image_WritableRaster$I$I$I$I(r, 0, 0, r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getDoubles$java_awt_image_WritableRaster$I$I$I$I', function (r, x, y, w, h) {
if (C$.canUseBankDataDirectly$java_awt_image_WritableRaster$I$Class(r, 5, Clazz.getClass($I$(9))) && x == 0  && y == 0  && w == r.getWidth$()  && h == r.getHeight$() ) {
return (r.getDataBuffer$()).getBankData$();
}var c=r.getNumBands$();
var samples=Clazz.array(Double.TYPE, [c, w * h]);
for (var i=0; i < c; i++) r.getSamples$I$I$I$I$I$DA(x, y, w, h, i, samples[i]);

return samples;
}, 1);

Clazz.newMeth(C$, 'canUseBankDataDirectly$java_awt_image_WritableRaster$I$Class', function (r, transferType, dataBufferClass) {
var tt=r.getTransferType$();
if (tt != transferType) return false;
var buffer=r.getDataBuffer$();
if (!dataBufferClass.isInstance$O(buffer)) return false;
var model=r.getSampleModel$();
if (!(Clazz.instanceOf(model, "java.awt.image.ComponentSampleModel"))) return false;
var csm=model;
var pixelStride=csm.getPixelStride$();
if (pixelStride != 1) return false;
var w=r.getWidth$();
var scanlineStride=csm.getScanlineStride$();
if (scanlineStride != w) return false;
var c=r.getNumBands$();
var bandOffsets=csm.getBandOffsets$();
if (bandOffsets.length != c) return false;
for (var i=0; i < bandOffsets.length; i++) {
if (bandOffsets[i] != 0) return false;
}
for (var i=0; i < bandOffsets.length; i++) {
if (bandOffsets[i] != i) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'getPixelBytes$java_awt_image_BufferedImage$Z', function (img, little) {
return C$.getPixelBytes$java_awt_image_BufferedImage$Z$I$I$I$I(img, little, 0, 0, img.getWidth$(), img.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getPixelBytes$java_awt_image_WritableRaster$Z', function (r, little) {
return C$.getPixelBytes$java_awt_image_WritableRaster$Z$I$I$I$I(r, little, 0, 0, r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'getPixelBytes$java_awt_image_BufferedImage$Z$I$I$I$I', function (img, little, x, y, w, h) {
var pixels=C$.getPixels$java_awt_image_BufferedImage$I$I$I$I(img, x, y, w, h);
var imageType=img.getType$();
var pixelBytes=null;
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -2))) {
pixelBytes=pixels;
} else if (Clazz.instanceOf(pixels, Clazz.array(Short.TYPE, -2))) {
var s=pixels;
pixelBytes=Clazz.array(Byte.TYPE, [s.length, s[0].length * 2]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < s[0].length; j++) {
$I$(10).unpack$J$BA$I$I$Z(s[i][j], pixelBytes[i], j * 2, 2, little);
}
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Integer.TYPE, -2))) {
var $in=pixels;
if (imageType == 1 || imageType == 4  || imageType == 2 ) {
pixelBytes=Clazz.array(Byte.TYPE, [$in.length, $in[0].length]);
for (var c=0; c < $in.length; c++) {
for (var i=0; i < $in[0].length; i++) {
if (imageType != 4) {
pixelBytes[c][i]=((($in[c][i] & 255)|0)|0);
} else {
pixelBytes[$in.length - c - 1 ][i]=((($in[c][i] & 255)|0)|0);
}}
}
} else {
pixelBytes=Clazz.array(Byte.TYPE, [$in.length, $in[0].length * 4]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < $in[0].length; j++) {
$I$(10).unpack$J$BA$I$I$Z($in[i][j], pixelBytes[i], j * 4, 4, little);
}
}
}} else if (Clazz.instanceOf(pixels, Clazz.array(Float.TYPE, -2))) {
var $in=pixels;
pixelBytes=Clazz.array(Byte.TYPE, [$in.length, $in[0].length * 4]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < $in[0].length; j++) {
var v=Float.floatToIntBits$F($in[i][j]);
$I$(10).unpack$J$BA$I$I$Z(v, pixelBytes[i], j * 4, 4, little);
}
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Double.TYPE, -2))) {
var $in=pixels;
pixelBytes=Clazz.array(Byte.TYPE, [$in.length, $in[0].length * 8]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < $in[0].length; j++) {
var v=Double.doubleToLongBits$D($in[i][j]);
$I$(10).unpack$J$BA$I$I$Z(v, pixelBytes[i], j * 8, 8, little);
}
}
}return pixelBytes;
}, 1);

Clazz.newMeth(C$, 'getPixelBytes$java_awt_image_WritableRaster$Z$I$I$I$I', function (r, little, x, y, w, h) {
var pixels=C$.getPixels$java_awt_image_WritableRaster(r);
var pixelBytes=null;
var bpp=0;
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -2))) {
pixelBytes=pixels;
bpp=1;
} else if (Clazz.instanceOf(pixels, Clazz.array(Short.TYPE, -2))) {
bpp=2;
var s=pixels;
pixelBytes=Clazz.array(Byte.TYPE, [s.length, s[0].length * bpp]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < s[0].length; j++) {
$I$(10).unpack$J$BA$I$I$Z(s[i][j], pixelBytes[i], j * bpp, bpp, little);
}
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Integer.TYPE, -2))) {
bpp=4;
var $in=pixels;
pixelBytes=Clazz.array(Byte.TYPE, [$in.length, $in[0].length * bpp]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < $in[0].length; j++) {
$I$(10).unpack$J$BA$I$I$Z($in[i][j], pixelBytes[i], j * bpp, bpp, little);
}
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Float.TYPE, -2))) {
bpp=4;
var $in=pixels;
pixelBytes=Clazz.array(Byte.TYPE, [$in.length, $in[0].length * bpp]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < $in[0].length; j++) {
var v=Float.floatToIntBits$F($in[i][j]);
$I$(10).unpack$J$BA$I$I$Z(v, pixelBytes[i], j * bpp, bpp, little);
}
}
} else if (Clazz.instanceOf(pixels, Clazz.array(Double.TYPE, -2))) {
bpp=8;
var $in=pixels;
pixelBytes=Clazz.array(Byte.TYPE, [$in.length, $in[0].length * bpp]);
for (var i=0; i < pixelBytes.length; i++) {
for (var j=0; j < $in[0].length; j++) {
var v=Double.doubleToLongBits$D($in[i][j]);
$I$(10).unpack$J$BA$I$I$Z(v, pixelBytes[i], j * bpp, bpp, little);
}
}
}if (x == 0 && y == 0  && w == r.getWidth$()  && h == r.getHeight$() ) {
return pixelBytes;
}var croppedBytes=Clazz.array(Byte.TYPE, [pixelBytes.length, w * h * bpp ]);
for (var c=0; c < croppedBytes.length; c++) {
for (var row=0; row < h; row++) {
var src=(row + y) * r.getWidth$() * bpp  + x * bpp;
var dest=row * w * bpp ;
System.arraycopy$O$I$O$I$I(pixelBytes[c], src, croppedBytes[c], dest, w * bpp);
}
}
return croppedBytes;
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

Clazz.newMeth(C$, 'convertRenderedImage$java_awt_image_RenderedImage', function (img) {
if (Clazz.instanceOf(img, "java.awt.image.BufferedImage")) return img;
var cm=img.getColorModel$();
var width=img.getWidth$();
var height=img.getHeight$();
var raster=cm.createCompatibleWritableRaster$I$I(width, height);
var isAlphaPremultiplied=cm.isAlphaPremultiplied$();
var properties=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(26,1));
var keys=img.getPropertyNames$();
if (keys != null ) {
for (var i=0; i < keys.length; i++) {
properties.put$TK$TV(keys[i], img.getProperty$S(keys[i]));
}
}var result=Clazz.new_($I$(18,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, raster, isAlphaPremultiplied, properties]);
img.copyData$java_awt_image_WritableRaster(raster);
return result;
}, 1);

Clazz.newMeth(C$, 'getBytes$java_awt_image_BufferedImage$Z', function (img, separated) {
var p=C$.getBytes$java_awt_image_BufferedImage(img);
if (separated || p.length == 1 ) return p[0];
var rtn=Clazz.array(Byte.TYPE, [p.length * p[0].length]);
for (var i=0; i < p.length; i++) {
System.arraycopy$O$I$O$I$I(p[i], 0, rtn, i * p[0].length, p[i].length);
}
return rtn;
}, 1);

Clazz.newMeth(C$, 'makeUnsigned$java_awt_image_BufferedImage', function (img) {
if (img == null ) return null;
var pixelType=C$.getPixelType$java_awt_image_BufferedImage(img);
var signed=$I$(19).isSigned$I(pixelType);
var fp=$I$(19).isFloatingPoint$I(pixelType);
if (!signed || fp ) return img;
var bpp=$I$(19).getBytesPerPixel$I(pixelType);
var pix=C$.getPixelBytes$java_awt_image_BufferedImage$Z(img, false);
return C$.makeImage$BAA$I$I$I$Z$Z$Z(pix, img.getWidth$(), img.getHeight$(), bpp, fp, false, false);
}, 1);

Clazz.newMeth(C$, 'getSubimage$java_awt_image_BufferedImage$Z$net_imglib2_Interval', function (image, littleEndian, bounds) {
return C$.getSubimage$java_awt_image_BufferedImage$Z$I$I$I$I(image, littleEndian, C$.i$J(bounds.min$I(0)), C$.i$J(bounds.min$I(1)), C$.i$J(bounds.dimension$I(0)), C$.i$J(bounds.dimension$I(1)));
}, 1);

Clazz.newMeth(C$, 'getSubimage$java_awt_image_BufferedImage$Z$I$I$I$I', function (image, littleEndian, x, y, w, h) {
var pixelType=C$.getPixelType$java_awt_image_BufferedImage(image);
var pix=C$.getPixelBytes$java_awt_image_BufferedImage$Z$I$I$I$I(image, littleEndian, x, y, w, h);
return C$.makeImage$BAA$I$I$I$Z$Z$Z(pix, w, h, $I$(19).getBytesPerPixel$I(pixelType), $I$(19).isFloatingPoint$I(pixelType), littleEndian, $I$(19).isSigned$I(pixelType));
}, 1);

Clazz.newMeth(C$, 'splitChannels$java_awt_image_BufferedImage', function (image) {
var w=image.getWidth$();
var h=image.getHeight$();
var c=image.getRaster$().getNumBands$();
if (c == 1) return Clazz.array($I$(18), -1, [image]);
var results=Clazz.array($I$(18), [c]);
var o=C$.getPixels$java_awt_image_BufferedImage(image);
var pixelType=C$.getPixelType$java_awt_image_BufferedImage(image);
var signed=$I$(19).isSigned$I(pixelType);
if (Clazz.instanceOf(o, Clazz.array(Byte.TYPE, -2))) {
var pix=o;
for (var i=0; i < c; i++) results[i]=C$.makeImage$BA$I$I$Z(pix[i], w, h, signed);

} else if (Clazz.instanceOf(o, Clazz.array(Short.TYPE, -2))) {
var pix=o;
for (var i=0; i < c; i++) results[i]=C$.makeImage$HA$I$I$Z(pix[i], w, h, signed);

} else if (Clazz.instanceOf(o, Clazz.array(Integer.TYPE, -2))) {
var pix=o;
for (var i=0; i < c; i++) results[i]=C$.makeImage$IA$I$I$Z(pix[i], w, h, signed);

} else if (Clazz.instanceOf(o, Clazz.array(Float.TYPE, -2))) {
var pix=o;
for (var i=0; i < c; i++) results[i]=C$.makeImage$FA$I$I(pix[i], w, h);

} else if (Clazz.instanceOf(o, Clazz.array(Double.TYPE, -2))) {
var pix=o;
for (var i=0; i < c; i++) results[i]=C$.makeImage$DA$I$I(pix[i], w, h);

}return results;
}, 1);

Clazz.newMeth(C$, 'mergeChannels$java_awt_image_BufferedImageA', function (images) {
if (images == null  || images.length == 0 ) return null;
var pixelArrays=Clazz.array(java.lang.Object, [images.length]);
var c=0;
var type=0;
for (var i=0; i < images.length; i++) {
var o=C$.getPixels$java_awt_image_BufferedImage(images[i]);
if (Clazz.instanceOf(o, Clazz.array(Byte.TYPE, -2))) {
if (i == 0) type=0;
 else if (type != 0) return null;
c+=(o).length;
} else if (Clazz.instanceOf(o, Clazz.array(Short.TYPE, -2))) {
if (i == 0) type=1;
 else if (type != 1) return null;
c+=(o).length;
} else if (Clazz.instanceOf(o, Clazz.array(Integer.TYPE, -2))) {
if (i == 0) type=3;
 else if (type != 3) return null;
c+=(o).length;
} else if (Clazz.instanceOf(o, Clazz.array(Float.TYPE, -2))) {
if (i == 0) type=4;
 else if (type != 4) return null;
c+=(o).length;
} else if (Clazz.instanceOf(o, Clazz.array(Double.TYPE, -2))) {
if (i == 0) type=5;
 else if (type != 5) return null;
c+=(o).length;
}if (c > 4) return null;
pixelArrays[i]=o;
}
if (c < 1 || c > 4 ) return null;
var w=images[0].getWidth$();
var h=images[0].getHeight$();
var pixelType=C$.getPixelType$java_awt_image_BufferedImage(images[0]);
var signed=$I$(19).isSigned$I(pixelType);
if (type == 0) {
var pix=Clazz.array(Byte.TYPE, [c, null]);
var ndx=0;
for (var array, $array = 0, $$array = pixelArrays; $array<$$array.length&&((array=($$array[$array])),1);$array++) {
var bytes=array;
for (var byteValue, $byteValue = 0, $$byteValue = bytes; $byteValue<$$byteValue.length&&((byteValue=($$byteValue[$byteValue])),1);$byteValue++) pix[ndx++]=byteValue;

}
while (ndx < pix.length)pix[ndx++]=Clazz.array(Byte.TYPE, [w * h]);

return C$.makeImage$BAA$I$I$Z(pix, w, h, signed);
}if (type == 1 || type == 2 ) {
var pix=Clazz.array(Short.TYPE, [c, null]);
var ndx=0;
for (var array, $array = 0, $$array = pixelArrays; $array<$$array.length&&((array=($$array[$array])),1);$array++) {
var shorts=array;
for (var shortsValue, $shortsValue = 0, $$shortsValue = shorts; $shortsValue<$$shortsValue.length&&((shortsValue=($$shortsValue[$shortsValue])),1);$shortsValue++) pix[ndx++]=shortsValue;

}
while (ndx < pix.length)pix[ndx++]=Clazz.array(Short.TYPE, [w * h]);

return C$.makeImage$HAA$I$I$Z(pix, w, h, signed);
}if (type == 3) {
var pix=Clazz.array(Integer.TYPE, [c, null]);
var ndx=0;
for (var array, $array = 0, $$array = pixelArrays; $array<$$array.length&&((array=($$array[$array])),1);$array++) {
var ints=array;
for (var intValue, $intValue = 0, $$intValue = ints; $intValue<$$intValue.length&&((intValue=($$intValue[$intValue])),1);$intValue++) pix[ndx++]=intValue;

}
while (ndx < pix.length)pix[ndx++]=Clazz.array(Integer.TYPE, [w * h]);

return C$.makeImage$IAA$I$I$Z(pix, w, h, signed);
}if (type == 4) {
var pix=Clazz.array(Float.TYPE, [c, null]);
var ndx=0;
for (var array, $array = 0, $$array = pixelArrays; $array<$$array.length&&((array=($$array[$array])),1);$array++) {
var floats=array;
for (var floatValue, $floatValue = 0, $$floatValue = floats; $floatValue<$$floatValue.length&&((floatValue=($$floatValue[$floatValue])),1);$floatValue++) pix[ndx++]=floatValue;

}
while (ndx < pix.length)pix[ndx++]=Clazz.array(Float.TYPE, [w * h]);

return C$.makeImage$FAA$I$I(pix, w, h);
}if (type == 5) {
var pix=Clazz.array(Double.TYPE, [c, null]);
var ndx=0;
for (var array, $array = 0, $$array = pixelArrays; $array<$$array.length&&((array=($$array[$array])),1);$array++) {
var doubles=array;
for (var doublesValue, $doublesValue = 0, $$doublesValue = doubles; $doublesValue<$$doublesValue.length&&((doublesValue=($$doublesValue[$doublesValue])),1);$doublesValue++) pix[ndx++]=doublesValue;

}
while (ndx < pix.length)pix[ndx++]=Clazz.array(Double.TYPE, [w * h]);

return C$.makeImage$DAA$I$I(pix, w, h);
}return null;
}, 1);

Clazz.newMeth(C$, 'padImage$java_awt_image_BufferedImage$I$I', function (img, width, height) {
if (img == null ) {
var data=Clazz.array(Byte.TYPE, [1, width * height]);
return C$.makeImage$BAA$I$I$Z(data, width, height, false);
}var needsPadding=img.getWidth$() != width || img.getHeight$() != height ;
if (needsPadding) {
var pixels=C$.getPixels$java_awt_image_BufferedImage(img);
var pixelType=C$.getPixelType$java_awt_image_BufferedImage(img);
var signed=$I$(19).isSigned$I(pixelType);
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -2))) {
var b=pixels;
var newBytes=Clazz.array(Byte.TYPE, [b.length, width * height]);
for (var i=0; i < b.length; i++) {
newBytes[i]=$I$(27).padImage$BA$Z$I$I$I$I(b[i], false, 1, img.getWidth$(), width, height);
}
return C$.makeImage$BAA$I$I$Z(newBytes, width, height, signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Short.TYPE, -2))) {
var b=pixels;
var newShorts=Clazz.array(Short.TYPE, [b.length, width * height]);
for (var i=0; i < b.length; i++) {
newShorts[i]=$I$(27).padImage$HA$Z$I$I$I$I(b[i], false, 1, img.getWidth$(), width, height);
}
return C$.makeImage$HAA$I$I$Z(newShorts, width, height, signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Integer.TYPE, -2))) {
var b=pixels;
var newInts=Clazz.array(Integer.TYPE, [b.length, width * height]);
for (var i=0; i < b.length; i++) {
newInts[i]=$I$(27).padImage$IA$Z$I$I$I$I(b[i], false, 1, img.getWidth$(), width, height);
}
return C$.makeImage$IAA$I$I$Z(newInts, width, height, signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Float.TYPE, -2))) {
var b=pixels;
var newFloats=Clazz.array(Float.TYPE, [b.length, width * height]);
for (var i=0; i < b.length; i++) {
newFloats[i]=$I$(27).padImage$FA$Z$I$I$I$I(b[i], false, 1, img.getWidth$(), width, height);
}
return C$.makeImage$FAA$I$I(newFloats, width, height);
} else if (Clazz.instanceOf(pixels, Clazz.array(Double.TYPE, -2))) {
var b=pixels;
var newDoubles=Clazz.array(Double.TYPE, [b.length, width * height]);
for (var i=0; i < b.length; i++) {
newDoubles[i]=$I$(27).padImage$DA$Z$I$I$I$I(b[i], false, 1, img.getWidth$(), width, height);
}
return C$.makeImage$DAA$I$I(newDoubles, width, height);
}return null;
}return img;
}, 1);

Clazz.newMeth(C$, 'autoscale$java_awt_image_BufferedImage', function (img) {
var pixels=C$.getPixelBytes$java_awt_image_BufferedImage$Z(img, true);
var min=1.7976931348623157E308;
var max=0.0;
var bits=(pixels[0].length/(img.getWidth$() * img.getHeight$())|0) * 8;
for (var i=0; i < pixels.length; i++) {
var mm=$I$(27).scanData$BA$I$Z(pixels[0], bits, true);
var tmin=mm[0].doubleValue$();
var tmax=mm[1].doubleValue$();
if (tmin < min ) min=tmin;
if (tmax > max ) max=tmax;
}
return C$.autoscale$java_awt_image_BufferedImage$I$I(img, (min|0), (max|0));
}, 1);

Clazz.newMeth(C$, 'autoscale$java_awt_image_BufferedImage$I$I', function (img, min, max) {
var pixels=C$.getPixels$java_awt_image_BufferedImage(img);
var pixelType=C$.getPixelType$java_awt_image_BufferedImage(img);
var signed=$I$(19).isSigned$I(pixelType);
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -2))) return img;
 else if (Clazz.instanceOf(pixels, Clazz.array(Short.TYPE, -2))) {
var shorts=pixels;
var out=Clazz.array(Byte.TYPE, [shorts.length, shorts[0].length]);
for (var i=0; i < out.length; i++) {
for (var j=0; j < out[i].length; j++) {
if (shorts[i][j] < 0) shorts[i][j]=(shorts[i][j]+(32767)|0);
var diff=max - min;
var dist=(shorts[i][j] - min) / diff;
if (shorts[i][j] >= max) out[i][j]=(-1|0);
 else if (shorts[i][j] <= min) out[i][j]=(0|0);
 else out[i][j]=(((dist * 256)|0)|0);
}
}
return C$.makeImage$BAA$I$I$Z(out, img.getWidth$(), img.getHeight$(), signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Integer.TYPE, -2))) {
var ints=pixels;
var out=Clazz.array(Byte.TYPE, [ints.length, ints[0].length]);
for (var i=0; i < out.length; i++) {
for (var j=0; j < out[i].length; j++) {
if (ints[i][j] >= max) out[i][j]=(-1|0);
 else if (ints[i][j] <= min) out[i][j]=(0|0);
 else {
var diff=max - min;
var dist=((ints[i][j] - min)/diff|0);
out[i][j]=(((dist * 256)|0)|0);
}}
}
return C$.makeImage$BAA$I$I$Z(out, img.getWidth$(), img.getHeight$(), signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Float.TYPE, -2))) {
var floats=pixels;
var out=Clazz.array(Byte.TYPE, [floats.length, floats[0].length]);
for (var i=0; i < out.length; i++) {
for (var j=0; j < out[i].length; j++) {
if (floats[i][j] >= max ) out[i][j]=(-1|0);
 else if (floats[i][j] <= min ) out[i][j]=(0|0);
 else {
var diff=max - min;
var dist=(floats[i][j] - min) / diff;
out[i][j]=(((dist * 256)|0)|0);
}}
}
return C$.makeImage$BAA$I$I$Z(out, img.getWidth$(), img.getHeight$(), signed);
} else if (Clazz.instanceOf(pixels, Clazz.array(Double.TYPE, -2))) {
var doubles=pixels;
var out=Clazz.array(Byte.TYPE, [doubles.length, doubles[0].length]);
for (var i=0; i < out.length; i++) {
for (var j=0; j < out[i].length; j++) {
if (doubles[i][j] >= max ) out[i][j]=(-1|0);
 else if (doubles[i][j] <= min ) out[i][j]=(0|0);
 else {
var diff=max - min;
var dist=(doubles[i][j] - min) / diff;
out[i][j]=(((dist * 256)|0)|0);
}}
}
return C$.makeImage$BAA$I$I$Z(out, img.getWidth$(), img.getHeight$(), signed);
}return img;
}, 1);

Clazz.newMeth(C$, 'copyScaled$java_awt_image_BufferedImage$java_awt_image_BufferedImage$O', function (source, target, hint) {
if (hint == null ) hint=$I$(28).VALUE_INTERPOLATION_BICUBIC;
var g2=target.createGraphics$();
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(28).KEY_INTERPOLATION, hint);
var scalex=target.getWidth$() / source.getWidth$();
var scaley=target.getHeight$() / source.getHeight$();
var xform=$I$(29).getScaleInstance$D$D(scalex, scaley);
g2.drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform(source, xform);
g2.dispose$();
return target;
}, 1);

Clazz.newMeth(C$, 'scale2D$java_awt_image_BufferedImage$I$I$O$java_awt_GraphicsConfiguration', function (image, width, height, hint, gc) {
if (gc == null ) gc=C$.getDefaultConfiguration$();
var trans=image.getColorModel$().getTransparency$();
return C$.copyScaled$java_awt_image_BufferedImage$java_awt_image_BufferedImage$O(image, gc.createCompatibleImage$I$I$I(width, height, trans), hint);
}, 1);

Clazz.newMeth(C$, 'scale2D$java_awt_image_BufferedImage$I$I$O$java_awt_image_ColorModel', function (image, width, height, hint, cm) {
var raster=cm.createCompatibleWritableRaster$I$I(width, height);
var isRasterPremultiplied=cm.isAlphaPremultiplied$();
return C$.copyScaled$java_awt_image_BufferedImage$java_awt_image_BufferedImage$O(image, Clazz.new_($I$(18,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, raster, isRasterPremultiplied, null]), hint);
}, 1);

Clazz.newMeth(C$, 'scaleAWT$java_awt_image_BufferedImage$I$I$I', function (source, width, height, hint) {
return source.getScaledInstance$I$I$I(width, height, hint);
}, 1);

Clazz.newMeth(C$, 'scale$java_awt_image_BufferedImage$I$I$Z', function (source, width, height, pad) {
var w=source.getWidth$();
var h=source.getHeight$();
if (w == width && h == height ) return source;
var finalWidth=width;
var finalHeight=height;
if (pad) {
var r=w / h;
var ratio=width / height;
if (r > ratio ) {
height=((h * width)/w|0);
} else {
width=((w * height)/h|0);
}}var pixelType=C$.getPixelType$java_awt_image_BufferedImage(source);
var result=null;
var sourceModel=source.getColorModel$();
if ((Clazz.instanceOf(sourceModel, "io.scif.gui.Index16ColorModel")) || (Clazz.instanceOf(sourceModel, "java.awt.image.IndexColorModel")) || (Clazz.instanceOf(sourceModel, "io.scif.gui.SignedColorModel"))  ) {
var buffer=source.getData$().getDataBuffer$();
var raster=$I$(17).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(source.getSampleModel$(), buffer, null);
var model=C$.makeColorModel$I$I(1, buffer.getDataType$());
if (Clazz.instanceOf(sourceModel, "io.scif.gui.SignedColorModel")) {
model=sourceModel;
}source=Clazz.new_($I$(18,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[model, raster, false, null]);
var scaled=C$.scaleAWT$java_awt_image_BufferedImage$I$I$I(source, width, height, 16);
result=C$.makeBuffered$java_awt_Image$java_awt_image_ColorModel(scaled, sourceModel);
raster=$I$(17).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(result.getSampleModel$(), result.getData$().getDataBuffer$(), null);
result=Clazz.new_($I$(18,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[sourceModel, raster, false, null]);
} else {
if ($I$(19).isSigned$I(pixelType)) {
source=C$.makeUnsigned$java_awt_image_BufferedImage(source);
sourceModel=null;
}var scaled=C$.scaleAWT$java_awt_image_BufferedImage$I$I$I(source, width, height, 16);
result=C$.makeBuffered$java_awt_Image$java_awt_image_ColorModel(scaled, sourceModel);
}return C$.padImage$java_awt_image_BufferedImage$I$I(result, finalWidth, finalHeight);
}, 1);

Clazz.newMeth(C$, 'makeBuffered$java_awt_Image', function (image) {
if (Clazz.instanceOf(image, "java.awt.image.BufferedImage")) return image;
C$.loadImage$java_awt_Image(image);
var img=Clazz.new_($I$(18,1).c$$I$I$I,[image.getWidth$java_awt_image_ImageObserver(C$.OBS), image.getHeight$java_awt_image_ImageObserver(C$.OBS), 1]);
var g=img.getGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, 0, 0, C$.OBS);
g.dispose$();
return img;
}, 1);

Clazz.newMeth(C$, 'makeBuffered$java_awt_Image$java_awt_image_ColorModel', function (image, cm) {
if (cm == null ) return C$.makeBuffered$java_awt_Image(image);
if (Clazz.instanceOf(image, "java.awt.image.BufferedImage")) {
var bi=image;
if (cm.equals$O(bi.getColorModel$())) return bi;
}C$.loadImage$java_awt_Image(image);
var w=image.getWidth$java_awt_image_ImageObserver(C$.OBS);
var h=image.getHeight$java_awt_image_ImageObserver(C$.OBS);
var alphaPremultiplied=cm.isAlphaPremultiplied$();
var raster=cm.createCompatibleWritableRaster$I$I(w, h);
var result=Clazz.new_($I$(18,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, raster, alphaPremultiplied, null]);
var g=result.createGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, 0, 0, C$.OBS);
g.dispose$();
return result;
}, 1);

Clazz.newMeth(C$, 'loadImage$java_awt_Image', function (image) {
if (Clazz.instanceOf(image, "java.awt.image.BufferedImage")) return true;
var tracker=Clazz.new_($I$(30,1).c$$java_awt_Component,[C$.OBS]);
tracker.addImage$java_awt_Image$I(image, 0);
try {
tracker.waitForID$I(0);
} catch (exc) {
if (Clazz.exceptionOf(exc,"InterruptedException")){
return false;
} else {
throw exc;
}
}
if (8 != tracker.statusID$I$Z(0, false)) return false;
return true;
}, 1);

Clazz.newMeth(C$, 'getSize$java_awt_Image', function (image) {
if (image == null ) return Clazz.new_($I$(31,1).c$$I$I,[0, 0]);
if (Clazz.instanceOf(image, "java.awt.image.BufferedImage")) {
var bi=image;
return Clazz.new_($I$(31,1).c$$I$I,[bi.getWidth$(), bi.getHeight$()]);
}C$.loadImage$java_awt_Image(image);
return Clazz.new_($I$(31,1).c$$I$I,[image.getWidth$java_awt_image_ImageObserver(C$.OBS), image.getHeight$java_awt_image_ImageObserver(C$.OBS)]);
}, 1);

Clazz.newMeth(C$, 'makeCompatible$java_awt_image_BufferedImage$java_awt_GraphicsConfiguration', function (image, gc) {
if (gc == null ) gc=C$.getDefaultConfiguration$();
var w=image.getWidth$();
var h=image.getHeight$();
var trans=image.getColorModel$().getTransparency$();
var result=gc.createCompatibleImage$I$I$I(w, h, trans);
var g2=result.createGraphics$();
g2.drawRenderedImage$java_awt_image_RenderedImage$java_awt_geom_AffineTransform(image, null);
g2.dispose$();
return result;
}, 1);

Clazz.newMeth(C$, 'getDefaultConfiguration$', function () {
var ge=$I$(32).getLocalGraphicsEnvironment$();
var gd=ge.getDefaultScreenDevice$();
return gd.getDefaultConfiguration$();
}, 1);

Clazz.newMeth(C$, 'makeColorSpace$I', function (c) {
var type;
switch (c) {
case 1:
type=1003;
break;
case 2:
type=-1;
break;
case 3:
type=1000;
break;
case 4:
type=1000;
break;
default:
return null;
}
return $I$(33).getInstance$I(type);
}, 1);

Clazz.newMeth(C$, 'makeColorModel$I$I', function (c, dataType) {
var cs=C$.makeColorSpace$I(c);
return cs == null  ? null : Clazz.new_($I$(34,1).c$$java_awt_color_ColorSpace$Z$Z$I$I,[cs, c == 4, false, 3, dataType]);
}, 1);

Clazz.newMeth(C$, 'indexedToRGB$java_awt_image_BufferedImage$Z', function (img, le) {
var indices=C$.getPixelBytes$java_awt_image_BufferedImage$Z(img, le);
if (indices.length > 1) return img;
var pixelType=C$.getPixelType$java_awt_image_BufferedImage(img);
var signed=$I$(19).isSigned$I(pixelType);
if (pixelType == 1) {
var model=img.getColorModel$();
var b=Clazz.array(Byte.TYPE, [3, indices[0].length]);
for (var i=0; i < indices[0].length; i++) {
b[0][i]=(((model.getRed$I(indices[0][i] & 255) & 255)|0)|0);
b[1][i]=(((model.getGreen$I(indices[0][i] & 255) & 255)|0)|0);
b[2][i]=(((model.getBlue$I(indices[0][i] & 255) & 255)|0)|0);
}
return C$.makeImage$BAA$I$I$Z(b, img.getWidth$(), img.getHeight$(), signed);
} else if (pixelType == 3) {
var model=img.getColorModel$();
var s=Clazz.array(Short.TYPE, [3, (indices[0].length/2|0)]);
for (var i=0; i < s[0].length; i++) {
var ndx=$I$(10).toInt$BA$I$I$Z(indices[0], i * 2, 2, le) & 65535;
s[0][i]=((model.getRed$I(ndx) & 65535)|0);
s[1][i]=((model.getRed$I(ndx) & 65535)|0);
s[2][i]=((model.getRed$I(ndx) & 65535)|0);
}
return C$.makeImage$HAA$I$I$Z(s, img.getWidth$(), img.getHeight$(), signed);
}return null;
}, 1);

Clazz.newMeth(C$, 'get8BitLookupTable$java_awt_image_ColorModel', function (model) {
if (!(Clazz.instanceOf(model, "java.awt.image.IndexColorModel"))) return null;
var m=model;
var lut=Clazz.array(Byte.TYPE, [3, m.getMapSize$()]);
m.getReds$BA(lut[0]);
m.getGreens$BA(lut[1]);
m.getBlues$BA(lut[2]);
return lut;
}, 1);

Clazz.newMeth(C$, 'getLookupTable$java_awt_image_ColorModel', function (model) {
if (!(Clazz.instanceOf(model, "io.scif.gui.Index16ColorModel"))) return null;
var m=model;
var lut=Clazz.array(Short.TYPE, [3, null]);
lut[0]=m.getReds$();
lut[1]=m.getGreens$();
lut[2]=m.getBlues$();
return lut;
}, 1);

Clazz.newMeth(C$, 'i$J', function (value) {
if (value > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value too large: " + value]);
}if (value < -2147483648) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value too small: " + value]);
}return (value|0);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
