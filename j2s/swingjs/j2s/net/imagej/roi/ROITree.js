(function(){var P$=Clazz.newPackage("net.imagej.roi"),I$=[[0,'org.scijava.util.DefaultTreeNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ROITree", null, null, 'org.scijava.util.TreeNode');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'addROIs$java_util_List', function (rois) {
var children=this.children$();
for (var roi, $roi = rois.iterator$(); $roi.hasNext$()&&((roi=($roi.next$())),1);) children.add$TE(Clazz.new_(1,{T:"net.imglib2.roi.MaskPredicate"},$I$(1,1).c$$TT$org_scijava_util_TreeNode,[roi, this]));

});

Clazz.newMeth(C$, 'data$', function () {
return null;
});

Clazz.newMeth(C$, 'parent$', function () {
return null;
});

Clazz.newMeth(C$, 'setParent$org_scijava_util_TreeNode', function (parent) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
