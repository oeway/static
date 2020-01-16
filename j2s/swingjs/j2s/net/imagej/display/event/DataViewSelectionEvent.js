(function(){var P$=Clazz.newPackage("net.imagej.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataViewSelectionEvent", null, 'net.imagej.display.event.DataViewEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['selected']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_DataView$Z', function (view, selected) {
;C$.superclazz.c$$net_imagej_display_DataView.apply(this,[view]);C$.$init$.apply(this);
this.selected=selected;
}, 1);

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
