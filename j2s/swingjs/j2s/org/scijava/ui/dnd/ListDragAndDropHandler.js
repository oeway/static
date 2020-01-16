(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd"),I$=[[0,'java.util.List']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListDragAndDropHandler", null, 'org.scijava.ui.dnd.AbstractDragAndDropHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dragAndDropService','org.scijava.ui.dnd.DragAndDropService']]]

Clazz.newMeth(C$, ['supports$java_util_List$org_scijava_display_Display','supports$TD$org_scijava_display_Display'], function (list, display) {
if (this.dragAndDropService == null ) return false;
if (!C$.superclazz.prototype.supports$TD$org_scijava_display_Display.apply(this, [list, display])) return false;
if (list.size$() == 0) return true;
for (var item, $item = list.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (this.dragAndDropService.supports$O$org_scijava_display_Display(item, display)) return true;
}
return false;
});

Clazz.newMeth(C$, ['drop$java_util_List$org_scijava_display_Display','drop$TD$org_scijava_display_Display'], function (list, display) {
if (this.dragAndDropService == null ) return false;
this.check$TD$org_scijava_display_Display(list, display);
if (list == null ) return true;
if (list.size$() == 0) return true;
var success=false;
for (var item, $item = list.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (this.dragAndDropService.supports$O$org_scijava_display_Display(item, display)) {
var result=this.dragAndDropService.drop$O$org_scijava_display_Display(item, display);
if (result) success=true;
}}
return success;
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(1),['add$TE','add$I$TE','addAll$java_util_Collection','addAll$I$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','get$I','hashCode$','indexOf$O','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','remove$O','remove$I','removeAll$java_util_Collection','replaceAll$java_util_function_UnaryOperator','retainAll$java_util_Collection','set$I$TE','size$','sort$java_util_Comparator','spliterator$','subList$I$I','toArray$','toArray$TTA']);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.dnd.ListDragAndDropHandler',null,['org.scijava.plugin.Plugin']],['type="org.scijava.ui.dnd.DragAndDropHandler.class" ']],
  [['dragAndDropService','org.scijava.ui.dnd.DragAndDropService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
