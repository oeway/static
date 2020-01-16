(function(){var P$=Clazz.newPackage("net.imagej.lut"),I$=[[0,'net.imagej.display.ColorTables','java.util.ArrayList','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LUTSelector", null, 'org.scijava.command.DynamicCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.choice="Gray";
this.table=$I$(1).GRAYS;
this.luts=null;
}, 1);

C$.$fields$=[['S',['choice'],'O',['lutService','net.imagej.lut.LUTService','cmdService','org.scijava.command.CommandService','display','net.imagej.display.ImageDisplay','table','net.imglib2.display.ColorTable','luts','java.util.Map']]]

Clazz.newMeth(C$, 'run$', function () {
if (this.display != null ) {
this.cmdService.run$S$Z$OA("net.imagej.plugins.commands.misc.ApplyLookupTable", true, ["display", this.display, "tableURL", this.luts.get$O(this.choice)]);
}});

Clazz.newMeth(C$, 'init$', function () {
this.luts=this.lutService.findLUTs$();
var choices=Clazz.new_(1,{E:"String"},$I$(2,1));
for (var entry, $entry = this.luts.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
choices.add$TE(entry.getKey$());
}
$I$(3).sort$java_util_List(choices);
var input=this.getInfo$().getMutableInput$S$Class("choice", Clazz.getClass(String));
input.setChoices$java_util_List(choices);
input.setValue$org_scijava_module_Module$TT(this, choices.get$I(0));
this.nameChanged$();
});

Clazz.newMeth(C$, 'nameChanged$', function () {
try {
this.table=this.lutService.loadLUT$java_net_URL(this.luts.get$O(this.choice));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.lut.LUTSelector',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" label="LUT Selector" initializer="init" menu={"@Menu(label = Image, weight = 2.0, mnemonic = i)"  "@Menu(label = Lookup Tables, mnemonic = l)"  "@Menu(label = Select..., weight = 0, mnemonic = s)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['lutService','net.imagej.lut.LUTService',null,['org.scijava.plugin.Parameter']],['']],
  [['cmdService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']],
  [['display','net.imagej.display.ImageDisplay',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['choice','String',null,['org.scijava.plugin.Parameter']],['label="LUT name" persist="false" callback="nameChanged" ']],
  [['table','net.imglib2.display.ColorTable',null,['org.scijava.plugin.Parameter']],['required="false" label="LUT" persist="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
