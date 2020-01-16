(function(){var P$=Clazz.newPackage("org.scijava.options"),p$1={},I$=[[0,'org.scijava.options.event.OptionsEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsPlugin", null, 'org.scijava.command.DynamicCommand', 'org.scijava.plugin.SingletonPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','prefService','org.scijava.prefs.PrefService','moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, 'load$', function () {
for (var input, $input = this.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
p$1.loadInput$org_scijava_module_ModuleItem.apply(this, [input]);
}
});

Clazz.newMeth(C$, 'save$', function () {
for (var input, $input = this.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
p$1.saveInput$org_scijava_module_ModuleItem.apply(this, [input]);
}
});

Clazz.newMeth(C$, 'reset$', function () {
this.prefService.clear$Class(this.getClass$());
});

Clazz.newMeth(C$, 'cancel$', function () {
p$1.resetState.apply(this, []);
});

Clazz.newMeth(C$, 'run$', function () {
this.save$();
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_options_OptionsPlugin,[this]));
p$1.resetState.apply(this, []);
});

Clazz.newMeth(C$, 'loadInput$org_scijava_module_ModuleItem', function (input) {
var value=this.moduleService.load$org_scijava_module_ModuleItem(input);
if (value != null ) input.setValue$org_scijava_module_Module$TT(this, value);
}, p$1);

Clazz.newMeth(C$, 'saveInput$org_scijava_module_ModuleItem', function (input) {
var value=input.getValue$org_scijava_module_Module(this);
this.moduleService.save$org_scijava_module_ModuleItem$TT(input, value);
}, p$1);

Clazz.newMeth(C$, 'resetState', function () {
for (var input, $input = this.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
this.unresolveInput$S(input.getName$());
}
this.uncancel$();
}, p$1);
C$.$getAnn$ = function(){ return [
[['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['prefService','org.scijava.prefs.PrefService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
