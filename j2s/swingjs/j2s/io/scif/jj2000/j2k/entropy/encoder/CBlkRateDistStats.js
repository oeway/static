(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CBlkRateDistStats", null, 'io.scif.jj2000.j2k.entropy.CodedCBlk');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nROIcoeff=0;
this.nROIcp=0;
}, 1);

C$.$fields$=[['I',['nTotTrunc','nVldTrunc','nROIcoeff','nROIcp'],'O',['sb','io.scif.jj2000.j2k.wavelet.analysis.SubbandAn','truncRates','int[]','truncDists','double[]','truncSlopes','float[]','truncIdxs','int[]','isTermPass','boolean[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$BA$IA$DA$ZA$I$Z', function (m, n, skipMSBP, data, rates, dists, termp, np, inclast) {
;C$.superclazz.c$$I$I$I$BA.apply(this,[m, n, skipMSBP, data]);C$.$init$.apply(this);
this.selectConvexHull$IA$DA$ZA$I$Z(rates, dists, termp, np, inclast);
}, 1);

Clazz.newMeth(C$, 'selectConvexHull$IA$DA$ZA$I$Z', function (rates, dists, termp, n, inclast) {
var first_pnt;
var p;
var k;
var i;
var npnt;
var delta_rate;
var delta_dist;
var k_slope;
var p_slope;
var ll_rate;
first_pnt=0;
while (first_pnt < n && rates[first_pnt] <= 0 ){
first_pnt++;
}
npnt=n - first_pnt;
p_slope=0.0;
 ploop : do {
p=-1;
for (k=first_pnt; k < n; k++) {
if (rates[k] < 0) {
continue;
}if (p >= 0) {
delta_rate=rates[k] - rates[p];
delta_dist=dists[k] - dists[p];
} else {
delta_rate=rates[k];
delta_dist=dists[k];
}if (delta_dist < 0.0  || (delta_dist == 0.0  && delta_rate > 0 ) ) {
rates[k]=-rates[k];
npnt--;
continue;
}k_slope=(delta_dist / delta_rate);
if (p >= 0 && (delta_rate <= 0 || k_slope >= p_slope  ) ) {
rates[p]=-rates[p];
npnt--;
continue ploop;
} else {
p_slope=k_slope;
p=k;
}}
break;
} while (true);
if (inclast && n > 0  && rates[n - 1] < 0 ) {
rates[n - 1]=-rates[n - 1];
npnt++;
}this.nTotTrunc=n;
this.nVldTrunc=npnt;
this.truncRates=Clazz.array(Integer.TYPE, [n]);
this.truncDists=Clazz.array(Double.TYPE, [n]);
this.truncSlopes=Clazz.array(Float.TYPE, [npnt]);
this.truncIdxs=Clazz.array(Integer.TYPE, [npnt]);
if (termp != null ) {
this.isTermPass=Clazz.array(Boolean.TYPE, [n]);
System.arraycopy$O$I$O$I$I(termp, 0, this.isTermPass, 0, n);
} else {
this.isTermPass=null;
}System.arraycopy$O$I$O$I$I(rates, 0, this.truncRates, 0, n);
for (k=first_pnt, p=-1, i=0; k < n; k++) {
if (rates[k] > 0) {
this.truncDists[k]=dists[k];
if (p < 0) {
this.truncSlopes[i]=(dists[k] / rates[k]);
} else {
this.truncSlopes[i]=((dists[k] - dists[p]) / (rates[k] - rates[p]));
}this.truncIdxs[i]=k;
i++;
p=k;
} else {
this.truncDists[k]=-1;
this.truncRates[k]=-this.truncRates[k];
}}
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n nVldTrunc = " + this.nVldTrunc + ", nTotTrunc=" + this.nTotTrunc + ", num. ROI" + " coeff=" + this.nROIcoeff + ", num. ROI coding passes=" + this.nROIcp ;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
