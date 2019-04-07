# gls

This library is a part of [Gls-Web](https://github.com/lbacik/gls-web) application.

Its goal is to provide class to render objects (Gls) that contains one or more animated elements called "snakes".  

## installation

[npm](https://www.npmjs.com/package/@lbacik/gls)

    npm i @lbacik/gls
    
## Gls json file structure

Example of Gls json file (more examples you can find at
[Gls-Web repository](https://github.com/lbacik/gls-web/tree/master/examples):

    {
        "worms": [
            {
                "path": [
                    [x, y],
                    ...
                ],
                "head": [x, y],
                "drawHead": true,
                "length": 100,
                "direction": false,
                "step": 2,
                "color": "lightskyblue",
                "width": 2,
                "pathPoints": true,
                "pathPointsColor": "red",
                "visible": true
            }
        ]
    }

## TODO

* use [json-schema](https://json-schema.org) to describe (and validate) Gls json file
