(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image"),I$=[[0,'io.scif.jj2000.j2k.util.FacilityManager','Error','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Tiler", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', 'io.scif.jj2000.j2k.image.BlkImgDataSrc');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.src=null;
this.compW=(null|0);
this.compH=(null|0);
this.tcx0=(null|0);
this.tcy0=(null|0);
}, 1);

C$.$fields$=[['I',['x0siz','y0siz','xt0siz','yt0siz','xtsiz','ytsiz','ntX','ntY','tx','ty','tileW','tileH'],'O',['src','io.scif.jj2000.j2k.image.BlkImgDataSrc','compW','int[]','+compH','+tcx0','+tcy0']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$I$I$I$I$I$I', function (src, ax, ay, px, py, nw, nh) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
this.x0siz=ax;
this.y0siz=ay;
this.xt0siz=px;
this.yt0siz=py;
this.xtsiz=nw;
this.ytsiz=nh;
if (this.x0siz < 0 || this.y0siz < 0  || this.xt0siz < 0  || this.yt0siz < 0  || this.xtsiz < 0  || this.ytsiz < 0  || this.xt0siz > this.x0siz  || this.yt0siz > this.y0siz ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid image origin, tiling origin or nominal tile size"]);
}if (this.xtsiz == 0) this.xtsiz=this.x0siz + src.getImgWidth$() - this.xt0siz;
if (this.ytsiz == 0) this.ytsiz=this.y0siz + src.getImgHeight$() - this.yt0siz;
if (this.x0siz - this.xt0siz >= this.xtsiz) {
this.xt0siz+=(((this.x0siz - this.xt0siz)/this.xtsiz|0)) * this.xtsiz;
}if (this.y0siz - this.yt0siz >= this.ytsiz) {
this.yt0siz+=(((this.y0siz - this.yt0siz)/this.ytsiz|0)) * this.ytsiz;
}if (this.x0siz - this.xt0siz >= this.xtsiz || this.y0siz - this.yt0siz >= this.ytsiz ) {
$I$(1).getMsgLogger$().printmsg$I$S(1, "Automatically adjusted tiling origin to equivalent one (" + this.xt0siz + "," + this.yt0siz + ") so that " + "first tile overlaps the image" );
}this.ntX=(Math.ceil((this.x0siz + src.getImgWidth$() - this.xt0siz) / this.xtsiz)|0);
this.ntY=(Math.ceil((this.y0siz + src.getImgHeight$() - this.yt0siz) / this.ytsiz)|0);
}, 1);

Clazz.newMeth(C$, 'getTileWidth$', function () {
return this.tileW;
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
return this.tileH;
});

Clazz.newMeth(C$, 'getTileCompWidth$I$I', function (t, c) {
if (t != this.getTileIdx$()) {
throw Clazz.new_($I$(2,1).c$$S,["Asking the width of a tile-component which is not in the current tile (call setTile() or nextTile() methods before)."]);
}return this.compW[c];
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I', function (t, c) {
if (t != this.getTileIdx$()) {
throw Clazz.new_($I$(2,1).c$$S,["Asking the width of a tile-component which is not in the current tile (call setTile() or nextTile() methods before)."]);
}return this.compH[c];
});

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return this.src.getFixedPoint$I(c);
});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (blk.ulx < 0 || blk.uly < 0  || blk.w > this.compW[c]  || blk.h > this.compH[c] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block is outside the tile"]);
}var incx=(Math.ceil(this.x0siz / this.src.getCompSubsX$I(c))|0);
var incy=(Math.ceil(this.y0siz / this.src.getCompSubsY$I(c))|0);
blk.ulx-=incx;
blk.uly-=incy;
blk=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
blk.ulx+=incx;
blk.uly+=incy;
return blk;
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (blk.ulx < 0 || blk.uly < 0  || blk.w > this.compW[c]  || blk.h > this.compH[c] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block is outside the tile"]);
}var incx=(Math.ceil(this.x0siz / this.src.getCompSubsX$I(c))|0);
var incy=(Math.ceil(this.y0siz / this.src.getCompSubsY$I(c))|0);
blk.ulx-=incx;
blk.uly-=incy;
blk=this.src.getCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
blk.ulx+=incx;
blk.uly+=incy;
return blk;
});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
this.src.setTile$I$I(x, y);
if (x < 0 || y < 0  || x >= this.ntX  || y >= this.ntY ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Tile\'s indexes out of bounds"]);
}this.tx=x;
this.ty=y;
var tx0=(x != 0) ? this.xt0siz + x * this.xtsiz : this.x0siz;
var ty0=(y != 0) ? this.yt0siz + y * this.ytsiz : this.y0siz;
var tx1=(x != this.ntX - 1) ? (this.xt0siz + (x + 1) * this.xtsiz) : (this.x0siz + this.src.getImgWidth$());
var ty1=(y != this.ntY - 1) ? (this.yt0siz + (y + 1) * this.ytsiz) : (this.y0siz + this.src.getImgHeight$());
this.tileW=tx1 - tx0;
this.tileH=ty1 - ty0;
var nc=this.src.getNumComps$();
if (this.compW == null ) this.compW=Clazz.array(Integer.TYPE, [nc]);
if (this.compH == null ) this.compH=Clazz.array(Integer.TYPE, [nc]);
if (this.tcx0 == null ) this.tcx0=Clazz.array(Integer.TYPE, [nc]);
if (this.tcy0 == null ) this.tcy0=Clazz.array(Integer.TYPE, [nc]);
for (var i=0; i < nc; i++) {
this.tcx0[i]=(Math.ceil(tx0 / this.src.getCompSubsX$I(i))|0);
this.tcy0[i]=(Math.ceil(ty0 / this.src.getCompSubsY$I(i))|0);
this.compW[i]=(Math.ceil(tx1 / this.src.getCompSubsX$I(i))|0) - this.tcx0[i];
this.compH[i]=(Math.ceil(ty1 / this.src.getCompSubsY$I(i))|0) - this.tcy0[i];
}
});

Clazz.newMeth(C$, 'nextTile$', function () {
if (this.tx == this.ntX - 1 && this.ty == this.ntY - 1 ) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.NoNextElementException'));
} else if (this.tx < this.ntX - 1) {
this.setTile$I$I(this.tx + 1, this.ty);
} else {
this.setTile$I$I(0, this.ty + 1);
}});

Clazz.newMeth(C$, 'getTile$java_awt_Point', function (co) {
if (co != null ) {
co.x=this.tx;
co.y=this.ty;
return co;
} else {
return Clazz.new_($I$(3,1).c$$I$I,[this.tx, this.ty]);
}});

Clazz.newMeth(C$, 'getTileIdx$', function () {
return this.ty * this.ntX + this.tx;
});

Clazz.newMeth(C$, 'getCompULX$I', function (c) {
return this.tcx0[c];
});

Clazz.newMeth(C$, 'getCompULY$I', function (c) {
return this.tcy0[c];
});

Clazz.newMeth(C$, 'getTilePartULX$', function () {
return this.xt0siz;
});

Clazz.newMeth(C$, 'getTilePartULY$', function () {
return this.yt0siz;
});

Clazz.newMeth(C$, 'getImgULX$', function () {
return this.x0siz;
});

Clazz.newMeth(C$, 'getImgULY$', function () {
return this.y0siz;
});

Clazz.newMeth(C$, 'getNumTiles$java_awt_Point', function (co) {
if (co != null ) {
co.x=this.ntX;
co.y=this.ntY;
return co;
} else {
return Clazz.new_($I$(3,1).c$$I$I,[this.ntX, this.ntY]);
}});

Clazz.newMeth(C$, 'getNumTiles$', function () {
return this.ntX * this.ntY;
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.xtsiz;
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.ytsiz;
});

Clazz.newMeth(C$, 'getTilingOrigin$java_awt_Point', function (co) {
if (co != null ) {
co.x=this.xt0siz;
co.y=this.yt0siz;
return co;
} else {
return Clazz.new_($I$(3,1).c$$I$I,[this.xt0siz, this.yt0siz]);
}});

Clazz.newMeth(C$, 'toString', function () {
return "Tiler: source= " + this.src + "\n" + this.getNumTiles$() + " tile(s), nominal width=" + this.xtsiz + ", nominal height=" + this.ytsiz ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
