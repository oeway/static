(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.image.DirectColorModel','java.awt.image.ColorModel','java.awt.image.Raster','java.util.Hashtable','sun.awt.image.OffScreenImageSource','java.awt.Image','java.awt.GraphicsEnvironment','java.awt.Point','java.awt.Rectangle','swingjs.api.js.DOMNode','swingjs.JSGraphics2D']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BufferedImage", null, 'java.awt.Image', ['java.awt.image.RenderedImage', 'java.awt.Transparency']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageType=0;
}, 1);

C$.$fields$=[['Z',['isAlphaPremultiplied','秘havePix'],'I',['imageType','width','height'],'O',['colorModel','java.awt.image.ColorModel','raster','java.awt.image.WritableRaster','osis','sun.awt.image.OffScreenImageSource','properties','java.util.Hashtable','秘pix','int[]','秘imgNode','java.lang.Object','+秘canvas','秘component','java.awt.Component','秘pixSaved','int[]','秘g','swingjs.JSGraphics2D']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (width, height, imageType) {
Clazz.super_(C$, this);
this.width=width;
this.height=height;
switch (imageType) {
case 1:
{
this.colorModel=Clazz.new_($I$(1,1).c$$I$I$I$I$I,[24, 16711680, 65280, 255, 0]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.setImage$java_awt_image_BufferedImage(this);
this.秘pix=(this.raster.getDataBuffer$()).data;
}break;
case 3:
case 2:
{
this.colorModel=$I$(2).getRGBdefault$();
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.setImage$java_awt_image_BufferedImage(this);
this.秘pix=(this.raster.getDataBuffer$()).data;
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown image type " + imageType]);
}
this.imageType=imageType;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$java_awt_image_IndexColorModel', function (width, height, imageType, cm) {
Clazz.super_(C$, this);
if (cm.hasAlpha$() && cm.isAlphaPremultiplied$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This image types do not have premultiplied alpha."]);
}this.width=width;
this.height=height;
switch (imageType) {
case 12:
var bits;
var mapSize=cm.getMapSize$();
if (mapSize <= 2) {
bits=1;
} else if (mapSize <= 4) {
bits=2;
} else if (mapSize <= 16) {
bits=4;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Color map for TYPE_BYTE_BINARY must have no more than 16 entries"]);
}this.raster=$I$(3).createPackedRaster$I$I$I$I$I$java_awt_Point(0, width, height, 1, bits, null);
break;
case 13:
this.raster=$I$(3).createInterleavedRaster$I$I$I$I$java_awt_Point(0, width, height, 1, null);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid image type (" + imageType + ").  Image type must" + " be either TYPE_BYTE_BINARY or " + " TYPE_BYTE_INDEXED" ]);
}
if (!cm.isCompatibleRaster$java_awt_image_Raster(this.raster)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible image type and IndexColorModel"]);
}this.colorModel=cm;
this.imageType=imageType;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable', function (cm, raster, isRasterPremultiplied, properties) {
Clazz.super_(C$, this);
if ((raster.minX != 0) || (raster.minY != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster " + raster + " has minX or minY not equal to zero: " + raster.minX + " " + raster.minY ]);
}this.colorModel=cm;
this.raster=raster;
this.width=raster.getWidth$();
this.height=raster.getHeight$();
raster.setImage$java_awt_image_BufferedImage(this);
this.秘pix=(raster.getDataBuffer$()).data;
this.properties=properties;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this.imageType;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return this.colorModel;
});

Clazz.newMeth(C$, 'getRaster$', function () {
return this.raster;
});

Clazz.newMeth(C$, 'getAlphaRaster$', function () {
return this.colorModel.getAlphaRaster$java_awt_image_WritableRaster(this.raster);
});

Clazz.newMeth(C$, 'getRGB$I$I', function (x, y) {
this.checkHavePixels$();
if (this.秘pix == null ) this.秘pix=this.秘pixSaved;
return this.秘pix[y * this.width + x];
});

Clazz.newMeth(C$, 'getRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
this.checkHavePixels$();
if (this.秘pix == null ) this.秘pix=this.秘pixSaved;
return this.getRangeRGB$I$I$I$I$IA$I$I(startX, startY, w, h, rgbArray, offset, scansize);
});

Clazz.newMeth(C$, 'checkHavePixels$', function () {
if ((this.秘imgNode != null  || this.秘g != null  ) && !this.秘havePix ) {
this.setPixels$();
return true;
}return false;
});

Clazz.newMeth(C$, 'getRangeRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
if (this.秘pix == null  && this.秘pixSaved == null  ) this.checkHavePixels$();
var pixels=(this.秘pix == null  ? this.秘pixSaved : this.秘pix);
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var off=yoff, x=startX; x < startX + w; x++) rgbArray[off++]=pixels[y * this.width + x];


return rgbArray;
});

Clazz.newMeth(C$, 'setRGB$I$I$I', function (x, y, rgb) {
if (this.checkHavePixels$()) this.秘imgNode=null;
var pixels=(this.秘pix == null  ? this.秘pixSaved : this.秘pix);
pixels[y * this.width + x]=rgb;
});

Clazz.newMeth(C$, 'setRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
if (this.checkHavePixels$()) this.秘imgNode=null;
var pixels=(this.秘pix == null  ? this.秘pixSaved : this.秘pix);
var width=this.width;
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var x=startX, off=yoff; x < startX + w; x++) pixels[y * width + x]=rgbArray[off++];


this.秘pix=this.秘pixSaved=pixels;
this.秘g=null;
this.getImageGraphic$();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getWidth$java_awt_image_ImageObserver', function (observer) {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$java_awt_image_ImageObserver', function (observer) {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getSource$', function () {
if (this.osis == null ) {
if (this.properties == null ) {
this.properties=Clazz.new_($I$(4,1));
}this.osis=Clazz.new_($I$(5,1).c$$java_awt_image_BufferedImage$java_util_Hashtable,[this, this.properties]);
}return this.osis;
});

Clazz.newMeth(C$, 'getProperty$S$java_awt_image_ImageObserver', function (name, observer) {
return this.getProperty$S(name);
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null property name is not allowed"]);
}if (this.properties == null ) {
return $I$(6).UndefinedProperty;
}var o=this.properties.get$O(name);
if (o == null ) {
o=$I$(6).UndefinedProperty;
}return o;
});

Clazz.newMeth(C$, 'getGraphics$', function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'createGraphics$', function () {
var env=$I$(7).getLocalGraphicsEnvironment$();
return env.createGraphics$java_awt_image_BufferedImage(this);
});

Clazz.newMeth(C$, 'getSubimage$I$I$I$I', function (x, y, w, h) {
return Clazz.new_(C$.c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster.createWritableChild$I$I$I$I$I$I$IA(x, y, w, h, 0, 0, null), this.colorModel.isAlphaPremultiplied$(), this.properties]);
});

Clazz.newMeth(C$, 'isAlphaPremultiplied$', function () {
return false;
});

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize("BufferedImage@" + Integer.toHexString$I(this.hashCode$()) + ": type = " + this.imageType + " " + this.colorModel.toString() + " " + this.raster.toString() );
});

Clazz.newMeth(C$, 'getSources$', function () {
return null;
});

Clazz.newMeth(C$, 'getPropertyNames$', function () {
return null;
});

Clazz.newMeth(C$, 'getMinX$', function () {
return this.raster.getMinX$();
});

Clazz.newMeth(C$, 'getMinY$', function () {
return this.raster.getMinY$();
});

Clazz.newMeth(C$, 'getSampleModel$', function () {
return this.raster.getSampleModel$();
});

Clazz.newMeth(C$, 'getNumXTiles$', function () {
return 1;
});

Clazz.newMeth(C$, 'getNumYTiles$', function () {
return 1;
});

Clazz.newMeth(C$, 'getMinTileX$', function () {
return 0;
});

Clazz.newMeth(C$, 'getMinTileY$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTileWidth$', function () {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getTileGridXOffset$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTileGridYOffset$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
return this.raster;
});

Clazz.newMeth(C$, 'getData$', function () {
var width=this.raster.getWidth$();
var height=this.raster.getHeight$();
var startX=this.raster.getMinX$();
var startY=this.raster.getMinY$();
var wr=$I$(3).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.raster.getSampleModel$(), Clazz.new_($I$(8,1).c$$I$I,[this.raster.getSampleModelTranslateX$(), this.raster.getSampleModelTranslateY$()]));
var tdata=null;
this.checkHavePixels$();
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
wr.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
return wr;
});

Clazz.newMeth(C$, 'getData$java_awt_Rectangle', function (rect) {
var sm=this.raster.getSampleModel$();
var nsm=sm.createCompatibleSampleModel$I$I(rect.width, rect.height);
var wr=$I$(3).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(nsm, rect.getLocation$());
var width=rect.width;
var height=rect.height;
var startX=rect.x;
var startY=rect.y;
var tdata=null;
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
wr.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
return wr;
});

Clazz.newMeth(C$, 'copyData$java_awt_image_WritableRaster', function (outRaster) {
if (outRaster == null ) {
return this.getData$();
}var width=outRaster.getWidth$();
var height=outRaster.getHeight$();
var startX=outRaster.getMinX$();
var startY=outRaster.getMinY$();
var tdata=null;
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
outRaster.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
return outRaster;
});

Clazz.newMeth(C$, 'setData$java_awt_image_Raster', function (r) {
var width=r.getWidth$();
var height=r.getHeight$();
var startX=r.getMinX$();
var startY=r.getMinY$();
var tdata=null;
var rclip=Clazz.new_($I$(9,1).c$$I$I$I$I,[startX, startY, width, height]);
var bclip=Clazz.new_($I$(9,1).c$$I$I$I$I,[0, 0, this.raster.width, this.raster.height]);
var intersect=rclip.intersection$java_awt_Rectangle(bclip);
if (intersect.isEmpty$()) {
return;
}width=intersect.width;
height=intersect.height;
startX=intersect.x;
startY=intersect.y;
for (var i=startY; i < startY + height; i++) {
tdata=r.getPixels$I$I$I$I$IA(startX, i, width, 1, tdata);
this.raster.setPixels$I$I$I$I$IA(startX, i, width, 1, tdata);
}
});

Clazz.newMeth(C$, 'getWritableTileIndices$', function () {
var p=Clazz.array($I$(8), [1]);
p[0]=Clazz.new_($I$(8,1).c$$I$I,[0, 0]);
return p;
});

Clazz.newMeth(C$, 'hasTileWriters$', function () {
return true;
});

Clazz.newMeth(C$, 'getWritableTile$I$I', function (tileX, tileY) {
return this.raster;
});

Clazz.newMeth(C$, 'releaseWritableTile$I$I', function (tileX, tileY) {
});

Clazz.newMeth(C$, 'getTransparency$', function () {
return this.colorModel.getTransparency$();
});

Clazz.newMeth(C$, 'setImageFromHTML5Canvas$swingjs_JSGraphics2D', function (g) {
this.秘g=g;
this.width=this.raster.width;
this.height=this.raster.height;
this.setPixels$();
});

Clazz.newMeth(C$, 'setPixels$', function () {
var canvas=(this.秘g == null  ? null : this.秘g.canvas ||null);
if (canvas == null ) canvas=$I$(10).createElement("canvas", null);
var w=this.width;
var h=this.height;
var data=null;
{
if (!this.秘g) { canvas.width = w;
canvas.height = h;
} var ctx = canvas.getContext("2d");
if (!this.秘g) ctx.drawImage(this.秘imgNode, 0, 0, w, h);
data = ctx.getImageData(0, 0, w, h).data;
}
var buffer=this.raster.getDataBuffer$();
this.toIntARGB$IA$IA(data, this.秘pix=buffer.data);
this.秘imgNode=canvas;
this.秘havePix=true;
});

Clazz.newMeth(C$, 'flush$', function () {
this.秘pix=null;
this.秘havePix=false;
});

Clazz.newMeth(C$, 'toIntARGB$IA$IA', function (imgData, iData) {
var n=(imgData.length/4|0);
var a;
for (var i=0, j=0; i < n; ) {
var argb=(imgData[j++] << 16) | (imgData[j++] << 8) | imgData[j++] | -16777216 ;
iData[i++]=(imgData[j++] == 0 ? 0 : argb);
}
});

Clazz.newMeth(C$, 'getImageGraphic$', function () {
if (this.秘g == null ) {
var canvas=$I$(10).createElement("canvas", "img" + System.currentTimeMillis$());
var w=this.getWidth$();
var h=this.getHeight$();

canvas.width = w;
canvas.height = h;
this.秘canvas=canvas;
var pix=this.秘pix;
this.秘g=Clazz.new_($I$(11,1).c$$O,[canvas]);
if (pix != null ) this.秘g.drawImagePriv$java_awt_Image$I$I$java_awt_image_ImageObserver(this, 0, 0, null);

if (pix) pix.img = this;
this.flush$();
}var g2d=this.秘g;
if (this.秘component != null ) {
g2d.setFont$java_awt_Font(this.秘component.getFont$());
g2d.setBackground$java_awt_Color(this.秘component.getBackground$());
g2d.setColor$java_awt_Color(this.秘component.getForeground$());
}return g2d;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
