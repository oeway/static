(function(){var P$=Clazz.newPackage("org.scijava.object"),p$1={},I$=[[0,'java.util.Collections','java.util.ArrayList','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SortedObjectIndex", null, 'org.scijava.object.ObjectIndex');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (baseClass) {
;C$.superclazz.c$$Class.apply(this,[baseClass]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'contains$O', function (o) {
var index=p$1.findInList$O$java_util_List.apply(this, [o, this.getAll$()]);
return index < 0;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (!this.contains$O(o)) return false;
}
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
if (c.size$() > 1) {
p$1.mergeAfterSorting$java_util_Collection.apply(this, [c]);
return c.size$() > 0;
}if (c.size$() == 1) {
return this.add$TE(c.iterator$().next$());
}var changed=C$.superclazz.prototype.addAll$java_util_Collection.apply(this, [c]);
if (changed) p$1.sort.apply(this, []);
return changed;
});

Clazz.newMeth(C$, ['addToList$TE$java_util_List$Z'], function (obj, list, batch) {
if (batch) {
return C$.superclazz.prototype.addToList$TE$java_util_List$Z.apply(this, [obj, list, batch]);
}var result=$I$(1).binarySearch$java_util_List$TT(list, obj);
var index=result < 0 ? -result - 1 : result;
list.add$I$TE(index, obj);
return true;
});

Clazz.newMeth(C$, 'sort', function () {
for (var list, $list = this.hoard.values$().iterator$(); $list.hasNext$()&&((list=($list.next$())),1);) {
$I$(1).sort$java_util_List(list);
}
}, p$1);

Clazz.newMeth(C$, 'findInList$O$java_util_List', function (o, list) {
if (!this.getBaseClass$().isAssignableFrom$Class(o.getClass$())) {
return list.size$();
}var typedObj=o;
return $I$(1).binarySearch$java_util_List$TT(list, typedObj);
}, p$1);

Clazz.newMeth(C$, 'mergeAfterSorting$java_util_Collection', function (c) {
var listToMerge=Clazz.new_(1,{E:"Object"},$I$(2,1).c$$java_util_Collection,[c]);
$I$(1).sort$java_util_List(listToMerge);
var map=Clazz.new_(1,{K:"Class",V:"java.util.List"},$I$(3,1));
for (var e, $e = listToMerge.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
for (var clazz, $clazz = 0, $$clazz = P$.ObjectIndex.getTypes$Class(this.getType$TE(e)); $clazz<$$clazz.length&&((clazz=($$clazz[$clazz])),1);$clazz++) {
var list=this.retrieveList$Class(clazz);
var list2=map.get$O(clazz);
if (list2 == null ) {
list2=list.size$() == 0 ? list : Clazz.new_(1,{E:"Object"},$I$(2,1));
map.put$TK$TV(clazz, list2);
}list2.add$TE(e);
}
}
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var clazz=entry.getKey$();
var into=this.retrieveList$Class(clazz);
var sorted=map.get$O(clazz);
if (into !== sorted ) p$1.mergeInto$java_util_List$java_util_List.apply(this, [sorted, into]);
}
}, p$1);

Clazz.newMeth(C$, 'mergeInto$java_util_List$java_util_List', function (sorted, into) {
if (sorted === into ) return;
var count=sorted.size$();
if (count == 0) return;
if (into.size$() == 0) {
into.addAll$java_util_Collection(sorted);
return;
}var index1=into.size$() - 1;
var index2=sorted.size$() - 1;
for (var i=0; i < count; i++) into.add$TE(null);

var writeIndex=into.size$() - 1;
var e1=into.get$I(index1);
var e2=sorted.get$I(index2);
while (writeIndex > index1){
if (e1.compareTo$(e2) < 0) {
into.set$I$TE(writeIndex--, e2);
if (--index2 < 0) break;
e2=sorted.get$I(index2);
} else {
into.set$I$TE(writeIndex--, e1);
if (--index1 < 0) break;
e1=into.get$I(index1);
}}
while (index2 >= 0){
into.set$I$TE(writeIndex--, sorted.get$I(index2--));
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
