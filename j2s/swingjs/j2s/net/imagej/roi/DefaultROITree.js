(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultROITree", null, null, 'net.imagej.roi.ROITree');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['children','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.children=Clazz.new_(1,{E:"org.scijava.util.TreeNode"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'children$', function () {
return this.children;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
