(function(){var P$=Clazz.newPackage("net.imagej.space"),I$=[[0,'net.imagej.axis.IdentityAxis']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultCalibratedSpace", null, 'net.imagej.space.AbstractCalibratedSpace');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (numDims) {
;C$.superclazz.c$$I.apply(this,[numDims]);C$.$init$.apply(this);
for (var d=0; d < numDims; d++) {
this.setAxis$TA$I(Clazz.new_($I$(1,1)), d);
}
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_CalibratedAxisA', function (axes) {
;C$.superclazz.c$$TAA.apply(this,[axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (axes) {
;C$.superclazz.c$$java_util_List.apply(this,[axes]);C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
