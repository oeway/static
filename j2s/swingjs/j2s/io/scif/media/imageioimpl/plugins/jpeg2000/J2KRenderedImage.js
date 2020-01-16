(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.J2KReadState','io.scif.media.imageioimpl.plugins.jpeg2000.I18N','java.awt.image.Raster','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KRenderedImage", null, 'io.scif.media.imageioimpl.common.SimpleRenderedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['currentTile','java.awt.image.Raster','currentTileGrid','java.awt.Point','readState','io.scif.media.imageioimpl.plugins.jpeg2000.J2KReadState']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader', function (iis, param, metadata, reader) {
C$.c$$io_scif_media_imageioimpl_plugins_jpeg2000_J2KReadState.apply(this, [Clazz.new_($I$(1,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[iis, param, metadata, reader])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader', function (iis, param, reader) {
C$.c$$io_scif_media_imageioimpl_plugins_jpeg2000_J2KReadState.apply(this, [Clazz.new_($I$(1,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[iis, param, reader])]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_media_imageioimpl_plugins_jpeg2000_J2KReadState', function (readState) {
Clazz.super_(C$, this);
this.readState=readState;
var hd=readState.getHeader$();
var destinationRegion=readState.getDestinationRegion$();
this.width=destinationRegion.width;
this.height=destinationRegion.height;
this.minX=destinationRegion.x;
this.minY=destinationRegion.y;
var tile0Rect=readState.getTile0Rect$();
this.tileWidth=tile0Rect.width;
this.tileHeight=tile0Rect.height;
this.tileGridXOffset=tile0Rect.x;
this.tileGridYOffset=tile0Rect.y;
this.sampleModel=readState.getSampleModel$();
this.colorModel=readState.getColorModel$();
}, 1);

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
if (this.currentTile != null  && this.currentTileGrid.x == tileX  && this.currentTileGrid.y == tileY ) return this.currentTile;
if (tileX >= this.getNumXTiles$() || tileY >= this.getNumYTiles$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("J2KReadState1")]);
try {
var x=this.tileXToX$I(tileX);
var y=this.tileYToY$I(tileY);
this.currentTile=$I$(3).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel, Clazz.new_($I$(4,1).c$$I$I,[x, y]));
this.currentTile=this.readState.getTile$I$I$java_awt_image_WritableRaster(tileX, tileY, this.currentTile);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
if (this.currentTileGrid == null ) this.currentTileGrid=Clazz.new_($I$(4,1).c$$I$I,[tileX, tileY]);
 else {
this.currentTileGrid.x=tileX;
this.currentTileGrid.y=tileY;
}return this.currentTile;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
