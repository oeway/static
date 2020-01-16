(function(){var P$=Clazz.newPackage("org.scijava.parse"),I$=[[0,'java.util.regex.Pattern','org.scijava.parse.Position','Boolean','StringBuilder','java.math.BigInteger','java.math.BigDecimal','org.scijava.parse.SubSequence']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Literals");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.HEX=$I$(1).compile$S("(([-+]?)0[Xx]([0-9a-fA-F]+)([Ll]?)).*");
C$.BINARY=$I$(1).compile$S("(([-+]?)0[Bb]([01]+)([Ll]?)).*");
C$.OCTAL=$I$(1).compile$S("(([-+]?)0([0-7]+)([Ll]?)).*");
C$.DECIMAL=$I$(1).compile$S("(([-+]?[0-9]+(\\.[0-9]*)?([Ee][-+]?[0-9]+)?)([Dd]|[Ff]|[Ll])?).*");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['HEX','java.util.regex.Pattern','+BINARY','+OCTAL','+DECIMAL']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parseBoolean$CharSequence', function (s) {
return C$.parseBoolean$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseString$CharSequence', function (s) {
return C$.parseString$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseHex$CharSequence', function (s) {
return C$.parseHex$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseBinary$CharSequence', function (s) {
return C$.parseBinary$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseOctal$CharSequence', function (s) {
return C$.parseOctal$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseDecimal$CharSequence', function (s) {
return C$.parseDecimal$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseNumber$CharSequence', function (s) {
return C$.parseNumber$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseLiteral$CharSequence', function (s) {
return C$.parseLiteral$CharSequence$org_scijava_parse_Position(s, Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'parseBoolean$CharSequence$org_scijava_parse_Position', function (s, pos) {
if (C$.isWord$CharSequence$org_scijava_parse_Position$S(s, pos, "true")) {
pos.inc$I(4);
return $I$(3).TRUE;
}if (C$.isWord$CharSequence$org_scijava_parse_Position$S(s, pos, "false")) {
pos.inc$I(5);
return $I$(3).FALSE;
}return null;
}, 1);

Clazz.newMeth(C$, 'parseString$CharSequence$org_scijava_parse_Position', function (s, pos) {
var quote=pos.ch$CharSequence(s);
if (quote != "\"" && quote != "\'" ) return null;
var index=pos.get$() + 1;
var escaped=false;
var sb=Clazz.new_($I$(4,1));
while (true){
if (index >= s.length$()) pos.die$S("Unclosed string literal");
var c=s.charAt$I(index);
if (escaped) {
escaped=false;
if (C$.isOctal$C(c)) {
var octal="" + c;
var c1=pos.ch$CharSequence$I(s, index + 1);
if (C$.isOctal$C(c1)) {
octal += c1;
if (c >= "0" && c <= "3" ) {
var c2=pos.ch$CharSequence$I(s, index + 2);
if (C$.isOctal$C(c2)) octal += c2;
}}sb.append$C(String.fromCharCode(Integer.parseInt$S$I(octal, 8)));
index+=octal.length$();
continue;
}switch (c.$c()) {
case 98:
sb.append$C("\u0008");
break;
case 116:
sb.append$C("\t");
break;
case 110:
sb.append$C("\n");
break;
case 102:
sb.append$C("\f");
break;
case 114:
sb.append$C("\r");
break;
case 34:
sb.append$C("\"");
break;
case 92:
sb.append$C("\\");
break;
case 117:
var u1=C$.hex$CharSequence$org_scijava_parse_Position$I(s, pos, index + 1);
var u2=C$.hex$CharSequence$org_scijava_parse_Position$I(s, pos, index + 2);
var u3=C$.hex$CharSequence$org_scijava_parse_Position$I(s, pos, index + 3);
var u4=C$.hex$CharSequence$org_scijava_parse_Position$I(s, pos, index + 4);
sb.append$C(String.fromCharCode(Integer.parseInt$S$I("" + u1 + u2 + u3 + u4 , 16)));
index+=4;
break;
default:
pos.die$S("Invalid escape sequence");
}
} else if (c == "\\" && quote == "\"" ) escaped=true;
 else if (c == quote) break;
 else sb.append$C(c);
index++;
}
pos.set$I(index + 1);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'parseHex$CharSequence$org_scijava_parse_Position', function (s, pos) {
return C$.parseInteger$java_util_regex_Pattern$CharSequence$org_scijava_parse_Position$I(C$.HEX, s, pos, 16);
}, 1);

Clazz.newMeth(C$, 'parseBinary$CharSequence$org_scijava_parse_Position', function (s, pos) {
return C$.parseInteger$java_util_regex_Pattern$CharSequence$org_scijava_parse_Position$I(C$.BINARY, s, pos, 2);
}, 1);

Clazz.newMeth(C$, 'parseOctal$CharSequence$org_scijava_parse_Position', function (s, pos) {
return C$.parseInteger$java_util_regex_Pattern$CharSequence$org_scijava_parse_Position$I(C$.OCTAL, s, pos, 8);
}, 1);

Clazz.newMeth(C$, 'parseDecimal$CharSequence$org_scijava_parse_Position', function (s, pos) {
if (!C$.isNumberSyntax$CharSequence$org_scijava_parse_Position(s, pos)) return null;
var m=C$.matcher$java_util_regex_Pattern$CharSequence$org_scijava_parse_Position(C$.DECIMAL, s, pos);
if (!m.matches$()) return null;
var number=m.group$I(2);
var force=m.group$I(5);
var forceLong="l".equalsIgnoreCase$S(force);
var forceFloat="f".equalsIgnoreCase$S(force);
var forceDouble="d".equalsIgnoreCase$S(force);
var result=null;
if (!forceFloat && !forceDouble ) {
result=C$.parseInteger$S$Z$I(number, forceLong, 10);
}if (result == null  && !forceLong ) {
result=C$.parseDecimal$S$Z$Z(number, forceFloat, forceDouble);
}return C$.verifyResult$Number$java_util_regex_Matcher$org_scijava_parse_Position(result, m, pos);
}, 1);

Clazz.newMeth(C$, 'parseNumber$CharSequence$org_scijava_parse_Position', function (s, pos) {
var hex=C$.parseHex$CharSequence$org_scijava_parse_Position(s, pos);
if (hex != null ) return hex;
var binary=C$.parseBinary$CharSequence$org_scijava_parse_Position(s, pos);
if (binary != null ) return binary;
var octal=C$.parseOctal$CharSequence$org_scijava_parse_Position(s, pos);
if (octal != null ) return octal;
var decimal=C$.parseDecimal$CharSequence$org_scijava_parse_Position(s, pos);
if (decimal != null ) return decimal;
return null;
}, 1);

Clazz.newMeth(C$, 'parseLiteral$CharSequence$org_scijava_parse_Position', function (s, pos) {
var bool=C$.parseBoolean$CharSequence$org_scijava_parse_Position(s, pos);
if (bool != null ) return bool;
var str=C$.parseString$CharSequence$org_scijava_parse_Position(s, pos);
if (str != null ) return str;
var num=C$.parseNumber$CharSequence$org_scijava_parse_Position(s, pos);
if (num != null ) return num;
return null;
}, 1);

Clazz.newMeth(C$, 'isOctal$C', function (c) {
return c >= "0" && c <= "7" ;
}, 1);

Clazz.newMeth(C$, 'hex$CharSequence$org_scijava_parse_Position$I', function (s, pos, index) {
var c=pos.ch$CharSequence$I(s, index);
if (c >= "0" && c <= "9" ) return c;
if (c >= "a" && c <= "f" ) return c;
if (c >= "A" && c <= "F" ) return c;
pos.die$S("Invalid unicode sequence");
return "\u0000";
}, 1);

Clazz.newMeth(C$, 'isNumberSyntax$CharSequence$org_scijava_parse_Position', function (s, pos) {
var i=pos.get$();
var sign=s.charAt$I(i) == "-" || s.charAt$I(i) == "+" ;
var digitIndex=sign ? i + 1 : i;
if (digitIndex >= s.length$()) return false;
var digit=s.charAt$I(digitIndex);
return digit >= "0" && digit <= "9" ;
}, 1);

Clazz.newMeth(C$, 'parseInteger$java_util_regex_Pattern$CharSequence$org_scijava_parse_Position$I', function (p, s, pos, base) {
if (!C$.isNumberSyntax$CharSequence$org_scijava_parse_Position(s, pos)) return null;
var m=C$.matcher$java_util_regex_Pattern$CharSequence$org_scijava_parse_Position(p, s, pos);
if (!m.matches$()) return null;
var sign=m.group$I(2);
if (sign == null ) sign="";
var number=sign + m.group$I(3);
var forceLong=!m.group$I(4).isEmpty$();
var result=C$.parseInteger$S$Z$I(number, forceLong, base);
return C$.verifyResult$Number$java_util_regex_Matcher$org_scijava_parse_Position(result, m, pos);
}, 1);

Clazz.newMeth(C$, 'parseInteger$S$Z$I', function (number, forceLong, base) {
if (!forceLong) {
try {
return new Integer(Integer.parseInt$S$I(number, base));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
} else {
throw exc;
}
}
}try {
return new Long(Long.parseLong$S$I(number, base));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
} else {
throw exc;
}
}
if (!forceLong) {
try {
return Clazz.new_($I$(5,1).c$$S$I,[number, base]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
} else {
throw exc;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'parseDecimal$S$Z$Z', function (number, forceFloat, forceDouble) {
if (forceFloat) {
try {
return new Float(Float.parseFloat$S(number));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
} else {
throw exc;
}
}
} else {
try {
return new Double(Double.parseDouble$S(number));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
} else {
throw exc;
}
}
}if (!forceDouble && !forceFloat ) {
try {
return Clazz.new_($I$(6,1).c$$S,[number]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
} else {
throw exc;
}
}
}return null;
}, 1);

Clazz.newMeth(C$, 'matcher$java_util_regex_Pattern$CharSequence$org_scijava_parse_Position', function (p, s, pos) {
return p.matcher$CharSequence(C$.sub$CharSequence$org_scijava_parse_Position(s, pos));
}, 1);

Clazz.newMeth(C$, 'sub$CharSequence$org_scijava_parse_Position', function (s, pos) {
return pos.get$() == 0 ? s : Clazz.new_($I$(7,1).c$$CharSequence$I,[s, pos.get$()]);
}, 1);

Clazz.newMeth(C$, 'verifyResult$Number$java_util_regex_Matcher$org_scijava_parse_Position', function (result, m, pos) {
if (result == null ) pos.die$S("Illegal numeric literal");
pos.inc$I(m.group$I(1).length$());
return result;
}, 1);

Clazz.newMeth(C$, 'isWord$CharSequence$org_scijava_parse_Position$S', function (s, pos, word) {
if (s.length$() - pos.get$() < word.length$()) return false;
for (var i=0; i < word.length$(); i++) {
if (pos.ch$CharSequence$I(s, i) != word.charAt$I(i)) return false;
}
var next=pos.ch$CharSequence$I(s, word.length$());
if (next >= "a" && next <= "z" ) return false;
if (next >= "A" && next <= "Z" ) return false;
if (next >= "0" && next <= "9" ) return false;
if (next == "_") return false;
return true;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
