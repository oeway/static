(function(){var P$=Clazz.newPackage("org.scijava.main"),I$=[[0,'org.scijava.util.Types','java.util.ArrayList',['org.scijava.main.DefaultMainService','.DefaultMain'],['org.scijava.main.MainService','.Main']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultMainService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'org.scijava.main.MainService');
C$.$classes$=[['DefaultMain',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mains=Clazz.new_(1,{E:"org.scijava.main.MainService.Main"},$I$(2,1));
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','mains','java.util.List']]]

Clazz.newMeth(C$, 'execMains$', function () {
var mainCount=0;
for (var main, $main = this.mains.iterator$(); $main.hasNext$()&&((main=($main.next$())),1);) {
main.exec$();
mainCount++;
}
return mainCount;
});

Clazz.newMeth(C$, 'addMain$S$SA', function (className, args) {
this.mains.add$TE(Clazz.new_($I$(3,1).c$$S$SA, [this, null, className, args]));
});

Clazz.newMeth(C$, 'getMains$', function () {
return this.mains.toArray$TTA(Clazz.array($I$(4), [this.mains.size$()]));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.main.DefaultMainService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMainService, "DefaultMain", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.scijava.main.MainService','org.scijava.main.MainService.Main']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['className'],'O',['args','String[]']]]

Clazz.newMeth(C$, 'c$$S$SA', function (className, args) {
;C$.$init$.apply(this);
this.className=className;
this.args=args.clone$();
}, 1);

Clazz.newMeth(C$, 'className$', function () {
return this.className;
});

Clazz.newMeth(C$, 'args$', function () {
return this.args;
});

Clazz.newMeth(C$, 'exec$', function () {
try {
var mainClass=$I$(1).load$S$Z(this.className, false);
var main=mainClass.getMethod$S$ClassA("main", [Clazz.array(String, -1)]);
main.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [this.args]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var exc = e$$;
{
if (this.this$0.log != null ) this.this$0.log.error$Throwable(exc);
}
} else if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var exc = e$$;
{
if (this.this$0.log != null ) {
this.this$0.log.error$O$Throwable("No main method for class: " + this.className, exc);
}}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var exc = e$$;
{
if (this.this$0.log != null ) this.this$0.log.error$Throwable(exc);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var exc = e$$;
{
if (this.this$0.log != null ) this.this$0.log.error$Throwable(exc);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
