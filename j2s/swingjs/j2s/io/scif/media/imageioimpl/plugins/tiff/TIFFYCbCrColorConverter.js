(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIFFYCbCrColorConverter", null, 'io.scif.media.imageio.plugins.tiff.TIFFColorConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.LumaRed=0.299;
this.LumaGreen=0.587;
this.LumaBlue=0.114;
this.referenceBlackY=0.0;
this.referenceWhiteY=255.0;
this.referenceBlackCb=128.0;
this.referenceWhiteCb=255.0;
this.referenceBlackCr=128.0;
this.referenceWhiteCr=255.0;
this.codingRangeY=255.0;
this.codingRangeCbCr=127.0;
}, 1);

C$.$fields$=[['F',['LumaRed','LumaGreen','LumaBlue','referenceBlackY','referenceWhiteY','referenceBlackCb','referenceWhiteCb','referenceBlackCr','referenceWhiteCr','codingRangeY','codingRangeCbCr']]]

Clazz.newMeth(C$, 'c$$io_scif_media_imageioimpl_plugins_tiff_TIFFImageMetadata', function (metadata) {
Clazz.super_(C$, this);
var tmetadata=metadata;
var f=tmetadata.getTIFFField$I(529);
if (f != null  && f.getCount$() == 3 ) {
this.LumaRed=f.getAsFloat$I(0);
this.LumaGreen=f.getAsFloat$I(1);
this.LumaBlue=f.getAsFloat$I(2);
}f=tmetadata.getTIFFField$I(532);
if (f != null  && f.getCount$() == 6 ) {
this.referenceBlackY=f.getAsFloat$I(0);
this.referenceWhiteY=f.getAsFloat$I(1);
this.referenceBlackCb=f.getAsFloat$I(2);
this.referenceWhiteCb=f.getAsFloat$I(3);
this.referenceBlackCr=f.getAsFloat$I(4);
this.referenceWhiteCr=f.getAsFloat$I(5);
}}, 1);

Clazz.newMeth(C$, 'fromRGB$F$F$F$FA', function (r, g, b, result) {
var Y=(this.LumaRed * r + this.LumaGreen * g + this.LumaBlue * b);
var Cb=(b - Y) / (2 - 2 * this.LumaBlue);
var Cr=(r - Y) / (2 - 2 * this.LumaRed);
result[0]=Y * (this.referenceWhiteY - this.referenceBlackY) / this.codingRangeY + this.referenceBlackY;
result[1]=Cb * (this.referenceWhiteCb - this.referenceBlackCb) / this.codingRangeCbCr + this.referenceBlackCb;
result[2]=Cr * (this.referenceWhiteCr - this.referenceBlackCr) / this.codingRangeCbCr + this.referenceBlackCr;
});

Clazz.newMeth(C$, 'toRGB$F$F$F$FA', function (x0, x1, x2, rgb) {
var Y=(x0 - this.referenceBlackY) * this.codingRangeY / (this.referenceWhiteY - this.referenceBlackY);
var Cb=(x1 - this.referenceBlackCb) * this.codingRangeCbCr / (this.referenceWhiteCb - this.referenceBlackCb);
var Cr=(x2 - this.referenceBlackCr) * this.codingRangeCbCr / (this.referenceWhiteCr - this.referenceBlackCr);
rgb[0]=Cr * (2 - 2 * this.LumaRed) + Y;
rgb[2]=Cb * (2 - 2 * this.LumaBlue) + Y;
rgb[1]=(Y - this.LumaBlue * rgb[2] - this.LumaRed * rgb[0]) / this.LumaGreen;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
