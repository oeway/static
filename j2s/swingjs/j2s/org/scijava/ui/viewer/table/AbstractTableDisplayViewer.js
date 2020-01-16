(function(){var P$=Clazz.newPackage("org.scijava.ui.viewer.table"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractTableDisplayViewer", null, 'org.scijava.ui.viewer.AbstractDisplayViewer', 'org.scijava.ui.viewer.table.TableDisplayViewer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'canView$org_scijava_display_Display', function (d) {
return Clazz.instanceOf(d, "org.scijava.table.TableDisplay");
});

Clazz.newMeth(C$, 'getDisplay$', function () {
return C$.superclazz.prototype.getDisplay$.apply(this, []);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
