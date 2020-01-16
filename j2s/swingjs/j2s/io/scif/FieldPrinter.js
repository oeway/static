(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'StringBuilder','java.lang.reflect.Modifier','java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FieldPrinter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['obj','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O', function (o) {
;C$.$init$.apply(this);
this.obj=o;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S(C$.superclazz.prototype.toString.apply(this, []) + "\n");
sb.append$S(p$1.indent$S.apply(this, [p$1.dumpString$Class.apply(this, [this.obj.getClass$()])]));
return sb.toString();
});

Clazz.newMeth(C$, 'dumpString$Class', function (type) {
if (type == null ) return "";
var sb=Clazz.new_($I$(1,1));
sb.append$S("--" + type + "--\n" );
sb.append$S("{\n");
for (var f, $f = 0, $$f = type.getDeclaredFields$(); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
f.setAccessible$Z(true);
var mods=f.getModifiers$();
if ($I$(2).isFinal$I(mods)) continue;
if ($I$(2).isStatic$I(mods)) continue;
var name=f.getName$();
var value;
try {
value=f.get$O(this.obj);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
continue;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
continue;
}
} else {
throw e$$;
}
}
sb.append$S(name + " = " + value + "\n" );
}
sb.append$S("}\n");
sb.append$S(p$1.indent$S.apply(this, [p$1.dumpString$Class.apply(this, [type.getSuperclass$()])]));
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'indent$S', function (s) {
var superSB=Clazz.new_($I$(1,1));
var stk=Clazz.new_($I$(3,1).c$$S$S,[s, "\n"]);
while (stk.hasMoreTokens$()){
superSB.append$S("\t" + stk.nextToken$() + "\n" );
}
return superSB.toString();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
