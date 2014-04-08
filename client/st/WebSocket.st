Smalltalk current createPackage: 'WebSocket'!
TestCase subclass: #WebSocketTests
	instanceVariableNames: ''
	package: 'WebSocket'!

!WebSocketTests methodsFor: 'tests'!

justATest

  | socket | 
  socket := NativeFunction constructor: 'WebSocket' value: 'ws://localhost:1701/ws-echo'.
  
  socket onopen: [:event |
      Transcript cr; show: 'Connected', ' @ ' , Time now asDetailedTimeString. 
      socket send: 'Amber rules'].
	  
  socket onclose: [:event | 
      Transcript cr; show: 'Closed', ' @ ' , Time now asDetailedTimeString.].
  
  socket onmessage: [:event | 
      Transcript cr; show: 'Messaged: ', event data printString, ' @ ' , Time now asDetailedTimeString.
	  socket close.].
!

testSuccessfulSession
  | socket connected closed messaged |
  
  Transcript 
      cr; cr; cr; 
	  show: ' ---------------------------------------'; cr;
	  show: 'Started', ' @ ' , Time now asDetailedTimeString.
  
  connected := false.
  closed := false.
  messaged := false.
  
  socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.
  
  socket onopen: [:event |
      Transcript cr; show: 'Connected', ' @ ' , Time now asDetailedTimeString. 
	  connected := true.
      socket send: 'Amber rules'].
	  
  socket onclose: [:event | 
      Transcript cr; show: 'Closed', ' @ ' , Time now asDetailedTimeString.
      closed := true].
  
  socket onmessage: [:event | 
      Transcript cr; show: 'Messaged: ', event data printString, ' @ ' , Time now asDetailedTimeString.
	  socket close.
      messaged := true].
    
  
  self timeout: 1000.
  (self async: [
	  Transcript cr; show: 'Checking asserts', ' @ ', Time now asDetailedTimeString.
	  self assert: connected description: 'connected'. 
	  self assert: messaged description: 'messaged'.
	  self assert: closed description: 'closed'. 
	  self finished.
	  Transcript cr; show: 'Finished', ' @ ', Time now asDetailedTimeString ]) valueWithTimeout: 700.
  
  Transcript cr; show: 'Main thread finished', ' @ ', Time now asDetailedTimeString.
! !

