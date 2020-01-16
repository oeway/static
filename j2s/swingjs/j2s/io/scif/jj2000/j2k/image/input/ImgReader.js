(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image.input"),I$=[[0,'Error','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgReader", null, null, 'io.scif.jj2000.j2k.image.BlkImgDataSrc');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['w','h','nc']]]

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
return 1;
});

Clazz.newMeth(C$, 'getCompSubsY$I', function (c) {
return 1;
});

Clazz.newMeth(C$, 'getTileCompWidth$I$I', function (t, c) {
if (t != 0) {
throw Clazz.new_($I$(1,1).c$$S,["Asking a tile-component width for a tile index greater than 0 whereas there is only one tile"]);
}return this.w;
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I', function (t, c) {
if (t != 0) {
throw Clazz.new_($I$(1,1).c$$S,["Asking a tile-component width for a tile index greater than 0 whereas there is only one tile"]);
}return this.h;
});

Clazz.newMeth(C$, 'getCompImgWidth$I', function (c) {
return this.w;
});

Clazz.newMeth(C$, 'getCompImgHeight$I', function (c) {
return this.h;
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
