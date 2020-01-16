(function(){var P$=Clazz.newPackage("io.scif.filters"),p$1={},I$=[[0,'io.scif.filters.FileStitcherMetadata','io.scif.FilePattern','net.imagej.axis.TypedAxis','net.imagej.axis.AxisType','net.imagej.axis.Axes','io.scif.AxisGuesser','java.util.Arrays','io.scif.ByteArrayReader','io.scif.config.SCIFIOConfig','io.scif.ByteArrayPlane']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileStitcher", null, 'io.scif.filters.AbstractReaderFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.patternIds=false;
this.doNotChangePattern=false;
this.totalPlanes=-1;
}, 1);

C$.$fields$=[['Z',['patternIds','doNotChangePattern','noStitch'],'L',['totalPlanes'],'O',['initializeService','io.scif.services.InitializeService','filePatternService','io.scif.services.FilePatternService','dataHandleService','org.scijava.io.handle.DataHandleService','planesPerFile','long[]','pattern','io.scif.FilePattern','localFiles','org.scijava.io.location.Location[]']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (patternIds) {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1))]);C$.$init$.apply(this);
this.setUsingPatternIds$Z(patternIds);
}, 1);

Clazz.newMeth(C$, 'setUsingPatternIds$Z', function (patternIds) {
this.patternIds=patternIds;
});

Clazz.newMeth(C$, 'isUsingPatternIds$', function () {
return this.patternIds;
});

Clazz.newMeth(C$, 'setCanChangePattern$Z', function (doChange) {
this.doNotChangePattern=!doChange;
});

Clazz.newMeth(C$, 'canChangePattern$', function () {
return !this.doNotChangePattern;
});

Clazz.newMeth(C$, 'getFilePattern$', function () {
return this.pattern;
});

Clazz.newMeth(C$, 'findPattern$org_scijava_io_location_BrowsableLocation', function (id) {
return Clazz.new_($I$(2,1).c$$org_scijava_io_location_BrowsableLocation$S$org_scijava_io_handle_DataHandleService,[id, this.filePatternService.findPattern$org_scijava_io_location_BrowsableLocation(p$1.asBrowsable$org_scijava_io_location_Location.apply(this, [id])), this.dataHandleService]);
});

Clazz.newMeth(C$, 'findPatterns$org_scijava_io_location_BrowsableLocation', function (id) {
if (!this.patternIds) {
return this.filePatternService.findImagePatterns$org_scijava_io_location_BrowsableLocation(p$1.asBrowsable$org_scijava_io_location_Location.apply(this, [id]));
}if (this.doNotChangePattern) {
return Clazz.array(String, -1, [id.getName$()]);
}this.patternIds=false;
var patterns=this.findPatterns$org_scijava_io_location_BrowsableLocation(p$1.asBrowsable$org_scijava_io_location_Location.apply(this, [Clazz.new_($I$(2,1).c$$io_scif_services_FilePatternService$org_scijava_io_location_BrowsableLocation$org_scijava_io_handle_DataHandleService,[this.filePatternService, id, this.dataHandleService]).getFiles$()[0]]));
if (patterns.length == 0) patterns=Clazz.array(String, -1, [id.getName$()]);
 else {
var test=Clazz.new_($I$(2,1).c$$org_scijava_io_location_BrowsableLocation$S$org_scijava_io_handle_DataHandleService,[id, patterns[0], this.dataHandleService]);
if (test.getFiles$().length == 0) patterns=Clazz.array(String, -1, [id.getName$()]);
}this.patternIds=true;
return patterns;
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
this.setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig', function (source, config) {
this.setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source.get$(), config);
});

Clazz.newMeth(C$, 'setSourceHelper$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
var browsableSource=p$1.asBrowsable$org_scijava_io_location_Location.apply(this, [source]);
try {
this.cleanUp$();
this.log$().debug$O("initFile: " + browsableSource);
var fp=Clazz.new_($I$(2,1).c$$io_scif_services_FilePatternService$org_scijava_io_location_BrowsableLocation$org_scijava_io_handle_DataHandleService,[this.filePatternService, browsableSource, this.dataHandleService]);
if (!this.patternIds) {
this.patternIds=fp.isValid$() && fp.getFiles$().length > 1 ;
} else {
this.patternIds=!this.dataHandleService.exists$org_scijava_io_location_Location(browsableSource);
}var mustGroup=false;
if (this.patternIds) {
mustGroup=fp.isValid$() && this.getParent$().fileGroupOption$org_scijava_io_location_Location(fp.getFiles$()[0]) == 0 ;
} else {
mustGroup=this.getParent$().fileGroupOption$org_scijava_io_location_Location(browsableSource) == 0;
}if (mustGroup) {
this.noStitch=true;
this.getParent$().close$();
if (this.patternIds && fp.isValid$() ) {
this.getParent$().setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(fp.getFiles$()[0], config);
} else this.getParent$().setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(browsableSource, config);
return;
}if (fp.isRegex$()) {
this.setCanChangePattern$Z(false);
}var patterns=this.findPatterns$org_scijava_io_location_BrowsableLocation(browsableSource);
if (patterns.length == 0) patterns=Clazz.array(String, -1, [browsableSource.getName$()]);
fp=Clazz.new_($I$(2,1).c$$org_scijava_io_location_BrowsableLocation$S$org_scijava_io_handle_DataHandleService,[browsableSource, patterns[0], this.dataHandleService]);
if (!fp.isValid$()) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid file pattern: " + fp.getPattern$()]);
}var reader=this.getParent$();
var firstImgMeta=reader.getMetadata$().get$I(0);
var dimOrder=firstImgMeta.getAxes$().stream$().map$java_util_function_Function((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "FileStitcher$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return t.type$.apply(t,[])});
})()
)); return Clazz.new_(1,{T:"? super net.imagej.axis.CalibratedAxis",R:"? extends net.imagej.axis.AxisType"},P$.FileStitcher$lambda1.$init$, [this, null])})($I$(3))).toArray$java_util_function_IntFunction(((P$.FileStitcher$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "FileStitcher$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array($I$(4), [t.intValue()])});
})()
), Clazz.new_(1,{R:"net.imagej.axis.AxisType[]"},P$.FileStitcher$lambda2.$init$, [this, null])));
var sizeZ=firstImgMeta.getAxisLength$net_imagej_axis_AxisType($I$(5).Z);
var sizeT=firstImgMeta.getAxisLength$net_imagej_axis_AxisType($I$(5).TIME);
var sizeC=firstImgMeta.getAxisLength$net_imagej_axis_AxisType($I$(5).CHANNEL);
var certain=firstImgMeta.isOrderCertain$();
var ag=Clazz.new_($I$(6,1).c$$io_scif_FilePattern$net_imagej_axis_AxisTypeA$J$J$J$Z,[fp, dimOrder, sizeZ, sizeT, sizeC, certain]);
var meta=this.getMetadata$();
var imgMeta=firstImgMeta.copy$();
var types=ag.getAxisTypes$();
var count=fp.getCount$();
for (var i=0; i < types.length; i++) {
imgMeta.setAxisLength$net_imagej_axis_AxisType$J(types[i], count[i]);
}
imgMeta.setName$S(fp.getPattern$());
meta.setImgMeta$io_scif_ImageMetadata(imgMeta);
meta.setSourceLocation$org_scijava_io_location_Location(fp.getFiles$()[0]);
var nPixelsFiles=1;
if (false || fp.getFiles$().length == 1 ) {
this.noStitch=true;
return;
}var msg=" Please rename your files or disable file stitching.";
if (!fp.isValid$()) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid " + (this.patternIds ? "file pattern" : "filename") + " (" + browsableSource.getName$() + "): " + fp.getErrorMessage$() + " Please rename your files or disable file stitching." ]);
}this.localFiles=fp.getFiles$();
if (this.localFiles == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["No files matching pattern (" + fp.getPattern$() + "). " + " Please rename your files or disable file stitching." ]);
}this.planesPerFile=Clazz.array(Long.TYPE, [this.localFiles.length]);
for (var i=0; i < this.localFiles.length; i++) {
var file=this.localFiles[i];
if (Clazz.instanceOf(file, "org.scijava.io.location.DummyLocation") || Clazz.instanceOf(file, "io.scif.io.location.TestImgLocation") ) continue;
if (!this.dataHandleService.exists$org_scijava_io_location_Location(file)) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["File #" + i + " (" + file + ") does not exist." ]);
}var r=this.getParent$();
r.setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(this.localFiles[i], config);
if (r.getImageCount$() != 1) {
this.cleanUp$();
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Only one image per source file is supported! \n But " + file.toString() + " contains: " + r.getImageCount$() ]);
}this.planesPerFile[i]=r.getPlaneCount$I(0);
}
this.totalPlanes=$I$(7).stream$JA(this.planesPerFile).sum$();
this.pattern=fp;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"io.scif.FormatException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isCompatible$Class', function (c) {
return Clazz.getClass($I$(8)).isAssignableFrom$Class(c);
});

Clazz.newMeth(C$, 'getPlaneCount$I', function (imageIndex) {
return this.totalPlanes;
});

Clazz.newMeth(C$, 'openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, bounds, config) {
var plane=this.createPlane$io_scif_ImageMetadata$net_imglib2_Interval(this.getMetadata$().get$I(imageIndex), bounds);
return this.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
});

Clazz.newMeth(C$, 'openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig', function (imageIndex, planeIndex, plane, bounds, config) {
if (this.noStitch) return this.getParent$().openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, Clazz.new_($I$(9,1)).groupableSetGroupFiles$Z(false));
if (plane == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Provided plane was null!"]);
}if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["only single image sources are supported!"]);
}var bp;
if (!this.isCompatible$Class(plane.getClass$())) {
bp=Clazz.new_($I$(10,1));
bp.populate$io_scif_Plane(plane);
(bp).setData$TT(Clazz.array(Byte.TYPE, [plane.getBytes$().length]));
} else bp=plane;
var adjustedIndex=p$1.computeFileIndex$J.apply(this, [planeIndex]);
if (adjustedIndex[0] < this.localFiles.length && adjustedIndex[1] < this.planesPerFile[imageIndex] ) {
var r=this.getParent$();
r.setSource$org_scijava_io_location_Location(this.localFiles[adjustedIndex[0]]);
return r.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(0, adjustedIndex[1], bp, bounds, config);
}$I$(7).fill$BA$B(bp.getBytes$(), ($b$[0] = 0, $b$[0]));
return bp;
});

Clazz.newMeth(C$, 'getPriority$', function () {
return 3.0;
});

Clazz.newMeth(C$, 'computeFileIndex$J', function (planeIndex) {
var fileIndex=0;
var visitedPlanes=0;
var localIndex=planeIndex;
var outIndex=Clazz.array(Integer.TYPE, [2]);
while (true){
visitedPlanes+=this.planesPerFile[fileIndex];
if (visitedPlanes - 1 >= planeIndex) {
outIndex[0]=fileIndex;
outIndex[1]=(localIndex|0);
break;
}localIndex-=this.planesPerFile[fileIndex];
fileIndex++;
}
return outIndex;
}, p$1);

Clazz.newMeth(C$, 'asBrowsable$org_scijava_io_location_Location', function (loc) {
if (Clazz.instanceOf(loc, "org.scijava.io.location.BrowsableLocation")) {
return loc;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided location is not browsable!"]);
}, p$1);

Clazz.newMeth(C$, 'cleanUp$', function () {
C$.superclazz.prototype.cleanUp$.apply(this, []);
this.patternIds=false;
this.doNotChangePattern=false;
this.planesPerFile=null;
this.pattern=null;
this.noStitch=false;
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.filters.FileStitcher',null,['org.scijava.plugin.Plugin']],['type="io.scif.filters.Filter.class" ']],
  [['initializeService','io.scif.services.InitializeService',null,['org.scijava.plugin.Parameter']],['']],
  [['filePatternService','io.scif.services.FilePatternService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
