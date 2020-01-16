(function(){var P$=Clazz.newPackage("org.scijava.object.event"),I$=[[0,'java.util.ArrayList','java.util.Collections','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.items=Clazz.new_(1,{E:"Object"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['items','java.util.List']]]

Clazz.newMeth(C$, 'c$$TT', function (o) {
Clazz.super_(C$, this);
this.items.add$TE(o);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
Clazz.super_(C$, this);
this.items.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'getItems$', function () {
return $I$(2).unmodifiableList$java_util_List(this.items);
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(3,1).c$$S,[C$.superclazz.prototype.toString.apply(this, [])]);
for (var i=0; i < this.items.size$(); i++) {
sb.append$S("\n\titems[" + i + "] = " + this.items.get$I(i) );
}
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
