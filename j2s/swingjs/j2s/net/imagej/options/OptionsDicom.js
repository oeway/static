(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsDicom", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.openAs32bitFloat=false;
this.rotateYZ=false;
this.rotateXZ=false;
}, 1);

C$.$fields$=[['Z',['openAs32bitFloat','rotateYZ','rotateXZ']]]

Clazz.newMeth(C$, 'isOpenAs32bitFloat$', function () {
return this.openAs32bitFloat;
});

Clazz.newMeth(C$, 'isRotateYZ$', function () {
return this.rotateYZ;
});

Clazz.newMeth(C$, 'isRotateXZ$', function () {
return this.rotateXZ;
});

Clazz.newMeth(C$, 'setOpenAs32bitFloat$Z', function (openAs32bitFloat) {
this.openAs32bitFloat=openAs32bitFloat;
});

Clazz.newMeth(C$, 'setRotateYZ$Z', function (rotateYZ) {
this.rotateYZ=rotateYZ;
});

Clazz.newMeth(C$, 'setRotateXZ$Z', function (rotateXZ) {
this.rotateXZ=rotateXZ;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsDicom',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = DICOM..., weight = 15)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['openAs32bitFloat','boolean',null,['org.scijava.plugin.Parameter']],['label="Open as 32-bit float" ']],
  [['rotateYZ','.',null,['org.scijava.plugin.Parameter']],['label="Orthogonal Views: Rotate YZ" ']],
  [['rotateXZ','.',null,['org.scijava.plugin.Parameter']],['label="Orthogonal Views: Rotate XZ" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
