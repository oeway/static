(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),I$=[[0,'Error','java.awt.Point','io.scif.jj2000.j2k.codestream.reader.FileBitstreamReaderAgent','io.scif.jj2000.j2k.util.MathUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BitstreamReaderAgent", null, null, 'io.scif.jj2000.j2k.entropy.decoder.CodedCBlkDataSrcDec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=null;
}

Clazz.newMeth(C$, '$init$', function () {
this.derived=null;
this.gb=null;
this.params=null;
}, 1);

C$.$fields$=[['F',['trate','arate'],'I',['nc','targetRes','imgW','imgH','ax','ay','px','py','ntW','ntH','ntX','ntY','nt','ctX','ctY','tnbytes','anbytes'],'O',['decSpec','io.scif.jj2000.j2k.decoder.DecoderSpecs','derived','boolean[]','gb','int[]','params','io.scif.jj2000.j2k.quantization.dequantizer.StdDequantizerParams[]','mdl','int[]','subbTrees','io.scif.jj2000.j2k.wavelet.synthesis.SubbandSyn[]','offX','int[]','+offY','+culx','+culy','hd','io.scif.jj2000.j2k.codestream.reader.HeaderDecoder']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (hd, decSpec) {
;C$.$init$.apply(this);
var co;
var i;
var j;
var max;
this.decSpec=decSpec;
this.hd=hd;
this.nc=hd.getNumComps$();
this.offX=Clazz.array(Integer.TYPE, [this.nc]);
this.offY=Clazz.array(Integer.TYPE, [this.nc]);
this.culx=Clazz.array(Integer.TYPE, [this.nc]);
this.culy=Clazz.array(Integer.TYPE, [this.nc]);
this.imgW=hd.getImgWidth$();
this.imgH=hd.getImgHeight$();
this.ax=hd.getImgULX$();
this.ay=hd.getImgULY$();
co=hd.getTilingOrigin$java_awt_Point(null);
this.px=co.x;
this.py=co.y;
this.ntW=hd.getNomTileWidth$();
this.ntH=hd.getNomTileHeight$();
this.ntX=((this.ax + this.imgW - this.px + this.ntW - 1)/this.ntW|0);
this.ntY=((this.ay + this.imgH - this.py + this.ntH - 1)/this.ntH|0);
this.nt=this.ntX * this.ntY;
}, 1);

Clazz.newMeth(C$, 'getCbULX$', function () {
return this.hd.getCbULX$();
});

Clazz.newMeth(C$, 'getCbULY$', function () {
return this.hd.getCbULY$();
});

Clazz.newMeth(C$, 'getNumComps$', function () {
return this.nc;
});

Clazz.newMeth(C$, 'getCompSubsX$I', function (c) {
return this.hd.getCompSubsX$I(c);
});

Clazz.newMeth(C$, 'getCompSubsY$I', function (c) {
return this.hd.getCompSubsY$I(c);
});

Clazz.newMeth(C$, 'getTileWidth$I', function (rl) {
var mindl=this.decSpec.dls.getMinInTile$I(this.getTileIdx$());
if (rl > mindl) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one component in tile: " + this.ctX + "x" + this.ctY ]);
}var ctulx;
var ntulx;
var dl=mindl - rl;
ctulx=(this.ctX == 0) ? this.ax : this.px + this.ctX * this.ntW;
ntulx=(this.ctX < this.ntX - 1) ? this.px + (this.ctX + 1) * this.ntW : this.ax + this.imgW;
dl=1 << dl;
return ((ntulx + dl - 1)/dl|0) - ((ctulx + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getTileHeight$I', function (rl) {
var mindl=this.decSpec.dls.getMinInTile$I(this.getTileIdx$());
if (rl > mindl) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one component in tile: " + this.ctX + "x" + this.ctY ]);
}var ctuly;
var ntuly;
var dl=mindl - rl;
ctuly=(this.ctY == 0) ? this.ay : this.py + this.ctY * this.ntH;
ntuly=(this.ctY < this.ntY - 1) ? this.py + (this.ctY + 1) * this.ntH : this.ay + this.imgH;
dl=1 << dl;
return ((ntuly + dl - 1)/dl|0) - ((ctuly + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getImgWidth$I', function (rl) {
var mindl=this.decSpec.dls.getMin$();
if (rl > mindl) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one tile-component"]);
}var dl=1 << mindl - rl;
return ((this.ax + this.imgW + dl  - 1)/dl|0) - ((this.ax + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getImgHeight$I', function (rl) {
var mindl=this.decSpec.dls.getMin$();
if (rl > mindl) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one tile-component"]);
}var dl=1 << mindl - rl;
return ((this.ay + this.imgH + dl  - 1)/dl|0) - ((this.ay + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getImgULX$I', function (rl) {
var mindl=this.decSpec.dls.getMin$();
if (rl > mindl) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one tile-component"]);
}var dl=1 << mindl - rl;
return ((this.ax + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getImgULY$I', function (rl) {
var mindl=this.decSpec.dls.getMin$();
if (rl > mindl) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one tile-component"]);
}var dl=1 << mindl - rl;
return ((this.ay + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getTileCompWidth$I$I$I', function (t, c, rl) {
var tIdx=this.getTileIdx$();
if (t != tIdx) {
throw Clazz.new_($I$(1,1).c$$S,["Asking the tile-component width of a tile different  from the current one."]);
}var ntulx=(this.ctX < this.ntX - 1) ? this.px + (this.ctX + 1) * this.ntW : this.ax + this.imgW;
ntulx=((ntulx + this.hd.getCompSubsX$I(c) - 1)/this.hd.getCompSubsX$I(c)|0);
var dl=1 << this.mdl[c] - rl;
return ((ntulx + dl - 1)/dl|0) - ((this.culx[c] + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getTileCompHeight$I$I$I', function (t, c, rl) {
var tIdx=this.getTileIdx$();
if (t != tIdx) {
throw Clazz.new_($I$(1,1).c$$S,["Asking the tile-component width of a tile different  from the current one."]);
}var ntuly=(this.ctY < this.ntY - 1) ? this.py + (this.ctY + 1) * this.ntH : this.ay + this.imgH;
ntuly=((ntuly + this.hd.getCompSubsY$I(c) - 1)/this.hd.getCompSubsY$I(c)|0);
var dl=1 << this.mdl[c] - rl;
return ((ntuly + dl - 1)/dl|0) - ((this.culy[c] + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getCompImgWidth$I$I', function (c, rl) {
var sx=((this.ax + this.hd.getCompSubsX$I(c) - 1)/this.hd.getCompSubsX$I(c)|0);
var ex=((this.ax + this.imgW + this.hd.getCompSubsX$I(c)  - 1)/this.hd.getCompSubsX$I(c)|0);
var dl=1 << this.decSpec.dls.getMinInComp$I(c) - rl;
return ((ex + dl - 1)/dl|0) - ((sx + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getCompImgHeight$I$I', function (c, rl) {
var sy=((this.ay + this.hd.getCompSubsY$I(c) - 1)/this.hd.getCompSubsY$I(c)|0);
var ey=((this.ay + this.imgH + this.hd.getCompSubsY$I(c)  - 1)/this.hd.getCompSubsY$I(c)|0);
var dl=1 << this.decSpec.dls.getMinInComp$I(c) - rl;
return ((ey + dl - 1)/dl|0) - ((sy + dl - 1)/dl|0);
});

Clazz.newMeth(C$, 'getTile$java_awt_Point', function (co) {
if (co != null ) {
co.x=this.ctX;
co.y=this.ctY;
return co;
} else {
return Clazz.new_($I$(2,1).c$$I$I,[this.ctX, this.ctY]);
}});

Clazz.newMeth(C$, 'getTileIdx$', function () {
return this.ctY * this.ntX + this.ctX;
});

Clazz.newMeth(C$, 'getResULX$I$I', function (c, rl) {
var dl=this.mdl[c] - rl;
if (dl < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one component in tile: " + this.ctX + "x" + this.ctY ]);
}var tx0=Math.max(this.px + this.ctX * this.ntW, this.ax);
var tcx0=(Math.ceil(tx0 / this.getCompSubsX$I(c))|0);
return (Math.ceil(tcx0 / (1 << dl))|0);
});

Clazz.newMeth(C$, 'getResULY$I$I', function (c, rl) {
var dl=this.mdl[c] - rl;
if (dl < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requested resolution level is not available for, at least, one component in tile: " + this.ctX + "x" + this.ctY ]);
}var ty0=Math.max(this.py + this.ctY * this.ntH, this.ay);
var tcy0=(Math.ceil(ty0 / this.getCompSubsY$I(c))|0);
return (Math.ceil(tcy0 / (1 << dl))|0);
});

Clazz.newMeth(C$, 'getNumTiles$java_awt_Point', function (co) {
if (co != null ) {
co.x=this.ntX;
co.y=this.ntY;
return co;
} else {
return Clazz.new_($I$(2,1).c$$I$I,[this.ntX, this.ntY]);
}});

Clazz.newMeth(C$, 'getNumTiles$', function () {
return this.ntX * this.ntY;
});

Clazz.newMeth(C$, 'getSynSubbandTree$I$I', function (t, c) {
if (t != this.getTileIdx$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not request subband tree of a different tile than the current one"]);
}if (c < 0 || c >= this.nc ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component index out of range"]);
}return this.subbTrees[c];
});

Clazz.newMeth(C$, 'createInstance$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_decoder_DecoderSpecs$Z$io_scif_jj2000_j2k_codestream_HeaderInfo', function ($in, hd, j2krparam, decSpec, cdstrInfo, hi) {
return Clazz.new_($I$(3,1).c$$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_jj2000_j2k_decoder_DecoderSpecs$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$Z$io_scif_jj2000_j2k_codestream_HeaderInfo,[hd, $in, decSpec, j2krparam, cdstrInfo, hi]);
}, 1);

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'getPPX$I$I$I', function (t, c, rl) {
return this.decSpec.pss.getPPX$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'getPPY$I$I$I', function (t, c, rl) {
return this.decSpec.pss.getPPY$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'initSubbandsFields$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn', function (c, sb) {
var t=this.getTileIdx$();
var rl=sb.resLvl;
var cbw;
var cbh;
cbw=this.decSpec.cblks.getCBlkWidth$B$I$I(($b$[0] = 3, $b$[0]), t, c);
cbh=this.decSpec.cblks.getCBlkHeight$B$I$I(($b$[0] = 3, $b$[0]), t, c);
if (!sb.isNode) {
if (this.hd.precinctPartitionUsed$()) {
var ppxExp;
var ppyExp;
var cbwExp;
var cbhExp;
ppxExp=$I$(4).log2$I(this.getPPX$I$I$I(t, c, rl));
ppyExp=$I$(4).log2$I(this.getPPY$I$I$I(t, c, rl));
cbwExp=$I$(4).log2$I(cbw);
cbhExp=$I$(4).log2$I(cbh);
switch (sb.resLvl) {
case 0:
sb.nomCBlkW=(cbwExp < ppxExp ? (1 << cbwExp) : (1 << ppxExp));
sb.nomCBlkH=(cbhExp < ppyExp ? (1 << cbhExp) : (1 << ppyExp));
break;
default:
sb.nomCBlkW=(cbwExp < ppxExp - 1 ? (1 << cbwExp) : (1 << (ppxExp - 1)));
sb.nomCBlkH=(cbhExp < ppyExp - 1 ? (1 << cbhExp) : (1 << (ppyExp - 1)));
break;
}
} else {
sb.nomCBlkW=cbw;
sb.nomCBlkH=cbh;
}if (sb.numCb == null ) sb.numCb=Clazz.new_($I$(2,1));
if (sb.w == 0 || sb.h == 0 ) {
sb.numCb.x=0;
sb.numCb.y=0;
} else {
var cb0x=this.getCbULX$();
var cb0y=this.getCbULY$();
var tmp;
var acb0x=cb0x;
var acb0y=cb0y;
switch (sb.sbandIdx) {
case 0:
break;
case 1:
acb0x=0;
break;
case 2:
acb0y=0;
break;
case 3:
acb0x=0;
acb0y=0;
break;
default:
throw Clazz.new_($I$(1,1).c$$S,["Internal JJ2000 error"]);
}
if (sb.ulcx - acb0x < 0 || sb.ulcy - acb0y < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code-blocks partition origin or image offset in the reference grid."]);
}tmp=sb.ulcx - acb0x + sb.nomCBlkW;
sb.numCb.x=((tmp + sb.w - 1)/sb.nomCBlkW|0) - ((tmp/sb.nomCBlkW|0) - 1);
tmp=sb.ulcy - acb0y + sb.nomCBlkH;
sb.numCb.y=((tmp + sb.h - 1)/sb.nomCBlkH|0) - ((tmp/sb.nomCBlkH|0) - 1);
}if (this.derived[c]) {
sb.magbits=this.gb[c] + (this.params[c].exp[0][0] - (this.mdl[c] - sb.level)) - 1;
} else {
sb.magbits=this.gb[c] + this.params[c].exp[sb.resLvl][sb.sbandIdx] - 1;
}} else {
this.initSubbandsFields$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn(c, sb.getLL$());
this.initSubbandsFields$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn(c, sb.getHL$());
this.initSubbandsFields$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn(c, sb.getLH$());
this.initSubbandsFields$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn(c, sb.getHH$());
}});

Clazz.newMeth(C$, 'getImgRes$', function () {
return this.targetRes;
});

Clazz.newMeth(C$, 'getTargetRate$', function () {
return this.trate;
});

Clazz.newMeth(C$, 'getActualRate$', function () {
this.arate=this.anbytes * 8.0 / this.hd.getMaxCompImgWidth$() / this.hd.getMaxCompImgHeight$();
return this.arate;
});

Clazz.newMeth(C$, 'getTargetNbytes$', function () {
return this.tnbytes;
});

Clazz.newMeth(C$, 'getActualNbytes$', function () {
return this.anbytes;
});

Clazz.newMeth(C$, 'getTilePartULX$', function () {
return this.hd.getTilingOrigin$java_awt_Point(null).x;
});

Clazz.newMeth(C$, 'getTilePartULY$', function () {
return this.hd.getTilingOrigin$java_awt_Point(null).y;
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.hd.getNomTileWidth$();
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.hd.getNomTileHeight$();
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
