(function(){var P$=Clazz.newPackage("net.imagej.convert"),I$=[[0,'net.imagej.ImgPlus','net.imagej.Dataset']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DatasetToImgPlusConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var data=src;
return data.getImgPlus$();
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.convert.DatasetToImgPlusConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="1.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
