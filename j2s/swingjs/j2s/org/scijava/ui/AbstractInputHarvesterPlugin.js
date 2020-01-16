(function(){var P$=Clazz.newPackage("org.scijava.ui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractInputHarvesterPlugin", null, 'org.scijava.widget.AbstractInputHarvester', 'org.scijava.module.process.PreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['cancelReason'],'O',['uiService','org.scijava.ui.UIService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.uiService == null ) return;
if (!this.uiService.isVisible$S(this.getUI$())) return;
try {
this.harvest$org_scijava_module_Module(module);
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.module.ModuleException")){
this.cancel$S(e.getMessage$());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isCanceled$', function () {
return this.cancelReason != null ;
});

Clazz.newMeth(C$, 'cancel$S', function (reason) {
this.cancelReason=reason == null  ? "" : reason;
});

Clazz.newMeth(C$, 'getCancelReason$', function () {
return this.cancelReason;
});
C$.$getAnn$ = function(){ return [
[['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
