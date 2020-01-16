(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image.forwcomptransf"),p$1={},I$=[[0,'io.scif.jj2000.j2k.util.MathUtil','io.scif.jj2000.j2k.image.DataBlkInt','io.scif.jj2000.j2k.image.DataBlkFloat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ForwCompTransf", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', 'io.scif.jj2000.j2k.image.BlkImgDataSrc');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Mct", "[<tile index>] [true|false] ...", "Specifies to use component transformation with some tiles.  If the wavelet transform is reversible (w5x3 filter), the Reversible Component Transformation (RCT) is applied. If not (w9x7 filter), the Irreversible Component Transformation (ICT) is used.", null])]);
}

Clazz.newMeth(C$, '$init$', function () {
this.transfType=0;
}, 1);

C$.$fields$=[['I',['transfType'],'O',['src','io.scif.jj2000.j2k.image.BlkImgDataSrc','cts','io.scif.jj2000.j2k.image.CompTransfSpec','wfs','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterSpec','tdepth','int[]','outBlk','io.scif.jj2000.j2k.image.DataBlk','block0','io.scif.jj2000.j2k.image.DataBlkInt','+block1','+block2']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (imgSrc, wp) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[imgSrc]);C$.$init$.apply(this);
this.cts=wp.getComponentTransformation$();
this.wfs=wp.getFilters$();
this.src=imgSrc;
}, 1);

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return this.src.getFixedPoint$I(c);
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'calcMixedBitDepths$IA$I$IA', function (ntdepth, ttype, tdepth) {
if (ntdepth.length < 3 && ttype != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (tdepth == null ) {
tdepth=Clazz.array(Integer.TYPE, [ntdepth.length]);
}switch (ttype) {
case 0:
System.arraycopy$O$I$O$I$I(ntdepth, 0, tdepth, 0, ntdepth.length);
break;
case 1:
if (ntdepth.length > 3) {
System.arraycopy$O$I$O$I$I(ntdepth, 3, tdepth, 3, ntdepth.length - 3);
}tdepth[0]=$I$(1).log2$I((1 << ntdepth[0]) + (2 << ntdepth[1]) + (1 << ntdepth[2])  - 1) - 2 + 1;
tdepth[1]=$I$(1).log2$I((1 << ntdepth[2]) + (1 << ntdepth[1]) - 1) + 1;
tdepth[2]=$I$(1).log2$I((1 << ntdepth[0]) + (1 << ntdepth[1]) - 1) + 1;
break;
case 2:
if (ntdepth.length > 3) {
System.arraycopy$O$I$O$I$I(ntdepth, 3, tdepth, 3, ntdepth.length - 3);
}tdepth[0]=$I$(1).log2$I((Math.floor((1 << ntdepth[0]) * 0.299072 + (1 << ntdepth[1]) * 0.586914 + (1 << ntdepth[2]) * 0.114014)|0) - 1) + 1;
tdepth[1]=$I$(1).log2$I((Math.floor((1 << ntdepth[0]) * 0.168701 + (1 << ntdepth[1]) * 0.331299 + (1 << ntdepth[2]) * 0.5)|0) - 1) + 1;
tdepth[2]=$I$(1).log2$I((Math.floor((1 << ntdepth[0]) * 0.5 + (1 << ntdepth[1]) * 0.418701 + (1 << ntdepth[2]) * 0.081299)|0) - 1) + 1;
break;
}
return tdepth;
}, 1);

Clazz.newMeth(C$, 'initForwRCT', function () {
var i;
var tIdx=this.getTileIdx$();
if (this.src.getNumComps$() < 3) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (this.src.getTileCompWidth$I$I(tIdx, 0) != this.src.getTileCompWidth$I$I(tIdx, 1) || this.src.getTileCompWidth$I$I(tIdx, 0) != this.src.getTileCompWidth$I$I(tIdx, 2)  || this.src.getTileCompHeight$I$I(tIdx, 0) != this.src.getTileCompHeight$I$I(tIdx, 1)  || this.src.getTileCompHeight$I$I(tIdx, 0) != this.src.getTileCompHeight$I$I(tIdx, 2) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not use RCT on components with different dimensions"]);
}var utd;
utd=Clazz.array(Integer.TYPE, [this.src.getNumComps$()]);
for (i=utd.length - 1; i >= 0; i--) {
utd[i]=this.src.getNomRangeBits$I(i);
}
this.tdepth=C$.calcMixedBitDepths$IA$I$IA(utd, 1, null);
}, p$1);

Clazz.newMeth(C$, 'initForwICT', function () {
var i;
var tIdx=this.getTileIdx$();
if (this.src.getNumComps$() < 3) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (this.src.getTileCompWidth$I$I(tIdx, 0) != this.src.getTileCompWidth$I$I(tIdx, 1) || this.src.getTileCompWidth$I$I(tIdx, 0) != this.src.getTileCompWidth$I$I(tIdx, 2)  || this.src.getTileCompHeight$I$I(tIdx, 0) != this.src.getTileCompHeight$I$I(tIdx, 1)  || this.src.getTileCompHeight$I$I(tIdx, 0) != this.src.getTileCompHeight$I$I(tIdx, 2) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not use ICT on components with different dimensions"]);
}var utd;
utd=Clazz.array(Integer.TYPE, [this.src.getNumComps$()]);
for (i=utd.length - 1; i >= 0; i--) {
utd[i]=this.src.getNomRangeBits$I(i);
}
this.tdepth=C$.calcMixedBitDepths$IA$I$IA(utd, 2, null);
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
switch (this.transfType) {
case 1:
return "Forward RCT";
case 2:
return "Forward ICT";
case 0:
return "No component transformation";
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I component transformation"]);
}
});

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
switch (this.transfType) {
case 1:
case 2:
return this.tdepth[c];
case 0:
return this.src.getNomRangeBits$I(c);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I component transformation"]);
}
});

Clazz.newMeth(C$, 'isReversible$', function () {
switch (this.transfType) {
case 0:
case 1:
return true;
case 2:
return false;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I component transformation"]);
}
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (c >= 3 || this.transfType == 0 ) {
return this.src.getCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
} else {
return this.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
}});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
switch (this.transfType) {
case 0:
return this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
case 1:
return p$1.forwRCT$io_scif_jj2000_j2k_image_DataBlk$I.apply(this, [blk, c]);
case 2:
return p$1.forwICT$io_scif_jj2000_j2k_image_DataBlk$I.apply(this, [blk, c]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I component" + " transformation for tile: " + this.tIdx ]);
}
});

Clazz.newMeth(C$, 'forwRCT$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
var k;
var k0;
var k1;
var k2;
var mink;
var i;
var w=blk.w;
var h=blk.h;
var outdata;
if (c >= 0 && c <= 2 ) {
if (blk.getDataType$() != 3) {
if (this.outBlk == null  || this.outBlk.getDataType$() != 3 ) {
this.outBlk=Clazz.new_($I$(2,1));
}this.outBlk.w=w;
this.outBlk.h=h;
this.outBlk.ulx=blk.ulx;
this.outBlk.uly=blk.uly;
blk=this.outBlk;
}outdata=blk.getData$();
if (outdata == null  || outdata.length < h * w ) {
outdata=Clazz.array(Integer.TYPE, [h * w]);
blk.setData$O(outdata);
}var data0;
var data1;
var bdata;
if (this.block0 == null ) this.block0=Clazz.new_($I$(2,1));
if (this.block1 == null ) this.block1=Clazz.new_($I$(2,1));
if (this.block2 == null ) this.block2=Clazz.new_($I$(2,1));
this.block0.w=this.block1.w=this.block2.w=blk.w;
this.block0.h=this.block1.h=this.block2.h=blk.h;
this.block0.ulx=this.block1.ulx=this.block2.ulx=blk.ulx;
this.block0.uly=this.block1.uly=this.block2.uly=blk.uly;
this.block0=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block0, 0);
data0=this.block0.getData$();
this.block1=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block1, 1);
data1=this.block1.getData$();
this.block2=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block2, 2);
bdata=this.block2.getData$();
blk.progressive=this.block0.progressive || this.block1.progressive || this.block2.progressive  ;
blk.offset=0;
blk.scanw=w;
k=w * h - 1;
k0=this.block0.offset + (h - 1) * this.block0.scanw + w - 1;
k1=this.block1.offset + (h - 1) * this.block1.scanw + w - 1;
k2=this.block2.offset + (h - 1) * this.block2.scanw + w - 1;
switch (c) {
case 0:
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--, k1--, k2--) {
outdata[k]=(data0[k] + 2 * data1[k] + bdata[k]) >> 2;
}
k0-=this.block0.scanw - w;
k1-=this.block1.scanw - w;
k2-=this.block2.scanw - w;
}
break;
case 1:
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k1--, k2--) {
outdata[k]=bdata[k2] - data1[k1];
}
k1-=this.block1.scanw - w;
k2-=this.block2.scanw - w;
}
break;
case 2:
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--, k1--) {
outdata[k]=data0[k0] - data1[k1];
}
k0-=this.block0.scanw - w;
k1-=this.block1.scanw - w;
}
break;
}
} else if (c >= 3) {
return this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return blk;
}, p$1);

Clazz.newMeth(C$, 'forwICT$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
var k;
var k0;
var k1;
var k2;
var mink;
var i;
var w=blk.w;
var h=blk.h;
var outdata;
if (blk.getDataType$() != 4) {
if (this.outBlk == null  || this.outBlk.getDataType$() != 4 ) {
this.outBlk=Clazz.new_($I$(3,1));
}this.outBlk.w=w;
this.outBlk.h=h;
this.outBlk.ulx=blk.ulx;
this.outBlk.uly=blk.uly;
blk=this.outBlk;
}outdata=blk.getData$();
if (outdata == null  || outdata.length < w * h ) {
outdata=Clazz.array(Float.TYPE, [h * w]);
blk.setData$O(outdata);
}if (c >= 0 && c <= 2 ) {
var data0;
var data1;
var data2;
if (this.block0 == null ) this.block0=Clazz.new_($I$(2,1));
if (this.block1 == null ) this.block1=Clazz.new_($I$(2,1));
if (this.block2 == null ) this.block2=Clazz.new_($I$(2,1));
this.block0.w=this.block1.w=this.block2.w=blk.w;
this.block0.h=this.block1.h=this.block2.h=blk.h;
this.block0.ulx=this.block1.ulx=this.block2.ulx=blk.ulx;
this.block0.uly=this.block1.uly=this.block2.uly=blk.uly;
this.block0=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block0, 0);
data0=this.block0.getData$();
this.block1=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block1, 1);
data1=this.block1.getData$();
this.block2=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block2, 2);
data2=this.block2.getData$();
blk.progressive=this.block0.progressive || this.block1.progressive || this.block2.progressive  ;
blk.offset=0;
blk.scanw=w;
k=w * h - 1;
k0=this.block0.offset + (h - 1) * this.block0.scanw + w - 1;
k1=this.block1.offset + (h - 1) * this.block1.scanw + w - 1;
k2=this.block2.offset + (h - 1) * this.block2.scanw + w - 1;
switch (c) {
case 0:
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--, k1--, k2--) {
outdata[k]=0.299 * data0[k0] + 0.587 * data1[k1] + 0.114 * data2[k2];
}
k0-=this.block0.scanw - w;
k1-=this.block1.scanw - w;
k2-=this.block2.scanw - w;
}
break;
case 1:
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--, k1--, k2--) {
outdata[k]=-0.16875 * data0[k0] - 0.33126 * data1[k1] + 0.5 * data2[k2];
}
k0-=this.block0.scanw - w;
k1-=this.block1.scanw - w;
k2-=this.block2.scanw - w;
}
break;
case 2:
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--, k1--, k2--) {
outdata[k]=0.5 * data0[k0] - 0.41869 * data1[k1] - 0.08131 * data2[k2];
}
k0-=this.block0.scanw - w;
k1-=this.block1.scanw - w;
k2-=this.block2.scanw - w;
}
break;
}
} else if (c >= 3) {
var indb=Clazz.new_($I$(2,1).c$$I$I$I$I,[blk.ulx, blk.uly, w, h]);
var indata;
this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(indb, c);
indata=indb.getData$();
k=w * h - 1;
k0=indb.offset + (h - 1) * indb.scanw + w - 1;
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--) {
outdata[k]=indata[k0];
}
k0+=indb.w - w;
}
blk.progressive=indb.progressive;
blk.offset=0;
blk.scanw=w;
return blk;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return blk;
}, p$1);

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
this.src.setTile$I$I(x, y);
this.tIdx=this.getTileIdx$();
var str=this.cts.getTileDef$I(this.tIdx);
if (str.equals$O("none")) {
this.transfType=0;
} else if (str.equals$O("rct")) {
this.transfType=1;
p$1.initForwRCT.apply(this, []);
} else if (str.equals$O("ict")) {
this.transfType=2;
p$1.initForwICT.apply(this, []);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component transformation not recognized"]);
}});

Clazz.newMeth(C$, 'nextTile$', function () {
this.src.nextTile$();
this.tIdx=this.getTileIdx$();
var str=this.cts.getTileDef$I(this.tIdx);
if (str.equals$O("none")) {
this.transfType=0;
} else if (str.equals$O("rct")) {
this.transfType=1;
p$1.initForwRCT.apply(this, []);
} else if (str.equals$O("ict")) {
this.transfType=2;
p$1.initForwICT.apply(this, []);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component transformation not recognized"]);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
