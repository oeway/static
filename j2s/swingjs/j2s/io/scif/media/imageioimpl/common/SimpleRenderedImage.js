(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),I$=[[0,'java.util.Vector','java.util.Hashtable','java.awt.Rectangle','java.awt.Image','io.scif.media.imageioimpl.common.I18N','java.awt.image.Raster','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleRenderedImage", null, null, 'java.awt.image.RenderedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tileGridXOffset=0;
this.tileGridYOffset=0;
this.sources=Clazz.new_($I$(1,1));
this.properties=Clazz.new_($I$(2,1));
}, 1);

C$.$fields$=[['I',['minX','minY','width','height','tileWidth','tileHeight','tileGridXOffset','tileGridYOffset'],'O',['sampleModel','java.awt.image.SampleModel','colorModel','java.awt.image.ColorModel','sources','java.util.Vector','properties','java.util.Hashtable']]]

Clazz.newMeth(C$, 'getMinX$', function () {
return this.minX;
});

Clazz.newMeth(C$, 'getMaxX$', function () {
return this.getMinX$() + this.getWidth$();
});

Clazz.newMeth(C$, 'getMinY$', function () {
return this.minY;
});

Clazz.newMeth(C$, 'getMaxY$', function () {
return this.getMinY$() + this.getHeight$();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getBounds$', function () {
return Clazz.new_($I$(3,1).c$$I$I$I$I,[this.getMinX$(), this.getMinY$(), this.getWidth$(), this.getHeight$()]);
});

Clazz.newMeth(C$, 'getTileWidth$', function () {
return this.tileWidth;
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
return this.tileHeight;
});

Clazz.newMeth(C$, 'getTileGridXOffset$', function () {
return this.tileGridXOffset;
});

Clazz.newMeth(C$, 'getTileGridYOffset$', function () {
return this.tileGridYOffset;
});

Clazz.newMeth(C$, 'getMinTileX$', function () {
return this.XToTileX$I(this.getMinX$());
});

Clazz.newMeth(C$, 'getMaxTileX$', function () {
return this.XToTileX$I(this.getMaxX$() - 1);
});

Clazz.newMeth(C$, 'getNumXTiles$', function () {
return this.getMaxTileX$() - this.getMinTileX$() + 1;
});

Clazz.newMeth(C$, 'getMinTileY$', function () {
return this.YToTileY$I(this.getMinY$());
});

Clazz.newMeth(C$, 'getMaxTileY$', function () {
return this.YToTileY$I(this.getMaxY$() - 1);
});

Clazz.newMeth(C$, 'getNumYTiles$', function () {
return this.getMaxTileY$() - this.getMinTileY$() + 1;
});

Clazz.newMeth(C$, 'getSampleModel$', function () {
return this.sampleModel;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return this.colorModel;
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
name=name.toLowerCase$();
var value=this.properties.get$O(name);
return value != null  ? value : $I$(4).UndefinedProperty;
});

Clazz.newMeth(C$, 'getPropertyNames$', function () {
var names=null;
if (this.properties.size$() > 0) {
names=Clazz.array(String, [this.properties.size$()]);
var index=0;
var e=this.properties.keys$();
while (e.hasMoreElements$()){
var name=e.nextElement$();
names[index++]=name;
}
}return names;
});

Clazz.newMeth(C$, 'getPropertyNames$S', function (prefix) {
var propertyNames=this.getPropertyNames$();
if (propertyNames == null ) {
return null;
}prefix=prefix.toLowerCase$();
var names=Clazz.new_($I$(1,1));
for (var i=0; i < propertyNames.length; i++) {
if (propertyNames[i].startsWith$S(prefix)) {
names.addElement$TE(propertyNames[i]);
}}
if (names.size$() == 0) {
return null;
}var prefixNames=Clazz.array(String, [names.size$()]);
var count=0;
for (var it=names.iterator$(); it.hasNext$(); ) {
prefixNames[count++]=it.next$();
}
return prefixNames;
});

Clazz.newMeth(C$, 'XToTileX$I$I$I', function (x, tileGridXOffset, tileWidth) {
x-=tileGridXOffset;
if (x < 0) {
x+=1 - tileWidth;
}return (x/tileWidth|0);
}, 1);

Clazz.newMeth(C$, 'YToTileY$I$I$I', function (y, tileGridYOffset, tileHeight) {
y-=tileGridYOffset;
if (y < 0) {
y+=1 - tileHeight;
}return (y/tileHeight|0);
}, 1);

Clazz.newMeth(C$, 'XToTileX$I', function (x) {
return C$.XToTileX$I$I$I(x, this.getTileGridXOffset$(), this.getTileWidth$());
});

Clazz.newMeth(C$, 'YToTileY$I', function (y) {
return C$.YToTileY$I$I$I(y, this.getTileGridYOffset$(), this.getTileHeight$());
});

Clazz.newMeth(C$, 'tileXToX$I$I$I', function (tx, tileGridXOffset, tileWidth) {
return tx * tileWidth + tileGridXOffset;
}, 1);

Clazz.newMeth(C$, 'tileYToY$I$I$I', function (ty, tileGridYOffset, tileHeight) {
return ty * tileHeight + tileGridYOffset;
}, 1);

Clazz.newMeth(C$, 'tileXToX$I', function (tx) {
return tx * this.tileWidth + this.tileGridXOffset;
});

Clazz.newMeth(C$, 'tileYToY$I', function (ty) {
return ty * this.tileHeight + this.tileGridYOffset;
});

Clazz.newMeth(C$, 'getSources$', function () {
return null;
});

Clazz.newMeth(C$, 'getData$', function () {
var rect=Clazz.new_($I$(3,1).c$$I$I$I$I,[this.getMinX$(), this.getMinY$(), this.getWidth$(), this.getHeight$()]);
return this.getData$java_awt_Rectangle(rect);
});

Clazz.newMeth(C$, 'getData$java_awt_Rectangle', function (bounds) {
var imageBounds=this.getBounds$();
if (bounds == null ) {
bounds=imageBounds;
} else if (!bounds.intersects$java_awt_Rectangle(imageBounds)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(5).getString$S("SimpleRenderedImage0")]);
}var startX=this.XToTileX$I(bounds.x);
var startY=this.YToTileY$I(bounds.y);
var endX=this.XToTileX$I(bounds.x + bounds.width - 1);
var endY=this.YToTileY$I(bounds.y + bounds.height - 1);
if ((startX == endX) && (startY == endY) ) {
var tile=this.getTile$I$I(startX, startY);
return tile.createChild$I$I$I$I$I$I$IA(bounds.x, bounds.y, bounds.width, bounds.height, bounds.x, bounds.y, null);
} else {
if (!imageBounds.contains$java_awt_Rectangle(bounds)) {
var xsect=bounds.intersection$java_awt_Rectangle(imageBounds);
startX=this.XToTileX$I(xsect.x);
startY=this.YToTileY$I(xsect.y);
endX=this.XToTileX$I(xsect.x + xsect.width - 1);
endY=this.YToTileY$I(xsect.y + xsect.height - 1);
}var sm=this.sampleModel.createCompatibleSampleModel$I$I(bounds.width, bounds.height);
var dest=$I$(6).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(sm, bounds.getLocation$());
for (var j=startY; j <= endY; j++) {
for (var i=startX; i <= endX; i++) {
var tile=this.getTile$I$I(i, j);
var tileRect=tile.getBounds$();
var intersectRect=bounds.intersection$java_awt_Rectangle(tile.getBounds$());
var liveRaster=tile.createChild$I$I$I$I$I$I$IA(intersectRect.x, intersectRect.y, intersectRect.width, intersectRect.height, intersectRect.x, intersectRect.y, null);
dest.setRect$java_awt_image_Raster(liveRaster);
}
}
return dest;
}});

Clazz.newMeth(C$, 'copyData$java_awt_image_WritableRaster', function (dest) {
var imageBounds=this.getBounds$();
var bounds;
if (dest == null ) {
bounds=imageBounds;
var p=Clazz.new_($I$(7,1).c$$I$I,[this.minX, this.minY]);
var sm=this.sampleModel.createCompatibleSampleModel$I$I(this.width, this.height);
dest=$I$(6).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(sm, p);
} else {
bounds=dest.getBounds$();
}var xsect=imageBounds.contains$java_awt_Rectangle(bounds) ? bounds : bounds.intersection$java_awt_Rectangle(imageBounds);
var startX=this.XToTileX$I(xsect.x);
var startY=this.YToTileY$I(xsect.y);
var endX=this.XToTileX$I(xsect.x + xsect.width - 1);
var endY=this.YToTileY$I(xsect.y + xsect.height - 1);
for (var j=startY; j <= endY; j++) {
for (var i=startX; i <= endX; i++) {
var tile=this.getTile$I$I(i, j);
var tileRect=tile.getBounds$();
var intersectRect=bounds.intersection$java_awt_Rectangle(tile.getBounds$());
var liveRaster=tile.createChild$I$I$I$I$I$I$IA(intersectRect.x, intersectRect.y, intersectRect.width, intersectRect.height, intersectRect.x, intersectRect.y, null);
dest.setRect$java_awt_image_Raster(liveRaster);
}
}
return dest;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
