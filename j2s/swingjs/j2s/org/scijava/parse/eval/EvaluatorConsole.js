(function(){var P$=Clazz.newPackage("org.scijava.parse.eval"),p$1={},I$=[[0,'org.scijava.parse.eval.DefaultEvaluator','java.io.BufferedReader','java.io.InputStreamReader','java.util.regex.Pattern','org.scijava.parse.Tokens','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EvaluatorConsole");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['evaluator','org.scijava.parse.eval.Evaluator']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_parse_eval_Evaluator.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_parse_eval_Evaluator', function (evaluator) {
;C$.$init$.apply(this);
this.evaluator=evaluator;
}, 1);

Clazz.newMeth(C$, 'showConsole$', function () {
this.showConsole$java_io_BufferedReader(Clazz.new_($I$(2,1).c$$java_io_Reader,[Clazz.new_($I$(3,1).c$$java_io_InputStream,[System.$in])]));
});

Clazz.newMeth(C$, 'showConsole$java_io_BufferedReader', function ($in) {
while (true){
p$1.print$O.apply(this, ["> "]);
var line=$in.readLine$();
if (line == null ) break;
try {
var result=this.evaluator.evaluate$S(line);
this.evaluator.setStrict$Z(false);
if (result != null ) p$1.printResult$O.apply(this, [result]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
var msg=exc.getMessage$();
if (msg == null ) throw exc;
var m=$I$(4).compile$S(".* at index (\\d+)").matcher$CharSequence(msg);
if (m.matches$()) {
var index=Integer.parseInt$S(m.group$I(1));
p$1.println$O.apply(this, [p$1.caret$I.apply(this, [index])]);
}p$1.println$O.apply(this, [msg]);
} else {
throw exc;
}
}
}
});

Clazz.newMeth(C$, 'printResult$O', function (o) {
if (Clazz.instanceOf(o, "java.util.List")) {
for (var item, $item = o.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
p$1.printResult$O.apply(this, [item]);
}
} else if ($I$(5).isVariable$O(o)) {
var value=this.evaluator.value$O(o);
if (Clazz.instanceOf(value, "org.scijava.parse.eval.Unresolved")) p$1.println$O.apply(this, [p$1.valueAndType$O.apply(this, [o])]);
 else p$1.println$O.apply(this, [p$1.valueAndType$O.apply(this, [o]) + " = " + p$1.valueAndType$O.apply(this, [value]) ]);
} else p$1.println$O.apply(this, [p$1.valueAndType$O.apply(this, [o])]);
}, p$1);

Clazz.newMeth(C$, 'valueAndType$O', function (o) {
return o + " : " + o.getClass$().getName$() ;
}, p$1);

Clazz.newMeth(C$, 'print$O', function (o) {
System.out.print$O(o);
}, p$1);

Clazz.newMeth(C$, 'println$O', function (o) {
System.out.println$O(o);
}, p$1);

Clazz.newMeth(C$, 'caret$I', function (index) {
var sb=Clazz.new_($I$(6,1));
var count="> ".length$() + index;
for (var i=0; i < count; i++) {
sb.append$S(" ");
}
sb.append$S("^");
return sb.toString();
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
