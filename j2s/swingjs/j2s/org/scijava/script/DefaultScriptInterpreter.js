(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={},I$=[[0,'org.scijava.util.LastRecentlyUsed','StringBuilder',['org.scijava.script.DefaultScriptInterpreter','.History'],'org.scijava.script.ScriptInterpreter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultScriptInterpreter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.scijava.script.ScriptInterpreter');
C$.$classes$=[['History',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['expectingMoreInput'],'I',['pendingLineCount'],'O',['language','org.scijava.script.ScriptLanguage','engine','javax.script.ScriptEngine','history','org.scijava.script.DefaultScriptInterpreter.History','prefs','org.scijava.prefs.PrefService','log','org.scijava.log.LogService','buffer','StringBuilder']]]

Clazz.newMeth(C$, 'c$$org_scijava_prefs_PrefService$org_scijava_script_ScriptService$org_scijava_script_ScriptLanguage', function (prefs, scriptService, language) {
C$.c$$org_scijava_script_ScriptLanguage.apply(this, [language]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_script_ScriptLanguage', function (language) {
C$.c$$org_scijava_script_ScriptLanguage$javax_script_ScriptEngine.apply(this, [language, null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_script_ScriptLanguage$javax_script_ScriptEngine', function (language, engine) {
;C$.$init$.apply(this);
language.getContext$().inject$O(this);
this.language=language;
this.engine=engine == null  ? language.getScriptEngine$() : engine;
this.history=this.prefs == null  ? null : Clazz.new_($I$(3,1).c$$org_scijava_prefs_PrefService$S,[this.prefs, this.engine.getClass$().getName$()]);
this.readHistory$();
this.buffer=Clazz.new_($I$(2,1));
this.reset$();
}, 1);

Clazz.newMeth(C$, 'readHistory$', function () {
if (this.history == null ) return;
this.history.read$();
});

Clazz.newMeth(C$, 'writeHistory$', function () {
if (this.history == null ) return;
this.history.write$();
});

Clazz.newMeth(C$, 'walkHistory$S$Z', function (currentCommand, forward) {
if (this.history == null ) return currentCommand;
this.history.replace$S(currentCommand);
return forward ? this.history.next$() : this.history.previous$();
});

Clazz.newMeth(C$, 'eval$S', function (command) {
p$1.addToHistory$S.apply(this, [command]);
return this.engine.eval$S(command);
});

Clazz.newMeth(C$, 'interpret$S', function (line) {
if (line.isEmpty$()) {
if (!p$1.shouldEvaluatePendingInput$Z.apply(this, [true])) return $I$(4).MORE_INPUT_PENDING;
}if (this.pendingLineCount > 0) this.buffer.append$S("\n");
this.pendingLineCount++;
this.buffer.append$S(line);
var command=this.buffer.toString();
if (!(Clazz.instanceOf(this.engine, "javax.script.Compilable"))) {
try {
return this.eval$S(command);
} finally {
this.reset$();
}
}var cs=p$1.tryCompiling$S$I$I.apply(this, [command, p$1.getPendingLineCount.apply(this, []), line.length$()]);
if (cs == null ) {
return $I$(4).MORE_INPUT_PENDING;
}if (!p$1.shouldEvaluatePendingInput$Z.apply(this, [line.isEmpty$()])) {
return $I$(4).MORE_INPUT_PENDING;
}try {
p$1.addToHistory$S.apply(this, [command]);
return cs.eval$();
} finally {
this.reset$();
}
});

Clazz.newMeth(C$, 'reset$', function () {
this.buffer.setLength$I(0);
this.pendingLineCount=0;
this.expectingMoreInput=false;
});

Clazz.newMeth(C$, 'getLanguage$', function () {
return this.language;
});

Clazz.newMeth(C$, 'getEngine$', function () {
return this.engine;
});

Clazz.newMeth(C$, 'getBindings$', function () {
return this.engine.getBindings$I(100);
});

Clazz.newMeth(C$, 'isReady$', function () {
return this.buffer.length$() == 0;
});

Clazz.newMeth(C$, 'isExpectingMoreInput$', function () {
return this.expectingMoreInput;
});

Clazz.newMeth(C$, 'addToHistory$S', function (command) {
if (this.history != null ) this.history.add$S(command);
}, p$1);

Clazz.newMeth(C$, 'getPendingLineCount', function () {
return this.pendingLineCount;
}, p$1);

Clazz.newMeth(C$, 'shouldEvaluatePendingInput$Z', function (lineIsEmpty) {
if (this.isExpectingMoreInput$()) return false;
return p$1.getPendingLineCount.apply(this, []) == 1 || lineIsEmpty ;
}, p$1);

Clazz.newMeth(C$, 'tryCompiling$S$I$I', function (string, lineCount, lastLineLength) {
var result=null;
try {
var c=this.engine;
result=c.compile$S(string);
} catch (se) {
if (Clazz.exceptionOf(se,"javax.script.ScriptException")){
var rethrow=true;
if (se.getCause$() != null ) {
var col=p$1.columnNumber$javax_script_ScriptException.apply(this, [se]);
var line=p$1.lineNumber$javax_script_ScriptException.apply(this, [se]);
if (p$1.isLastCharacter$Integer$Integer$I$I.apply(this, [col, line, lineCount, lastLineLength])) {
rethrow=false;
} else if (this.log != null  && this.log.isDebug$() ) {
var msg=se.getCause$().getMessage$();
this.log.debug$O("L" + line + " C" + col + "(" + lineCount + "," + lastLineLength + "): " + msg );
this.log.debug$O("in '" + string + "'" );
}}if (rethrow) {
this.reset$();
throw se;
}} else {
throw se;
}
}
this.expectingMoreInput=result == null ;
return result;
}, p$1);

Clazz.newMeth(C$, 'isLastCharacter$Integer$Integer$I$I', function (col, line, lineCount, lastLineLength) {
if (col == null  || line == null  ) return false;
var colNo=col.intValue$();
var lineNo=line.intValue$();
return lineNo == lineCount && colNo == lastLineLength  || lineNo == lineCount + 1 && colNo == 0  ;
}, p$1);

Clazz.newMeth(C$, 'columnNumber$javax_script_ScriptException', function (se) {
if (se.getColumnNumber$() >= 0) return new Integer(se.getColumnNumber$());
return C$.callMethod$O$S$Class(se.getCause$(), "columnNumber", Clazz.getClass(Integer));
}, p$1);

Clazz.newMeth(C$, 'lineNumber$javax_script_ScriptException', function (se) {
if (se.getLineNumber$() >= 0) return new Integer(se.getLineNumber$());
return C$.callMethod$O$S$Class(se.getCause$(), "lineNumber", Clazz.getClass(Integer));
}, p$1);

Clazz.newMeth(C$, 'getMethod$O$S', function (object, methodName) {
try {
return object.getClass$().getMethod$S$ClassA(methodName, []);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'callMethod$O$S$Class', function (object, methodName, cl) {
try {
var m=C$.getMethod$O$S(object, methodName);
if (m != null ) {
var result=m.invoke$O$OA(object, []);
return cl.cast$O(result);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return null;
}, 1);
C$.$getAnn$ = function(){ return [
[['prefs','org.scijava.prefs.PrefService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultScriptInterpreter, "History", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.MAX_ENTRIES=1000;
this.entries=Clazz.new_(1,{T:"String"},$I$(1,1).c$$I,[1000]);
this.currentCommand="";
this.position=-1;
}, 1);

C$.$fields$=[['I',['MAX_ENTRIES','position'],'S',['name','currentCommand'],'O',['prefs','org.scijava.prefs.PrefService','entries','org.scijava.util.LastRecentlyUsed']]]

Clazz.newMeth(C$, 'c$$org_scijava_prefs_PrefService$S', function (prefs, name) {
;C$.$init$.apply(this);
this.prefs=prefs;
this.name=name;
}, 1);

Clazz.newMeth(C$, 'read$', function () {
this.entries.clear$();
for (var item, $item = this.prefs.getIterable$Class$S(this.getClass$(), "History." + this.name).iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
this.entries.addToEnd$TT(item);
}
});

Clazz.newMeth(C$, 'write$', function () {
this.prefs.putIterable$Class$Iterable$S(this.getClass$(), this.entries, "History." + this.name);
});

Clazz.newMeth(C$, 'add$S', function (command) {
this.entries.add$TT(command);
this.position=-1;
this.currentCommand="";
});

Clazz.newMeth(C$, 'replace$S', function (command) {
if (this.position < 0) {
this.currentCommand=command;
return false;
}return this.entries.replace$I$TT(this.position, command);
});

Clazz.newMeth(C$, 'next$', function () {
this.position=this.entries.next$I(this.position);
return this.position < 0 ? this.currentCommand : this.entries.get$I(this.position);
});

Clazz.newMeth(C$, 'previous$', function () {
this.position=this.entries.previous$I(this.position);
return this.position < 0 ? this.currentCommand : this.entries.get$I(this.position);
});

Clazz.newMeth(C$, 'toString', function () {
var builder=Clazz.new_($I$(2,1));
var pos=-1;
for (; ; ) {
pos=this.entries.previous$I(pos);
if (pos < 0) break;
if (builder.length$() > 0) builder.append$S(" -> ");
if (this.position == pos) builder.append$S("[");
builder.append$S(this.entries.get$I(pos));
if (this.position == pos) builder.append$S("]");
}
return builder.toString();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
