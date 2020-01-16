(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MultiResImgDataAdapter", null, null, 'io.scif.jj2000.j2k.wavelet.synthesis.MultiResImgData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tIdx=0;
}, 1);

C$.$fields$=[['I',['tIdx'],'O',['mressrc','io.scif.jj2000.j2k.wavelet.synthesis.MultiResImgData']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_wavelet_synthesis_MultiResImgData', function (src) {
;C$.$init$.apply(this);
this.mressrc=src;
}, 1);

Clazz.newMeth(C$, 'getTileWidth$I', function (rl) {
return this.mressrc.getTileWidth$I(rl);
});

Clazz.newMeth(C$, 'getTileHeight$I', function (rl) {
return this.mressrc.getTileHeight$I(rl);
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.mressrc.getNomTileWidth$();
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.mressrc.getNomTileHeight$();
});

Clazz.newMeth(C$, 'getImgWidth$I', function (rl) {
return this.mressrc.getImgWidth$I(rl);
});

Clazz.newMeth(C$, 'getImgHeight$I', function (rl) {
return this.mressrc.getImgHeight$I(rl);
});

Clazz.newMeth(C$, 'getNumComps$', function () {
return this.mressrc.getNumComps$();
});

Clazz.newMeth(C$, 'getCompSubsX$I', function (c) {
return this.mressrc.getCompSubsX$I(c);
});

Clazz.newMeth(C$, 'getCompSubsY$I', function (c) {
return this.mressrc.getCompSubsY$I(c);
});

Clazz.newMeth(C$, 'getTileCompWidth$I$I$I', function (t, c, rl) {
return this.mressrc.getTileCompWidth$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I$I', function (t, c, rl) {
return this.mressrc.getTileCompHeight$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'getCompImgWidth$I$I', function (c, rl) {
return this.mressrc.getCompImgWidth$I$I(c, rl);
});

Clazz.newMeth(C$, 'getCompImgHeight$I$I', function (c, rl) {
return this.mressrc.getCompImgHeight$I$I(c, rl);
});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
this.mressrc.setTile$I$I(x, y);
this.tIdx=this.getTileIdx$();
});

Clazz.newMeth(C$, 'nextTile$', function () {
this.mressrc.nextTile$();
this.tIdx=this.getTileIdx$();
});

Clazz.newMeth(C$, 'getTile$java_awt_Point', function (co) {
return this.mressrc.getTile$java_awt_Point(co);
});

Clazz.newMeth(C$, 'getTileIdx$', function () {
return this.mressrc.getTileIdx$();
});

Clazz.newMeth(C$, 'getResULX$I$I', function (c, rl) {
return this.mressrc.getResULX$I$I(c, rl);
});

Clazz.newMeth(C$, 'getResULY$I$I', function (c, rl) {
return this.mressrc.getResULY$I$I(c, rl);
});

Clazz.newMeth(C$, 'getTilePartULX$', function () {
return this.mressrc.getTilePartULX$();
});

Clazz.newMeth(C$, 'getTilePartULY$', function () {
return this.mressrc.getTilePartULY$();
});

Clazz.newMeth(C$, 'getImgULX$I', function (rl) {
return this.mressrc.getImgULX$I(rl);
});

Clazz.newMeth(C$, 'getImgULY$I', function (rl) {
return this.mressrc.getImgULY$I(rl);
});

Clazz.newMeth(C$, 'getNumTiles$java_awt_Point', function (co) {
return this.mressrc.getNumTiles$java_awt_Point(co);
});

Clazz.newMeth(C$, 'getNumTiles$', function () {
return this.mressrc.getNumTiles$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
