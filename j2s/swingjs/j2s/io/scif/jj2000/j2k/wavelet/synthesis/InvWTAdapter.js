(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis");
/*c*/var C$=Clazz.newClass(P$, "InvWTAdapter", null, null, 'io.scif.jj2000.j2k.wavelet.synthesis.InvWT');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['reslvl','maxImgRes'],'O',['decSpec','io.scif.jj2000.j2k.decoder.DecoderSpecs','mressrc','io.scif.jj2000.j2k.wavelet.synthesis.MultiResImgData']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_wavelet_synthesis_MultiResImgData$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (src, decSpec) {
;C$.$init$.apply(this);
this.mressrc=src;
this.decSpec=decSpec;
this.maxImgRes=decSpec.dls.getMin$();
}, 1);

Clazz.newMeth(C$, 'setImgResLevel$I', function (rl) {
if (rl < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Resolution level index cannot be negative."]);
}this.reslvl=rl;
});

Clazz.newMeth(C$, 'getTileWidth$', function () {
var tIdx=this.getTileIdx$();
var rl=10000;
var mrl;
var nc=this.mressrc.getNumComps$();
for (var c=0; c < nc; c++) {
mrl=this.mressrc.getSynSubbandTree$I$I(tIdx, c).resLvl;
if (mrl < rl) rl=mrl;
}
return this.mressrc.getTileWidth$I(rl);
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
var tIdx=this.getTileIdx$();
var rl=10000;
var mrl;
var nc=this.mressrc.getNumComps$();
for (var c=0; c < nc; c++) {
mrl=this.mressrc.getSynSubbandTree$I$I(tIdx, c).resLvl;
if (mrl < rl) rl=mrl;
}
return this.mressrc.getTileHeight$I(rl);
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.mressrc.getNomTileWidth$();
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.mressrc.getNomTileHeight$();
});

Clazz.newMeth(C$, 'getImgWidth$', function () {
return this.mressrc.getImgWidth$I(this.reslvl);
});

Clazz.newMeth(C$, 'getImgHeight$', function () {
return this.mressrc.getImgHeight$I(this.reslvl);
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

Clazz.newMeth(C$, 'getTileCompWidth$I$I', function (t, c) {
var rl=this.mressrc.getSynSubbandTree$I$I(t, c).resLvl;
return this.mressrc.getTileCompWidth$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I', function (t, c) {
var rl=this.mressrc.getSynSubbandTree$I$I(t, c).resLvl;
return this.mressrc.getTileCompHeight$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'getCompImgWidth$I', function (c) {
var rl=this.decSpec.dls.getMinInComp$I(c);
return this.mressrc.getCompImgWidth$I$I(c, rl);
});

Clazz.newMeth(C$, 'getCompImgHeight$I', function (c) {
var rl=this.decSpec.dls.getMinInComp$I(c);
return this.mressrc.getCompImgHeight$I$I(c, rl);
});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
this.mressrc.setTile$I$I(x, y);
});

Clazz.newMeth(C$, 'nextTile$', function () {
this.mressrc.nextTile$();
});

Clazz.newMeth(C$, 'getTile$java_awt_Point', function (co) {
return this.mressrc.getTile$java_awt_Point(co);
});

Clazz.newMeth(C$, 'getTileIdx$', function () {
return this.mressrc.getTileIdx$();
});

Clazz.newMeth(C$, 'getCompULX$I', function (c) {
var tIdx=this.getTileIdx$();
var rl=this.mressrc.getSynSubbandTree$I$I(tIdx, c).resLvl;
return this.mressrc.getResULX$I$I(c, rl);
});

Clazz.newMeth(C$, 'getCompULY$I', function (c) {
var tIdx=this.getTileIdx$();
var rl=this.mressrc.getSynSubbandTree$I$I(tIdx, c).resLvl;
return this.mressrc.getResULY$I$I(c, rl);
});

Clazz.newMeth(C$, 'getImgULX$', function () {
return this.mressrc.getImgULX$I(this.reslvl);
});

Clazz.newMeth(C$, 'getImgULY$', function () {
return this.mressrc.getImgULY$I(this.reslvl);
});

Clazz.newMeth(C$, 'getTilePartULX$', function () {
return this.mressrc.getTilePartULX$();
});

Clazz.newMeth(C$, 'getTilePartULY$', function () {
return this.mressrc.getTilePartULY$();
});

Clazz.newMeth(C$, 'getNumTiles$java_awt_Point', function (co) {
return this.mressrc.getNumTiles$java_awt_Point(co);
});

Clazz.newMeth(C$, 'getNumTiles$', function () {
return this.mressrc.getNumTiles$();
});

Clazz.newMeth(C$, 'getSynSubbandTree$I$I', function (t, c) {
return this.mressrc.getSynSubbandTree$I$I(t, c);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
