(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ValuePair", null, null, 'net.imglib2.util.Pair');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','<A>','b','<B>']]]

Clazz.newMeth(C$, ['c$$TA$TB'], function (a, b) {
;C$.$init$.apply(this);
this.a=a;
this.b=b;
}, 1);

Clazz.newMeth(C$, 'getA$', function () {
return this.a;
});

Clazz.newMeth(C$, 'getB$', function () {
return this.b;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=1;
result=31 * result + ((this.a == null ) ? 0 : this.a.hashCode$());
result=31 * result + ((this.b == null ) ? 0 : this.b.hashCode$());
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) return true;
if (obj == null ) return false;
if (!(Clazz.instanceOf(obj, "net.imglib2.util.Pair"))) return false;
var other=obj;
if (this.a == null ) {
if (other.getA$() != null ) return false;
} else if (!this.a.equals$O(other.getA$())) return false;
if (this.b == null ) {
if (other.getB$() != null ) return false;
} else if (!this.b.equals$O(other.getB$())) return false;
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
