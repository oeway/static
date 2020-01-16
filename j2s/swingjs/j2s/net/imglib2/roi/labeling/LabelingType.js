(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),I$=[[0,['net.imglib2.roi.labeling.LabelingType','.ModCount'],'net.imglib2.roi.labeling.LabelingMapping']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelingType", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['net.imglib2.type.Type', 'java.util.Set']);
C$.$classes$=[['ModCount',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['generation','net.imglib2.roi.labeling.LabelingType.ModCount','mapping','net.imglib2.roi.labeling.LabelingMapping','type','net.imglib2.type.numeric.IntegerType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_IntegerType$net_imglib2_roi_labeling_LabelingMapping$net_imglib2_roi_labeling_LabelingType_ModCount', function (type, mapping, modCount) {
;C$.$init$.apply(this);
this.type=type;
this.mapping=mapping;
this.generation=modCount;
}, 1);

Clazz.newMeth(C$, ['set$net_imglib2_roi_labeling_LabelingType','set$TT'], function (c) {
if (c.mapping === this.mapping ) this.type.setInteger$I(c.type.getInteger$());
 else this.type.setInteger$I(this.mapping.intern$java_util_Set(c).index);
this.generation.modCount++;
});

Clazz.newMeth(C$, 'createVariable$', function () {
var newtype=this.type.createVariable$();
var newmapping=this.mapping.newInstance$();
var t=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_type_numeric_IntegerType$net_imglib2_roi_labeling_LabelingMapping$net_imglib2_roi_labeling_LabelingType_ModCount,[newtype, newmapping, Clazz.new_($I$(1,1))]);
return t;
});

Clazz.newMeth(C$, 'copy$', function () {
var newtype=this.type.copy$();
var t=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_type_numeric_IntegerType$net_imglib2_roi_labeling_LabelingMapping$net_imglib2_roi_labeling_LabelingType_ModCount,[newtype, this.mapping, Clazz.new_($I$(1,1))]);
return t;
});

Clazz.newMeth(C$, 'toString', function () {
return this.mapping.setAtIndex$I(this.type.getInteger$()).set.toString();
});

Clazz.newMeth(C$, 'getGeneration$', function () {
return this.generation.modCount;
});

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.type;
});

Clazz.newMeth(C$, ['add$TT','add$TE'], function (label) {
var index=this.type.getInteger$();
var newindex=this.mapping.addLabelToSetAtIndex$TT$I(label, index).index;
if (newindex == index) return false;
this.type.setInteger$I(newindex);
this.generation.modCount++;
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
var index=this.type.getInteger$();
var newindex=index;
for (var label, $label = c.iterator$(); $label.hasNext$()&&((label=($label.next$())),1);) newindex=this.mapping.addLabelToSetAtIndex$TT$I(label, newindex).index;

if (newindex == index) return false;
this.type.setInteger$I(newindex);
this.generation.modCount++;
return true;
});

Clazz.newMeth(C$, 'clear$', function () {
var index=this.type.getInteger$();
var newindex=this.mapping.emptySet$().index;
if (newindex != index) {
this.type.setInteger$I(newindex);
this.generation.modCount++;
}});

Clazz.newMeth(C$, 'contains$O', function (label) {
return this.mapping.setAtIndex$I(this.type.getInteger$()).set.contains$O(label);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (labels) {
return this.mapping.setAtIndex$I(this.type.getInteger$()).set.containsAll$java_util_Collection(labels);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.mapping.setAtIndex$I(this.type.getInteger$()).set.isEmpty$();
});

Clazz.newMeth(C$, 'iterator$', function () {
var iter=this.mapping.setAtIndex$I(this.type.getInteger$()).set.iterator$();
return ((P$.LabelingType$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LabelingType$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.$finals$.iter.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.$finals$.iter.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.LabelingType$1.$init$, [this, {iter:iter}]));
});

Clazz.newMeth(C$, 'remove$O', function (label) {
var index=this.type.getInteger$();
var newindex=this.mapping.removeLabelFromSetAtIndex$TT$I(label, index).index;
if (newindex == index) return false;
this.type.setInteger$I(newindex);
this.generation.modCount++;
return true;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var index=this.type.getInteger$();
var newindex=index;
for (var label, $label = c.iterator$(); $label.hasNext$()&&((label=($label.next$())),1);) newindex=this.mapping.removeLabelFromSetAtIndex$TT$I(label, newindex).index;

if (newindex == index) return false;
this.type.setInteger$I(newindex);
this.generation.modCount++;
return true;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.mapping.setAtIndex$I(this.type.getInteger$()).set.size$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.mapping.setAtIndex$I(this.type.getInteger$()).set.toArray$();
});

Clazz.newMeth(C$, ['toArray$TT1A'], function (a) {
return this.mapping.setAtIndex$I(this.type.getInteger$()).set.toArray$TTA(a);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.mapping.setAtIndex$I(this.type.getInteger$()).hashCode;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "net.imglib2.roi.labeling.LabelingType")) {
var c=obj;
if (c.mapping === this.mapping ) return c.type.getInteger$() == this.type.getInteger$();
}return this.mapping.setAtIndex$I(this.type.getInteger$()).set.equals$O(obj);
});

Clazz.newMeth(C$, 'createVariable$Class', function (newType) {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_type_numeric_IntegerType$net_imglib2_roi_labeling_LabelingMapping$net_imglib2_roi_labeling_LabelingType_ModCount,[this.type.createVariable$(), Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_type_numeric_IntegerType,[this.type]), Clazz.new_($I$(1,1))]);
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_roi_labeling_LabelingType','valueEquals$','valueEquals$TT'], function (t) {
return this.equals$O(t);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LabelingType, "ModCount", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modCount=0;
}, 1);

C$.$fields$=[['I',['modCount']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
