(function(){var P$=Clazz.newPackage("org.scijava.display"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DisplayPostprocessor", null, 'org.scijava.module.process.AbstractPostprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['displayService','org.scijava.display.DisplayService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.displayService == null ) return;
for (var outputItem, $outputItem = module.getInfo$().outputs$().iterator$(); $outputItem.hasNext$()&&((outputItem=($outputItem.next$())),1);) {
if (module.isOutputResolved$S(outputItem.getName$())) continue;
var value=outputItem.getValue$org_scijava_module_Module(module);
var name=p$1.defaultName$org_scijava_module_ModuleItem.apply(this, [outputItem]);
var resolved=p$1.handleOutput$S$O.apply(this, [name, value]);
if (resolved) module.resolveOutput$S(name);
}
});

Clazz.newMeth(C$, 'handleOutput$S$O', function (defaultName, output) {
if (output == null ) return false;
if (Clazz.instanceOf(output, "org.scijava.display.Display")) {
var display=output;
display.update$();
return true;
}var addToExisting=p$1.addToExisting$O.apply(this, [output]);
var displays=Clazz.new_(1,{E:"org.scijava.display.Display"},$I$(1,1));
var existingDisplays=this.displayService.getDisplays$O(output);
displays.addAll$java_util_Collection(existingDisplays);
if (displays.isEmpty$()) {
var activeDisplay=this.displayService.getActiveDisplay$();
if (addToExisting && activeDisplay.canDisplay$O(output) ) {
activeDisplay.display$O(output);
displays.add$TE(activeDisplay);
} else {
var name=null;
if (Clazz.instanceOf(output, "org.scijava.Named")) name=(output).getName$();
if (name == null ) name=defaultName;
var display=this.displayService.createDisplay$S$O(name, output);
if (display != null ) {
displays.add$TE(display);
}}}if (!displays.isEmpty$()) {
for (var display, $display = displays.iterator$(); $display.hasNext$()&&((display=($display.next$())),1);) {
display.update$();
}
return true;
}if (Clazz.instanceOf(output, "java.util.Map")) {
var map=output;
for (var key, $key = map.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var itemName=key.toString();
var itemValue=map.get$O(key);
p$1.handleOutput$S$O.apply(this, [itemName, itemValue]);
}
return true;
}if (Clazz.instanceOf(output, "java.util.Collection")) {
var collection=output;
for (var item, $item = collection.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
p$1.handleOutput$S$O.apply(this, [defaultName, item]);
}
return true;
}if (this.log != null ) {
var valueClass=output.getClass$().getName$();
this.log.warn$O("Ignoring unsupported output: " + defaultName + " [" + valueClass + "]" );
}return false;
}, p$1);

Clazz.newMeth(C$, 'addToExisting$O', function (output) {
return false;
}, p$1);

Clazz.newMeth(C$, 'defaultName$org_scijava_module_ModuleItem', function (item) {
var label=item.getLabel$();
if (label != null  && !label.isEmpty$() ) return label;
var name=item.getName$();
if (name != null  && !name.isEmpty$() ) return name;
return "Unnamed";
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.display.DisplayPostprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PostprocessorPlugin.class" priority="-10000.0" ']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
