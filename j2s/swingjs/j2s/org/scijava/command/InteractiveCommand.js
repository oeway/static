(function(){var P$=Clazz.newPackage("org.scijava.command"),p$1={},I$=[[0,'org.scijava.display.Display']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InteractiveCommand", null, 'org.scijava.command.DynamicCommand', ['org.scijava.command.Interactive', 'org.scijava.command.Previewable', 'org.scijava.log.Logged']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['displayService','org.scijava.display.DisplayService','eventService','org.scijava.event.EventService','threadService','org.scijava.thread.ThreadService','log','org.scijava.log.LogService','listenerNames','String[]']]]

Clazz.newMeth(C$, 'c$$SA', function (listenerNames) {
Clazz.super_(C$, this);
this.listenerNames=listenerNames;
}, 1);

Clazz.newMeth(C$, 'preview$', function () {
this.run$();
});

Clazz.newMeth(C$, 'cancel$', function () {
});

Clazz.newMeth(C$, 'log$', function () {
return this.log;
});

Clazz.newMeth(C$, 'updateInput$org_scijava_module_ModuleItem', function (item) {
var displayItem=p$1.asDisplay$org_scijava_module_ModuleItem.apply(this, [item]);
if (displayItem != null ) p$1.updateDisplay$org_scijava_module_ModuleItem.apply(this, [displayItem]);
 else {
this.log.warn$O("Input '" + item.getName$() + "' (" + item.getClass$().getName$() + ") is not supported" );
}});

Clazz.newMeth(C$, 'asType$org_scijava_module_ModuleItem$Class', function (item, type) {
if (!type.isAssignableFrom$Class(item.getType$())) {
return null;
}var typedItem=item;
return typedItem;
});

Clazz.newMeth(C$, 'update$org_scijava_module_ModuleItem$TT', function (item, newValue) {
var oldValue=item.getValue$org_scijava_module_Module(this);
if (oldValue !== newValue ) {
item.setValue$org_scijava_module_Module$TT(this, newValue);
try {
item.callback$org_scijava_module_Module(this);
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.module.MethodCallException")){
this.log.error$Throwable(exc);
} else {
throw exc;
}
}
}});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayActivatedEvent', function (evt) {
this.threadService.run$Runnable(((P$.InteractiveCommand$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "InteractiveCommand$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
for (var listenerName, $listenerName = 0, $$listenerName = this.b$['org.scijava.command.InteractiveCommand'].listenerNames; $listenerName<$$listenerName.length&&((listenerName=($$listenerName[$listenerName])),1);$listenerName++) {
var item=this.b$['org.scijava.command.DynamicCommand'].getInfo$.apply(this.b$['org.scijava.command.DynamicCommand'], []).getInput$S(listenerName);
this.b$['org.scijava.command.InteractiveCommand'].updateInput$org_scijava_module_ModuleItem.apply(this.b$['org.scijava.command.InteractiveCommand'], [item]);
}
});
})()
), Clazz.new_(P$.InteractiveCommand$1.$init$, [this, null])));
});

Clazz.newMeth(C$, 'asDisplay$org_scijava_module_ModuleItem', function (item) {
var displayClass=Clazz.getClass($I$(1),['canDisplay$Class','canDisplay$O','close$','display$O','isDisplaying$O','update$']);
return this.asType$org_scijava_module_ModuleItem$Class(item, displayClass);
}, p$1);

Clazz.newMeth(C$, 'updateDisplay$org_scijava_module_ModuleItem', function (item) {
this.update$org_scijava_module_ModuleItem$TT(item, this.displayService.getActiveDisplay$Class(item.getType$()));
}, p$1);
C$.$getAnn$ = function(){ return [
[['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_DisplayActivatedEvent',['org.scijava.event.EventHandler']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
