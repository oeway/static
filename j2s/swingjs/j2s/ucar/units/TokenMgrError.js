(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TokenMgrError", null, 'Error');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['errorCode']]]

Clazz.newMeth(C$, 'addEscapes$S', function (str) {
var retval=Clazz.new_($I$(1,1));
var ch;
for (var i=0; i < str.length$(); i++) {
switch ((str.charCodeAt$I(i))) {
case 0:
continue;
case 8:
retval.append$S("\\b");
continue;
case 9:
retval.append$S("\\t");
continue;
case 10:
retval.append$S("\\n");
continue;
case 12:
retval.append$S("\\f");
continue;
case 13:
retval.append$S("\\r");
continue;
case 34:
retval.append$S("\\\"");
continue;
case 39:
retval.append$S("\\\'");
continue;
case 92:
retval.append$S("\\\\");
continue;
default:
if (((ch=str.charAt$I(i)).$c()) < 32  || ch.$c() > 126  ) {
var s="0000" + Integer.toString$I$I(ch.$c(), 16);
retval.append$S("\\u" + s.substring$I$I(s.length$() - 4, s.length$()));
} else {
retval.append$C(ch);
}continue;
}
}
return retval.toString();
}, 1);

Clazz.newMeth(C$, 'LexicalError$Z$I$I$I$S$C', function (EOFSeen, lexState, errorLine, errorColumn, errorAfter, curChar) {
return ("Lexical error at line " + errorLine + ", column " + errorColumn + ".  Encountered: " + (EOFSeen ? "<EOF> " : ("\"" + C$.addEscapes$S(String.valueOf$C(curChar)) + "\"" ) + " (" + curChar.$c() + "), " ) + "after : \"" + C$.addEscapes$S(errorAfter) + "\"" );
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
return C$.superclazz.prototype.getMessage$.apply(this, []);
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (message, reason) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.errorCode=reason;
}, 1);

Clazz.newMeth(C$, 'c$$Z$I$I$I$S$C$I', function (EOFSeen, lexState, errorLine, errorColumn, errorAfter, curChar, reason) {
C$.c$$S$I.apply(this, [C$.LexicalError$Z$I$I$I$S$C(EOFSeen, lexState, errorLine, errorColumn, errorAfter, curChar), reason]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
