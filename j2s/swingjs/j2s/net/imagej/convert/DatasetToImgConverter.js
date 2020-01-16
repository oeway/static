(function(){var P$=Clazz.newPackage("net.imagej.convert"),I$=[[0,'net.imglib2.img.Img','net.imagej.Dataset','org.scijava.util.GenericUtils','org.scijava.util.ConversionUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DatasetToImgConverter", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var data=src;
return data.getImgPlus$().getImg$();
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1),['copy$','factory$']);
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']);
});

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
if (src == null ) return false;
var destClass=$I$(3).getClass$reflect_Type(dest);
return this.canConvert$O$Class(src, destClass);
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
if (src == null ) return false;
var srcClass=src.getClass$();
if (Clazz.getClass($I$(2),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']).isAssignableFrom$Class(srcClass)) {
var data=src;
srcClass=data.getImgPlus$().getImg$().getClass$();
return $I$(4).canCast$Class$Class(srcClass, dest);
}return false;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.convert.DatasetToImgConverter',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="1.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
