(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultReader", null, 'io.scif.ByteArrayReader', 'io.scif.DefaultComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['format','io.scif.Format']]]

Clazz.newMeth(C$, 'getFormat$', function () {
return this.format;
});

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Trying to read using DefaultReader. Must implement a Reader specifically for this Format"]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
