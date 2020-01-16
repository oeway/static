(function(){var P$=Clazz.newPackage("net.imglib2.roi.labeling"),I$=[[0,'java.util.ArrayList','gnu.trove.map.hash.TObjectIntHashMap','java.util.HashMap','java.util.HashSet','AssertionError',['net.imglib2.roi.labeling.LabelingMapping','.InternedSet'],'java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelingMapping", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['InternedSet',8],['SerialisationAccess',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['maxNumLabelSets'],'O',['internedSets','java.util.HashMap','setsByIndex','java.util.ArrayList','+addMapsByIndex','+subMapsByIndex','theEmptySet','net.imglib2.roi.labeling.LabelingMapping.InternedSet']]]

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_IntegerType', function (indexType) {
C$.c$$I.apply(this, [(indexType.getMaxValue$()|0)]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (maxNumLabelSets) {
;C$.$init$.apply(this);
this.maxNumLabelSets=maxNumLabelSets;
this.internedSets=Clazz.new_(1,{K:"java.util.Set",V:"net.imglib2.roi.labeling.LabelingMapping.InternedSet"},$I$(3,1));
this.setsByIndex=Clazz.new_(1,{E:"net.imglib2.roi.labeling.LabelingMapping.InternedSet"},$I$(1,1));
this.addMapsByIndex=Clazz.new_(1,{E:"gnu.trove.map.TObjectIntMap"},$I$(1,1));
this.subMapsByIndex=Clazz.new_(1,{E:"gnu.trove.map.TObjectIntMap"},$I$(1,1));
var background=Clazz.new_(1,{E:"Object"},$I$(4,1).c$$I,[0]);
this.theEmptySet=this.intern$java_util_Set(background);
}, 1);

Clazz.newMeth(C$, 'newInstance$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$I,[this.maxNumLabelSets]);
});

Clazz.newMeth(C$, 'emptySet$', function () {
return this.theEmptySet;
});

Clazz.newMeth(C$, 'indexOf$java_util_Set', function (key) {
return this.intern$java_util_Set(key).index;
});

Clazz.newMeth(C$, 'setAtIndex$I', function (index) {
return this.setsByIndex.get$I(index);
});

Clazz.newMeth(C$, 'intern$java_util_Set', function (src) {
var interned=this.internedSets.get$O(src);
if (interned != null ) return interned;
{
interned=this.internedSets.get$O(src);
if (interned != null ) return interned;
var intIndex=this.setsByIndex.size$();
if (intIndex > this.maxNumLabelSets) throw Clazz.new_($I$(5,1).c$$O,[String.format$S$OA("Too many labels (or types of multiply-labeled pixels): %d maximum", [new Integer(intIndex)])]);
var srcCopy=Clazz.new_(1,{E:"Object"},$I$(4,1).c$$java_util_Collection,[src]);
interned=Clazz.new_(1,{T:"Object"},$I$(6,1).c$$java_util_Set$I,[srcCopy, intIndex]);
this.setsByIndex.add$TE(interned);
this.addMapsByIndex.add$TE(Clazz.new_(1,{K:"Object"},$I$(2,1).c$$I$F$I,[10, 0.5, -1]));
this.subMapsByIndex.add$TE(Clazz.new_(1,{K:"Object"},$I$(2,1).c$$I$F$I,[10, 0.5, -1]));
this.internedSets.put$TK$TV(srcCopy, interned);
return interned;
}});

Clazz.newMeth(C$, 'addLabelToSetAtIndex$TT$I', function (label, index) {
var addMap=this.addMapsByIndex.get$I(index);
var i=addMap.get$O(label);
if (i != -1) return this.setsByIndex.get$I(i);
{
i=addMap.get$O(label);
if (i != -1) return this.setsByIndex.get$I(i);
var set=Clazz.new_(1,{E:"Object"},$I$(4,1).c$$java_util_Collection,[this.setsByIndex.get$I(index).set]);
set.add$TE(label);
var interned=this.intern$java_util_Set(set);
addMap.put$TK$I(label, interned.index);
return interned;
}});

Clazz.newMeth(C$, 'removeLabelFromSetAtIndex$TT$I', function (label, index) {
var subMap=this.subMapsByIndex.get$I(index);
var i=subMap.get$O(label);
if (i != -1) return this.setsByIndex.get$I(i);
{
i=subMap.get$O(label);
if (i != -1) return this.setsByIndex.get$I(i);
var set=Clazz.new_(1,{E:"Object"},$I$(4,1).c$$java_util_Collection,[this.setsByIndex.get$I(index).set]);
set.remove$O(label);
var interned=this.intern$java_util_Set(set);
subMap.put$TK$I(label, interned.index);
return interned;
}});

Clazz.newMeth(C$, 'numSets$', function () {
return this.setsByIndex.size$();
});

Clazz.newMeth(C$, 'labelsAtIndex$I', function (index) {
return $I$(7).unmodifiableSet$java_util_Set(this.setsByIndex.get$I(index).set);
});

Clazz.newMeth(C$, 'getLabels$', function () {
var result=Clazz.new_(1,{E:"Object"},$I$(4,1));
for (var instance, $instance = this.setsByIndex.iterator$(); $instance.hasNext$()&&((instance=($instance.next$())),1);) {
for (var label, $label = instance.set.iterator$(); $label.hasNext$()&&((label=($label.next$())),1);) {
result.add$TE(label);
}
}
return result;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LabelingMapping, "InternedSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['hashCode','index'],'O',['set','java.util.Set']]]

Clazz.newMeth(C$, 'c$$java_util_Set$I', function (set, index) {
;C$.$init$.apply(this);
this.set=set;
this.hashCode=set.hashCode$();
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getSet$', function () {
return this.set;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.hashCode;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return obj === this ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LabelingMapping, "SerialisationAccess", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['labelingMapping','net.imglib2.roi.labeling.LabelingMapping']]]

Clazz.newMeth(C$, 'c$$net_imglib2_roi_labeling_LabelingMapping', function (labelingMapping) {
;C$.$init$.apply(this);
this.labelingMapping=labelingMapping;
}, 1);

Clazz.newMeth(C$, 'getLabelSets$', function () {
var labelSets=Clazz.new_(1,{E:"java.util.Set"},$I$(1,1).c$$I,[this.labelingMapping.numSets$()]);
for (var interned, $interned = this.labelingMapping.setsByIndex.iterator$(); $interned.hasNext$()&&((interned=($interned.next$())),1);) labelSets.add$TE(interned.getSet$());

return labelSets;
});

Clazz.newMeth(C$, 'setLabelSets$java_util_List', function (labelSets) {
if (labelSets.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["expected non-empty list of label-sets"]);
if (!labelSets.get$I(0).isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["label-set at index 0 expected to be the empty label set"]);
this.labelingMapping.internedSets.clear$();
this.labelingMapping.setsByIndex.clear$();
this.labelingMapping.addMapsByIndex.clear$();
this.labelingMapping.subMapsByIndex.clear$();
var theEmptySet=this.labelingMapping.theEmptySet;
this.labelingMapping.setsByIndex.add$TE(theEmptySet);
this.labelingMapping.addMapsByIndex.add$TE(Clazz.new_(1,{K:"Object"},$I$(2,1).c$$I$F$I,[10, 0.5, -1]));
this.labelingMapping.subMapsByIndex.add$TE(Clazz.new_(1,{K:"Object"},$I$(2,1).c$$I$F$I,[10, 0.5, -1]));
this.labelingMapping.internedSets.put$TK$TV(theEmptySet.getSet$(), theEmptySet);
for (var i=1; i < labelSets.size$(); ++i) {
var set=labelSets.get$I(i);
var interned=this.labelingMapping.intern$java_util_Set(set);
if (interned.index != i) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["no duplicates allowed in list of label-sets"]);
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
