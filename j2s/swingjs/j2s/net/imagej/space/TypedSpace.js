(function(){var P$=Clazz.newPackage("net.imagej.space"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "TypedSpace", null, null, 'net.imagej.space.AnnotatedSpace');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'dimensionIndex$net_imagej_axis_AxisType', function (axisType) {
for (var d=0; d < this.numDimensions$(); d++) {
if (this.axis$I(d).type$() === axisType ) return d;
}
return -1;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
