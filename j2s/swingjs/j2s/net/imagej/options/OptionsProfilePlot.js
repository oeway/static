(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsProfilePlot", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.width=450;
this.height=200;
this.minY=0;
this.maxY=0;
this.yFixedScale=false;
this.noSaveXValues=false;
this.autoClose=false;
this.vertProfile=false;
this.listValues=false;
this.interpLineProf=true;
this.drawGridLines=true;
}, 1);

C$.$fields$=[['Z',['yFixedScale','noSaveXValues','autoClose','vertProfile','listValues','interpLineProf','drawGridLines'],'D',['minY','maxY'],'I',['width','height']]]

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getMinY$', function () {
return this.minY;
});

Clazz.newMeth(C$, 'getMaxY$', function () {
return this.maxY;
});

Clazz.newMeth(C$, 'isYFixedScale$', function () {
return this.yFixedScale;
});

Clazz.newMeth(C$, 'isNoSaveXValues$', function () {
return this.noSaveXValues;
});

Clazz.newMeth(C$, 'isAutoClose$', function () {
return this.autoClose;
});

Clazz.newMeth(C$, 'isVertProfile$', function () {
return this.vertProfile;
});

Clazz.newMeth(C$, 'isListValues$', function () {
return this.listValues;
});

Clazz.newMeth(C$, 'isInterpLineProf$', function () {
return this.interpLineProf;
});

Clazz.newMeth(C$, 'isDrawGridLines$', function () {
return this.drawGridLines;
});

Clazz.newMeth(C$, 'setWidth$I', function (width) {
this.width=width;
});

Clazz.newMeth(C$, 'setHeight$I', function (height) {
this.height=height;
});

Clazz.newMeth(C$, 'setMinY$D', function (minY) {
this.minY=minY;
});

Clazz.newMeth(C$, 'setMaxY$D', function (maxY) {
this.maxY=maxY;
});

Clazz.newMeth(C$, 'setyFixedScale$Z', function (yFixedScale) {
this.yFixedScale=yFixedScale;
});

Clazz.newMeth(C$, 'setNoSaveXValues$Z', function (noSaveXValues) {
this.noSaveXValues=noSaveXValues;
});

Clazz.newMeth(C$, 'setAutoClose$Z', function (autoClose) {
this.autoClose=autoClose;
});

Clazz.newMeth(C$, 'setVertProfile$Z', function (vertProfile) {
this.vertProfile=vertProfile;
});

Clazz.newMeth(C$, 'setListValues$Z', function (listValues) {
this.listValues=listValues;
});

Clazz.newMeth(C$, 'setInterpLineProf$Z', function (interpLineProf) {
this.interpLineProf=interpLineProf;
});

Clazz.newMeth(C$, 'setDrawGridLines$Z', function (drawGridLines) {
this.drawGridLines=drawGridLines;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsProfilePlot',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Profile Plot Options..., weight = 4)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['width','int',null,['org.scijava.plugin.Parameter']],['label="Width (pixels)" ']],
  [['height','.',null,['org.scijava.plugin.Parameter']],['label="Height (pixels)" ']],
  [['minY','double',null,['org.scijava.plugin.Parameter']],['label="Minimum Y" ']],
  [['maxY','.',null,['org.scijava.plugin.Parameter']],['label="Maximum Y" ']],
  [['yFixedScale','boolean',null,['org.scijava.plugin.Parameter']],['label="Fixed y-axis scale" ']],
  [['noSaveXValues','.',null,['org.scijava.plugin.Parameter']],['label="Do not save x-values" ']],
  [['autoClose','.',null,['org.scijava.plugin.Parameter']],['label="Auto-close" ']],
  [['vertProfile','.',null,['org.scijava.plugin.Parameter']],['label="Vertical profile" ']],
  [['listValues','.',null,['org.scijava.plugin.Parameter']],['label="List values" ']],
  [['interpLineProf','.',null,['org.scijava.plugin.Parameter']],['label="Interpolate line profiles" ']],
  [['drawGridLines','.',null,['org.scijava.plugin.Parameter']],['label="Draw grid lines" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
