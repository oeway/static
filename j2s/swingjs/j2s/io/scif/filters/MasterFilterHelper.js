(function(){var P$=Clazz.newPackage("io.scif.filters"),p$1={},I$=[[0,'java.util.HashMap','java.util.TreeSet','io.scif.filters.Filter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MasterFilterHelper", null, 'io.scif.filters.AbstractFilter', 'io.scif.filters.MasterFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.instanceMap=Clazz.new_(1,{K:"Class",V:"io.scif.filters.Filter"},$I$(1,1));
this.enabled=Clazz.new_(1,{E:"io.scif.filters.Filter"},$I$(2,1));
}, 1);

C$.$fields$=[['O',['pluginService','org.scijava.plugin.PluginService','tail','<T extends org.scijava.Contextual>','instanceMap','java.util.HashMap','enabled','java.util.TreeSet']]]

Clazz.newMeth(C$, ['c$$TT$Class'], function (wrapped, wrappedClass) {
;C$.superclazz.c$$Class.apply(this,[wrappedClass]);C$.$init$.apply(this);
this.tail=wrapped;
this.setParent$O(this.tail);
this.setContext$org_scijava_Context(wrapped.getContext$());
var filters=this.pluginService.createInstancesOfType$Class(Clazz.getClass($I$(3),['enabledDefault$','getParent$','isCompatible$Class','reset$','setParent$O','target$']));
for (var filter, $filter = filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
if (filter.target$().isAssignableFrom$Class(wrappedClass)) {
this.instanceMap.put$TK$TV(filter.getClass$(), filter);
if (filter.enabledDefault$()) {
this.enable$Class(filter.getClass$());
}}}
}, 1);

Clazz.newMeth(C$, 'enable$Class', function (filterClass) {
var filter=this.instanceMap.get$O(filterClass);
if (filter != null ) {
this.enabled.add$TE(filter);
p$1.updateParents.apply(this, []);
}return filter;
});

Clazz.newMeth(C$, 'disable$Class', function (filterClass) {
var filter=this.instanceMap.get$O(filterClass);
var disabled=false;
if (filter != null ) {
this.enabled.remove$O(filter);
p$1.updateParents.apply(this, []);
filter.reset$();
disabled=true;
}return disabled;
});

Clazz.newMeth(C$, 'getTail$', function () {
return this.tail;
});

Clazz.newMeth(C$, 'target$', function () {
return null;
});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.enabled.clear$();
p$1.updateParents.apply(this, []);
});

Clazz.newMeth(C$, 'getFilterClasses$', function () {
return this.instanceMap.keySet$();
});

Clazz.newMeth(C$, 'updateParents', function () {
if (this.enabled.isEmpty$()) this.setParent$O(this.tail);
 else {
var filterIterator=this.enabled.descendingIterator$();
var currentFilter=filterIterator.next$();
currentFilter.setParent$O(this.tail);
while (filterIterator.hasNext$()){
var nextFilter=filterIterator.next$();
nextFilter.setParent$O(currentFilter);
currentFilter=nextFilter;
}
this.setParent$O(currentFilter);
}}, p$1);
C$.$getAnn$ = function(){ return [
[['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
