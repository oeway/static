(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[[0,'org.scijava.plugin.Menu','org.scijava.plugin.Attr']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*@*/var C$=Clazz.newClass(P$, "Plugin", null, null, 'java.lang.annotation.Annotation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.APPLICATION_MENU_ROOT="app";
this.CONTEXT_MENU_ROOT="context";
}, 1);

C$.$fields$=[['S',['APPLICATION_MENU_ROOT','CONTEXT_MENU_ROOT']]]
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() { var a=[];
a.push(['type','Class',null]);
a.push(['name','String',""]);
a.push(['label','String',""]);
a.push(['description','String',""]);
a.push(['menuPath','String',""]);
a.push(['menu','org.scijava.plugin.Menu[]',Clazz.array($I$(1), -1, [])]);
a.push(['menuRoot','String',"app"]);
a.push(['iconPath','String',""]);
a.push(['priority','double',0.0]);
a.push(['selectable','boolean',false]);
a.push(['selectionGroup','String',""]);
a.push(['enabled','boolean',true]);
a.push(['visible','boolean',true]);
a.push(['headless','boolean',false]);
a.push(['initializer','String',""]);
a.push(['attrs','org.scijava.plugin.Attr[]',Clazz.array($I$(2), -1, [])]);
return a}
Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
