(function(){var P$=Clazz.newPackage("org.scijava.parse"),p$1={},I$=[[0,'org.scijava.parse.Position','java.util.ArrayDeque','java.util.LinkedList','org.scijava.parse.SyntaxTree','org.scijava.parse.Tokens','org.scijava.parse.Function','org.scijava.parse.Literals','org.scijava.parse.Variable','StringBuilder','org.scijava.parse.Operators','java.util.ArrayList','java.util.Collections',['org.scijava.parse.ExpressionParser','.ParseOperation']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ExpressionParser", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ParseOperation',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['operators','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_Collection.apply(this, [$I$(10).standardList$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (operators) {
;C$.$init$.apply(this);
this.operators=Clazz.new_(1,{E:"org.scijava.parse.Operator"},$I$(11,1).c$$java_util_Collection,[operators]);
$I$(12).sort$java_util_List$java_util_Comparator(this.operators, ((P$.ExpressionParser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExpressionParser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$org_scijava_parse_Operator$org_scijava_parse_Operator','compare$','compare$TT$TT'], function (o1, o2) {
var t1=o1.getToken$();
var t2=o2.getToken$();
var len1=t1.length$();
var len2=t2.length$();
if (len1 > len2) return -1;
if (len1 < len2) return 1;
return t1.compareTo$S(t2);
});
})()
), Clazz.new_(P$.ExpressionParser$1.$init$, [this, null])));
}, 1);

Clazz.newMeth(C$, 'parseTree$S', function (expression) {
return Clazz.new_($I$(13,1).c$$S, [this, null, expression]).parseTree$();
});

Clazz.newMeth(C$, 'parsePostfix$S', function (expression) {
return Clazz.new_($I$(13,1).c$$S, [this, null, expression]).parsePostfix$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExpressionParser, "ParseOperation", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pos=Clazz.new_($I$(1,1));
this.stack=Clazz.new_(1,{E:"java.lang.Object"},$I$(2,1));
this.outputQueue=Clazz.new_(1,{E:"java.lang.Object"},$I$(3,1));
}, 1);

C$.$fields$=[['Z',['infix'],'S',['expression'],'O',['pos','org.scijava.parse.Position','stack','java.util.Deque','outputQueue','java.util.LinkedList']]]

Clazz.newMeth(C$, 'c$$S', function (expression) {
;C$.$init$.apply(this);
this.expression=expression;
}, 1);

Clazz.newMeth(C$, 'parseTree$', function () {
return Clazz.new_($I$(4,1).c$$java_util_LinkedList,[this.parsePostfix$()]);
});

Clazz.newMeth(C$, 'parsePostfix$', function () {
while (true){
this.parseWhitespace$();
if (this.pos.get$() == this.expression.length$()) break;
var literal=this.parseLiteral$();
if (literal != null ) {
this.outputQueue.add$TE(literal);
this.infix=true;
continue;
}var separator=this.parseComma$();
if (separator != null ) {
p$1.handleGroupSeparator.apply(this, []);
continue;
}var semicolon=this.parseSemicolon$();
if (semicolon != null ) {
p$1.flushStack.apply(this, []);
this.infix=false;
continue;
}var o1=this.parseOperator$();
if (o1 != null ) {
if ($I$(5).isGroup$O(o1) && this.infix ) {
p$1.handleOperator$org_scijava_parse_Operator.apply(this, [Clazz.new_($I$(6,1).c$$D,[o1.getPrecedence$()])]);
}p$1.handleOperator$org_scijava_parse_Operator.apply(this, [o1]);
continue;
}var group=this.parseGroupTerminator$();
if (group != null ) {
p$1.handleGroupTerminator$org_scijava_parse_Group.apply(this, [group]);
continue;
}var variable=this.parseVariable$();
if (variable != null ) {
this.outputQueue.add$TE(variable);
this.infix=true;
continue;
}this.pos.die$S("Invalid character");
}
p$1.flushStack.apply(this, []);
return this.outputQueue;
});

Clazz.newMeth(C$, 'currentChar$', function () {
return this.futureChar$I(0);
});

Clazz.newMeth(C$, 'futureChar$I', function (offset) {
return this.pos.ch$CharSequence$I(this.expression, offset);
});

Clazz.newMeth(C$, 'isPrefixOK$', function () {
return !this.infix;
});

Clazz.newMeth(C$, 'isPostfixOK$', function () {
return this.infix;
});

Clazz.newMeth(C$, 'isInfixOK$', function () {
return this.infix;
});

Clazz.newMeth(C$, 'parseWhitespace$', function () {
while (Character.isWhitespace$C(this.currentChar$()))this.pos.inc$();

});

Clazz.newMeth(C$, 'parseLiteral$', function () {
if (this.infix) return null;
return $I$(7).parseLiteral$CharSequence$org_scijava_parse_Position(this.expression, this.pos);
});

Clazz.newMeth(C$, 'parseVariable$', function () {
var length=this.parseIdentifier$();
if (length == 0) return null;
return Clazz.new_($I$(8,1).c$$S,[this.parseToken$I(length)]);
});

Clazz.newMeth(C$, 'parseIdentifier$', function () {
if (this.infix) return 0;
if (!Character.isUnicodeIdentifierStart$C(this.currentChar$())) return 0;
var length=0;
while (true){
var next=this.futureChar$I(length);
if (next == "\u0000") break;
if (!Character.isUnicodeIdentifierPart$C(next)) break;
length++;
}
return length;
});

Clazz.newMeth(C$, 'parseOperator$', function () {
for (var op, $op = this.this$0.operators.iterator$(); $op.hasNext$()&&((op=($op.next$())),1);) {
var symbol=op.getToken$();
if (p$1.operatorMatches$org_scijava_parse_Operator$S.apply(this, [op, symbol])) return op;
}
return null;
});

Clazz.newMeth(C$, 'parseGroupTerminator$', function () {
for (var op, $op = this.this$0.operators.iterator$(); $op.hasNext$()&&((op=($op.next$())),1);) {
if (!(Clazz.instanceOf(op, "org.scijava.parse.Group"))) continue;
var group=op;
var symbol=group.getTerminator$();
if (p$1.operatorMatches$org_scijava_parse_Operator$S.apply(this, [op, symbol])) return group;
}
return null;
});

Clazz.newMeth(C$, 'parseComma$', function () {
if (!this.infix) return null;
return this.parseChar$C(",");
});

Clazz.newMeth(C$, 'parseSemicolon$', function () {
return this.parseChar$C(";");
});

Clazz.newMeth(C$, 'parseChar$C', function (c) {
if (this.currentChar$() == c) {
this.pos.inc$();
return new Character(c);
}return null;
});

Clazz.newMeth(C$, 'parseToken$I', function (length) {
var offset=this.pos.get$();
var token=this.expression.substring$I$I(offset, offset + length);
this.pos.inc$I(length);
return token;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(9,1));
sb.append$S(this.expression);
sb.append$S("\n");
for (var i=0; i < this.pos.get$(); i++) {
sb.append$S(" ");
}
sb.append$S("^");
return sb.toString();
});

Clazz.newMeth(C$, 'handleOperator$org_scijava_parse_Operator', function (o1) {
var p1=o1.getPrecedence$();
while (!this.stack.isEmpty$() && $I$(5).isOperator$O(this.stack.peek$()) && !$I$(5).isGroup$O(this.stack.peek$())  ){
var o2=this.stack.peek$();
var p2=o2.getPrecedence$();
if (o1.isLeftAssociative$() && p1 <= p2   || o1.isRightAssociative$() && p1 < p2   ) {
this.outputQueue.add$TE(this.stack.pop$());
} else break;
}
this.stack.push$TE(o1.instance$());
if (o1.isPrefix$() || o1.isInfix$() ) this.infix=false;
 else if (o1.isPostfix$()) this.infix=true;
 else this.pos.fail$S("Impenetrable operator '" + o1 + "'" );
}, p$1);

Clazz.newMeth(C$, 'handleGroupSeparator', function () {
while (true){
if (this.stack.isEmpty$()) {
this.pos.die$S("Misplaced separator or mismatched groups");
}if ($I$(5).isGroup$O(this.stack.peek$())) {
(this.stack.peek$()).incArity$();
break;
}this.outputQueue.add$TE(this.stack.pop$());
}
this.infix=false;
}, p$1);

Clazz.newMeth(C$, 'handleGroupTerminator$org_scijava_parse_Group', function (group) {
while (true){
if (this.stack.isEmpty$()) {
this.pos.die$S("Mismatched group terminator '" + group.getTerminator$() + "'" );
}if ($I$(5).isMatchingGroup$O$org_scijava_parse_Group(this.stack.peek$(), group)) {
if (this.infix) (this.stack.peek$()).incArity$();
this.outputQueue.add$TE(this.stack.pop$());
break;
}this.outputQueue.add$TE(this.stack.pop$());
}
this.infix=true;
}, p$1);

Clazz.newMeth(C$, 'flushStack', function () {
while (!this.stack.isEmpty$()){
var token=this.stack.pop$();
if ($I$(5).isGroup$O(token)) this.pos.die$S("Mismatched groups");
this.outputQueue.add$TE(token);
}
}, p$1);

Clazz.newMeth(C$, 'operatorMatches$org_scijava_parse_Operator$S', function (op, symbol) {
if (!this.expression.startsWith$S$I(symbol, this.pos.get$())) return false;
if (this.isPrefixOK$() && op.isPrefix$()  || this.isPostfixOK$() && op.isPostfix$()   || this.isInfixOK$() && op.isInfix$()  ) {
this.pos.inc$I(symbol.length$());
return true;
}return false;
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
