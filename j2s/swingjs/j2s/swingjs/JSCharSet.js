(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'sun.nio.cs.StandardCharsets']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSCharSet");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['aliases','String[][]']]]

Clazz.newMeth(C$, 'lookupName$S', function (charsetName) {
if (C$.aliases == null ) {
var sep=";";
var sets=$I$(1).SWINGJS_ALIASES;
C$.aliases=Clazz.array(String, [sets.length, 2]);
for (var i=sets.length; --i >= 0; ) C$.aliases[i]=Clazz.array(String, -1, [sets[i][0], (sep + (
sets[i].join(";") +
sep)).toLowerCase$()]);

}var key=";" + charsetName.toLowerCase$() + ";" ;
for (var i=0, n=C$.aliases.length; i < n; i++) {
if (C$.aliases[i][1].indexOf$S(key) >= 0) {
return C$.aliases[i][0];
}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1