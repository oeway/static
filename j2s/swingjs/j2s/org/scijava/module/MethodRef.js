(function(){var P$=Clazz.newPackage("org.scijava.module"),p$1={},I$=[[0,'java.util.ArrayList','org.scijava.ValidityProblem','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MethodRef", null, null, 'org.scijava.Validated');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.problems=Clazz.new_(1,{E:"org.scijava.ValidityProblem"},$I$(1,1));
}, 1);

C$.$fields$=[['S',['label'],'O',['method','java.lang.reflect.Method','problems','java.util.List']]]

Clazz.newMeth(C$, 'c$$Class$S$ClassA', function (clazz, methodName, params) {
;C$.$init$.apply(this);
this.method=p$1.findMethod$Class$S$ClassA.apply(this, [clazz, methodName, params]);
if (this.method == null ) this.label=null;
 else this.label=clazz.getName$() + "#" + this.method.getName$() ;
}, 1);

Clazz.newMeth(C$, 'execute$O$OA', function (obj, args) {
if (this.method == null ) return;
try {
this.method.invoke$O$OA(obj, args);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
throw Clazz.new_(Clazz.load('org.scijava.module.MethodCallException').c$$S$Throwable,["Error executing method: " + this.label, exc]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'findMethod$Class$S$ClassA', function (clazz, methodName, params) {
if (clazz == null ) return null;
if (methodName == null  || methodName.isEmpty$() ) return null;
for (var c=clazz; c != null ; c=c.getSuperclass$()) {
try {
var m=c.getDeclaredMethod$S$ClassA(methodName, params);
m.setAccessible$Z(true);
return m;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
break;
}
} else {
throw e$$;
}
}
}
var problem="Method not found: " + clazz.getName$() + "#" + methodName ;
this.problems.add$TE(Clazz.new_($I$(2,1).c$$S,[problem]));
return null;
}, p$1);

Clazz.newMeth(C$, 'isValid$', function () {
return this.problems.isEmpty$();
});

Clazz.newMeth(C$, 'getProblems$', function () {
return $I$(3).unmodifiableList$java_util_List(this.problems);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
