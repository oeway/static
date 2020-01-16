(function(){var P$=Clazz.newPackage("io.scif.media.imageio.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StreamSegment");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.startPos=0;
this.segmentLength=0;
}, 1);

C$.$fields$=[['I',['segmentLength'],'L',['startPos']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (startPos, segmentLength) {
;C$.$init$.apply(this);
this.startPos=startPos;
this.segmentLength=segmentLength;
}, 1);

Clazz.newMeth(C$, 'getStartPos$', function () {
return this.startPos;
});

Clazz.newMeth(C$, 'setStartPos$J', function (startPos) {
this.startPos=startPos;
});

Clazz.newMeth(C$, 'getSegmentLength$', function () {
return this.segmentLength;
});

Clazz.newMeth(C$, 'setSegmentLength$I', function (segmentLength) {
this.segmentLength=segmentLength;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
