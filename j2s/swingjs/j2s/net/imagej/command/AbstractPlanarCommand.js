(function(){var P$=Clazz.newPackage("net.imagej.command"),I$=[[0,'net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractPlanarCommand", null, null, 'net.imagej.command.PlanarCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['doWholeDataset'],'O',['view','net.imagej.display.DatasetView']]]

Clazz.newMeth(C$, 'run$', function () {
var img=this.getView$().getData$().getImgPlus$();
if (this.isPlanar$()) {
for (var i=2; i < img.numDimensions$(); i++) {
img=$I$(1).hyperSlice$net_imglib2_RandomAccessibleInterval$I$J(img, i, this.getView$().getLongPosition$I(i));
}
}this.run$net_imglib2_RandomAccessibleInterval(img);
});

Clazz.newMeth(C$, 'getView$', function () {
return this.view;
});

Clazz.newMeth(C$, 'isPlanar$', function () {
return !this.doWholeDataset;
});

Clazz.newMeth(C$, 'setView$net_imagej_display_DatasetView', function (view) {
this.view=view;
});

Clazz.newMeth(C$, 'setPlanar$Z', function (planar) {
this.doWholeDataset=!planar;
});
C$.$getAnn$ = function(){ return [
[['view','net.imagej.display.DatasetView',null,['org.scijava.plugin.Parameter']],['']],
  [['doWholeDataset','boolean',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
