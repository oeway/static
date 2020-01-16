(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CellHolder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRowColumnID$swingjs_plaf_JSComponentUI$I$I', function (holder, row, col) {
return holder.id + "_tab" + (row >= 0 ? "_row" + row : "") + "_col" + col ;
}, 1);

Clazz.newMeth(C$, 'createCellOuterNode$swingjs_plaf_JSComponentUI$I$I', function (tableOrHeader, row, col) {
var rcID=C$.getRowColumnID$swingjs_plaf_JSComponentUI$I$I(tableOrHeader, row, col);
var td=C$.findCellNode$swingjs_plaf_JSComponentUI$S$I$I(null, rcID, row, col);
if (td == null ) {
td=$I$(1).createElement("div", rcID);
$I$(1).setStyles(td, ["overflow", "hidden", "background", "transparent"]);
tableOrHeader.$$O(td).addClass("swing-td");
$I$(1).setAttrs(td, ["data-table-ui", tableOrHeader, "data-row", "" + row, "data-col", "" + col]);
$I$(1).setStyles(td, ["position", "absolute", "overflow", "hidden", "background", "transparent"]);
}return td;
}, 1);

Clazz.newMeth(C$, 'findCellNode$swingjs_plaf_JSComponentUI$S$I$I', function (tableOrHolder, rcID, row, col) {
if (tableOrHolder != null ) rcID=C$.getRowColumnID$swingjs_plaf_JSComponentUI$I$I(tableOrHolder, row, col);
return $I$(1).getElement(rcID);
}, 1);

Clazz.newMeth(C$, 'updateCellNode$swingjs_api_js_DOMNode$java_awt_JSComponent$I$I', function (td, c, width, height) {
var ui;
if (c == null  || (ui=c.秘getUI$()).isNull ) return;
var isHeader=(width >= 0);
if (!isHeader) {
width=$I$(1).getWidth(td);
height=$I$(1).getHeight(td);
}c.setSize$I$I(width, height);
ui.setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(c, width, height, null);
ui.saveCellNodes$swingjs_api_js_DOMNode$Z(td, isHeader);
}, 1);

Clazz.newMeth(C$, 'setJ2SRendererComponent$javax_swing_JComponent', function (comp) {
comp.秘getUI$().setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(comp, 0, 0, null);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
