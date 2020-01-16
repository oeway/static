(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnWTFilterFloat", null, 'io.scif.jj2000.j2k.wavelet.analysis.AnWTFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'analyze_lpf$O$I$I$I$O$I$I$O$I$I', function (inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep) {
this.analyze_lpf$FA$I$I$I$FA$I$I$FA$I$I(inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep);
});

Clazz.newMeth(C$, 'analyze_hpf$O$I$I$I$O$I$I$O$I$I', function (inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep) {
this.analyze_hpf$FA$I$I$I$FA$I$I$FA$I$I(inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep);
});

Clazz.newMeth(C$, 'getDataType$', function () {
return 4;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
