(function(){var P$=Clazz.newPackage("org.scijava.module"),p$1={},I$=[[0,'java.util.HashMap','java.util.HashSet','org.scijava.module.MethodRef']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractModule", null, null, 'org.scijava.module.Module');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inputs','java.util.HashMap','+outputs','resolvedInputs','java.util.HashSet','+resolvedOutputs','initializerRef','org.scijava.module.MethodRef']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.inputs=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
this.outputs=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
this.resolvedInputs=Clazz.new_(1,{E:"String"},$I$(2,1));
this.resolvedOutputs=Clazz.new_(1,{E:"String"},$I$(2,1));
}, 1);

Clazz.newMeth(C$, 'preview$', function () {
});

Clazz.newMeth(C$, 'cancel$', function () {
});

Clazz.newMeth(C$, 'initialize$', function () {
var delegateObject=this.getDelegateObject$();
if (Clazz.instanceOf(delegateObject, "org.scijava.Initializable")) {
(delegateObject).initialize$();
} else {
if (this.initializerRef == null ) {
var initializer=this.getInfo$().getInitializer$();
this.initializerRef=Clazz.new_($I$(3,1).c$$Class$S$ClassA,[delegateObject.getClass$(), initializer, []]);
}this.initializerRef.execute$O$OA(delegateObject, []);
}for (var item, $item = this.getInfo$().inputs$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
item.initialize$org_scijava_module_Module(this);
}
});

Clazz.newMeth(C$, 'getDelegateObject$', function () {
return this;
});

Clazz.newMeth(C$, 'getInput$S', function (name) {
return this.inputs.get$O(name);
});

Clazz.newMeth(C$, 'getOutput$S', function (name) {
return this.outputs.get$O(name);
});

Clazz.newMeth(C$, 'getInputs$', function () {
return p$1.createMap$Iterable$Z.apply(this, [this.getInfo$().inputs$(), false]);
});

Clazz.newMeth(C$, 'getOutputs$', function () {
return p$1.createMap$Iterable$Z.apply(this, [this.getInfo$().outputs$(), true]);
});

Clazz.newMeth(C$, 'setInput$S$O', function (name, value) {
this.inputs.put$TK$TV(name, value);
});

Clazz.newMeth(C$, 'setOutput$S$O', function (name, value) {
this.outputs.put$TK$TV(name, value);
});

Clazz.newMeth(C$, 'setInputs$java_util_Map', function (inputs) {
for (var name, $name = inputs.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
this.setInput$S$O(name, inputs.get$O(name));
}
});

Clazz.newMeth(C$, 'setOutputs$java_util_Map', function (outputs) {
for (var name, $name = outputs.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
this.setOutput$S$O(name, outputs.get$O(name));
}
});

Clazz.newMeth(C$, 'isInputResolved$S', function (name) {
return this.resolvedInputs.contains$O(name);
});

Clazz.newMeth(C$, 'isOutputResolved$S', function (name) {
return this.resolvedOutputs.contains$O(name);
});

Clazz.newMeth(C$, 'resolveInput$S', function (name) {
var item=p$1.getInputItem$S.apply(this, [name]);
if (item != null ) {
try {
item.validate$org_scijava_module_Module(this);
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.module.MethodCallException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
}this.resolvedInputs.add$TE(name);
});

Clazz.newMeth(C$, 'resolveOutput$S', function (name) {
this.resolvedOutputs.add$TE(name);
});

Clazz.newMeth(C$, 'unresolveInput$S', function (name) {
this.resolvedInputs.remove$O(name);
});

Clazz.newMeth(C$, 'unresolveOutput$S', function (name) {
this.resolvedOutputs.remove$O(name);
});

Clazz.newMeth(C$, 'createMap$Iterable$Z', function (items, outputMap) {
var map=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
for (var item, $item = items.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
var name=item.getName$();
var value=outputMap ? this.getOutput$S(name) : this.getInput$S(name);
map.put$TK$TV(name, value);
}
return map;
}, p$1);

Clazz.newMeth(C$, 'getInputItem$S', function (name) {
for (var item, $item = this.getInfo$().inputs$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (item.getName$().equals$O(name)) return item;
}
return null;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
