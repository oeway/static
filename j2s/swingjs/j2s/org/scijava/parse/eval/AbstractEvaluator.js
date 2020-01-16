(function(){var P$=Clazz.newPackage("org.scijava.parse.eval"),I$=[[0,'java.util.HashMap','org.scijava.parse.ExpressionParser','org.scijava.parse.Tokens','org.scijava.parse.eval.Unresolved']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractEvaluator", null, null, 'org.scijava.parse.eval.Evaluator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vars=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
this.strict=true;
}, 1);

C$.$fields$=[['Z',['strict'],'O',['vars','java.util.HashMap','parser','org.scijava.parse.ExpressionParser']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_parse_ExpressionParser.apply(this, [Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_parse_ExpressionParser', function (parser) {
;C$.$init$.apply(this);
this.parser=parser;
}, 1);

Clazz.newMeth(C$, 'getParser$', function () {
return this.parser;
});

Clazz.newMeth(C$, 'isStrict$', function () {
return this.strict;
});

Clazz.newMeth(C$, 'setStrict$Z', function (strict) {
this.strict=strict;
});

Clazz.newMeth(C$, 'evaluate$org_scijava_parse_SyntaxTree', function (syntaxTree) {
return this.evaluate$java_util_LinkedList(syntaxTree.postfix$());
});

Clazz.newMeth(C$, 'evaluate$S', function (expression) {
return this.evaluate$java_util_LinkedList(this.parser.parsePostfix$S(expression));
});

Clazz.newMeth(C$, 'value$O', function (token) {
return $I$(3).isVariable$O(token) ? this.get$org_scijava_parse_Variable(token) : token;
});

Clazz.newMeth(C$, 'get$org_scijava_parse_Variable', function (v) {
var name=v.getToken$();
if (this.vars.containsKey$O(name)) return this.vars.get$O(name);
if (this.strict) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown variable: " + name]);
return Clazz.new_($I$(4,1).c$$S,[name]);
});

Clazz.newMeth(C$, 'set$org_scijava_parse_Variable$O', function (v, value) {
this.vars.put$TK$TV(v.getToken$(), value);
});

Clazz.newMeth(C$, 'setAll$java_util_Map', function (map) {
this.vars.putAll$java_util_Map(map);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
