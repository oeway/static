(function(){var P$=Clazz.newPackage("org.ejml"),I$=[[0,['org.ejml.EjmlParameters','.MemoryUsage']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EjmlParameters", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MemoryUsage',25]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MEMORY=$I$(1).FASTER;
C$.BLOCK_WIDTH=60;
C$.BLOCK_WIDTH_CHOL=20;
C$.BLOCK_SIZE=C$.BLOCK_WIDTH * C$.BLOCK_WIDTH;
C$.TRANSPOSE_SWITCH=375;
C$.MULT_COLUMN_SWITCH=15;
C$.MULT_TRANAB_COLUMN_SWITCH=40;
C$.MULT_INNER_SWITCH=100;
C$.SWITCH_BLOCK64_CHOLESKY=1000;
C$.SWITCH_BLOCK64_QR=1500;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['BLOCK_WIDTH','BLOCK_WIDTH_CHOL','BLOCK_SIZE','TRANSPOSE_SWITCH','MULT_COLUMN_SWITCH','MULT_TRANAB_COLUMN_SWITCH','MULT_INNER_SWITCH','SWITCH_BLOCK64_CHOLESKY','SWITCH_BLOCK64_QR'],'O',['MEMORY','org.ejml.EjmlParameters.MemoryUsage']]]
;
(function(){/*e*/var C$=Clazz.newClass(P$.EjmlParameters, "MemoryUsage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LOW_MEMORY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FASTER", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
