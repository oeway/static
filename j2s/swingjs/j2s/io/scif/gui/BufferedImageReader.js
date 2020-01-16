(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'io.scif.BufferedImagePlane']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BufferedImageReader", null, 'io.scif.AbstractReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createPlane$net_imglib2_Interval', function (bounds) {
return this.createPlane$io_scif_ImageMetadata$net_imglib2_Interval(this.getMetadata$().get$I(0), bounds);
});

Clazz.newMeth(C$, 'createPlane$io_scif_ImageMetadata$net_imglib2_Interval', function (meta, bounds) {
return Clazz.new_($I$(1,1).c$$io_scif_ImageMetadata$net_imglib2_Interval,[meta, bounds]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
