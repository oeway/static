(function(){var P$=Clazz.newPackage("net.imagej.types"),I$=[[0,'java.util.HashMap','java.util.ArrayList','java.util.Collections','net.imagej.types.DataType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDataTypeService", null, 'org.scijava.plugin.AbstractSingletonService', 'net.imagej.types.DataTypeService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['typesByName','java.util.Map','+typesByClass','sortedInstances','java.util.List']]]

Clazz.newMeth(C$, 'initialize$', function () {
C$.superclazz.prototype.initialize$.apply(this, []);
this.typesByName=Clazz.new_(1,{K:"String",V:"net.imagej.types.DataType"},$I$(1,1));
this.typesByClass=Clazz.new_(1,{K:"Class",V:"net.imagej.types.DataType"},$I$(1,1));
for (var type, $type = C$.superclazz.prototype.getInstances$.apply(this, []).iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
this.typesByName.put$TK$TV(type.longName$(), type);
this.typesByClass.put$TK$TV(type.getType$().getClass$(), type);
}
this.sortedInstances=Clazz.new_(1,{E:"net.imagej.types.DataType"},$I$(2,1));
this.sortedInstances.addAll$java_util_Collection(C$.superclazz.prototype.getInstances$.apply(this, []));
$I$(3).sort$java_util_List$java_util_Comparator(this.sortedInstances, ((P$.DefaultDataTypeService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultDataTypeService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$net_imagej_types_DataType$net_imagej_types_DataType','compare$','compare$TT$TT'], function (o1, o2) {
return o1.longName$().compareTo$S(o2.longName$());
});
})()
), Clazz.new_(P$.DefaultDataTypeService$1.$init$, [this, null])));
this.sortedInstances=$I$(3).unmodifiableList$java_util_List(this.sortedInstances);
});

Clazz.newMeth(C$, 'getInstances$', function () {
return this.sortedInstances;
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(4),['asDouble$TT','asLong$TT','bitCount$','cast$TT$net_imagej_types_BigComplex','cast$net_imagej_types_BigComplex$TT','createVariable$','description$','getType$','hasDoubleRepresentation$','hasLongRepresentation$','isBounded$','isComplex$','isFloat$','isSigned$','longName$','lowerBound$TT','setDouble$TT$D','setLong$TT$J','shortName$','upperBound$TT']);
});

Clazz.newMeth(C$, 'getTypeByName$S', function (typeName) {
return this.typesByName.get$O(typeName);
});

Clazz.newMeth(C$, 'getTypeByClass$Class', function (typeClass) {
return this.typesByClass.get$O(typeClass);
});

Clazz.newMeth(C$, 'getTypeByAttributes$I$Z$Z$Z$Z', function (bitCount, bounded, complex, floating, signed) {
for (var dataType, $dataType = this.sortedInstances.iterator$(); $dataType.hasNext$()&&((dataType=($dataType.next$())),1);) {
if (bitCount != dataType.bitCount$()) continue;
if (bounded != dataType.isBounded$() ) continue;
if (complex != dataType.isComplex$() ) continue;
if (floating != dataType.isFloat$() ) continue;
if (signed != dataType.isSigned$() ) continue;
return dataType;
}
return null;
});

Clazz.newMeth(C$, 'cast$net_imagej_types_DataType$TU$net_imagej_types_DataType$TV', function (inputType, input, outputType, output) {
this.cast$net_imagej_types_DataType$TU$net_imagej_types_DataType$TV$net_imagej_types_BigComplex(inputType, input, outputType, output, null);
});

Clazz.newMeth(C$, 'cast$net_imagej_types_DataType$TU$net_imagej_types_DataType$TV$net_imagej_types_BigComplex', function (inputType, input, outputType, output, tmp) {
if (inputType.hasLongRepresentation$() && outputType.hasLongRepresentation$() ) {
var val=inputType.asLong$TT(input);
outputType.setLong$TT$J(output, val);
} else if (inputType.hasDoubleRepresentation$() && outputType.hasDoubleRepresentation$() ) {
var val=inputType.asDouble$TT(input);
outputType.setDouble$TT$D(output, val);
} else if (inputType.hasLongRepresentation$() && outputType.hasDoubleRepresentation$() ) {
var val=inputType.asLong$TT(input);
outputType.setDouble$TT$D(output, val);
} else if (inputType.hasDoubleRepresentation$() && outputType.hasLongRepresentation$() ) {
var val=inputType.asDouble$TT(input);
outputType.setLong$TT$J(output, (val|0));
}if (tmp == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Could not find a suitable cast. Pass a temporary to the alternate version of cast()."]);
}inputType.cast$TT$net_imagej_types_BigComplex(input, tmp);
outputType.cast$net_imagej_types_BigComplex$TT(tmp, output);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.types.DefaultDataTypeService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
