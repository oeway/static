(function(){var P$=Clazz.newPackage("io.scif.gui"),p$1={},I$=[[0,'io.scif.gui.AWTImageTools','java.awt.image.ComponentColorModel','java.awt.image.ComponentSampleModel','java.awt.image.DataBufferInt','java.awt.image.Raster']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnsignedIntColorModel", null, 'java.awt.image.ColorModel');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.uia=new Uint32Array(1) ||null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['nChannels'],'O',['helper','java.awt.image.ComponentColorModel']]
,['O',['uia','long[]']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (pixelBits, dataType, nChannels) {
;C$.superclazz.c$$I$IA$java_awt_color_ColorSpace$Z$Z$I$I.apply(this,[pixelBits, C$.makeBitArray$I$I(nChannels, pixelBits), $I$(1).makeColorSpace$I(nChannels), nChannels == 4, false, 3, dataType]);C$.$init$.apply(this);
this.helper=Clazz.new_($I$(2,1).c$$java_awt_color_ColorSpace$Z$Z$I$I,[$I$(1).makeColorSpace$I(nChannels), nChannels == 4, false, 3, dataType]);
this.nChannels=nChannels;
}, 1);

Clazz.newMeth(C$, 'getDataElements$I$O', function (rgb, pixel) {
return this.helper.getDataElements$I$O(rgb, pixel);
});

Clazz.newMeth(C$, 'isCompatibleRaster$java_awt_image_Raster', function (raster) {
return raster.getNumBands$() == this.getNumComponents$() && raster.getTransferType$() == this.getTransferType$() ;
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I', function (w, h) {
var bandOffsets=Clazz.array(Integer.TYPE, [this.nChannels]);
for (var i=0; i < this.nChannels; i++) bandOffsets[i]=i;

var m=Clazz.new_($I$(3,1).c$$I$I$I$I$I$IA,[3, w, h, this.nChannels, w * this.nChannels, bandOffsets]);
var db=Clazz.new_($I$(4,1).c$$I$I,[w * h, this.nChannels]);
return $I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(m, db, null);
});

Clazz.newMeth(C$, 'getAlpha$I', function (pixel) {
return 2147483647;
});

Clazz.newMeth(C$, 'getBlue$I', function (pixel) {
return p$1.getComponent$I.apply(this, [pixel]);
});

Clazz.newMeth(C$, 'getGreen$I', function (pixel) {
return p$1.getComponent$I.apply(this, [pixel]);
});

Clazz.newMeth(C$, 'getRed$I', function (pixel) {
return p$1.getComponent$I.apply(this, [pixel]);
});

Clazz.newMeth(C$, 'getAlpha$O', function (data) {
var max=2147483647;
if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getAlpha$I(i[0]);
return this.getAlpha$I(i.length == 4 ? i[0] : 2147483647);
}return 2147483647;
});

Clazz.newMeth(C$, 'getRed$O', function (data) {
var max=2147483647;
if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getRed$I(i[0]);
return this.getRed$I(i.length != 4 ? i[0] : i[1]);
}return 2147483647;
});

Clazz.newMeth(C$, 'getGreen$O', function (data) {
var max=2147483647;
if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getGreen$I(i[0]);
return this.getGreen$I(i.length != 4 ? i[1] : i[2]);
}return 2147483647;
});

Clazz.newMeth(C$, 'getBlue$O', function (data) {
var max=2147483647;
if (Clazz.instanceOf(data, Clazz.array(Integer.TYPE, -1))) {
var i=data;
if (i.length == 1) return this.getBlue$I(i[0]);
return this.getBlue$I(i[i.length - 1]);
}return 2147483647;
});

Clazz.newMeth(C$, 'getComponent$I', function (pixel) {
var v=C$.uint$I(pixel);
var f=v * 1.0 / 4294967295;
f *= 255;
return (f|0);
}, p$1);

Clazz.newMeth(C$, 'uint$I', function (i) {
{
return (uia[0] = i, uia[0]);
}
}, 1);

Clazz.newMeth(C$, 'makeBitArray$I$I', function (nChannels, nBits) {
var bits=Clazz.array(Integer.TYPE, [nChannels]);
for (var i=0; i < bits.length; i++) {
bits[i]=nBits;
}
return bits;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
