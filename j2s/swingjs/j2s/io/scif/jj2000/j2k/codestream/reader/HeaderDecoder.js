(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),p$1={},I$=[[0,'java.awt.Point','io.scif.jj2000.j2k.quantization.dequantizer.StdDequantizer','io.scif.jj2000.j2k.NotImplementedError','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterFloatLift9x7','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterIntLift5x3','io.scif.jj2000.j2k.util.FacilityManager','Error','io.scif.jj2000.j2k.decoder.DecoderSpecs','io.scif.jj2000.j2k.quantization.dequantizer.StdDequantizerParams','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilter','java.util.Vector','io.scif.jj2000.j2k.roi.MaxShiftSpec','java.util.Hashtable','java.io.ByteArrayInputStream','java.io.DataInputStream','io.scif.jj2000.j2k.entropy.decoder.StdEntropyDecoder','io.scif.jj2000.j2k.roi.ROIDeScaler','java.io.ByteArrayOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HeaderDecoder", null, null, ['io.scif.jj2000.j2k.codestream.ProgressionType', 'io.scif.jj2000.j2k.codestream.Markers', 'io.scif.jj2000.j2k.entropy.StdEntropyCoderOptions']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=null;
}

Clazz.newMeth(C$, '$init$', function () {
this.hdStr="";
this.nfMarkSeg=0;
this.nCOCMarkSeg=0;
this.nQCCMarkSeg=0;
this.nCOMMarkSeg=0;
this.nRGNMarkSeg=0;
this.nPPMMarkSeg=0;
this.nPPTMarkSeg=null;
this.ht=null;
this.cb0x=-1;
this.cb0y=-1;
}, 1);

C$.$fields$=[['Z',['precinctPartitionIsUsed'],'I',['nTiles','nfMarkSeg','nCOCMarkSeg','nQCCMarkSeg','nCOMMarkSeg','nRGNMarkSeg','nPPMMarkSeg','nComp','cb0x','cb0y','mainHeadOff'],'S',['hdStr'],'O',['hi','io.scif.jj2000.j2k.codestream.HeaderInfo','j2krparam','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReadParamJava','nTileParts','int[]','nPPTMarkSeg','int[][]','ht','java.util.Hashtable','decSpec','io.scif.jj2000.j2k.decoder.DecoderSpecs','tileOfTileParts','java.util.Vector','pPMMarkerData','byte[][]','tilePartPkdPktHeaders','byte[][][][]','pkdPktHeaders','java.io.ByteArrayOutputStream[]']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'getMaxCompImgHeight$', function () {
return this.hi.siz.getMaxCompHeight$();
});

Clazz.newMeth(C$, 'getMaxCompImgWidth$', function () {
return this.hi.siz.getMaxCompWidth$();
});

Clazz.newMeth(C$, 'getImgWidth$', function () {
return this.hi.siz.xsiz - this.hi.siz.x0siz;
});

Clazz.newMeth(C$, 'getImgHeight$', function () {
return this.hi.siz.ysiz - this.hi.siz.y0siz;
});

Clazz.newMeth(C$, 'getImgULX$', function () {
return this.hi.siz.x0siz;
});

Clazz.newMeth(C$, 'getImgULY$', function () {
return this.hi.siz.y0siz;
});

Clazz.newMeth(C$, 'getNomTileWidth$', function () {
return this.hi.siz.xtsiz;
});

Clazz.newMeth(C$, 'getNomTileHeight$', function () {
return this.hi.siz.ytsiz;
});

Clazz.newMeth(C$, 'getTilingOrigin$java_awt_Point', function (co) {
if (co != null ) {
co.x=this.hi.siz.xt0siz;
co.y=this.hi.siz.yt0siz;
return co;
} else {
return Clazz.new_($I$(1,1).c$$I$I,[this.hi.siz.xt0siz, this.hi.siz.yt0siz]);
}});

Clazz.newMeth(C$, 'isOriginalSigned$I', function (c) {
return this.hi.siz.isOrigSigned$I(c);
});

Clazz.newMeth(C$, 'getOriginalBitDepth$I', function (c) {
return this.hi.siz.getOrigBitDepth$I(c);
});

Clazz.newMeth(C$, 'getNumComps$', function () {
return this.nComp;
});

Clazz.newMeth(C$, 'getCompSubsX$I', function (c) {
return this.hi.siz.xrsiz[c];
});

Clazz.newMeth(C$, 'getCompSubsY$I', function (c) {
return this.hi.siz.yrsiz[c];
});

Clazz.newMeth(C$, 'createDequantizer$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$IA$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (src, rb, decSpec2) {
return Clazz.new_($I$(2,1).c$$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$IA$io_scif_jj2000_j2k_decoder_DecoderSpecs,[src, rb, decSpec2]);
});

Clazz.newMeth(C$, 'getCbULX$', function () {
return this.cb0x;
});

Clazz.newMeth(C$, 'getCbULY$', function () {
return this.cb0y;
});

Clazz.newMeth(C$, 'getPPX$I$I$I', function (t, c, rl) {
return this.decSpec.pss.getPPX$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'getPPY$I$I$I', function (t, c, rl) {
return this.decSpec.pss.getPPY$I$I$I(t, c, rl);
});

Clazz.newMeth(C$, 'precinctPartitionUsed$', function () {
return this.precinctPartitionIsUsed;
});

Clazz.newMeth(C$, 'readFilter$java_io_DataInputStream$IA', function (ehs, filtIdx) {
var kid;
kid=filtIdx[0]=ehs.readUnsignedByte$();
if (kid >= (128)) {
throw Clazz.new_($I$(3,1).c$$S,["Custom filters not supported"]);
}switch (kid) {
case 0:
return Clazz.new_($I$(4,1));
case 1:
return Clazz.new_($I$(5,1));
default:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Specified wavelet filter not JPEG 2000 part I compliant"]);
}
}, p$1);

Clazz.newMeth(C$, 'checkMarkerLength$java_io_DataInputStream$S', function (ehs, str) {
if (ehs.available$() != 0) {
$I$(6).getMsgLogger$().printmsg$I$S(2, str + " length was short, attempting to resync.");
}});

Clazz.newMeth(C$, 'readSIZ$java_io_DataInputStream', function (ehs) {
var ms=this.hi.getNewSIZ$();
this.hi.siz=ms;
ms.lsiz=ehs.readUnsignedShort$();
ms.rsiz=ehs.readUnsignedShort$();
if (ms.rsiz > 2) {
throw Clazz.new_($I$(7,1).c$$S,["Codestream capabiities not JPEG 2000 - Part I compliant"]);
}ms.xsiz=ehs.readInt$();
ms.ysiz=ehs.readInt$();
if (ms.xsiz <= 0 || ms.ysiz <= 0 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["JJ2000 does not support images whose width and/or height not in the range: 1 -- (2^31)-1"]);
}ms.x0siz=ehs.readInt$();
ms.y0siz=ehs.readInt$();
if (ms.x0siz < 0 || ms.y0siz < 0 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["JJ2000 does not support images offset not in the range: 0 -- (2^31)-1"]);
}ms.xtsiz=ehs.readInt$();
ms.ytsiz=ehs.readInt$();
if (ms.xtsiz <= 0 || ms.ytsiz <= 0 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["JJ2000 does not support tiles whose width and/or height are not in  the range: 1 -- (2^31)-1"]);
}ms.xt0siz=ehs.readInt$();
ms.yt0siz=ehs.readInt$();
if (ms.xt0siz < 0 || ms.yt0siz < 0 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["JJ2000 does not support tiles whose offset is not in  the range: 0 -- (2^31)-1"]);
}this.nComp=ms.csiz=ehs.readUnsignedShort$();
if (this.nComp < 1 || this.nComp > 16384 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of component out of " + "range 1--16384: " + this.nComp ]);
}ms.ssiz=Clazz.array(Integer.TYPE, [this.nComp]);
ms.xrsiz=Clazz.array(Integer.TYPE, [this.nComp]);
ms.yrsiz=Clazz.array(Integer.TYPE, [this.nComp]);
for (var i=0; i < this.nComp; i++) {
ms.ssiz[i]=ehs.readUnsignedByte$();
ms.xrsiz[i]=ehs.readUnsignedByte$();
ms.yrsiz[i]=ehs.readUnsignedByte$();
}
this.checkMarkerLength$java_io_DataInputStream$S(ehs, "SIZ marker");
this.nTiles=ms.getNumTiles$();
this.decSpec=Clazz.new_($I$(8,1).c$$I$I,[this.nTiles, this.nComp]);
}, p$1);

Clazz.newMeth(C$, 'readCRG$java_io_DataInputStream', function (ehs) {
var ms=this.hi.getNewCRG$();
this.hi.crg=ms;
ms.lcrg=ehs.readUnsignedShort$();
ms.xcrg=Clazz.array(Integer.TYPE, [this.nComp]);
ms.ycrg=Clazz.array(Integer.TYPE, [this.nComp]);
$I$(6).getMsgLogger$().printmsg$I$S(2, "Information in CRG marker segment not taken into account. This may affect the display of the decoded image.");
for (var c=0; c < this.nComp; c++) {
ms.xcrg[c]=ehs.readUnsignedShort$();
ms.ycrg[c]=ehs.readUnsignedShort$();
}
this.checkMarkerLength$java_io_DataInputStream$S(ehs, "CRG marker");
}, p$1);

Clazz.newMeth(C$, 'readCOM$java_io_DataInputStream$Z$I$I', function (ehs, mainh, tileIdx, comIdx) {
var ms=this.hi.getNewCOM$();
ms.lcom=ehs.readUnsignedShort$();
ms.rcom=ehs.readUnsignedShort$();
switch (ms.rcom) {
case 1:
ms.ccom=Clazz.array(Byte.TYPE, [ms.lcom - 4]);
for (var i=0; i < ms.lcom - 4; i++) {
ms.ccom[i]=(ehs.readByte$()|0);
}
break;
default:
$I$(6).getMsgLogger$().printmsg$I$S(2, "COM marker registered as 0x" + Integer.toHexString$I(ms.rcom) + " unknown, ignoring (this might crash the " + "decoder or decode a quality degraded or even " + "useless image)" );
ehs.skipBytes$I(ms.lcom - 4);
break;
}
if (mainh) {
this.hi.com.put$TK$TV("main_" + comIdx, ms);
} else {
this.hi.com.put$TK$TV("t" + tileIdx + "_" + comIdx , ms);
}this.checkMarkerLength$java_io_DataInputStream$S(ehs, "COM marker");
}, p$1);

Clazz.newMeth(C$, 'readQCD$java_io_DataInputStream$Z$I$I', function (ehs, mainh, tileIdx, tpIdx) {
var qParms;
var guardBits;
var exp;
var nStep=null;
var ms=this.hi.getNewQCD$();
ms.lqcd=ehs.readUnsignedShort$();
ms.sqcd=ehs.readUnsignedByte$();
guardBits=ms.getNumGuardBits$();
var qType=ms.getQuantType$();
if (mainh) {
this.hi.qcd.put$TK$TV("main", ms);
switch (qType) {
case 0:
this.decSpec.qts.setDefault$O("reversible");
break;
case 1:
this.decSpec.qts.setDefault$O("derived");
break;
case 2:
this.decSpec.qts.setDefault$O("expounded");
break;
default:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Unknown or unsupported quantization style in Sqcd field, QCD marker main header"]);
}
} else {
this.hi.qcd.put$TK$TV("t" + tileIdx, ms);
switch (qType) {
case 0:
this.decSpec.qts.setTileDef$I$O(tileIdx, "reversible");
break;
case 1:
this.decSpec.qts.setTileDef$I$O(tileIdx, "derived");
break;
case 2:
this.decSpec.qts.setTileDef$I$O(tileIdx, "expounded");
break;
default:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Unknown or unsupported quantization style in Sqcd field, QCD marker, tile header"]);
}
}qParms=Clazz.new_($I$(9,1));
if (qType == 0) {
var maxrl=(mainh ? (this.decSpec.dls.getDefault$()).intValue$() : (this.decSpec.dls.getTileDef$I(tileIdx)).intValue$());
var i;
var j;
var rl;
var minb;
var maxb;
var hpd;
var tmp;
exp=qParms.exp=Clazz.array(Integer.TYPE, [maxrl + 1, null]);
ms.spqcd=Clazz.array(Integer.TYPE, [maxrl + 1, 4]);
for (rl=0; rl <= maxrl; rl++) {
if (rl == 0) {
minb=0;
maxb=1;
} else {
hpd=1;
if (hpd > maxrl - rl) {
hpd-=maxrl - rl;
} else {
hpd=1;
}minb=1 << ((hpd - 1) << 1);
maxb=1 << (hpd << 1);
}exp[rl]=Clazz.array(Integer.TYPE, [maxb]);
for (j=minb; j < maxb; j++) {
tmp=ms.spqcd[rl][j]=ehs.readUnsignedByte$();
exp[rl][j]=(tmp >> 3) & 31;
}
}
} else {
var maxrl=(qType == 1) ? 0 : (mainh ? (this.decSpec.dls.getDefault$()).intValue$() : (this.decSpec.dls.getTileDef$I(tileIdx)).intValue$());
var i;
var j;
var rl;
var minb;
var maxb;
var hpd;
var tmp;
exp=qParms.exp=Clazz.array(Integer.TYPE, [maxrl + 1, null]);
nStep=qParms.nStep=Clazz.array(Float.TYPE, [maxrl + 1, null]);
ms.spqcd=Clazz.array(Integer.TYPE, [maxrl + 1, 4]);
for (rl=0; rl <= maxrl; rl++) {
if (rl == 0) {
minb=0;
maxb=1;
} else {
hpd=1;
if (hpd > maxrl - rl) {
hpd-=maxrl - rl;
} else {
hpd=1;
}minb=1 << ((hpd - 1) << 1);
maxb=1 << (hpd << 1);
}exp[rl]=Clazz.array(Integer.TYPE, [maxb]);
nStep[rl]=Clazz.array(Float.TYPE, [maxb]);
for (j=minb; j < maxb; j++) {
tmp=ms.spqcd[rl][j]=ehs.readUnsignedShort$();
exp[rl][j]=(tmp >> 11) & 31;
nStep[rl][j]=(-1.0 - ((tmp & 2047)) / (2048)) / (-1 << exp[rl][j]);
}
}
}if (mainh) {
this.decSpec.qsss.setDefault$O(qParms);
this.decSpec.gbs.setDefault$O( new Integer(guardBits));
} else {
this.decSpec.qsss.setTileDef$I$O(tileIdx, qParms);
this.decSpec.gbs.setTileDef$I$O(tileIdx,  new Integer(guardBits));
}this.checkMarkerLength$java_io_DataInputStream$S(ehs, "QCD marker");
}, p$1);

Clazz.newMeth(C$, 'readQCC$java_io_DataInputStream$Z$I$I', function (ehs, mainh, tileIdx, tpIdx) {
var cComp;
var tmp;
var qParms;
var expC;
var nStepC=null;
var ms=this.hi.getNewQCC$();
ms.lqcc=ehs.readUnsignedShort$();
if (this.nComp < 257) {
cComp=ms.cqcc=ehs.readUnsignedByte$();
} else {
cComp=ms.cqcc=ehs.readUnsignedShort$();
}if (cComp >= this.nComp) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Invalid component index in QCC marker"]);
}ms.sqcc=ehs.readUnsignedByte$();
var guardBits=ms.getNumGuardBits$();
var qType=ms.getQuantType$();
if (mainh) {
this.hi.qcc.put$TK$TV("main_c" + cComp, ms);
switch (qType) {
case 0:
this.decSpec.qts.setCompDef$I$O(cComp, "reversible");
break;
case 1:
this.decSpec.qts.setCompDef$I$O(cComp, "derived");
break;
case 2:
this.decSpec.qts.setCompDef$I$O(cComp, "expounded");
break;
default:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Unknown or unsupported quantization style in Sqcd field, QCD marker, main header"]);
}
} else {
this.hi.qcc.put$TK$TV("t" + tileIdx + "_c" + cComp , ms);
switch (qType) {
case 0:
this.decSpec.qts.setTileCompVal$I$I$O(tileIdx, cComp, "reversible");
break;
case 1:
this.decSpec.qts.setTileCompVal$I$I$O(tileIdx, cComp, "derived");
break;
case 2:
this.decSpec.qts.setTileCompVal$I$I$O(tileIdx, cComp, "expounded");
break;
default:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Unknown or unsupported quantization style in Sqcd field, QCD marker, main header"]);
}
}qParms=Clazz.new_($I$(9,1));
if (qType == 0) {
var maxrl=(mainh ? (this.decSpec.dls.getCompDef$I(cComp)).intValue$() : (this.decSpec.dls.getTileCompVal$I$I(tileIdx, cComp)).intValue$());
var i;
var j;
var rl;
var minb;
var maxb;
var hpd;
expC=qParms.exp=Clazz.array(Integer.TYPE, [maxrl + 1, null]);
ms.spqcc=Clazz.array(Integer.TYPE, [maxrl + 1, 4]);
for (rl=0; rl <= maxrl; rl++) {
if (rl == 0) {
minb=0;
maxb=1;
} else {
hpd=1;
if (hpd > maxrl - rl) {
hpd-=maxrl - rl;
} else {
hpd=1;
}minb=1 << ((hpd - 1) << 1);
maxb=1 << (hpd << 1);
}expC[rl]=Clazz.array(Integer.TYPE, [maxb]);
for (j=minb; j < maxb; j++) {
tmp=ms.spqcc[rl][j]=ehs.readUnsignedByte$();
expC[rl][j]=(tmp >> 3) & 31;
}
}
} else {
var maxrl=(qType == 1) ? 0 : (mainh ? (this.decSpec.dls.getCompDef$I(cComp)).intValue$() : (this.decSpec.dls.getTileCompVal$I$I(tileIdx, cComp)).intValue$());
var i;
var j;
var rl;
var minb;
var maxb;
var hpd;
nStepC=qParms.nStep=Clazz.array(Float.TYPE, [maxrl + 1, null]);
expC=qParms.exp=Clazz.array(Integer.TYPE, [maxrl + 1, null]);
ms.spqcc=Clazz.array(Integer.TYPE, [maxrl + 1, 4]);
for (rl=0; rl <= maxrl; rl++) {
if (rl == 0) {
minb=0;
maxb=1;
} else {
hpd=1;
if (hpd > maxrl - rl) {
hpd-=maxrl - rl;
} else {
hpd=1;
}minb=1 << ((hpd - 1) << 1);
maxb=1 << (hpd << 1);
}expC[rl]=Clazz.array(Integer.TYPE, [maxb]);
nStepC[rl]=Clazz.array(Float.TYPE, [maxb]);
for (j=minb; j < maxb; j++) {
tmp=ms.spqcc[rl][j]=ehs.readUnsignedShort$();
expC[rl][j]=(tmp >> 11) & 31;
nStepC[rl][j]=(-1.0 - ((tmp & 2047)) / (2048)) / (-1 << expC[rl][j]);
}
}
}if (mainh) {
this.decSpec.qsss.setCompDef$I$O(cComp, qParms);
this.decSpec.gbs.setCompDef$I$O(cComp,  new Integer(guardBits));
} else {
this.decSpec.qsss.setTileCompVal$I$I$O(tileIdx, cComp, qParms);
this.decSpec.gbs.setTileCompVal$I$I$O(tileIdx, cComp,  new Integer(guardBits));
}this.checkMarkerLength$java_io_DataInputStream$S(ehs, "QCC marker");
}, p$1);

Clazz.newMeth(C$, 'readCOD$java_io_DataInputStream$Z$I$I', function (ehs, mainh, tileIdx, tpIdx) {
var cstyle;
var hfilters;
var vfilters;
var l;
var cblk;
var errMsg;
var sopUsed=false;
var ephUsed=false;
var ms=this.hi.getNewCOD$();
ms.lcod=ehs.readUnsignedShort$();
cstyle=ms.scod=ehs.readUnsignedByte$();
if ((cstyle & 1) != 0) {
this.precinctPartitionIsUsed=true;
cstyle&=~(1);
} else {
this.precinctPartitionIsUsed=false;
}if (mainh) {
this.hi.cod.put$TK$TV("main", ms);
if ((cstyle & 2) != 0) {
this.decSpec.sops.setDefault$O( Boolean.from("true"));
sopUsed=true;
cstyle&=~(2);
} else {
this.decSpec.sops.setDefault$O( Boolean.from("false"));
}} else {
this.hi.cod.put$TK$TV("t" + tileIdx, ms);
if ((cstyle & 2) != 0) {
this.decSpec.sops.setTileDef$I$O(tileIdx,  Boolean.from("true"));
sopUsed=true;
cstyle&=~(2);
} else {
this.decSpec.sops.setTileDef$I$O(tileIdx,  Boolean.from("false"));
}}if (mainh) {
if ((cstyle & 4) != 0) {
this.decSpec.ephs.setDefault$O( Boolean.from("true"));
ephUsed=true;
cstyle&=~(4);
} else {
this.decSpec.ephs.setDefault$O( Boolean.from("false"));
}} else {
if ((cstyle & 4) != 0) {
this.decSpec.ephs.setTileDef$I$O(tileIdx,  Boolean.from("true"));
ephUsed=true;
cstyle&=~(4);
} else {
this.decSpec.ephs.setTileDef$I$O(tileIdx,  Boolean.from("false"));
}}if ((cstyle & (24)) != 0) {
$I$(6).getMsgLogger$().printmsg$I$S(2, "Code-block partition origin different from (0,0). This is defined in JPEG 2000 part 2 and may not be supported by all JPEG 2000 decoders.");
}if ((cstyle & 8) != 0) {
if (this.cb0x != -1 && this.cb0x == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Code-block partition origin redefined in new COD marker segment. Not supported by JJ2000"]);
}this.cb0x=1;
cstyle&=~(8);
} else {
if (this.cb0x != -1 && this.cb0x == 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Code-block partition origin redefined in new COD marker segment. Not supported by JJ2000"]);
}this.cb0x=0;
}if ((cstyle & 16) != 0) {
if (this.cb0y != -1 && this.cb0y == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Code-block partition origin redefined in new COD marker segment. Not supported by JJ2000"]);
}this.cb0y=1;
cstyle&=~(16);
} else {
if (this.cb0y != -1 && this.cb0y == 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Code-block partition origin redefined in new COD marker segment. Not supported by JJ2000"]);
}this.cb0y=0;
}ms.sgcod_po=ehs.readUnsignedByte$();
ms.sgcod_nl=ehs.readUnsignedShort$();
if (ms.sgcod_nl <= 0 || ms.sgcod_nl > 65535 ) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Number of layers out of range: 1--65535"]);
}ms.sgcod_mct=ehs.readUnsignedByte$();
var mrl=ms.spcod_ndl=ehs.readUnsignedByte$();
if (mrl > 32) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Number of decomposition levels out of range: 0--32"]);
}cblk=Clazz.array(Integer, [2]);
ms.spcod_cw=ehs.readUnsignedByte$();
cblk[0]= new Integer(1 << (ms.spcod_cw + 2));
if (cblk[0].intValue$() < 4 || cblk[0].intValue$() > 1024 ) {
errMsg="Non-valid code-block width in SPcod field, COD marker";
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,[errMsg]);
}ms.spcod_ch=ehs.readUnsignedByte$();
cblk[1]= new Integer(1 << (ms.spcod_ch + 2));
if (cblk[1].intValue$() < 4 || cblk[1].intValue$() > 1024 ) {
errMsg="Non-valid code-block height in SPcod field, COD marker";
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,[errMsg]);
}if ((cblk[0].intValue$() * cblk[1].intValue$()) > 4096) {
errMsg="Non-valid code-block area in SPcod field, COD marker";
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,[errMsg]);
}if (mainh) {
this.decSpec.cblks.setDefault$O(cblk);
} else {
this.decSpec.cblks.setTileDef$I$O(tileIdx, cblk);
}var ecOptions=ms.spcod_cs=ehs.readUnsignedByte$();
if ((ecOptions & ~(63)) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Unknown \"code-block " + "style\" in SPcod field, " + "COD marker: 0x" + Integer.toHexString$I(ecOptions) ]);
}hfilters=Clazz.array($I$(10), [1]);
vfilters=Clazz.array($I$(10), [1]);
hfilters[0]=p$1.readFilter$java_io_DataInputStream$IA.apply(this, [ehs, ms.spcod_t]);
vfilters[0]=hfilters[0];
var hvfilters=Clazz.array($I$(10), [2, null]);
hvfilters[0]=hfilters;
hvfilters[1]=vfilters;
var v=Clazz.array($I$(11), [2]);
v[0]=Clazz.new_($I$(11,1));
v[1]=Clazz.new_($I$(11,1));
var val=65535;
if (!this.precinctPartitionIsUsed) {
var w;
var h;
w= new Integer(1 << (val & 15));
v[0].addElement$TE(w);
h= new Integer(1 << (((val & 240) >> 4)));
v[1].addElement$TE(h);
} else {
ms.spcod_ps=Clazz.array(Integer.TYPE, [mrl + 1]);
for (var rl=mrl; rl >= 0; rl--) {
var w;
var h;
val=ms.spcod_ps[mrl - rl]=ehs.readUnsignedByte$();
w= new Integer(1 << (val & 15));
v[0].insertElementAt$TE$I(w, 0);
h= new Integer(1 << (((val & 240) >> 4)));
v[1].insertElementAt$TE$I(h, 0);
}
}if (mainh) {
this.decSpec.pss.setDefault$O(v);
} else {
this.decSpec.pss.setTileDef$I$O(tileIdx, v);
}this.precinctPartitionIsUsed=true;
this.checkMarkerLength$java_io_DataInputStream$S(ehs, "COD marker");
if (mainh) {
this.decSpec.wfs.setDefault$O(hvfilters);
this.decSpec.dls.setDefault$O( new Integer(mrl));
this.decSpec.ecopts.setDefault$O( new Integer(ecOptions));
this.decSpec.cts.setDefault$O( new Integer(ms.sgcod_mct));
this.decSpec.nls.setDefault$O( new Integer(ms.sgcod_nl));
this.decSpec.pos.setDefault$O( new Integer(ms.sgcod_po));
} else {
this.decSpec.wfs.setTileDef$I$O(tileIdx, hvfilters);
this.decSpec.dls.setTileDef$I$O(tileIdx,  new Integer(mrl));
this.decSpec.ecopts.setTileDef$I$O(tileIdx,  new Integer(ecOptions));
this.decSpec.cts.setTileDef$I$O(tileIdx,  new Integer(ms.sgcod_mct));
this.decSpec.nls.setTileDef$I$O(tileIdx,  new Integer(ms.sgcod_nl));
this.decSpec.pos.setTileDef$I$O(tileIdx,  new Integer(ms.sgcod_po));
}}, p$1);

Clazz.newMeth(C$, 'readCOC$java_io_DataInputStream$Z$I$I', function (ehs, mainh, tileIdx, tpIdx) {
var cComp;
var hfilters;
var vfilters;
var tmp;
var l;
var ecOptions;
var cblk;
var errMsg;
var ms=this.hi.getNewCOC$();
ms.lcoc=ehs.readUnsignedShort$();
if (this.nComp < 257) {
cComp=ms.ccoc=ehs.readUnsignedByte$();
} else {
cComp=ms.ccoc=ehs.readUnsignedShort$();
}if (cComp >= this.nComp) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Invalid component index in QCC marker"]);
}var cstyle=ms.scoc=ehs.readUnsignedByte$();
if ((cstyle & 1) != 0) {
this.precinctPartitionIsUsed=true;
cstyle&=~(1);
} else {
this.precinctPartitionIsUsed=false;
}var mrl=ms.spcoc_ndl=ehs.readUnsignedByte$();
cblk=Clazz.array(Integer, [2]);
ms.spcoc_cw=ehs.readUnsignedByte$();
cblk[0]= new Integer(1 << (ms.spcoc_cw + 2));
if (cblk[0].intValue$() < 4 || cblk[0].intValue$() > 1024 ) {
errMsg="Non-valid code-block width in SPcod field, COC marker";
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,[errMsg]);
}ms.spcoc_ch=ehs.readUnsignedByte$();
cblk[1]= new Integer(1 << (ms.spcoc_ch + 2));
if (cblk[1].intValue$() < 4 || cblk[1].intValue$() > 1024 ) {
errMsg="Non-valid code-block height in SPcod field, COC marker";
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,[errMsg]);
}if ((cblk[0].intValue$() * cblk[1].intValue$()) > 4096) {
errMsg="Non-valid code-block area in SPcod field, COC marker";
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,[errMsg]);
}if (mainh) {
this.decSpec.cblks.setCompDef$I$O(cComp, cblk);
} else {
this.decSpec.cblks.setTileCompVal$I$I$O(tileIdx, cComp, cblk);
}ecOptions=ms.spcoc_cs=ehs.readUnsignedByte$();
if ((ecOptions & ~(63)) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Unknown \"code-block " + "context\" in SPcoc field, " + "COC marker: 0x" + Integer.toHexString$I(ecOptions) ]);
}hfilters=Clazz.array($I$(10), [1]);
vfilters=Clazz.array($I$(10), [1]);
hfilters[0]=p$1.readFilter$java_io_DataInputStream$IA.apply(this, [ehs, ms.spcoc_t]);
vfilters[0]=hfilters[0];
var hvfilters=Clazz.array($I$(10), [2, null]);
hvfilters[0]=hfilters;
hvfilters[1]=vfilters;
var v=Clazz.array($I$(11), [2]);
v[0]=Clazz.new_($I$(11,1));
v[1]=Clazz.new_($I$(11,1));
var val=65535;
if (!this.precinctPartitionIsUsed) {
var w;
var h;
w= new Integer(1 << (val & 15));
v[0].addElement$TE(w);
h= new Integer(1 << (((val & 240) >> 4)));
v[1].addElement$TE(h);
} else {
ms.spcoc_ps=Clazz.array(Integer.TYPE, [mrl + 1]);
for (var rl=mrl; rl >= 0; rl--) {
var w;
var h;
val=ms.spcoc_ps[rl]=ehs.readUnsignedByte$();
w= new Integer(1 << (val & 15));
v[0].insertElementAt$TE$I(w, 0);
h= new Integer(1 << (((val & 240) >> 4)));
v[1].insertElementAt$TE$I(h, 0);
}
}if (mainh) {
this.decSpec.pss.setCompDef$I$O(cComp, v);
} else {
this.decSpec.pss.setTileCompVal$I$I$O(tileIdx, cComp, v);
}this.precinctPartitionIsUsed=true;
this.checkMarkerLength$java_io_DataInputStream$S(ehs, "COD marker");
if (mainh) {
this.hi.coc.put$TK$TV("main_c" + cComp, ms);
this.decSpec.wfs.setCompDef$I$O(cComp, hvfilters);
this.decSpec.dls.setCompDef$I$O(cComp,  new Integer(mrl));
this.decSpec.ecopts.setCompDef$I$O(cComp,  new Integer(ecOptions));
} else {
this.hi.coc.put$TK$TV("t" + tileIdx + "_c" + cComp , ms);
this.decSpec.wfs.setTileCompVal$I$I$O(tileIdx, cComp, hvfilters);
this.decSpec.dls.setTileCompVal$I$I$O(tileIdx, cComp,  new Integer(mrl));
this.decSpec.ecopts.setTileCompVal$I$I$O(tileIdx, cComp,  new Integer(ecOptions));
}}, p$1);

Clazz.newMeth(C$, 'readPOC$java_io_DataInputStream$Z$I$I', function (ehs, mainh, t, tpIdx) {
var useShort=(this.nComp >= 256) ? true : false;
var tmp;
var nOldChg=0;
var ms;
if (mainh || this.hi.poc.get$O("t" + t) == null  ) {
ms=this.hi.getNewPOC$();
} else {
ms=this.hi.poc.get$O("t" + t);
nOldChg=ms.rspoc.length;
}ms.lpoc=ehs.readUnsignedShort$();
var newChg=((ms.lpoc - 2)/(5 + (useShort ? 4 : 2))|0);
var ntotChg=nOldChg + newChg;
var change;
if (nOldChg != 0) {
change=Clazz.array(Integer.TYPE, [ntotChg, 6]);
var tmprspoc=Clazz.array(Integer.TYPE, [ntotChg]);
var tmpcspoc=Clazz.array(Integer.TYPE, [ntotChg]);
var tmplyepoc=Clazz.array(Integer.TYPE, [ntotChg]);
var tmprepoc=Clazz.array(Integer.TYPE, [ntotChg]);
var tmpcepoc=Clazz.array(Integer.TYPE, [ntotChg]);
var tmpppoc=Clazz.array(Integer.TYPE, [ntotChg]);
var prevChg=this.decSpec.pcs.getTileDef$I(t);
for (var chg=0; chg < nOldChg; chg++) {
change[chg]=prevChg[chg];
tmprspoc[chg]=ms.rspoc[chg];
tmpcspoc[chg]=ms.cspoc[chg];
tmplyepoc[chg]=ms.lyepoc[chg];
tmprepoc[chg]=ms.repoc[chg];
tmpcepoc[chg]=ms.cepoc[chg];
tmpppoc[chg]=ms.ppoc[chg];
}
ms.rspoc=tmprspoc;
ms.cspoc=tmpcspoc;
ms.lyepoc=tmplyepoc;
ms.repoc=tmprepoc;
ms.cepoc=tmpcepoc;
ms.ppoc=tmpppoc;
} else {
change=Clazz.array(Integer.TYPE, [newChg, 6]);
ms.rspoc=Clazz.array(Integer.TYPE, [newChg]);
ms.cspoc=Clazz.array(Integer.TYPE, [newChg]);
ms.lyepoc=Clazz.array(Integer.TYPE, [newChg]);
ms.repoc=Clazz.array(Integer.TYPE, [newChg]);
ms.cepoc=Clazz.array(Integer.TYPE, [newChg]);
ms.ppoc=Clazz.array(Integer.TYPE, [newChg]);
}for (var chg=nOldChg; chg < ntotChg; chg++) {
change[chg][0]=ms.rspoc[chg]=ehs.readUnsignedByte$();
if (useShort) {
change[chg][1]=ms.cspoc[chg]=ehs.readUnsignedShort$();
} else {
change[chg][1]=ms.cspoc[chg]=ehs.readUnsignedByte$();
}change[chg][2]=ms.lyepoc[chg]=ehs.readUnsignedShort$();
if (change[chg][2] < 1) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["LYEpoc value must be greater than 1 in POC marker segment of tile " + t + ", tile-part " + tpIdx ]);
}change[chg][3]=ms.repoc[chg]=ehs.readUnsignedByte$();
if (change[chg][3] <= change[chg][0]) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["REpoc value must be greater than RSpoc in POC marker segment of tile " + t + ", tile-part " + tpIdx ]);
}if (useShort) {
change[chg][4]=ms.cepoc[chg]=ehs.readUnsignedShort$();
} else {
tmp=ms.cepoc[chg]=ehs.readUnsignedByte$();
if (tmp == 0) {
change[chg][4]=0;
} else {
change[chg][4]=tmp;
}}if (change[chg][4] <= change[chg][1]) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["CEpoc value must be greater than CSpoc in POC marker segment of tile " + t + ", tile-part " + tpIdx ]);
}change[chg][5]=ms.ppoc[chg]=ehs.readUnsignedByte$();
}
this.checkMarkerLength$java_io_DataInputStream$S(ehs, "POC marker");
if (mainh) {
this.hi.poc.put$TK$TV("main", ms);
this.decSpec.pcs.setDefault$O(change);
} else {
this.hi.poc.put$TK$TV("t" + t, ms);
this.decSpec.pcs.setTileDef$I$O(t, change);
}}, p$1);

Clazz.newMeth(C$, 'readTLM$java_io_DataInputStream', function (ehs) {
var length;
length=ehs.readUnsignedShort$();
ehs.skipBytes$I(length - 2);
$I$(6).getMsgLogger$().printmsg$I$S(1, "Skipping unsupported TLM marker");
}, p$1);

Clazz.newMeth(C$, 'readPLM$java_io_DataInputStream', function (ehs) {
var length;
length=ehs.readUnsignedShort$();
ehs.skipBytes$I(length - 2);
$I$(6).getMsgLogger$().printmsg$I$S(1, "Skipping unsupported PLM marker");
}, p$1);

Clazz.newMeth(C$, 'readPLTFields$java_io_DataInputStream', function (ehs) {
var length;
length=ehs.readUnsignedShort$();
ehs.skipBytes$I(length - 2);
$I$(6).getMsgLogger$().printmsg$I$S(1, "Skipping unsupported PLT marker");
}, p$1);

Clazz.newMeth(C$, 'readRGN$java_io_DataInputStream$Z$I$I', function (ehs, mainh, tileIdx, tpIdx) {
var comp;
var i;
var tempComp;
var ms=this.hi.getNewRGN$();
ms.lrgn=ehs.readUnsignedShort$();
ms.crgn=comp=(this.nComp < 257) ? ehs.readUnsignedByte$() : ehs.readUnsignedShort$();
if (comp >= this.nComp) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Invalid component " + "index in RGN marker" + comp ]);
}ms.srgn=ehs.readUnsignedByte$();
if (ms.srgn != 0) throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Unknown or unsupported Srgn parameter in ROI marker"]);
if (this.decSpec.rois == null ) {
this.decSpec.rois=Clazz.new_($I$(12,1).c$$I$I$B$S,[this.nTiles, this.nComp, ($b$[0] = 2, $b$[0]), "null"]);
}ms.sprgn=ehs.readUnsignedByte$();
if (mainh) {
this.hi.rgn.put$TK$TV("main_c" + comp, ms);
this.decSpec.rois.setCompDef$I$O(comp,  new Integer(ms.sprgn));
} else {
this.hi.rgn.put$TK$TV("t" + tileIdx + "_c" + comp , ms);
this.decSpec.rois.setTileCompVal$I$I$O(tileIdx, comp,  new Integer(ms.sprgn));
}this.checkMarkerLength$java_io_DataInputStream$S(ehs, "RGN marker");
}, p$1);

Clazz.newMeth(C$, 'readPPM$java_io_DataInputStream', function (ehs) {
var curMarkSegLen;
var i;
var indx;
var len;
var off;
var remSegLen;
var b;
if (this.pPMMarkerData == null ) {
this.pPMMarkerData=Clazz.array(Byte.TYPE, [this.nPPMMarkSeg, null]);
this.tileOfTileParts=Clazz.new_($I$(11,1));
this.decSpec.pphs.setDefault$O( Boolean.from(true));
}curMarkSegLen=ehs.readUnsignedShort$();
remSegLen=curMarkSegLen - 3;
indx=ehs.readUnsignedByte$();
this.pPMMarkerData[indx]=Clazz.array(Byte.TYPE, [remSegLen]);
ehs.read$BA$I$I(this.pPMMarkerData[indx], 0, remSegLen);
this.checkMarkerLength$java_io_DataInputStream$S(ehs, "PPM marker");
}, p$1);

Clazz.newMeth(C$, 'readPPT$java_io_DataInputStream$I$I', function (ehs, tile, tpIdx) {
var curMarkSegLen;
var indx;
var len=0;
var temp;
if (this.tilePartPkdPktHeaders == null ) {
this.tilePartPkdPktHeaders=Clazz.array(Byte.TYPE, [this.nTiles, null, null, null]);
}if (this.tilePartPkdPktHeaders[tile] == null ) {
this.tilePartPkdPktHeaders[tile]=Clazz.array(Byte.TYPE, [this.nTileParts[tile], null, null]);
}if (this.tilePartPkdPktHeaders[tile][tpIdx] == null ) {
this.tilePartPkdPktHeaders[tile][tpIdx]=Clazz.array(Byte.TYPE, [this.nPPTMarkSeg[tile][tpIdx], null]);
}curMarkSegLen=ehs.readUnsignedShort$();
indx=ehs.readUnsignedByte$();
temp=Clazz.array(Byte.TYPE, [curMarkSegLen - 3]);
ehs.read$BA(temp);
this.tilePartPkdPktHeaders[tile][tpIdx][indx]=temp;
this.checkMarkerLength$java_io_DataInputStream$S(ehs, "PPT marker");
this.decSpec.pphs.setTileDef$I$O(tile,  Boolean.from(true));
}, p$1);

Clazz.newMeth(C$, 'extractMainMarkSeg$H$io_scif_jj2000_j2k_io_RandomAccessIO', function (marker, ehs) {
if (this.nfMarkSeg == 0) {
if (marker != -175) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["First marker after " + "SOC " + "must be SIZ " + Integer.toHexString$I(marker) ]);
}}var htKey="";
if (this.ht == null ) {
this.ht=Clazz.new_($I$(13,1));
}switch (marker) {
case -175:
if ((this.nfMarkSeg & 1) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one SIZ marker segment found in main header"]);
}this.nfMarkSeg|=1;
htKey="SIZ";
break;
case -109:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["SOD found in main header"]);
case -39:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["EOC found in main header"]);
case -112:
if ((this.nfMarkSeg & 64) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one SOT marker found right after main or tile header"]);
}this.nfMarkSeg|=64;
return;
case -174:
if ((this.nfMarkSeg & 2) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one COD marker found in main header"]);
}this.nfMarkSeg|=2;
htKey="COD";
break;
case -173:
this.nfMarkSeg|=4;
htKey="COC" + (this.nCOCMarkSeg++);
break;
case -164:
if ((this.nfMarkSeg & 8) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one QCD marker found in main header"]);
}this.nfMarkSeg|=8;
htKey="QCD";
break;
case -163:
this.nfMarkSeg|=256;
htKey="QCC" + (this.nQCCMarkSeg++);
break;
case -162:
this.nfMarkSeg|=512;
htKey="RGN" + (this.nRGNMarkSeg++);
break;
case -156:
this.nfMarkSeg|=2048;
htKey="COM" + (this.nCOMMarkSeg++);
break;
case -157:
if ((this.nfMarkSeg & 65536) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one CRG marker found in main header"]);
}this.nfMarkSeg|=65536;
htKey="CRG";
break;
case -160:
this.nfMarkSeg|=16384;
htKey="PPM" + (this.nPPMMarkSeg++);
break;
case -171:
if ((this.nfMarkSeg & 16) != 0) {
$I$(6).getMsgLogger$().printmsg$I$S(1, "More than one TLM marker found in main header");
}this.nfMarkSeg|=16;
break;
case -169:
if ((this.nfMarkSeg & 32) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one PLM marker found in main header"]);
}$I$(6).getMsgLogger$().printmsg$I$S(2, "PLM marker segment found but not used by by JJ2000 decoder.");
this.nfMarkSeg|=32;
htKey="PLM";
break;
case -161:
if ((this.nfMarkSeg & 1024) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one POC marker segment found in main header"]);
}this.nfMarkSeg|=1024;
htKey="POC";
break;
case -168:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["PLT found in main header"]);
case -159:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["PPT found in main header"]);
default:
htKey="UNKNOWN";
$I$(6).getMsgLogger$().printmsg$I$S(2, "Non recognized marker segment (0x" + Integer.toHexString$I(marker) + ") in main header!" );
break;
}
if (marker < -208 || marker > -193 ) {
var markSegLen=ehs.readUnsignedShort$();
var buf=Clazz.array(Byte.TYPE, [markSegLen]);
buf[0]=((((markSegLen >> 8) & 255)|0)|0);
buf[1]=(((markSegLen & 255)|0)|0);
ehs.readFully$BA$I$I(buf, 2, markSegLen - 2);
if (!htKey.equals$O("UNKNOWN")) {
this.ht.put$TK$TV(htKey, buf);
}}}, p$1);

Clazz.newMeth(C$, 'extractTilePartMarkSeg$H$io_scif_jj2000_j2k_io_RandomAccessIO$I$I', function (marker, ehs, tileIdx, tilePartIdx) {
var htKey="";
if (this.ht == null ) {
this.ht=Clazz.new_($I$(13,1));
}switch (marker) {
case -112:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Second SOT marker segment found in tile-part header"]);
case -175:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["SIZ found in tile-part header"]);
case -39:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["EOC found in tile-part header"]);
case -171:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["TLM found in tile-part header"]);
case -160:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["PPM found in tile-part header"]);
case -174:
if ((this.nfMarkSeg & 2) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one COD marker found in tile-part header"]);
}this.nfMarkSeg|=2;
htKey="COD";
break;
case -173:
this.nfMarkSeg|=4;
htKey="COC" + (this.nCOCMarkSeg++);
break;
case -164:
if ((this.nfMarkSeg & 8) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one QCD marker found in tile-part header"]);
}this.nfMarkSeg|=8;
htKey="QCD";
break;
case -163:
this.nfMarkSeg|=256;
htKey="QCC" + (this.nQCCMarkSeg++);
break;
case -162:
this.nfMarkSeg|=512;
htKey="RGN" + (this.nRGNMarkSeg++);
break;
case -156:
this.nfMarkSeg|=2048;
htKey="COM" + (this.nCOMMarkSeg++);
break;
case -157:
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["CRG marker found in tile-part header"]);
case -159:
this.nfMarkSeg|=32768;
if (this.nPPTMarkSeg == null ) {
this.nPPTMarkSeg=Clazz.array(Integer.TYPE, [this.nTiles, null]);
}if (this.nPPTMarkSeg[tileIdx] == null ) {
this.nPPTMarkSeg[tileIdx]=Clazz.array(Integer.TYPE, [this.nTileParts[tileIdx]]);
}htKey="PPT" + (this.nPPTMarkSeg[tileIdx][tilePartIdx]++);
break;
case -109:
this.nfMarkSeg|=8192;
return;
case -161:
if ((this.nfMarkSeg & 1024) != 0) throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["More than one POC marker segment found in tile-part header"]);
this.nfMarkSeg|=1024;
htKey="POC";
break;
case -168:
if ((this.nfMarkSeg & 32) != 0) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["PLT marker found eventhough PLM marker found in main header"]);
}$I$(6).getMsgLogger$().printmsg$I$S(2, "PLT marker segment found but not used by JJ2000 decoder.");
htKey="UNKNOWN";
break;
default:
htKey="UNKNOWN";
$I$(6).getMsgLogger$().printmsg$I$S(2, "Non recognized marker segment (0x" + Integer.toHexString$I(marker) + ") in tile-part header" + " of tile " + tileIdx + " !" );
break;
}
var markSegLen=ehs.readUnsignedShort$();
var buf=Clazz.array(Byte.TYPE, [markSegLen]);
buf[0]=((((markSegLen >> 8) & 255)|0)|0);
buf[1]=(((markSegLen & 255)|0)|0);
ehs.readFully$BA$I$I(buf, 2, markSegLen - 2);
if (!htKey.equals$O("UNKNOWN")) {
this.ht.put$TK$TV(htKey, buf);
}});

Clazz.newMeth(C$, 'readFoundMainMarkSeg', function () {
var dis;
var bais;
if ((this.nfMarkSeg & 1) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("SIZ"))]);
p$1.readSIZ$java_io_DataInputStream.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais])]);
}if ((this.nfMarkSeg & 2048) != 0) {
for (var i=0; i < this.nCOMMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("COM" + i))]);
p$1.readCOM$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), true, 0, i]);
}
}if ((this.nfMarkSeg & 65536) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("CRG"))]);
p$1.readCRG$java_io_DataInputStream.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais])]);
}if ((this.nfMarkSeg & 2) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("COD"))]);
p$1.readCOD$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), true, 0, 0]);
}if ((this.nfMarkSeg & 4) != 0) {
for (var i=0; i < this.nCOCMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("COC" + i))]);
p$1.readCOC$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), true, 0, 0]);
}
}if ((this.nfMarkSeg & 512) != 0) {
for (var i=0; i < this.nRGNMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("RGN" + i))]);
p$1.readRGN$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), true, 0, 0]);
}
}if ((this.nfMarkSeg & 8) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("QCD"))]);
p$1.readQCD$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), true, 0, 0]);
}if ((this.nfMarkSeg & 256) != 0) {
for (var i=0; i < this.nQCCMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("QCC" + i))]);
p$1.readQCC$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), true, 0, 0]);
}
}if ((this.nfMarkSeg & 1024) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("POC"))]);
p$1.readPOC$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), true, 0, 0]);
}if ((this.nfMarkSeg & 16384) != 0) {
for (var i=0; i < this.nPPMMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("PPM" + i))]);
p$1.readPPM$java_io_DataInputStream.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais])]);
}
}this.ht=null;
}, p$1);

Clazz.newMeth(C$, 'readFoundTilePartMarkSeg$I$I', function (tileIdx, tpIdx) {
var dis;
var bais;
if ((this.nfMarkSeg & 2) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("COD"))]);
p$1.readCOD$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), false, tileIdx, tpIdx]);
}if ((this.nfMarkSeg & 4) != 0) {
for (var i=0; i < this.nCOCMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("COC" + i))]);
p$1.readCOC$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), false, tileIdx, tpIdx]);
}
}if ((this.nfMarkSeg & 512) != 0) {
for (var i=0; i < this.nRGNMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("RGN" + i))]);
p$1.readRGN$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), false, tileIdx, tpIdx]);
}
}if ((this.nfMarkSeg & 8) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("QCD"))]);
p$1.readQCD$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), false, tileIdx, tpIdx]);
}if ((this.nfMarkSeg & 256) != 0) {
for (var i=0; i < this.nQCCMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("QCC" + i))]);
p$1.readQCC$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), false, tileIdx, tpIdx]);
}
}if ((this.nfMarkSeg & 1024) != 0) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("POC"))]);
p$1.readPOC$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), false, tileIdx, tpIdx]);
}if ((this.nfMarkSeg & 2048) != 0) {
for (var i=0; i < this.nCOMMarkSeg; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("COM" + i))]);
p$1.readCOM$java_io_DataInputStream$Z$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), false, tileIdx, i]);
}
}if ((this.nfMarkSeg & 32768) != 0) {
for (var i=0; i < this.nPPTMarkSeg[tileIdx][tpIdx]; i++) {
bais=Clazz.new_($I$(14,1).c$$BA,[(this.ht.get$O("PPT" + i))]);
p$1.readPPT$java_io_DataInputStream$I$I.apply(this, [Clazz.new_($I$(15,1).c$$java_io_InputStream,[bais]), tileIdx, tpIdx]);
}
}this.ht=null;
});

Clazz.newMeth(C$, 'getDecoderSpecs$', function () {
return this.decSpec;
});

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_codestream_HeaderInfo', function (ehs, j2krparam, hi) {
;C$.$init$.apply(this);
this.hi=hi;
this.j2krparam=j2krparam;
this.mainHeadOff=ehs.getPos$();
if ((ehs.readShort$()) != -177) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["SOC marker segment not  found at the beginning of the codestream."]);
}this.nfMarkSeg=0;
do {
p$1.extractMainMarkSeg$H$io_scif_jj2000_j2k_io_RandomAccessIO.apply(this, [ehs.readShort$(), ehs]);
} while ((this.nfMarkSeg & 64) == 0);
ehs.seek$I(ehs.getPos$() - 2);
p$1.readFoundMainMarkSeg.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createEntropyDecoder$io_scif_jj2000_j2k_entropy_decoder_CodedCBlkDataSrcDec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava', function (src, j2krparam) {
var doer=true;
var verber=false;
var mMax=-1;
return Clazz.new_($I$(16,1).c$$io_scif_jj2000_j2k_entropy_decoder_CodedCBlkDataSrcDec$io_scif_jj2000_j2k_decoder_DecoderSpecs$Z$Z$I,[src, this.decSpec, doer, verber, mMax]);
});

Clazz.newMeth(C$, 'createROIDeScaler$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (src, j2krparam, decSpec2) {
return $I$(17).createInstance$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_jj2000_j2k_decoder_DecoderSpecs(src, j2krparam, decSpec2);
});

Clazz.newMeth(C$, 'resetHeaderMarkers$', function () {
this.nfMarkSeg=this.nfMarkSeg & (16416);
this.nCOCMarkSeg=0;
this.nQCCMarkSeg=0;
this.nCOMMarkSeg=0;
this.nRGNMarkSeg=0;
});

Clazz.newMeth(C$, 'toString', function () {
return this.hdStr;
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$, 'getNumTiles$', function () {
return this.nTiles;
});

Clazz.newMeth(C$, 'getPackedPktHead$I', function (tile) {
if (this.pkdPktHeaders == null ) {
var i;
var t;
this.pkdPktHeaders=Clazz.array($I$(18), [this.nTiles]);
for (i=this.nTiles - 1; i >= 0; i--) {
this.pkdPktHeaders[i]=Clazz.new_($I$(18,1));
}
if (this.nPPMMarkSeg != 0) {
var nppm;
var nTileParts=this.tileOfTileParts.size$();
var temp;
var pph;
var allNppmIppm=Clazz.new_($I$(18,1));
for (i=0; i < this.nPPMMarkSeg; i++) {
allNppmIppm.write$BA(this.pPMMarkerData[i]);
}
pph=Clazz.new_($I$(14,1).c$$BA,[allNppmIppm.toByteArray$()]);
for (i=0; i < nTileParts; i++) {
t=(this.tileOfTileParts.elementAt$I(i)).intValue$();
nppm=(pph.read$() << 24) | (pph.read$() << 16) | (pph.read$() << 8) | (pph.read$()) ;
temp=Clazz.array(Byte.TYPE, [nppm]);
pph.read$BA(temp);
this.pkdPktHeaders[t].write$BA(temp);
}
} else {
var tp;
for (t=this.nTiles - 1; t >= 0; t--) {
for (tp=0; tp < this.nTileParts[t]; tp++) {
for (i=0; i < this.nPPTMarkSeg[t][tp]; i++) {
this.pkdPktHeaders[t].write$BA(this.tilePartPkdPktHeaders[t][tp][i]);
}
}
}
}}return Clazz.new_($I$(14,1).c$$BA,[this.pkdPktHeaders[tile].toByteArray$()]);
});

Clazz.newMeth(C$, 'setTileOfTileParts$I', function (tile) {
if (this.nPPMMarkSeg != 0) {
this.tileOfTileParts.addElement$TE( new Integer(tile));
}});

Clazz.newMeth(C$, 'getNumFoundMarkSeg$', function () {
return this.nfMarkSeg;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
