(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HTML5CanvasContext2D", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ImageData',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['lineWidth'],'F',['globalAlpha'],'S',['font','fillStyle','strokeStyle'],'O',['imageData','swingjs.api.js.HTML5CanvasContext2D.ImageData','_aSaved','Object[][]']]]

Clazz.newMeth(C$, 'push', function (ctx, map) {
{
(ctx._aSaved || (ctx._aSaved = [])).push(map);
return ctx._aSaved.length;
}
}, 1);

Clazz.newMeth(C$, 'pop', function (ctx) {
{
return (ctx._aSaved && ctx._aSaved.length > 0 ? ctx._aSaved.pop() : null);
}
}, 1);

Clazz.newMeth(C$, 'getSavedLevel', function (ctx) {
{
return (ctx._aSaved ? ctx._aSaved.length : 0);
}
}, 1);

Clazz.newMeth(C$, 'getMatrix', function (ctx, transform) {
var m=ctx._m ||null;
if (m == null ) {
m=Clazz.array(Double.TYPE, [6]);

ctx._m = m;
transform.getMatrix$DA(m);
}return m;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTML5CanvasContext2D, "ImageData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','int[]']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
