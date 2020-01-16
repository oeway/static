(function(){var P$=Clazz.newPackage("net.imagej.options"),p$1={},I$=[[0,'net.imagej.config.ConfigFileParameters']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsMemoryAndThreads", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxMemory=0;
this.stackThreads=2;
this.multipleBuffers=false;
this.runGcOnClick=true;
}, 1);

C$.$fields$=[['Z',['multipleBuffers','runGcOnClick'],'I',['maxMemory','stackThreads'],'O',['params','net.imagej.config.ConfigFileParameters']]]

Clazz.newMeth(C$, 'load$', function () {
C$.superclazz.prototype.load$.apply(this, []);
p$1.loadMaxMemory.apply(this, []);
});

Clazz.newMeth(C$, 'save$', function () {
C$.superclazz.prototype.save$.apply(this, []);
p$1.saveMaxMemory.apply(this, []);
});

Clazz.newMeth(C$, 'getMaxMemory$', function () {
return this.maxMemory;
});

Clazz.newMeth(C$, 'getStackThreads$', function () {
return this.stackThreads;
});

Clazz.newMeth(C$, 'isMultipleBuffers$', function () {
return this.multipleBuffers;
});

Clazz.newMeth(C$, 'isRunGcOnClick$', function () {
return this.runGcOnClick;
});

Clazz.newMeth(C$, 'setMaxMemory$I', function (maxMemory) {
this.maxMemory=maxMemory;
p$1.saveMaxMemory.apply(this, []);
});

Clazz.newMeth(C$, 'setStackThreads$I', function (stackThreads) {
this.stackThreads=stackThreads;
});

Clazz.newMeth(C$, 'setMultipleBuffers$Z', function (multipleBuffers) {
this.multipleBuffers=multipleBuffers;
});

Clazz.newMeth(C$, 'setRunGcOnClick$Z', function (runGcOnClick) {
this.runGcOnClick=runGcOnClick;
});

Clazz.newMeth(C$, 'loadMaxMemory', function () {
this.maxMemory=p$1.params.apply(this, []).getMemoryInMB$();
}, p$1);

Clazz.newMeth(C$, 'saveMaxMemory', function () {
if (this.maxMemory == p$1.params.apply(this, []).getMemoryInMB$()) return;
p$1.params.apply(this, []).setMemoryInMB$I(this.maxMemory);
}, p$1);

Clazz.newMeth(C$, 'params', function () {
if (this.params == null ) {
this.params=Clazz.new_($I$(1,1).c$$org_scijava_Context,[this.getContext$()]);
}return this.params;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsMemoryAndThreads',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Memory & Threads..., weight = 12)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['maxMemory','int',null,['org.scijava.plugin.Parameter']],['label="Maximum memory (MB)" persist="false" ']],
  [['stackThreads','.',null,['org.scijava.plugin.Parameter']],['label="Parallel threads for stacks" ']],
  [['multipleBuffers','boolean',null,['org.scijava.plugin.Parameter']],['label="Keep multiple undo buffers" ']],
  [['runGcOnClick','.',null,['org.scijava.plugin.Parameter']],['label="Run garbage collector on status bar click" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
