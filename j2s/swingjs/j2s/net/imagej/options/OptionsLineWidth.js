(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsLineWidth", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineWidth=1;
}, 1);

C$.$fields$=[['I',['lineWidth']]]

Clazz.newMeth(C$, 'getLineWidth$', function () {
return this.lineWidth;
});

Clazz.newMeth(C$, 'setLineWidth$I', function (lineWidth) {
this.lineWidth=lineWidth;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsLineWidth',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Line Width..., weight = 1)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['lineWidth','int',null,['org.scijava.plugin.Parameter']],['label="Line Width" min="1" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
