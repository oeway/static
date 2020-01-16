(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsInputOutput", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jpegQuality=85;
this.transparentIndex=-1;
this.tableFileExtension=".txt";
this.useJFileChooser=false;
this.saveOrderIntel=false;
this.copyColumnHeaders=false;
this.copyRowNumbers=true;
this.saveColumnHeaders=true;
this.saveRowNumbers=true;
}, 1);

C$.$fields$=[['Z',['useJFileChooser','saveOrderIntel','copyColumnHeaders','copyRowNumbers','saveColumnHeaders','saveRowNumbers'],'I',['jpegQuality','transparentIndex'],'S',['tableFileExtension']]]

Clazz.newMeth(C$, 'getJpegQuality$', function () {
return this.jpegQuality;
});

Clazz.newMeth(C$, 'getTransparentIndex$', function () {
return this.transparentIndex;
});

Clazz.newMeth(C$, 'getTableFileExtension$', function () {
return this.tableFileExtension;
});

Clazz.newMeth(C$, 'isUseJFileChooser$', function () {
return this.useJFileChooser;
});

Clazz.newMeth(C$, 'isSaveOrderIntel$', function () {
return this.saveOrderIntel;
});

Clazz.newMeth(C$, 'isCopyColumnHeaders$', function () {
return this.copyColumnHeaders;
});

Clazz.newMeth(C$, 'isCopyRowNumbers$', function () {
return this.copyRowNumbers;
});

Clazz.newMeth(C$, 'isSaveColumnHeaders$', function () {
return this.saveColumnHeaders;
});

Clazz.newMeth(C$, 'isSaveRowNumbers$', function () {
return this.saveRowNumbers;
});

Clazz.newMeth(C$, 'setJpegQuality$I', function (jpegQuality) {
this.jpegQuality=jpegQuality;
});

Clazz.newMeth(C$, 'setTransparentIndex$I', function (transparentIndex) {
this.transparentIndex=transparentIndex;
});

Clazz.newMeth(C$, 'setTableFileExtension$S', function (tableFileExtension) {
this.tableFileExtension=tableFileExtension;
});

Clazz.newMeth(C$, 'setUseJFileChooser$Z', function (useJFileChooser) {
this.useJFileChooser=useJFileChooser;
});

Clazz.newMeth(C$, 'setSaveOrderIntel$Z', function (saveOrderIntel) {
this.saveOrderIntel=saveOrderIntel;
});

Clazz.newMeth(C$, 'setCopyColumnHeaders$Z', function (copyColumnHeaders) {
this.copyColumnHeaders=copyColumnHeaders;
});

Clazz.newMeth(C$, 'setCopyRowNumbers$Z', function (copyRowNumbers) {
this.copyRowNumbers=copyRowNumbers;
});

Clazz.newMeth(C$, 'setSaveColumnHeaders$Z', function (saveColumnHeaders) {
this.saveColumnHeaders=saveColumnHeaders;
});

Clazz.newMeth(C$, 'setSaveRowNumbers$Z', function (saveRowNumbers) {
this.saveRowNumbers=saveRowNumbers;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsInputOutput',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Input/Output..., weight = 2)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['jpegQuality','int',null,['org.scijava.plugin.Parameter']],['label="JPEG quality (0-100)" min="0" max="100" ']],
  [['transparentIndex','.',null,['org.scijava.plugin.Parameter']],['label="GIF and PNG transparent index" ']],
  [['tableFileExtension','String',null,['org.scijava.plugin.Parameter']],['label="File extension for tables" ']],
  [['useJFileChooser','boolean',null,['org.scijava.plugin.Parameter']],['label="Use JFileChooser to open/save" ']],
  [['saveOrderIntel','.',null,['org.scijava.plugin.Parameter']],['label="Save TIFF and raw in Intel byte order" ']],
  [['copyColumnHeaders','.',null,['org.scijava.plugin.Parameter']],['label="Result Table: Copy column headers" ']],
  [['copyRowNumbers','.',null,['org.scijava.plugin.Parameter']],['label="Result Table: Copy row numbers" ']],
  [['saveColumnHeaders','.',null,['org.scijava.plugin.Parameter']],['label="Result Table: Save column headers" ']],
  [['saveRowNumbers','.',null,['org.scijava.plugin.Parameter']],['label="Result Table: Save row numbers" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
