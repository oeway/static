(function(){var P$=Clazz.newPackage("org.scijava.convert"),p$1={},I$=[[0,'org.scijava.convert.Converter','org.scijava.convert.ConversionRequest','java.util.LinkedHashSet','java.util.HashSet','org.scijava.util.ConversionUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractConvertService", null, 'org.scijava.plugin.AbstractHandlerService', 'org.scijava.convert.ConvertService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['canConvert$org_scijava_convert_ConversionRequest','canConvert$O$reflect_Type','canConvert$O$Class','canConvert$Class$reflect_Type','canConvert$Class$Class','convert$O$reflect_Type','convert$O$Class','convert$org_scijava_convert_ConversionRequest','getInputType$','getOutputType$','populateInputCandidates$java_util_Collection']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(2));
});

Clazz.newMeth(C$, 'getHandler$O$Class', function (src, dest) {
return this.getHandler$TDT(Clazz.new_($I$(2,1).c$$O$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'getHandler$Class$Class', function (src, dest) {
return this.getHandler$TDT(Clazz.new_($I$(2,1).c$$reflect_Type$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'getHandler$O$reflect_Type', function (src, dest) {
return this.getHandler$TDT(Clazz.new_($I$(2,1).c$$O$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'getHandler$Class$reflect_Type', function (src, dest) {
return this.getHandler$TDT(Clazz.new_($I$(2,1).c$$reflect_Type$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'supports$O$Class', function (src, dest) {
return this.supports$TDT(Clazz.new_($I$(2,1).c$$O$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'supports$Class$Class', function (src, dest) {
return this.supports$TDT(Clazz.new_($I$(2,1).c$$reflect_Type$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'supports$O$reflect_Type', function (src, dest) {
return this.supports$TDT(Clazz.new_($I$(2,1).c$$O$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'supports$Class$reflect_Type', function (src, dest) {
return this.supports$TDT(Clazz.new_($I$(2,1).c$$reflect_Type$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'getCompatibleInputs$Class', function (dest) {
var objects=Clazz.new_(1,{E:"java.lang.Object"},$I$(3,1));
for (var c, $c = this.getInstances$().iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (dest.isAssignableFrom$Class(c.getOutputType$())) {
c.populateInputCandidates$java_util_Collection(objects);
}}
return objects;
});

Clazz.newMeth(C$, 'convert$O$reflect_Type', function (src, dest) {
return this.convert$org_scijava_convert_ConversionRequest(Clazz.new_($I$(2,1).c$$O$reflect_Type,[src, dest]));
});

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var handler=this.getHandler$O$Class(src, dest);
return handler == null  ? null : handler.convert$O$Class(src, dest);
});

Clazz.newMeth(C$, 'convert$org_scijava_convert_ConversionRequest', function (request) {
var handler=this.getHandler$TDT(request);
return handler == null  ? null : handler.convert$org_scijava_convert_ConversionRequest(request);
});

Clazz.newMeth(C$, 'getCompatibleInputClasses$Class', function (dest) {
var compatibleClasses=Clazz.new_(1,{E:"Class"},$I$(4,1));
for (var converter, $converter = this.getInstances$().iterator$(); $converter.hasNext$()&&((converter=($converter.next$())),1);) {
p$1.addIfMatches$Class$Class$Class$java_util_Set.apply(this, [dest, converter.getOutputType$(), converter.getInputType$(), compatibleClasses]);
}
return compatibleClasses;
});

Clazz.newMeth(C$, 'getCompatibleOutputClasses$Class', function (source) {
var compatibleClasses=Clazz.new_(1,{E:"Class"},$I$(4,1));
for (var converter, $converter = this.getInstances$().iterator$(); $converter.hasNext$()&&((converter=($converter.next$())),1);) {
try {
p$1.addIfMatches$Class$Class$Class$java_util_Set.apply(this, [source, converter.getInputType$(), converter.getOutputType$(), compatibleClasses]);
} catch (t) {
this.log$().error$O$Throwable("Malfunctioning converter plugin: " + converter.getClass$().getName$(), t);
}
}
return compatibleClasses;
});

Clazz.newMeth(C$, 'initialize$', function () {
$I$(5).setDelegateService$org_scijava_convert_ConvertService$D(this, this.getPriority$());
});

Clazz.newMeth(C$, 'addIfMatches$Class$Class$Class$java_util_Set', function (c1, c2, toAdd, classes) {
if (c1 === c2 ) classes.add$TE(toAdd);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
