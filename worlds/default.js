    // Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
    // https://croquet.io
    // info@croquet.io
    
    export function init(Constants) {
        Constants.AvatarNames = ["newwhite",  "marchhare", "queenofhearts", "cheshirecat", "alice"];
    
        /* Alternatively, you can specify a card spec for an avatar,
           instead of a string for the partical file name, to create your own avatar.
           You can add behaviorModules here. Also, if the system detects a behavior module
           named AvatarEventHandler, that is automatically installed to the avatar.
            {
                type: "3d",
                modelType: "glb",
                name: "rabbit",
                dataLocation: "./assets/avatars/newwhite.zip",
                dataRotation: [0, Math.PI, 0],
                dataScale: [0.3, 0.3, 0.3],
            }
        */
    
        Constants.ExcludedSystemBehaviorModules = ["avatarEvents.js"];
        Constants.UserBehaviorDirectory = "behaviors/default";
        Constants.UserBehaviorModules = [
            "avatarEvents.js", "csmLights.js", 'halloweenLights.js', 'jumpWorld.js', 'spideyJumpOnApproach.js', 'synchronousLoad.js', 'urlLink.js'
        ];
    
        Constants.DefaultCards = [
            {
                card: {
                    name:"world model",
                    layers: ["walk"],
                    type: "3d",
                    singleSided: true,
                    shadow: true,
                    translation:[0, -1.7, 0],
                    placeholder: true,
                    placeholderSize: [400, 0.1, 400],
                    placeholderColor: 0x808080,
                    placeholderOffset: [0, 0, 0],
                    // behaviorModules: ['LoadCards']
                    // behaviorModules: ['SynchronousCardLoader']
                }
            },
            {
                card: {
                    name: "light",
                    layers: ["light"],
                    type: "lighting",
                    behaviorModules: ["Light"],
                    dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                    fileName: "/abandoned_parking_4k.jpg",
                    dataType: "jpg",
                }
            },
            {
                card: {
                    animationClipIndex:0,
                    animationStartTime: 4365797,
                    animationProximateDistance: 50,
                    animationCheckInterval: 20,
                    animationProximateAnimationClip: 12,
                    animationDistantAnimationClip: 4,
                    behaviorModules: ['SpideyJumpOnApproach'],
                    delayAfterJump: 1000,
                    name: '/spiderman-rigged.glb',
                    fileName: '/spiderman-rigged.glb',
                    dataLocation: "3nkvssiWbp4Kp3XVeZZoG39fIaYeDr7K0gMYQqBjPja4BhoaHh1UQUEIBwILHUAbHUANHAEfGwsaQAcBQRtBAAchHCUoWFtcBiApOwA9XB4AGiVYKj88XCcfXEENAQNAGwIaBx0HA0ACBwAKD0AMCxwADxwKQAMHDRwBGAscHQtBBVsmDDxaFzQhAyEoXxgpIzsUGjYJJF8_Pj1aHgMLNAk7Vg9aLF8oXBknI0EKDxoPQSocXgsgACUkFiIdWzEaNiEWWwAkMQ1YCiUUASkGNhgiKgQ3L1kKLwhdFB0",
                    dataScale: [226, 226, 226],
                    layers: ['pointer'],
                    modelType: 'glb',
                    rotation:  [-0.007537241996760254, 0.23213362494298506, 0.04412154985861157, 0.9716534665157047],
                    scale: [0.5, 0.5, 0.5],
                    shadow: true,
                    singleSided: true,
                    translation:[0.14, -1.48, -11],
                    translationBeforeJump: [0.14, -1.48, -11],
                    translationAfterJump: [0.14, -1.48, -6],
                    type: '3d'
                }
            },
            {
                card: {
                    cornerRadius: 0.02,
                    loadSynchonously: true,
                    behaviorModules: ["URLLink"],
                    cardURL: "https://www.target.com/p/marvel-spider-man-legends-series-peter-b-parker-action-figure/-/A-87012329",
                    fileName: "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    rotation: [0, 0, 0],
                    scale: [2.55, 2.55, 2.55],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3c7YYZ7SeumAdf-9ifGiTssSRECTvVMNVx4Cf2ly3zO0CxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMDQosESglVVZRCy0kNg0wURMNFyhVJzIxUSoSUUwADA5NFg8XChAKDk0PCg0HAk0BBhENAhEHTQ4KABEMFQYREAZMUxRWMlQ0AgArThQqIDA0EyxaBlEpIRQSCyQrETMIW1sOJ1cXPFEuFCklLkwHAhcCTAoqVVJRJVoLJwgpVCkFLQ00LTNbMA0xFAsFCREQMgAMG1YXThQwGzQlOQQ",
                    textureType: "image",
                    translation: [0.198, -0.150, -11.829],
                    type: "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "Summer-Poster.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Summer-Poster.png",
                    "rotation": [
                        null,
                        null,
                        null,
                        null
                    ],
                    "scale": [
                        2.8134830868968894,
                        2.8134830868968894,
                        2.8134830868968894
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "34uXMvNRPx9GuFj7bp5s9eiMLJHT-z3WChRt7Ii2_BXoXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbWl17Rn9yAgEGXHpzYVpnBkRaQH8CcGVmBn1FBhtXW1kaQVhAXUddWRpYXVpQVRpWUUZaVUZQGlldV0ZbQlFGR1EbZQNTUmxAW2xETAdWQHAEVX0MAA0BZ3ZQAlNleGd3YQZuX1JbAWwHfU1rDBtQVUBVG3pWeE5_WUd9Akx3BmZTU01SQXtWUHx5XVlkYlVnRXJ_e3Z5AV18cm1MXWE",
                    "textureType": "image",
                    "translation": [
                        -3.0065266451330945,
                        0,
                        -8.054964019595625
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "Christmas-Poster.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Christmas-Poster.png",
                    "rotation": [
                        0,
                        0.7237099543549771,
                        0,
                        0.6901042689097902
                    ],
                    "scale": [
                        4.020703324814061,
                        4.020703324814061,
                        4.020703324814061
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3C7pLwmb9qZ1NFKCbS9kisDowpe_bBG-_9Dh5qgOWzfYKzc3MzB5bGwlKi8mMG02MG0gMSwyNiY3bSosbDZsLSoMMQgFdXZxKw0EFi0QcTMtNwh1BxIRcQoycWwgLC5tNi83KjAqLm0vKi0nIm0hJjEtIjEnbS4qIDEsNSYxMCZsEnQkJRs3LBszO3AhNwdzIgp7d3p2EAEndSQSDxAAFnEZKCUsdhtwCjoce2wnIjcibAZzCDIpFC0tKgg5GhEIDRQqcBIWBjkhMBsXCQsaegcWLXo5DAglMS5ydw4",
                    "textureType": "image",
                    "translation": [
                        -0.9824268760068162,
                        -0.2990113590235549,
                        -11.980274028730268
                    ],
                    "type": "2d"
                }
            },

            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "Summer-Poster.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Summer-Poster.png",
                    "rotation": [
                        0,
                        0,
                        0,
                        0
                    ],
                    "scale": [
                        4.899302937007668,
                        4.899302937007668,
                        4.899302937007668
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "34uXMvNRPx9GuFj7bp5s9eiMLJHT-z3WChRt7Ii2_BXoXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbWl17Rn9yAgEGXHpzYVpnBkRaQH8CcGVmBn1FBhtXW1kaQVhAXUddWRpYXVpQVRpWUUZaVUZQGlldV0ZbQlFGR1EbZQNTUmxAW2xETAdWQHAEVX0MAA0BZ3ZQAlNleGd3YQZuX1JbAWwHfU1rDBtQVUBVG3pWeE5_WUd9Akx3BmZTU01SQXtWUHx5XVlkYlVnRXJ_e3Z5AV18cm1MXWE",
                    "textureType": "image",
                    "translation": [
                        -2.4777855657131433,
                        0.923600081551349,
                        -9.058288163543128
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "behaviorModules": [],
                    "cornerRadius": 0.02,
                    "fileName": "Easter-Shop.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Easter-Shop.png",
                    "rotation": [
                        0,
                        -0.704586136866266,
                        0,
                        0.7096184719522679
                    ],
                    "scale": [
                        5.151613918539466,
                        5.151613918539466,
                        5.151613918539466
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3PdMexo-NDIIXeyQWJmeWw4CfGshwkbDtFeAnUKSaKx8OCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_PjkfIhsWZmViOB4XBT4DYiA-JBtmFAECYhkhYn8zPz1-JTwkOSM5PX48OT40MX4yNSI-MSI0fj05MyI_JjUiIzV_AWc3NggkPwggKGMyJBRgMRloZGllAxI0ZjcBHAMTBWIKOzY_ZQhjGSkPaH80MSQxfxplGDlnGmABMwISAWIAYCgYITkzCjsZNTUCaR0fYSooZyNhNGEXGQAJFSc",
                    "textureType": "image",
                    "translation": [
                        4.328580661947529,
                        -0.5974997141291118,
                        -11.93433912152826
                    ],
                    "type": "2d"
                }
            },
            {
                card:{
                    jumpCheckInterval: 20,
                    jumpDistance: 1,
                    translationAfterJump: [-49, -0.01, 123.46],
                    targetURL: "https://engagelively.github.io/halloween-farm/?q=9y8pczo6w0#pw=wj16F7vGj3OK5u6LuY8eyA",
                    cornerRadius: 0.02,
                    fileName: "HALLOWEEN.png",
                    fullBright: true,
                    layers: ["pointer"],
                    behaviorModules: [ "JumpWorld" ],
                    reuseTab: true,
                    // replaceWorldTargetURL: "https://lin564.github.io/playground/?q=iumpzdabw0#pw=HuTXLIZY72VpemmSharYQg",
                    modelType: "img",
                    name: "HALLOWEEN.png",
                    "rotation": [
                        0.0006869564851698009,
                        -0.012977217723439094,
                        -0.002929736170799331,
                        0.9999112643414494
                    ],
                    "scale": [
                        6.343163384224089,
                        6.343163384224089,
                        6.343163384224089
                    ],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3YRRea1Kjzl1bhpnaZg5VRtrrXd2rs0LWS7HIKP4qO9EMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2NzAWKxIfb2xrMRceDDcKayk3LRJvHQgLaxAoa3Y6NjR3LDUtMCowNHc1MDc9OHc7PCs3OCs9dzQwOis2LzwrKjx2CG4-PwEtNgEpIWo7LR1pOBBhbWBsChs9bz4IFQoaDGsDMj82bAFqECAGYXY9OC04dh50EQ8-DwAObAYJLBA7Gho4NjUzbBwQGBcbGioPbTMOdBhtCj49ND41FG0",
                    textureType: "image",
                    "translation": [
                        1.4328390765797603,
                        1.315532783985745,
                        -24.989503537329156
                    ],
                    type: "2d"
                }
            },
            {
                "card": {
                    "dataLocation": "3osaNvZ4wYTwHpRDt10uB6XnJUad8ozLG3ktK1TgVEX8BxsbHxxVQEAJBgMKHEEaHEEMHQAeGgobQQYAQBpAAQYgHSQpWVpdByEoOgE8XR8BGyRZKz49XSYeXUAMAAJBGgMbBhwGAkEDBgELDkENCh0BDh0LQQIGDB0AGQodHApABFonDT1bFjUgAiApXhkoIjoVGzcIJV4-PzxbHwIKNQg6Vw5bLV4pXRgmIkALDhsOQCI4NRkKJR8GPiAnJwk3Hi0aPgk3K10JWCEaPg02NwkHBTwXCDkpIjkgDRw",
                    "dataScale": [
                        0.06388637900599145,
                        0.06388637900599145,
                        0.06388637900599145
                    ],
                    "fileName": "/Untitled.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/Untitled.glb",
                    "rotation": [
                        -0.008108574420876218,
                        -0.0028630859027421567,
                        -0.003781287086955304,
                        -0.9999558768405431
                    ],
                    "scale": [
                        10.131048105501707,
                        10.131048105501707,
                        10.131048105501707
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        1.625331674486722,
                        -1.5401324421970113,
                        -16.170105583440584
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3-3VogCBX12eOQUsKcOprw2ApA8ZIWWdZwk3aJED4pg4Q19fW1gRBARNQkdOWAVeWAVIWURaXk5fBUJEBF4ERUJkWWBtHR4ZQ2VsfkV4GVtFX2Adb3p5GWJaGQRIREYFXkdfQlhCRgVHQkVPSgVJTllFSllPBUZCSFlEXU5ZWE4EehxMTXNfRHNbUxhJX28bSmITHxIeeGlPHUx6Z3hofhlxQE1EHnMYYlJ0EwRPSl9KBB8ZH0B0T0ZZH15HGFFvE3R5WHQGbnppWm9GE09CBmRKbGlidFJYZR9GQWY",
                    "dataScale": [
                        1.012301534197556,
                        1.012301534197556,
                        1.012301534197556
                    ],
                    "fileName": "/store_shelves.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/store_shelves.glb",
                    "rotation": [
                        -0.002699200135557262,
                        0.17810073441367574,
                        0.0003283459215084048,
                        0.9840085034738741
                    ],
                    "scale": [
                        1.5828360211495835,
                        1.5828360211495835,
                        1.5828360211495835
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        5.238433738949451,
                        -1.2232305372097274,
                        -24.398759096356393
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3kg_F6Nm2aBpefLmoGp1teyTJtRVUBHonmFj3L6TFCC0Ax8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EBQIkGSAtXV5ZAyUsPgU4WRsFHyBdLzo5WSIaWUQIBAZFHgcfAhgCBkUHAgUPCkUJDhkFChkPRQYCCBkEHQ4ZGA5EOlwMDTMfBDMbE1gJHy9bCiJTX1JeOCkPXQw6JzgoPlkxAA0EXjNYIhI0U0QPCh8KRBNaHQg5Rgk_JjlSHTESLwUyOzwGBh4TAioiGSYeKSNaMhhYBgApOyMbLyI",
                    "dataScale": [
                        1.012301534197556,
                        1.012301534197556,
                        1.012301534197556
                    ],
                    "fileName": "/store_shelves.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/store_shelves.glb",
                    "rotation": [
                        0,
                        -0.25444428086441667,
                        0,
                        0.9670874355172803
                    ],
                    "scale": [
                        1.7491693924603147,
                        1.7491693924603147,
                        1.7491693924603147
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        14.324429810856975,
                        -1.2276278843995652,
                        -9.986557912571218
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3LKtXuLmD1-xrJZ-DIzSs0UO8U8nvWCUsZcne4C24RdIJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljIiUDPgcKenl-JAILGSIffjwiOAd6CB0efgU9fmMvIyFiOSA4JT8lIWIgJSIoLWIuKT4iLT4oYiElLz4jOik-PyljHXsrKhQ4IxQ8NH8uOAh8LQV0eHV5Hw4oeisdAB8PGX4WJyojeRR_BTUTdGMoLTgtY3Q_JAkvIS0VfQIdJz91Lz0DJ3oYHwUaFiMrfyk4fyUaKzs5HCYkOTQCOHg",
                    "dataScale": [
                        0.5931322557908479,
                        0.5931322557908479,
                        0.5931322557908479
                    ],
                    "fileName": "/beach_scene.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_scene.glb",
                    "rotation": [
                        0,
                        0.8344098041320194,
                        0,
                        0.5511445171353566
                    ],
                    "scale": [
                        1.2483295843262197,
                        1.2483295843262197,
                        1.2483295843262197
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -4.415557468829602,
                        -1.2273771488701564,
                        -6.326939772837574
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3TH5G3nb54FITEp0OkEhUas04inkf0MB9wI-dou9pa24PCAgJCdue3syPTgxJ3ohJ3o3JjslITEgej07eyF7Oj0bJh8SYmFmPBoTAToHZiQ6IB9iEAUGZh0lZns3Ozl6ITggPSc9OXo4PTowNXo2MSY6NSYwejk9NyY7IjEmJzF7BWMzMgwgOwwkLGc2IBBkNR1sYG1hBxYwYjMFGAcXAWYOPzI7YQxnHS0LbHswNSA1ez4ebTszNmMgORwTGzMNZxwOMRsBGxcbYxIGC2ATZRIzJxsaLB4LInkYGD8",
                    "dataScale": [
                        1.553902704558893,
                        1.553902704558893,
                        1.553902704558893
                    ],
                    "fileName": "/beach_chair.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_chair.glb",
                    "rotation": [
                        0,
                        0.9499750610367039,
                        0,
                        -0.3123257648806947
                    ],
                    "scale": [
                        0.5752912573725966,
                        0.5752912573725966,
                        0.5752912573725966
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -2.1241283993591082,
                        -1.0825545000148356,
                        -5.069569895032594
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3nRQCOrqAF66wOnysEYGT1p24K-Xi8BxWl39GvC3PzkgBhoaHh1UQUEIBwILHUAbHUANHAEfGwsaQAcBQRtBAAchHCUoWFtcBiApOwA9XB4AGiVYKj88XCcfXEENAQNAGwIaBx0HA0ACBwAKD0AMCxwADxwKQAMHDRwBGAscHQtBP1kJCDYaATYeFl0MGipeDydWWldbPSwKWAk_Ij0tO1w0BQgBWzZdJxcxVkEKDxoPQVwcPAkHQx5WJBtaI0MHXSEHK18sOgQoLCQhFikFHgVfPQIhGhwCWy8-Bl4",
                    "dataScale": [
                        1.9999999999999996,
                        1.9999999999999996,
                        1.9999999999999996
                    ],
                    "fileName": "/beach_ball_free_download.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_ball_free_download.glb",
                    "rotation": [
                        0,
                        -0.8456681201022835,
                        0,
                        0.5337091255006512
                    ],
                    "scale": [
                        0.18062810903092286,
                        0.18062810903092286,
                        0.18062810903092286
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -0.9458489798614356,
                        -0.9161039068567318,
                        -8.579609156043283
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3NgJ1YkK782ftsZHesVbJezNbdBzKOvBV32RMCOlNWccJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthICcBPAUIeHt8JgAJGyAdfD4gOgV4Ch8cfAc_fGEtISNgOyI6Jz0nI2AiJyAqL2AsKzwgLzwqYCMnLTwhOCs8PSthH3kpKBY6IRY-Nn0sOgp-Lwd2end7HQwqeCkfAh0NG3wUJSghexZ9BzcRdmEqLzovYTo9Gic6AyMmChgGfHc0GXYICnw_YyALORF4IDQhFws9JgIcBxkrNz8JOXY",
                    "dataScale": [
                        0.0007339766500094345,
                        0.0007339766500094345,
                        0.0007339766500094345
                    ],
                    "fileName": "/folder_1_beach_island.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/folder_1_beach_island.glb",
                    "rotation": [
                        0,
                        0.47465862352807664,
                        0,
                        0.8801699785328012
                    ],
                    "scale": [
                        4.044380994594994,
                        4.044380994594994,
                        4.044380994594994
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -6.356836602310773,
                        0.3620470768953044,
                        -7.646655887177482
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3CR8mIiQVCuxO_WCtyc-rAMnjHGJSpLlNKAV8gnp5zp4Kzc3MzB5bGwlKi8mMG02MG0gMSwyNiY3bSosbDZsLSoMMQgFdXZxKw0EFi0QcTMtNwh1BxIRcQoycWwgLC5tNi83KjAqLm0vKi0nIm0hJjEtIjEnbS4qIDEsNSYxMCZsEnQkJRs3LBszO3AhNwdzIgp7d3p2EAEndSQSDxAAFnEZKCUsdhtwCjoce2wnIjcibHB0dQ4JBQg1ERBwBRt7BiYTBSE5KXorCwArLyIRARAbORQaJnB1DCIiCiQ",
                    "dataScale": [
                        0.12719989552479655,
                        0.12719989552479655,
                        0.12719989552479655
                    ],
                    "fileName": "/floatie.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/floatie.glb",
                    "rotation": [
                        0,
                        0.6785963526509435,
                        0,
                        0.7345113955336815
                    ],
                    "scale": [
                        0.424558492835478,
                        0.424558492835478,
                        0.424558492835478
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -8.613582722919007,
                        -0.8064165751988089,
                        -8.77100196812706
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3Jqz_m218YKRjK_28wiqU7VjZ5rXKrosq3bderkVzexMIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lG30tLBI-JRI6MnkoPg56KwNyfnN_GQgufC0bBhkJH3gQISwlfxJ5AzMVcmUuKz4rZR4pGD4nOHwNOA0HPw0LDzp6AXsuECU8HgQmOxkbFS8TIBw_MzsCFT8eLxM",
                    "dataScale": [
                        1.9999999999999996,
                        1.9999999999999996,
                        1.9999999999999996
                    ],
                    "fileName": "/beach_ball_free_download.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_ball_free_download.glb",
                    "rotation": [
                        0,
                        0.42197014328630394,
                        0,
                        0.9066097275977884
                    ],
                    "scale": [
                        0.11721267796532309,
                        0.11721267796532309,
                        0.11721267796532309
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -8.023283702095553,
                        -0.8338559017564808,
                        -8.171703558363703
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/Summer Sale Announcement Post-1.jpg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/Summer Sale Announcement Post-1.jpg",
                    "rotation": [
                        null,
                        null,
                        null,
                        null
                    ],
                    "scale": [
                        4,
                        4,
                        4
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3EYccVvAjA57pfaJg_GoXAxzn32wbqh31a4YvKJsy7M0LTExNTZ_amojLCkgNmswNmsmNyo0MCAxaywqajBqKywKNw4Dc3B3LQsCECsWdzUrMQ5zARQXdww0d2omKihrMCkxLDYsKGspLCshJGsnIDcrJDchaygsJjcqMyA3NiBqFHIiIx0xKh01PXYnMQF1JAx9cXxwFgchcyIUCRYGEHcfLiMqcB12DDwafWohJDEkaiszaHcvIn0EEwwTJDISPHAPPQxoCHQpfA4NIwIWMhAxCScRFCgXFg52EAQ",
                    "textureType": "image",
                    "translation": [
                        -7.3032604496111375,
                        -0.011999999254941773,
                        -10.076317126168192
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/Summer Sale Announcement Post-1.jpg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/Summer Sale Announcement Post-1.jpg",
                    "rotation": [
                        0,
                        0.2713432865409491,
                        0,
                        0.962482634050691
                    ],
                    "scale": [
                        5.378246148967929,
                        5.378246148967929,
                        5.378246148967929
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3NKVt12_8a_h-zkMHssR7SY4FKVLdfk7RWcZUA4edKuwJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthICcBPAUIeHt8JgAJGyAdfD4gOgV4Ch8cfAc_fGEtISNgOyI6Jz0nI2AiJyAqL2AsKzwgLzwqYCMnLTwhOCs8PSthH3kpKBY6IRY-Nn0sOgp-Lwd2end7HQwqeCkfAh0NG3wUJSghexZ9BzcRdmEqLzovYX5-JBchFiJ4KhspDAw7HXkrfhYIOR4NPiN2DRoJfikfFxE7DCM-eX8cB3Y",
                    "textureType": "image",
                    "translation": [
                        -8.921957571427829,
                        0.7352324731028392,
                        -11.498287145535441
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "dataLocation": "3JJcGl3mCiUuCugwZ4TLpK2K4n5iwK7FYF0mjsa8K0CYIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lJCMFOAEMfH94IgQNHyQZeDokPgF8DhsYeAM7eGUpJSdkPyY-IzkjJ2QmIyQuK2QoLzgkKzguZCcjKTglPC84OS9lG30tLBI-JRI6MnkoPg56KwNyfnN_GQgufC0bBhkJH3gQISwlfxJ5AzMVcmUuKz4rZSJ9ASAYLCg9JD8ABy4CMBJ7BTwZGj0QZxscLH1nJAwLGAMhejAFAQ0cDH4",
                    "dataScale": [
                        0.22024011724700326,
                        0.22024011724700326,
                        0.22024011724700326
                    ],
                    "fileName": "/Ghost.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/Ghost.glb",
                    "rotation": [
                        0,
                        0.5279902766687085,
                        0,
                        0.8492504152152653
                    ],
                    "scale": [
                        0.350826502209824,
                        0.350826502209824,
                        0.350826502209824
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -3.5944071706849696,
                        -1.0627166468690248,
                        -20.08623928940154
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/My project-1.jpg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/My project-1.jpg",
                    "rotation": [
                        -0.0027706773629466073,
                        -0.4910022916059908,
                        -0.005237073527305849,
                        0.8711381325860359
                    ],
                    "scale": [
                        10.166861929367794,
                        10.166861929367794,
                        10.166861929367794
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3HItMrumtEoAaAy5yhSeSVfUJyPOZsUlj-FifJ2dhGtcIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nJiEHOgMOfn16IAYPHSYbejgmPAN-DBkaegE5emcrJyVmPSQ8ITshJWYkISYsKWYqLTomKTosZiUhKzonPi06Oy1nGX8vLhA8JxA4MHsqPAx4KQFwfHF9Gwosfi8ZBBsLHXoSIy4nfRB7ATEXcGcsKTwpZzwvJ34ABxIrAiIaLSocJwYfIw0qfioEO3gCAgAZAXocMisNKgEtKicEIgk",
                    "textureType": "image",
                    "translation": [
                        6.206571203611363,
                        0.9790311026558243,
                        -22.7503940237865
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "dataLocation": "30bqQ-91dTUv57GjJG5OSmGeDEf9RJfyq9IetkldjyaIWEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfXll_Qnt2BgUCWH53ZV5jAkBeRHsGdGFiAnlBAh9TX10eRVxEWUNZXR5cWV5UUR5SVUJeUUJUHl1ZU0JfRlVCQ1UfYQdXVmhEX2hASANSRHQAUXkIBAkFY3JUBldhfGNzZQJqW1ZfBWgDeUlvCB9UUURRH156Q2JkBUpDVG9jBFFdZHp-dHpVAnVHAmZGBn4DY2EDXGBadR0CZFVGeQQ",
                    "dataScale": [
                        0.1714095948609297,
                        0.1714095948609297,
                        0.1714095948609297
                    ],
                    "fileName": "/cauldron.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/cauldron.glb",
                    "rotation": [
                        0,
                        -0.2308411565208257,
                        0,
                        0.9729914493232341
                    ],
                    "scale": [
                        0.34969980767612324,
                        0.34969980767612324,
                        0.34969980767612324
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -2.067041894284494,
                        -1.288597787471652,
                        -24.198009879057956
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/AdobeStock_439674303.jpeg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/AdobeStock_439674303.jpeg",
                    "rotation": [
                        null,
                        null,
                        null,
                        null
                    ],
                    "scale": [
                        4,
                        4,
                        4
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3_kQDzamClw5KAyOil5cWHEWdIkUmQfFLalq6AqdBlsMR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAQUZgXWRpGRodR2FoekF8HV9BW2QZa359HWZeHQBMQEIBWkNbRlxGQgFDRkFLTgFNSl1BTl1LAUJGTF1AWUpdXEoAfhhISXdbQHdfVxxNW2sfTmYXGxYafG1LGUh-Y3xseh11RElAGnccZlZwFwBLTltOAH9JQ2VlZEBAbH5_V2FdV3ZITFcddUNqekJ7HmF6exZLfB0aHntWXEsXFkg",
                    "textureType": "image",
                    "translation": [
                        -1.5153467846484223,
                        -0.011999999254941773,
                        -18.76863081050234
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/AdobeStock_439674303.jpeg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/AdobeStock_439674303.jpeg",
                    "rotation": [
                        0.00329658388397064,
                        -0.4959315027209391,
                        0.004826588652979507,
                        0.8683419724887322
                    ],
                    "scale": [
                        7.724439120837788,
                        7.724439120837788,
                        7.724439120837788
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3BHsTZyMhuHQQ6Fdvuonrea0aQkRNDsIQr1RMAoHJnCAKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtLCsNMAkEdHdwKgwFFywRcDIsNgl0BhMQcAszcG0hLS9sNy42KzErL2wuKywmI2wgJzAsIzAmbC8rITAtNCcwMSdtE3UlJBo2LRoyOnEgNgZyIwt6dnt3EQAmdCUTDhEBF3AYKSQtdxpxCzsdem0mIzYjbSQHMSETCgUxcQA7dyF6BxAIDSgdLAYHLiF7Ey8sFBg2dSA0KAYIdjA2Gi0",
                    "textureType": "image",
                    "translation": [
                        -3.377046315347245,
                        0.42018966608970376,
                        -18.355168659270483
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/AdobeStock_174946357.jpeg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/AdobeStock_174946357.jpeg",
                    "rotation": [
                        0.004966540773744437,
                        -0.46451863469843707,
                        -0.010421237546251938,
                        -0.8854880966442447
                    ],
                    "scale": [
                        3.9767081968800913,
                        3.9767081968800913,
                        3.9767081968800913
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3ckukdGE1k2W7a7NgTE8BAYR9NT1useeYcM6PjJfpGgICxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMDQosESglVVZRCy0kNg0wURMNFyhVJzIxUSoSUUwADA5NFg8XChAKDk0PCg0HAk0BBhENAhEHTQ4KABEMFQYREAZMMlQEBTsXDDsTG1ABFydTAipbV1pWMCEHVQQyLzAgNlE5CAUMVjtQKho8W0wHAhcCTC4RCQwvIDUBGlAZLFFXFA0KEVs8IDAhECoyGSkRACdXAQEVWzEXUw8SJzI",
                    "textureType": "image",
                    "translation": [
                        -4.292774834892541,
                        0.2856678078088565,
                        -23.55607516126703
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "dataLocation": "3ul2ZNTYZBCjAFgMfk5PhZXvO6mRMgaKCNFs8HkopVjsHQEBBQZPWloTHBkQBlsABlsWBxoEABABWxwaWgBaGxw6Bz4zQ0BHHTsyIBsmRwUbAT5DMSQnRzwER1oWGhhbABkBHAYcGFsZHBsRFFsXEAcbFAcRWxgcFgcaAxAHBhBaJEISEy0BGi0FDUYXATFFFDxNQUxAJjcRQxIkOSY2IEcvHhMaQC1GPAwqTVoRFAEUWiM7GkIxJEBADRBHWEQDEyEjRh8YJRA-BhoPDTkYTTIQRgQPEVgwLzsbLxo",
                    "dataScale": [
                        39.0141534620259,
                        39.0141534620259,
                        39.0141534620259
                    ],
                    "fileName": "/broomstick_v2.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/broomstick_v2.glb",
                    "rotation": [
                        0.3954664252799368,
                        0.1904635861617061,
                        0.8898846843480994,
                        -0.12423838933845475
                    ],
                    "scale": [
                        0.8100002900796356,
                        0.8100002900796356,
                        0.8100002900796356
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -3.065093868302753,
                        1.7879959885504169,
                        -24.93497782026719
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/AdobeStock_121546512.jpeg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/AdobeStock_121546512.jpeg",
                    "rotation": [
                        0.005876770972765181,
                        -0.864677808037466,
                        -0.003413745282503593,
                        0.5022808957083705
                    ],
                    "scale": [
                        5.916688707178135,
                        5.916688707178135,
                        5.916688707178135
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3wpvZcR2GbW0JFUKoRWKhKcoFJyMGxl08m_xUicjcLvkHwMDBwRNWFgRHhsSBFkCBFkUBRgGAhIDWR4YWAJYGR44BTwxQUJFHzkwIhkkRQcZAzxBMyYlRT4GRVgUGBpZAhsDHgQeGlkbHhkTFlkVEgUZFgUTWRoeFAUYARIFBBJYJkAQES8DGC8HD0QVAzNHFj5PQ05CJDUTQRAmOyQ0IkUtHBEYQi9EPg4oT1gTFgMWWBwOPwIzBAYRWh4WRC4lI0IQJA84GgIeGSg_Az1AQCYuIjwtAycaET1DTyY",
                    "textureType": "image",
                    "translation": [
                        5.747710049591871,
                        0.720124059889908,
                        -17.244810621617766
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "dataLocation": "30zg_8Nqpe_IyqcLcCuG5aSI91a4HKNOker2jZt02ZeMWEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfXll_Qnt2BgUCWH53ZV5jAkBeRHsGdGFiAnlBAh9TX10eRVxEWUNZXR5cWV5UUR5SVUJeUUJUHl1ZU0JfRlVCQ1UfYQdXVmhEX2hASANSRHQAUXkIBAkFY3JUBldhfGNzZQJqW1ZfBWgDeUlvCB9UUURRH2laRkR6X1xaB15bRFVaB2oEVHcJcQVCf0J7eVd2SmNIc3pVc0BcYAICcwA",
                    "dataScale": [
                        13.889566591338182,
                        13.889566591338182,
                        13.889566591338182
                    ],
                    "fileName": "/mcfarlanes_dragons__sybaris_berserker_clan.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/mcfarlanes_dragons__sybaris_berserker_clan.glb",
                    "rotation": [
                        0,
                        0.9988089204951737,
                        0,
                        -0.04879283081833108
                    ],
                    "scale": [
                        0.8091962049296048,
                        0.8091962049296048,
                        0.8091962049296048
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        0.3297975749761519,
                        -2.3788759949721046,
                        -14.342672683552342
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3rXcfvIQS_pQ9jhuzelnLJBm5ihYh3QJVd8-wc6g-nDkGgYGAgFIXV0UGx4XAVwHAVwRAB0DBxcGXBsdXQddHBs9ADk0REdAGjw1JxwhQAIcBjlENiMgQDsDQF0RHR9cBx4GGwEbH1weGxwWE1wQFwAcEwAWXB8bEQAdBBcAARddI0UVFCoGHSoCCkEQBjZCEztKRktHITAWRBUjPiExJ0AoGRQdRypBOwstSl0WEwYTXRRCSxhFQhkiSiceQghGIioXQREbBRBGAi1HRjcKEQQ4AStDGgsLCEsqQzs",
                    "dataScale": [
                        10.55904887336377,
                        10.55904887336377,
                        10.55904887336377
                    ],
                    "fileName": "/harley_quinn.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/harley_quinn.glb",
                    "rotation": [
                        0,
                        0.05291464176969397,
                        0,
                        0.9985990389973269
                    ],
                    "scale": [
                        0.6798398837151944,
                        0.6798398837151944,
                        0.6798398837151944
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        4.164539649215347,
                        0.31501771600931283,
                        -22.906106814020806
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "animationClipIndex": 0,
                    "animationStartTime": 25164206,
                    "dataLocation": "3sZoLtGQhmzBp9ZcfeaAEKQEprgVl5nGmnn22abx5c2IGwcHAwBJXFwVGh8WAF0GAF0QARwCBhYHXRocXAZcHRo8ATg1RUZBGz00Jh0gQQMdBzhFNyIhQToCQVwQHB5dBh8HGgAaHl0fGh0XEl0RFgEdEgEXXR4aEAEcBRYBABZcIkQUFSsHHCsDC0ARBzdDEjpLR0pGIDEXRRQiPyAwJkEpGBUcRitAOgosS1wXEgcSXEUpEUQsJjgmKiIRBCcpPj9AQT09AB8bMglKIDwWChAYAREiPx48OSUYFiY",
                    "dataScale": [
                        2.8063229172069737,
                        2.8063229172069737,
                        2.8063229172069737
                    ],
                    "fileName": "/bat.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/bat.glb",
                    "rotation": [
                        null,
                        null,
                        null,
                        null
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -0.81915775255924,
                        -0.011999999254941773,
                        -19.452100008185365
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "animationClipIndex": 0,
                    "animationStartTime": 25614421,
                    "dataLocation": "35IYFdWJDDzWxRL52Si4yGf0mEtI9Rmo4HUcO930gnwMXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaW1x6R35zAwAHXXtyYFtmB0VbQX4DcWRnB3xEBxpWWlgbQFlBXEZcWBtZXFtRVBtXUEdbVEdRG1hcVkdaQ1BHRlAaZAJSU21BWm1FTQZXQXEFVHwNAQwAZndRA1JkeWZ2YAdvXlNaAG0GfExqDRpRVEFUGl4DXkJ7YFsGcgR5WXpSQ2Z3DVJ6BWVNBn9wT0QNVwFzfn1zdnoYcwNmQnw",
                    "dataScale": [
                        2.8063229172069737,
                        2.8063229172069737,
                        2.8063229172069737
                    ],
                    "fileName": "/bat.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/bat.glb",
                    "rotation": [
                        -0.010876081607638711,
                        0.9643494189780518,
                        0.03466504881087899,
                        -0.26212638813461225
                    ],
                    "scale": [
                        0.567824643194094,
                        0.567824643194094,
                        0.567824643194094
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        6.47258314944623,
                        -0.011999999254941773,
                        -20.341698974907857
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "animationClipIndex": 0,
                    "animationStartTime": 25687408,
                    "dataLocation": "34j5Nvavoow61SCiOuEtf0IXVvo3UmsdlymDdzU8h9vcXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbWl17Rn9yAgEGXHpzYVpnBkRaQH8CcGVmBn1FBhtXW1kaQVhAXUddWRpYXVpQVRpWUUZaVUZQGlldV0ZbQlFGR1EbZQNTUmxAW2xETAdWQHAEVX0MAA0BZ3ZQAlNleGd3YQZuX1JbAWwHfU1rDBtQVUBVG3BCDFYARUx4Z0V2XVlhTFJaBXdFfkFZfUxfewNdRHdORlFac3lbbUduUnU",
                    "dataScale": [
                        1.3933151970856748,
                        1.3933151970856748,
                        1.3933151970856748
                    ],
                    "fileName": "/monster_eye_bat.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/monster_eye_bat.glb",
                    "rotation": [
                        0,
                        0.8580172479225154,
                        0,
                        -0.5136208740573858
                    ],
                    "scale": [
                        0.5037676058794165,
                        0.5037676058794165,
                        0.5037676058794165
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        4.624797119476741,
                        -0.011999999254941773,
                        -16.095666045221492
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/McFarlane-Toy-Grey.gif",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/McFarlane-Toy-Grey.gif",
                    "rotation": [
                        0,
                        -0.4864131412514064,
                        0,
                        0.8737289373815769
                    ],
                    "scale": [
                        5.2827406354948225,
                        5.2827406354948225,
                        5.2827406354948225
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "355ta6Kyh2OxV_nwBtxxvu2Bx3G8-ZGA9751zGo5KkZwXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaW1x6R35zAwAHXXtyYFtmB0VbQX4DcWRnB3xEBxpWWlgbQFlBXEZcWBtZXFtRVBtXUEdbVEdRG1hcVkdaQ1BHRlAaZAJSU21BWm1FTQZXQXEFVHwNAQwAZndRA1JkeWZ2YAdvXlNaAG0GfExqDRpRVEFUGntlU2Bfc2V8fHBSZExiYkBganJbYEZTUVN6YEQAeXp7cmFYWAdmbGFTYwU",
                    "textureType": "image",
                    "translation": [
                        18.50241353767057,
                        0.8813794261186808,
                        -22.431750527172323
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    "rotation": [
                        0,
                        -0.01599184336182358,
                        0,
                        -0.999872122296592
                    ],
                    "scale": [
                        4.016608579621155,
                        4.016608579621155,
                        4.016608579621155
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "3K6ZG4PZ_7g1rrTPdSR31goHswJ08EvAMgC1K7w2WII8Iz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kJSIEOQANfX55IwUMHiUYeTslPwB9DxoZeQI6eWQoJCZlPic_IjgiJmUnIiUvKmUpLjklKjkvZSYiKDkkPS45OC5kGnwsLRM_JBM7M3gpPw97KgJzf3J-GAkvfSwaBxgIHnkRIC0kfhN4AjIUc2QvKj8qZAYgCgI9LSEoBCZ7GX8PGxQDLzp4fDE5BiIMMXw5KDM5PQUHfB0iOg8pJR4",
                    "textureType": "image",
                    "translation": [
                        6.093040091560714,
                        0.7894101221239387,
                        -9.223571070903429
                    ],
                    "type": "2d"
                }
            },
            {
                "card": {
                    "animationClipIndex": 0,
                    "animationStartTime": 28172044,
                    "dataLocation": "3_vHRevvJ1p-mAKt2wGMoNy1MrdDpzadx77ogXUk4rSUR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAQUZgXWRpGRodR2FoekF8HV9BW2QZa359HWZeHQBMQEIBWkNbRlxGQgFDRkFLTgFNSl1BTl1LAUJGTF1AWUpdXEoAfhhISXdbQHdfVxxNW2sfTmYXGxYafG1LGUh-Y3xseh11RElAGnccZlZwFwBLTltOAFp9flZWH2hDAlZGfXluGX5FVRxuZn5gRExCY2tOHQJdSmhLHBtsZGEXflw",
                    "dataScale": [
                        226.00709485280012,
                        226.00709485280012,
                        226.00709485280012
                    ],
                    "fileName": "/spiderman_rigged.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/spiderman_rigged.glb",
                    "rotation": [
                        0.04905166985777451,
                        -0.11925331718766614,
                        -0.1528827112926592,
                        0.979795619816555
                    ],
                    "scale": [
                        0.6842442551859657,
                        0.6842442551859657,
                        0.6842442551859657
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        6.290157754339941,
                        0.545634665735858,
                        -8.525680758799048
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3sQLDIg13W3TagTYSTi8r01R9kYMB5R9CzppqoGfNxEcGwcHAwBJXFwVGh8WAF0GAF0QARwCBhYHXRocXAZcHRo8ATg1RUZBGz00Jh0gQQMdBzhFNyIhQToCQVwQHB5dBh8HGgAaHl0fGh0XEl0RFgEdEgEXXR4aEAEcBRYBABZcIkQUFSsHHCsDC0ARBzdDEjpLR0pGIDEXRRQiPyAwJkEpGBUcRitAOgosS1wXEgcSXAk-KyUSGRsqPgdLPSonFkAjMEMEBgQ0QBdDHD4EORkgBQUJRCAJQTIgQD4",
                    "dataScale": [
                        0.03568787449659961,
                        0.03568787449659961,
                        0.03568787449659961
                    ],
                    "fileName": "/spawn.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/spawn.glb",
                    "rotation": [
                        0,
                        0.1940033932467275,
                        0,
                        0.981000858006126
                    ],
                    "scale": [
                        0.6383364188451939,
                        0.6383364188451939,
                        0.6383364188451939
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        10.231383228905006,
                        -1.1305402045367556,
                        -11.60224896407813
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3dP5sS83ViCNxbZY-NG92aO-VGXgmR1EdojdoRBkgALgDBAQFBdeS0sCDQgBF0oRF0oHFgsVEQEQSg0LSxFLCg0rFi8iUlFWDCojMQo3VhQKEC9SIDU2Vi0VVksHCwlKEQgQDRcNCUoIDQoABUoGARYKBRYASgkNBxYLEgEWFwFLNVMDAjwQCzwUHFcGECBUBS1cUF1RNyYAUgM1KDcnMVY-DwILUTxXLR07XEsABRAFSyYyLV1SDSoMPgkcCyYUPRIRXBACCBwuPSI-NCEVHhwKUShRAwINLw0CUg8",
                    "dataScale": [
                        0.27246656850094914,
                        0.27246656850094914,
                        0.27246656850094914
                    ],
                    "fileName": "/spawn (1).glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/spawn (1).glb",
                    "rotation": [
                        0,
                        -0.7817510077365984,
                        0,
                        0.6235907006224619
                    ],
                    "scale": [
                        0.71751817958703,
                        0.71751817958703,
                        0.71751817958703
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        10.471181948203657,
                        -1.1419337397316354,
                        -5.614709853314563
                    ],
                    "type": "3d"
                }
            }
        ];
    }
    
