(function(){var P$=Clazz.newPackage("io.scif.io"),p$1={},I$=[[0,'net.imagej.Dataset']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DatasetIOPlugin", null, 'org.scijava.io.AbstractIOPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['datasetIOService','io.scif.services.DatasetIOService','locationService','org.scijava.io.location.LocationService']]]

Clazz.newMeth(C$, 'getDataType$', function () {
return Clazz.getClass($I$(1),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']);
});

Clazz.newMeth(C$, 'supportsOpen$S', function (source) {
return this.datasetIOService.canOpen$org_scijava_io_location_Location(p$1.resolve$S$S.apply(this, [source, "source"]));
});

Clazz.newMeth(C$, 'supportsSave$S', function (destination) {
return this.datasetIOService.canSave$org_scijava_io_location_Location(p$1.resolve$S$S.apply(this, [destination, "destination"]));
});

Clazz.newMeth(C$, 'open$S', function (source) {
return this.datasetIOService.open$org_scijava_io_location_Location(p$1.resolve$S$S.apply(this, [source, "source"]));
});

Clazz.newMeth(C$, ['save$net_imagej_Dataset$S','save$TD$S'], function (dataset, destination) {
this.datasetIOService.save$net_imagej_Dataset$org_scijava_io_location_Location(dataset, p$1.resolve$S$S.apply(this, [destination, "destination"]));
});

Clazz.newMeth(C$, 'resolve$S$S', function (uriString, label) {
try {
var location=this.locationService.resolve$S(uriString);
if (location != null ) return location;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unresolvable " + label + ": " + uriString ]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["Invalid " + label + ": " + uriString , exc]);
} else {
throw exc;
}
}
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.io.DatasetIOPlugin',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.IOPlugin.class" priority="-100.0" ']],
  [['datasetIOService','io.scif.services.DatasetIOService',null,['org.scijava.plugin.Parameter']],['']],
  [['locationService','org.scijava.io.location.LocationService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
