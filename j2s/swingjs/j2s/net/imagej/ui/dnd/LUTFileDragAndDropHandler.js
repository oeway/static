(function(){var P$=Clazz.newPackage("net.imagej.ui.dnd"),p$1={},I$=[[0,'java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LUTFileDragAndDropHandler", null, 'org.scijava.ui.dnd.AbstractDragAndDropHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['lutService','net.imagej.lut.LUTService','displayService','org.scijava.display.DisplayService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, ['supports$java_io_File','supports$TT','supports$TD'], function (file) {
if (!C$.superclazz.prototype.supports$TD.apply(this, [file])) return false;
if (this.lutService == null ) return false;
return this.lutService.isLUT$java_io_File(file);
});

Clazz.newMeth(C$, 'supportsDisplay$org_scijava_display_Display', function (display) {
return display == null  || Clazz.instanceOf(display, "net.imagej.display.ImageDisplay") ;
});

Clazz.newMeth(C$, ['drop$java_io_File$org_scijava_display_Display','drop$TD$org_scijava_display_Display'], function (file, display) {
if (this.lutService == null  || this.displayService == null  ) return false;
this.check$TD$org_scijava_display_Display(file, display);
if (file == null ) return true;
var imageDisplay=display;
var colorTable=p$1.loadLUT$java_io_File.apply(this, [file]);
if (colorTable == null ) return false;
if (display == null ) {
this.displayService.createDisplay$S$O(p$1.getBaseName$java_io_File.apply(this, [file]), colorTable);
} else {
this.lutService.applyLUT$net_imglib2_display_ColorTable$net_imagej_display_ImageDisplay(colorTable, imageDisplay);
}return true;
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'loadLUT$java_io_File', function (file) {
var colorTable;
try {
colorTable=this.lutService.loadLUT$java_io_File(file);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
if (this.log != null ) this.log.error$O$Throwable("Error opening LUT: " + file, exc);
return null;
} else {
throw exc;
}
}
return colorTable;
}, p$1);

Clazz.newMeth(C$, 'getBaseName$java_io_File', function (file) {
var name=file.getName$();
return name.toLowerCase$().endsWith$S(".lut") ? name.substring$I$I(0, name.length$() - 4) : name;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.ui.dnd.LUTFileDragAndDropHandler',null,['org.scijava.plugin.Plugin']],['type="org.scijava.ui.dnd.DragAndDropHandler.class" ']],
  [['lutService','net.imagej.lut.LUTService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
