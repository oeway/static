(function(){var P$=Clazz.newPackage("org.scijava"),I$=[[0,'org.scijava.Priority','org.scijava.util.ClassUtils','org.scijava.util.MiscUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "UIDetails", null, null, ['org.scijava.BasicDetails', 'org.scijava.Prioritized']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.APPLICATION_MENU_ROOT="app";
}

C$.$fields$=[[]
,['S',['APPLICATION_MENU_ROOT']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getTitle$', function () {
if (this.getLabel$() != null  && !this.getLabel$().isEmpty$() ) return this.getLabel$();
var menuPath=this.getMenuPath$();
if (menuPath != null  && menuPath.size$() > 0 ) {
var menuLeaf=menuPath.getLeaf$();
var menuName=menuLeaf.getName$();
if (menuName != null  && !menuName.isEmpty$() ) return menuName;
}if (this.getName$() != null  && !this.getName$().isEmpty$() ) return this.getName$();
if (Clazz.instanceOf(this, "org.scijava.Identifiable")) {
var id=(this).getIdentifier$();
if (id != null ) return id;
}return this.getClass$().getSimpleName$();
});

Clazz.newMeth(C$, ['compareTo$org_scijava_Prioritized','compareTo$','compareTo$TT'], function (that) {
if (that == null ) return 1;
var priorityCompare=$I$(1).compare$org_scijava_Prioritized$org_scijava_Prioritized(this, that);
if (priorityCompare != 0) return priorityCompare;
var classCompare=$I$(2).compare$Class$Class(this.getClass$(), that.getClass$());
if (classCompare != 0) return classCompare;
if (!(Clazz.instanceOf(that, "org.scijava.UIDetails"))) return 1;
var uiDetails=that;
var thisName=this.getName$();
var thatName=uiDetails.getName$();
var nameCompare=$I$(3).compare$TT$TT(thisName, thatName);
if (nameCompare != 0) return nameCompare;
var thisTitle=this.getTitle$();
var thatTitle=uiDetails.getTitle$();
return $I$(3).compare$TT$TT(thisTitle, thatTitle);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
