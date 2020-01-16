(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsCompiler", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.targetJavaVersion="1.5";
this.generateDebugInfo=false;
}, 1);

C$.$fields$=[['Z',['generateDebugInfo'],'S',['targetJavaVersion']]]

Clazz.newMeth(C$, 'getTargetJavaVersion$', function () {
return this.targetJavaVersion;
});

Clazz.newMeth(C$, 'isGenerateDebugInfo$', function () {
return this.generateDebugInfo;
});

Clazz.newMeth(C$, 'setTargetJavaVersion$S', function (targetJavaVersion) {
this.targetJavaVersion=targetJavaVersion;
});

Clazz.newMeth(C$, 'setGenerateDebugInfo$Z', function (generateDebugInfo) {
this.generateDebugInfo=generateDebugInfo;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsCompiler',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Compiler..., weight = 14)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['targetJavaVersion','String',null,['org.scijava.plugin.Parameter']],['label="Target" choices={"1.4"  "1.5"  "1.6"  "1.7"  } ']],
  [['generateDebugInfo','boolean',null,['org.scijava.plugin.Parameter']],['label="Generate debugging ino (javac -g)" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
