(function(){var P$=Clazz.newPackage("org.scijava.object"),p$1={},I$=[[0,'java.util.HashMap','java.util.concurrent.ConcurrentHashMap','java.util.LinkedList',['org.scijava.object.ObjectIndex','.All'],'java.util.ArrayList','java.util.Collections','org.scijava.util.ClassUtils','StringBuilder','java.util.List','java.util.LinkedHashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ObjectIndex", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.Collection');
C$.$classes$=[['All',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeMap=Clazz.new_(1,{K:"Class",V:"Class[]"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
this.hoard=Clazz.new_(1,{K:"Class",V:"java.util.List"},$I$(2,1));
this.pending=Clazz.new_(1,{E:"org.scijava.object.LazyObjects"},$I$(3,1));
this.type2Lists=Clazz.new_(1,{K:"Class",V:"java.util.List[]"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['+hoard','baseClass','Class','pending','java.util.List','type2Lists','java.util.Map']]
,['O',['typeMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$$Class', function (baseClass) {
;C$.$init$.apply(this);
this.baseClass=baseClass;
}, 1);

Clazz.newMeth(C$, 'getBaseClass$', function () {
return this.baseClass;
});

Clazz.newMeth(C$, 'getAll$', function () {
return this.get$Class(Clazz.getClass($I$(4)));
});

Clazz.newMeth(C$, 'get$Class', function (type) {
if (!this.pending.isEmpty$()) p$1.resolvePending.apply(this, []);
var list=this.retrieveList$Class(type);
list=Clazz.new_(1,{E:"Object"},$I$(5,1).c$$java_util_Collection,[list]);
return list;
});

Clazz.newMeth(C$, 'addLater$org_scijava_object_LazyObjects', function (c) {
{
this.pending.add$TE(c);
}});

Clazz.newMeth(C$, 'size$', function () {
return this.getAll$().size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.getAll$().isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
if (!this.getBaseClass$().isAssignableFrom$Class(o.getClass$())) return false;
var typedObj=o;
var type=this.getType$TE(typedObj);
return this.get$Class(type).contains$O(o);
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.getAll$().iterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.getAll$().toArray$();
});

Clazz.newMeth(C$, ['toArray$TTA'], function (a) {
return this.getAll$().toArray$TTA(a);
});

Clazz.newMeth(C$, ['add$TE'], function (o) {
System.out.println$S("ObjectIndex adding " + o.getClass$().getName$() + " as " + this.baseClass.getName$() );
return this.add$TE$Z(o, false);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return this.remove$O$Z(o, false);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return this.getAll$().containsAll$java_util_Collection(c);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
var result=this.add$TE$Z(o, true);
if (result) changed=true;
}
return changed;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
var changed=false;
for (var o, $o = c.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
var result=this.remove$O$Z(o, true);
if (result) changed=true;
}
return changed;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
this.hoard.clear$();
});

Clazz.newMeth(C$, 'toString', function () {
var classes=Clazz.new_(1,{E:"Class"},$I$(5,1).c$$java_util_Collection,[this.hoard.keySet$()]);
$I$(6).sort$java_util_List$java_util_Comparator(classes, ((P$.ObjectIndex$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ObjectIndex$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$Class$Class','compare$','compare$TT$TT'], function (c1, c2) {
return $I$(7).compare$Class$Class(c1, c2);
});
})()
), Clazz.new_(P$.ObjectIndex$1.$init$, [this, null])));
var nl=System.getProperty$S("line.separator");
var sb=Clazz.new_($I$(8,1));
for (var c, $c = classes.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
sb.append$S(c.getName$() + ": {");
var list=this.hoard.get$O(c);
var first=true;
for (var element, $element = list.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (first) first=false;
 else sb.append$S(", ");
sb.append$O(element);
}
sb.append$S("}" + nl);
}
return sb.toString();
});

Clazz.newMeth(C$, ['add$TE$Z'], function (o, batch) {
return this.add$TE$Class$Z(o, this.getType$TE(o), batch);
});

Clazz.newMeth(C$, ['getType$TE'], function (o) {
return o.getClass$();
});

Clazz.newMeth(C$, 'remove$O$Z', function (o, batch) {
if (!this.getBaseClass$().isAssignableFrom$Class(o.getClass$())) return false;
var e=o;
return this.remove$O$Class$Z(o, this.getType$TE(e), batch);
});

Clazz.newMeth(C$, 'retrieveListsForType$Class', function (type) {
var lists=this.type2Lists.get$O(type);
if (lists != null ) return lists;
var listOfLists=Clazz.new_(1,{E:"java.util.List"},$I$(5,1));
for (var c, $c = 0, $$c = C$.getTypes$Class(type); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
listOfLists.add$TE(this.retrieveList$Class(c));
}
var arrayOfRawLists=listOfLists.toArray$TTA(Clazz.array($I$(9), [listOfLists.size$()]));
var arrayOfLists=arrayOfRawLists;
this.type2Lists.put$TK$TV(type, arrayOfLists);
return arrayOfLists;
});

Clazz.newMeth(C$, ['add$TE$Class$Z'], function (o, type, batch) {
var result=false;
for (var list, $list = 0, $$list = this.retrieveListsForType$Class(type); $list<$$list.length&&((list=($$list[$list])),1);$list++) {
if (this.addToList$TE$java_util_List$Z(o, list, batch)) result=true;
}
return result;
});

Clazz.newMeth(C$, 'remove$O$Class$Z', function (o, type, batch) {
var result=false;
for (var list, $list = 0, $$list = this.retrieveListsForType$Class(type); $list<$$list.length&&((list=($$list[$list])),1);$list++) {
if (this.removeFromList$O$java_util_List$Z(o, list, batch)) result=true;
}
return result;
});

Clazz.newMeth(C$, ['addToList$TE$java_util_List$Z'], function (obj, list, batch) {
return list.add$TE(obj);
});

Clazz.newMeth(C$, 'removeFromList$O$java_util_List$Z', function (obj, list, batch) {
return list.remove$O(obj);
});

Clazz.newMeth(C$, 'getTypes$Class', function (type) {
var types=C$.typeMap.get$O(type);
if (types != null ) return types;
var set=Clazz.new_(1,{E:"Class"},$I$(10,1));
set.add$TE(Clazz.getClass($I$(4)));
C$.getTypes$Class$java_util_Set(type, set);
types=set.toArray$TTA(Clazz.array(Class, [set.size$()]));
C$.typeMap.put$TK$TV(type, types);
return types;
}, 1);

Clazz.newMeth(C$, 'getTypes$Class$java_util_Set', function (type, types) {
if (type == null ) return;
types.add$TE(type);
C$.getTypes$Class$java_util_Set(type.getSuperclass$(), types);
for (var iface, $iface = 0, $$iface = type.getInterfaces$(); $iface<$$iface.length&&((iface=($$iface[$iface])),1);$iface++) {
C$.getTypes$Class$java_util_Set(iface, types);
}
}, 1);

Clazz.newMeth(C$, 'retrieveList$Class', function (type) {
var list=this.hoard.get$O(type);
if (list == null ) {
list=Clazz.new_(1,{E:"Object"},$I$(5,1));
this.hoard.put$TK$TV(type, list);
}return list;
});

Clazz.newMeth(C$, 'resolvePending', function () {
{
while (!this.pending.isEmpty$()){
var c=this.pending.remove$I(0);
this.addAll$java_util_Collection(c.get$());
}
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ObjectIndex, "All", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
