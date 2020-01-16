(function(){var P$=Clazz.newPackage("net.imagej"),p$1={},I$=[[0,'net.imglib2.type.Type','net.imglib2.type.numeric.NumericType','net.imglib2.type.numeric.ComplexType','net.imglib2.type.numeric.RealType','net.imglib2.type.numeric.IntegerType','net.imagej.ImgPlus','net.imglib2.img.Img']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultImgPlusService", null, 'org.scijava.service.AbstractService', 'net.imagej.ImgPlusService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scriptService','org.scijava.script.ScriptService']]]

Clazz.newMeth(C$, 'asType$net_imagej_ImgPlus$TT', function (ip, type) {
if (p$1.isBackedAs$net_imagej_ImgPlus$Class.apply(this, [ip, type.getClass$()])) {
var typedImgPlus=ip;
return typedImgPlus;
}return null;
});

Clazz.newMeth(C$, 'typed$net_imagej_ImgPlus', function (ip) {
if (p$1.isBackedAs$net_imagej_ImgPlus$Class.apply(this, [ip, Clazz.getClass($I$(1),['copy$','createVariable$','set$TT'])])) {
var typedImgPlus=ip;
return typedImgPlus;
}return null;
});

Clazz.newMeth(C$, 'numeric$net_imagej_ImgPlus', function (ip) {
if (p$1.isBackedAs$net_imagej_ImgPlus$Class.apply(this, [ip, Clazz.getClass($I$(2),[])])) {
var typedImgPlus=ip;
return typedImgPlus;
}return null;
});

Clazz.newMeth(C$, 'complex$net_imagej_ImgPlus', function (ip) {
if (p$1.isBackedAs$net_imagej_ImgPlus$Class.apply(this, [ip, Clazz.getClass($I$(3),['complexConjugate$','getImaginaryDouble$','getImaginaryFloat$','getPhaseDouble$','getPhaseFloat$','getPowerDouble$','getPowerFloat$','getRealDouble$','getRealFloat$','setComplexNumber$F$F','setComplexNumber$D$D','setImaginary$F','setImaginary$D','setReal$F','setReal$D'])])) {
var typedImgPlus=ip;
return typedImgPlus;
}return null;
});

Clazz.newMeth(C$, 'real$net_imagej_ImgPlus', function (ip) {
if (p$1.isBackedAs$net_imagej_ImgPlus$Class.apply(this, [ip, Clazz.getClass($I$(4),['dec$','getBitsPerPixel$','getMaxValue$','getMinIncrement$','getMinValue$','inc$'])])) {
var typedImgPlus=ip;
return typedImgPlus;
}return null;
});

Clazz.newMeth(C$, 'integer$net_imagej_ImgPlus', function (ip) {
if (p$1.isBackedAs$net_imagej_ImgPlus$Class.apply(this, [ip, Clazz.getClass($I$(5),['getBigInteger$','getInteger$','getIntegerLong$','setBigInteger$java_math_BigInteger','setInteger$I','setInteger$J'])])) {
var typedImgPlus=ip;
return typedImgPlus;
}return null;
});

Clazz.newMeth(C$, 'initialize$', function () {
this.scriptService.addAlias$Class(Clazz.getClass($I$(6)));
this.scriptService.addAlias$Class(Clazz.getClass($I$(7),['copy$','factory$']));
});

Clazz.newMeth(C$, 'isBackedAs$net_imagej_ImgPlus$Class', function (ip, clazz) {
var type=ip.firstElement$();
return clazz.isAssignableFrom$Class(type.getClass$());
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.DefaultImgPlusService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
