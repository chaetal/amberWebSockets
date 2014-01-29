define("chaetal_websocket/WebSocket", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('WebSocket');
smalltalk.packages["WebSocket"].transport = {"type":"amd","amdNamespace":"chaetal_websocket"};

smalltalk.addClass('WebSocketTests', smalltalk.TestCase, [], 'WebSocket');
smalltalk.addMethod(
smalltalk.method({
selector: "testSuccessfulConnection",
category: 'tests',
fn: function (){
var self=this;
var socket,connected;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $Time(){return smalltalk.Time||(typeof Time=="undefined"?nil:Time)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$6,$5,$3,$2,$9,$11,$10,$8,$7,$13,$12;
connected=false;
socket=_st($NativeFunction())._constructor_value_("WebSocket","ws://echo.websocket.org");
_st(socket)._onopen_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=1;
$1=_st($Transcript())._show_("Connected!!!");
$ctx2.sendIdx["show:"]=1;
$1;
connected=true;
return connected;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
self._timeout_((1000));
_st(self._async_((function(){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=2;
$4="Checking asserts".__comma(" @ ");
$ctx2.sendIdx[","]=2;
$6=_st($Time())._now();
$ctx2.sendIdx["now"]=1;
$5=_st($6)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=1;
$3=_st($4).__comma($5);
$ctx2.sendIdx[","]=1;
$2=_st($Transcript())._show_($3);
$ctx2.sendIdx["show:"]=2;
$2;
self._assert_(connected);
self._finished();
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=3;
$9="Finished".__comma(" @ ");
$ctx2.sendIdx[","]=4;
$11=_st($Time())._now();
$ctx2.sendIdx["now"]=2;
$10=_st($11)._asDetailedTimeString();
$ctx2.sendIdx["asDetailedTimeString"]=2;
$8=_st($9).__comma($10);
$ctx2.sendIdx[","]=3;
$7=_st($Transcript())._show_($8);
$ctx2.sendIdx["show:"]=3;
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})})))._valueWithTimeout_((500));
_st($Transcript())._cr();
$13=_st("Main thread finished".__comma(" @ ")).__comma(_st(_st($Time())._now())._asDetailedTimeString());
$ctx1.sendIdx[","]=5;
$12=_st($Transcript())._show_($13);
return self}, function($ctx1) {$ctx1.fill(self,"testSuccessfulConnection",{socket:socket,connected:connected},smalltalk.WebSocketTests)})},
args: [],
source: "testSuccessfulConnection\x0a  | socket connected |\x0a  connected := false.\x0a  socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.\x0a  socket onopen: [:event | Transcript cr; show: 'Connected!!!'. connected := true].\x0a  self timeout: 1000.\x0a  (self async: [\x0a\x09  Transcript cr; show: 'Checking asserts', ' @ ', Time now asDetailedTimeString.\x0a\x09  self assert: connected. \x0a\x09  self finished.\x0a\x09  Transcript cr; show: 'Finished', ' @ ', Time now asDetailedTimeString ]) valueWithTimeout: 500.\x0a  Transcript cr; show: 'Main thread finished', ' @ ', Time now asDetailedTimeString.",
messageSends: ["constructor:value:", "onopen:", "cr", "show:", "timeout:", "valueWithTimeout:", "async:", ",", "asDetailedTimeString", "now", "assert:", "finished"],
referencedClasses: ["NativeFunction", "Transcript", "Time"]
}),
smalltalk.WebSocketTests);


});
