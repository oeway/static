(function(){var P$=Clazz.newPackage("org.scijava.tool.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ToolEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['tool','org.scijava.tool.Tool']]]

Clazz.newMeth(C$, 'c$$org_scijava_tool_Tool', function (tool) {
Clazz.super_(C$, this);
this.tool=tool;
}, 1);

Clazz.newMeth(C$, 'getTool$', function () {
return this.tool;
});

Clazz.newMeth(C$, 'toString', function () {
return "\n\ttool = " + this.tool;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
