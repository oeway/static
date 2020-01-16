(function(){var P$=Clazz.newPackage("org.scijava.table"),I$=[[0,'org.scijava.table.SimpleCollections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Column", null, null, ['java.util.List', 'org.scijava.util.Sizable']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.indexOf$O(o) >= 0;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.listIterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return $I$(1).toArray$java_util_List(this);
});

Clazz.newMeth(C$, ['toArray$TEA'], function (a) {
return $I$(1).toArray$java_util_List$TAA(this, a);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return $I$(1).containsAll$java_util_Collection$java_util_Collection(this, c);
});

Clazz.newMeth(C$, 'indexOf$O', function (o) {
return $I$(1).indexOf$java_util_List$O(this, o);
});

Clazz.newMeth(C$, 'lastIndexOf$O', function (o) {
return $I$(1).lastIndexOf$java_util_List$O(this, o);
});

Clazz.newMeth(C$, 'listIterator$', function () {
return this.listIterator$I(0);
});

Clazz.newMeth(C$, 'listIterator$I', function (index) {
return $I$(1).listIterator$java_util_List$I(this, index);
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return $I$(1).subList$java_util_List$I$I(this, fromIndex, toIndex);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
