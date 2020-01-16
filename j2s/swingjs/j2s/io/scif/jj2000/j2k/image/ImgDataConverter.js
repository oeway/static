(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image"),p$1={},I$=[[0,'io.scif.jj2000.j2k.image.DataBlkInt']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgDataConverter", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', 'io.scif.jj2000.j2k.image.BlkImgDataSrc');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.srcBlk=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['I',['fp'],'O',['srcBlk','io.scif.jj2000.j2k.image.DataBlk','src','io.scif.jj2000.j2k.image.BlkImgDataSrc']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$I', function (imgSrc, fp) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[imgSrc]);C$.$init$.apply(this);
this.src=imgSrc;
this.fp=fp;
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_BlkImgDataSrc', function (imgSrc) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[imgSrc]);C$.$init$.apply(this);
this.src=imgSrc;
this.fp=0;
}, 1);

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return this.fp;
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
return p$1.getData$io_scif_jj2000_j2k_image_DataBlk$I$Z.apply(this, [blk, c, false]);
});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
return p$1.getData$io_scif_jj2000_j2k_image_DataBlk$I$Z.apply(this, [blk, c, true]);
});

Clazz.newMeth(C$, 'getData$io_scif_jj2000_j2k_image_DataBlk$I$Z', function (blk, c, intern) {
var reqBlk;
var otype=blk.getDataType$();
if (otype == this.srcBlk.getDataType$()) {
reqBlk=blk;
} else {
reqBlk=this.srcBlk;
reqBlk.ulx=blk.ulx;
reqBlk.uly=blk.uly;
reqBlk.w=blk.w;
reqBlk.h=blk.h;
}if (intern) {
this.srcBlk=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(reqBlk, c);
} else {
this.srcBlk=this.src.getCompData$io_scif_jj2000_j2k_image_DataBlk$I(reqBlk, c);
}if (this.srcBlk.getDataType$() == otype) {
return this.srcBlk;
}var i;
var k;
var kSrc;
var kmin;
var mult;
var w=this.srcBlk.w;
var h=this.srcBlk.h;
switch (otype) {
case 4:
var farr;
var srcIArr;
farr=blk.getData$();
if (farr == null  || farr.length < w * h ) {
farr=Clazz.array(Float.TYPE, [w * h]);
blk.setData$O(farr);
}blk.scanw=this.srcBlk.w;
blk.offset=0;
blk.progressive=this.srcBlk.progressive;
srcIArr=this.srcBlk.getData$();
this.fp=this.src.getFixedPoint$I(c);
if (this.fp != 0) {
mult=1.0 / (1 << this.fp);
for (i=h - 1, k=w * h - 1, kSrc=this.srcBlk.offset + (h - 1) * this.srcBlk.scanw + w - 1; i >= 0; i--) {
for (kmin=k - w; k > kmin; k--, kSrc--) {
farr[k]=((srcIArr[kSrc] * mult));
}
kSrc-=this.srcBlk.scanw - w;
}
} else {
for (i=h - 1, k=w * h - 1, kSrc=this.srcBlk.offset + (h - 1) * this.srcBlk.scanw + w - 1; i >= 0; i--) {
for (kmin=k - w; k > kmin; k--, kSrc--) {
farr[k]=((srcIArr[kSrc]));
}
kSrc-=this.srcBlk.scanw - w;
}
}break;
case 3:
var iarr;
var srcFArr;
iarr=blk.getData$();
if (iarr == null  || iarr.length < w * h ) {
iarr=Clazz.array(Integer.TYPE, [w * h]);
blk.setData$O(iarr);
}blk.scanw=this.srcBlk.w;
blk.offset=0;
blk.progressive=this.srcBlk.progressive;
srcFArr=this.srcBlk.getData$();
if (this.fp != 0) {
mult=(1 << this.fp);
for (i=h - 1, k=w * h - 1, kSrc=this.srcBlk.offset + (h - 1) * this.srcBlk.scanw + w - 1; i >= 0; i--) {
for (kmin=k - w; k > kmin; k--, kSrc--) {
if (srcFArr[kSrc] > 0.0 ) {
iarr[k]=((srcFArr[kSrc] * mult + 0.5)|0);
} else {
iarr[k]=((srcFArr[kSrc] * mult - 0.5)|0);
}}
kSrc-=this.srcBlk.scanw - w;
}
} else {
for (i=h - 1, k=w * h - 1, kSrc=this.srcBlk.offset + (h - 1) * this.srcBlk.scanw + w - 1; i >= 0; i--) {
for (kmin=k - w; k > kmin; k--, kSrc--) {
if (srcFArr[kSrc] > 0.0 ) {
iarr[k]=((srcFArr[kSrc] + 0.5)|0);
} else {
iarr[k]=((srcFArr[kSrc] - 0.5)|0);
}}
kSrc-=this.srcBlk.scanw - w;
}
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Only integer and float data are supported by JJ2000"]);
}
return blk;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
