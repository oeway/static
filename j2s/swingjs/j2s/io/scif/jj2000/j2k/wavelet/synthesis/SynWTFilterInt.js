(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SynWTFilterInt", null, 'io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'synthetize_lpf$O$I$I$I$O$I$I$I$O$I$I', function (lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep) {
this.synthetize_lpf$IA$I$I$I$IA$I$I$I$IA$I$I(lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep);
});

Clazz.newMeth(C$, 'synthetize_hpf$O$I$I$I$O$I$I$I$O$I$I', function (lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep) {
this.synthetize_hpf$IA$I$I$I$IA$I$I$I$IA$I$I(lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep);
});

Clazz.newMeth(C$, 'getDataType$', function () {
return 3;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
