(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},I$=[[0,'java.awt.geom.GeneralPath','java.awt.image.IndexColorModel','java.awt.image.MultiPixelPackedSampleModel','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.image.BufferedImage','java.awt.geom.AffineTransform','java.awt.Color','java.awt.BasicStroke']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeneralPathRegionOfInterest", null, 'net.imglib2.roi.AbstractIterableRegionOfInterest', 'net.imglib2.roi.GeneralPathSegmentHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index'],'O',['path','java.awt.geom.GeneralPath','stripes','long[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[2]);C$.$init$.apply(this);
this.path=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'moveTo$D$D', function (x, y) {
this.path.moveTo$D$D(x, y);
});

Clazz.newMeth(C$, 'lineTo$D$D', function (x, y) {
this.path.lineTo$D$D(x, y);
});

Clazz.newMeth(C$, 'quadTo$D$D$D$D', function (x1, y1, x, y) {
this.path.quadTo$D$D$D$D(x1, y1, x, y);
});

Clazz.newMeth(C$, 'cubicTo$D$D$D$D$D$D', function (x1, y1, x2, y2, x, y) {
this.path.curveTo$D$D$D$D$D$D(x1, y1, x2, y2, x, y);
});

Clazz.newMeth(C$, 'close$', function () {
this.path.closePath$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.path.reset$();
});

Clazz.newMeth(C$, 'setGeneralPath$java_awt_geom_GeneralPath', function (path) {
this.path=path;
this.stripes=null;
});

Clazz.newMeth(C$, 'getGeneralPath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'iteratePath$net_imglib2_roi_GeneralPathSegmentHandler', function (handler) {
var coords=Clazz.array(Double.TYPE, [6]);
for (var iterator=this.path.getPathIterator$java_awt_geom_AffineTransform(null); !iterator.isDone$(); iterator.next$()) {
var type=iterator.currentSegment$DA(coords);
switch (type) {
case 0:
handler.moveTo$D$D(coords[0], coords[1]);
break;
case 1:
handler.lineTo$D$D(coords[0], coords[1]);
break;
case 2:
handler.quadTo$D$D$D$D(coords[0], coords[1], coords[2], coords[3]);
break;
case 3:
handler.cubicTo$D$D$D$D$D$D(coords[0], coords[1], coords[2], coords[3], coords[4], coords[5]);
break;
case 4:
handler.close$();
break;
default:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unsupported segment type: " + type]);
}
}
});

Clazz.newMeth(C$, 'nextRaster$JA$JA', function (position, end) {
p$1.ensureStripes.apply(this, []);
if (this.index >= this.stripes.length) {
this.index=0;
return false;
}position[0]=this.stripes[this.index];
end[0]=this.stripes[this.index + 1];
position[1]=end[1]=this.stripes[this.index + 2];
this.index+=3;
return true;
});

Clazz.newMeth(C$, 'contains$DA', function (position) {
return this.path.contains$D$D(position[0], position[1]);
});

Clazz.newMeth(C$, 'ensureStripes', function () {
if (this.stripes != null ) return;
if (this.path.getPathIterator$java_awt_geom_AffineTransform(null).isDone$()) {
this.stripes=Clazz.array(Long.TYPE, [0]);
return;
}var bounds=this.path.getBounds2D$();
var left=(Math.floor(bounds.getMinX$())|0);
var top=(Math.floor(bounds.getMinY$())|0);
var width=((Math.ceil(bounds.getMaxX$()) - left)|0);
var height=((Math.ceil(bounds.getMaxY$()) - top)|0);
var pixels=Clazz.array(Byte.TYPE, [width * height]);
var colorModel=Clazz.new_($I$(2,1).c$$I$I$BA$BA$BA,[1, 2, Clazz.array(Byte.TYPE, -1, [0, 1]), Clazz.array(Byte.TYPE, -1, [0, 1]), Clazz.array(Byte.TYPE, -1, [0, 1])]);
var sampleModel=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, width, height, 8]);
var dataBuffer=Clazz.new_($I$(4,1).c$$BA$I,[pixels, width * height]);
var raster=$I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sampleModel, dataBuffer, null);
var image=Clazz.new_($I$(6,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, raster, false, null]);
var transformed=Clazz.new_($I$(1,1).c$$java_awt_Shape,[this.path]);
transformed.transform$java_awt_geom_AffineTransform($I$(7).getTranslateInstance$D$D(-bounds.getMinX$(), -bounds.getMinY$()));
var g2d=image.getGraphics$();
g2d.setColor$java_awt_Color($I$(8).WHITE);
g2d.setStroke$java_awt_Stroke(Clazz.new_($I$(9,1).c$$F,[0]));
g2d.fill$java_awt_Shape(transformed);
var strps=Clazz.array(Long.TYPE, [(3 * (width == 1 ? 2 : width) * height /2|0)]);
var i=0;
for (var y=0; y < height; y++) {
var start=-1;
for (var x=0; x < width; x++) {
var inside=pixels[x + width * y] != 0;
if (start < 0) {
if (inside) {
start=x;
strps[i]=x + left;
strps[i + 2]=y + top;
}} else if (!inside) {
start=-1;
strps[i + 1]=x + left;
i+=3;
}}
if (start >= 0) {
start=-1;
strps[i + 1]=width + left;
i+=3;
}}
this.stripes=Clazz.array(Long.TYPE, [i]);
System.arraycopy$O$I$O$I$I(strps, 0, this.stripes, 0, i);
this.index=0;
}, p$1);

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
if (d != 0 && d != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot move 2D ROI in dimension " + d]);
var transform=$I$(7).getTranslateInstance$D$D(d == 0 ? displacement : 0, d == 1 ? displacement : 0);
this.path.transform$java_awt_geom_AffineTransform(transform);
});

Clazz.newMeth(C$, 'move$DA', function (displacement) {
if (displacement.length != 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot move 2D ROI in " + displacement.length + " dimensions" ]);
var transform=$I$(7).getTranslateInstance$D$D(displacement[0], displacement[1]);
this.path.transform$java_awt_geom_AffineTransform(transform);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
