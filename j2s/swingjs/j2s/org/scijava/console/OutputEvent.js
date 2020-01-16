(function(){var P$=Clazz.newPackage("org.scijava.console"),I$=[[0,'Thread',['org.scijava.console.OutputEvent','.Source']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutputEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.event.SciJavaEvent');
C$.$classes$=[['Source',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['contextual'],'S',['output'],'O',['source','org.scijava.console.OutputEvent.Source']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_console_OutputEvent_Source$S$Z', function (context, source, output, contextual) {
Clazz.super_(C$, this);
this.source=source;
this.output=output;
this.contextual=contextual;
this.setContext$org_scijava_Context(context);
this.setCallingThread$Thread($I$(1).currentThread$());
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getOutput$', function () {
return this.output;
});

Clazz.newMeth(C$, 'isContextual$', function () {
return this.contextual;
});

Clazz.newMeth(C$, 'isStdout$', function () {
return this.source === $I$(2).STDOUT ;
});

Clazz.newMeth(C$, 'isStderr$', function () {
return this.source === $I$(2).STDERR ;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tsource = " + this.source + "\n\toutput = " + this.output + "\n\tcontextual = " + this.contextual ;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.OutputEvent, "Source", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "STDOUT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "STDERR", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
