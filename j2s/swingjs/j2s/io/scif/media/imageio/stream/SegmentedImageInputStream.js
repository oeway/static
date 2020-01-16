(function(){var P$=Clazz.newPackage("io.scif.media.imageio.stream"),I$=[[0,'io.scif.media.imageio.stream.StreamSegment','io.scif.media.imageio.stream.StreamSegmentMapperImpl','io.scif.media.imageio.stream.SectorStreamSegmentMapper']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SegmentedImageInputStream", null, 'javax.imageio.stream.ImageInputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.streamSegment=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['stream','javax.imageio.stream.ImageInputStream','mapper','io.scif.media.imageio.stream.StreamSegmentMapper','streamSegment','io.scif.media.imageio.stream.StreamSegment']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageio_stream_StreamSegmentMapper', function (stream, mapper) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.stream=stream;
this.mapper=mapper;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$JA$IA', function (stream, segmentPositions, segmentLengths) {
C$.c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageio_stream_StreamSegmentMapper.apply(this, [stream, Clazz.new_($I$(2,1).c$$JA$IA,[segmentPositions, segmentLengths])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$JA$I$I', function (stream, segmentPositions, segmentLength, totalLength) {
C$.c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageio_stream_StreamSegmentMapper.apply(this, [stream, Clazz.new_($I$(3,1).c$$JA$I$I,[segmentPositions, segmentLength, totalLength])]);
}, 1);

Clazz.newMeth(C$, 'read$', function () {
this.mapper.getStreamSegment$J$I$io_scif_media_imageio_stream_StreamSegment(this.streamPos, 1, this.streamSegment);
var streamSegmentLength=this.streamSegment.getSegmentLength$();
if (streamSegmentLength < 0) {
return -1;
}this.stream.seek$J(this.streamSegment.getStartPos$());
var val=this.stream.read$();
++this.streamPos;
return val;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, off, len) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if ((off < 0) || (len < 0) || (off + len > b.length)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (len == 0) {
return 0;
}this.mapper.getStreamSegment$J$I$io_scif_media_imageio_stream_StreamSegment(this.streamPos, len, this.streamSegment);
var streamSegmentLength=this.streamSegment.getSegmentLength$();
if (streamSegmentLength < 0) {
return -1;
}this.stream.seek$J(this.streamSegment.getStartPos$());
var nbytes=this.stream.read$BA$I$I(b, off, streamSegmentLength);
this.streamPos+=nbytes;
return nbytes;
});

Clazz.newMeth(C$, 'length$', function () {
var len;
if (Clazz.instanceOf(this.mapper, "io.scif.media.imageio.stream.StreamSegmentMapperImpl")) {
len=(this.mapper).length$();
} else if (Clazz.instanceOf(this.mapper, "io.scif.media.imageio.stream.SectorStreamSegmentMapper")) {
len=(this.mapper).length$();
} else if (this.mapper != null ) {
var pos=len=0;
var seg=this.mapper.getStreamSegment$J$I(pos, 2147483647);
while ((len=seg.getSegmentLength$()) > 0){
pos+=len;
seg.setSegmentLength$I(0);
this.mapper.getStreamSegment$J$I$io_scif_media_imageio_stream_StreamSegment(pos, 2147483647, seg);
}
len=pos;
} else {
len=C$.superclazz.prototype.length$.apply(this, []);
}return len;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
