(function(){var P$=Clazz.newPackage("ucar.units"),I$=[[0,'StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ParseException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.eol=System.getProperty$S$S("line.separator", "\n");
}, 1);

C$.$fields$=[['Z',['specialConstructor'],'S',['eol'],'O',['currentToken','ucar.units.Token','expectedTokenSequences','int[][]','tokenImage','String[]']]]

Clazz.newMeth(C$, 'c$$ucar_units_Token$IAA$SA', function (currentTokenVal, expectedTokenSequencesVal, tokenImageVal) {
;C$.superclazz.c$$S.apply(this,[""]);C$.$init$.apply(this);
this.specialConstructor=true;
this.currentToken=currentTokenVal;
this.expectedTokenSequences=expectedTokenSequencesVal;
this.tokenImage=tokenImageVal;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.specialConstructor=false;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.specialConstructor=false;
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
if (!this.specialConstructor) {
return C$.superclazz.prototype.getMessage$.apply(this, []);
}var expected=Clazz.new_($I$(1,1));
var maxSize=0;
for (var i=0; i < this.expectedTokenSequences.length; i++) {
if (maxSize < this.expectedTokenSequences[i].length) {
maxSize=this.expectedTokenSequences[i].length;
}for (var j=0; j < this.expectedTokenSequences[i].length; j++) {
expected.append$S(this.tokenImage[this.expectedTokenSequences[i][j]]).append$C(" ");
}
if (this.expectedTokenSequences[i][this.expectedTokenSequences[i].length - 1] != 0) {
expected.append$S("...");
}expected.append$S(this.eol).append$S("    ");
}
var retval="Encountered \"";
var tok=this.currentToken.next;
for (var i=0; i < maxSize; i++) {
if (i != 0) retval += " ";
if (tok.kind == 0) {
retval += this.tokenImage[0];
break;
}retval += " " + this.tokenImage[tok.kind];
retval += " \"";
retval += this.add_escapes$S(tok.image);
retval += " \"";
tok=tok.next;
}
retval += "\" at line " + this.currentToken.next.beginLine + ", column " + this.currentToken.next.beginColumn ;
retval += "." + this.eol;
if (this.expectedTokenSequences.length == 1) {
retval += "Was expecting:" + this.eol + "    " ;
} else {
retval += "Was expecting one of:" + this.eol + "    " ;
}retval += expected.toString();
return retval;
});

Clazz.newMeth(C$, 'add_escapes$S', function (str) {
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
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
