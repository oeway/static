(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'java.util.HashMap','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "VariableAxis", null, 'net.imagej.axis.AbstractCalibratedAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vars=Clazz.new_(1,{K:"String",V:"Double"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['vars','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S', function (type, unit) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S.apply(this,[type, unit]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$S', function (name) {
return this.vars.get$O(name);
});

Clazz.newMeth(C$, 'set$S$Double', function (name, value) {
if (value == null ) this.vars.remove$O(name);
 else this.vars.put$TK$TV(name, value);
});

Clazz.newMeth(C$, 'numVars$', function () {
return this.vars.size$();
});

Clazz.newMeth(C$, 'vars$', function () {
return this.vars.keySet$();
});

Clazz.newMeth(C$, 'particularEquation$', function () {
var sb=Clazz.new_($I$(2,1));
var s=this.generalEquation$().replaceAll$S$S(" ", "");
var pat="(?=\\W)" ||"(?<=\\w)(?=\\W)|(?<=\\W)(?=\\w)";
var tokens=s.split$S(pat);
for (var token, $token = 0, $$token = tokens; $token<$$token.length&&((token=($$token[$token])),1);$token++) {
if (token.matches$S("\\w+")) {
} else if (token.matches$S("\\W\\w+")) {
sb.append$C(token.charAt$I(0));
token=token.substring$I(1);
} else {
sb.append$S(token);
continue;
}var value=this.vars.get$O(token);
if (value == null ) {
sb.append$S(token);
} else {
sb.append$S("(");
sb.append$O(value);
sb.append$S(")");
}}
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
