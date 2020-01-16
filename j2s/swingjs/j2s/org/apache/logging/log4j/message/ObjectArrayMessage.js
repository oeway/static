(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ObjectArrayMessage", null, null, 'org.apache.logging.log4j.message.Message');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY_OBJECT_ARRAY=Clazz.array(java.lang.Object, [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['arrayString'],'O',['+array']]
,['L',['serialVersionUID'],'O',['EMPTY_OBJECT_ARRAY','Object[]']]]

Clazz.newMeth(C$, 'c$$OA', function (obj) {
;C$.$init$.apply(this);
this.array=obj == null  ? C$.EMPTY_OBJECT_ARRAY : obj;
}, 1);

Clazz.newMeth(C$, 'equalObjectsOrStrings$OA$OA', function (left, right) {
return $I$(1).equals$OA$OA(left, right) || $I$(1).toString$OA(left).equals$O($I$(1).toString$OA(right)) ;
}, p$1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
return this.array == null  ? that.array == null  : p$1.equalObjectsOrStrings$OA$OA.apply(this, [this.array, that.array]);
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.arrayString == null ) {
this.arrayString=$I$(1).toString$OA(this.array);
}return this.arrayString;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return this.array;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return null;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(1).hashCode$OA(this.array);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$in.defaultReadObject$();
this.array=$in.readObject$();
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
out.defaultWriteObject$();
out.writeObject$O(this.array);
}, p$1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
