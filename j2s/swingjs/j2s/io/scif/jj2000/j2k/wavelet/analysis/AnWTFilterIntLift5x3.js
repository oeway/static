(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnWTFilterIntLift5x3", null, 'io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterInt');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LPSynthesisFilter=Clazz.array(Float.TYPE, -1, [0.5, 1.0, 0.5]);
C$.HPSynthesisFilter=Clazz.array(Float.TYPE, -1, [-0.125, -0.25, 0.75, -0.25, -0.125]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['LPSynthesisFilter','float[]','+HPSynthesisFilter']]]

Clazz.newMeth(C$, 'analyze_lpf$IA$I$I$I$IA$I$I$IA$I$I', function (inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep) {
var i;
var iStep=2 * inStep;
var ik;
var lk;
var hk;
ik=inOff + inStep;
hk=highOff;
for (i=1; i < inLen - 1; i+=2) {
highSig[hk]=inSig[ik] - ((inSig[ik - inStep] + inSig[ik + inStep]) >> 1);
ik+=iStep;
hk+=highStep;
}
if (inLen % 2 == 0) {
highSig[hk]=inSig[ik] - ((2 * inSig[ik - inStep]) >> 1);
}ik=inOff;
lk=lowOff;
hk=highOff;
if (inLen > 1) {
lowSig[lk]=inSig[ik] + ((highSig[hk] + 1) >> 1);
} else {
lowSig[lk]=inSig[ik];
}ik+=iStep;
lk+=lowStep;
hk+=highStep;
for (i=2; i < inLen - 1; i+=2) {
lowSig[lk]=inSig[ik] + ((highSig[hk - highStep] + highSig[hk] + 2 ) >> 2);
ik+=iStep;
lk+=lowStep;
hk+=highStep;
}
if (inLen % 2 == 1) {
if (inLen > 2) {
lowSig[lk]=inSig[ik] + ((2 * highSig[hk - highStep] + 2) >> 2);
}}});

Clazz.newMeth(C$, 'analyze_hpf$IA$I$I$I$IA$I$I$IA$I$I', function (inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep) {
var i;
var iStep=2 * inStep;
var ik;
var lk;
var hk;
ik=inOff;
hk=highOff;
if (inLen > 1) {
highSig[hk]=inSig[ik] - inSig[ik + inStep];
} else {
highSig[hk]=inSig[ik] << 1;
}ik+=iStep;
hk+=highStep;
if (inLen > 3) {
for (i=2; i < inLen - 1; i+=2) {
highSig[hk]=inSig[ik] - ((inSig[ik - inStep] + inSig[ik + inStep]) >> 1);
ik+=iStep;
hk+=highStep;
}
}if (inLen % 2 == 1 && inLen > 1 ) {
highSig[hk]=inSig[ik] - inSig[ik - inStep];
}ik=inOff + inStep;
lk=lowOff;
hk=highOff;
for (i=1; i < inLen - 1; i+=2) {
lowSig[lk]=inSig[ik] + ((highSig[hk] + highSig[hk + highStep] + 2 ) >> 2);
ik+=iStep;
lk+=lowStep;
hk+=highStep;
}
if (inLen > 1 && inLen % 2 == 0 ) {
lowSig[lk]=inSig[ik] + ((2 * highSig[hk] + 2) >> 2);
}});

Clazz.newMeth(C$, 'getAnLowNegSupport$', function () {
return 2;
});

Clazz.newMeth(C$, 'getAnLowPosSupport$', function () {
return 2;
});

Clazz.newMeth(C$, 'getAnHighNegSupport$', function () {
return 1;
});

Clazz.newMeth(C$, 'getAnHighPosSupport$', function () {
return 1;
});

Clazz.newMeth(C$, 'getSynLowNegSupport$', function () {
return 1;
});

Clazz.newMeth(C$, 'getSynLowPosSupport$', function () {
return 1;
});

Clazz.newMeth(C$, 'getSynHighNegSupport$', function () {
return 2;
});

Clazz.newMeth(C$, 'getSynHighPosSupport$', function () {
return 2;
});

Clazz.newMeth(C$, 'getLPSynthesisFilter$', function () {
return C$.LPSynthesisFilter;
});

Clazz.newMeth(C$, 'getHPSynthesisFilter$', function () {
return C$.HPSynthesisFilter;
});

Clazz.newMeth(C$, 'getImplType$', function () {
return 0;
});

Clazz.newMeth(C$, 'isReversible$', function () {
return true;
});

Clazz.newMeth(C$, 'isSameAsFullWT$I$I$I', function (tailOvrlp, headOvrlp, inLen) {
if (inLen % 2 == 0) {
if (tailOvrlp >= 2 && headOvrlp >= 1 ) return true;
 else return false;
} else {
if (tailOvrlp >= 2 && headOvrlp >= 2 ) return true;
 else return false;
}});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return obj === this  || Clazz.instanceOf(obj, "io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterIntLift5x3") ;
});

Clazz.newMeth(C$, 'getFilterType$', function () {
return 1;
});

Clazz.newMeth(C$, 'toString', function () {
return "w5x3";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
