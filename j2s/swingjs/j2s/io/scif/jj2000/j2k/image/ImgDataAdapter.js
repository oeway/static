(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImgDataAdapter", null, null, 'io.scif.jj2000.j2k.image.ImgData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tIdx=0;
}, 1);

C$.$fields$=[['I',['tIdx'],'O',['imgdatasrc','io.scif.jj2000.j2k.image.ImgData']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_ImgData', function (src) {
;C$.$init$.apply(this);
this.imgdatasrc=src;
}, 1);

Clazz.newMeth(C$, 'getTileWidth$', function () {
return this.imgdatasrc.getTileWidth$();
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
return this.imgdatasrc.getTileHeight$();
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.imgdatasrc.getNomTileWidth$();
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.imgdatasrc.getNomTileHeight$();
});

Clazz.newMeth(C$, 'getImgWidth$', function () {
return this.imgdatasrc.getImgWidth$();
});

Clazz.newMeth(C$, 'getImgHeight$', function () {
return this.imgdatasrc.getImgHeight$();
});

Clazz.newMeth(C$, 'getNumComps$', function () {
return this.imgdatasrc.getNumComps$();
});

Clazz.newMeth(C$, 'getCompSubsX$I', function (c) {
return this.imgdatasrc.getCompSubsX$I(c);
});

Clazz.newMeth(C$, 'getCompSubsY$I', function (c) {
return this.imgdatasrc.getCompSubsY$I(c);
});

Clazz.newMeth(C$, 'getTileCompWidth$I$I', function (t, c) {
return this.imgdatasrc.getTileCompWidth$I$I(t, c);
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I', function (t, c) {
return this.imgdatasrc.getTileCompHeight$I$I(t, c);
});

Clazz.newMeth(C$, 'getCompImgWidth$I', function (c) {
return this.imgdatasrc.getCompImgWidth$I(c);
});

Clazz.newMeth(C$, 'getCompImgHeight$I', function (c) {
return this.imgdatasrc.getCompImgHeight$I(c);
});

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
return this.imgdatasrc.getNomRangeBits$I(c);
});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
this.imgdatasrc.setTile$I$I(x, y);
this.tIdx=this.getTileIdx$();
});

Clazz.newMeth(C$, 'nextTile$', function () {
this.imgdatasrc.nextTile$();
this.tIdx=this.getTileIdx$();
});

Clazz.newMeth(C$, 'getTile$java_awt_Point', function (co) {
return this.imgdatasrc.getTile$java_awt_Point(co);
});

Clazz.newMeth(C$, 'getTileIdx$', function () {
return this.imgdatasrc.getTileIdx$();
});

Clazz.newMeth(C$, 'getCompULX$I', function (c) {
return this.imgdatasrc.getCompULX$I(c);
});

Clazz.newMeth(C$, 'getCompULY$I', function (c) {
return this.imgdatasrc.getCompULY$I(c);
});

Clazz.newMeth(C$, 'getTilePartULX$', function () {
return this.imgdatasrc.getTilePartULX$();
});

Clazz.newMeth(C$, 'getTilePartULY$', function () {
return this.imgdatasrc.getTilePartULY$();
});

Clazz.newMeth(C$, 'getImgULX$', function () {
return this.imgdatasrc.getImgULX$();
});

Clazz.newMeth(C$, 'getImgULY$', function () {
return this.imgdatasrc.getImgULY$();
});

Clazz.newMeth(C$, 'getNumTiles$java_awt_Point', function (co) {
return this.imgdatasrc.getNumTiles$java_awt_Point(co);
});

Clazz.newMeth(C$, 'getNumTiles$', function () {
return this.imgdatasrc.getNumTiles$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
