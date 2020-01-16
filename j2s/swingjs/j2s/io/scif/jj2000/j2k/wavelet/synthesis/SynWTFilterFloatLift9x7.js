(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SynWTFilterFloatLift9x7", null, 'io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterFloat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'synthetize_lpf$FA$I$I$I$FA$I$I$I$FA$I$I', function (lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep) {
var i;
var outLen=lowLen + highLen;
var iStep=2 * outStep;
var ik;
var lk;
var hk;
var sample=0;
lk=lowOff;
hk=highOff;
ik=outOff;
if (outLen > 1) {
outSig[ik]=lowSig[lk] / 0.8128931 - 2 * 0.44350687 * highSig[hk]  / 1.2301741;
} else {
outSig[ik]=lowSig[lk];
}lk+=lowStep;
hk+=highStep;
ik+=iStep;
for (i=2; i < outLen - 1; i+=2, ik+=iStep, lk+=lowStep, hk+=highStep) {
outSig[ik]=lowSig[lk] / 0.8128931 - 0.44350687 * (highSig[hk - highStep] + highSig[hk]) / 1.2301741;
}
if (outLen % 2 == 1) {
if (outLen > 2) {
outSig[ik]=lowSig[lk] / 0.8128931 - 2 * 0.44350687 * highSig[hk - highStep]  / 1.2301741;
}}lk=lowOff;
hk=highOff;
ik=outOff + outStep;
for (i=1; i < outLen - 1; i+=2, ik+=iStep, hk+=highStep, lk+=lowStep) {
outSig[ik]=highSig[hk] / 1.2301741 - 0.8829111 * (outSig[ik - outStep] + outSig[ik + outStep]);
}
if (outLen % 2 == 0) {
outSig[ik]=highSig[hk] / 1.2301741 - 2 * 0.8829111 * outSig[ik - outStep] ;
}ik=outOff;
if (outLen > 1) {
outSig[ik] -= 2 * -0.052980117 * outSig[ik + outStep] ;
}ik+=iStep;
for (i=2; i < outLen - 1; i+=2, ik+=iStep) {
outSig[ik] -= -0.052980117 * (outSig[ik - outStep] + outSig[ik + outStep]);
}
if (outLen % 2 == 1 && outLen > 2 ) {
outSig[ik] -= 2 * -0.052980117 * outSig[ik - outStep] ;
}ik=outOff + outStep;
for (i=1; i < outLen - 1; i+=2, ik+=iStep) {
outSig[ik] -= -1.5861343 * (outSig[ik - outStep] + outSig[ik + outStep]);
}
if (outLen % 2 == 0) {
outSig[ik] -= 2 * -1.5861343 * outSig[ik - outStep] ;
}});

Clazz.newMeth(C$, 'synthetize_hpf$FA$I$I$I$FA$I$I$I$FA$I$I', function (lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep) {
var i;
var outLen=lowLen + highLen;
var iStep=2 * outStep;
var ik;
var lk;
var hk;
lk=lowOff;
hk=highOff;
if (outLen != 1) {
var outLen2=outLen >> 1;
for (i=0; i < outLen2; i++) {
lowSig[lk] /= 0.8128931;
highSig[hk] /= 1.2301741;
lk+=lowStep;
hk+=highStep;
}
if (outLen % 2 == 1) {
highSig[hk] /= 1.2301741;
}} else {
highSig[highOff] /= 2;
}lk=lowOff;
hk=highOff;
ik=outOff + outStep;
for (i=1; i < outLen - 1; i+=2) {
outSig[ik]=lowSig[lk] - 0.44350687 * (highSig[hk] + highSig[hk + highStep]);
ik+=iStep;
lk+=lowStep;
hk+=highStep;
}
if (outLen % 2 == 0 && outLen > 1 ) {
outSig[ik]=lowSig[lk] - 2 * 0.44350687 * highSig[hk] ;
}hk=highOff;
ik=outOff;
if (outLen > 1) {
outSig[ik]=highSig[hk] - 2 * 0.8829111 * outSig[ik + outStep] ;
} else {
outSig[ik]=highSig[hk];
}ik+=iStep;
hk+=highStep;
for (i=2; i < outLen - 1; i+=2) {
outSig[ik]=highSig[hk] - 0.8829111 * (outSig[ik - outStep] + outSig[ik + outStep]);
ik+=iStep;
hk+=highStep;
}
if (outLen % 2 == 1 && outLen > 1 ) {
outSig[ik]=highSig[hk] - 2 * 0.8829111 * outSig[ik - outStep] ;
}ik=outOff + outStep;
for (i=1; i < outLen - 1; i+=2) {
outSig[ik] -= -0.052980117 * (outSig[ik - outStep] + outSig[ik + outStep]);
ik+=iStep;
}
if (outLen % 2 == 0 && outLen > 1 ) {
outSig[ik] -= 2 * -0.052980117 * outSig[ik - outStep] ;
}ik=outOff;
if (outLen > 1) {
outSig[ik] -= 2 * -1.5861343 * outSig[ik + outStep] ;
}ik+=iStep;
for (i=2; i < outLen - 1; i+=2) {
outSig[ik] -= -1.5861343 * (outSig[ik - outStep] + outSig[ik + outStep]);
ik+=iStep;
}
if ((outLen % 2 == 1) && (outLen > 1) ) {
outSig[ik] -= 2 * -1.5861343 * outSig[ik - outStep] ;
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

Clazz.newMeth(C$, 'getImplType$', function () {
return 1;
});

Clazz.newMeth(C$, 'isReversible$', function () {
return false;
});

Clazz.newMeth(C$, 'isSameAsFullWT$I$I$I', function (tailOvrlp, headOvrlp, inLen) {
if (inLen % 2 == 0) {
if (tailOvrlp >= 2 && headOvrlp >= 1 ) return true;
 else return false;
} else {
if (tailOvrlp >= 2 && headOvrlp >= 2 ) return true;
 else return false;
}});

Clazz.newMeth(C$, 'toString', function () {
return "w9x7 (lifting)";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
