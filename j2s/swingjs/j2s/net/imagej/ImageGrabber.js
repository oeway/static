(function(){var P$=Clazz.newPackage("net.imagej"),I$=[[0,'net.imglib2.type.numeric.integer.UnsignedByteType','net.imagej.axis.AxisType','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageGrabber");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['service','net.imagej.DatasetService']]]

Clazz.newMeth(C$, 'c$$net_imagej_DatasetService', function (service) {
;C$.$init$.apply(this);
this.service=service;
}, 1);

Clazz.newMeth(C$, 'grab$net_imagej_display_DatasetView$S', function (view, outputName) {
var screenImage=view.getScreenImage$();
var dims=Clazz.array(Long.TYPE, [3]);
screenImage.dimensions$JA(dims);
dims[2]=3;
if (dims[0] * dims[1] > 2147483647) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image is too big to fit into memory"]);
var xSize=(dims[0]|0);
var ySize=(dims[1]|0);
var argbPixels=view.getScreenImage$().getData$();
var dataset=this.service.create$TT$JA$S$net_imagej_axis_AxisTypeA(Clazz.new_($I$(1,1)), dims, outputName, Clazz.array($I$(2), -1, [$I$(3).X, $I$(3).Y, $I$(3).CHANNEL]));
var imgPlus=dataset.getImgPlus$();
var accessor=imgPlus.randomAccess$();
for (var x=0; x < xSize; x++) {
accessor.setPosition$I$I(x, 0);
for (var y=0; y < ySize; y++) {
accessor.setPosition$I$I(y, 1);
var index=y * xSize + x;
var pixel=argbPixels[index];
accessor.setPosition$I$I(0, 2);
accessor.get$().setReal$F((pixel >> 16) & 255);
accessor.setPosition$I$I(1, 2);
accessor.get$().setReal$F((pixel >> 8) & 255);
accessor.setPosition$I$I(2, 2);
accessor.get$().setReal$F((pixel >> 0) & 255);
}
}
dataset.setRGBMerged$Z(true);
return dataset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
