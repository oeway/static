(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[[0,'org.scijava.ItemIO','org.scijava.ItemVisibility','org.scijava.plugin.Attr']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*@*/var C$=Clazz.newClass(P$, "Parameter", null, null, 'java.lang.annotation.Annotation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() { var a=[];
a.push(['label','String',""]);
a.push(['description','String',""]);
a.push(['type','org.scijava.ItemIO',$I$(1).INPUT]);
a.push(['visibility','org.scijava.ItemVisibility',$I$(2).NORMAL]);
a.push(['autoFill','boolean',true]);
a.push(['required','boolean',true]);
a.push(['persist','boolean',true]);
a.push(['persistKey','String',""]);
a.push(['initializer','String',""]);
a.push(['validater','String',""]);
a.push(['callback','String',""]);
a.push(['style','String',""]);
a.push(['min','String',""]);
a.push(['max','String',""]);
a.push(['stepSize','String',""]);
a.push(['choices','String[]',Clazz.array(String, -1, [])]);
a.push(['attrs','org.scijava.plugin.Attr[]',Clazz.array($I$(3), -1, [])]);
a.push(['columns','int',6]);
return a}
Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
