(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[[0,'java.lang.reflect.Array','java.util.stream.Collectors','java.util.Objects','java.util.AbstractList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleCollections");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toArray$java_util_List', function (list) {
var array=Clazz.array(java.lang.Object, [list.size$()]);
for (var i=0; i < array.length; i++) array[i]=list.get$I(i);

return array;
}, 1);

Clazz.newMeth(C$, 'toArray$java_util_List$TAA', function (list, a) {
var array=a.length >= list.size$() ? a : Clazz.array(a.getClass$().getComponentType$(), list.size$());
for (var i=0; i < list.size$(); i++) array[i]=list.get$I(i);

return array;
}, 1);

Clazz.newMeth(C$, 'add$java_util_List$TE', function (list, o) {
list.add$I$TE(list.size$(), o);
return true;
}, 1);

Clazz.newMeth(C$, 'remove$java_util_List$O', function (list, o) {
var index=list.indexOf$O(o);
if (index < 0) return false;
list.remove$I(index);
return true;
}, 1);

Clazz.newMeth(C$, 'containsAll$java_util_Collection$java_util_Collection', function (collection, c) {
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) if (!collection.contains$O(o)) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'addAll$java_util_Collection$java_util_Collection', function (collection, c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) changed|=collection.add$TE(o);

return changed;
}, 1);

Clazz.newMeth(C$, 'addAll$java_util_List$I$java_util_Collection', function (list, index, c) {
var i=index;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) list.add$I$TE(i++, o);

return c.size$() > 0;
}, 1);

Clazz.newMeth(C$, 'removeAll$java_util_Collection$java_util_Collection', function (collection, c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) changed|=collection.remove$O(o);

return changed;
}, 1);

Clazz.newMeth(C$, 'retainAll$java_util_Collection$java_util_Collection', function (collection, c) {
var absent=collection.stream$().filter$java_util_function_Predicate(((P$.SimpleCollections$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "SimpleCollections$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (o) { return (!this.$finals$.c.contains$O(o));});
})()
), Clazz.new_(1,{T:"_.? super "},P$.SimpleCollections$lambda1.$init$, [this, {c:c}]))).collect$java_util_stream_Collector($I$(2).toList$());
return collection.removeAll$java_util_Collection(absent);
}, 1);

Clazz.newMeth(C$, 'indexOf$java_util_List$O', function (list, o) {
for (var i=0; i < list.size$(); i++) if ($I$(3).equals$O$O(list.get$I(i), o)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$java_util_List$O', function (list, o) {
for (var i=list.size$() - 1; i >= 0; i--) if ($I$(3).equals$O$O(list.get$I(i), o)) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'listIterator$java_util_List$I', function (list, index) {
return ((P$.SimpleCollections$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleCollections$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.ListIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=this.$finals$.index;
this.last=-1;
}, 1);

C$.$fields$=[['I',['i','last']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i < this.$finals$.list.size$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.$finals$.list.get$I(this.last=this.i++);
});

Clazz.newMeth(C$, 'hasPrevious$', function () {
return this.i > 0;
});

Clazz.newMeth(C$, 'previous$', function () {
return this.$finals$.list.get$I(this.last=--this.i);
});

Clazz.newMeth(C$, 'nextIndex$', function () {
return this.i;
});

Clazz.newMeth(C$, 'previousIndex$', function () {
return this.i - 1;
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.last < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.$finals$.list.remove$I(this.last);
this.last=-1;
});

Clazz.newMeth(C$, ['set$TE'], function (e) {
if (this.last < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.$finals$.list.set$I$TE(this.last, e);
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
this.$finals$.list.add$I$TE(this.i++, e);
this.last=-1;
});
})()
), Clazz.new_(P$.SimpleCollections$1.$init$, [this, {index:index,list:list}]));
}, 1);

Clazz.newMeth(C$, 'subList$java_util_List$I$I', function (list, fromIndex, toIndex) {
return ((P$.SimpleCollections$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleCollections$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractList'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'get$I', function (index) {
return this.$finals$.list.get$I(index + this.$finals$.fromIndex);
});

Clazz.newMeth(C$, 'size$', function () {
return this.$finals$.toIndex - this.$finals$.fromIndex;
});
})()
), Clazz.new_(1,{E:"Object"},$I$(4,1), [this, {toIndex:toIndex,list:list,fromIndex:fromIndex}],P$.SimpleCollections$2));
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
