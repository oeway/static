(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'java.awt.image.Raster','org.scijava.util.Bytes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Index16ColorModel", null, 'java.awt.image.ColorModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['littleEndian'],'O',['redShort','short[]','+greenShort','+blueShort','+alphaShort']]]

Clazz.newMeth(C$, 'c$$I$I$HAA$Z', function (bits, size, table, littleEndian) {
;C$.superclazz.c$$I.apply(this,[bits]);C$.$init$.apply(this);
this.littleEndian=littleEndian;
if (table == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["LUT cannot be null"]);
for (var i=0; i < table.length; i++) {
if (table[i].length < size) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["LUT " + i + " too small" ]);
}}
if (table.length > 0) this.redShort=table[0];
if (table.length > 1) this.greenShort=table[1];
if (table.length > 2) this.blueShort=table[2];
if (table.length > 3) this.alphaShort=table[3];
}, 1);

Clazz.newMeth(C$, 'getReds$', function () {
return this.redShort;
});

Clazz.newMeth(C$, 'getGreens$', function () {
return this.greenShort;
});

Clazz.newMeth(C$, 'getBlues$', function () {
return this.blueShort;
});

Clazz.newMeth(C$, 'getAlphas$', function () {
return this.alphaShort;
});

Clazz.newMeth(C$, 'getDataElements$I$O', function (rgb, pixel) {
var red=(rgb >> 16) & 255;
var green=(rgb >> 8) & 255;
var blue=rgb & 255;
var p=pixel == null  ? Clazz.array(Short.TYPE, [3]) : pixel;
p[0]=(red|0);
p[1]=(green|0);
p[2]=(blue|0);
return p;
});

Clazz.newMeth(C$, 'isCompatibleRaster$java_awt_image_Raster', function (raster) {
return raster.getNumBands$() == 1;
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I', function (w, h) {
return $I$(1).createInterleavedRaster$I$I$I$I$java_awt_Point(1, w, h, 1, null);
});

Clazz.newMeth(C$, 'getAlpha$I', function (pixel) {
if (this.alphaShort != null ) return this.alphaShort[pixel] & 65535;
return 65535;
});

Clazz.newMeth(C$, 'getBlue$I', function (pixel) {
if (this.blueShort == null ) return 0;
var blue=this.blueShort[pixel] & 65535;
return this.littleEndian ? $I$(2).swap$I(blue) : blue;
});

Clazz.newMeth(C$, 'getGreen$I', function (pixel) {
if (this.greenShort == null ) return 0;
var green=this.greenShort[pixel] & 65535;
return this.littleEndian ? $I$(2).swap$I(green) : green;
});

Clazz.newMeth(C$, 'getRed$I', function (pixel) {
if (this.redShort == null ) return 0;
var red=this.redShort[pixel] & 65535;
return this.littleEndian ? $I$(2).swap$I(red) : red;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
