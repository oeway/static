(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "Enum", null, null, ['Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['ordinal'],'S',['name']]]

Clazz.newMeth(C$, 'name$', function () {
return this.name;
});

Clazz.newMeth(C$, 'ordinal$', function () {
return this.ordinal;
});

Clazz.newMeth(C$, 'c$$S$I', function (name, ordinal) {
;C$.$init$.apply(this);
this.name=name;
this.ordinal=ordinal;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'equals$O', function (other) {
return this === other ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'clone$', function () {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
});

Clazz.newMeth(C$, ['compareTo$TE','compareTo$','compareTo$TT'], function (o) {
var other=o;
var self=this;
if (self.getClass$() !== other.getClass$()  && self.getDeclaringClass$() !== other.getDeclaringClass$()  ) throw Clazz.new_(Clazz.load('ClassCastException'));
return self.ordinal - other.ordinal;
});

Clazz.newMeth(C$, 'getDeclaringClass$', function () {
var clazz=this.getClass$();
var zuper=clazz.getSuperclass$();
return ((zuper === Clazz.getClass(C$) ) ? clazz : zuper);
});

Clazz.newMeth(C$, 'valueOf$Class$S', function (enumType, name) {
var result=null;
{
result = enumType.$clazz$[name];
}
if (result != null ) return result;
if (name == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Name is null"]);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No enum const " + enumType + "." + name ]);
}, 1);

Clazz.newMeth(C$, 'finalize$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1