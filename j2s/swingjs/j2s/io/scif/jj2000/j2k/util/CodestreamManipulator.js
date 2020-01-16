(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),p$1={},I$=[[0,'io.scif.jj2000.j2k.io.BEBufferedRandomAccessFile','java.util.Vector','java.io.ByteArrayOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CodestreamManipulator");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.TP_HEAD_LEN=14;
C$.MAX_TPSOT=16;
}

Clazz.newMeth(C$, '$init$', function () {
this.ppt=Clazz.array(Integer.TYPE, [this.nt]);
}, 1);

C$.$fields$=[['Z',['ppmUsed','pptUsed','tempSop','tempEph'],'I',['nt','pptp','maxtp'],'O',['file','java.io.File','ppt','int[]','positions','Integer[]','mainHeader','byte[]','tileParts','byte[][][]','tileHeaders','byte[][]','packetHeaders','byte[][][]','+packetData','+sopMarkSeg']]
,['I',['TP_HEAD_LEN','MAX_TPSOT']]]

Clazz.newMeth(C$, 'c$$java_io_File$I$I$Z$Z$Z$Z', function (file, nt, pptp, ppm, ppt, tempSop, tempEph) {
;C$.$init$.apply(this);
this.file=file;
this.nt=nt;
this.pptp=pptp;
this.ppmUsed=ppm;
this.pptUsed=ppt;
this.tempSop=tempSop;
this.tempEph=tempEph;
}, 1);

Clazz.newMeth(C$, 'doCodestreamManipulation$', function () {
var addedHeaderBytes=0;
this.ppt=Clazz.array(Integer.TYPE, [this.nt]);
this.tileParts=Clazz.array(Byte.TYPE, [this.nt, null, null]);
this.tileHeaders=Clazz.array(Byte.TYPE, [this.nt, null]);
this.packetHeaders=Clazz.array(Byte.TYPE, [this.nt, null, null]);
this.packetData=Clazz.array(Byte.TYPE, [this.nt, null, null]);
this.sopMarkSeg=Clazz.array(Byte.TYPE, [this.nt, null, null]);
if (this.ppmUsed == false  && this.pptUsed == false   && this.pptp == 0 ) return 0;
var fi=Clazz.new_($I$(1,1).c$$java_io_File$S,[this.file, "rw+"]);
addedHeaderBytes-=fi.length$();
p$1.parseAndFind$io_scif_jj2000_j2k_io_BufferedRandomAccessFile.apply(this, [fi]);
p$1.readAndBuffer$io_scif_jj2000_j2k_io_BufferedRandomAccessFile.apply(this, [fi]);
fi.close$();
fi=Clazz.new_($I$(1,1).c$$java_io_File$S,[this.file, "rw"]);
p$1.createTileParts.apply(this, []);
p$1.writeNewCodestream$io_scif_jj2000_j2k_io_BufferedRandomAccessFile.apply(this, [fi]);
fi.flush$();
addedHeaderBytes+=fi.length$();
fi.close$();
return addedHeaderBytes;
});

Clazz.newMeth(C$, 'parseAndFind$io_scif_jj2000_j2k_io_BufferedRandomAccessFile', function (fi) {
var length;
var pos;
var i;
var t;
var sop=0;
var eph=0;
var marker;
var halfMarker;
var tileEnd;
var markPos=Clazz.new_($I$(2,1));
marker=($s$[0] = fi.readUnsignedShort$(), $s$[0]);
marker=($s$[0] = fi.readUnsignedShort$(), $s$[0]);
while (marker != -112){
pos=fi.getPos$();
length=fi.readUnsignedShort$();
if (marker == -174) {
var scod=fi.readUnsignedByte$();
if (this.tempSop) scod&=253;
if (this.tempEph) scod&=251;
fi.seek$I(pos + 2);
fi.write$I(scod);
}fi.seek$I(pos + length);
marker=($s$[0] = fi.readUnsignedShort$(), $s$[0]);
}
pos=fi.getPos$();
fi.seek$I(pos - 2);
for (t=0; t < this.nt; t++) {
fi.readUnsignedShort$();
pos=fi.getPos$();
markPos.addElement$TE( new Integer(fi.getPos$()));
fi.readInt$();
length=fi.readInt$();
fi.readUnsignedShort$();
tileEnd=pos + length - 2;
marker=($s$[0] = fi.readUnsignedShort$(), $s$[0]);
while (marker != -109){
pos=fi.getPos$();
length=fi.readUnsignedShort$();
if (marker == -174) {
var scod=fi.readUnsignedByte$();
if (this.tempSop) scod&=253;
if (this.tempEph) scod&=251;
fi.seek$I(pos + 2);
fi.write$I(scod);
}fi.seek$I(pos + length);
marker=($s$[0] = fi.readUnsignedShort$(), $s$[0]);
}
sop=0;
eph=0;
i=fi.getPos$();
while (i < tileEnd){
halfMarker=($s$[0] = fi.readUnsignedByte$(), $s$[0]);
if (halfMarker == 255) {
marker=($s$[0] = ((halfMarker << 8) + fi.readUnsignedByte$()), $s$[0]);
i++;
if (marker == -111) {
markPos.addElement$TE( new Integer(fi.getPos$()));
this.ppt[t]++;
sop++;
fi.skipBytes$I(4);
i+=4;
}if (marker == -110) {
markPos.addElement$TE( new Integer(fi.getPos$()));
eph++;
}}i++;
}
}
markPos.addElement$TE( new Integer(fi.getPos$() + 2));
this.positions=Clazz.array(Integer, [markPos.size$()]);
markPos.copyInto$OA(this.positions);
}, p$1);

Clazz.newMeth(C$, 'readAndBuffer$io_scif_jj2000_j2k_io_BufferedRandomAccessFile', function (fi) {
var p;
var prem;
var length;
var t;
var markIndex;
fi.seek$I(0);
length=(this.positions[0]).intValue$() - 2;
this.mainHeader=Clazz.array(Byte.TYPE, [length]);
fi.readFully$BA$I$I(this.mainHeader, 0, length);
markIndex=0;
for (t=0; t < this.nt; t++) {
prem=this.ppt[t];
this.packetHeaders[t]=Clazz.array(Byte.TYPE, [prem, null]);
this.packetData[t]=Clazz.array(Byte.TYPE, [prem, null]);
this.sopMarkSeg[t]=Clazz.array(Byte.TYPE, [prem, null]);
length=this.positions[markIndex + 1].intValue$() - this.positions[markIndex].intValue$();
this.tileHeaders[t]=Clazz.array(Byte.TYPE, [length]);
fi.readFully$BA$I$I(this.tileHeaders[t], 0, length);
markIndex++;
for (p=0; p < prem; p++) {
length=this.positions[markIndex + 1].intValue$() - this.positions[markIndex].intValue$();
if (this.tempSop) {
length-=6;
fi.skipBytes$I(6);
} else {
length-=6;
this.sopMarkSeg[t][p]=Clazz.array(Byte.TYPE, [6]);
fi.readFully$BA$I$I(this.sopMarkSeg[t][p], 0, 6);
}if (!this.tempEph) {
length+=2;
}this.packetHeaders[t][p]=Clazz.array(Byte.TYPE, [length]);
fi.readFully$BA$I$I(this.packetHeaders[t][p], 0, length);
markIndex++;
length=this.positions[markIndex + 1].intValue$() - this.positions[markIndex].intValue$();
length-=2;
if (this.tempEph) {
fi.skipBytes$I(2);
}this.packetData[t][p]=Clazz.array(Byte.TYPE, [length]);
fi.readFully$BA$I$I(this.packetData[t][p], 0, length);
markIndex++;
}
}
}, p$1);

Clazz.newMeth(C$, 'createTileParts', function () {
var i;
var prem;
var t;
var length;
var pIndex;
var phIndex;
var tppStart;
var tilePart;
var p;
var np;
var nomnp;
var numTileParts;
var numPackets;
var temp=Clazz.new_($I$(3,1));
var tempByteArr;
this.tileParts=Clazz.array(Byte.TYPE, [this.nt, null, null]);
this.maxtp=0;
for (t=0; t < this.nt; t++) {
if (this.pptp == 0) this.pptp=this.ppt[t];
prem=this.ppt[t];
numTileParts=(Math.ceil((prem) / this.pptp)|0);
numPackets=this.packetHeaders[t].length;
this.maxtp=(numTileParts > this.maxtp) ? numTileParts : this.maxtp;
this.tileParts[t]=Clazz.array(Byte.TYPE, [numTileParts, null]);
tppStart=0;
pIndex=0;
p=0;
phIndex=0;
for (tilePart=0; tilePart < numTileParts; tilePart++) {
nomnp=(this.pptp > prem) ? prem : this.pptp;
np=nomnp;
if (tilePart == 0) {
temp.write$BA$I$I(this.tileHeaders[t], 0, this.tileHeaders[t].length - 2);
} else {
temp.write$BA$I$I(Clazz.array(Byte.TYPE, [C$.TP_HEAD_LEN - 2]), 0, C$.TP_HEAD_LEN - 2);
}if (this.pptUsed) {
var pptLength=3;
var pptIndex=0;
var phLength;
p=pIndex;
while (np > 0){
phLength=this.packetHeaders[t][p].length;
if (pptLength + phLength > 65535) {
temp.write$I(16777215);
temp.write$I(-159);
temp.write$I(pptLength >>> 8);
temp.write$I(pptLength);
temp.write$I(pptIndex++);
for (i=pIndex; i < p; i++) {
temp.write$BA$I$I(this.packetHeaders[t][i], 0, this.packetHeaders[t][i].length);
}
pptLength=3;
pIndex=p;
}pptLength+=phLength;
p++;
np--;
}
temp.write$I(16777215);
temp.write$I(-159);
temp.write$I(pptLength >>> 8);
temp.write$I(pptLength);
temp.write$I(pptIndex);
for (i=pIndex; i < p; i++) {
temp.write$BA$I$I(this.packetHeaders[t][i], 0, this.packetHeaders[t][i].length);
}
}pIndex=p;
np=nomnp;
temp.write$I(16777215);
temp.write$I(-109);
for (p=tppStart; p < tppStart + np; p++) {
if (!this.tempSop) {
temp.write$BA$I$I(this.sopMarkSeg[t][p], 0, 6);
}if (!(this.ppmUsed || this.pptUsed )) {
temp.write$BA$I$I(this.packetHeaders[t][p], 0, this.packetHeaders[t][p].length);
}temp.write$BA$I$I(this.packetData[t][p], 0, this.packetData[t][p].length);
}
tppStart+=np;
tempByteArr=temp.toByteArray$();
this.tileParts[t][tilePart]=tempByteArr;
length=temp.size$();
if (tilePart == 0) {
tempByteArr[6]=(((length >>> 24)|0)|0);
tempByteArr[7]=(((length >>> 16)|0)|0);
tempByteArr[8]=(((length >>> 8)|0)|0);
tempByteArr[9]=(((length)|0)|0);
tempByteArr[10]=(0|0);
tempByteArr[11]=(((numTileParts)|0)|0);
} else {
tempByteArr[0]=(-1|0);
tempByteArr[1]=(-112|0);
tempByteArr[2]=(0|0);
tempByteArr[3]=(10|0);
tempByteArr[4]=(((t >> 8)|0)|0);
tempByteArr[5]=(((t)|0)|0);
tempByteArr[6]=(((length >>> 24)|0)|0);
tempByteArr[7]=(((length >>> 16)|0)|0);
tempByteArr[8]=(((length >>> 8)|0)|0);
tempByteArr[9]=(((length)|0)|0);
tempByteArr[10]=(((tilePart)|0)|0);
tempByteArr[11]=(((numTileParts)|0)|0);
}temp.reset$();
prem-=np;
}
}
temp.close$();
}, p$1);

Clazz.newMeth(C$, 'writeNewCodestream$io_scif_jj2000_j2k_io_BufferedRandomAccessFile', function (fi) {
var i;
var t;
var p;
var tp;
var numTiles=this.tileParts.length;
var packetHeaderLengths=Clazz.array(Integer.TYPE, [numTiles, this.maxtp]);
var temp;
var length;
fi.write$BA$I$I(this.mainHeader, 0, this.mainHeader.length);
if (this.ppmUsed) {
var ppmMarkerSegment=Clazz.new_($I$(3,1));
var numPackets;
var totNumPackets;
var ppmIndex=0;
var ppmLength;
var pStart;
var pStop;
var prem=Clazz.array(Integer.TYPE, [numTiles]);
for (t=0; t < numTiles; t++) prem[t]=this.packetHeaders[t].length;

for (tp=0; tp < this.maxtp; tp++) {
for (t=0; t < numTiles; t++) {
if (this.tileParts[t].length > tp) {
totNumPackets=this.packetHeaders[t].length;
numPackets=(tp == this.tileParts[t].length - 1) ? prem[t] : this.pptp;
pStart=totNumPackets - prem[t];
pStop=pStart + numPackets;
for (p=pStart; p < pStop; p++) packetHeaderLengths[t][tp]+=this.packetHeaders[t][p].length;

prem[t]-=numPackets;
}}
}
ppmMarkerSegment.write$I(16777215);
ppmMarkerSegment.write$I(-160);
ppmMarkerSegment.write$I(0);
ppmMarkerSegment.write$I(0);
ppmMarkerSegment.write$I(0);
ppmLength=3;
ppmIndex++;
for (t=0; t < numTiles; t++) prem[t]=this.packetHeaders[t].length;

for (tp=0; tp < this.maxtp; tp++) {
for (t=0; t < numTiles; t++) {
if (this.tileParts[t].length > tp) {
totNumPackets=this.packetHeaders[t].length;
numPackets=(tp == this.tileParts[t].length - 1) ? prem[t] : this.pptp;
pStart=totNumPackets - prem[t];
pStop=pStart + numPackets;
if (ppmLength + 4 > 65535) {
temp=ppmMarkerSegment.toByteArray$();
length=temp.length - 2;
temp[2]=(((length >>> 8)|0)|0);
temp[3]=((length|0)|0);
fi.write$BA$I$I(temp, 0, length + 2);
ppmMarkerSegment.reset$();
ppmMarkerSegment.write$I(16777215);
ppmMarkerSegment.write$I(-160);
ppmMarkerSegment.write$I(0);
ppmMarkerSegment.write$I(0);
ppmMarkerSegment.write$I(ppmIndex++);
ppmLength=3;
}length=packetHeaderLengths[t][tp];
ppmMarkerSegment.write$I(length >>> 24);
ppmMarkerSegment.write$I(length >>> 16);
ppmMarkerSegment.write$I(length >>> 8);
ppmMarkerSegment.write$I(length);
ppmLength+=4;
for (p=pStart; p < pStop; p++) {
length=this.packetHeaders[t][p].length;
if (ppmLength + length > 65535) {
temp=ppmMarkerSegment.toByteArray$();
length=temp.length - 2;
temp[2]=(((length >>> 8)|0)|0);
temp[3]=((length|0)|0);
fi.write$BA$I$I(temp, 0, length + 2);
ppmMarkerSegment.reset$();
ppmMarkerSegment.write$I(16777215);
ppmMarkerSegment.write$I(-160);
ppmMarkerSegment.write$I(0);
ppmMarkerSegment.write$I(0);
ppmMarkerSegment.write$I(ppmIndex++);
ppmLength=3;
}ppmMarkerSegment.write$BA$I$I(this.packetHeaders[t][p], 0, this.packetHeaders[t][p].length);
ppmLength+=this.packetHeaders[t][p].length;
}
prem[t]-=numPackets;
}}
}
temp=ppmMarkerSegment.toByteArray$();
length=temp.length - 2;
temp[2]=(((length >>> 8)|0)|0);
temp[3]=((length|0)|0);
fi.write$BA$I$I(temp, 0, length + 2);
}for (tp=0; tp < this.maxtp; tp++) for (t=0; t < this.nt; t++) {
if (this.tileParts[t].length >= tp) {
temp=this.tileParts[t][tp];
length=temp.length;
fi.write$BA$I$I(temp, 0, length);
}}

fi.writeShort$I(-39);
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
