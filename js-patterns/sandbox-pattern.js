new Sandbox(function (box) {})

Sandbox.modules = {}

Sandbox.modules.dom = function (box) {
    box.getElement = function ()  {}
    box.getStyle = function () {}
    box.foo = 'bar'
}

Sandbox.modules.event = function (box) {
    // access to the sandbox if need:
    // box.constructor.prototype.m = 'mmm'
    box.attachEvent = function () {

    }

    box.detachEvent = function () {

    }
 }

 Sandbox.modules.ajax = function (box) {
    box.makeRequest = function  () {}
    box.getRequest = function () {}
 }

 function SandBox() {
    
 }