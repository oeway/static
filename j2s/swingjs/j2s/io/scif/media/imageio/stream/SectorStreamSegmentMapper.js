(function(){var P$=Clazz.newPackage("io.scif.media.imageio.stream"),I$=[[0,'io.scif.media.imageio.stream.StreamSegment','io.scif.media.imageio.stream.StreamSegmentMapperImpl','io.scif.media.imageio.stream.SectorStreamSegmentMapper']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SectorStreamSegmentMapper", null, null, 'io.scif.media.imageio.stream.StreamSegmentMapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['segmentLength','totalLength','lastSegmentLength'],'O',['segmentPositions','long[]']]]

Clazz.newMeth(C$, 'c$$JA$I$I', function (segmentPositions, segmentLength, totalLength) {
;C$.$init$.apply(this);
this.segmentPositions=segmentPositions.clone$();
this.segmentLength=segmentLength;
this.totalLength=totalLength;
this.lastSegmentLength=totalLength - (segmentPositions.length - 1) * segmentLength;
}, 1);

Clazz.newMeth(C$, 'getStreamSegment$J$I', function (position, length) {
var index=(((position/this.segmentLength|0))|0);
var len=(index == this.segmentPositions.length - 1) ? this.lastSegmentLength : this.segmentLength;
position-=index * this.segmentLength;
len-=position;
if (len > length) {
len=length;
}return Clazz.new_($I$(1,1).c$$J$I,[this.segmentPositions[index] + position, len]);
});

Clazz.newMeth(C$, 'getStreamSegment$J$I$io_scif_media_imageio_stream_StreamSegment', function (position, length, seg) {
var index=(((position/this.segmentLength|0))|0);
var len=(index == this.segmentPositions.length - 1) ? this.lastSegmentLength : this.segmentLength;
position-=index * this.segmentLength;
len-=position;
if (len > length) {
len=length;
}seg.setStartPos$J(this.segmentPositions[index] + position);
seg.setSegmentLength$I(len);
});

Clazz.newMeth(C$, 'length$', function () {
return this.totalLength;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
