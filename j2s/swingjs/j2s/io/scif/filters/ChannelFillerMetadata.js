(function(){var P$=Clazz.newPackage("io.scif.filters"),I$=[[0,'io.scif.DefaultImageMetadata','io.scif.HasColorTable','io.scif.config.SCIFIOConfig','net.imglib2.display.ArrayColorTable','io.scif.util.FormatTools','net.imagej.axis.Axes','io.scif.filters.ChannelFiller']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChannelFillerMetadata", null, 'io.scif.filters.AbstractMetadataWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lutLength'],'O',['initializeService','io.scif.services.InitializeService']]]

Clazz.newMeth(C$, 'getLutLength$', function () {
return this.lutLength;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var m=this.unwrap$();
this.createImageMetadata$I(0);
for (var i=0; i < m.getImageCount$(); i++) {
var iMeta=Clazz.new_($I$(1,1).c$$io_scif_ImageMetadata,[m.get$I(i)]);
if (m.get$I(i).isIndexed$()) {
iMeta.setIndexed$Z(false);
var cTable=null;
if (Clazz.getClass($I$(2),['getColorTable$I$J']).isAssignableFrom$Class(m.getClass$())) {
cTable=(m).getColorTable$(i, 0);
} else {
var r=null;
try {
r=this.initializeService.initializeReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(m.getSourceLocation$(), Clazz.new_($I$(3,1)).checkerSetOpen$Z(true));
cTable=r.openPlane$I$J(0, 0).getColorTable$();
r.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["ChannelFiller failed, could not open ColorTable for an indexed dataset", e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["ChannelFiller failed, could not open ColorTable for an indexed dataset", e]);
}
} else {
throw e$$;
}
}
}if (cTable == null ) {
this.lutLength=1;
} else {
this.lutLength=cTable.getComponentCount$();
if (Clazz.getClass($I$(4),['argb$I','getBits$','getNative$I$I','getValues$']).isAssignableFrom$Class(cTable.getClass$())) {
var bitsPerElement=(cTable).getBits$();
var signed=$I$(5).isSigned$I(iMeta.getPixelType$());
var floating=$I$(5).isFloatingPoint$I(iMeta.getPixelType$());
try {
iMeta.setPixelType$I($I$(5).pixelTypeFromBytes$I$Z$Z((bitsPerElement/8|0), signed, floating));
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().warn$O("Could not update pixel type of ChannelFiller metadata.");
} else {
throw e;
}
}
}}if (!iMeta.isFalseColor$()) {
var cIndex=iMeta.getAxisIndex$net_imagej_axis_AxisType($I$(6).CHANNEL);
if (cIndex >= 0 && cIndex < iMeta.getPlanarAxisCount$() ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(6).CHANNEL, iMeta.getAxisLength$net_imagej_axis_AxisType($I$(6).CHANNEL) * this.lutLength);
} else {
if (cIndex >= 0) {
iMeta.setAxisType$I$net_imagej_axis_AxisType(cIndex, $I$(6).unknown$());
}iMeta.addAxis$net_imagej_axis_AxisType$J($I$(6).CHANNEL, this.lutLength);
iMeta.setAxis$I$net_imagej_axis_CalibratedAxis(iMeta.getPlanarAxisCount$(), iMeta.getAxis$net_imagej_axis_AxisType($I$(6).CHANNEL));
iMeta.setPlanarAxisCount$I(iMeta.getPlanarAxisCount$() + 1);
}}}this.add$io_scif_ImageMetadata$Z(iMeta, false);
}
});

Clazz.newMeth(C$, 'filterType$', function () {
return Clazz.getClass($I$(7));
});
C$.$getAnn$ = function(){ return [
[['initializeService','io.scif.services.InitializeService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
