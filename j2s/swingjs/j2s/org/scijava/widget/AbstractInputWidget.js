(function(){var P$=Clazz.newPackage("org.scijava.widget"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractInputWidget", null, 'org.scijava.plugin.AbstractWrapperPlugin', 'org.scijava.widget.InputWidget');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['widgetModel','org.scijava.widget.WidgetModel']]]

Clazz.newMeth(C$, 'updateModel$', function () {
this.widgetModel.setValue$O(this.getValue$());
});

Clazz.newMeth(C$, ['set$org_scijava_widget_WidgetModel','set$TD'], function (model) {
if (this.widgetModel != null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Widget already initialized"]);
}this.widgetModel=model;
});

Clazz.newMeth(C$, 'get$', function () {
return this.widgetModel;
});

Clazz.newMeth(C$, ['supports$org_scijava_widget_WidgetModel','supports$TT','supports$TD'], function (data) {
return P$.InputWidget.prototype.supports$org_scijava_widget_WidgetModel.apply(this, [data]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
