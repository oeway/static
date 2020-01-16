(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'java.io.PrintWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptModule", null, 'org.scijava.module.AbstractModule', 'org.scijava.Contextual');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['info','org.scijava.script.ScriptInfo','context','org.scijava.Context','scriptService','org.scijava.script.ScriptService','conversionService','org.scijava.convert.ConvertService','log','org.scijava.log.LogService','scriptEngine','javax.script.ScriptEngine','output','java.io.Writer','+error','returnValue','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$org_scijava_script_ScriptInfo', function (info) {
Clazz.super_(C$, this);
this.info=info;
}, 1);

Clazz.newMeth(C$, 'setOutputWriter$java_io_Writer', function (output) {
this.output=output;
});

Clazz.newMeth(C$, 'setErrorWriter$java_io_Writer', function (error) {
this.error=error;
});

Clazz.newMeth(C$, 'getEngine$', function () {
if (this.scriptEngine == null ) {
this.scriptEngine=this.getInfo$().getLanguage$().getScriptEngine$();
}return this.scriptEngine;
});

Clazz.newMeth(C$, 'getReturnValue$', function () {
return this.returnValue;
});

Clazz.newMeth(C$, 'getInfo$', function () {
return this.info;
});

Clazz.newMeth(C$, 'run$', function () {
var engine=this.getEngine$();
var path=this.getInfo$().getPath$();
engine.put$S$O("javax.script.filename", path);
engine.put$S$O(Clazz.getClass(C$).getName$(), this);
var scriptContext=engine.getContext$();
if (this.output != null ) scriptContext.setWriter$java_io_Writer(this.output);
var errorPrinter;
if (this.error != null ) {
scriptContext.setErrorWriter$java_io_Writer(this.error);
errorPrinter=Clazz.new_($I$(1,1).c$$java_io_Writer,[this.error]);
} else {
errorPrinter=null;
}for (var item, $item = this.getInfo$().inputs$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
var name=item.getName$();
engine.put$S$O(name, this.getInput$S(name));
}
this.returnValue=null;
try {
for (var c, $c = this.getInfo$().callbacks$().iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
c.invoke$(this);
}
this.returnValue=engine.eval$S(this.getInfo$().getProcessedScript$());
} catch (e) {
while (Clazz.instanceOf(e, "javax.script.ScriptException") && e.getCause$() != null  ){
e=e.getCause$();
}
if (this.error == null ) this.log.error$Throwable(e);
 else e.printStackTrace$java_io_PrintWriter(errorPrinter);
}
var language=this.getInfo$().getLanguage$();
for (var item, $item = this.getInfo$().outputs$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
var name=item.getName$();
var value;
if ("result".equals$O(name) && this.getInfo$().isReturnValueAppended$() ) {
value=this.returnValue;
} else value=engine.get$S(name);
var decoded=language.decode$O(value);
var typed=this.conversionService.convert$O$Class(decoded, item.getType$());
this.setOutput$S$O(name, typed);
}
if (this.output != null ) {
try {
this.output.flush$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (this.error == null ) this.log.error$Throwable(e);
 else e.printStackTrace$java_io_PrintWriter(errorPrinter);
} else {
throw e;
}
}
}if (errorPrinter != null ) errorPrinter.flush$();
});

Clazz.newMeth(C$, 'context$', function () {
if (this.context == null ) throw Clazz.new_(Clazz.load('org.scijava.NullContextException'));
return this.context;
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.context;
});

Clazz.newMeth(C$, 'setContext$org_scijava_Context', function (context) {
context.inject$O(this);
});

Clazz.newMeth(C$, 'getLanguage$', function () {
return this.getInfo$().getLanguage$();
});

Clazz.newMeth(C$, 'setLanguage$org_scijava_script_ScriptLanguage', function (scriptLanguage) {
this.getInfo$().setLanguage$org_scijava_script_ScriptLanguage(scriptLanguage);
});
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['conversionService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
