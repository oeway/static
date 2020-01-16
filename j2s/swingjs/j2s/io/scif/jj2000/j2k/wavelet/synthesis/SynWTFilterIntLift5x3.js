(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SynWTFilterIntLift5x3", null, 'io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterInt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'synthetize_lpf$IA$I$I$I$IA$I$I$I$IA$I$I', function (lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep) {
var i;
var outLen=lowLen + highLen;
var iStep=2 * outStep;
var ik;
var lk;
var hk;
lk=lowOff;
hk=highOff;
ik=outOff;
if (outLen > 1) {
outSig[ik]=lowSig[lk] - ((highSig[hk] + 1) >> 1);
} else {
outSig[ik]=lowSig[lk];
}lk+=lowStep;
hk+=highStep;
ik+=iStep;
for (i=2; i < outLen - 1; i+=2) {
outSig[ik]=lowSig[lk] - ((highSig[hk - highStep] + highSig[hk] + 2 ) >> 2);
lk+=lowStep;
hk+=highStep;
ik+=iStep;
}
if ((outLen % 2 == 1) && (outLen > 2) ) {
outSig[ik]=lowSig[lk] - ((2 * highSig[hk - highStep] + 2) >> 2);
}hk=highOff;
ik=outOff + outStep;
for (i=1; i < outLen - 1; i+=2) {
outSig[ik]=highSig[hk] + ((outSig[ik - outStep] + outSig[ik + outStep]) >> 1);
hk+=highStep;
ik+=iStep;
}
if (outLen % 2 == 0 && outLen > 1 ) {
outSig[ik]=highSig[hk] + outSig[ik - outStep];
}});

Clazz.newMeth(C$, 'synthetize_hpf$IA$I$I$I$IA$I$I$I$IA$I$I', function (lowSig, lowOff, lowLen, lowStep, highSig, highOff, highLen, highStep, outSig, outOff, outStep) {
var i;
var outLen=lowLen + highLen;
var iStep=2 * outStep;
var ik;
var lk;
var hk;
lk=lowOff;
hk=highOff;
ik=outOff + outStep;
for (i=1; i < outLen - 1; i+=2) {
outSig[ik]=lowSig[lk] - ((highSig[hk] + highSig[hk + highStep] + 2 ) >> 2);
lk+=lowStep;
hk+=highStep;
ik+=iStep;
}
if ((outLen > 1) && (outLen % 2 == 0) ) {
outSig[ik]=lowSig[lk] - ((2 * highSig[hk] + 2) >> 2);
}hk=highOff;
ik=outOff;
if (outLen > 1) {
outSig[ik]=highSig[hk] + outSig[ik + outStep];
} else {
outSig[ik]=highSig[hk] >> 1;
}hk+=highStep;
ik+=iStep;
for (i=2; i < outLen - 1; i+=2) {
outSig[ik]=highSig[hk] + ((outSig[ik - outStep] + outSig[ik + outStep]) >> 1);
hk+=highStep;
ik+=iStep;
}
if (outLen % 2 == 1 && outLen > 1 ) {
outSig[ik]=highSig[hk] + outSig[ik - outStep];
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

Clazz.newMeth(C$, 'toString', function () {
return "w5x3 (lifting)";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
