(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Arrays','java.util.stream.Collectors','java.util.Collections','org.scijava.script.AutoCompletionResult']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractAutoCompleter", null, null, 'org.scijava.script.AutoCompleter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scriptLanguage','org.scijava.script.ScriptLanguage']]]

Clazz.newMeth(C$, 'c$$org_scijava_script_ScriptLanguage', function (scriptLanguage) {
;C$.$init$.apply(this);
this.scriptLanguage=scriptLanguage;
}, 1);

Clazz.newMeth(C$, ['autocomplete$S$I$javax_script_ScriptEngine','autocomplete$'], function (code, index, engine) {
var matches=Clazz.new_(1,{E:"String"},$I$(1,1));
var startIndex=0;
if (code.endsWith$S(".")) {
matches.addAll$java_util_Collection(p$1.engineAttributesCompleter$S$I$javax_script_ScriptEngine.apply(this, [code, index, engine]));
} else if (code.contains$CharSequence(".")) {
var codeList=$I$(2).asList$TTA(code.split$S("\\."));
var objectString=codeList.get$I(codeList.size$() - 2);
var prefix=codeList.get$I(codeList.size$() - 1);
matches.addAll$java_util_Collection(p$1.engineAttributesCompleter$S$S$I$javax_script_ScriptEngine.apply(this, [objectString + ".", prefix, index, engine]));
} else {
matches.addAll$java_util_Collection(p$1.engineVariablesCompleter$S$I$javax_script_ScriptEngine.apply(this, [code, index, engine]));
}var unique=matches.stream$().distinct$().collect$java_util_stream_Collector($I$(3).toList$());
$I$(4).sort$java_util_List$java_util_Comparator(unique, ((P$.AbstractAutoCompleter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractAutoCompleter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (o1, o2) {
var s1=o1;
var s2=o2;
return s1.toLowerCase$().compareTo$S(s2.toLowerCase$());
});
})()
), Clazz.new_(P$.AbstractAutoCompleter$1.$init$, [this, null])));
return Clazz.new_($I$(5,1).c$$java_util_List$I,[unique, 0]);
});

Clazz.newMeth(C$, 'engineVariablesCompleter$S$I$javax_script_ScriptEngine', function (code, index, engine) {
var matches=Clazz.new_(1,{E:"String"},$I$(1,1));
var bindings=engine.getBindings$I(100);
for (var key, $key = bindings.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key.toLowerCase$().startsWith$S(code.toLowerCase$())) {
matches.add$TE(key);
}}
return matches;
}, p$1);

Clazz.newMeth(C$, 'engineAttributesCompleter$S$I$javax_script_ScriptEngine', function (objectString, index, engine) {
return p$1.engineAttributesCompleter$S$S$I$javax_script_ScriptEngine.apply(this, [objectString, "", index, engine]);
}, p$1);

Clazz.newMeth(C$, 'engineAttributesCompleter$S$S$I$javax_script_ScriptEngine', function (objectString, prefix, index, engine) {
var matches=Clazz.new_(1,{E:"String"},$I$(1,1));
var lPrefix=prefix.toLowerCase$();
var bindings=engine.getBindings$I(100);
for (var key, $key = bindings.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (objectString.endsWith$S(key + ".")) {
var obj=bindings.get$O(key);
for (var field, $field = 0, $$field = obj.getClass$().getFields$(); $field<$$field.length&&((field=($$field[$field])),1);$field++) {
if (field.getName$().toLowerCase$().startsWith$S(lPrefix)) {
matches.add$TE(objectString + field.getName$());
}}
for (var method, $method = 0, $$method = obj.getClass$().getMethods$(); $method<$$method.length&&((method=($$method[$method])),1);$method++) {
if (method.getName$().toLowerCase$().startsWith$S(lPrefix)) {
matches.add$TE(objectString + method.getName$() + "(" );
}}
}}
return matches;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
