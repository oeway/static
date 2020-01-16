(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.io.ObjectStreamField','java.util.Hashtable','java.util.HashMap','java.util.ArrayList','java.util.Collections','java.util.Vector']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnresolvedPermissionCollection", null, 'java.security.PermissionCollection', 'java.io.Serializable');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.serialPersistentFields=Clazz.array($I$(1), -1, [Clazz.new_($I$(1,1).c$$S$Class,["permissions", Clazz.getClass($I$(2))])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['perms','java.util.Map']]
,['O',['serialPersistentFields','java.io.ObjectStreamField[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.perms=Clazz.new_(1,{K:"String",V:"java.util.List"},$I$(3,1).c$$I,[11]);
}, 1);

Clazz.newMeth(C$, 'add$java_security_Permission', function (permission) {
if (!(Clazz.instanceOf(permission, "java.security.UnresolvedPermission"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid permission: " + permission]);
var up=permission;
var v;
{
v=this.perms.get$O(up.getName$());
if (v == null ) {
v=Clazz.new_(1,{E:"java.security.UnresolvedPermission"},$I$(4,1));
this.perms.put$TK$TV(up.getName$(), v);
}}{
v.add$TE(up);
}});

Clazz.newMeth(C$, 'getUnresolvedPermissions$java_security_Permission', function (p) {
{
return this.perms.get$O(p.getClass$().getName$());
}});

Clazz.newMeth(C$, 'implies$java_security_Permission', function (permission) {
return false;
});

Clazz.newMeth(C$, 'elements$', function () {
var results=Clazz.new_(1,{E:"java.security.Permission"},$I$(4,1));
{
for (var l, $l = this.perms.values$().iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) {
{
results.addAll$java_util_Collection(l);
}}
}return $I$(5).enumeration$java_util_Collection(results);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
var permissions=Clazz.new_(1,{K:"String",V:"java.util.Vector"},$I$(2,1).c$$I,[this.perms.size$() * 2]);
{
var set=this.perms.entrySet$();
for (var e, $e = set.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var list=e.getValue$();
var vec=Clazz.new_(1,{E:"java.security.UnresolvedPermission"},$I$(6,1).c$$I,[list.size$()]);
{
vec.addAll$java_util_Collection(list);
}permissions.put$TK$TV(e.getKey$(), vec);
}
}var pfields=out.putFields$();
pfields.put$S$O("permissions", permissions);
out.writeFields$();
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
var gfields=$in.readFields$();
var permissions=gfields.get$S$O("permissions", null);
this.perms=Clazz.new_(1,{K:"String",V:"java.util.List"},$I$(3,1).c$$I,[permissions.size$() * 2]);
var set=permissions.entrySet$();
for (var e, $e = set.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var vec=e.getValue$();
var list=Clazz.new_(1,{E:"java.security.UnresolvedPermission"},$I$(4,1).c$$I,[vec.size$()]);
list.addAll$java_util_Collection(vec);
this.perms.put$TK$TV(e.getKey$(), list);
}
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:48 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
