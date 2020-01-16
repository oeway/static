(function(){var P$=Clazz.newPackage("io.scif.img.axes"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SCIFIOAxes");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.SPECTRA=$I$(1).get$S("Spectra");
C$.LIFETIME=$I$(1).get$S("Lifetime");
C$.POLARIZATION=$I$(1).get$S("Polarization");
C$.PHASE=$I$(1).get$S("Phase");
C$.FREQUENCY=$I$(1).get$S("Frequency");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['SPECTRA','net.imagej.axis.AxisType','+LIFETIME','+POLARIZATION','+PHASE','+FREQUENCY']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
