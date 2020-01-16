(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image"),I$=[[0,'Error','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgDataJoiner", null, null, 'io.scif.jj2000.j2k.image.BlkImgDataSrc');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['w','h','nc'],'O',['imageData','io.scif.jj2000.j2k.image.BlkImgDataSrc[]','compIdx','int[]','+subsX','+subsY']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_BlkImgDataSrcA$IA', function (imD, cIdx) {
;C$.$init$.apply(this);
var i;
var maxW;
var maxH;
this.imageData=imD;
this.compIdx=cIdx;
if (this.imageData.length != this.compIdx.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imD and cIdx must have the same length"]);
this.nc=imD.length;
this.subsX=Clazz.array(Integer.TYPE, [this.nc]);
this.subsY=Clazz.array(Integer.TYPE, [this.nc]);
for (i=0; i < this.nc; i++) {
if (imD[i].getNumTiles$() != 1 || imD[i].getCompULX$I(cIdx[i]) != 0  || imD[i].getCompULY$I(cIdx[i]) != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["All input components must, not use tiles and must have the origin at the canvas origin"]);
}}
maxW=0;
maxH=0;
for (i=0; i < this.nc; i++) {
if (imD[i].getCompImgWidth$I(cIdx[i]) > maxW) maxW=imD[i].getCompImgWidth$I(cIdx[i]);
if (imD[i].getCompImgHeight$I(cIdx[i]) > maxH) maxH=imD[i].getCompImgHeight$I(cIdx[i]);
}
this.w=maxW;
this.h=maxH;
for (i=0; i < this.nc; i++) {
this.subsX[i]=((maxW + imD[i].getCompImgWidth$I(cIdx[i]) - 1)/imD[i].getCompImgWidth$I(cIdx[i])|0);
this.subsY[i]=((maxH + imD[i].getCompImgHeight$I(cIdx[i]) - 1)/imD[i].getCompImgHeight$I(cIdx[i])|0);
if (((maxW + this.subsX[i] - 1)/this.subsX[i]|0) != imD[i].getCompImgWidth$I(cIdx[i]) || ((maxH + this.subsY[i] - 1)/this.subsY[i]|0) != imD[i].getCompImgHeight$I(cIdx[i]) ) {
throw Clazz.new_($I$(1,1).c$$S,["Can not compute component subsampling factors: strange subsampling."]);
}}
}, 1);

Clazz.newMeth(C$, 'getTileWidth$', function () {
return this.w;
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
return this.h;
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.w;
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.h;
});

Clazz.newMeth(C$, 'getImgWidth$', function () {
return this.w;
});

Clazz.newMeth(C$, 'getImgHeight$', function () {
return this.h;
});

Clazz.newMeth(C$, 'getNumComps$', function () {
return this.nc;
});

Clazz.newMeth(C$, 'getCompSubsX$I', function (c) {
return this.subsX[c];
});

Clazz.newMeth(C$, 'getCompSubsY$I', function (c) {
return this.subsY[c];
});

Clazz.newMeth(C$, 'getTileCompWidth$I$I', function (t, c) {
return this.imageData[c].getTileCompWidth$I$I(t, this.compIdx[c]);
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I', function (t, c) {
return this.imageData[c].getTileCompHeight$I$I(t, this.compIdx[c]);
});

Clazz.newMeth(C$, 'getCompImgWidth$I', function (c) {
return this.imageData[c].getCompImgWidth$I(this.compIdx[c]);
});

Clazz.newMeth(C$, 'getCompImgHeight$I', function (n) {
return this.imageData[n].getCompImgHeight$I(this.compIdx[n]);
});

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
return this.imageData[c].getNomRangeBits$I(this.compIdx[c]);
});

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return this.imageData[c].getFixedPoint$I(this.compIdx[c]);
});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
return this.imageData[c].getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, this.compIdx[c]);
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
return this.imageData[c].getCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, this.compIdx[c]);
});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
if (x != 0 || y != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}});

Clazz.newMeth(C$, 'nextTile$', function () {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.NoNextElementException'));
});

Clazz.newMeth(C$, 'getTile$java_awt_Point', function (co) {
if (co != null ) {
co.x=0;
co.y=0;
return co;
} else {
return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
}});

Clazz.newMeth(C$, 'getTileIdx$', function () {
return 0;
});

Clazz.newMeth(C$, 'getCompULX$I', function (c) {
return 0;
});

Clazz.newMeth(C$, 'getCompULY$I', function (c) {
return 0;
});

Clazz.newMeth(C$, 'getTilePartULX$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTilePartULY$', function () {
return 0;
});

Clazz.newMeth(C$, 'getImgULX$', function () {
return 0;
});

Clazz.newMeth(C$, 'getImgULY$', function () {
return 0;
});

Clazz.newMeth(C$, 'getNumTiles$java_awt_Point', function (co) {
if (co != null ) {
co.x=1;
co.y=1;
return co;
} else {
return Clazz.new_($I$(2,1).c$$I$I,[1, 1]);
}});

Clazz.newMeth(C$, 'getNumTiles$', function () {
return 1;
});

Clazz.newMeth(C$, 'toString', function () {
var string="ImgDataJoiner: WxH = " + this.w + "x" + this.h ;
for (var i=0; i < this.nc; i++) {
string += "\n- Component " + i + " " + this.imageData[i] ;
}
return string;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
