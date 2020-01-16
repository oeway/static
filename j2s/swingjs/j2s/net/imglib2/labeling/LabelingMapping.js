(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),p$1={},I$=[[0,'java.util.Collections','java.util.HashMap','java.util.ArrayList','AssertionError',['net.imglib2.labeling.LabelingMapping','.InternedList'],'java.util.Arrays','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelingMapping", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['InternedList',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.internedLists=Clazz.new_(1,{K:"java.util.List",V:"net.imglib2.labeling.LabelingMapping.InternedList"},$I$(2,1));
this.listsByIndex=Clazz.new_(1,{E:"net.imglib2.labeling.LabelingMapping.InternedList"},$I$(3,1));
}, 1);

C$.$fields$=[['I',['maxNumLabels'],'O',['theEmptyList','java.util.List','internedLists','java.util.Map','listsByIndex','java.util.List']]]

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_IntegerType', function (value) {
;C$.$init$.apply(this);
this.maxNumLabels=(value.getMaxValue$()|0);
var background=$I$(1).emptyList$();
this.theEmptyList=this.intern$java_util_List(background);
}, 1);

Clazz.newMeth(C$, 'emptyList$', function () {
return this.theEmptyList;
});

Clazz.newMeth(C$, 'intern$java_util_List', function (src) {
return p$1.internImpl$java_util_List.apply(this, [src]);
});

Clazz.newMeth(C$, 'internImpl$java_util_List', function (src) {
var interned;
if (Clazz.instanceOf(src, "net.imglib2.labeling.LabelingMapping.InternedList")) {
interned=src;
if (interned.owner === this ) {
return interned;
}}if (src.size$() != 0) {
var copy=Clazz.new_(1,{E:"Object"},$I$(3,1).c$$java_util_Collection,[src]);
$I$(1).sort$java_util_List(copy);
src=copy;
}interned=this.internedLists.get$O(src);
if (interned == null ) {
{
var intIndex=this.listsByIndex.size$();
if (intIndex > this.maxNumLabels) throw Clazz.new_($I$(4,1).c$$O,[String.format$S$OA("Too many labels (or types of multiply-labeled pixels): %d maximum", [new Integer(intIndex)])]);
interned=Clazz.new_(1,{T1:"Object"},$I$(5,1).c$$java_util_List$I$net_imglib2_labeling_LabelingMapping,[src, intIndex, this]);
this.listsByIndex.add$TE(interned);
this.internedLists.put$TK$TV(src, interned);
}}return interned;
}, p$1);

Clazz.newMeth(C$, 'intern$TTA', function (src) {
return this.intern$java_util_List($I$(6).asList$TTA(src));
});

Clazz.newMeth(C$, 'indexOf$java_util_List', function (key) {
var interned=p$1.internImpl$java_util_List.apply(this, [key]);
return interned.index;
});

Clazz.newMeth(C$, 'indexOf$TTA', function (key) {
return this.indexOf$java_util_List(this.intern$TTA(key));
});

Clazz.newMeth(C$, 'listAtIndex$I', function (index) {
return this.listsByIndex.get$I(index);
});

Clazz.newMeth(C$, 'numLists$', function () {
return this.listsByIndex.size$();
});

Clazz.newMeth(C$, 'getLabels$', function () {
var result=Clazz.new_(1,{E:"Object"},$I$(7,1));
for (var instance, $instance = this.listsByIndex.iterator$(); $instance.hasNext$()&&((instance=($instance.next$())),1);) {
for (var label, $label = instance.iterator$(); $label.hasNext$()&&((label=($label.next$())),1);) {
result.add$TE(label);
}
}
return Clazz.new_(1,{E:"Object"},$I$(3,1).c$$java_util_Collection,[result]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LabelingMapping, "InternedList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.List');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index'],'O',['value','java.util.List','owner','net.imglib2.labeling.LabelingMapping']]]

Clazz.newMeth(C$, 'c$$java_util_List$I$net_imglib2_labeling_LabelingMapping', function (src, index, owner) {
;C$.$init$.apply(this);
this.owner=owner;
this.value=$I$(1).unmodifiableList$java_util_List(src);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.value.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.value.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.value.contains$O(o);
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.value.iterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.value.toArray$();
});

Clazz.newMeth(C$, ['add$TT1','add$TE'], function (e) {
return this.value.add$TE(e);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.value.remove$O(o);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return this.value.containsAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
return this.value.addAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection', function (i, c) {
return this.value.addAll$I$java_util_Collection(i, c);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
return this.value.removeAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
return this.value.retainAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'clear$', function () {
this.value.clear$();
});

Clazz.newMeth(C$, 'get$I', function (i) {
return this.value.get$I(i);
});

Clazz.newMeth(C$, ['set$I$TT1','set$I$TE'], function (index, element) {
return this.value.set$I$TE(index, element);
});

Clazz.newMeth(C$, ['add$I$TT1','add$I$TE'], function (i, element) {
this.value.add$I$TE(i, element);
});

Clazz.newMeth(C$, 'remove$I', function (i) {
return this.value.remove$I(i);
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
return this.value.indexOf$O(o);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
return this.value.lastIndexOf$O(o);
});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.value.listIterator$();
});

Clazz.newMeth(C$, 'listIterator$I', function (i) {
return this.value.listIterator$I(i);
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return this.value.subList$I$I(fromIndex, toIndex);
});

Clazz.newMeth(C$, ['toArray$TTA'], function (a) {
return this.value.toArray$TTA(a);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.value.hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "net.imglib2.labeling.LabelingMapping.InternedList")) {
var iobj=obj;
return this.value.equals$O(iobj.value);
}return this.value.equals$O(obj);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
