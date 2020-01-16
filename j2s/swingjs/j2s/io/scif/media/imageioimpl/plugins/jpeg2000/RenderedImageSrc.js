(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),p$1={},I$=[[0,'io.scif.jj2000.j2k.image.DataBlkInt','java.awt.Point','java.awt.Rectangle','io.scif.media.imageioimpl.plugins.jpeg2000.I18N','javax.imageio.ImageWriteParam','io.scif.media.imageioimpl.common.ImageUtil','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriter','java.awt.image.Raster']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RenderedImageSrc", null, null, 'io.scif.jj2000.j2k.image.BlkImgDataSrc');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sourceBands=null;
this.barr=null;
this.dbi=Clazz.new_($I$(1,1));
this.co=Clazz.new_($I$(2,1));
this.dcOffset=0;
this.isBinary=false;
this.noTransform=true;
this.noSubband=true;
this.inputIsRaster=false;
}, 1);

C$.$fields$=[['Z',['isBinary','noTransform','noSubband','inputIsRaster'],'I',['w','h','tileWidth','tileHeight','tileXOffset','tileYOffset','scaleX','scaleY','xOffset','yOffset','minX','minY','nc','rb','dcOffset'],'O',['sourceBands','int[]','barr','int[][]','dbi','io.scif.jj2000.j2k.image.DataBlkInt','buf','byte[]','intBlk','io.scif.jj2000.j2k.image.DataBlkInt','src','java.awt.image.RenderedImage','param','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriteParamJava','raster','java.awt.image.Raster','+aTile','co','java.awt.Point','destinationRegion','java.awt.Rectangle','+sourceRegion','cm','java.awt.image.ColorModel','sm','java.awt.image.SampleModel','writer','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageWriter']]]

Clazz.newMeth(C$, 'c$$java_awt_image_Raster$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriter', function (raster, param, writer) {
;C$.$init$.apply(this);
this.raster=raster;
this.param=param;
this.writer=writer;
this.inputIsRaster=true;
this.sourceRegion=param.getSourceRegion$();
if (this.sourceRegion == null ) this.sourceRegion=Clazz.new_($I$(3,1).c$$I$I$I$I,[raster.getMinX$(), raster.getMinY$(), raster.getWidth$(), raster.getHeight$()]);
 else this.sourceRegion=this.sourceRegion.intersection$java_awt_Rectangle(raster.getBounds$());
if (this.sourceRegion.isEmpty$()) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(4).getString$S("J2KImageWriterCodecLib0")]);
this.sm=raster.getSampleModel$();
p$1.getFromParam.apply(this, []);
p$1.setSampleModelAndMore.apply(this, []);
this.setTile$I$I(0, 0);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriter', function (src, param, writer) {
;C$.$init$.apply(this);
this.src=src;
this.param=param;
this.writer=writer;
this.sourceRegion=param.getSourceRegion$();
if (this.sourceRegion == null ) this.sourceRegion=Clazz.new_($I$(3,1).c$$I$I$I$I,[src.getMinX$(), src.getMinY$(), src.getWidth$(), src.getHeight$()]);
 else this.sourceRegion=this.sourceRegion.intersection$java_awt_Rectangle(Clazz.new_($I$(3,1).c$$I$I$I$I,[src.getMinX$(), src.getMinY$(), src.getWidth$(), src.getHeight$()]));
if (this.sourceRegion.isEmpty$()) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(4).getString$S("J2KImageWriterCodecLib0")]);
this.sm=src.getSampleModel$();
this.cm=src.getColorModel$();
p$1.getFromParam.apply(this, []);
p$1.setSampleModelAndMore.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getFromParam', function () {
try {
this.tileWidth=this.param.getTileWidth$();
this.tileHeight=this.param.getTileHeight$();
this.tileXOffset=this.param.getTileGridXOffset$();
this.tileYOffset=this.param.getTileGridYOffset$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalStateException")){
this.param.setTilingMode$I($I$(5).MODE_EXPLICIT);
if (this.inputIsRaster) {
this.param.setTiling$I$I$I$I(this.raster.getWidth$(), this.raster.getHeight$(), this.raster.getMinX$(), this.raster.getMinY$());
} else {
this.param.setTiling$I$I$I$I(this.src.getWidth$(), this.src.getHeight$(), this.src.getMinX$(), this.src.getMinY$());
}this.tileWidth=this.param.getTileWidth$();
this.tileHeight=this.param.getTileHeight$();
this.tileXOffset=this.param.getTileGridXOffset$();
this.tileYOffset=this.param.getTileGridYOffset$();
} else {
throw e;
}
}
this.scaleX=this.param.getSourceXSubsampling$();
this.scaleY=this.param.getSourceYSubsampling$();
this.xOffset=this.param.getSubsamplingXOffset$();
this.yOffset=this.param.getSubsamplingYOffset$();
this.sourceRegion.translate$I$I(this.xOffset, this.yOffset);
this.sourceRegion.width-=this.xOffset;
this.sourceRegion.height-=this.yOffset;
this.xOffset=this.sourceRegion.x % this.scaleX;
this.yOffset=this.sourceRegion.y % this.scaleY;
this.minX=(this.sourceRegion.x/this.scaleX|0);
this.minY=(this.sourceRegion.y/this.scaleY|0);
this.w=((this.sourceRegion.width + this.scaleX - 1)/this.scaleX|0);
this.h=((this.sourceRegion.height + this.scaleY - 1)/this.scaleY|0);
this.tileXOffset+=((this.minX - this.tileXOffset)/this.tileWidth|0) * this.tileWidth;
this.tileYOffset+=((this.minY - this.tileYOffset)/this.tileHeight|0) * this.tileHeight;
this.destinationRegion=Clazz.new_($I$(3,1).c$$I$I$I$I,[this.minX, this.minY, this.w, this.h]);
if (!this.destinationRegion.equals$O(this.sourceRegion) || this.tileWidth != this.sm.getWidth$()  || this.tileHeight != this.sm.getHeight$()  || (!this.inputIsRaster && (this.tileXOffset != this.src.getTileGridXOffset$() || this.tileYOffset != this.src.getTileGridYOffset$() ) )  || (this.inputIsRaster && (this.tileXOffset != this.raster.getMinX$() || this.tileYOffset != this.raster.getMinY$() ) ) ) this.noTransform=false;
}, p$1);

Clazz.newMeth(C$, 'setSampleModelAndMore', function () {
this.nc=this.sm.getNumBands$();
this.sourceBands=this.param.getSourceBands$();
if (this.sourceBands != null ) {
this.sm=this.sm.createSubsetSampleModel$IA(this.sourceBands);
this.noSubband=false;
} else {
this.sourceBands=Clazz.array(Integer.TYPE, [this.nc]);
for (var i=0; i < this.nc; i++) this.sourceBands[i]=i;

}this.sm=this.sm.createCompatibleSampleModel$I$I(this.tileWidth, this.tileHeight);
this.nc=this.sm.getNumBands$();
this.isBinary=$I$(6).isBinary$java_awt_image_SampleModel(this.sm);
if (this.cm != null ) {
this.rb=this.cm.getComponentSize$I(0);
for (var i=1; i < this.cm.getNumComponents$(); i++) if (this.rb < this.cm.getComponentSize$I(i)) this.rb=this.cm.getComponentSize$I(i);

} else {
this.rb=this.sm.getSampleSize$I(0);
for (var i=1; i < this.sm.getNumBands$(); i++) if (this.rb < this.sm.getSampleSize$I(i)) this.rb=this.sm.getSampleSize$I(i);

}if (!this.isOrigSigned$I(0) && this.rb > 1 ) this.dcOffset=1 << this.rb - 1;
}, p$1);

Clazz.newMeth(C$, 'getTilePartULX$', function () {
return this.tileXOffset;
});

Clazz.newMeth(C$, 'getTilePartULY$', function () {
return this.tileYOffset;
});

Clazz.newMeth(C$, 'getTileWidth$', function () {
var width=this.tileWidth;
var maxX=this.getImgULX$() + this.getImgWidth$();
var x=this.co.x * this.tileWidth + this.tileXOffset;
if (x + this.tileWidth >= maxX) width=maxX - x;
return width;
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
var height=this.tileHeight;
var maxY=this.getImgULY$() + this.getImgHeight$();
var y=this.co.y * this.tileHeight + this.tileYOffset;
if (y + this.tileHeight >= maxY) height=maxY - y;
return height;
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.tileWidth;
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.tileHeight;
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

Clazz.newMeth(C$, 'getTileGridXOffset$', function () {
return this.param.getTileGridXOffset$();
});

Clazz.newMeth(C$, 'getTileGridYOffset$', function () {
return this.param.getTileGridYOffset$();
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I', function (t, c) {
return this.tileHeight;
});

Clazz.newMeth(C$, 'getTileCompWidth$I$I', function (t, c) {
return this.tileWidth;
});

Clazz.newMeth(C$, 'getCompSubsX$I', function (c) {
return 1;
});

Clazz.newMeth(C$, 'getCompSubsY$I', function (c) {
return 1;
});

Clazz.newMeth(C$, 'getCompWidth$I', function (n) {
return this.w;
});

Clazz.newMeth(C$, 'getCompHeight$I', function (c) {
return this.h;
});

Clazz.newMeth(C$, 'getCompImgWidth$I', function (c) {
return this.w;
});

Clazz.newMeth(C$, 'getCompImgHeight$I', function (c) {
return this.h;
});

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
if (x >= p$1.getNumXTiles.apply(this, [])) {
y+=(x/p$1.getNumXTiles.apply(this, [])|0);
x=x % p$1.getNumXTiles.apply(this, []);
}this.co.x=x;
this.co.y=y;
this.aTile=null;
});

Clazz.newMeth(C$, 'nextTile$', function () {
this.co.x++;
if (this.co.x >= p$1.getNumXTiles.apply(this, [])) {
this.co.x=0;
this.co.y++;
}this.setTile$I$I(this.co.x, this.co.y);
});

Clazz.newMeth(C$, 'getTile$java_awt_Point', function (co) {
if (co != null ) return co;
 else return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getTileIdx$', function () {
return p$1.getNumXTiles.apply(this, []) * this.co.y + this.co.x;
});

Clazz.newMeth(C$, 'getTileOff$java_awt_Point$I', function (p, c) {
if (p != null ) {
p.x=this.co.x * this.tileWidth + this.tileXOffset;
p.y=this.co.y * this.tileHeight + this.tileYOffset;
return this.co;
} else return Clazz.new_($I$(2,1).c$$I$I,[this.co.x * this.tileWidth + this.tileXOffset, this.co.y * this.tileHeight + this.tileYOffset]);
});

Clazz.newMeth(C$, 'getCompULX$I', function (c) {
return this.raster.getMinX$();
});

Clazz.newMeth(C$, 'getCompULY$I', function (c) {
return this.raster.getMinY$();
});

Clazz.newMeth(C$, 'getImgULX$', function () {
return this.destinationRegion.x;
});

Clazz.newMeth(C$, 'getImgULY$', function () {
return this.destinationRegion.y;
});

Clazz.newMeth(C$, 'getNumTiles$java_awt_Point', function (co) {
if (co != null ) {
co.x=p$1.getNumXTiles.apply(this, []);
co.y=p$1.getNumYTiles.apply(this, []);
return co;
} else {
return Clazz.new_($I$(2,1).c$$I$I,[p$1.getNumXTiles.apply(this, []), p$1.getNumYTiles.apply(this, [])]);
}});

Clazz.newMeth(C$, 'getNumTiles$', function () {
return p$1.getNumXTiles.apply(this, []) * p$1.getNumYTiles.apply(this, []);
});

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
return this.rb;
});

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return 0;
});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (this.writer != null  && this.writer.getAbortRequest$() ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(7).WRITE_ABORTED]);
if (this.barr == null ) this.barr=Clazz.array(Integer.TYPE, [this.nc, null]);
if (blk.getDataType$() != 3) {
if (this.intBlk == null ) this.intBlk=Clazz.new_($I$(1,1).c$$I$I$I$I,[blk.ulx, blk.uly, blk.w, blk.h]);
 else {
this.intBlk.ulx=blk.ulx;
this.intBlk.uly=blk.uly;
this.intBlk.w=blk.w;
this.intBlk.h=blk.h;
}blk=this.intBlk;
}var percentage=(this.getTileIdx$() + (blk.uly + 1.0) / blk.h) / this.getNumTiles$();
this.writer.processImageProgressWrapper$F(percentage * 100.0);
if ((this.barr[c] == null ) || (this.dbi.ulx > blk.ulx) || (this.dbi.uly > blk.uly) || (this.dbi.ulx + this.dbi.w < blk.ulx + blk.w) || (this.dbi.uly + this.dbi.h < blk.uly + blk.h)  ) {
var k;
var j;
var i;
var mi;
if (this.barr[c] == null  || this.barr[c].length < blk.w * blk.h ) {
this.barr[c]=Clazz.array(Integer.TYPE, [blk.w * blk.h]);
}blk.setData$O(this.barr[c]);
for (i=(c + 1) % this.nc; i != c; i=(i + 1) % this.nc) if (this.barr[i] == null  || this.barr[i].length < blk.w * blk.h ) {
this.barr[i]=Clazz.array(Integer.TYPE, [blk.w * blk.h]);
}
this.dbi.ulx=blk.ulx;
this.dbi.uly=blk.uly;
this.dbi.w=blk.w;
this.dbi.h=blk.h;
if (this.aTile == null ) {
this.aTile=p$1.getTile$I$I.apply(this, [this.co.x, this.co.y]);
var temp=this.aTile.getBounds$();
this.aTile=this.aTile.createTranslatedChild$I$I(temp.x - this.minX, temp.y - this.minY);
}for (i=0; i < this.nc; i++) {
this.aTile.getSamples$I$I$I$I$I$IA(blk.ulx, blk.uly, blk.w, blk.h, i, this.barr[i]);
for (k=0; k < this.barr[i].length; k++) this.barr[i][k]-=this.dcOffset;

}
blk.setData$O(this.barr[c]);
blk.offset=0;
blk.scanw=blk.w;
} else {
blk.setData$O(this.barr[c]);
blk.offset=(blk.ulx - this.dbi.ulx) * this.dbi.w + blk.ulx - this.dbi.ulx;
blk.scanw=this.dbi.scanw;
}blk.progressive=false;
return blk;
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
var ulx;
var uly;
var w;
var h;
if (blk.getDataType$() != 3) {
var tmp=Clazz.new_($I$(1,1).c$$I$I$I$I,[blk.ulx, blk.uly, blk.w, blk.h]);
blk=tmp;
}var bakarr=blk.getData$();
ulx=blk.ulx;
uly=blk.uly;
w=blk.w;
h=blk.h;
blk.setData$O(null);
this.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
if (bakarr == null ) {
bakarr=Clazz.array(Integer.TYPE, [w * h]);
}if (blk.offset == 0 && blk.scanw == w ) {
System.arraycopy$O$I$O$I$I(blk.getData$(), 0, bakarr, 0, w * h);
} else {
for (var i=h - 1; i >= 0; i--) {
System.arraycopy$O$I$O$I$I(blk.getData$(), blk.offset + i * blk.scanw, bakarr, i * w, w);
}
}blk.setData$O(bakarr);
blk.offset=0;
blk.scanw=blk.w;
return blk;
});

Clazz.newMeth(C$, 'isOrigSigned$I', function (c) {
if (this.isBinary) return true;
var sm=null;
if (this.inputIsRaster) sm=this.raster.getSampleModel$();
 else sm=this.src.getSampleModel$();
if (sm.getDataType$() == 1 || sm.getDataType$() == 0 ) return false;
return true;
});

Clazz.newMeth(C$, 'getNumXTiles', function () {
var x=this.destinationRegion.x;
var tx=this.tileXOffset;
var tw=this.tileWidth;
return C$.ToTile$I$I$I(x + this.destinationRegion.width - 1, tx, tw) - C$.ToTile$I$I$I(x, tx, tw) + 1;
}, p$1);

Clazz.newMeth(C$, 'getNumYTiles', function () {
var y=this.destinationRegion.y;
var ty=this.tileYOffset;
var th=this.tileHeight;
return C$.ToTile$I$I$I(y + this.destinationRegion.height - 1, ty, th) - C$.ToTile$I$I$I(y, ty, th) + 1;
}, p$1);

Clazz.newMeth(C$, 'ToTile$I$I$I', function (pos, tileOffset, tileSize) {
pos-=tileOffset;
if (pos < 0) {
pos+=1 - tileSize;
}return (pos/tileSize|0);
}, 1);

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
var sx=this.tileXOffset + tileX * this.tileWidth;
var sy=this.tileYOffset + tileY * this.tileHeight;
tileX+=(this.tileXOffset/this.tileWidth|0);
tileY+=(this.tileYOffset/this.tileHeight|0);
if (this.inputIsRaster) {
if (this.noTransform) {
return this.raster.createChild$I$I$I$I$I$I$IA(sx, sy, this.getTileWidth$(), this.getTileHeight$(), sx, sy, this.sourceBands);
}var ras=$I$(8).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sm, Clazz.new_($I$(2,1).c$$I$I,[sx, sy]));
var x=p$1.mapToSourceX$I.apply(this, [sx]);
var y=p$1.mapToSourceY$I.apply(this, [sy]);
var minY=this.raster.getMinY$();
var maxY=this.raster.getMinY$() + this.raster.getHeight$();
var cTileWidth=this.getTileWidth$();
for (var j=0; j < this.getTileHeight$(); j++, sy++, y+=this.scaleY) {
if (y < minY || y >= maxY ) continue;
var source=this.raster.createChild$I$I$I$I$I$I$IA(x, y, (cTileWidth - 1) * this.scaleX + 1, 1, x, y, null);
var tempX=sx;
for (var i=0, offset=x; i < cTileWidth; i++, tempX++, offset+=this.scaleX) {
for (var k=0; k < this.nc; k++) {
var p=source.getSample$I$I$I(offset, y, this.sourceBands[k]);
ras.setSample$I$I$I$I(tempX, sy, k, p);
}
}
}
return ras;
} else {
if (this.noTransform) {
var ras=this.src.getTile$I$I(tileX, tileY);
if (this.noSubband) return ras;
 else {
return ras.createChild$I$I$I$I$I$I$IA(sx, sy, this.tileWidth, this.tileHeight, sx, sy, this.sourceBands);
}}var ras=$I$(8).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sm, Clazz.new_($I$(2,1).c$$I$I,[sx, sy]));
var x=p$1.mapToSourceX$I.apply(this, [sx]);
var y=p$1.mapToSourceY$I.apply(this, [sy]);
var minY=this.src.getMinY$();
var maxY=this.src.getMinY$() + this.src.getHeight$();
var length=this.tileWidth * this.scaleX;
if (x + length >= this.src.getWidth$()) length=this.src.getWidth$() - x;
var dLength=((length + this.scaleX - 1)/this.scaleX|0);
for (var j=0; j < this.tileHeight; j++, sy++, y+=this.scaleY) {
if (y < minY || y >= maxY ) continue;
var source=this.src.getData$java_awt_Rectangle(Clazz.new_($I$(3,1).c$$I$I$I$I,[x, y, length, 1]));
var tempX=sx;
for (var i=0, offset=x; i < dLength; i++, tempX++, offset+=this.scaleX) {
for (var k=0; k < this.nc; k++) {
var p=source.getSample$I$I$I(offset, y, this.sourceBands[k]);
ras.setSample$I$I$I$I(tempX, sy, k, p);
}
}
}
return ras;
}}, p$1);

Clazz.newMeth(C$, 'mapToSourceX$I', function (x) {
return x * this.scaleX + this.xOffset;
}, p$1);

Clazz.newMeth(C$, 'mapToSourceY$I', function (y) {
return y * this.scaleY + this.yOffset;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
