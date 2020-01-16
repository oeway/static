(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnWTFilterFloatLift9x7", null, 'io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterFloat');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LPSynthesisFilter=Clazz.array(Float.TYPE, -1, [-0.091272, -0.057544, 0.591272, 1.115087, 0.591272, -0.057544, -0.091272]);
C$.HPSynthesisFilter=Clazz.array(Float.TYPE, -1, [0.026749, 0.016864, -0.078223, -0.266864, 0.602949, -0.266864, -0.078223, 0.016864, 0.026749]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['LPSynthesisFilter','float[]','+HPSynthesisFilter']]]

Clazz.newMeth(C$, 'analyze_lpf$FA$I$I$I$FA$I$I$FA$I$I', function (inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep) {
var i;
var maxi;
var iStep=2 * inStep;
var ik;
var lk;
var hk;
ik=inOff + inStep;
lk=lowOff;
hk=highOff;
for (i=1, maxi=inLen - 1; i < maxi; i+=2) {
highSig[hk]=inSig[ik] + -1.5861343 * (inSig[ik - inStep] + inSig[ik + inStep]);
ik+=iStep;
hk+=highStep;
}
if (inLen % 2 == 0) {
highSig[hk]=inSig[ik] + 2 * -1.5861343 * inSig[ik - inStep] ;
}ik=inOff;
lk=lowOff;
hk=highOff;
if (inLen > 1) {
lowSig[lk]=inSig[ik] + 2 * -0.052980117 * highSig[hk] ;
} else {
lowSig[lk]=inSig[ik];
}ik+=iStep;
lk+=lowStep;
hk+=highStep;
for (i=2, maxi=inLen - 1; i < maxi; i+=2) {
lowSig[lk]=inSig[ik] + -0.052980117 * (highSig[hk - highStep] + highSig[hk]);
ik+=iStep;
lk+=lowStep;
hk+=highStep;
}
if ((inLen % 2 == 1) && (inLen > 2) ) {
lowSig[lk]=inSig[ik] + 2 * -0.052980117 * highSig[hk - highStep] ;
}lk=lowOff;
hk=highOff;
for (i=1, maxi=inLen - 1; i < maxi; i+=2) {
highSig[hk] += 0.8829111 * (lowSig[lk] + lowSig[lk + lowStep]);
lk+=lowStep;
hk+=highStep;
}
if (inLen % 2 == 0) {
highSig[hk] += 2 * 0.8829111 * lowSig[lk] ;
}lk=lowOff;
hk=highOff;
if (inLen > 1) {
lowSig[lk] += 2 * 0.44356853 * highSig[hk] ;
}lk+=lowStep;
hk+=highStep;
for (i=2, maxi=inLen - 1; i < maxi; i+=2) {
lowSig[lk] += 0.44356853 * (highSig[hk - highStep] + highSig[hk]);
lk+=lowStep;
hk+=highStep;
}
if ((inLen % 2 == 1) && (inLen > 2) ) {
lowSig[lk] += 2 * 0.44356853 * highSig[hk - highStep] ;
}lk=lowOff;
hk=highOff;
for (i=0; i < (inLen >> 1); i++) {
lowSig[lk] *= 0.8128931;
highSig[hk] *= 1.2301741;
lk+=lowStep;
hk+=highStep;
}
if (inLen % 2 == 1 && inLen != 1 ) {
lowSig[lk] *= 0.8128931;
}});

Clazz.newMeth(C$, 'analyze_hpf$FA$I$I$I$FA$I$I$FA$I$I', function (inSig, inOff, inLen, inStep, lowSig, lowOff, lowStep, highSig, highOff, highStep) {
var i;
var maxi;
var iStep=2 * inStep;
var ik;
var lk;
var hk;
ik=inOff;
lk=lowOff;
hk=highOff;
if (inLen > 1) {
highSig[hk]=inSig[ik] + 2 * -1.5861343 * inSig[ik + inStep] ;
} else {
highSig[hk]=inSig[ik] * 2;
}ik+=iStep;
hk+=highStep;
for (i=2; i < inLen - 1; i+=2) {
highSig[hk]=inSig[ik] + -1.5861343 * (inSig[ik - inStep] + inSig[ik + inStep]);
ik+=iStep;
hk+=highStep;
}
if ((inLen % 2 == 1) && (inLen > 1) ) {
highSig[hk]=inSig[ik] + 2 * -1.5861343 * inSig[ik - inStep] ;
}ik=inOff + inStep;
lk=lowOff;
hk=highOff;
for (i=1; i < inLen - 1; i+=2) {
lowSig[lk]=inSig[ik] + -0.052980117 * (highSig[hk] + highSig[hk + highStep]);
ik+=iStep;
lk+=lowStep;
hk+=highStep;
}
if (inLen > 1 && inLen % 2 == 0 ) {
lowSig[lk]=inSig[ik] + 2 * -0.052980117 * highSig[hk] ;
}lk=lowOff;
hk=highOff;
if (inLen > 1) {
highSig[hk] += 0.8829111 * 2 * lowSig[lk] ;
}hk+=highStep;
for (i=2; i < inLen - 1; i+=2) {
highSig[hk] += 0.8829111 * (lowSig[lk] + lowSig[lk + lowStep]);
lk+=lowStep;
hk+=highStep;
}
if (inLen > 1 && inLen % 2 == 1 ) {
highSig[hk] += 0.8829111 * 2 * lowSig[lk] ;
}lk=lowOff;
hk=highOff;
for (i=1; i < inLen - 1; i+=2) {
lowSig[lk] += 0.44356853 * (highSig[hk] + highSig[hk + highStep]);
lk+=lowStep;
hk+=highStep;
}
if (inLen > 1 && inLen % 2 == 0 ) {
lowSig[lk] += 0.44356853 * 2 * highSig[hk] ;
}lk=lowOff;
hk=highOff;
for (i=0; i < (inLen >> 1); i++) {
lowSig[lk] *= 0.8128931;
highSig[hk] *= 1.2301741;
lk+=lowStep;
hk+=highStep;
}
if (inLen % 2 == 1 && inLen != 1 ) {
highSig[hk] *= 1.2301741;
}});

Clazz.newMeth(C$, 'getAnLowNegSupport$', function () {
return 4;
});

Clazz.newMeth(C$, 'getAnLowPosSupport$', function () {
return 4;
});

Clazz.newMeth(C$, 'getAnHighNegSupport$', function () {
return 3;
});

Clazz.newMeth(C$, 'getAnHighPosSupport$', function () {
return 3;
});

Clazz.newMeth(C$, 'getSynLowNegSupport$', function () {
return 3;
});

Clazz.newMeth(C$, 'getSynLowPosSupport$', function () {
return 3;
});

Clazz.newMeth(C$, 'getSynHighNegSupport$', function () {
return 4;
});

Clazz.newMeth(C$, 'getSynHighPosSupport$', function () {
return 4;
});

Clazz.newMeth(C$, 'getLPSynthesisFilter$', function () {
return C$.LPSynthesisFilter;
});

Clazz.newMeth(C$, 'getHPSynthesisFilter$', function () {
return C$.HPSynthesisFilter;
});

Clazz.newMeth(C$, 'getImplType$', function () {
return 1;
});

Clazz.newMeth(C$, 'isReversible$', function () {
return false;
});

Clazz.newMeth(C$, 'isSameAsFullWT$I$I$I', function (tailOvrlp, headOvrlp, inLen) {
if (inLen % 2 == 0) {
if (tailOvrlp >= 4 && headOvrlp >= 3 ) return true;
 else return false;
} else {
if (tailOvrlp >= 4 && headOvrlp >= 4 ) return true;
 else return false;
}});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return obj === this  || Clazz.instanceOf(obj, "io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterFloatLift9x7") ;
});

Clazz.newMeth(C$, 'getFilterType$', function () {
return 0;
});

Clazz.newMeth(C$, 'toString', function () {
return "w9x7";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
