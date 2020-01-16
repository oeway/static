(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'io.scif.util.FormatTools','org.scijava.util.ArrayUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteArrayPlane", null, 'io.scif.AbstractPlane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_ImageMetadata$net_imglib2_Interval', function (meta, bounds) {
;C$.superclazz.c$$io_scif_ImageMetadata$net_imglib2_Interval.apply(this,[meta, bounds]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBytes$', function () {
return this.getData$();
});

Clazz.newMeth(C$, 'blankPlane$net_imglib2_Interval', function (bounds) {
var buf=null;
var sizes=Clazz.array(Long.TYPE, [bounds.numDimensions$() + 1]);
for (var i=0; i < sizes.length - 1; i++) {
sizes[i]=bounds.dimension$I(i);
}
sizes[sizes.length - 1]=$I$(1).getBytesPerPixel$I(this.getImageMetadata$().getPixelType$());
buf=$I$(2).allocate$JA(sizes);
return buf;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
