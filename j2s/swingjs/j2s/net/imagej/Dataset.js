(function(){var P$=Clazz.newPackage("net.imagej"),I$=[[0,'net.imagej.axis.Axes','java.util.Optional']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Dataset", null, null, ['net.imagej.Data', 'net.imagej.ImgPlusMetadata', 'net.imglib2.img.Img']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'typedImg$TT', function (t) {
var img=this.getImgPlus$();
if (t.getClass$().isAssignableFrom$Class(img.firstElement$().getClass$())) {
var typedImg=img;
return typedImg;
}return null;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.dimension$net_imagej_axis_AxisType($I$(1).X);
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.dimension$net_imagej_axis_AxisType($I$(1).Y);
});

Clazz.newMeth(C$, 'getDepth$', function () {
return this.dimension$net_imagej_axis_AxisType($I$(1).Z);
});

Clazz.newMeth(C$, 'getFrames$', function () {
return this.dimension$net_imagej_axis_AxisType($I$(1).TIME);
});

Clazz.newMeth(C$, 'getChannels$', function () {
return this.dimension$net_imagej_axis_AxisType($I$(1).CHANNEL);
});

Clazz.newMeth(C$, 'dimension$net_imagej_axis_AxisType', function (type) {
var index=this.dimensionIndex$net_imagej_axis_AxisType(type);
return index < 0 ? 1 : this.dimension$I(index);
});

Clazz.newMeth(C$, 'axis$net_imagej_axis_AxisType', function (type) {
var index=this.dimensionIndex$net_imagej_axis_AxisType(type);
return index < 0 ? $I$(2).empty$() : $I$(2).of$TT(this.axis$I(index));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
