(function(){var P$=Clazz.newPackage("org.scijava.widget"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "InputHarvester");

C$.$static$ = function() {C$.$static$=0;
C$.PRIORITY=-10000.0;
}

C$.$fields$=[[]
,['D',['PRIORITY']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'harvest$org_scijava_module_Module', function (module) {
var inputPanel=this.createInputPanel$();
this.buildPanel$org_scijava_widget_InputPanel$org_scijava_module_Module(inputPanel, module);
if (!inputPanel.hasWidgets$()) return;
var ok=this.harvestInputs$org_scijava_widget_InputPanel$org_scijava_module_Module(inputPanel, module);
if (!ok) throw Clazz.new_(Clazz.load('org.scijava.module.ModuleCanceledException'));
this.processResults$org_scijava_widget_InputPanel$org_scijava_module_Module(inputPanel, module);
});

Clazz.newMeth(C$, 'processResults$org_scijava_widget_InputPanel$org_scijava_module_Module', function (inputPanel, module) {
var inputs=module.getInfo$().inputs$();
for (var item, $item = inputs.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
var name=item.getName$();
module.resolveInput$S(name);
}
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
