(function(){var P$=Clazz.newPackage("org.scijava.ui.headless"),I$=[[0,'org.scijava.util.ListUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HeadlessDisplayViewer", null, 'org.scijava.ui.viewer.AbstractDisplayViewer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isCompatible$org_scijava_ui_UserInterface', function (ui) {
return Clazz.instanceOf(ui, "org.scijava.ui.headless.HeadlessUI");
});

Clazz.newMeth(C$, 'view$org_scijava_ui_viewer_DisplayWindow$org_scijava_display_Display', function (w, d) {
if (this.log$() == null ) return;
this.log$().info$O(d.getName$() + " = " + $I$(1).string$java_util_List$Z(d, false) );
});

Clazz.newMeth(C$, 'canView$org_scijava_display_Display', function (d) {
return true;
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.headless.HeadlessDisplayViewer',null,['org.scijava.plugin.Plugin']],['type="org.scijava.ui.viewer.DisplayViewer.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
