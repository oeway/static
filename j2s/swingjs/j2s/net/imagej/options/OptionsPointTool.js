(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsPointTool", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.markWidth=0;
this.autoMeasure=false;
this.autoNextSlice=false;
this.addToRoiMgr=false;
this.labelPoints=true;
}, 1);

C$.$fields$=[['Z',['autoMeasure','autoNextSlice','addToRoiMgr','labelPoints'],'I',['markWidth']]]

Clazz.newMeth(C$, 'getMarkWidth$', function () {
return this.markWidth;
});

Clazz.newMeth(C$, 'isAutoMeasure$', function () {
return this.autoMeasure;
});

Clazz.newMeth(C$, 'isAutoNextSlice$', function () {
return this.autoNextSlice;
});

Clazz.newMeth(C$, 'isAddToRoiMgr$', function () {
return this.addToRoiMgr;
});

Clazz.newMeth(C$, 'isLabelPoints$', function () {
return this.labelPoints;
});

Clazz.newMeth(C$, 'setMarkWidth$I', function (markWidth) {
this.markWidth=markWidth;
});

Clazz.newMeth(C$, 'setAutoMeasure$Z', function (autoMeasure) {
this.autoMeasure=autoMeasure;
});

Clazz.newMeth(C$, 'setAutoNextSlice$Z', function (autoNextSlice) {
this.autoNextSlice=autoNextSlice;
});

Clazz.newMeth(C$, 'setAddToRoiMgr$Z', function (addToRoiMgr) {
this.addToRoiMgr=addToRoiMgr;
});

Clazz.newMeth(C$, 'setLabelPoints$Z', function (labelPoints) {
this.labelPoints=labelPoints;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsPointTool',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Point Tool..., weight = 7)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['markWidth','int',null,['org.scijava.plugin.Parameter']],['label="Mark Width (pixels)" ']],
  [['autoMeasure','boolean',null,['org.scijava.plugin.Parameter']],['label="Auto-Measure" ']],
  [['autoNextSlice','.',null,['org.scijava.plugin.Parameter']],['label="Auto-Next Slice" ']],
  [['addToRoiMgr','.',null,['org.scijava.plugin.Parameter']],['label="Add to ROI Manager" ']],
  [['labelPoints','.',null,['org.scijava.plugin.Parameter']],['label="Label Points" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
