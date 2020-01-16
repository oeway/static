(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.writer"),p$1={},I$=[[0,'java.io.BufferedOutputStream','java.io.FileOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileCodestreamWriter", null, 'io.scif.jj2000.j2k.codestream.writer.CodestreamWriter', 'io.scif.jj2000.j2k.codestream.Markers');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DEF_BUF_LEN=1024;
}

Clazz.newMeth(C$, '$init$', function () {
this.tileIdx=0;
this.$ndata=0;
this.packetIdx=0;
this.offLastROIPkt=0;
this.lenLastNoROI=0;
}, 1);

C$.$fields$=[['I',['tileIdx','$ndata','packetIdx','offLastROIPkt','lenLastNoROI'],'O',['out','java.io.OutputStream','sopMarker','byte[]','+ephMarker']]
,['I',['DEF_BUF_LEN']]]

Clazz.newMeth(C$, 'c$$java_io_File$I', function (file, mb) {
;C$.superclazz.c$$I.apply(this,[mb]);C$.$init$.apply(this);
this.out=Clazz.new_($I$(1,1).c$$java_io_OutputStream$I,[Clazz.new_($I$(2,1).c$$java_io_File,[file]), C$.DEF_BUF_LEN]);
p$1.initSOP_EPHArrays.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (fname, mb) {
;C$.superclazz.c$$I.apply(this,[mb]);C$.$init$.apply(this);
this.out=Clazz.new_($I$(1,1).c$$java_io_OutputStream$I,[Clazz.new_($I$(2,1).c$$S,[fname]), C$.DEF_BUF_LEN]);
p$1.initSOP_EPHArrays.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$I', function (os, mb) {
;C$.superclazz.c$$I.apply(this,[mb]);C$.$init$.apply(this);
this.out=os;
p$1.initSOP_EPHArrays.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getMaxAvailableBytes$', function () {
return this.maxBytes - this.$ndata;
});

Clazz.newMeth(C$, 'getLength$', function () {
if (this.getMaxAvailableBytes$() >= 0) {
return this.$ndata;
} else {
return this.maxBytes;
}});

Clazz.newMeth(C$, 'writePacketHead$BA$I$Z$Z$Z', function (head, hlen, sim, sop, eph) {
var len=hlen + (sop ? 6 : ($s$[0] = 0, $s$[0])) + (eph ? 2 : ($s$[0] = 0, $s$[0])) ;
if (!sim) {
if (this.getMaxAvailableBytes$() < len) {
len=this.getMaxAvailableBytes$();
}if (len > 0) {
if (sop) {
this.sopMarker[4]=(((this.packetIdx >> 8)|0)|0);
this.sopMarker[5]=(((this.packetIdx)|0)|0);
this.out.write$BA$I$I(this.sopMarker, 0, 6);
this.packetIdx++;
if (this.packetIdx > 65535) {
this.packetIdx=0;
}}this.out.write$BA$I$I(head, 0, hlen);
this.$ndata+=len;
if (eph) {
this.out.write$BA$I$I(this.ephMarker, 0, 2);
}this.lenLastNoROI+=len;
}}return len;
});

Clazz.newMeth(C$, 'writePacketBody$BA$I$Z$Z$I', function (body, blen, sim, roiInPkt, roiLen) {
var len=blen;
if (!sim) {
len=blen;
if (this.getMaxAvailableBytes$() < len) {
len=this.getMaxAvailableBytes$();
}if (blen > 0) {
this.out.write$BA$I$I(body, 0, len);
}this.$ndata+=len;
if (roiInPkt) {
this.offLastROIPkt+=this.lenLastNoROI + roiLen;
this.lenLastNoROI=len - roiLen;
} else {
this.lenLastNoROI+=len;
}}return len;
});

Clazz.newMeth(C$, 'close$', function () {
this.out.write$I(-1);
this.out.write$I(-39);
this.$ndata+=2;
this.out.close$();
});

Clazz.newMeth(C$, 'getOffLastROIPkt$', function () {
return this.offLastROIPkt;
});

Clazz.newMeth(C$, 'commitBitstreamHeader$io_scif_jj2000_j2k_codestream_writer_HeaderEncoder', function (he) {
this.$ndata+=he.getLength$();
he.writeTo$java_io_OutputStream(this.out);
this.packetIdx=0;
this.lenLastNoROI+=he.getLength$();
});

Clazz.newMeth(C$, 'initSOP_EPHArrays', function () {
this.sopMarker=Clazz.array(Byte.TYPE, [6]);
this.sopMarker[0]=(-1|0);
this.sopMarker[1]=(-111|0);
this.sopMarker[2]=(0|0);
this.sopMarker[3]=(4|0);
this.ephMarker=Clazz.array(Byte.TYPE, [2]);
this.ephMarker[0]=(-1|0);
this.ephMarker[1]=(-110|0);
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
