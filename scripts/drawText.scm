(define (displayBoard)
(let*
(
(img (car(gimp-image-new 750 200 RGB)))
(layer1 (car (gimp-layer-new img 750 200 RGB "layer 1" 100 NORMAL)))
)
(gimp-image-add-layer img layer1 0)
(gimp-palette-set-foreground '(0 0 0))
(gimp-palette-set-background '(153 255 255))
(gimp-drawable-fill layer1 BACKGROUND-FILL)
(gimp-text-fontname
img
layer1
50
50
"Always make sure the road is clear"
0
TRUE
50
PIXELS
"Calibri"
)
(gimp-display-new img)
)
)
(script-fu-register "displayBoard"
                    "displayBoard"
					"displays Board"
					"Maria Susainathan"
					"2019 Maria Susainathan"
					"2019"
					""
					)
(script-fu-menu-register "displayBoard" "<Toolbox>/Xtns/MyScripts/")