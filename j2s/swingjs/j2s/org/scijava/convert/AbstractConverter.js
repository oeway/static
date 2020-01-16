(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'org.scijava.util.Types','org.scijava.convert.ConversionRequest']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractConverter", null, 'org.scijava.plugin.AbstractHandlerPlugin', 'org.scijava.convert.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['objectService','org.scijava.object.ObjectService']]]

Clazz.newMeth(C$, 'canConvert$org_scijava_convert_ConversionRequest', function (request) {
var src=request.sourceObject$();
if (src == null ) {
var srcClass=request.sourceClass$();
if (request.destType$() != null ) return this.canConvert$Class$reflect_Type(srcClass, request.destType$());
return this.canConvert$Class$Class(srcClass, request.destClass$());
}if (request.destType$() != null ) return this.canConvert$O$reflect_Type(src, request.destType$());
return this.canConvert$O$Class(src, request.destClass$());
});

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
if (src == null ) return false;
var srcClass=src.getClass$();
return this.canConvert$Class$reflect_Type(srcClass, dest);
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
if (src == null ) return false;
var srcClass=src.getClass$();
return this.canConvert$Class$Class(srcClass, dest);
});

Clazz.newMeth(C$, 'canConvert$Class$Class', function (src, dest) {
if (src == null ) return false;
var saneSrc=$I$(1).box$Class(src);
var saneDest=$I$(1).box$Class(dest);
return $I$(1).isAssignable$reflect_Type$reflect_Type(saneSrc, this.getInputType$()) && $I$(1).isAssignable$reflect_Type$reflect_Type(this.getOutputType$(), saneDest) ;
});

Clazz.newMeth(C$, 'convert$O$reflect_Type', function (src, dest) {
var destClass=$I$(1).raw$reflect_Type(dest);
return this.convert$O$Class(src, destClass);
});

Clazz.newMeth(C$, 'convert$org_scijava_convert_ConversionRequest', function (request) {
if (request.destType$() != null ) {
return this.convert$O$reflect_Type(request.sourceObject$(), request.destType$());
}return this.convert$O$Class(request.sourceObject$(), request.destClass$());
});

Clazz.newMeth(C$, 'populateInputCandidates$java_util_Collection', function (objects) {
if (this.objectService == null ) return;
for (var candidate, $candidate = this.objectService.getObjects$Class(this.getInputType$()).iterator$(); $candidate.hasNext$()&&((candidate=($candidate.next$())),1);) {
if (this.canConvert$O$Class(candidate, this.getOutputType$())) objects.add$TE(candidate);
}
});

Clazz.newMeth(C$, ['supports$org_scijava_convert_ConversionRequest','supports$TT','supports$TD'], function (request) {
return this.canConvert$org_scijava_convert_ConversionRequest(request);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(2));
});

Clazz.newMeth(C$, 'canConvert$Class$reflect_Type', function (src, dest) {
var destClass=$I$(1).raw$reflect_Type(dest);
return this.canConvert$Class$Class(src, destClass);
});
C$.$getAnn$ = function(){ return [
[['objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
