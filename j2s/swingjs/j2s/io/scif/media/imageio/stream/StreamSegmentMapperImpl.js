(function(){var P$=Clazz.newPackage("io.scif.media.imageio.stream"),I$=[[0,'io.scif.media.imageio.stream.StreamSegment','io.scif.media.imageio.stream.StreamSegmentMapperImpl','io.scif.media.imageio.stream.SectorStreamSegmentMapper']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StreamSegmentMapperImpl", null, null, 'io.scif.media.imageio.stream.StreamSegmentMapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['segmentPositions','long[]','segmentLengths','int[]']]]

Clazz.newMeth(C$, 'c$$JA$IA', function (segmentPositions, segmentLengths) {
;C$.$init$.apply(this);
this.segmentPositions=segmentPositions.clone$();
this.segmentLengths=segmentLengths.clone$();
}, 1);

Clazz.newMeth(C$, 'getStreamSegment$J$I', function (position, length) {
var numSegments=this.segmentLengths.length;
for (var i=0; i < numSegments; i++) {
var len=this.segmentLengths[i];
if (position < len) {
return Clazz.new_($I$(1,1).c$$J$I,[this.segmentPositions[i] + position, Math.min(len - (position|0), length)]);
}position-=len;
}
return null;
});

Clazz.newMeth(C$, 'getStreamSegment$J$I$io_scif_media_imageio_stream_StreamSegment', function (position, length, seg) {
var numSegments=this.segmentLengths.length;
for (var i=0; i < numSegments; i++) {
var len=this.segmentLengths[i];
if (position < len) {
seg.setStartPos$J(this.segmentPositions[i] + position);
seg.setSegmentLength$I(Math.min(len - (position|0), length));
return;
}position-=len;
}
seg.setStartPos$J(-1);
seg.setSegmentLength$I(-1);
return;
});

Clazz.newMeth(C$, 'length$', function () {
var numSegments=this.segmentLengths.length;
var len=0;
for (var i=0; i < numSegments; i++) {
len+=this.segmentLengths[i];
}
return len;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
