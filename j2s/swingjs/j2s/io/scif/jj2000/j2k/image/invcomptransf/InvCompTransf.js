(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image.invcomptransf"),p$1={},I$=[[0,'io.scif.jj2000.j2k.image.DataBlkInt','io.scif.jj2000.j2k.util.MathUtil','io.scif.jj2000.j2k.image.DataBlkFloat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InvCompTransf", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', 'io.scif.jj2000.j2k.image.BlkImgDataSrc');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=null;
}

Clazz.newMeth(C$, '$init$', function () {
this.transfType=0;
this.outdata=Clazz.array(Integer.TYPE, [3, null]);
this.dbi=Clazz.new_($I$(1,1));
this.noCompTransf=false;
}, 1);

C$.$fields$=[['Z',['noCompTransf'],'I',['transfType'],'O',['src','io.scif.jj2000.j2k.image.BlkImgDataSrc','cts','io.scif.jj2000.j2k.image.CompTransfSpec','wfs','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterSpec','outdata','int[][]','block0','io.scif.jj2000.j2k.image.DataBlk','+block1','+block2','dbi','io.scif.jj2000.j2k.image.DataBlkInt','utdepth','int[]']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_jj2000_j2k_decoder_DecoderSpecs$IA', function (imgSrc, decSpec, utdepth) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[imgSrc]);C$.$init$.apply(this);
this.cts=decSpec.cts;
this.wfs=decSpec.wfs;
this.src=imgSrc;
this.utdepth=utdepth;
}, 1);

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
switch (this.transfType) {
case 1:
return "Inverse RCT";
case 2:
return "Inverse ICT";
case 0:
return "No component transformation";
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

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return this.src.getFixedPoint$I(c);
});

Clazz.newMeth(C$, 'calcMixedBitDepths$IA$I$IA', function (utdepth, ttype, tdepth) {
if (utdepth.length < 3 && ttype != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (tdepth == null ) {
tdepth=Clazz.array(Integer.TYPE, [utdepth.length]);
}switch (ttype) {
case 0:
System.arraycopy$O$I$O$I$I(utdepth, 0, tdepth, 0, utdepth.length);
break;
case 1:
if (utdepth.length > 3) {
System.arraycopy$O$I$O$I$I(utdepth, 3, tdepth, 3, utdepth.length - 3);
}tdepth[0]=$I$(2).log2$I((1 << utdepth[0]) + (2 << utdepth[1]) + (1 << utdepth[2])  - 1) - 2 + 1;
tdepth[1]=$I$(2).log2$I((1 << utdepth[2]) + (1 << utdepth[1]) - 1) + 1;
tdepth[2]=$I$(2).log2$I((1 << utdepth[0]) + (1 << utdepth[1]) - 1) + 1;
break;
case 2:
if (utdepth.length > 3) {
System.arraycopy$O$I$O$I$I(utdepth, 3, tdepth, 3, utdepth.length - 3);
}tdepth[0]=$I$(2).log2$I((Math.floor((1 << utdepth[0]) * 0.299072 + (1 << utdepth[1]) * 0.586914 + (1 << utdepth[2]) * 0.114014)|0) - 1) + 1;
tdepth[1]=$I$(2).log2$I((Math.floor((1 << utdepth[0]) * 0.168701 + (1 << utdepth[1]) * 0.331299 + (1 << utdepth[2]) * 0.5)|0) - 1) + 1;
tdepth[2]=$I$(2).log2$I((Math.floor((1 << utdepth[0]) * 0.5 + (1 << utdepth[1]) * 0.418701 + (1 << utdepth[2]) * 0.081299)|0) - 1) + 1;
break;
}
return tdepth;
}, 1);

Clazz.newMeth(C$, 'getNomRangeBits$I', function (c) {
return this.utdepth[c];
});

Clazz.newMeth(C$, 'getCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (c >= 3 || this.transfType == 0 ) {
return this.src.getCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
} else {
return this.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
}});

Clazz.newMeth(C$, 'getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (this.noCompTransf) return this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
switch (this.transfType) {
case 0:
return this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
case 1:
return p$1.invRCT$io_scif_jj2000_j2k_image_DataBlk$I.apply(this, [blk, c]);
case 2:
return p$1.invICT$io_scif_jj2000_j2k_image_DataBlk$I.apply(this, [blk, c]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I component transformation"]);
}
});

Clazz.newMeth(C$, 'invRCT$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (c >= 3 && c < this.getNumComps$() ) {
return this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(blk, c);
}if ((this.outdata[c] == null ) || (this.dbi.ulx > blk.ulx) || (this.dbi.uly > blk.uly) || (this.dbi.ulx + this.dbi.w < blk.ulx + blk.w) || (this.dbi.uly + this.dbi.h < blk.uly + blk.h)  ) {
var k;
var k0;
var k1;
var k2;
var mink;
var i;
var w=blk.w;
var h=blk.h;
this.outdata[c]=blk.getData$();
if (this.outdata[c] == null  || this.outdata[c].length != h * w ) {
this.outdata[c]=Clazz.array(Integer.TYPE, [h * w]);
blk.setData$O(this.outdata[c]);
}this.outdata[(c + 1) % 3]=Clazz.array(Integer.TYPE, [this.outdata[c].length]);
this.outdata[(c + 2) % 3]=Clazz.array(Integer.TYPE, [this.outdata[c].length]);
if (this.block0 == null  || this.block0.getDataType$() != 3 ) this.block0=Clazz.new_($I$(1,1));
if (this.block1 == null  || this.block1.getDataType$() != 3 ) this.block1=Clazz.new_($I$(1,1));
if (this.block2 == null  || this.block2.getDataType$() != 3 ) this.block2=Clazz.new_($I$(1,1));
this.block0.w=this.block1.w=this.block2.w=blk.w;
this.block0.h=this.block1.h=this.block2.h=blk.h;
this.block0.ulx=this.block1.ulx=this.block2.ulx=blk.ulx;
this.block0.uly=this.block1.uly=this.block2.uly=blk.uly;
var data0;
var data1;
var data2;
this.block0=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block0, 0);
data0=this.block0.getData$();
this.block1=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block1, 1);
data1=this.block1.getData$();
this.block2=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block2, 2);
data2=this.block2.getData$();
blk.progressive=this.block0.progressive || this.block1.progressive || this.block2.progressive  ;
blk.offset=0;
blk.scanw=w;
this.dbi.progressive=blk.progressive;
this.dbi.ulx=blk.ulx;
this.dbi.uly=blk.uly;
this.dbi.w=blk.w;
this.dbi.h=blk.h;
k=w * h - 1;
k0=this.block0.offset + (h - 1) * this.block0.scanw + w - 1;
k1=this.block1.offset + (h - 1) * this.block1.scanw + w - 1;
k2=this.block2.offset + (h - 1) * this.block2.scanw + w - 1;
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--, k1--, k2--) {
this.outdata[1][k]=(data0[k0] - ((data1[k1] + data2[k2]) >> 2));
this.outdata[0][k]=data2[k2] + this.outdata[1][k];
this.outdata[2][k]=data1[k1] + this.outdata[1][k];
}
k0-=this.block0.scanw - w;
k1-=this.block1.scanw - w;
k2-=this.block2.scanw - w;
}
this.outdata[c]=null;
} else if ((c >= 0) && (c <= 3) ) {
blk.setData$O(this.outdata[c]);
blk.progressive=this.dbi.progressive;
blk.offset=(blk.uly - this.dbi.uly) * this.dbi.w + blk.ulx - this.dbi.ulx;
blk.scanw=this.dbi.w;
this.outdata[c]=null;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return blk;
}, p$1);

Clazz.newMeth(C$, 'invICT$io_scif_jj2000_j2k_image_DataBlk$I', function (blk, c) {
if (c >= 3 && c < this.getNumComps$() ) {
var k;
var k0;
var k1;
var k2;
var mink;
var i;
var w=blk.w;
var h=blk.h;
var outdata;
outdata=blk.getData$();
if (outdata == null ) {
outdata=Clazz.array(Integer.TYPE, [h * w]);
blk.setData$O(outdata);
}var indb=Clazz.new_($I$(3,1).c$$I$I$I$I,[blk.ulx, blk.uly, w, h]);
var indata;
this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(indb, c);
indata=indb.getData$();
k=w * h - 1;
k0=indb.offset + (h - 1) * indb.scanw + w - 1;
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--) {
outdata[k]=((indata[k0])|0);
}
k0-=indb.scanw - w;
}
blk.progressive=indb.progressive;
blk.offset=0;
blk.scanw=w;
} else if ((this.outdata[c] == null ) || (this.dbi.ulx > blk.ulx) || (this.dbi.uly > blk.uly) || (this.dbi.ulx + this.dbi.w < blk.ulx + blk.w) || (this.dbi.uly + this.dbi.h < blk.uly + blk.h)  ) {
var k;
var k0;
var k1;
var k2;
var mink;
var i;
var w=blk.w;
var h=blk.h;
this.outdata[c]=blk.getData$();
if (this.outdata[c] == null  || this.outdata[c].length != w * h ) {
this.outdata[c]=Clazz.array(Integer.TYPE, [h * w]);
blk.setData$O(this.outdata[c]);
}this.outdata[(c + 1) % 3]=Clazz.array(Integer.TYPE, [this.outdata[c].length]);
this.outdata[(c + 2) % 3]=Clazz.array(Integer.TYPE, [this.outdata[c].length]);
if (this.block0 == null  || this.block0.getDataType$() != 4 ) this.block0=Clazz.new_($I$(3,1));
if (this.block2 == null  || this.block2.getDataType$() != 4 ) this.block2=Clazz.new_($I$(3,1));
if (this.block1 == null  || this.block1.getDataType$() != 4 ) this.block1=Clazz.new_($I$(3,1));
this.block0.w=this.block2.w=this.block1.w=blk.w;
this.block0.h=this.block2.h=this.block1.h=blk.h;
this.block0.ulx=this.block2.ulx=this.block1.ulx=blk.ulx;
this.block0.uly=this.block2.uly=this.block1.uly=blk.uly;
var data0;
var data1;
var data2;
this.block0=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block0, 0);
data0=this.block0.getData$();
this.block2=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block2, 1);
data2=this.block2.getData$();
this.block1=this.src.getInternCompData$io_scif_jj2000_j2k_image_DataBlk$I(this.block1, 2);
data1=this.block1.getData$();
blk.progressive=this.block0.progressive || this.block1.progressive || this.block2.progressive  ;
blk.offset=0;
blk.scanw=w;
this.dbi.progressive=blk.progressive;
this.dbi.ulx=blk.ulx;
this.dbi.uly=blk.uly;
this.dbi.w=blk.w;
this.dbi.h=blk.h;
k=w * h - 1;
k0=this.block0.offset + (h - 1) * this.block0.scanw + w - 1;
k2=this.block2.offset + (h - 1) * this.block2.scanw + w - 1;
k1=this.block1.offset + (h - 1) * this.block1.scanw + w - 1;
for (i=h - 1; i >= 0; i--) {
for (mink=k - w; k > mink; k--, k0--, k2--, k1--) {
this.outdata[0][k]=((data0[k0] + 1.402 * data1[k1] + 0.5)|0);
this.outdata[1][k]=((data0[k0] - 0.34413 * data2[k2] - 0.71414 * data1[k1] + 0.5)|0);
this.outdata[2][k]=((data0[k0] + 1.772 * data2[k2] + 0.5)|0);
}
k0-=this.block0.scanw - w;
k2-=this.block2.scanw - w;
k1-=this.block1.scanw - w;
}
this.outdata[c]=null;
} else if ((c >= 0) && (c <= 3) ) {
blk.setData$O(this.outdata[c]);
blk.progressive=this.dbi.progressive;
blk.offset=(blk.uly - this.dbi.uly) * this.dbi.w + blk.ulx - this.dbi.ulx;
blk.scanw=this.dbi.w;
this.outdata[c]=null;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return blk;
}, p$1);

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
this.src.setTile$I$I(x, y);
this.tIdx=this.getTileIdx$();
if ((this.cts.getTileDef$I(this.tIdx)).intValue$() == 0) this.transfType=0;
 else {
var nc=this.src.getNumComps$() > 3 ? 3 : this.src.getNumComps$();
var rev=0;
for (var c=0; c < nc; c++) rev+=(this.wfs.isReversible$I$I(this.tIdx, c) ? 1 : 0);

if (rev == 3) {
this.transfType=1;
} else if (rev == 0) {
this.transfType=2;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wavelet transformation and " + "component transformation" + " not coherent in tile" + this.tIdx ]);
}}});

Clazz.newMeth(C$, 'nextTile$', function () {
this.src.nextTile$();
this.tIdx=this.getTileIdx$();
if ((this.cts.getTileDef$I(this.tIdx)).intValue$() == 0) this.transfType=0;
 else {
var nc=this.src.getNumComps$() > 3 ? 3 : this.src.getNumComps$();
var rev=0;
for (var c=0; c < nc; c++) rev+=(this.wfs.isReversible$I$I(this.tIdx, c) ? 1 : 0);

if (rev == 3) {
this.transfType=1;
} else if (rev == 0) {
this.transfType=2;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wavelet transformation and " + "component transformation" + " not coherent in tile" + this.tIdx ]);
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
