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
var socket;
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
socket=_st($NativeFunction())._constructor_value_("WebSocket","ws://echo.websocket.org");
_st(socket)._onopen_((function(event){
return smalltalk.withContext(function($ctx2) {
_st($Transcript())._cr();
$ctx2.sendIdx["cr"]=1;
$1=_st($Transcript())._show_("Connected!!!");
$ctx2.sendIdx["show:"]=1;
return $1;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
_st($Transcript())._cr();
$2=_st($Transcript())._show_("Main thread finished");
return self}, function($ctx1) {$ctx1.fill(self,"testSuccessfulConnection",{socket:socket},smalltalk.WebSocketTests)})},
args: [],
source: "testSuccessfulConnection\x0a  | socket |\x0a  socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.\x0a  socket onopen: [:event | Transcript cr; show: 'Connected!!!'].\x0a  Transcript cr; show: 'Main thread finished'.",
messageSends: ["constructor:value:", "onopen:", "cr", "show:"],
referencedClasses: ["NativeFunction", "Transcript"]
}),
smalltalk.WebSocketTests);


});
