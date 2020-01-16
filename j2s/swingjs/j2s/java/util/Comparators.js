(function(){var P$=java.util,I$=[[0,'java.util.Comparator','java.util.Objects','AssertionError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Comparators", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['NaturalOrderComparator',24],['NullComparator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
throw Clazz.new_($I$(3,1).c$$O,["no instances"]);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Comparators, "NaturalOrderComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', 'java.util.Comparator');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "INSTANCE", 0, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$Comparable$Comparable','compare$','compare$TT$TT'], function (c1, c2) {
return c1.compareTo$(c2);
});

Clazz.newMeth(C$, 'reversed$', function () {
return $I$(1).reverseOrder$();
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Comparators, "NullComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['nullFirst'],'O',['real','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$$Z$java_util_Comparator', function (nullFirst, real) {
;C$.$init$.apply(this);
this.nullFirst=nullFirst;
this.real=real;
}, 1);

Clazz.newMeth(C$, ['compare$TT$TT','compare$'], function (a, b) {
if (a == null ) {
return (b == null ) ? 0 : (this.nullFirst ? -1 : 1);
} else if (b == null ) {
return this.nullFirst ? 1 : -1;
} else {
return (this.real == null ) ? 0 : this.real.compare$(a, b);
}});

Clazz.newMeth(C$, 'thenComparing$java_util_Comparator', function (other) {
$I$(2).requireNonNull$TT(other);
return Clazz.new_(1,{T:"Object"},C$.c$$Z$java_util_Comparator,[this.nullFirst, this.real == null  ? other : this.real.thenComparing$java_util_Comparator(other)]);
});

Clazz.newMeth(C$, 'reversed$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$Z$java_util_Comparator,[!this.nullFirst, this.real == null  ? null : this.real.reversed$()]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1