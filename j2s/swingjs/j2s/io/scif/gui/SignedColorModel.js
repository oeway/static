(function(){var P$=Clazz.newPackage("io.scif.gui"),p$1={},I$=[[0,'io.scif.gui.AWTImageTools','java.awt.image.ComponentColorModel','java.awt.image.ComponentSampleModel','java.awt.image.DataBufferShort','java.awt.image.Raster']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SignedColorModel", null, 'java.awt.image.ColorModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['pixelBits','nChannels','max'],'O',['helper','java.awt.image.ComponentColorModel']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (pixelBits, dataType, nChannels) {
;C$.superclazz.c$$I$IA$java_awt_color_ColorSpace$Z$Z$I$I.apply(this,[pixelBits, C$.makeBitArray$I$I(nChannels, pixelBits), $I$(1).makeColorSpace$I(nChannels), nChannels == 4, false, 3, dataType]);C$.$init$.apply(this);
var type=dataType;
if (type == 2) {
type=1;
}this.helper=Clazz.new_($I$(2,1).c$$java_awt_color_ColorSpace$Z$Z$I$I,[$I$(1).makeColorSpace$I(nChannels), nChannels == 4, false, 3, type]);
this.pixelBits=pixelBits;
this.nChannels=nChannels;
this.max=(Math.pow(2, pixelBits)|0) - 1;
}, 1);

Clazz.newMeth(C$, 'getDataElements$I$O', function (rgb, pixel) {
return this.helper.getDataElements$I$O(rgb, pixel);
});

Clazz.newMeth(C$, 'isCompatibleRaster$java_awt_image_Raster', function (raster) {
if (this.pixelBits == 16) {
return raster.getTransferType$() == 2;
}return this.helper.isCompatibleRaster$java_awt_image_Raster(raster);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I', function (w, h) {
if (this.pixelBits == 16) {
var bandOffsets=Clazz.array(Integer.TYPE, [this.nChannels]);
for (var i=0; i < this.nChannels; i++) bandOffsets[i]=i;

var m=Clazz.new_($I$(3,1).c$$I$I$I$I$I$IA,[2, w, h, this.nChannels, w * this.nChannels, bandOffsets]);
var db=Clazz.new_($I$(4,1).c$$I$I,[w * h, this.nChannels]);
return $I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(m, db, null);
}return this.helper.createCompatibleWritableRaster$I$I(w, h);
});

Clazz.newMeth(C$, 'getAlpha$I', function (pixel) {
if (this.nChannels < 4) return 255;
return p$1.rescale$I$I.apply(this, [pixel, this.max]);
});

Clazz.newMeth(C$, 'getBlue$I', function (pixel) {
if (this.nChannels == 1) return this.getRed$I(pixel);
return p$1.rescale$I$I.apply(this, [pixel, this.max]);
});

Clazz.newMeth(C$, 'getGreen$I', function (pixel) {
if (this.nChannels == 1) return this.getRed$I(pixel);
return p$1.rescale$I$I.apply(this, [pixel, this.max]);
});

Clazz.newMeth(C$, 'getRed$I', function (pixel) {
return p$1.rescale$I$I.apply(this, [pixel, this.max]);
});

Clazz.newMeth(C$, 'getAlpha$O', function (data) {
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {
var b=data;
if (b.length == 1) return this.getAlpha$I(b[0]);
return p$1.rescale$I$I.apply(this, [b.length == 4 ? b[0] : this.max, this.max]);
} else if (Clazz.instanceOf(data, Clazz.array(Short.TYPE, -1))) {
var s=data;
if (s.length == 1) return this.getAlpha$I(s[0]);
return p$1.rescale$I$I.apply(this, [s.length == 4 ? s[0] : this.max, this.max]);
} else if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getAlpha$I(i[0]);
return p$1.rescale$I$I.apply(this, [i.length == 4 ? i[0] : this.max, this.max]);
}return 0;
});

Clazz.newMeth(C$, 'getRed$O', function (data) {
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {
var b=data;
if (b.length == 1) return this.getRed$I(b[0]);
return p$1.rescale$I.apply(this, [b.length != 4 ? ($b$[0] = b[0], $b$[0]) : ($b$[0] = b[1], $b$[0])]);
} else if (Clazz.instanceOf(data, Clazz.array(Short.TYPE, -1))) {
var s=data;
if (s.length == 1) return this.getRed$I(s[0]);
return p$1.rescale$I$I.apply(this, [s.length != 4 ? s[0] : s[1], this.max]);
} else if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getRed$I(i[0]);
return p$1.rescale$I$I.apply(this, [i.length != 4 ? i[0] : i[1], this.max]);
}return 0;
});

Clazz.newMeth(C$, 'getGreen$O', function (data) {
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {
var b=data;
if (b.length == 1) return this.getGreen$I(b[0]);
return p$1.rescale$I.apply(this, [b.length != 4 ? ($b$[0] = b[1], $b$[0]) : ($b$[0] = b[2], $b$[0])]);
} else if (Clazz.instanceOf(data, Clazz.array(Short.TYPE, -1))) {
var s=data;
if (s.length == 1) return this.getGreen$I(s[0]);
return p$1.rescale$I$I.apply(this, [s.length != 4 ? s[1] : s[2], this.max]);
} else if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getGreen$I(i[0]);
return p$1.rescale$I$I.apply(this, [i.length != 4 ? i[1] : i[2], this.max]);
}return 0;
});

Clazz.newMeth(C$, 'getBlue$O', function (data) {
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {
var b=data;
if (b.length == 1) return this.getBlue$I(b[0]);
return p$1.rescale$I.apply(this, [b.length > 2 ? ($b$[0] = b[b.length - 1], $b$[0]) : ($b$[0] = 0, $b$[0])]);
} else if (Clazz.instanceOf(data, Clazz.array(Short.TYPE, -1))) {
var s=data;
if (s.length == 1) return this.getBlue$I(s[0]);
return p$1.rescale$I$I.apply(this, [s.length > 2 ? s[s.length - 1] : ($s$[0] = 0, $s$[0]), this.max]);
} else if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getBlue$I(i[0]);
return p$1.rescale$I$I.apply(this, [i.length > 2 ? i[i.length - 1] : 0, this.max]);
}return 0;
});

Clazz.newMeth(C$, 'rescale$I$I', function (value, max) {
var v=value / max;
v *= 255;
return p$1.rescale$I.apply(this, [(v|0)]);
}, p$1);

Clazz.newMeth(C$, 'rescale$I', function (value) {
if (value < 128) {
value+=128;
} else {
value-=128;
}return value;
}, p$1);

Clazz.newMeth(C$, 'makeBitArray$I$I', function (nChannels, nBits) {
var bits=Clazz.array(Integer.TYPE, [nChannels]);
for (var i=0; i < bits.length; i++) {
bits[i]=nBits;
}
return bits;
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
