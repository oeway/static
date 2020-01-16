(function(){var P$=Clazz.newPackage("org.scijava"),I$=[[0,'org.scijava.Priority','org.scijava.util.ClassUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Prioritized", null, null, 'Comparable');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['compareTo$org_scijava_Prioritized','compareTo$','compareTo$TT'], function (that) {
if (that == null ) return 1;
var priorityCompare=$I$(1).compare$org_scijava_Prioritized$org_scijava_Prioritized(this, that);
if (priorityCompare != 0) return priorityCompare;
return $I$(2).compare$Class$Class(this.getClass$(), that.getClass$());
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
