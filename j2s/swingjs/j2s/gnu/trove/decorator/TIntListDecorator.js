(function(){var P$=Clazz.newPackage("gnu.trove.decorator"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TIntListDecorator", null, 'java.util.AbstractList', ['java.util.List', 'java.io.Externalizable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TIntList']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TIntList', function (list) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'getList$', function () {
return this.list;
});

Clazz.newMeth(C$, 'size$', function () {
return this.list.size$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
var value=this.list.get$I(index);
if (value == this.list.getNoEntryValue$()) return null;
 else return Integer.valueOf$I(value);
});

Clazz.newMeth(C$, ['set$I$Integer','set$I$TE'], function (index, value) {
var previous_value=this.list.set$I$I(index, (value).valueOf());
if (previous_value == this.list.getNoEntryValue$()) return null;
 else return Integer.valueOf$I(previous_value);
});

Clazz.newMeth(C$, ['add$I$Integer','add$I$TE'], function (index, value) {
this.list.insert$I$I(index, value.intValue$());
});

Clazz.newMeth(C$, 'remove$I', function (index) {
var previous_value=this.list.removeAt$I(index);
if (previous_value == this.list.getNoEntryValue$()) return null;
 else return Integer.valueOf$I(previous_value);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$in.readByte$();
this.list=$in.readObject$();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
out.writeByte$I(0);
out.writeObject$O(this.list);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1