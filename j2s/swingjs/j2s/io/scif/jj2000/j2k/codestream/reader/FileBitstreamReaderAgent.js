(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),p$1={},I$=[[0,'Error','io.scif.jj2000.j2k.codestream.reader.PktDecoder','io.scif.jj2000.j2k.util.FacilityManager','java.util.ArrayList','java.io.ByteArrayInputStream','javax.imageio.stream.MemoryCacheImageInputStream','io.scif.jj2000.j2k.NotImplementedError','io.scif.jj2000.j2k.codestream.reader.HeaderDecoder','io.scif.jj2000.j2k.util.MathUtil','java.util.Vector','io.scif.jj2000.j2k.wavelet.synthesis.SubbandSyn','io.scif.jj2000.j2k.quantization.dequantizer.StdDequantizerParams','io.scif.jj2000.j2k.entropy.decoder.DecLyrdCBlk','io.scif.jj2000.j2k.util.ArrayUtil','io.scif.jj2000.j2k.JJ2KExceptionHandler']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileBitstreamReaderAgent", null, 'io.scif.jj2000.j2k.codestream.reader.BitstreamReaderAgent', ['io.scif.jj2000.j2k.codestream.Markers', 'io.scif.jj2000.j2k.codestream.ProgressionType', 'io.scif.jj2000.j2k.entropy.StdEntropyCoderOptions']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isPsotEqualsZero=true;
this.printInfo=false;
this.headLen=0;
this.totTilePartsRead=0;
this.isEOCFound=false;
this.usePOCQuit=false;
this.tilePartPositions=null;
this.cdstreamStart=0;
this.t=0;
this.pos=-1;
this.tp=0;
this.tptot=0;
this.tilePartStart=0;
this.rateReached=false;
this.numtp=0;
this.maxTP=this.$nt;
this.lastPos=0;
this.maxPos=0;
}, 1);

C$.$fields$=[['Z',['isPsotEqualsZero','printInfo','isTruncMode','isEOCFound','usePOCQuit','rateReached'],'D',['totAllTileLen'],'I',['$nt','firstTilePartHeadLen','mainHeadLen','headLen','remainingTileParts','totTilePartsRead','curTilePart','lQuit','cdstreamStart','t','pos','tp','tptot','tilePartStart','numtp','maxTP','lastPos','maxPos'],'O',['pktDec','io.scif.jj2000.j2k.codestream.reader.PktDecoder','j2krparam','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReadParamJava','$in','io.scif.jj2000.j2k.io.RandomAccessIO','firstPackOff','int[][]','nBytes','int[]','+baknBytes','tilePartLen','int[][]','totTileLen','int[]','+totTileHeadLen','tilePartHeadLen','int[][]','pktHL','java.util.Vector','tilePartsRead','int[]','+tileParts','+totTileParts','tilePartNum','int[][]','hi','io.scif.jj2000.j2k.codestream.HeaderInfo','cbI','io.scif.jj2000.j2k.codestream.reader.CBlkInfo[][][][][]','tilePartPositions','long[][]']]]

Clazz.newMeth(C$, 'getNumTileParts$I', function (t) {
if (this.firstPackOff == null  || this.firstPackOff[t] == null  ) {
throw Clazz.new_($I$(1,1).c$$S,["Tile " + t + " not found in input codestream." ]);
}return this.firstPackOff[t].length;
});

Clazz.newMeth(C$, 'getCBlkInfo$', function () {
return this.cbI;
});

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_jj2000_j2k_decoder_DecoderSpecs$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$Z$io_scif_jj2000_j2k_codestream_HeaderInfo', function (hd, ehs, decSpec, j2krparam, cdstrInfo, hi) {
;C$.superclazz.c$$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_jj2000_j2k_decoder_DecoderSpecs.apply(this,[hd, decSpec]);C$.$init$.apply(this);
this.j2krparam=j2krparam;
this.printInfo=cdstrInfo;
this.hi=hi;
var strInfo=this.printInfo ? "Codestream elements information in bytes (offset, total length, header length):\n\n" : null;
if (j2krparam.getDecodingRate$() == 1.7976931348623157E308 ) this.tnbytes=2147483647;
 else this.tnbytes=(((j2krparam.getDecodingRate$() * hd.getMaxCompImgWidth$() * hd.getMaxCompImgHeight$() )|0)/8|0);
this.isTruncMode=true;
var ncbQuit=-1;
if (ncbQuit != -1 && !this.isTruncMode ) {
throw Clazz.new_($I$(1,1).c$$S,["Cannot use -parsing and -ncb_quit condition at the same time."]);
}this.lQuit=-1;
this.$nt=this.ntX * this.ntY;
this.$in=ehs;
this.pktDec=Clazz.new_($I$(2,1).c$$io_scif_jj2000_j2k_decoder_DecoderSpecs$io_scif_jj2000_j2k_codestream_reader_HeaderDecoder$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_jj2000_j2k_codestream_reader_BitstreamReaderAgent$Z$I,[decSpec, hd, ehs, this, this.isTruncMode, ncbQuit]);
this.tileParts=Clazz.array(Integer.TYPE, [this.$nt]);
this.totTileParts=Clazz.array(Integer.TYPE, [this.$nt]);
this.totTileLen=Clazz.array(Integer.TYPE, [this.$nt]);
this.tilePartLen=Clazz.array(Integer.TYPE, [this.$nt, null]);
this.tilePartNum=Clazz.array(Integer.TYPE, [this.$nt, null]);
this.firstPackOff=Clazz.array(Integer.TYPE, [this.$nt, null]);
this.tilePartsRead=Clazz.array(Integer.TYPE, [this.$nt]);
this.totTileHeadLen=Clazz.array(Integer.TYPE, [this.$nt]);
this.tilePartHeadLen=Clazz.array(Integer.TYPE, [this.$nt, null]);
this.nBytes=Clazz.array(Integer.TYPE, [this.$nt]);
this.baknBytes=Clazz.array(Integer.TYPE, [this.$nt]);
hd.nTileParts=Clazz.array(Integer.TYPE, [this.$nt]);
this.isTruncMode=this.isTruncMode;
this.cdstreamStart=hd.mainHeadOff;
this.mainHeadLen=this.$in.getPos$() - this.cdstreamStart;
this.headLen=this.mainHeadLen;
if (ncbQuit == -1) {
this.anbytes=this.mainHeadLen;
} else {
this.anbytes=0;
}if (this.printInfo) strInfo += "Main header length    : " + this.cdstreamStart + ", " + this.mainHeadLen + ", " + this.mainHeadLen + "\n" ;
if (this.anbytes > this.tnbytes) {
throw Clazz.new_($I$(1,1).c$$S,["Requested bitrate is too small."]);
}this.totAllTileLen=0;
this.remainingTileParts=this.$nt;
this.maxPos=this.lastPos=this.$in.getPos$();
if (j2krparam.getResolution$() == -1) {
this.targetRes=decSpec.dls.getMin$();
} else {
this.targetRes=j2krparam.getResolution$();
if (this.targetRes < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Specified negative " + "resolution level index: " + this.targetRes ]);
}}var mdl=decSpec.dls.getMin$();
if (this.targetRes > mdl) {
$I$(3).getMsgLogger$().printmsg$I$S(2, "Specified resolution level (" + this.targetRes + ") is larger" + " than the maximum possible. Setting it to " + mdl + " (maximum possible)" );
this.targetRes=mdl;
}p$1.initTLM.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initTLM', function () {
var savePos=this.$in.getPos$();
var tlmSegments=null;
var numTLM=0;
try {
this.$in.seek$I(this.cdstreamStart + 2);
var marker;
while ((marker=this.$in.readShort$()) != -112){
var markerLength=this.$in.readUnsignedShort$();
if (marker == -171) {
numTLM++;
if (tlmSegments == null ) {
tlmSegments=Clazz.array(Byte.TYPE, [256, null]);
}var Ztlm=this.$in.read$();
tlmSegments[Ztlm]=Clazz.array(Byte.TYPE, [markerLength - 3]);
this.$in.readFully$BA$I$I(tlmSegments[Ztlm], 0, markerLength - 3);
} else {
this.$in.skipBytes$I(markerLength - 2);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
tlmSegments=null;
} else {
throw e;
}
}
if (tlmSegments != null ) {
var tlmOffsets=null;
var tilePos=this.cdstreamStart + this.mainHeadLen;
var tileCounter=0;
for (var itlm=0; itlm < numTLM; itlm++) {
if (tlmSegments[itlm] == null ) {
tlmOffsets=null;
break;
} else if (tlmOffsets == null ) {
tlmOffsets=Clazz.array($I$(4), [this.$nt]);
}var bais=Clazz.new_($I$(5,1).c$$BA,[tlmSegments[itlm]]);
var iis=Clazz.new_($I$(6,1).c$$java_io_InputStream,[bais]);
try {
var Stlm=iis.read$();
var ST=(Stlm >> 4) & 3;
var SP=(Stlm >> 6) & 1;
var tlmLength=tlmSegments[itlm].length;
while (iis.getStreamPosition$() < tlmLength){
var tileIndex=tileCounter;
switch (ST) {
case 1:
tileIndex=iis.read$();
break;
case 2:
tileIndex=iis.readUnsignedShort$();
}
if (tlmOffsets[tileIndex] == null ) {
tlmOffsets[tileIndex]=Clazz.new_($I$(4,1));
}tlmOffsets[tileIndex].add$TE( new Long(tilePos));
var tileLength=0;
switch (SP) {
case 0:
tileLength=iis.readUnsignedShort$();
break;
case 1:
tileLength=iis.readUnsignedInt$();
break;
}
tilePos+=tileLength;
if (ST == 0) tileCounter++;
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}
if (tlmOffsets != null ) {
this.tilePartPositions=Clazz.array(Long.TYPE, [this.$nt, null]);
for (var i=0; i < this.$nt; i++) {
if (tlmOffsets[i] == null ) {
this.tilePartPositions=null;
break;
} else {
var list=tlmOffsets[i];
var count=list.size$();
this.tilePartPositions[i]=Clazz.array(Long.TYPE, [count]);
var tpPos=this.tilePartPositions[i];
for (var j=0; j < count; j++) {
tpPos[j]=(list.get$I(j)).longValue$();
}
}}
}}this.$in.seek$I(savePos);
}, p$1);

Clazz.newMeth(C$, 'initTile$I', function (tileNum) {
if (this.tilePartPositions == null ) this.$in.seek$I(this.lastPos);
var strInfo="";
var ncbQuit=-1;
var isTilePartRead=false;
var isEOFEncountered=false;
try {
var tpNum=0;
while (this.remainingTileParts != 0 && (this.totTileParts[tileNum] == 0 || this.tilePartsRead[tileNum] < this.totTileParts[tileNum] ) ){
isTilePartRead=true;
if (this.tilePartPositions != null ) {
this.$in.seek$I((this.tilePartPositions[tileNum][tpNum++]|0));
}this.tilePartStart=this.$in.getPos$();
try {
this.t=p$1.readTilePartHeader.apply(this, []);
if (this.isEOCFound) {
break;
}this.tp=this.tilePartsRead[this.t];
if (this.isPsotEqualsZero) {
this.tilePartLen[this.t][this.tp]=this.$in.length$() - 2 - this.tilePartStart ;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
this.firstPackOff[this.t][this.tp]=this.$in.length$();
throw e;
} else {
throw e;
}
}
this.pos=this.$in.getPos$();
if (this.isTruncMode && ncbQuit == -1 ) {
if ((this.pos - this.cdstreamStart) > this.tnbytes) {
this.firstPackOff[this.t][this.tp]=this.$in.length$();
this.rateReached=true;
break;
}}this.firstPackOff[this.t][this.tp]=this.pos;
this.tilePartHeadLen[this.t][this.tp]=(this.pos - this.tilePartStart);
if (this.printInfo) strInfo += "Tile-part " + this.tp + " of tile " + this.t + " : " + this.tilePartStart + ", " + this.tilePartLen[this.t][this.tp] + ", " + this.tilePartHeadLen[this.t][this.tp] + "\n" ;
this.totTileLen[this.t]+=this.tilePartLen[this.t][this.tp];
this.totTileHeadLen[this.t]+=this.tilePartHeadLen[this.t][this.tp];
this.totAllTileLen += this.tilePartLen[this.t][this.tp];
if (this.isTruncMode) {
if (this.anbytes + this.tilePartLen[this.t][this.tp] > this.tnbytes) {
this.anbytes+=this.tilePartHeadLen[this.t][this.tp];
this.headLen+=this.tilePartHeadLen[this.t][this.tp];
this.rateReached=true;
this.nBytes[this.t]+=(this.tnbytes - this.anbytes);
break;
} else {
this.anbytes+=this.tilePartHeadLen[this.t][this.tp];
this.headLen+=this.tilePartHeadLen[this.t][this.tp];
this.nBytes[this.t]+=(this.tilePartLen[this.t][this.tp] - this.tilePartHeadLen[this.t][this.tp]);
}} else {
if (this.anbytes + this.tilePartHeadLen[this.t][this.tp] > this.tnbytes) {
break;
} else {
this.anbytes+=this.tilePartHeadLen[this.t][this.tp];
this.headLen+=this.tilePartHeadLen[this.t][this.tp];
}}if (this.tptot == 0) this.firstTilePartHeadLen=this.tilePartHeadLen[this.t][this.tp];
this.tilePartsRead[this.t]++;
var nextMarkerPos=this.tilePartStart + this.tilePartLen[this.t][this.tp];
if (this.tilePartPositions == null ) {
this.$in.seek$I(nextMarkerPos);
}if (nextMarkerPos > this.maxPos) {
this.maxPos=nextMarkerPos;
}this.remainingTileParts--;
this.maxTP--;
this.tptot++;
if (this.isPsotEqualsZero) {
if (this.remainingTileParts != 0) {
$I$(3).getMsgLogger$().printmsg$I$S(2, "Some tile-parts have not been found. The codestream may be corrupted.");
}break;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
isEOFEncountered=true;
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}$I$(3).getMsgLogger$().printmsg$I$S(2, "Codestream truncated in tile " + this.t);
var fileLen=this.$in.length$();
if (fileLen < this.tnbytes) {
this.tnbytes=fileLen;
this.trate=this.tnbytes * 8.0 / this.hd.getMaxCompImgWidth$() / this.hd.getMaxCompImgHeight$();
}} else {
throw e;
}
}
if (!isTilePartRead) return;
if (!isEOFEncountered) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}if (this.remainingTileParts == 0) {
if (!this.isEOCFound && !this.isPsotEqualsZero && !this.rateReached  ) {
try {
var savePos=this.$in.getPos$();
this.$in.seek$I(this.maxPos);
if (this.$in.readShort$() != -39) {
$I$(3).getMsgLogger$().printmsg$I$S(2, "EOC marker not found. Codestream is corrupted.");
}this.$in.seek$I(savePos);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
$I$(3).getMsgLogger$().printmsg$I$S(2, "EOC marker is missing");
} else {
throw e;
}
}
}}}if (!this.isTruncMode) {
p$1.allocateRate.apply(this, []);
} else if (this.remainingTileParts == 0 && !isEOFEncountered ) {
if (this.$in.getPos$() >= this.tnbytes) this.anbytes+=2;
}if (this.tilePartPositions == null ) this.lastPos=this.$in.getPos$();
for (var tIdx=0; tIdx < this.$nt; tIdx++) {
this.baknBytes[tIdx]=this.nBytes[tIdx];
if (this.printInfo) {
$I$(3).getMsgLogger$().println$S$I$I("" + this.hi.toStringTileHeader$I$I(tIdx, this.tilePartLen[tIdx].length), 2, 2);
}}
}, p$1);

Clazz.newMeth(C$, 'allocateRate', function () {
var stopOff=this.tnbytes;
if (this.remainingTileParts == 0) this.anbytes+=2;
if (this.anbytes > stopOff) {
throw Clazz.new_($I$(1,1).c$$S,["Requested bitrate is too small for parsing"]);
}var rem=stopOff - this.anbytes;
var totnByte=rem;
for (var t=this.$nt - 1; t > 0; t--) {
rem-=this.nBytes[t]=((totnByte * (this.totTileLen[t] / this.totAllTileLen))|0);
}
this.nBytes[0]=rem;
}, p$1);

Clazz.newMeth(C$, 'readTilePartHeader', function () {
var ms=this.hi.getNewSOT$();
var marker=this.$in.readShort$();
if (marker != -112) {
if (marker == -39) {
this.isEOCFound=true;
return -1;
} else {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["SOT tag not found in tile-part start"]);
}}this.isEOCFound=false;
var lsot=this.$in.readUnsignedShort$();
ms.lsot=lsot;
if (lsot != 10) throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Wrong length for " + "SOT marker segment: " + lsot ]);
var tile=this.$in.readUnsignedShort$();
ms.isot=tile;
if (tile > 65534) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Tile index too high in tile-part."]);
}var psot=this.$in.readInt$();
ms.psot=psot;
this.isPsotEqualsZero=(psot != 0) ? false : true;
if (psot < 0) {
throw Clazz.new_($I$(7,1).c$$S,["Tile length larger than maximum supported"]);
}var tilePart=this.$in.read$();
ms.tpsot=tilePart;
if (tilePart != this.tilePartsRead[tile] || tilePart < 0  || tilePart > 254 ) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Out of order tile-part"]);
}var nrOfTileParts=this.$in.read$();
ms.tnsot=nrOfTileParts;
this.hi.sot.put$TK$TV("t" + tile + "_tp" + tilePart , ms);
if (nrOfTileParts == 0) {
var nExtraTp;
if (this.tileParts[tile] == 0 || this.tileParts[tile] == this.tilePartLen.length ) {
nExtraTp=2;
this.remainingTileParts+=1;
} else {
nExtraTp=1;
}this.tileParts[tile]+=nExtraTp;
nrOfTileParts=this.tileParts[tile];
$I$(3).getMsgLogger$().printmsg$I$S(2, "Header of tile-part " + tilePart + " of tile " + tile + ", does not indicate the total" + " number of tile-parts. Assuming that there are " + nrOfTileParts + " tile-parts for this tile." );
var tmpA=this.tilePartLen[tile];
this.tilePartLen[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < nrOfTileParts - nExtraTp; i++) {
this.tilePartLen[tile][i]=tmpA[i];
}
tmpA=this.tilePartNum[tile];
this.tilePartNum[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < nrOfTileParts - nExtraTp; i++) {
this.tilePartNum[tile][i]=tmpA[i];
}
tmpA=this.firstPackOff[tile];
this.firstPackOff[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < nrOfTileParts - nExtraTp; i++) {
this.firstPackOff[tile][i]=tmpA[i];
}
tmpA=this.tilePartHeadLen[tile];
this.tilePartHeadLen[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < nrOfTileParts - nExtraTp; i++) {
this.tilePartHeadLen[tile][i]=tmpA[i];
}
} else {
this.totTileParts[tile]=nrOfTileParts;
if (this.tileParts[tile] == 0) {
this.remainingTileParts+=nrOfTileParts - 1;
this.tileParts[tile]=nrOfTileParts;
this.tilePartLen[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
this.tilePartNum[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
this.firstPackOff[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
this.tilePartHeadLen[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
} else if (this.tileParts[tile] > nrOfTileParts) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.codestream.CorruptedCodestreamException').c$$S,["Invalid number of tile-parts in tile " + tile + ": " + nrOfTileParts ]);
} else {
this.remainingTileParts+=nrOfTileParts - this.tileParts[tile];
if (this.tileParts[tile] != nrOfTileParts) {
var tmpA=this.tilePartLen[tile];
this.tilePartLen[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < this.tileParts[tile] - 1; i++) {
this.tilePartLen[tile][i]=tmpA[i];
}
tmpA=this.tilePartNum[tile];
this.tilePartNum[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < this.tileParts[tile] - 1; i++) {
this.tilePartNum[tile][i]=tmpA[i];
}
tmpA=this.firstPackOff[tile];
this.firstPackOff[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < this.tileParts[tile] - 1; i++) {
this.firstPackOff[tile][i]=tmpA[i];
}
tmpA=this.tilePartHeadLen[tile];
this.tilePartHeadLen[tile]=Clazz.array(Integer.TYPE, [nrOfTileParts]);
for (var i=0; i < this.tileParts[tile] - 1; i++) {
this.tilePartHeadLen[tile][i]=tmpA[i];
}
}}}this.hd.resetHeaderMarkers$();
this.hd.nTileParts[tile]=nrOfTileParts;
do {
this.hd.extractTilePartMarkSeg$H$io_scif_jj2000_j2k_io_RandomAccessIO$I$I(this.$in.readShort$(), this.$in, tile, tilePart);
} while ((this.hd.getNumFoundMarkSeg$() & $I$(8).SOD_FOUND) == 0);
this.hd.readFoundTilePartMarkSeg$I$I(tile, tilePart);
this.tilePartLen[tile][tilePart]=psot;
this.tilePartNum[tile][tilePart]=this.totTilePartsRead;
this.totTilePartsRead++;
this.hd.setTileOfTileParts$I(tile);
return tile;
}, p$1);

Clazz.newMeth(C$, 'readLyResCompPos$IAA$I$I$I$I$I', function (lys, lye, ress, rese, comps, compe) {
var minlys=10000;
for (var c=comps; c < compe; c++) {
if (c >= this.mdl.length) continue;
for (var r=ress; r < rese; r++) {
if (lys[c] != null  && r < lys[c].length  && lys[c][r] < minlys ) {
minlys=lys[c][r];
}}
}
var t=this.getTileIdx$();
var start;
var status=false;
var lastByte=this.firstPackOff[t][this.curTilePart] + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
var numLayers=(this.decSpec.nls.getTileDef$I(t)).intValue$();
var nPrec=1;
var hlen;
var plen;
var strInfo=this.printInfo ? "Tile " + this.getTileIdx$() + " (tile-part:" + this.curTilePart + "): offset, length, header length\n"  : null;
var pph=false;
if ((this.decSpec.pphs.getTileDef$I(t)).booleanValue$()) {
pph=true;
}for (var l=minlys; l < lye; l++) {
for (var r=ress; r < rese; r++) {
for (var c=comps; c < compe; c++) {
if (c >= this.mdl.length) continue;
if (r >= lys[c].length) continue;
if (r > this.mdl[c]) continue;
if (l < lys[c][r] || l >= numLayers ) continue;
nPrec=this.pktDec.getNumPrecinct$I$I(c, r);
for (var p=0; p < nPrec; p++) {
start=this.$in.getPos$();
if (pph) {
this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, p, this.cbI[c][r], this.nBytes);
}if (start > lastByte && this.curTilePart < this.firstPackOff[t].length - 1 ) {
this.curTilePart++;
this.$in.seek$I(this.firstPackOff[t][this.curTilePart]);
lastByte=this.$in.getPos$() + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
}status=this.pktDec.readSOPMarker$IA$I$I$I(this.nBytes, p, c, r);
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}if (!pph) {
status=this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, p, this.cbI[c][r], this.nBytes);
}if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}hlen=this.$in.getPos$() - start;
this.pktHL.addElement$TE( new Integer(hlen));
status=this.pktDec.readPktBody$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, p, this.cbI[c][r], this.nBytes);
plen=this.$in.getPos$() - start;
if (this.printInfo) strInfo += " Pkt l=" + l + ",r=" + r + ",c=" + c + ",p=" + p + ": " + start + ", " + plen + ", " + hlen + "\n" ;
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}}
}
}
}
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return false;
}, p$1);

Clazz.newMeth(C$, 'readResLyCompPos$IAA$I$I$I$I$I', function (lys, lye, ress, rese, comps, compe) {
var t=this.getTileIdx$();
var status=false;
var lastByte=this.firstPackOff[t][this.curTilePart] + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
var minlys=10000;
for (var c=comps; c < compe; c++) {
if (c >= this.mdl.length) continue;
for (var r=ress; r < rese; r++) {
if (r > this.mdl[c]) continue;
if (lys[c] != null  && r < lys[c].length  && lys[c][r] < minlys ) {
minlys=lys[c][r];
}}
}
var strInfo=this.printInfo ? "Tile " + this.getTileIdx$() + " (tile-part:" + this.curTilePart + "): offset, length, header length\n"  : null;
var numLayers=(this.decSpec.nls.getTileDef$I(t)).intValue$();
var pph=false;
if ((this.decSpec.pphs.getTileDef$I(t)).booleanValue$()) {
pph=true;
}var nPrec=1;
var start;
var hlen;
var plen;
for (var r=ress; r < rese; r++) {
for (var l=minlys; l < lye; l++) {
for (var c=comps; c < compe; c++) {
if (c >= this.mdl.length) continue;
if (r > this.mdl[c]) continue;
if (r >= lys[c].length) continue;
if (l < lys[c][r] || l >= numLayers ) continue;
nPrec=this.pktDec.getNumPrecinct$I$I(c, r);
for (var p=0; p < nPrec; p++) {
start=this.$in.getPos$();
if (pph) {
this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, p, this.cbI[c][r], this.nBytes);
}if (start > lastByte && this.curTilePart < this.firstPackOff[t].length - 1 ) {
this.curTilePart++;
this.$in.seek$I(this.firstPackOff[t][this.curTilePart]);
lastByte=this.$in.getPos$() + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
}status=this.pktDec.readSOPMarker$IA$I$I$I(this.nBytes, p, c, r);
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}if (!pph) {
status=this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, p, this.cbI[c][r], this.nBytes);
}if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}hlen=this.$in.getPos$() - start;
this.pktHL.addElement$TE( new Integer(hlen));
status=this.pktDec.readPktBody$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, p, this.cbI[c][r], this.nBytes);
plen=this.$in.getPos$() - start;
if (this.printInfo) strInfo += " Pkt l=" + l + ",r=" + r + ",c=" + c + ",p=" + p + ": " + start + ", " + plen + ", " + hlen + "\n" ;
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}}
}
}
}
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return false;
}, p$1);

Clazz.newMeth(C$, 'readResPosCompLy$IAA$I$I$I$I$I', function (lys, lye, ress, rese, comps, compe) {
var nTiles=this.getNumTiles$java_awt_Point(null);
var tileI=this.getTile$java_awt_Point(null);
var x0siz=this.hd.getImgULX$();
var y0siz=this.hd.getImgULY$();
var xsiz=x0siz + this.hd.getImgWidth$();
var ysiz=y0siz + this.hd.getImgHeight$();
var xt0siz=this.getTilePartULX$();
var yt0siz=this.getTilePartULY$();
var xtsiz=this.getNomTileWidth$();
var ytsiz=this.getNomTileHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var t=this.getTileIdx$();
var prec;
var p;
var gcd_x=0;
var gcd_y=0;
var nPrec=0;
var nextPrec=Clazz.array(Integer.TYPE, [compe, null]);
var minlys=100000;
var minx=tx1;
var miny=ty1;
var maxx=tx0;
var maxy=ty0;
var numPrec;
for (var c=comps; c < compe; c++) {
for (var r=ress; r < rese; r++) {
if (c >= this.mdl.length) continue;
if (r > this.mdl[c]) continue;
nextPrec[c]=Clazz.array(Integer.TYPE, [this.mdl[c] + 1]);
if (lys[c] != null  && r < lys[c].length  && lys[c][r] < minlys ) {
minlys=lys[c][r];
}p=this.pktDec.getNumPrecinct$I$I(c, r) - 1;
for (; p >= 0; p--) {
prec=this.pktDec.getPrecInfo$I$I$I(c, r, p);
if (prec.rgulx != tx0) {
if (prec.rgulx < minx) minx=prec.rgulx;
if (prec.rgulx > maxx) maxx=prec.rgulx;
}if (prec.rguly != ty0) {
if (prec.rguly < miny) miny=prec.rguly;
if (prec.rguly > maxy) maxy=prec.rguly;
}if (nPrec == 0) {
gcd_x=prec.rgw;
gcd_y=prec.rgh;
} else {
gcd_x=$I$(9).gcd$I$I(gcd_x, prec.rgw);
gcd_y=$I$(9).gcd$I$I(gcd_y, prec.rgh);
}nPrec++;
}
}
}
if (nPrec == 0) {
throw Clazz.new_($I$(1,1).c$$S,["Image cannot have no precinct"]);
}var pyend=((maxy - miny)/gcd_y|0) + 1;
var pxend=((maxx - minx)/gcd_x|0) + 1;
var x;
var y;
var hlen;
var plen;
var start;
var status=false;
var lastByte=this.firstPackOff[t][this.curTilePart] + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
var numLayers=(this.decSpec.nls.getTileDef$I(t)).intValue$();
var strInfo=this.printInfo ? "Tile " + this.getTileIdx$() + " (tile-part:" + this.curTilePart + "): offset, length, header length\n"  : null;
var pph=false;
if ((this.decSpec.pphs.getTileDef$I(t)).booleanValue$()) {
pph=true;
}for (var r=ress; r < rese; r++) {
y=ty0;
x=tx0;
for (var py=0; py <= pyend; py++) {
for (var px=0; px <= pxend; px++) {
for (var c=comps; c < compe; c++) {
if (c >= this.mdl.length) continue;
if (r > this.mdl[c]) continue;
if (nextPrec[c][r] >= this.pktDec.getNumPrecinct$I$I(c, r)) {
continue;
}prec=this.pktDec.getPrecInfo$I$I$I(c, r, nextPrec[c][r]);
if ((prec.rgulx != x) || (prec.rguly != y) ) {
continue;
}for (var l=minlys; l < lye; l++) {
if (r >= lys[c].length) continue;
if (l < lys[c][r] || l >= numLayers ) continue;
start=this.$in.getPos$();
if (pph) {
this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
}if (start > lastByte && this.curTilePart < this.firstPackOff[t].length - 1 ) {
this.curTilePart++;
this.$in.seek$I(this.firstPackOff[t][this.curTilePart]);
lastByte=this.$in.getPos$() + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
}status=this.pktDec.readSOPMarker$IA$I$I$I(this.nBytes, nextPrec[c][r], c, r);
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}if (!pph) {
status=this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
}if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}hlen=this.$in.getPos$() - start;
this.pktHL.addElement$TE( new Integer(hlen));
status=this.pktDec.readPktBody$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
plen=this.$in.getPos$() - start;
if (this.printInfo) strInfo += " Pkt l=" + l + ",r=" + r + ",c=" + c + ",p=" + nextPrec[c][r] + ": " + start + ", " + plen + ", " + hlen + "\n" ;
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}}
nextPrec[c][r]++;
}
if (px != pxend) {
x=minx + px * gcd_x;
} else {
x=tx0;
}}
if (py != pyend) {
y=miny + py * gcd_y;
} else {
y=ty0;
}}
}
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return false;
}, p$1);

Clazz.newMeth(C$, 'readPosCompResLy$IAA$I$I$I$I$I', function (lys, lye, ress, rese, comps, compe) {
var nTiles=this.getNumTiles$java_awt_Point(null);
var tileI=this.getTile$java_awt_Point(null);
var x0siz=this.hd.getImgULX$();
var y0siz=this.hd.getImgULY$();
var xsiz=x0siz + this.hd.getImgWidth$();
var ysiz=y0siz + this.hd.getImgHeight$();
var xt0siz=this.getTilePartULX$();
var yt0siz=this.getTilePartULY$();
var xtsiz=this.getNomTileWidth$();
var ytsiz=this.getNomTileHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var t=this.getTileIdx$();
var prec;
var p;
var gcd_x=0;
var gcd_y=0;
var nPrec=0;
var nextPrec=Clazz.array(Integer.TYPE, [compe, null]);
var minlys=100000;
var minx=tx1;
var miny=ty1;
var maxx=tx0;
var maxy=ty0;
var numPrec;
for (var c=comps; c < compe; c++) {
for (var r=ress; r < rese; r++) {
if (c >= this.mdl.length) continue;
if (r > this.mdl[c]) continue;
nextPrec[c]=Clazz.array(Integer.TYPE, [this.mdl[c] + 1]);
if (lys[c] != null  && r < lys[c].length  && lys[c][r] < minlys ) {
minlys=lys[c][r];
}p=this.pktDec.getNumPrecinct$I$I(c, r) - 1;
for (; p >= 0; p--) {
prec=this.pktDec.getPrecInfo$I$I$I(c, r, p);
if (prec.rgulx != tx0) {
if (prec.rgulx < minx) minx=prec.rgulx;
if (prec.rgulx > maxx) maxx=prec.rgulx;
}if (prec.rguly != ty0) {
if (prec.rguly < miny) miny=prec.rguly;
if (prec.rguly > maxy) maxy=prec.rguly;
}if (nPrec == 0) {
gcd_x=prec.rgw;
gcd_y=prec.rgh;
} else {
gcd_x=$I$(9).gcd$I$I(gcd_x, prec.rgw);
gcd_y=$I$(9).gcd$I$I(gcd_y, prec.rgh);
}nPrec++;
}
}
}
if (nPrec == 0) {
throw Clazz.new_($I$(1,1).c$$S,["Image cannot have no precinct"]);
}var pyend=((maxy - miny)/gcd_y|0) + 1;
var pxend=((maxx - minx)/gcd_x|0) + 1;
var hlen;
var plen;
var start;
var status=false;
var lastByte=this.firstPackOff[t][this.curTilePart] + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
var numLayers=(this.decSpec.nls.getTileDef$I(t)).intValue$();
var strInfo=this.printInfo ? "Tile " + this.getTileIdx$() + " (tile-part:" + this.curTilePart + "): offset, length, header length\n"  : null;
var pph=false;
if ((this.decSpec.pphs.getTileDef$I(t)).booleanValue$()) {
pph=true;
}var y=ty0;
var x=tx0;
for (var py=0; py <= pyend; py++) {
for (var px=0; px <= pxend; px++) {
for (var c=comps; c < compe; c++) {
if (c >= this.mdl.length) continue;
for (var r=ress; r < rese; r++) {
if (r > this.mdl[c]) continue;
if (nextPrec[c][r] >= this.pktDec.getNumPrecinct$I$I(c, r)) {
continue;
}prec=this.pktDec.getPrecInfo$I$I$I(c, r, nextPrec[c][r]);
if ((prec.rgulx != x) || (prec.rguly != y) ) {
continue;
}for (var l=minlys; l < lye; l++) {
if (r >= lys[c].length) continue;
if (l < lys[c][r] || l >= numLayers ) continue;
start=this.$in.getPos$();
if (pph) {
this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
}status=this.pktDec.readSOPMarker$IA$I$I$I(this.nBytes, nextPrec[c][r], c, r);
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}if (!pph) {
status=this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
}if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}hlen=this.$in.getPos$() - start;
this.pktHL.addElement$TE( new Integer(hlen));
status=this.pktDec.readPktBody$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
plen=this.$in.getPos$() - start;
if (this.printInfo) strInfo += " Pkt l=" + l + ",r=" + r + ",c=" + c + ",p=" + nextPrec[c][r] + ": " + start + ", " + plen + ", " + hlen + "\n" ;
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}}
nextPrec[c][r]++;
}
}
if (px != pxend) {
x=minx + px * gcd_x;
} else {
x=tx0;
}}
if (py != pyend) {
y=miny + py * gcd_y;
} else {
y=ty0;
}}
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return false;
}, p$1);

Clazz.newMeth(C$, 'readCompPosResLy$IAA$I$I$I$I$I', function (lys, lye, ress, rese, comps, compe) {
var nTiles=this.getNumTiles$java_awt_Point(null);
var tileI=this.getTile$java_awt_Point(null);
var x0siz=this.hd.getImgULX$();
var y0siz=this.hd.getImgULY$();
var xsiz=x0siz + this.hd.getImgWidth$();
var ysiz=y0siz + this.hd.getImgHeight$();
var xt0siz=this.getTilePartULX$();
var yt0siz=this.getTilePartULY$();
var xtsiz=this.getNomTileWidth$();
var ytsiz=this.getNomTileHeight$();
var tx0=(tileI.x == 0) ? x0siz : xt0siz + tileI.x * xtsiz;
var ty0=(tileI.y == 0) ? y0siz : yt0siz + tileI.y * ytsiz;
var tx1=(tileI.x != nTiles.x - 1) ? xt0siz + (tileI.x + 1) * xtsiz : xsiz;
var ty1=(tileI.y != nTiles.y - 1) ? yt0siz + (tileI.y + 1) * ytsiz : ysiz;
var t=this.getTileIdx$();
var prec;
var p;
var gcd_x=0;
var gcd_y=0;
var nPrec=0;
var nextPrec=Clazz.array(Integer.TYPE, [compe, null]);
var minlys=100000;
var minx=tx1;
var miny=ty1;
var maxx=tx0;
var maxy=ty0;
var numPrec;
for (var c=comps; c < compe; c++) {
for (var r=ress; r < rese; r++) {
if (c >= this.mdl.length) continue;
if (r > this.mdl[c]) continue;
nextPrec[c]=Clazz.array(Integer.TYPE, [this.mdl[c] + 1]);
if (lys[c] != null  && r < lys[c].length  && lys[c][r] < minlys ) {
minlys=lys[c][r];
}p=this.pktDec.getNumPrecinct$I$I(c, r) - 1;
for (; p >= 0; p--) {
prec=this.pktDec.getPrecInfo$I$I$I(c, r, p);
if (prec.rgulx != tx0) {
if (prec.rgulx < minx) minx=prec.rgulx;
if (prec.rgulx > maxx) maxx=prec.rgulx;
}if (prec.rguly != ty0) {
if (prec.rguly < miny) miny=prec.rguly;
if (prec.rguly > maxy) maxy=prec.rguly;
}if (nPrec == 0) {
gcd_x=prec.rgw;
gcd_y=prec.rgh;
} else {
gcd_x=$I$(9).gcd$I$I(gcd_x, prec.rgw);
gcd_y=$I$(9).gcd$I$I(gcd_y, prec.rgh);
}nPrec++;
}
}
}
if (nPrec == 0) {
throw Clazz.new_($I$(1,1).c$$S,["Image cannot have no precinct"]);
}var pyend=((maxy - miny)/gcd_y|0) + 1;
var pxend=((maxx - minx)/gcd_x|0) + 1;
var hlen;
var plen;
var start;
var status=false;
var lastByte=this.firstPackOff[t][this.curTilePart] + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
var numLayers=(this.decSpec.nls.getTileDef$I(t)).intValue$();
var strInfo=this.printInfo ? "Tile " + this.getTileIdx$() + " (tile-part:" + this.curTilePart + "): offset, length, header length\n"  : null;
var pph=false;
if ((this.decSpec.pphs.getTileDef$I(t)).booleanValue$()) {
pph=true;
}var x;
var y;
for (var c=comps; c < compe; c++) {
if (c >= this.mdl.length) continue;
y=ty0;
x=tx0;
for (var py=0; py <= pyend; py++) {
for (var px=0; px <= pxend; px++) {
for (var r=ress; r < rese; r++) {
if (r > this.mdl[c]) continue;
if (nextPrec[c][r] >= this.pktDec.getNumPrecinct$I$I(c, r)) {
continue;
}prec=this.pktDec.getPrecInfo$I$I$I(c, r, nextPrec[c][r]);
if ((prec.rgulx != x) || (prec.rguly != y) ) {
continue;
}for (var l=minlys; l < lye; l++) {
if (r >= lys[c].length) continue;
if (l < lys[c][r]) continue;
start=this.$in.getPos$();
if (pph) {
this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
}if (start > lastByte && this.curTilePart < this.firstPackOff[t].length - 1 ) {
this.curTilePart++;
this.$in.seek$I(this.firstPackOff[t][this.curTilePart]);
lastByte=this.$in.getPos$() + this.tilePartLen[t][this.curTilePart] - 1 - this.tilePartHeadLen[t][this.curTilePart];
}status=this.pktDec.readSOPMarker$IA$I$I$I(this.nBytes, nextPrec[c][r], c, r);
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}if (!pph) {
status=this.pktDec.readPktHead$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
}if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}hlen=this.$in.getPos$() - start;
this.pktHL.addElement$TE( new Integer(hlen));
status=this.pktDec.readPktBody$I$I$I$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAA$IA(l, r, c, nextPrec[c][r], this.cbI[c][r], this.nBytes);
plen=this.$in.getPos$() - start;
if (this.printInfo) strInfo += " Pkt l=" + l + ",r=" + r + ",c=" + c + ",p=" + nextPrec[c][r] + ": " + start + ", " + plen + ", " + hlen + "\n" ;
if (status) {
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return true;
}}
nextPrec[c][r]++;
}
if (px != pxend) {
x=minx + px * gcd_x;
} else {
x=tx0;
}}
if (py != pyend) {
y=miny + py * gcd_y;
} else {
y=ty0;
}}
}
if (this.printInfo) {
$I$(3).getMsgLogger$().printmsg$I$S(1, strInfo);
}return false;
}, p$1);

Clazz.newMeth(C$, 'readTilePkts$I', function (t) {
this.pktHL=Clazz.new_($I$(10,1));
var oldNBytes=this.nBytes[t];
var nl=(this.decSpec.nls.getTileDef$I(t)).intValue$();
if ((this.decSpec.pphs.getTileDef$I(t)).booleanValue$()) {
var pphbais=this.hd.getPackedPktHead$I(t);
this.cbI=this.pktDec.restart$I$IA$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAAAA$Z$java_io_ByteArrayInputStream(this.nc, this.mdl, nl, this.cbI, true, pphbais);
} else {
this.cbI=this.pktDec.restart$I$IA$I$io_scif_jj2000_j2k_codestream_reader_CBlkInfoAAAAA$Z$java_io_ByteArrayInputStream(this.nc, this.mdl, nl, this.cbI, false, null);
}var pocSpec=(this.decSpec.pcs.getTileDef$I(t));
var nChg=(pocSpec == null ) ? 1 : pocSpec.length;
var change=Clazz.array(Integer.TYPE, [nChg, 6]);
var idx=0;
change[0][1]=0;
if (pocSpec == null ) {
change[idx][0]=(this.decSpec.pos.getTileDef$I(t)).intValue$();
change[idx][1]=nl;
change[idx][2]=0;
change[idx][3]=this.decSpec.dls.getMaxInTile$I(t) + 1;
change[idx][4]=0;
change[idx][5]=this.nc;
} else {
for (idx=0; idx < nChg; idx++) {
change[idx][0]=pocSpec[idx][5];
change[idx][1]=pocSpec[idx][2];
change[idx][2]=pocSpec[idx][0];
change[idx][3]=pocSpec[idx][3];
change[idx][4]=pocSpec[idx][1];
change[idx][5]=pocSpec[idx][4];
}
}try {
if (this.isTruncMode && this.firstPackOff == null   || this.firstPackOff[t] == null  ) {
return;
}this.$in.seek$I(this.firstPackOff[t][0]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
$I$(3).getMsgLogger$().printmsg$I$S(2, "Codestream truncated in tile " + t);
return;
} else {
throw e;
}
}
this.curTilePart=0;
var lye;
var ress;
var rese;
var comps;
var compe;
var status=false;
var nb=this.nBytes[t];
var lys=Clazz.array(Integer.TYPE, [this.nc, null]);
for (var c=0; c < this.nc; c++) {
lys[c]=Clazz.array(Integer.TYPE, [(this.decSpec.dls.getTileCompVal$I$I(t, c)).intValue$() + 1]);
}
try {
for (var chg=0; chg < nChg; chg++) {
lye=change[chg][1];
ress=change[chg][2];
rese=change[chg][3];
comps=change[chg][4];
compe=change[chg][5];
switch (change[chg][0]) {
case 0:
status=p$1.readLyResCompPos$IAA$I$I$I$I$I.apply(this, [lys, lye, ress, rese, comps, compe]);
break;
case 1:
status=p$1.readResLyCompPos$IAA$I$I$I$I$I.apply(this, [lys, lye, ress, rese, comps, compe]);
break;
case 2:
status=p$1.readResPosCompLy$IAA$I$I$I$I$I.apply(this, [lys, lye, ress, rese, comps, compe]);
break;
case 3:
status=p$1.readPosCompResLy$IAA$I$I$I$I$I.apply(this, [lys, lye, ress, rese, comps, compe]);
break;
case 4:
status=p$1.readCompPosResLy$IAA$I$I$I$I$I.apply(this, [lys, lye, ress, rese, comps, compe]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not recognized progression type"]);
}
for (var c=comps; c < compe; c++) {
if (c >= lys.length) continue;
for (var r=ress; r < rese; r++) {
if (r >= lys[c].length) continue;
lys[c][r]=lye;
}
}
if (status || this.usePOCQuit ) {
break;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
throw e;
} else {
throw e;
}
}
if (this.isTruncMode) {
this.anbytes+=nb - this.nBytes[t];
if (status) {
this.nBytes[t]=0;
}} else if (this.nBytes[t] < (this.totTileLen[t] - this.totTileHeadLen[t])) {
var cb;
var reject;
var stopCount=false;
var pktHeadLen=Clazz.array(Integer.TYPE, [this.pktHL.size$()]);
for (var i=this.pktHL.size$() - 1; i >= 0; i--) {
pktHeadLen[i]=(this.pktHL.elementAt$I(i)).intValue$();
}
reject=false;
for (var l=0; l < nl; l++) {
if (this.cbI == null ) continue;
var nc=this.cbI.length;
var mres=0;
for (var c=0; c < nc; c++) {
if (this.cbI[c] != null  && this.cbI[c].length > mres ) mres=this.cbI[c].length;
}
for (var r=0; r < mres; r++) {
var msub=0;
for (var c=0; c < nc; c++) {
if (this.cbI[c] != null  && this.cbI[c][r] != null   && this.cbI[c][r].length > msub ) msub=this.cbI[c][r].length;
}
for (var s=0; s < msub; s++) {
if (r == 0 && s != 0 ) {
continue;
} else if (r != 0 && s == 0 ) {
continue;
}var mnby=0;
for (var c=0; c < nc; c++) {
if (this.cbI[c] != null  && this.cbI[c][r] != null   && this.cbI[c][r][s] != null   && this.cbI[c][r][s].length > mnby ) mnby=this.cbI[c][r][s].length;
}
for (var m=0; m < mnby; m++) {
var mnbx=0;
for (var c=0; c < nc; c++) {
if (this.cbI[c] != null  && this.cbI[c][r] != null   && this.cbI[c][r][s] != null   && this.cbI[c][r][s][m] != null   && this.cbI[c][r][s][m].length > mnbx ) mnbx=this.cbI[c][r][s][m].length;
}
for (var n=0; n < mnbx; n++) {
for (var c=0; c < nc; c++) {
if (this.cbI[c] == null  || this.cbI[c][r] == null   || this.cbI[c][r][s] == null   || this.cbI[c][r][s][m] == null   || this.cbI[c][r][s][m][n] == null  ) {
continue;
}cb=this.cbI[c][r][s][m][n];
if (!reject) {
if (this.nBytes[t] < pktHeadLen[cb.pktIdx[l]]) {
stopCount=true;
reject=true;
} else {
if (!stopCount) {
this.nBytes[t]-=pktHeadLen[cb.pktIdx[l]];
this.anbytes+=pktHeadLen[cb.pktIdx[l]];
pktHeadLen[cb.pktIdx[l]]=0;
}}}if (cb.len[l] == 0) {
continue;
}if (cb.len[l] < this.nBytes[t] && !reject ) {
this.nBytes[t]-=cb.len[l];
this.anbytes+=cb.len[l];
} else {
cb.len[l]=cb.off[l]=cb.ntp[l]=0;
reject=true;
}}
}
}
}
}
}
} else {
this.anbytes+=this.totTileLen[t] - this.totTileHeadLen[t];
if (t < this.getNumTiles$() - 1) {
this.nBytes[t + 1]+=this.nBytes[t] - (this.totTileLen[t] - this.totTileHeadLen[t]);
}}this.nBytes[t]=oldNBytes;
}, p$1);

Clazz.newMeth(C$, 'setTile$I$I', function (x, y) {
var i;
if (x < 0 || y < 0  || x >= this.ntX  || y >= this.ntY ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}var t=(y * this.ntX + x);
try {
p$1.initTile$I.apply(this, [t]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
if (t == 0) {
this.anbytes=this.headLen;
if (!this.isTruncMode) {
this.anbytes+=2;
}for (var tIdx=0; tIdx < this.$nt; tIdx++) {
this.nBytes[tIdx]=this.baknBytes[tIdx];
}
}this.ctX=x;
this.ctY=y;
var ctox=(x == 0) ? this.ax : this.px + x * this.ntW;
var ctoy=(y == 0) ? this.ay : this.py + y * this.ntH;
for (i=this.nc - 1; i >= 0; i--) {
this.culx[i]=((ctox + this.hd.getCompSubsX$I(i) - 1)/this.hd.getCompSubsX$I(i)|0);
this.culy[i]=((ctoy + this.hd.getCompSubsY$I(i) - 1)/this.hd.getCompSubsY$I(i)|0);
this.offX[i]=((this.px + x * this.ntW + this.hd.getCompSubsX$I(i) - 1)/this.hd.getCompSubsX$I(i)|0);
this.offY[i]=((this.py + y * this.ntH + this.hd.getCompSubsY$I(i) - 1)/this.hd.getCompSubsY$I(i)|0);
}
this.subbTrees=Clazz.array($I$(11), [this.nc]);
this.mdl=Clazz.array(Integer.TYPE, [this.nc]);
this.derived=Clazz.array(Boolean.TYPE, [this.nc]);
this.params=Clazz.array($I$(12), [this.nc]);
this.gb=Clazz.array(Integer.TYPE, [this.nc]);
for (var c=0; c < this.nc; c++) {
this.derived[c]=this.decSpec.qts.isDerived$I$I(t, c);
this.params[c]=this.decSpec.qsss.getTileCompVal$I$I(t, c);
this.gb[c]=(this.decSpec.gbs.getTileCompVal$I$I(t, c)).intValue$();
this.mdl[c]=(this.decSpec.dls.getTileCompVal$I$I(t, c)).intValue$();
this.subbTrees[c]=Clazz.new_($I$(11,1).c$$I$I$I$I$I$io_scif_jj2000_j2k_wavelet_WaveletFilterA$io_scif_jj2000_j2k_wavelet_WaveletFilterA,[this.getTileCompWidth$I$I$I(t, c, this.mdl[c]), this.getTileCompHeight$I$I$I(t, c, this.mdl[c]), this.getResULX$I$I(c, this.mdl[c]), this.getResULY$I$I(c, this.mdl[c]), this.mdl[c], this.decSpec.wfs.getHFilters$I$I(t, c), this.decSpec.wfs.getVFilters$I$I(t, c)]);
this.initSubbandsFields$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn(c, this.subbTrees[c]);
}
try {
p$1.readTilePkts$I.apply(this, [t]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
throw Clazz.new_($I$(1,1).c$$S,["IO Error when reading tile " + x + " x " + y ]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'nextTile$', function () {
if (this.ctX == this.ntX - 1 && this.ctY == this.ntY - 1 ) {
throw Clazz.new_(Clazz.load('io.scif.jj2000.j2k.NoNextElementException'));
} else if (this.ctX < this.ntX - 1) {
this.setTile$I$I(this.ctX + 1, this.ctY);
} else {
this.setTile$I$I(0, this.ctY + 1);
}});

Clazz.newMeth(C$, 'getCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$I$I$io_scif_jj2000_j2k_entropy_decoder_DecLyrdCBlk', function (c, m, n, sb, fl, nl, ccb) {
var t=this.getTileIdx$();
var rcb;
var r=sb.resLvl;
var s=sb.sbandIdx;
var tpidx;
var passtype;
var numLayers=(this.decSpec.nls.getTileDef$I(t)).intValue$();
var options=(this.decSpec.ecopts.getTileCompVal$I$I(t, c)).intValue$();
if (nl < 0) {
nl=numLayers - fl + 1;
}if (this.lQuit != -1 && fl + nl > this.lQuit ) {
nl=this.lQuit - fl;
}var maxdl=this.getSynSubbandTree$I$I(t, c).resLvl;
try {
rcb=this.cbI[c][r][s][m][n];
if (fl < 1 || fl > numLayers  || fl + nl - 1 > numLayers ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Code-block (t:" + t + ", c:" + c + ", r:" + r + ", s:" + s + ", " + m + "x" + +n + ") not found in codestream" ]);
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Code-block (t:" + t + ", c:" + c + ", r:" + r + ", s:" + s + ", " + m + "x" + n + ") not found in bit stream" ]);
}
} else {
throw e$$;
}
}
if (ccb == null ) {
ccb=Clazz.new_($I$(13,1));
}ccb.m=m;
ccb.n=n;
ccb.nl=0;
ccb.dl=0;
ccb.nTrunc=0;
if (rcb == null ) {
ccb.skipMSBP=0;
ccb.prog=false;
ccb.w=ccb.h=ccb.ulx=ccb.uly=0;
return ccb;
}ccb.skipMSBP=rcb.msbSkipped;
ccb.ulx=rcb.ulx;
ccb.uly=rcb.uly;
ccb.w=rcb.w;
ccb.h=rcb.h;
ccb.ftpIdx=0;
var l=0;
while ((l < rcb.len.length) && (rcb.len[l] == 0) ){
ccb.ftpIdx+=rcb.ntp[l];
l++;
}
for (l=fl - 1; l < fl + nl - 1; l++) {
ccb.nl++;
ccb.dl+=rcb.len[l];
ccb.nTrunc+=rcb.ntp[l];
}
var nts;
if ((options & 4) != 0) {
nts=ccb.nTrunc - ccb.ftpIdx;
} else if ((options & 1) != 0) {
if (ccb.nTrunc <= 10) {
nts=1;
} else {
nts=1;
for (tpidx=ccb.ftpIdx; tpidx < ccb.nTrunc; tpidx++) {
if (tpidx >= 9) {
passtype=(tpidx + 2) % 3;
if (passtype == 1 || passtype == 2 ) {
nts++;
}}}
}} else {
nts=1;
}if (ccb.data == null  || ccb.data.length < ccb.dl ) {
ccb.data=Clazz.array(Byte.TYPE, [ccb.dl]);
}if (nts > 1 && (ccb.tsLengths == null  || ccb.tsLengths.length < nts ) ) {
ccb.tsLengths=Clazz.array(Integer.TYPE, [nts]);
} else if (nts > 1 && (options & (5)) == 1 ) {
$I$(14).intArraySet$IA$I(ccb.tsLengths, 0);
}var dataIdx=-1;
tpidx=ccb.ftpIdx;
var ctp=ccb.ftpIdx;
var tsidx=0;
var j;
for (l=fl - 1; l < fl + nl - 1; l++) {
ctp+=rcb.ntp[l];
if (rcb.len[l] == 0) continue;
try {
this.$in.seek$I(rcb.off[l]);
this.$in.readFully$BA$I$I(ccb.data, dataIdx + 1, rcb.len[l]);
dataIdx+=rcb.len[l];
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(15).handleException$Throwable(e);
} else {
throw e;
}
}
if (nts == 1) continue;
if ((options & 4) != 0) {
for (j=0; tpidx < ctp; j++, tpidx++) {
if (rcb.segLen[l] != null ) {
ccb.tsLengths[tsidx++]=rcb.segLen[l][j];
} else {
ccb.tsLengths[tsidx++]=rcb.len[l];
}}
} else {
for (j=0; tpidx < ctp; tpidx++) {
if (tpidx >= 9) {
passtype=(tpidx + 2) % 3;
if (passtype != 0) {
if (rcb.segLen[l] != null ) {
ccb.tsLengths[tsidx++]+=rcb.segLen[l][j++];
rcb.len[l]-=rcb.segLen[l][j - 1];
} else {
ccb.tsLengths[tsidx++]+=rcb.len[l];
rcb.len[l]=0;
}}}}
if (rcb.segLen[l] != null  && j < rcb.segLen[l].length ) {
ccb.tsLengths[tsidx]+=rcb.segLen[l][j];
rcb.len[l]-=rcb.segLen[l][j];
} else {
if (tsidx < nts) {
ccb.tsLengths[tsidx]+=rcb.len[l];
rcb.len[l]=0;
}}}}
if (nts == 1 && ccb.tsLengths != null  ) {
ccb.tsLengths[0]=ccb.dl;
}var lastlayer=fl + nl - 1;
if (lastlayer < numLayers - 1) {
for (l=lastlayer + 1; l < numLayers; l++) {
if (rcb.len[l] != 0) {
ccb.prog=true;
}}
}return ccb;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
