(function(){var P$=Clazz.newPackage("org.scijava.parse"),p$1={},I$=[[0,'org.scijava.parse.Tokens','java.util.LinkedList','java.util.Arrays','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SyntaxTree", null, null, 'Iterable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['token','java.lang.Object','children','org.scijava.parse.SyntaxTree[]']]]

Clazz.newMeth(C$, 'c$$java_util_LinkedList', function (tokens) {
;C$.$init$.apply(this);
this.token=tokens.removeLast$();
if ($I$(1).isOperator$O(this.token)) {
var op=this.token;
var arity=op.getArity$();
if (arity > 0) this.children=Clazz.array(C$, [arity]);
for (var i=this.children.length - 1; i >= 0; i--) {
this.children[i]=Clazz.new_(C$.c$$java_util_LinkedList,[tokens]);
}
}}, 1);

Clazz.newMeth(C$, 'token$', function () {
return this.token;
});

Clazz.newMeth(C$, 'child$I', function (index) {
return this.children[index];
});

Clazz.newMeth(C$, 'count$', function () {
return this.children == null  ? 0 : this.children.length;
});

Clazz.newMeth(C$, 'postfix$', function () {
var queue=Clazz.new_(1,{E:"java.lang.Object"},$I$(2,1));
p$1.postfix$java_util_LinkedList.apply(this, [queue]);
return queue;
});

Clazz.newMeth(C$, 'toString', function () {
return p$1.toString$S.apply(this, [""]);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.parse.SyntaxTree"))) return false;
var tree=o;
return this.token.equals$O(tree.token) && $I$(3).equals$OA$OA(this.children, tree.children) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.token.hashCode$() ^ this.children.hashCode$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.SyntaxTree$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SyntaxTree$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.b$['org.scijava.parse.SyntaxTree'].count$.apply(this.b$['org.scijava.parse.SyntaxTree'], []);
});

Clazz.newMeth(C$, 'next$', function () {
return this.b$['org.scijava.parse.SyntaxTree'].child$I.apply(this.b$['org.scijava.parse.SyntaxTree'], [this.index++]);
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.SyntaxTree$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'postfix$java_util_LinkedList', function (queue) {
for (var child, $child = this.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
p$1.postfix$java_util_LinkedList.apply(child, [queue]);
}
queue.add$TE(this.token$());
}, p$1);

Clazz.newMeth(C$, 'toString$S', function (prefix) {
var sb=Clazz.new_($I$(4,1));
sb.append$S(prefix + " '" + this.token + "'\n" );
var deeperPrefix=" " + prefix + "-" ;
for (var i=0; i < this.count$(); i++) {
sb.append$S(p$1.toString$S.apply(this.child$I(i), [deeperPrefix]));
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
