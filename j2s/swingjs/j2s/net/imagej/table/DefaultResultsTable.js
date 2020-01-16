(function(){var P$=Clazz.newPackage("net.imagej.table"),I$=[[0,'net.imagej.table.ResultsImg','net.imagej.axis.AxisType','net.imagej.axis.Axes','net.imagej.ImgPlus']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultResultsTable", null, 'org.scijava.table.DefaultDoubleTable', 'net.imagej.table.ResultsTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (columnCount, rowCount) {
;C$.superclazz.c$$I$I.apply(this,[columnCount, rowCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'img$', function () {
var img=Clazz.new_($I$(1,1).c$$net_imagej_table_ResultsTable,[this]);
var axes=Clazz.array($I$(2), -1, [$I$(3).X, $I$(3).Y]);
var name="Results";
var imgPlus=Clazz.new_(1,{T:"net.imglib2.type.numeric.real.DoubleType"},$I$(4,1).c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA,[img, "Results", axes]);
return imgPlus;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
