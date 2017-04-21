# js_touch_swipe_function
A simple Javascript function to handle swipe action

This function allow you to handler basic swipe action (left, right, up, down) on mobile screen.

You can define parameter to the swipe function :
 - element where the swipe action is listen
 - delta : when the detection start
 
 You must define a callback function which one listen action (left, right, up, down)
 
```javascript
/**
* @param1 - DOM element or custom querySelector
* @param2 - delta when detection "start"
* @param3 - callback function
**/
 
 swipe('*', 0, function(e) {
    switch (e) {
        case 'left':
            /** do something **/

            break;
        case 'right':
            /** do something **/
            
            break;
        case 'up':
            /** do something **/
            
            break;
        case 'down':
            /** do something **/
            
            break;
    }
```
