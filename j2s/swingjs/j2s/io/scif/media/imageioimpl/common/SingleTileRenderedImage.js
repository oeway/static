(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SingleTileRenderedImage", null, 'io.scif.media.imageioimpl.common.SimpleRenderedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ras','java.awt.image.Raster']]]

Clazz.newMeth(C$, 'c$$java_awt_image_Raster$java_awt_image_ColorModel', function (ras, colorModel) {
Clazz.super_(C$, this);
this.ras=ras;
this.tileGridXOffset=this.minX=ras.getMinX$();
this.tileGridYOffset=this.minY=ras.getMinY$();
this.tileWidth=this.width=ras.getWidth$();
this.tileHeight=this.height=ras.getHeight$();
this.sampleModel=ras.getSampleModel$();
this.colorModel=colorModel;
}, 1);

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
if (tileX != 0 || tileY != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tileX != 0 || tileY != 0"]);
}return this.ras;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
