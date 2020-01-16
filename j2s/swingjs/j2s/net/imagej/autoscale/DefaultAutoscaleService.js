(function(){var P$=Clazz.newPackage("net.imagej.autoscale"),p$1={},I$=[[0,'java.util.Collections','net.imglib2.view.Views','net.imagej.autoscale.AutoscaleMethod','java.util.HashMap','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultAutoscaleService", null, 'org.scijava.plugin.AbstractSingletonService', 'net.imagej.autoscale.AutoscaleService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['methods','java.util.HashMap','methodNames','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getAutoscaleMethods$', function () {
return $I$(1).unmodifiableMap$java_util_Map(p$1.methods.apply(this, []));
});

Clazz.newMeth(C$, 'getAutoscaleMethodNames$', function () {
return $I$(1).unmodifiableList$java_util_List(p$1.methodNames.apply(this, []));
});

Clazz.newMeth(C$, 'getAutoscaleMethod$S', function (name) {
return p$1.methods.apply(this, []).get$O(name);
});

Clazz.newMeth(C$, 'getDefaultAutoscaleMethod$', function () {
return this.getAutoscaleMethod$S("Default");
});

Clazz.newMeth(C$, 'getDefaultIntervalRange$net_imglib2_IterableInterval', function (interval) {
return this.getDefaultAutoscaleMethod$().getRange$net_imglib2_IterableInterval(interval);
});

Clazz.newMeth(C$, 'getDefaultRandomAccessRange$net_imglib2_RandomAccessibleInterval', function (interval) {
var newInterval=$I$(2).iterable$net_imglib2_RandomAccessibleInterval(interval);
return this.getDefaultIntervalRange$net_imglib2_IterableInterval(newInterval);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(3),['getRange$net_imglib2_IterableInterval']);
});

Clazz.newMeth(C$, 'methods', function () {
if (this.methods == null ) p$1.initMethods.apply(this, []);
return this.methods;
}, p$1);

Clazz.newMeth(C$, 'methodNames', function () {
if (this.methodNames == null ) p$1.initMethodNames.apply(this, []);
return this.methodNames;
}, p$1);

Clazz.newMeth(C$, 'initMethods', function () {
if (this.methods != null ) return;
var map=Clazz.new_(1,{K:"String",V:"net.imagej.autoscale.AutoscaleMethod"},$I$(4,1));
for (var method, $method = this.getInstances$().iterator$(); $method.hasNext$()&&((method=($method.next$())),1);) {
var name=method.getInfo$().getName$();
map.put$TK$TV(name, method);
}
this.methods=map;
}, p$1);

Clazz.newMeth(C$, 'initMethodNames', function () {
if (this.methodNames != null ) return;
var list=Clazz.new_(1,{E:"String"},$I$(5,1));
for (var method, $method = this.getInstances$().iterator$(); $method.hasNext$()&&((method=($method.next$())),1);) {
var name=method.getInfo$().getName$();
list.add$TE(name);
}
this.methodNames=list;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.autoscale.DefaultAutoscaleService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
