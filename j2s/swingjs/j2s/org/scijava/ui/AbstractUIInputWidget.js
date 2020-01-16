(function(){var P$=Clazz.newPackage("org.scijava.ui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractUIInputWidget", null, 'org.scijava.widget.AbstractInputWidget');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['threadService','org.scijava.thread.ThreadService','uiService','org.scijava.ui.UIService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'refreshWidget$', function () {
if (this.ui$().requiresEDT$()) {
try {
this.threadService.invoke$Runnable((P$.AbstractUIInputWidget$lambda1$||(P$.AbstractUIInputWidget$lambda1$=(((P$.AbstractUIInputWidget$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AbstractUIInputWidget$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () { return (this.b$['org.scijava.ui.AbstractUIInputWidget'].doRefresh$.apply(this.b$['org.scijava.ui.AbstractUIInputWidget'], []));});
})()
), Clazz.new_(P$.AbstractUIInputWidget$lambda1.$init$, [this, null]))))));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
this.log.error$O$Throwable("Interrupted while refresh widget: " + this.getClass$(), e);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
this.log.error$O$Throwable("Failed to refresh widget: " + this.getClass$() + " on EDT" , e);
}
} else {
throw e$$;
}
}
} else {
this.doRefresh$();
}});

Clazz.newMeth(C$, 'ui$S', function (uiName) {
return this.uiService.getUI$S(uiName);
});
C$.$getAnn$ = function(){ return [
[['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
