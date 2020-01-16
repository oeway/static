(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd"),I$=[[0,'java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptFileDragAndDropHandler", null, 'org.scijava.ui.dnd.AbstractDragAndDropHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scriptService','org.scijava.script.ScriptService']]]

Clazz.newMeth(C$, ['drop$java_io_File$org_scijava_display_Display','drop$TD$org_scijava_display_Display'], function (file, display) {
if (this.scriptService == null ) return false;
this.check$TD$org_scijava_display_Display(file, display);
if (file == null ) return true;
return true;
});

Clazz.newMeth(C$, ['supports$java_io_File','supports$TT','supports$TD'], function (file) {
if (this.scriptService == null ) return false;
if (!C$.superclazz.prototype.supports$TD.apply(this, [file])) return false;
return this.scriptService.canHandleFile$java_io_File(file);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(1));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.dnd.ScriptFileDragAndDropHandler',null,['org.scijava.plugin.Plugin']],['type="org.scijava.ui.dnd.DragAndDropHandler.class" ']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
