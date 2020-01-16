(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "TreeNode");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'addChildren$java_util_List', function (nodes) {
for (var child, $child = nodes.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
child.setParent$org_scijava_util_TreeNode(this.parent$());
}
this.children$().addAll$java_util_Collection(nodes);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
