(function(){var P$=Clazz.newPackage("org.bushe.swing.event.annotation"),I$=[[0,'org.bushe.swing.event.annotation.ReferenceStrength','org.bushe.swing.event.ThreadSafeEventService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*@*/var C$=Clazz.newClass(P$, "VetoRuntimeTopicPatternSubscriber", null, null, 'java.lang.annotation.Annotation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() { var a=[];
a.push(['methodName','String',"getTopicPatternName"]);
a.push(['referenceStrength','org.bushe.swing.event.annotation.ReferenceStrength',$I$(1).WEAK]);
a.push(['eventServiceName','String',"EventBus"]);
a.push(['priority','int',0]);
a.push(['exact','boolean',false]);
a.push(['autoCreateEventServiceClass','Class',Clazz.getClass($I$(2))]);
return a}
Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
