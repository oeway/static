(function(){var P$=Clazz.newPackage("org.apache.commons.logging.impl"),p$1={},p$2={},p$3={},I$=[[0,'java.lang.ref.WeakReference',['org.apache.commons.logging.impl.WeakHashtable','.WeakKey'],'java.lang.ref.ReferenceQueue',['org.apache.commons.logging.impl.WeakHashtable','.Referenced'],'java.util.HashSet',['org.apache.commons.logging.impl.WeakHashtable','.Entry'],'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WeakHashtable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Hashtable');
C$.$classes$=[['Entry',26],['Referenced',26],['WeakKey',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.queue=Clazz.new_($I$(3,1));
this.changeCount=0;
}, 1);

C$.$fields$=[['I',['changeCount'],'O',['queue','java.lang.ref.ReferenceQueue']]
,['I',['MAX_CHANGES_BEFORE_PURGE','PARTIAL_PURGE_COUNT'],'L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'containsKey$O', function (key) {
var referenced=Clazz.new_($I$(4,1).c$$O,[key]);
return C$.superclazz.prototype.containsKey$O.apply(this, [referenced]);
});

Clazz.newMeth(C$, 'elements$', function () {
p$3.purge.apply(this, []);
return C$.superclazz.prototype.elements$.apply(this, []);
});

Clazz.newMeth(C$, 'entrySet$', function () {
p$3.purge.apply(this, []);
var referencedEntries=C$.superclazz.prototype.entrySet$.apply(this, []);
var unreferencedEntries=Clazz.new_($I$(5,1));
for (var it=referencedEntries.iterator$(); it.hasNext$(); ) {
var entry=it.next$();
var referencedKey=entry.getKey$();
var key=p$1.getValue.apply(referencedKey, []);
var value=entry.getValue$();
if (key != null ) {
var dereferencedEntry=Clazz.new_($I$(6,1).c$$O$O,[key, value]);
unreferencedEntries.add$TE(dereferencedEntry);
}}
return unreferencedEntries;
});

Clazz.newMeth(C$, 'get$O', function (key) {
var referenceKey=Clazz.new_($I$(4,1).c$$O,[key]);
return C$.superclazz.prototype.get$O.apply(this, [referenceKey]);
});

Clazz.newMeth(C$, 'keys$', function () {
p$3.purge.apply(this, []);
var enumer=C$.superclazz.prototype.keys$.apply(this, []);
return ((P$.WeakHashtable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "WeakHashtable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
return this.$finals$.enumer.hasMoreElements$();
});

Clazz.newMeth(C$, 'nextElement$', function () {
var nextReference=this.$finals$.enumer.nextElement$();
return p$1.getValue.apply(nextReference, []);
});
})()
), Clazz.new_(P$.WeakHashtable$1.$init$, [this, {enumer:enumer}]));
});

Clazz.newMeth(C$, 'keySet$', function () {
p$3.purge.apply(this, []);
var referencedKeys=C$.superclazz.prototype.keySet$.apply(this, []);
var unreferencedKeys=Clazz.new_($I$(5,1));
for (var it=referencedKeys.iterator$(); it.hasNext$(); ) {
var referenceKey=it.next$();
var keyValue=p$1.getValue.apply(referenceKey, []);
if (keyValue != null ) {
unreferencedKeys.add$TE(keyValue);
}}
return unreferencedKeys;
});

Clazz.newMeth(C$, ['put$O$O','put$TK$TV'], function (key, value) {
if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null keys are not allowed"]);
}if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null values are not allowed"]);
}if (this.changeCount++ > 100) {
p$3.purge.apply(this, []);
this.changeCount=0;
} else if (this.changeCount % 10 == 0) {
p$3.purgeOne.apply(this, []);
}var keyRef=Clazz.new_($I$(4,1).c$$O$ref_ReferenceQueue,[key, this.queue]);
return C$.superclazz.prototype.put$TK$TV.apply(this, [keyRef, value]);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (t) {
if (t != null ) {
var entrySet=t.entrySet$();
for (var it=entrySet.iterator$(); it.hasNext$(); ) {
var entry=it.next$();
this.put$O$O(entry.getKey$(), entry.getValue$());
}
}});

Clazz.newMeth(C$, 'values$', function () {
p$3.purge.apply(this, []);
return C$.superclazz.prototype.values$.apply(this, []);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
if (this.changeCount++ > 100) {
p$3.purge.apply(this, []);
this.changeCount=0;
} else if (this.changeCount % 10 == 0) {
p$3.purgeOne.apply(this, []);
}return C$.superclazz.prototype.remove$O.apply(this, [Clazz.new_($I$(4,1).c$$O,[key])]);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
p$3.purge.apply(this, []);
return C$.superclazz.prototype.isEmpty$.apply(this, []);
});

Clazz.newMeth(C$, 'size$', function () {
p$3.purge.apply(this, []);
return C$.superclazz.prototype.size$.apply(this, []);
});

Clazz.newMeth(C$, 'toString', function () {
p$3.purge.apply(this, []);
return C$.superclazz.prototype.toString.apply(this, []);
});

Clazz.newMeth(C$, 'rehash$', function () {
p$3.purge.apply(this, []);
C$.superclazz.prototype.rehash$.apply(this, []);
});

Clazz.newMeth(C$, 'purge', function () {
var toRemove=Clazz.new_($I$(7,1));
{
var key;
while ((key=this.queue.poll$()) != null ){
toRemove.add$TE(p$2.getReferenced.apply(key, []));
}
}var size=toRemove.size$();
for (var i=0; i < size; i++) {
C$.superclazz.prototype.remove$O.apply(this, [toRemove.get$I(i)]);
}
}, p$3);

Clazz.newMeth(C$, 'purgeOne', function () {
{
var key=this.queue.poll$();
if (key != null ) {
C$.superclazz.prototype.remove$O.apply(this, [p$2.getReferenced.apply(key, [])]);
}}}, p$3);
;
(function(){/*c*/var C$=Clazz.newClass(P$.WeakHashtable, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['key','java.lang.Object','+value']]]

Clazz.newMeth(C$, 'c$$O$O', function (key, value) {
;C$.$init$.apply(this);
this.key=key;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
var result=false;
if (o != null  && Clazz.instanceOf(o, "java.util.Map.Entry") ) {
var entry=o;
result=(this.getKey$() == null  ? entry.getKey$() == null  : this.getKey$().equals$O(entry.getKey$())) && (this.getValue$() == null  ? entry.getValue$() == null  : this.getValue$().equals$O(entry.getValue$())) ;
}return result;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.getKey$() == null  ? 0 : this.getKey$().hashCode$()) ^ (this.getValue$() == null  ? 0 : this.getValue$().hashCode$());
});

Clazz.newMeth(C$, ['setValue$O','setValue$TV'], function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Entry.setValue is not supported."]);
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.WeakHashtable, "Referenced", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['hashCode'],'O',['reference','java.lang.ref.WeakReference']]]

Clazz.newMeth(C$, 'c$$O', function (referant) {
;C$.$init$.apply(this);
this.reference=Clazz.new_($I$(1,1).c$$TT,[referant]);
this.hashCode=referant.hashCode$();
}, 1);

Clazz.newMeth(C$, 'c$$O$ref_ReferenceQueue', function (key, queue) {
;C$.$init$.apply(this);
this.reference=Clazz.new_($I$(2,1).c$$O$ref_ReferenceQueue$org_apache_commons_logging_impl_WeakHashtable_Referenced,[key, queue, this]);
this.hashCode=key.hashCode$();
}, 1);

Clazz.newMeth(C$, 'hashCode$', function () {
return this.hashCode;
});

Clazz.newMeth(C$, 'getValue', function () {
return this.reference.get$();
}, p$1);

Clazz.newMeth(C$, 'equals$O', function (o) {
var result=false;
if (Clazz.instanceOf(o, "org.apache.commons.logging.impl.WeakHashtable.Referenced")) {
var otherKey=o;
var thisKeyValue=p$1.getValue.apply(this, []);
var otherKeyValue=p$1.getValue.apply(otherKey, []);
if (thisKeyValue == null ) {
result=otherKeyValue == null ;
result=result && this.hashCode$() == otherKey.hashCode$() ;
} else {
result=thisKeyValue.equals$O(otherKeyValue);
}}return result;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.WeakHashtable, "WeakKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.lang.ref.WeakReference');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['referenced','org.apache.commons.logging.impl.WeakHashtable.Referenced']]]

Clazz.newMeth(C$, 'c$$O$ref_ReferenceQueue$org_apache_commons_logging_impl_WeakHashtable_Referenced', function (key, queue, referenced) {
;C$.superclazz.c$$TT$ref_ReferenceQueue.apply(this, [key, queue]);C$.$init$.apply(this);
this.referenced=referenced;
}, 1);

Clazz.newMeth(C$, 'getReferenced', function () {
return this.referenced;
}, p$2);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 23:15:18 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
