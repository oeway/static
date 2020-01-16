(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.net.URLClassLoader','java.util.HashMap','java.util.StringTokenizer','StringBuffer','Boolean','java.io.BufferedReader','java.io.InputStreamReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReflectedUniverse");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['force'],'O',['variables','java.util.HashMap','loader','ClassLoader']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$ClassLoader.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA', function (urls) {
C$.c$$ClassLoader.apply(this, [urls == null  ? null : Clazz.new_($I$(1,1).c$$java_net_URLA,[urls])]);
}, 1);

Clazz.newMeth(C$, 'c$$ClassLoader', function (loader) {
;C$.$init$.apply(this);
this.variables=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
this.loader=loader == null  ? this.getClass$().getClassLoader$() : loader;
}, 1);

Clazz.newMeth(C$, 'isInstance$Class$O', function (c, o) {
return (o == null  || c.isInstance$O(o)  || (c === Byte.TYPE  && Clazz.instanceOf(o, "java.lang.Byte") )  || (c === Short.TYPE  && Clazz.instanceOf(o, "java.lang.Short") )  || (c === Integer.TYPE  && Clazz.instanceOf(o, "java.lang.Integer") )  || (c === Long.TYPE  && Clazz.instanceOf(o, "java.lang.Long") )  || (c === Float.TYPE  && Clazz.instanceOf(o, "java.lang.Float") )  || (c === Double.TYPE  && Clazz.instanceOf(o, "java.lang.Double") )  || (c === Boolean.TYPE  && Clazz.instanceOf(o, "java.lang.Boolean") )  || (c === Character.TYPE  && Clazz.instanceOf(o, "java.lang.Character") ) );
}, 1);

Clazz.newMeth(C$, 'exec$S', function (command) {
command=command.trim$();
if (command.startsWith$S("import ")) {
command=command.substring$I(7).trim$();
var dot=command.lastIndexOf$S(".");
var varName=dot < 0 ? command : command.substring$I(dot + 1);
var c;
try {
c=Clazz.forName(command, true, this.loader);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoClassDefFoundError")){
var err = e$$;
{
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["No such class: " + command, err]);
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var exc = e$$;
{
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["No such class: " + command, exc]);
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var exc = e$$;
{
var msg=exc.getMessage$();
if (msg != null  && msg.indexOf$S("ClassNotFound") < 0 ) throw exc;
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["No such class: " + command, exc]);
}
} else {
throw e$$;
}
}
this.setVar$S$O(varName, c);
return null;
}var eqIndex=command.indexOf$S("=");
var target=null;
if (eqIndex >= 0) {
target=command.substring$I$I(0, eqIndex).trim$();
command=command.substring$I(eqIndex + 1).trim$();
}var result=null;
var leftParen=command.indexOf$S("(");
if (leftParen < 0) {
result=this.getVar$S(command);
if (target != null ) this.setVar$S$O(target, result);
return result;
} else if (leftParen != command.lastIndexOf$S("(") || command.indexOf$S(")") != command.length$() - 1 ) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["Invalid parentheses"]);
}var arglist=command.substring$I(leftParen + 1);
var st=Clazz.new_($I$(3,1).c$$S$S,[arglist, "(,)"]);
var len=st.countTokens$();
var args=Clazz.array(java.lang.Object, [len]);
for (var i=0; i < len; i++) {
var arg=st.nextToken$().trim$();
args[i]=this.getVar$S(arg);
}
command=command.substring$I$I(0, leftParen);
if (command.startsWith$S("new ")) {
var className=command.substring$I(4).trim$();
var $var=this.getVar$S(className);
if ($var == null ) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["Class not found: " + className]);
} else if (!(Clazz.instanceOf($var, "java.lang.Class"))) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["Not a class: " + className]);
}var cl=$var;
var constructor=null;
var c=cl.getConstructors$();
for (var i=0; i < c.length; i++) {
if (this.force) c[i].setAccessible$Z(true);
var params=c[i].getParameterTypes$();
if (params.length == args.length) {
var match=true;
for (var j=0; j < params.length; j++) {
if (!C$.isInstance$Class$O(params[j], args[j])) {
match=false;
break;
}}
if (match) {
constructor=c[i];
break;
}}}
if (constructor == null ) {
var sb=Clazz.new_($I$(4,1).c$$S,[command]);
for (var i=0; i < args.length; i++) {
sb.append$S(i == 0 ? "(" : ", ");
sb.append$S(args[i].getClass$().getName$());
}
sb.append$S(")");
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["No such constructor: " + sb.toString()]);
}var exc=null;
try {
result=constructor.newInstance$OA(args);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
exc=e;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
exc=e;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
exc=e;
}
} else {
throw e$$;
}
}
if (exc != null ) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["Cannot instantiate object", exc]);
}} else {
var dot=command.indexOf$S(".");
if (dot < 0) throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["Syntax error"]);
var varName=command.substring$I$I(0, dot).trim$();
var methodName=command.substring$I(dot + 1).trim$();
var $var=this.getVar$S(varName);
if ($var == null ) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["No such variable: " + varName]);
}var varClass=Clazz.instanceOf($var, "java.lang.Class") ? $var : $var.getClass$();
var method=null;
var m=varClass.getMethods$();
for (var i=0; i < m.length; i++) {
if (this.force) m[i].setAccessible$Z(true);
if (methodName.equals$O(m[i].getName$())) {
var params=m[i].getParameterTypes$();
if (params.length == args.length) {
var match=true;
for (var j=0; j < params.length; j++) {
if (!C$.isInstance$Class$O(params[j], args[j])) {
match=false;
break;
}}
if (match) {
method=m[i];
break;
}}}}
if (method == null ) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["No such method: " + methodName]);
}var exc=null;
try {
result=method.invoke$O$OA($var, args);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
exc=e;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
exc=e;
}
} else {
throw e$$;
}
}
if (exc != null ) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["Cannot execute method: " + methodName, exc]);
}}if (target != null ) this.setVar$S$O(target, result);
return result;
});

Clazz.newMeth(C$, 'setVar$S$O', function (varName, obj) {
if (obj == null ) this.variables.remove$O(varName);
 else this.variables.put$TK$TV(varName, obj);
});

Clazz.newMeth(C$, 'setVar$S$Z', function (varName, b) {
this.setVar$S$O(varName,  Boolean.from(b));
});

Clazz.newMeth(C$, 'setVar$S$B', function (varName, b) {
this.setVar$S$O(varName,  new Byte(($b$[0] = b, $b$[0])));
});

Clazz.newMeth(C$, 'setVar$S$C', function (varName, c) {
this.setVar$S$O(varName, Character.valueOf$C(c));
});

Clazz.newMeth(C$, 'setVar$S$D', function (varName, d) {
this.setVar$S$O(varName,  new Double(d));
});

Clazz.newMeth(C$, 'setVar$S$F', function (varName, f) {
this.setVar$S$O(varName,  new Float(f));
});

Clazz.newMeth(C$, 'setVar$S$I', function (varName, i) {
this.setVar$S$O(varName, Integer.valueOf$I(i));
});

Clazz.newMeth(C$, 'setVar$S$J', function (varName, l) {
this.setVar$S$O(varName, Long.valueOf$J(l));
});

Clazz.newMeth(C$, 'setVar$S$H', function (varName, s) {
this.setVar$S$O(varName, Short.valueOf$H(s));
});

Clazz.newMeth(C$, 'getVar$S', function (varName) {
if (varName.equals$O("null")) {
return null;
} else if (varName.equals$O("true")) {
return $I$(5).TRUE;
} else if (varName.equals$O("false")) {
return $I$(5).FALSE;
} else if (varName.startsWith$S("\"") && varName.endsWith$S("\"") ) {
return varName.substring$I$I(1, varName.length$() - 1);
}try {
if (varName.matches$S("-?\\d+")) {
return  new Integer(varName);
} else if (varName.matches$S("-?\\d+L")) {
return  new Long(varName);
} else if (varName.matches$S("-?\\d*\\.\\d*")) {
return  new Double(varName);
}} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["Invalid literal: " + varName, exc]);
} else {
throw exc;
}
}
var dot=varName.indexOf$S(".");
if (dot >= 0) {
var className=varName.substring$I$I(0, dot).trim$();
var $var=this.variables.get$O(className);
if ($var == null ) {
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S,["No such class: " + className]);
}var varClass=Clazz.instanceOf($var, "java.lang.Class") ? $var : $var.getClass$();
var fieldName=varName.substring$I(dot + 1).trim$();
var field;
try {
field=varClass.getField$S(fieldName);
if (this.force) field.setAccessible$Z(true);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NoSuchFieldException")){
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["No such field: " + varName, exc]);
} else {
throw exc;
}
}
var fieldVal;
try {
fieldVal=field.get$O($var);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('org.scijava.util.ReflectException').c$$S$Throwable,["Cannot get field value: " + varName, exc]);
} else {
throw exc;
}
}
return fieldVal;
}var $var=this.variables.get$O(varName);
return $var;
});

Clazz.newMeth(C$, 'setAccessibilityIgnored$Z', function (ignore) {
this.force=ignore;
});

Clazz.newMeth(C$, 'isAccessibilityIgnored$', function () {
return this.force;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var r=Clazz.new_(C$);
System.out.println$S("Reflected universe test environment. Type commands, or press ^D to quit.");
if (args.length > 0) {
r.setAccessibilityIgnored$Z(true);
System.out.println$S("Ignoring accessibility modifiers.");
}var $in=Clazz.new_($I$(6,1).c$$java_io_Reader,[Clazz.new_($I$(7,1).c$$java_io_InputStream$S,[System.$in, "UTF-8"])]);
while (true){
System.out.print$S("> ");
var line=$in.readLine$();
if (line == null ) break;
try {
r.exec$S(line);
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.util.ReflectException")){
System.err.println$S("Could not execute '" + line + "':" );
exc.printStackTrace$();
} else {
throw exc;
}
}
}
System.out.println$();
}, 1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
