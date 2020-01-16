(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultWriter", null, 'io.scif.AbstractWriter', 'io.scif.DefaultComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['format','io.scif.Format']]]

Clazz.newMeth(C$, 'getFormat$', function () {
return this.format;
});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Trying to write using DefaultWriter. Must implement a Writer specifically for this Format"]);
});

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
