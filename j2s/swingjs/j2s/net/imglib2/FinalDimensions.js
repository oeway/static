(function(){var P$=Clazz.newPackage("net.imglib2");
/*c*/var C$=Clazz.newClass(P$, "FinalDimensions", null, null, 'net.imglib2.Dimensions');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dimensions','long[]']]]

Clazz.newMeth(C$, 'c$$JA$Z', function (dimensions, copy) {
;C$.$init$.apply(this);
if (copy) this.dimensions=dimensions.clone$();
 else this.dimensions=dimensions;
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
C$.c$$JA$Z.apply(this, [dimensions, true]);
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (dimensions) {
;C$.$init$.apply(this);
this.dimensions=Clazz.array(Long.TYPE, [dimensions.length]);
for (var d=0; d < dimensions.length; ++d) this.dimensions[d]=dimensions[d];

}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.dimensions.length;
});

Clazz.newMeth(C$, 'dimensions$JA', function (dims) {
for (var d=0; d < dims.length; ++d) dims[d]=this.dimensions[d];

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.dimensions[d];
});

Clazz.newMeth(C$, 'wrap$JA', function (dimensions) {
return Clazz.new_(C$.c$$JA$Z,[dimensions, false]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
