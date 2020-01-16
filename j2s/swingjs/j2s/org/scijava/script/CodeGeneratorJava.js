(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CodeGeneratorJava", null, null, 'org.scijava.script.CodeGenerator');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.lsep=System.getProperty$S("line.separator");
}

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['sb','StringBuilder']]
,['S',['lsep']]]

Clazz.newMeth(C$, 'getResult$', function () {
return this.sb.toString();
});

Clazz.newMeth(C$, 'invokeStatementBegin$', function () {
this.sb.append$S("invoke(");
});

Clazz.newMeth(C$, 'addModuleCalled$S', function (moduleCalled) {
this.sb.append$S("\"");
this.sb.append$S(moduleCalled);
this.sb.append$S("\"");
});

Clazz.newMeth(C$, 'addArgDelimiter$', function () {
this.sb.append$S(", ");
});

Clazz.newMeth(C$, 'addArgument$org_scijava_script_ParameterObject', function (parameterObject) {
var sb1=Clazz.new_($I$(1,1));
var value=parameterObject.value;
if (Clazz.instanceOf(value, "java.lang.String")) {
sb1.append$S("\"");
sb1.append$S(parameterObject.value.toString());
sb1.append$S("\"");
} else if (Clazz.instanceOf(value, "java.lang.Boolean")) {
if ((value).valueOf()) sb1.append$S("true");
 else sb1.append$S("false");
} else sb1.append$S(parameterObject.value.toString());
this.sb.append$S(sb1.toString());
});

Clazz.newMeth(C$, 'statementTerminate$', function () {
this.sb.append$S(C$.lsep);
});

Clazz.newMeth(C$, 'invokeStatementEnd$', function () {
this.sb.append$S(")");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
