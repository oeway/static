(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),p$1={},I$=[[0,'Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SubbandAn", null, 'io.scif.jj2000.j2k.wavelet.Subband');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parent=null;
this.l2Norm=-1.0;
}, 1);

C$.$fields$=[['F',['l2Norm','stepWMSE'],'O',['parent','io.scif.jj2000.j2k.wavelet.analysis.SubbandAn','+subb_LL','+subb_HL','+subb_LH','+subb_HH','hFilter','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilter','+vFilter']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$io_scif_jj2000_j2k_wavelet_WaveletFilterA$io_scif_jj2000_j2k_wavelet_WaveletFilterA', function (w, h, ulcx, ulcy, lvls, hfilters, vfilters) {
;C$.superclazz.c$$I$I$I$I$I$io_scif_jj2000_j2k_wavelet_WaveletFilterA$io_scif_jj2000_j2k_wavelet_WaveletFilterA.apply(this,[w, h, ulcx, ulcy, lvls, hfilters, vfilters]);C$.$init$.apply(this);
p$1.calcL2Norms.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'getLL$', function () {
return this.subb_LL;
});

Clazz.newMeth(C$, 'getHL$', function () {
return this.subb_HL;
});

Clazz.newMeth(C$, 'getLH$', function () {
return this.subb_LH;
});

Clazz.newMeth(C$, 'getHH$', function () {
return this.subb_HH;
});

Clazz.newMeth(C$, 'split$io_scif_jj2000_j2k_wavelet_WaveletFilter$io_scif_jj2000_j2k_wavelet_WaveletFilter', function (hfilter, vfilter) {
if (this.isNode) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.isNode=true;
this.hFilter=hfilter;
this.vFilter=vfilter;
this.subb_LL=Clazz.new_(C$);
this.subb_LH=Clazz.new_(C$);
this.subb_HL=Clazz.new_(C$);
this.subb_HH=Clazz.new_(C$);
this.subb_LL.parent=this;
this.subb_HL.parent=this;
this.subb_LH.parent=this;
this.subb_HH.parent=this;
this.initChilds$();
return this.subb_LL;
});

Clazz.newMeth(C$, 'calcBasisWaveForms$FAA', function (wfs) {
if (this.l2Norm < 0 ) {
if (this.isNode) {
if (this.subb_LL.l2Norm < 0.0 ) {
p$1.calcBasisWaveForms$FAA.apply(this.subb_LL, [wfs]);
wfs[0]=this.hFilter.getLPSynWaveForm$FA$FA(wfs[0], null);
wfs[1]=this.vFilter.getLPSynWaveForm$FA$FA(wfs[1], null);
} else if (this.subb_HL.l2Norm < 0.0 ) {
p$1.calcBasisWaveForms$FAA.apply(this.subb_HL, [wfs]);
wfs[0]=this.hFilter.getHPSynWaveForm$FA$FA(wfs[0], null);
wfs[1]=this.vFilter.getLPSynWaveForm$FA$FA(wfs[1], null);
} else if (this.subb_LH.l2Norm < 0.0 ) {
p$1.calcBasisWaveForms$FAA.apply(this.subb_LH, [wfs]);
wfs[0]=this.hFilter.getLPSynWaveForm$FA$FA(wfs[0], null);
wfs[1]=this.vFilter.getHPSynWaveForm$FA$FA(wfs[1], null);
} else if (this.subb_HH.l2Norm < 0.0 ) {
p$1.calcBasisWaveForms$FAA.apply(this.subb_HH, [wfs]);
wfs[0]=this.hFilter.getHPSynWaveForm$FA$FA(wfs[0], null);
wfs[1]=this.vFilter.getHPSynWaveForm$FA$FA(wfs[1], null);
} else {
throw Clazz.new_($I$(1,1).c$$S,["You have found a bug in JJ2000!"]);
}} else {
wfs[0]=Clazz.array(Float.TYPE, [1]);
wfs[0][0]=1.0;
wfs[1]=Clazz.array(Float.TYPE, [1]);
wfs[1][0]=1.0;
}} else {
throw Clazz.new_($I$(1,1).c$$S,["You have found a bug in JJ2000!"]);
}}, p$1);

Clazz.newMeth(C$, 'assignL2Norm$F', function (l2n) {
if (this.l2Norm < 0 ) {
if (this.isNode) {
if (this.subb_LL.l2Norm < 0.0 ) {
p$1.assignL2Norm$F.apply(this.subb_LL, [l2n]);
} else if (this.subb_HL.l2Norm < 0.0 ) {
p$1.assignL2Norm$F.apply(this.subb_HL, [l2n]);
} else if (this.subb_LH.l2Norm < 0.0 ) {
p$1.assignL2Norm$F.apply(this.subb_LH, [l2n]);
} else if (this.subb_HH.l2Norm < 0.0 ) {
p$1.assignL2Norm$F.apply(this.subb_HH, [l2n]);
if (this.subb_HH.l2Norm >= 0.0 ) {
this.l2Norm=0.0;
}} else {
throw Clazz.new_($I$(1,1).c$$S,["You have found a bug in JJ2000!"]);
}} else {
this.l2Norm=l2n;
}} else {
throw Clazz.new_($I$(1,1).c$$S,["You have found a bug in JJ2000!"]);
}}, p$1);

Clazz.newMeth(C$, 'calcL2Norms', function () {
var i;
var wfs=Clazz.array(Float.TYPE, [2, null]);
var acc;
var l2n;
while (this.l2Norm < 0.0 ){
p$1.calcBasisWaveForms$FAA.apply(this, [wfs]);
acc=0.0;
for (i=wfs[0].length - 1; i >= 0; i--) {
acc += wfs[0][i] * wfs[0][i];
}
l2n=Math.sqrt(acc);
acc=0.0;
for (i=wfs[1].length - 1; i >= 0; i--) {
acc += wfs[1][i] * wfs[1][i];
}
l2n *= Math.sqrt(acc);
wfs[0]=null;
wfs[1]=null;
p$1.assignL2Norm$F.apply(this, [l2n]);
}
}, p$1);

Clazz.newMeth(C$, 'getHorWFilter$', function () {
return this.hFilter;
});

Clazz.newMeth(C$, 'getVerWFilter$', function () {
return this.hFilter;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
