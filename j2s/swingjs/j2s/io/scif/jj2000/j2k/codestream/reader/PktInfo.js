(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PktInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cbOff=0;
}, 1);

C$.$fields$=[['I',['packetIdx','layerIdx','cbOff','cbLength','numTruncPnts'],'O',['segLengths','int[]']]]

Clazz.newMeth(C$, 'c$$I$I', function (lyIdx, pckIdx) {
;C$.$init$.apply(this);
this.layerIdx=lyIdx;
this.packetIdx=pckIdx;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "packet " + this.packetIdx + " (lay:" + this.layerIdx + ", off:" + this.cbOff + ", len:" + this.cbLength + ", numTruncPnts:" + this.numTruncPnts + ")\n" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
