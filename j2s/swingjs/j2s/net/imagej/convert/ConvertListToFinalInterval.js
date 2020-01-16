(function(){var P$=Clazz.newPackage("net.imagej.convert"),I$=[[0,'net.imglib2.FinalInterval','java.util.List']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConvertListToFinalInterval", null, 'org.scijava.convert.AbstractConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['convertService','org.scijava.convert.ConvertService']]]

Clazz.newMeth(C$, 'canConvert$O$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$reflect_Type.apply(this, [src, dest]) && this.convertService.supports$O$Class(src, Clazz.array(Long.TYPE, -1)) ;
});

Clazz.newMeth(C$, 'canConvert$O$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$O$Class.apply(this, [src, dest]) && this.convertService.supports$O$Class(src, Clazz.array(Long.TYPE, -1)) ;
});

Clazz.newMeth(C$, 'canConvert$Class$Class', function (src, dest) {
return C$.superclazz.prototype.canConvert$Class$Class.apply(this, [src, dest]) && this.convertService.supports$Class$Class(src, Clazz.array(Long.TYPE, -1)) ;
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'getInputType$', function () {
return Clazz.getClass($I$(2),['add$TE','add$I$TE','addAll$java_util_Collection','addAll$I$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','get$I','hashCode$','indexOf$O','isEmpty$','iterator$','lastIndexOf$O','listIterator$','listIterator$I','remove$O','remove$I','removeAll$java_util_Collection','replaceAll$java_util_function_UnaryOperator','retainAll$java_util_Collection','set$I$TE','size$','sort$java_util_Comparator','spliterator$','subList$I$I','toArray$','toArray$TTA']);
});

Clazz.newMeth(C$, 'convert$O$Class', function (src, dest) {
var longs=this.convertService.convert$O$Class(src, Clazz.array(Long.TYPE, -1));
return Clazz.new_($I$(1,1).c$$JA,[longs]);
});

Clazz.newMeth(C$, 'canConvert$Class$reflect_Type', function (src, dest) {
return C$.superclazz.prototype.canConvert$Class$reflect_Type.apply(this, [src, dest]) && this.convertService.supports$Class$Class(src, Clazz.array(Long.TYPE, -1)) ;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.convert.ConvertListToFinalInterval',null,['org.scijava.plugin.Plugin']],['type="org.scijava.convert.Converter.class" priority="-100.0" ']],
  [['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
