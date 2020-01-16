(function(){var P$=Clazz.newPackage("org.scijava.module"),I$=[[0,'org.scijava.module.event.ModulesUpdatedEvent','org.scijava.util.Types','org.scijava.util.VersionUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ModuleInfo", null, null, ['org.scijava.UIDetails', 'org.scijava.Validated', 'org.scijava.Identifiable', 'org.scijava.Locatable', 'org.scijava.Versioned']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isInteractive$', function () {
return false;
});

Clazz.newMeth(C$, 'canPreview$', function () {
return false;
});

Clazz.newMeth(C$, 'canCancel$', function () {
return true;
});

Clazz.newMeth(C$, 'canRunHeadless$', function () {
return false;
});

Clazz.newMeth(C$, 'getInitializer$', function () {
return null;
});

Clazz.newMeth(C$, 'update$org_scijava_event_EventService', function (eventService) {
eventService.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_module_ModuleInfo,[this]));
});

Clazz.newMeth(C$, 'getTitle$', function () {
var title=org.scijava.UIDetails.prototype.getTitle$.apply(this, []);
if (!title.equals$O(this.getClass$().getSimpleName$())) return title;
var className=this.getDelegateClassName$();
var dot=className.lastIndexOf$S(".");
return dot < 0 ? className : className.substring$I(dot + 1);
});

Clazz.newMeth(C$, 'isValid$', function () {
return true;
});

Clazz.newMeth(C$, 'getProblems$', function () {
return null;
});

Clazz.newMeth(C$, 'getIdentifier$', function () {
return "module:" + this.getDelegateClassName$();
});

Clazz.newMeth(C$, 'getLocation$', function () {
try {
return $I$(2).location$Class(this.loadDelegateClass$()).toExternalForm$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"ClassNotFoundException")){
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getVersion$', function () {
try {
return $I$(3).getVersion$Class(this.loadDelegateClass$());
} catch (exc) {
if (Clazz.exceptionOf(exc,"ClassNotFoundException")){
return null;
} else {
throw exc;
}
}
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
