(function(){var P$=Clazz.newPackage("org.scijava.ui.console"),I$=[[0,['org.scijava.console.OutputEvent','.Source']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractConsolePane", null, null, 'org.scijava.ui.console.ConsolePane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['consoleService','org.scijava.console.ConsoleService']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.$init$.apply(this);
context.inject$O(this);
this.consoleService.addOutputListener$org_scijava_console_OutputListener(this);
}, 1);

Clazz.newMeth(C$, ['outputOccurred$org_scijava_console_OutputEvent','outputOccurred$'], function (event) {
this.append$org_scijava_console_OutputEvent(event);
if (event.getSource$() === $I$(1).STDERR ) this.show$();
});
C$.$getAnn$ = function(){ return [
[['consoleService','org.scijava.console.ConsoleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
